import React, { useEffect, useState } from "react";

/**
 * ChatBubble.jsx
 * 
 * Adds the LeadConnector / HighLevel chat widget safely.
 * Prevents duplicate banners, handles client-only mount,
 * and allows lazy loading for performance.
 */

const WIDGET_ID = "68f8738a008ff3634bd246ee"; // <-- replace with your LeadConnector widget ID

export default function ChatBubble() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);

    const SCRIPT_ID = "leadconnector-webchat-script";

    // Prevent double injection
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.dataset.widgetId = WIDGET_ID;
    script.dataset.resizer = "true";
    document.body.appendChild(script);

    // Keep the script loaded (avoid ghost banners)
  }, []);

  // Hide unwanted duplicate banners
  const hideDefaultWidgetCSS = `
    .lc-banner,
    .hl_webchat__bubble__container + div[style*="z-index"],
    [data-testid="AnnouncementBanner"],
    .hl-powered-by-bubble {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
    }
  `;

  if (!ready) return null;

  return (
    <>
      {/* Hide duplicated banners */}
      <style dangerouslySetInnerHTML={{ __html: hideDefaultWidgetCSS }} />

      {/* Custom launcher button */}
      <button
        type="button"
        aria-label="Open chat"
        onClick={() => {
          try {
            if (window.HLWidget?.open) {
              window.HLWidget.open();
            } else if (window.LC_API?.open_chat_window) {
              window.LC_API.open_chat_window();
            } else {
              const iframe = document.querySelector(
                'iframe[src*="leadconnectorhq"]'
              );
              if (iframe) iframe.scrollIntoView({ behavior: "smooth" });
            }
          } catch (err) {
            console.warn("Chat open failed:", err);
          }
        }}
        className="
          fixed bottom-4 right-4 z-[9999]
          flex items-center gap-2
          rounded-full bg-gradient-to-r from-indigo-600 to-purple-600
          text-white shadow-lg shadow-purple-400/30
          px-4 py-3 text-sm font-semibold
          hover:scale-[1.03] active:scale-[0.98]
          transition-transform
        "
      >
        <span
          className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"
        />
        <span className="leading-none text-left">
          Chat with us <br />
          <span className="text-[10px] font-normal opacity-80">
            typically replies in &lt;5m
          </span>
        </span>
      </button>
    </>
  );
}