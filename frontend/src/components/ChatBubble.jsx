// frontend/src/components/ChatBubble.jsx
// Loads LeadConnector chat widget. Vendor's white cookie banner
// will handle consent and activate marketing/chat accordingly.

import React, { useEffect } from "react";

const CHAT_WIDGET_URL = "https://widgets.leadconnectorhq.com/loader.js";
const SCRIPT_ID = "leadconnector-loader";

const ChatBubble = () => {
  useEffect(() => {
    // Avoid duplicate loads
    if (document.getElementById(SCRIPT_ID)) return;

    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.src = CHAT_WIDGET_URL;
    s.async = true;
    s.type = "text/javascript";
    document.body.appendChild(s);

    // keep the script across route changes; no cleanup
    // return () => s.remove();
  }, []);

  return null;
};

export default ChatBubble;