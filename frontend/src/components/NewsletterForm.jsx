import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

/**
 * Newsletter Subscription Form
 * - NO reCAPTCHA (Performance-first)
 * - Bot protection via honeypot + timing
 * - Klaviyo via Netlify function (List ID: RCLE38)
 * - Automatic PDF download on success
 */
const NewsletterForm = ({ compact = false, className = '' }) => {
  const [email, setEmail] = useState('');
  const [botField, setBotField] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submissionTime] = useState(Date.now());

  // Helper to trigger the PDF download from the public/resources folder
  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = '/resources/voice-ai-checklist-2026.pdf';
    link.setAttribute('download', 'Devaland-Voice-AI-Readiness-Roadmap.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Honeypot (silent fail for bots)
    if (botField) return;

    if (!email || !email.includes('@')) {
      setSubmitMessage('Please enter a valid email address');
      return;
    }

    if (!gdprConsent) {
      setSubmitMessage('Please accept the privacy policy to subscribe');
      return;
    }

    // Timing anti-bot (2s minimum check)
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
          source: 'voice-ai-roadmap',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitMessage('✓ Successfully subscribed! Your roadmap download has started.');
        triggerDownload(); // Triggers the PDF download immediately
        setEmail('');
        setGdprConsent(false);
        setBotField('');
      } else {
        // Handle rate limiting (429) or other backend errors
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Unable to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------- COMPACT LAYOUT (Footer / Sidebar) ----------
  if (compact) {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="space-y-3">
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 font-bold"
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
            <div className={`text-xs font-bold p-2 rounded ${
              submitMessage.includes('✓') 
                ? 'bg-green-100 text-green-900' 
                : 'bg-yellow-100 text-yellow-900'
            }`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    );
  }

  // ---------- FULL LAYOUT (Lead Magnet Section) ----------
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
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            required
            className="flex-1 bg-white text-gray-900 border-0 h-12 shadow-sm"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-12 font-extrabold disabled:opacity-50 transition-all shadow-md"
          >
            {isSubmitting ? 'Processing...' : 'Download Now'}
          </Button>
        </div>

        <div className="flex items-start gap-2 text-left">
          <input
            type="checkbox"
            id="gdpr-full"
            checked={gdprConsent}
            onChange={(e) => setGdprConsent(e.target.checked)}
            disabled={isSubmitting}
            className="mt-1 h-4 w-4 accent-orange-500"
          />
          <label htmlFor="gdpr-full" className="text-sm text-white opacity-90 cursor-pointer">
            I agree to receive the 2026 Roadmap and automation updates. View our{' '}
            <a href="/privacy" className="underline">Privacy Policy</a>.
          </label>
        </div>

        {/* FIXED: Readable Status Messages */}
        {submitMessage && (
          <div className={`text-sm font-bold p-4 rounded-lg shadow-inner border-2 ${
            submitMessage.includes('✓') 
              ? 'bg-green-100 text-green-900 border-green-300' 
              : 'bg-yellow-100 text-yellow-900 border-yellow-300'
          }`}>
            {submitMessage}
          </div>
        )}

        <p className="text-sm opacity-90 mt-2 text-white font-semibold">
          Join 500+ leaders scaling their support with Devaland AI.
        </p>
      </form>
    </div>
  );
};

export default NewsletterForm;