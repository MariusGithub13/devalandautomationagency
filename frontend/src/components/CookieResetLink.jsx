import React from "react";
import { Settings2 } from "lucide-react";

export default function CookieResetLink({ className = "" }) {
  const openBanner = () => {
    // Let any listening UI know we want to open cookie settings
    window.dispatchEvent(new Event("openCookieSettings"));

    // Fallback for vendor banners: clear likely consent keys so LC re-prompts
    try {
      const keys = [
        "cookieConsent",
        "cookiePreferences",
        "lc_cookies_consent",
        "leadconnector_cookie_consent",
      ];
      keys.forEach((k) => localStorage.removeItem(k));

      // If no custom UI opens, a quick refresh lets LC re-check consent
      setTimeout(() => {
        if (!document.body.dataset.cookieBannerOpen) {
          window.location.reload();
        }
      }, 50);
    } catch {
      window.location.reload();
    }
  };

  return (
    <button
      type="button"
      onClick={openBanner}
      className={`inline-flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600 underline ${className}`}
      aria-label="Change cookie settings"
    >
      <Settings2 size={14} />
      Change cookie settings
    </button>
  );
}