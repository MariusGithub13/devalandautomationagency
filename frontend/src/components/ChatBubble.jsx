import React, { useEffect, useState } from "react";

/**
 * ChatBubble.jsx
 * 
 * Safe lazy-loaded LeadConnector chat widget.
 * Removes extra white banners injected by the widget itself (Firefox/Safari fix).
 */

const WIDGET_ID = "YOUR_WIDGET_ID_HERE"; // Replace with your widget ID

export default function ChatBubble() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);

    const SCRIPT_ID = "leadconnector-webchat-script";
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.dataset.widgetId = WIDGET_ID;
      script.dataset.resizer = "true";
      document.body.appendChild(script);
    }

    // 🔧 Remove & suppress default white banner injected by the widget
    const removeDefaultBanner = () => {
      const badBanners = document.querySelectorAll(
        '.hl_webchat__banner__container, .lc-banner, [data-testid="AnnouncementBanner"]'
      );
      badBanners.forEach(el => {
        el.style.display = "none";
        el.style.visibility = "hidden";
        el.style.opacity = "0";
      });
    };

    // Run immediately and re-run if widget reinjects banners
    const observer = new MutationObserver(removeDefaultBanner);
    observer.observe(document.body, { childList: true, subtree: true });
    removeDefaultBanner();

    return () => observer.disconnect();
  }, []);

  if (!ready) return null;

  return (
    <>
      {/* Defensive CSS — block LeadConnector banner styles */}
      <style>{`
        .hl_webchat__banner__container,
        .lc-banner,
        [data-testid="AnnouncementBanner"],
        .hl-powered-by-bubble {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          z-index: -9999 !important;
        }
      `}</style>

      {/* Custom launcher button */}
      <button
        type="button"
        aria-label="Open chat"
        onClick={() => {
          try {
            window.HLWidget?.open?.() || window.LC_API?.open_chat_window?.();
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