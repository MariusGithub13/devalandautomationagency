import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NewsletterForm = ({ className = '', compact = false }) => {
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
    if (isSubmitting || !gdprConsent) {
      setSubmitMessage(!gdprConsent ? 'Please accept the privacy policy' : '');
      return;
    }

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
      if (response.ok && data.success) { triggerDownload(); setEmail(''); setGdprConsent(false); }
    } catch (error) {
      setSubmitMessage('Connection error. Try again.');
    } finally { setIsSubmitting(false); }
  };

  const isSuccess = submitMessage.includes('✓') || submitMessage.toLowerCase().includes('successfully');

  if (compact) {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            required
            className="w-full bg-white text-gray-900 border-gray-300 h-11 shadow-sm focus:ring-blue-500"
          />
          <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 hover:bg-orange-600 text-white h-11 font-bold shadow-md transition-all active:scale-95">
            {isSubmitting ? '...' : 'Download Now'}
          </Button>
          <div className="flex items-start gap-2 text-left mt-1">
            <input
              type="checkbox"
              id="gdpr-compact"
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              className="mt-0.5 h-3.5 w-3.5 accent-orange-500 cursor-pointer"
            />
            <label htmlFor="gdpr-compact" className="text-[11px] leading-tight text-gray-500 cursor-pointer hover:text-gray-700 transition-colors">
              I agree to receive the Roadmap. <a href="/privacy" className="underline hover:text-blue-600 transition-colors">Privacy Policy</a>
            </label>
          </div>
          {submitMessage && (
            <div className={`mt-2 p-2 rounded border text-xs text-center font-bold ${isSuccess ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            required
            className="flex-1 min-w-[200px] bg-white text-gray-900 border-gray-300 h-14 shadow-sm text-lg focus:ring-2 focus:ring-blue-500/20"
          />
          <Button type="submit" disabled={isSubmitting} className="bg-orange-500 hover:bg-orange-600 text-white px-10 h-14 font-black shadow-lg text-lg transition-all hover:shadow-orange-500/20 active:scale-95">
            {isSubmitting ? 'Sending...' : 'Download Now'}
          </Button>
        </div>

        <div className="flex items-start gap-3 text-left">
          <div className="relative flex items-center h-5">
            <input
              type="checkbox"
              id="gdpr-full"
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              className="h-5 w-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500 cursor-pointer accent-orange-500"
            />
          </div>
          <label htmlFor="gdpr-full" className="text-sm font-medium text-gray-600 cursor-pointer select-none">
            I agree to receive the Roadmap. View our <a href="/privacy" className="underline text-blue-600 hover:text-blue-800 transition-colors">Privacy Policy</a>.
          </label>
        </div>

        {submitMessage && (
          <div className={`p-4 rounded-xl shadow-xl border-2 transition-all duration-300 animate-in fade-in zoom-in-95 ${isSuccess ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
            <p className="text-center font-bold uppercase tracking-wide">
              {submitMessage}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default NewsletterForm;