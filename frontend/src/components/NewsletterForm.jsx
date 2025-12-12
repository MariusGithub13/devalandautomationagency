import React, { useState } from 'react';
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
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubmitMessage('Please enter a valid email address');
      return;
    }

    if (!gdprConsent) {
      setSubmitMessage('Please accept the privacy policy to subscribe');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/.netlify/functions/klaviyo-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          listId: 'RCLE38' // Website Newsletter list
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitMessage('✓ Successfully subscribed! Check your email.');
        setEmail('');
        setGdprConsent(false);
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
          <div className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              required
              className="flex-1 bg-white text-gray-900 border-gray-300"
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white whitespace-nowrap"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
          
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
            className="btn-accent text-white px-6 py-3"
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
