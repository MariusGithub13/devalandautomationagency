// frontend/src/components/ChatBubble.jsx
// Loads LeadConnector chat widget with new widget ID
// Cookie consent is handled in index.html
// Uses interaction-based lazy loading for better mobile performance

import React, { useEffect } from "react";
import { loadScriptOnInteraction } from "../utils/lazyScriptLoader";

const WIDGET_ID = "692c19db36936d434b1c0208";
const SCRIPT_ID = "leadconnector-loader";

const ChatBubble = () => {
  useEffect(() => {
    // Avoid duplicate loads
    if (document.getElementById(SCRIPT_ID)) return;

    // Load chat widget after user interaction (scroll, touch, click) or 5s timeout
    const cleanup = loadScriptOnInteraction({
      src: "https://beta.leadconnectorhq.com/loader.js",
      id: SCRIPT_ID,
      timeout: 5000, // Wait up to 5 seconds for user interaction
      attributes: {
        "data-resources-url": "https://beta.leadconnectorhq.com/chat-widget/loader.js",
        "data-widget-id": WIDGET_ID,
        "type": "text/javascript"
      },
      onLoad: () => {
        if (process.env.NODE_ENV === 'development') {
          console.log('✅ Chat widget loaded successfully');
        }
      },
      onError: () => {
        if (process.env.NODE_ENV === 'development') {
          console.error('❌ Failed to load chat widget');
        }
      }
    });

    // Keep the script across route changes; no cleanup needed
    // The loadScriptOnInteraction utility already cleans up event listeners
    // after the script loads, so no memory leak occurs.
    // The script itself should persist across route changes for chat continuity.
    // return cleanup;
  }, []);

  return null;
};

export default ChatBubble;