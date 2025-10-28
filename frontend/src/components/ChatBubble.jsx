import React, { useEffect, useState } from "react";

/**
 * LeadConnector chat widget embed
 *
 * Behavior:
 * - Injects the LeadConnector script once (guards against double-load)
 * - Assumes teaser / proactive welcome popup is disabled in LeadConnector settings
 * - Keeps bubble in the bottom-right above everything else
 * - Hides any leftover banner containers so we don't get the big white bar
 *
 * IMPORTANT:
 * This component should ONLY be rendered after marketing consent.
 * App.js is already responsible for that logic.
 */
const ChatBubble = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Prevent duplicate script injection across re-renders / route changes
    if (window.__leadConnectorInjected) {
      setLoaded(true);
      return;
    }

    window.__leadConnectorInjected = true;

    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.async = true;
    script.onload = () => {
      setLoaded(true);
    };
    script.onerror = () => {
      console.warn("LeadConnector widget failed to load");
    };

    document.body.appendChild(script);
  }, []);

  return (
    <>
      <style>{`
        /* Force chat bubble to live bottom-right, above cookie card and footer */
        .hl_webchat--bubble-launcher,
        .hl_iframe-container,
        .hl_webchat,
        .LeadConnector__Bubble {
          position: fixed !important;
          right: 16px !important;
          bottom: 16px !important;
          z-index: 999999 !important;
        }

        /* Hide any "banner"/"launcher bar" UI that LeadConnector sometimes injects
           (the wide white strip or welcome box). You've disabled teaser in settings,
           but this keeps us safe across browsers like Firefox. */
        .hl_webchat--bubble-launcher-banner,
        .LeadConnector__Banner,
        .LeadConnector__Wrapper,
        .LeadConnector__Teaser,
        .hl_webchat--popout-wrapper,
        .hl_webchat--teaser-container,
        .hl_webchat--teaser,
        .hl_webchat--banner-container {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          max-height: 0 !important;
          min-height: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          border: 0 !important;
          box-shadow: none !important;
          background: transparent !important;
        }
      `}</style>

      {/* We don't render visible UI ourselves.
         The script injects the floating bubble.
         `loaded` is just here if you ever want to debug or show a fallback.
      */}
      {loaded ? null : null}
    </>
  );
};

export default ChatBubble;