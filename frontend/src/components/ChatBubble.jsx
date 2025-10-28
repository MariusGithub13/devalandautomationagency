import React, { useEffect } from "react";

const ChatBubble = () => {
  useEffect(() => {
    // Check consent before loading chat widget
    try {
      const prefs = JSON.parse(localStorage.getItem("cookiePreferences"));
      const consentGiven =
        prefs && prefs.marketing === true && localStorage.getItem("cookieConsent");

      if (!consentGiven) {
        console.info("[ChatBubble] Marketing consent not given — chat disabled.");
        return;
      }

      // Avoid duplicate script injection
      if (document.getElementById("leadconnector-chat-script")) {
        console.info("[ChatBubble] Chat script already loaded.");
        return;
      }

      // Create script dynamically (LeadConnector / GHL widget)
      const script = document.createElement("script");
      script.id = "leadconnector-chat-script";
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://widgets.leadconnectorhq.com/loader.js"; // main chat loader URL
      script.onload = () => console.info("[ChatBubble] LeadConnector loaded ✅");
      script.onerror = () => console.warn("[ChatBubble] Failed to load widget ❌");

      document.body.appendChild(script);
    } catch (err) {
      console.warn("[ChatBubble] Error checking consent:", err);
    }
  }, []);

  return null; // nothing rendered directly — widget appears externally when loaded
};

export default ChatBubble;