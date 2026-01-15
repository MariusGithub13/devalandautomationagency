import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

/**
 * Newsletter Subscription Form
 * - ULTRA-SPECIFIC styling for status messages to fix "white-on-white" issue.
 * - Automatic PDF download on successful Klaviyo subscription.
 */
const NewsletterForm = ({ compact = false, className = '' }) => {
  const [email, setEmail] = useState('');
  const [botField, setBotField] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submissionTime] = useState(Date.now());

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
    if (botField) return;

    if (!email || !email.includes('@')) {
      setSubmitMessage('Please enter a valid email address');
      return;
    }

    if (!gdprConsent) {
      setSubmitMessage('Please accept the privacy policy to subscribe');
      return;
    }

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
        setSubmitMessage('✓ Success! Your roadmap download has started.');
        triggerDownload(); 
        setEmail('');
        setGdprConsent(false);
      } else {
        // This handles "Recently subscribed" or "Something went wrong" messages
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Unable to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSuccess = submitMessage.includes('✓');

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        <div className="hidden" aria-hidden="true">
          <Input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} tabIndex="-1" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            required
            className="flex-1 bg-white !text-gray-900 border-0 h-12 shadow-sm"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-12 font-extrabold shadow-md"
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
            className="mt-1 h-4 w-4 accent-orange-500"
          />
          <label htmlFor="gdpr-full" className="text-sm text-white opacity-90 cursor-pointer">
            I agree to receive the 2026 Roadmap and updates. View our{' '}
            <a href="/privacy" className="underline">Privacy Policy</a>.
          </label>
        </div>

        {/* FORCED VISIBILITY FIX: 
            Color is applied to a <span> inside the div to prevent color inheritance.
        */}
        {submitMessage && (
          <div 
            className="text-sm font-bold p-4 rounded-lg shadow-xl border-2 animate-in fade-in zoom-in duration-300"
            style={{ 
              backgroundColor: isSuccess ? '#dcfce7' : '#fef9c3',
              borderColor: isSuccess ? '#059669' : '#ca8a04',
              display: 'block',
              visibility: 'visible'
            }}
          >
            <span style={{ color: isSuccess ? '#064e3b' : '#713f12', fontWeight: '900' }}>
              {submitMessage}
            </span>
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