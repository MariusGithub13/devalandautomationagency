import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

/**
 * Newsletter Subscription Form
 * - NO reCAPTCHA (performance-first)
 * - Bot protection via honeypot + timing
 * - Klaviyo via Netlify function
 *
 * Props:
 * - compact: boolean
 * - className: string
 */
const NewsletterForm = ({ compact = false, className = '' }) => {
  const [email, setEmail] = useState('');
  const [botField, setBotField] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submissionTime] = useState(Date.now());

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Honeypot (silent fail)
    if (botField) return;

    if (!email || !email.includes('@')) {
      setSubmitMessage('Please enter a valid email address');
      return;
    }

    if (!gdprConsent) {
      setSubmitMessage('Please accept the privacy policy to subscribe');
      return;
    }

    // Timing anti-bot (2s minimum)
    const timeTaken = Date.now() - submissionTime;
    if (timeTaken < 2000) {
      setSubmitMessage('Please take a moment before subscribing');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/.netlify/functions/klaviyo-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          'bot-field': botField,
          timeTaken,
          listId: 'RCLE38',
          source: 'newsletter',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitMessage('✓ Successfully subscribed! Check your email.');
        setEmail('');
        setGdprConsent(false);
        setBotField('');
      } else {
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Unable to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------- COMPACT (footer / sidebar) ----------
  if (compact) {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <Input
              name="bot-field"
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              disabled={isSubmitting}
              className="mt-0.5 h-4 w-4"
            />
            <label className="text-xs text-gray-600">
              I agree to receive email updates and accept the{' '}
              <a href="/privacy" className="underline">Privacy Policy</a>
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

  // ---------- FULL LAYOUT ----------
  return (
    <div className={className}>
      <div className="hidden" aria-hidden="true">
        <Input
          name="bot-field"
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
            className="btn-accent text-white px-6 py-3 disabled:opacity-50"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </div>

        <div className="flex items-start gap-2 text-left">
          <input
            type="checkbox"
            checked={gdprConsent}
            onChange={(e) => setGdprConsent(e.target.checked)}
            disabled={isSubmitting}
            className="mt-1 h-4 w-4"
          />
          <label className="text-sm text-white opacity-90">
            I agree to receive email updates and accept the{' '}
            <a href="/privacy" className="underline">Privacy Policy</a>.
          </label>
        </div>

        {submitMessage && (
          <p className={`text-sm font-semibold ${
            submitMessage.includes('✓') ? 'text-green-200' : 'text-yellow-200'
          }`}>
            {submitMessage}
          </p>
        )}

        <p className="text-sm opacity-75 mt-2">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
};

export default NewsletterForm;
