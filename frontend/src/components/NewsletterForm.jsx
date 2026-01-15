import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NewsletterForm = ({ className = '' }) => {
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

  return (
    <div className={className}>
      {/* GLOBAL OVERRIDE: Forces all text inside the card to be visible */}
      <style dangerouslySetInnerHTML={{ __html: `
        .form-status-text { color: #000000 !important; font-weight: 900 !important; }
        .roadmap-card-title { color: #111827 !important; font-weight: 800 !important; margin-bottom: 1rem; display: block; font-size: 1.5rem; }
      `}} />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            required
            className="flex-1 bg-white !text-gray-900 border-gray-300 h-12 shadow-sm"
          />
          <Button type="submit" disabled={isSubmitting} className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-12 font-extrabold shadow-md">
            {isSubmitting ? 'Processing...' : 'Download Now'}
          </Button>
        </div>

        <div className="flex items-start gap-2 text-left">
          <input type="checkbox" id="gdpr-final" checked={gdprConsent} onChange={(e) => setGdprConsent(e.target.checked)} className="mt-1 h-4 w-4 accent-orange-500" />
          <label htmlFor="gdpr-final" className="text-sm text-gray-600">
            I agree to receive the Roadmap. View <a href="/privacy" className="underline text-blue-600">Privacy Policy</a>.
          </label>
        </div>

        {submitMessage && (
          <div 
            className="p-6 rounded-lg shadow-2xl border-4 border-black animate-in fade-in"
            style={{ backgroundColor: isSuccess ? '#fef08a' : '#fecaca', textAlign: 'center' }}
          >
            <span className="form-status-text block uppercase text-lg">
              {submitMessage}
            </span>
          </div>
        )}
        {/* FOOTER REMOVED FROM HERE TO STOP DUPLICATION */}
      </form>
    </div>
  );
};

export default NewsletterForm;