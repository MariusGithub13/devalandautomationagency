import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

/**
 * Newsletter Subscription Form - FINAL VERSION
 * - Klaviyo v3 API + Instant PDF Download
 * - SCOPED STYLE FIX: Injects a high-priority CSS rule to force black text.
 * - CLEANUP: Removed duplicated trust footer.
 */
const NewsletterForm = ({ compact = false, className = '' }) => {
  const [email, setEmail] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
    if (!gdprConsent) { setSubmitMessage('Please accept the privacy policy'); return; }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/.netlify/functions/klaviyo-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, listId: 'RCLE38' }),
      });

      const data = await response.json();
      setSubmitMessage(data.message);

      if (response.ok && data.success) {
        triggerDownload();
        setEmail('');
        setGdprConsent(false);
      }
    } catch (error) {
      setSubmitMessage('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSuccess = submitMessage.includes('✓') || submitMessage.toLowerCase().includes('successfully');

  return (
    <div className={className}>
      {/* SCOPED STYLE INJECTION: This overrides the theme's white-text rule */}
      <style>
        {`
          .force-black-text { 
            color: #000000 !important; 
            font-weight: 900 !important;
            text-shadow: none !important;
          }
        `}
      </style>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
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
            id="gdpr-voice-roadmap"
            checked={gdprConsent}
            onChange={(e) => setGdprConsent(e.target.checked)}
            className="mt-1 h-4 w-4 accent-orange-500 cursor-pointer"
          />
          <label htmlFor="gdpr-voice-roadmap" className="text-sm text-white opacity-90 cursor-pointer">
            I agree to receive the 2026 Roadmap. View our{' '}
            <a href="/privacy" className="underline hover:text-orange-200">Privacy Policy</a>.
          </label>
        </div>

        {submitMessage && (
          <div 
            className="p-6 rounded-lg shadow-2xl border-4 border-black animate-in fade-in zoom-in duration-300"
            style={{ 
              backgroundColor: isSuccess ? '#fef08a' : '#fecaca', 
              display: 'block',
              textAlign: 'center',
              marginTop: '1.5rem'
            }}
          >
            <span className="force-black-text block uppercase text-lg leading-tight">
              {submitMessage}
            </span>
          </div>
        )}

        {/* SINGLE FOOTER - Duplication issue resolved */}
        <p className="text-sm text-white opacity-80 mt-2 font-medium">
          Join 500+ leaders scaling their support with Devaland AI.
        </p>
      </form>
    </div>
  );
};

export default NewsletterForm;