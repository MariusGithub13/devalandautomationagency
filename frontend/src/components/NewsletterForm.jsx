import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NewsletterForm = ({ compact = false, className = '' }) => {
  const [email, setEmail] = useState('');
  const [botField, setBotField] = useState('');
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
    if (isSubmitting || botField) return;
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
      }
    } catch (error) {
      setSubmitMessage('Failed to subscribe. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSuccess = submitMessage.includes('✓');

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white !text-gray-900 h-12"
            required
          />
          <Button type="submit" disabled={isSubmitting} className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-12 font-bold shadow-md">
            {isSubmitting ? 'Processing...' : 'Download Now'}
          </Button>
        </div>

        <div className="flex items-start gap-2 text-left">
          <input type="checkbox" checked={gdprConsent} onChange={(e) => setGdprConsent(e.target.checked)} className="mt-1 h-4 w-4" />
          <label className="text-sm text-white">I agree to receive the 2026 Roadmap. View <a href="/privacy" className="underline">Privacy Policy</a>.</label>
        </div>

        {submitMessage && (
          <div 
            className="text-sm font-black p-4 rounded-lg shadow-2xl border-2 border-white animate-in fade-in"
            style={{ 
              backgroundColor: isSuccess ? '#064e3b' : '#7f1d1d', // Solid Deep Green or Deep Red
              color: '#ffffff',
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