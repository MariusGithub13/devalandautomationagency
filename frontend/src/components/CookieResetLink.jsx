import React from "react";
import { Settings2 } from "lucide-react";

/**
 * Small link that resets stored consent and reloads the page,
 * which makes LeadConnector show its white banner again.
 */
export default function CookieResetLink({ className = "" }) {
  const openBanner = () => {
    try {
      // Clear our old keys (harmless if not present)
      localStorage.removeItem("cookieConsent");
      localStorage.removeItem("cookiePreferences");

      // Clear common LeadConnector keys (best-effort, future-proof loop)
      const toNuke = [];
      for (let i = 0; i < localStorage.length; i += 1) {
        const k = localStorage.key(i) || "";
        if (
          k.toLowerCase().includes("leadconnector") ||
          k.toLowerCase().startsWith("lc_") ||
          k.toLowerCase().includes("chatwidget")
        ) {
          toNuke.push(k);
        }
      }
      toNuke.forEach((k) => localStorage.removeItem(k));
    } catch {
      /* ignore */
    }

    // Force a clean re-evaluation on next load
    window.location.reload();
  };

  return (
    <button
      type="button"
      onClick={openBanner}
      className={`inline-flex items-center gap-1 underline underline-offset-4 text-gray-600 hover:text-blue-600 transition-colors ${className}`}
      aria-label="Change cookie settings"
    >
      <Settings2 size={16} />
      Change cookie settings
    </button>
  );
}