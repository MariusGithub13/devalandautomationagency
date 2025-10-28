import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Cookie, X, Settings } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Local state for toggles in the "Preferences" view
  const [allowAnalytics, setAllowAnalytics] = useState(false);
  const [allowMarketing, setAllowMarketing] = useState(true); // marketing = chat widget consent

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // No decision yet -> show banner
      setIsVisible(true);
    } else {
      // Load saved preferences so UI matches what's stored
      const prefsRaw = localStorage.getItem("cookiePreferences");
      if (prefsRaw) {
        try {
          const prefs = JSON.parse(prefsRaw);
          setAllowAnalytics(!!prefs.analytics);
          setAllowMarketing(!!prefs.marketing);
        } catch (_) {
          /* noop */
        }
      }
    }
  }, []);

  const savePrefsAndClose = (prefs) => {
    localStorage.setItem("cookieConsent", prefs.analytics || prefs.marketing ? "accepted" : "necessary");
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        necessary: true,
        analytics: prefs.analytics,
        marketing: prefs.marketing,
      })
    );
    setIsVisible(false);
  };

  const acceptAll = () => {
    savePrefsAndClose({
      analytics: true,
      marketing: true,
    });
  };

  const acceptNecessary = () => {
    savePrefsAndClose({
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    savePrefsAndClose({
      analytics: allowAnalytics,
      marketing: allowMarketing,
    });
  };

  if (!isVisible) return null;

  return (
    // Outer shell: lifted above bottom bar, doesn't block chat bubble clicks
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 pb-[5rem] md:pb-4 flex justify-center pointer-events-none">
      {/* Inner wrapper: clickable area */}
      <div className="w-full max-w-4xl pointer-events-auto">
        <Card className="bg-white shadow-2xl border-2 border-gray-200">
          <div className="p-6">
            {!showDetails ? (
              // SIMPLE VIEW
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <Cookie size={24} className="text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">We use cookies</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We use cookies and similar technologies for essential site functionality and
                      marketing (e.g., our chat widget). By clicking "Accept All", you consent to our
                      use of cookies in accordance with our Privacy Policy and GDPR compliance.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0 w-full md:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowDetails(true)}
                    className="text-gray-600 border-gray-300"
                  >
                    <Settings size={16} className="mr-2" />
                    Preferences
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={acceptNecessary}
                    className="text-gray-600 border-gray-300"
                  >
                    Necessary Only
                  </Button>
                  <Button
                    size="sm"
                    onClick={acceptAll}
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            ) : (
              // DETAILED VIEW
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Cookie size={20} className="text-orange-500" />
                    Cookie Preferences
                  </h3>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close cookie preferences panel"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary cookies */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Necessary Cookies</div>
                      <div className="text-sm text-gray-600">
                        Required for website core functionality
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked
                      disabled
                      className="rounded"
                    />
                  </div>

                  {/* Analytics cookies */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Analytics Cookies</div>
                      <div className="text-sm text-gray-600">
                        Help us understand site usage & improve performance
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={allowAnalytics}
                      onChange={(e) => setAllowAnalytics(e.target.checked)}
                    />
                  </div>

                  {/* Marketing / chat cookies */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">Marketing / Chat Widget</div>
                      <div className="text-sm text-gray-600">
                        Enables our support chat and personalized outreach
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={allowMarketing}
                      onChange={(e) => setAllowMarketing(e.target.checked)}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleSavePreferences}
                    className="flex-1 text-gray-700 border-gray-300"
                  >
                    Save Preferences
                  </Button>
                  <Button
                    size="sm"
                    onClick={acceptAll}
                    className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CookieConsent;