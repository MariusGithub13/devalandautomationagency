import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

// Small inline toggle instead of switches UI libs
function Checkbox({ checked, onChange, label, id }) {
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-2 text-sm text-gray-100 cursor-pointer select-none"
    >
      <input
        id={id}
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border border-gray-400 bg-white"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span>{label}</span>
    </label>
  );
}

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  // marketing starts false (OFF by default = GDPR-friendly)
  const [allowMarketing, setAllowMarketing] = useState(false);

  useEffect(() => {
    // Check previous consent
    const storedConsent = localStorage.getItem("cookieConsent");
    const storedPrefs = localStorage.getItem("cookiePreferences");

    if (storedConsent) {
      // user already chose -> don't show banner
      setIsVisible(false);
    } else {
      // no decision yet -> show banner
      setIsVisible(true);
    }

    if (storedPrefs) {
      try {
        const parsed = JSON.parse(storedPrefs);
        if (
          typeof parsed.marketing === "boolean" &&
          parsed.marketing !== allowMarketing
        ) {
          setAllowMarketing(parsed.marketing);
        }
      } catch {
        // ignore invalid JSON
      }
    }
  }, []); // run once on mount

  // Write prefs to localStorage in one place
  const savePrefsAndClose = ({ marketing }) => {
    localStorage.setItem("cookieConsent", "made-choice");
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        necessary: true,
        analytics: true,
        marketing: !!marketing,
      })
    );
    setIsVisible(false);
  };

  // Reject all => marketing=false
  const rejectAll = () => {
    savePrefsAndClose({ marketing: false });
  };

  // Accept selected => whatever toggle state is
  const acceptSelected = () => {
    savePrefsAndClose({ marketing: allowMarketing });
  };

  if (!isVisible) return null;

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-[100]
        bg-[#0f172a]
        text-white
        border-t
        border-slate-700
        shadow-[0_-12px_40px_rgba(0,0,0,0.6)]
      "
    >
      <div
        className="
          max-w-[1400px]
          mx-auto
          w-full
          flex flex-col lg:flex-row
          items-start lg:items-center
          justify-between
          gap-4
          py-4
          px-4
          lg:px-8
        "
      >
        {/* Left: message + toggle */}
        <div className="flex-1 min-w-0">
          <p className="text-sm text-slate-100 leading-relaxed">
            We use cookies and similar technologies for essential site
            functionality and marketing (e.g., our chat widget).
            <span className="ml-1">
              See our{" "}
              <a
                href="/privacy"
                className="underline text-green-300 hover:text-green-200"
              >
                Privacy Policy
              </a>
              .
            </span>
          </p>

          <div className="mt-4">
            <Checkbox
              id="marketing-consent"
              checked={allowMarketing}
              onChange={setAllowMarketing}
              label="Allow marketing (chat widget)"
            />
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:justify-end">
          <Button
            variant="outline"
            onClick={rejectAll}
            className="
              bg-transparent
              border
              border-slate-500
              text-white
              hover:bg-slate-800
              hover:text-white
              text-sm
              px-4
              py-2
              rounded-md
            "
          >
            Reject all
          </Button>

          <Button
            onClick={acceptSelected}
            className="
              bg-green-600
              hover:bg-green-700
              text-white
              text-sm
              px-4
              py-2
              rounded-md
              font-medium
            "
          >
            Accept selected
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;