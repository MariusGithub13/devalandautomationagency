import React, { useEffect, useState } from "react";

const ChatBubble = () => {
  const [allowed, setAllowed] = useState(false);

  // Read user's marketing consent from localStorage
  useEffect(() => {
    try {
      const prefRaw = localStorage.getItem("cookiePreferences");
      if (!prefRaw) return;

      const pref = JSON.parse(prefRaw);
      if (pref && pref.marketing === true) {
        setAllowed(true);
      }
    } catch (err) {
      console.warn("Cookie prefs parse error:", err);
    }
  }, []);

  useEffect(() => {
    // 1. Inject global CSS overrides to kill vendor's extra consent banner
    //    and keep only our custom CookieConsent component.
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-chatbubble-style", "true");
    styleEl.innerHTML = `
      /* Hide any LeadConnector / GHL auto-cookie banners and popups */
      /* common classnames / attributes observed in preview */
      div[id*="ghl-cookie-banner"],
      div[class*="ghl-cookie-banner"],
      div[class*="cookie-consent"],
      div[class*="CookieBanner"],
      div[class*="cookieBanner"],
      div[class*="cookie-banner"],
      div[class*="CookieConsent"],
      div[class*="leadconnector-cookie"],
      div[class*="hl_cookie"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }

      /* Also hide any "We use cookies" floating card inside their chat frame */
      [class*="StyledCookieCard"],
      [data-testid*="cookie"][role="dialog"],
      [data-testid*="cookie"][class*="card"],
      [class*="cookieCardOuter"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }

      /*
        Make sure our own banner still floats above site content
        but below the chat bubble hotspot.
      */
      .devaland-cookie-banner-wrapper {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99998; /* just under chat bubble */
      }

      /* Force chat bubble container above everything else */
      .devaland-chatbubble-wrapper,
      #leadconnector-chat-widget,
      .LeadConnectorChatBubble,
      [data-testid="chat-widget-launcher"],
      [data-testid="launcher-button"],
      .GHLLauncherButton,
      .ghl-launcher,
      .hl_launcher {
        z-index: 99999 !important;
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  useEffect(() => {
    if (!allowed) return;

    // 2. Dynamically load the LeadConnector widget script only after consent
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.async = true;
    script.defer = true;

    // Your LeadConnector widget config
    script.onload = () => {
      // You may already have global config from your working version,
      // but if not, uncomment and fill this in:
      //
      // window.leadConnector = window.leadConnector || {};
      // window.leadConnector.appointmentWidget = {
      //   // config here if needed
      // };
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [allowed]);

  // Don't render anything visible ourselves.
  // The chat bubble is injected by the script once allowed === true.
  return (
    <div
      className="devaland-chatbubble-wrapper"
      style={{
        position: "fixed",
        right: "1rem",
        bottom: "1rem",
        width: 0,
        height: 0,
        zIndex: 99999,
        pointerEvents: "none",
      }}
    />
  );
};

export default ChatBubble;