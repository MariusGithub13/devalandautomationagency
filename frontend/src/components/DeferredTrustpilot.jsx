// frontend/src/components/DeferredTrustpilot.jsx
// Loads Trustpilot widget scripts with deferred loading for better performance
// Only loads after user interaction or timeout, preventing render blocking

import { useEffect } from 'react';
import { useDeferredLoad } from '../hooks/useDeferredLoad';

const TRUSTPILOT_WIDGET_SCRIPT = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
const TRUSTPILOT_INVITE_SCRIPT = 'https://invitejs.trustpilot.com/tp.min.js';
const TRUSTPILOT_KEY = 'e9BCOjPleCArlV92';

const DeferredTrustpilot = () => {
  // Defer loading until user interaction or 5 seconds (whichever comes first)
  const shouldLoad = useDeferredLoad(5000);

  useEffect(() => {
    if (!shouldLoad) return;

    // Check if Trustpilot is already loaded
    if (window.Trustpilot || document.querySelector('script[src*="trustpilot"]')) {
      if (process.env.NODE_ENV === 'development') {
        console.log('⚠️ Trustpilot already loaded, skipping');
      }
      return;
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Loading Trustpilot scripts (deferred)...');
    }

    // Load Trustpilot widget bootstrap script
    const loadTrustpilotWidget = () => {
      const script1 = document.createElement('script');
      script1.src = TRUSTPILOT_WIDGET_SCRIPT;
      script1.async = true;
      script1.onload = () => {
        if (process.env.NODE_ENV === 'development') {
          console.log('✅ Trustpilot widget loaded');
        }
      };
      document.body.appendChild(script1);
    };

    // Load Trustpilot invitation script
    const loadTrustpilotInvite = () => {
      const script2 = document.createElement('script');
      script2.async = true;
      script2.type = 'text/javascript';
      script2.innerHTML = `
        (function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
          a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;f=d.getElementsByTagName(s)[0];
          f.parentNode.insertBefore(a,f)})(window,document,'script', '${TRUSTPILOT_INVITE_SCRIPT}', 'tp');
        tp('register', '${TRUSTPILOT_KEY}');
      `;
      document.body.appendChild(script2);
      
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ Trustpilot invite script loaded');
      }
    };

    // Use requestIdleCallback for optimal performance
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        loadTrustpilotWidget();
        loadTrustpilotInvite();
      }, { timeout: 2000 });
    } else {
      // Fallback: load with setTimeout
      setTimeout(() => {
        loadTrustpilotWidget();
        loadTrustpilotInvite();
      }, 1000);
    }

    // Note: We don't clean up Trustpilot scripts as they need to persist across navigation
  }, [shouldLoad]);

  return null;
};

export default DeferredTrustpilot;
