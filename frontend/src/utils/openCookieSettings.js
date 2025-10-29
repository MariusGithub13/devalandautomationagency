// Reopen LeadConnector/GHL cookie UI if available; otherwise re-show banner by
// clearing common consent cookies and reloading.
export function openCookieSettings() {
  // 1) Try known vendor APIs (LeadConnector / GHL)
  try {
    if (window?.consentManager?.open instanceof Function) {
      window.consentManager.open();
      return;
    }
  } catch {}

  try {
    if (window?.GHL?.consent?.open instanceof Function) {
      window.GHL.consent.open();
      return;
    }
  } catch {}

  // 2) Try custom events your banner (or future banner) can listen for
  try {
    window.dispatchEvent(new Event("openCookieSettings"));
    // If a custom listener quickly shows a modal/banner, no reload needed.
    // Give it a short moment; if nothing happens, continue with fallback.
    setTimeout(fallbackReset, 300);
  } catch {
    fallbackReset();
  }
}

function fallbackReset() {
  // Clear a few common consent cookie names so the vendor shows the banner again
  try {
    const domains = [window.location.hostname, "." + window.location.hostname.replace(/^www\./, "")];
    const names = ["lc_consent", "ghl_consent", "cookie_consent", "cookie-preferences", "euconsent"];
    const paths = ["/"];
    const expires = "Thu, 01 Jan 1970 00:00:00 GMT";

    domains.forEach((domain) => {
      names.forEach((name) => {
        paths.forEach((p) => {
          document.cookie = `${name}=; expires=${expires}; path=${p}; domain=${domain}; SameSite=Lax`;
        });
      });
    });
  } catch {}

  // Gentle reload to re-trigger vendor banner
  try {
    window.location.reload();
  } catch {}
}