import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Cookie, X, Settings } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true
    }));
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <Card className="max-w-4xl mx-auto bg-white shadow-2xl border-2 border-gray-200">
        <div className="p-6">
          {!showDetails ? (
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie size={24} className="text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">We use cookies</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We use cookies to enhance your browsing experience, analyze our traffic, and provide personalized content. 
                    By clicking "Accept All", you consent to our use of cookies in accordance with our Privacy Policy and GDPR compliance.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
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
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Cookie size={20} className="text-orange-500" />
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowDetails(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Necessary Cookies</div>
                    <div className="text-sm text-gray-600">Required for website functionality</div>
                  </div>
                  <input type="checkbox" checked disabled className="rounded" />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Analytics Cookies</div>
                    <div className="text-sm text-gray-600">Help us understand website usage</div>
                  </div>
                  <input type="checkbox" className="rounded" />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">Marketing Cookies</div>
                    <div className="text-sm text-gray-600">Used for personalized advertising</div>
                  </div>
                  <input type="checkbox" className="rounded" />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={acceptNecessary}
                  className="flex-1"
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
  );
};

export default CookieConsent;