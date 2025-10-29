export function openCookieSettings() {
  try {
    if (window && window.consentManager && typeof window.consentManager.open === "function") {
      window.consentManager.open();
      return;
    }
  } catch {}
  try {
    if (window && window.GHL && window.GHL.consent && typeof window.GHL.consent.open === "function") {
      window.GHL.consent.open();
      return;
    }
  } catch {}
  try { window.dispatchEvent(new Event("openCookieSettings")); } catch {}
}
