import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Cookie, Settings } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  // on mount: check if user already acted
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    const prefsRaw = localStorage.getItem("cookiePreferences");

    if (!consent) {
      // first visit -> show banner
      setIsVisible(true);
      return;
    }

    // returning visitor: don't show
    setIsVisible(false);

    // hydrate checkbox state in case we ever want to re-open prefs UI later
    try {
      if (prefsRaw) {
        const prefs = JSON.parse(prefsRaw);
        setMarketingAllowed(!!prefs.marketing);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // utility: persist + hide + (optionally) reload page to allow chat bubble
  const persistAndClose = (prefs) => {
    localStorage.setItem("cookieConsent", "set");
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    setIsVisible(false);

    // If marketing just got enabled, we want ChatBubble to load now.
    // Easiest reliable way (esp. in preview) is to reload.
    if (prefs.marketing === true) {
      window.location.reload();
    }
  };

  const acceptSelected = () => {
    persistAndClose({
      necessary: true,
      analytics: false,
      marketing: marketingAllowed,
    });
  };

  if (!isVisible) return null;

  return (
    <div
      className="devaland-cookie-banner-wrapper flex justify-center p-4"
      style={{
        // fallback positioning in case global CSS hasn't injected yet
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99998,
      }}
    >
      <Card className="w-full max-w-[1280px] bg-[#0b0f1a] text-white border border-gray-700 shadow-2xl rounded-xl overflow-hidden">
        {/* Top row: title bar */}
        <div className="flex flex-wrap items-start justify-between gap-4 p-4 border-b border-gray-700 bg-gradient-to-r from-gray-900/80 to-gray-800/40">
          <div className="flex items-start gap-2">
            <Cookie className="text-yellow-400 flex-shrink-0 mt-[2px]" size={20} />
            <div>
              <div className="font-semibold text-white leading-tight">
                We use cookies
              </div>
              <div className="text-sm text-gray-300 leading-snug max-w-[700px]">
                We use cookies and similar technologies for essential site
                functionality and marketing (e.g., our chat widget). See our{" "}
                <a
                  href="/privacy"
                  className="text-green-400 underline hover:text-green-300"
                >
                  Privacy Policy
                </a>
                .
              </div>
            </div>
          </div>
        </div>

        {/* Main controls row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-4">
          {/* Left: marketing toggle */}
          <label className="flex items-start gap-3 text-sm text-gray-200 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={marketingAllowed}
              onChange={(e) => setMarketingAllowed(e.target.checked)}
              className="mt-[3px] h-4 w-4 rounded border-gray-500 text-blue-500 focus:ring-blue-400"
            />
            <span>
              <span className="font-medium text-white">
                Allow marketing (chat widget)
              </span>
              <span className="block text-gray-400 text-xs leading-snug">
                Enables our live chat bubble so you can message us.
              </span>
            </span>
          </label>

          {/* Right: action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              className="bg-gray-800 text-gray-200 border border-gray-600 hover:bg-gray-700 hover:text-white flex items-center"
              onClick={() => {
                // "Necessary only" -> marketing off
                persistAndClose({
                  necessary: true,
                  analytics: false,
                  marketing: false,
                });
              }}
            >
              <Settings className="mr-2 h-4 w-4 text-gray-300" />
              Necessary only
            </Button>

            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded-md shadow"
              onClick={acceptSelected}
            >
              Accept selected
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;