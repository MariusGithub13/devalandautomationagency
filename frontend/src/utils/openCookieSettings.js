// Re-open vendor (LeadConnector) cookie banner by clearing consent
// and reloading. Safe for a static site.
export function openCookieSettings() {
  try {
    // 1) If vendor exposes an API in the future, call it here first.
    // e.g. window.LeadecConnector?.cookies?.open?.()
  } catch (_) {}

  try {
    // 2) Clear localStorage/sessionStorage keys that might prevent the banner
    const lsKeys = Object.keys(localStorage);
    lsKeys.forEach((k) => {
      const lk = k.toLowerCase();
      if (
        lk.includes("consent") ||
        lk.includes("cookie") ||
        lk.includes("leadconnector") ||
        lk.startsWith("lc_")
      ) {
        localStorage.removeItem(k);
      }
    });

    const ssKeys = Object.keys(sessionStorage);
    ssKeys.forEach((k) => {
      const lk = k.toLowerCase();
      if (
        lk.includes("consent") ||
        lk.includes("cookie") ||
        lk.includes("leadconnector") ||
        lk.startsWith("lc_")
      ) {
        sessionStorage.removeItem(k);
      }
    });
  } catch (_) {}

  try {
    // 3) Expire cookies (both host and dot-domain)
    const expires = "Thu, 01 Jan 1970 00:00:00 GMT";
    const host = window.location.hostname;
    const parts = host.split(".");
    const domainVariants = new Set([host]);
    if (parts.length >= 2) {
      domainVariants.add(`.${parts.slice(-2).join(".")}`); // root like .devaland.com
      domainVariants.add(`.${host}`); // .www.devaland.com
    }

    document.cookie.split(";").forEach((raw) => {
      const name = raw.split("=")[0]?.trim();
      if (!name) return;

      // be selective
      const ln = name.toLowerCase();
      const looksVendor =
        ln.includes("lead") || ln.includes("lc") || ln.includes("consent") || ln.includes("cookie");

      if (looksVendor) {
        domainVariants.forEach((dom) => {
          document.cookie = `${name}=; expires=${expires}; path=/; domain=${dom}`;
        });
        // also try without domain
        document.cookie = `${name}=; expires=${expires}; path=/`;
      }
    });
  } catch (_) {}

  // 4) Reload to let the vendor banner re-check state
  window.location.reload();
}