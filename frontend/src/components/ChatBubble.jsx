// frontend/src/components/ChatBubble.jsx
// Loads LeadConnector chat widget with new widget ID
// Cookie consent is handled in index.html

import React, { useEffect } from "react";

const WIDGET_ID = "692c19db36936d434b1c0208";
const SCRIPT_ID = "leadconnector-loader";

const ChatBubble = () => {
  useEffect(() => {
    // Avoid duplicate loads
    if (document.getElementById(SCRIPT_ID)) return;

    // Load chat widget only when browser is idle to avoid blocking critical rendering
    const loadChatWidget = () => {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = "https://beta.leadconnectorhq.com/loader.js";
      s.setAttribute(
        "data-resources-url",
        "https://beta.leadconnectorhq.com/chat-widget/loader.js"
      );
      s.setAttribute("data-widget-id", WIDGET_ID);
      s.async = true;
      s.type = "text/javascript";
      document.body.appendChild(s);
    };

    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadChatWidget, { timeout: 3000 });
    } else {
      // Fallback: delay load by 2 seconds
      setTimeout(loadChatWidget, 2000);
    }

    // keep the script across route changes; no cleanup
    // return () => s.remove();
  }, []);

  return null;
};

export default ChatBubble;