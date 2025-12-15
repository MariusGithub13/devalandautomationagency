import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

/**
 * Newsletter Subscription Form Component
 * Integrates with Klaviyo via Netlify serverless function
 * Can be used anywhere: footer, blog pages, landing pages, etc.
 * 
 * Props:
 * - compact: boolean - Use compact layout for footer/sidebar
 * - className: string - Additional CSS classes
 */
const NewsletterForm = ({ compact = false, className = '' }) => {
  const [email, setEmail] = useState('');
  const [botField, setBotField] = useState(''); // Honeypot field (standardized name)
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submissionTime] = useState(Date.now()); // Track form load time
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  
  // reCAPTCHA v3 site key - use environment variable
  const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY || '6LcT-SssAAAAAB3jCBIRdqmXHH2bplWaSGXVqnlI';

  // Load reCAPTCHA v3 script
  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector(`script[src*="recaptcha/api.js"]`);
    if (existingScript) {
      setRecaptchaLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.head.appendChild(script);

    return () => {
      // Don't remove script as it may be used by other components
    };
  }, [RECAPTCHA_SITE_KEY]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) {
      return;
    }
    
    // Bot protection: Honeypot check (silent rejection)
    if (botField) {
      console.log('🤖 Bot detected: honeypot field filled');
      return; // Silently reject, no error message for bot
    }
    
    if (!email || !email.includes('@')) {
      setSubmitMessage('Please enter a valid email address');
      return;
    }

    if (!gdprConsent) {
      setSubmitMessage('Please accept the privacy policy to subscribe');
      return;
    }

    // Bot protection: Timing check
    const timeTaken = Date.now() - submissionTime;
    if (timeTaken < 2000) { // 2 seconds for newsletter (simpler form)
      setSubmitMessage('Please take a moment to review before subscribing');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Execute reCAPTCHA v3 with 'newsletter' action
      let recaptchaToken = null;
      if (recaptchaLoaded && window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'newsletter' });
        } catch (error) {
          console.error('reCAPTCHA execution error:', error);
          setSubmitMessage('reCAPTCHA verification failed. Please try again.');
          setIsSubmitting(false);
          return;
        }
      } else {
        console.warn('reCAPTCHA not loaded');
      }

      const response = await fetch('/.netlify/functions/klaviyo-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          'bot-field': botField, // Send honeypot for backend verification
          recaptchaToken: recaptchaToken,
          timeTaken: timeTaken,
          listId: 'RCLE38' // Website Newsletter list
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitMessage('✓ Successfully subscribed! Check your email.');
        setEmail('');
        setGdprConsent(false);
        setBotField('');
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.error('Newsletter error:', data);
        }
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Newsletter submission error:', error);
      }
      setSubmitMessage('Unable to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (compact) {
    // Compact layout for footer/sidebar
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Honeypot field - hidden from humans, visible to bots */}
          <div className="hidden" aria-hidden="true">
            <Input
              id="bot-field-compact"
              name="bot-field"
              type="text"
              value={botField}
              onChange={(e) => setBotField(e.target.value)}
              tabIndex="-1"
              autoComplete="off"
            />
          </div>

          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            required
            className="w-full bg-white text-gray-900 border-gray-300"
          />
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
          
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="newsletter-gdpr-consent"
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              disabled={isSubmitting}
              className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="newsletter-gdpr-consent" className="text-xs text-gray-600 cursor-pointer">
              I agree to receive email updates and accept the{' '}
              <a href="/privacy" className="underline hover:text-blue-600">Privacy Policy</a>
            </label>
          </div>

          <div className="text-xs text-gray-500 text-center">
            Protected by reCAPTCHA v3
          </div>

          {submitMessage && (
            <p className={`text-xs font-semibold ${
              submitMessage.includes('✓') ? 'text-green-600' : 'text-red-600'
            }`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    );
  }

  // Full layout for dedicated sections
  return (
    <div className={className}>
      {/* Honeypot field - hidden from humans, visible to bots */}
      <div className="hidden" aria-hidden="true">
        <Input
          id="bot-field"
          name="bot-field"
          type="text"
          value={botField}
          onChange={(e) => setBotField(e.target.value)}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            required
            className="flex-1 bg-white text-gray-900 border-0"
          />
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="btn-accent text-white px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </div>
        
        <div className="flex items-start gap-2 text-left">
          <input
            type="checkbox"
            id="gdpr-consent"
            checked={gdprConsent}
            onChange={(e) => setGdprConsent(e.target.checked)}
            disabled={isSubmitting}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="gdpr-consent" className="text-sm text-white opacity-90 cursor-pointer">
            I agree to receive email updates from Devaland and accept the{' '}
            <a href="/privacy" className="underline hover:text-blue-200" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            {' '}and{' '}
            <a href="/gdpr" className="underline hover:text-blue-200" target="_blank" rel="noopener noreferrer">
              GDPR compliance
            </a>
            .
          </label>
        </div>

        <div className="text-xs text-white opacity-75 text-center">
          Protected by reCAPTCHA v3
        </div>
      </form>
      
      {submitMessage && (
        <p className={`text-sm mt-4 font-semibold ${submitMessage.includes('✓') ? 'text-green-200' : 'text-yellow-200'}`}>
          {submitMessage}
        </p>
      )}
      
      <p className="text-sm opacity-75 mt-4">
        No spam, unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterForm;
