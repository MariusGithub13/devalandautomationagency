import React, { useEffect } from "react";

const ChatBubble = () => {
  useEffect(() => {
    const loadChatWidget = () => {
      if (document.getElementById("leadconnector-chat-script")) {
        console.info("[ChatBubble] Chat script already loaded.");
        return;
      }

      const script = document.createElement("script");
      script.id = "leadconnector-chat-script";
      script.async = true;
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.onload = () => console.info("[ChatBubble] LeadConnector loaded ✅");
      script.onerror = () => console.warn("[ChatBubble] Failed to load widget ❌");

      document.body.appendChild(script);
    };

    const removeChatWidget = () => {
      const script = document.getElementById("leadconnector-chat-script");
      if (script) script.remove();

      // Also remove the actual widget iframe if it's present
      const widgetFrame = document.querySelector("iframe[src*='leadconnectorhq']");
      if (widgetFrame) widgetFrame.remove();

      console.info("[ChatBubble] Chat widget removed 🧹");
    };

    const checkConsent = () => {
      try {
        const prefs = JSON.parse(localStorage.getItem("cookiePreferences"));
        const consentGiven =
          prefs && prefs.marketing === true && localStorage.getItem("cookieConsent");

        if (consentGiven) {
          loadChatWidget();
        } else {
          removeChatWidget();
        }
      } catch (err) {
        console.warn("[ChatBubble] Consent check failed:", err);
      }
    };

    // Check on mount
    checkConsent();

    // Watch for changes in cookie preferences dynamically
    const onStorageChange = (e) => {
      if (e.key === "cookiePreferences" || e.key === "cookieConsent") {
        checkConsent();
      }
    };
    window.addEventListener("storage", onStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener("storage", onStorageChange);
    };
  }, []);

  return null;
};

export default ChatBubble;