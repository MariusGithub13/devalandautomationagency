import React, { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Cookie, X, Settings } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookieConsent";
const COOKIE_PREF_KEY = "cookiePreferences";

// ✅ Default prefs if user has never chosen
const DEFAULT_PREFS = {
  necessary: true,
  analytics: false,
  marketing: false, // <-- HARD OFF by default
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // controls the marketing toggle UI inside the detailed panel
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  // did we detect an existing consent in localStorage?
  // if false, we know this is first visit
  const [hasStoredConsent, setHasStoredConsent] = useState(false);

  // ---- helpers ----
  const loadPrefs = useCallback(() => {
    try {
      const raw = localStorage.getItem(COOKIE_PREF_KEY);
      if (!raw) return { ...DEFAULT_PREFS };
      const parsed = JSON.parse(raw);
      return { ...DEFAULT_PREFS, ...parsed };
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

    if (!consent) {
      // first visit:
      // - show banner
      // - force marketing OFF in UI
      setIsVisible(true);
      setHasStoredConsent(false);
      setMarketingAllowed(false);
      return;
    }

    // returning visitor that already made a choice
    setHasStoredConsent(true);

    const prefs = loadPrefs();
    setMarketingAllowed(!!prefs.marketing);

    // they've already answered, so banner stays hidden
    setIsVisible(false);
  }, [loadPrefs]);

  // ---- handle "openCookieSettings" custom event from footer link ----
  useEffect(() => {
    function handleOpenSettings() {
      const prefs = loadPrefs();

      // when reopening settings later, reflect what we saved
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

  // 1. user clicks "Accept all"
  const acceptAll = () => {
    const prefs = {
      necessary: true,
      analytics: true,
      marketing: true,
    };

    savePrefs(prefs, "accepted");
    setMarketingAllowed(true);
    setIsVisible(false);
    setHasStoredConsent(true);
  };

  // 2. user clicks "Only necessary"/"Reject all marketing"
  const acceptNecessary = () => {
    const prefs = {
      necessary: true,
      analytics: false,
      marketing: false,
    };

    savePrefs(prefs, "necessary");
    setMarketingAllowed(false);
    setIsVisible(false);
    setHasStoredConsent(true);
  };

  // 3. user clicks "Save preferences" in the detailed panel
  const saveCustomPreferences = () => {
    const prefs = {
      necessary: true,
      analytics: false, // you can add analytics toggle later if needed
      marketing: marketingAllowed,
    };

    const consentType = marketingAllowed ? "accepted" : "necessary";

    savePrefs(prefs, consentType);
    setIsVisible(false);
    setHasStoredConsent(true);
  };

  // ---- render ----

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed left-0 right-0 bottom-0 z-[100] p-4
        flex justify-center
        transition-all duration-300 ease-out
        opacity-100 translate-y-0
        animate-[fadeSlideUp_0.25s_ease-out]
      `}
    >
      <Card
        className={`
          w-full max-w-xl
          bg-white shadow-2xl border border-gray-200 rounded-xl
          text-left
        `}
      >
        <div className="p-4">
          {!showDetails ? (
            // -------- COMPACT MODE --------
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              {/* left: icon + message */}
              <div className="flex items-start gap-3 flex-1">
                <Cookie
                  size={22}
                  className="text-orange-500 flex-shrink-0 mt-0.5"
                />
                <div className="text-sm text-gray-700 leading-relaxed">
                  <p className="font-semibold text-gray-900 mb-1">
                    We use cookies
                  </p>
                  <p className="text-gray-600">
                    We use essential cookies to make this site work.
                    We’d also like to enable marketing features (like live chat)
                    to offer support and tailored services — only if you allow it.
                  </p>

                  <button
                    onClick={() => setShowDetails(true)}
                    className="mt-2 flex items-center text-xs text-gray-500 underline hover:text-blue-600"
                  >
                    <Settings size={14} className="mr-1" />
                    Manage preferences
                  </button>
                </div>
              </div>

              {/* right: buttons */}
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
            // -------- DETAILED MODE --------
            <div className="space-y-4 text-sm text-gray-700">
              {/* header row with close */}
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

              {/* necessary cookies (locked on) */}
              <div className="flex items-start justify-between bg-gray-50 rounded-lg p-3">
                <div className="pr-3">
                  <div className="font-medium text-gray-900 text-sm">
                    Necessary Cookies
                  </div>
                  <div className="text-xs text-gray-600">
                    Required for site security, basic features, and proper function.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="rounded cursor-not-allowed accent-blue-600"
                />
              </div>

              {/* marketing / chat toggle */}
              <div className="flex items-start justify-between bg-gray-50 rounded-lg p-3">
                <div className="pr-3">
                  <div className="font-medium text-gray-900 text-sm">
                    Marketing & Live Support
                  </div>
                  <div className="text-xs text-gray-600">
                    Enable chat support and personalized outreach.
                    If off, the chat widget will stay disabled.
                  </div>
                </div>

                {/* toggle control */}
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

              {/* action buttons */}
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
                You can change your choice any time in the footer: “Change cookie
                settings”.
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* spacer so we don't cover the chat bubble in bottom-right on desktop */}
      <div className="w-[80px] flex-shrink-0 hidden sm:block" />
    </div>
  );
};

export default CookieConsent;