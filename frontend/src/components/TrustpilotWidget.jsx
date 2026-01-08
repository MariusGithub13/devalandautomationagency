import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const TrustpilotWidget = ({ variant = 'compact' }) => {
  useEffect(() => {
    // Load Trustpilot script
    const script = document.createElement('script');
    script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="trustpilot"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  if (variant === 'compact') {
    return (
      <Card className="bg-white border border-gray-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-800 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-900">Excellent</span>
            </div>
            <img 
              src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg" 
              alt="Trustpilot"
              className="h-4"
            />
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Based on verified customer reviews
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <img 
            src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg" 
            alt="Trustpilot"
            className="h-6"
          />
        </div>
        
        <div className="flex items-center justify-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="text-yellow-800 fill-current" />
          ))}
        </div>
        
        <p className="text-lg font-semibold text-gray-900 mb-1">Excellent</p>
        <p className="text-sm text-gray-600">
          Based on verified customer reviews
        </p>
        
        <a 
          href="https://www.trustpilot.com/review/devaland.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Read our reviews →
        </a>
      </div>
    </div>
  );
};

export default TrustpilotWidget;