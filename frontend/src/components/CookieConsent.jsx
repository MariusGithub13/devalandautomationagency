import React, { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Cookie, X, Settings } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookieConsent";
const COOKIE_PREF_KEY = "cookiePreferences";

// GDPR baseline: everything OFF except strictly necessary
const DEFAULT_PREFS = {
  necessary: true,
  analytics: false,
  marketing: false, // 🔒 default OFF
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  // this state drives the marketing toggle in the Details panel
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  // ---- helpers ----
  const loadPrefs = useCallback(() => {
    try {
      const raw = localStorage.getItem(COOKIE_PREF_KEY);
      if (!raw) return { ...DEFAULT_PREFS };
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_PREFS,
        ...parsed,
      };
    } catch {
      return { ...DEFAULT_PREFS };
    }
  }, []);

  const savePrefs = useCallback((prefs, consentType) => {
    localStorage.setItem(COOKIE_PREF_KEY, JSON.stringify(prefs));
    localStorage.setItem(COOKIE_CONSENT_KEY, consentType);
  }, []);

  // ---- on mount ----
  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    const prefs = loadPrefs();
    
    // keep UI toggle in sync
    setMarketingAllowed(!!prefs.marketing);
    
    if (!consent) {
      // first visit => show our banner
      setIsVisible(true);
    } else {
      // already decided => hide banner
      setIsVisible(false);
    }
  }, [loadPrefs]);

  // ---- listen for "openCookieSettings" (from footer link) ----
  useEffect(() => {
    function handleOpenSettings() {
      const prefs = loadPrefs();
      setMarketingAllowed(!!prefs.marketing);
      setShowDetails(true);
      setIsVisible(true);
    }

    window.addEventListener("openCookieSettings", handleOpenSettings);
    return () => {
      window.removeEventListener("openCookieSettings", handleOpenSettings);
    };
  }, [loadPrefs]);

  // ---- actions ----

  // User clicks "Only necessary"
  const acceptNecessary = () => {
    const prefs = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePrefs(prefs, "necessary");
    setMarketingAllowed(false);
    setIsVisible(false);
  };

  // User clicks "Accept all"
  const acceptAll = () => {
    const prefs = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePrefs(prefs, "accepted");
    setMarketingAllowed(true);
    setIsVisible(false);
  };

  // From the details panel "Save preferences"
  const saveCustomPreferences = () => {
    const prefs = {
      necessary: true,
      analytics: false, // if you later add UI for analytics toggle, wire it here
      marketing: marketingAllowed,
    };
    const consentType = marketingAllowed ? "accepted" : "necessary";
    savePrefs(prefs, consentType);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed left-0 right-0 bottom-0 z-[100] p-4
        flex justify-center
        transition-all duration-300 ease-out
        animate-[fadeSlideUp_0.25s_ease-out]
        pointer-events-none
      `}
      style={{
        // pointer-events none on wrapper so chat etc still clickable…
        // …but we'll re-enable pointer events on the Card itself
      }}
    >
      <Card
        className={`
          w-full max-w-xl
          bg-white shadow-2xl border border-gray-200 rounded-xl
          text-left
          pointer-events-auto
        `}
      >
        <div className="p-4">
          {!showDetails ? (
            // ------------- COMPACT MODE --------------
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              {/* text side */}
              <div className="flex items-start gap-3 flex-1">
                <Cookie
                  size={22}
                  className="text-orange-500 flex-shrink-0 mt-0.5"
                />
                <div className="text-sm text-gray-700 leading-relaxed">
                  <p className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                    We use cookies
                  </p>
                  <p className="text-gray-600">
                    We use essential cookies to make this site work.
                    We'd also like to use marketing cookies (like live chat)
                    to offer support and tailored services — only if you allow it.
                  </p>

                  <button
                    onClick={() => setShowDetails(true)}
                    className="mt-2 inline-flex items-center text-xs text-gray-500 underline hover:text-blue-600"
                  >
                    <Settings size={14} className="mr-1" />
                    Manage preferences
                  </button>
                </div>
              </div>

              {/* buttons side */}
              <div className="flex flex-col gap-2 min-w-[160px]">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={acceptNecessary}
                  className="text-gray-700 border-gray-300 bg-white hover:bg-gray-50 w-full"
                >
                  Only necessary
                </Button>

                <Button
                  size="sm"
                  onClick={acceptAll}
                  className="bg-blue-600 text-white hover:bg-blue-700 w-full"
                >
                  Accept all
                </Button>
              </div>
            </div>
          ) : (
            // ------------- DETAILS MODE --------------
            <div className="space-y-4 text-sm text-gray-700">
              {/* header row */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Cookie size={18} className="text-orange-500" />
                  <h3 className="font-semibold text-gray-900 text-base">
                    Cookie Preferences
                  </h3>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close cookie detail view"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Necessary */}
              <div className="flex items-start justify-between bg-gray-50 rounded-lg p-3">
                <div className="pr-3">
                  <div className="font-medium text-gray-900 text-sm">
                    Necessary Cookies
                  </div>
                  <div className="text-xs text-gray-600">
                    Required for security, basic features, and proper function.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="rounded cursor-not-allowed accent-blue-600"
                />
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between bg-gray-50 rounded-lg p-3">
                <div className="pr-3">
                  <div className="font-medium text-gray-900 text-sm">
                    Marketing & Live Support
                  </div>
                  <div className="text-xs text-gray-600">
                    Allow chat support and personalized outreach.
                    If off, chat stays disabled.
                  </div>
                </div>

                {/* custom toggle */}
                <button
                  onClick={() => setMarketingAllowed((prev) => !prev)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full border transition-colors ${
                    marketingAllowed
                      ? "bg-blue-600 border-blue-600"
                      : "bg-gray-300 border-gray-300"
                  }`}
                  aria-pressed={marketingAllowed}
                  aria-label="Toggle marketing cookies"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                      marketingAllowed ? "translate-x-5" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* actions */}
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={acceptNecessary}
                  className="flex-1 text-gray-700 border-gray-300 bg-white hover:bg-gray-50"
                >
                  Only necessary
                </Button>

                <Button
                  size="sm"
                  onClick={saveCustomPreferences}
                  className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save preferences
                </Button>
              </div>

              <p className="text-[11px] leading-snug text-gray-500 pt-1">
                You can change this anytime in the footer ("Change cookie settings").
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* Spacer so our card doesn't cover the future chat bubble location */}
      <div className="w-[80px] flex-shrink-0 hidden sm:block pointer-events-none" />
    </div>
  );
};

export default CookieConsent;