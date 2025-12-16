// frontend/src/components/ChatBubble.jsx
// Loads LeadConnector chat widget with deferred loading for performance
// Only loads after user interaction (scroll, touch, mouse) or 5-6s delay
// Cookie consent is handled in index.html

import React, { useEffect } from "react";
import { useDeferredLoad } from "../hooks/useDeferredLoad";

const WIDGET_ID = "692c19db36936d434b1c0208";
const SCRIPT_ID = "leadconnector-loader";

const ChatBubble = () => {
  // Defer loading until user interaction or 6 seconds (whichever comes first)
  const shouldLoad = useDeferredLoad(6000);

  useEffect(() => {
    // Only load when shouldLoad is true
    if (!shouldLoad) return;

    // Avoid duplicate loads
    if (document.getElementById(SCRIPT_ID)) return;

    // Performance optimization: Load chat widget after user shows engagement
    // This prevents blocking the critical rendering path and improves FCP/LCP
    const loadChatWidget = () => {
      if (process.env.NODE_ENV === 'development') {
        console.log('🤖 Loading LeadConnector chat widget (deferred)...');
      }

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
      
      s.onload = () => {
        if (process.env.NODE_ENV === 'development') {
          console.log('✅ LeadConnector chat widget loaded successfully');
        }
      };
      
      s.onerror = () => {
        console.error('❌ Failed to load LeadConnector chat widget');
      };

      document.body.appendChild(s);
    };

    // Use requestIdleCallback for optimal performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadChatWidget, { timeout: 1000 });
    } else {
      // Fallback: immediate load for browsers without requestIdleCallback
      loadChatWidget();
    }

    // Keep the script across route changes; no cleanup needed
  }, [shouldLoad]);

  return null;
};

export default ChatBubble;