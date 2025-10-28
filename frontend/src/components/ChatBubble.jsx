import React, { useEffect } from "react";

const CHAT_WIDGET_URL =
  "https://widgets.leadconnectorhq.com/loader.js"; // (example path – keep your real URL)

const COOKIE_PREF_KEY = "cookiePreferences";

function getMarketingAllowed() {
  try {
    const raw = localStorage.getItem(COOKIE_PREF_KEY);
    if (!raw) return false; // default OFF
    const parsed = JSON.parse(raw);
    return !!parsed.marketing;
  } catch {
    return false;
  }
}

const ChatBubble = () => {
  useEffect(() => {
    // 1. Check permission first (GDPR opt-in)
    const marketingOkay = getMarketingAllowed();
    if (!marketingOkay) {
      // user hasn't opted in -> do NOT load widget
      return;
    }

    // 2. Inject widget <script> only if allowed
    const script = document.createElement("script");
    script.src = CHAT_WIDGET_URL;
    script.async = true;
    script.type = "text/javascript";

    document.body.appendChild(script);

    // 3. Safety: remove vendor’s built-in cookie popup if they sneak it in
    const removeVendorBanner = () => {
      // try a few selectors that we’ve seen in screenshots
      const possibleBanners = document.querySelectorAll(
        '[data-testid="cookie-banner"], .cookiesBannerWrapper, .cookieBannerContainer, .leadconnector-cookie-banner'
      );
      possibleBanners.forEach((el) => {
        el.style.display = "none";
        el.remove();
      });
    };

    // run after widget loads and also repeat a couple times
    const interval = setInterval(removeVendorBanner, 500);
    setTimeout(() => clearInterval(interval), 5000);

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      script.remove();
    };
  }, []);

  // We don’t render any visible UI ourselves.
  // The floating chat button is injected by the script (only if allowed).
  return null;
};

export default ChatBubble;