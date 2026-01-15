import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
      setSubmitMessage('Please accept the privacy policy');
      return;
    }

    const timeTaken = Date.now() - submissionTime;
    if (timeTaken < 2000) {
      setSubmitMessage('Recently subscribed. Please check your email.');
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
        setSubmitMessage('✓ Success! Roadmap download started.');
        triggerDownload(); 
        setEmail('');
        setGdprConsent(false);
      } else {
        setSubmitMessage(data.message || 'Failed to subscribe');
      }
    } catch (error) {
      setSubmitMessage('Failed to subscribe. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        <div className="hidden" aria-hidden="true">
          <input name="bot-field" value={botField} onChange={(e) => setBotField(e.target.value)} tabIndex="-1" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            required
            className="flex-1 bg-white !text-gray-900 border-0 h-12"
          />
          <Button type="submit" disabled={isSubmitting} className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-12 font-bold shadow-md">
            {isSubmitting ? 'Processing...' : 'Download Now'}
          </Button>
        </div>

        <div className="flex items-start gap-2 text-left">
          <input type="checkbox" checked={gdprConsent} onChange={(e) => setGdprConsent(e.target.checked)} className="mt-1 h-4 w-4" />
          <label className="text-sm text-white opacity-90">
            I agree to receive the 2026 Roadmap and updates. View our <a href="/privacy" className="underline">Privacy Policy</a>.
          </label>
        </div>

        {/* BLACKOUT UI FIX: Solid black background for white text */}
        {submitMessage && (
          <div 
            className="text-sm font-extrabold p-4 rounded-lg shadow-2xl border-2 border-white animate-in fade-in zoom-in duration-300"
            style={{ 
              backgroundColor: '#000000',
              color: '#ffffff !important',
              display: 'block',
              textAlign: 'center'
            }}
          >
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;