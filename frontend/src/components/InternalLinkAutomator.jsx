import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

// Comprehensive Internal Link Strategy
// Keywords are mapped to high-value pages to improve SEO and user journey
const KEYWORD_MAP = {
  // Services
  'Klaviyo': '/klaviyo',
  'Email Marketing': '/klaviyo',
  'Voice AI': '/voice-ai',
  'RPA': '/services',
  'Automation': '/services',
  'Shopify': '/klaviyo',

  // High-Intent Transformation
  'Black Friday': '/klaviyo-black-friday-strategy',
  'BFCM': '/klaviyo-black-friday-strategy',
  'Segmentation': '/klaviyo-segmentation-strategies',
  'Flows': '/klaviyo-flows-examples',
  'Case Studies': '/case-studies',
  'Audit': '/contact',
  'Strategy': '/contact',

  // Blog Content Clusters
  'SMS Marketing': '/blog/sms-marketing-the-perfect-complement-to-email',
  'Analytics': '/blog/advanced-klaviyo-analytics-beyond-open-and-click-rates',
  'Personalization': '/blog/building-customer-loyalty-through-email-personalization',
  'Chat Widget': '/blog/all-in-one-chat-widget-complete-guide'
};

const InternalLinkAutomator = ({ text }) => {
  // Memoize logic to avoid performance hit on every render
  const processedText = useMemo(() => {
    if (!text) return null;

    // Split text by keywords to insert Link components
    // We use a regex safely constructed from the map keys
    const keywords = Object.keys(KEYWORD_MAP);

    // Create a regex that matches keywords but respects word boundaries
    // Case-insensitive (i)
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');

    const parts = text.split(regex);

    // If no match, return original string
    if (parts.length === 1) return text;

    // Track which keywords we've already linked in this paragraph
    // Heuristic: Only link the FIRST occurrence of a keyword per paragraph to avoid spamminess
    const linkedKeywords = new Set();

    return parts.map((part, index) => {
      // Check if this part is a keyword (case-insensitive check against map)
      const lowerPart = part.toLowerCase();
      // Find the original case-sensitive key that matches
      const matchKey = keywords.find(k => k.toLowerCase() === lowerPart);

      if (matchKey) {
        // If we haven't linked this keyword in this block yet
        if (!linkedKeywords.has(matchKey)) {
          linkedKeywords.add(matchKey);
          return (
            <Link
              key={index}
              to={KEYWORD_MAP[matchKey]}
              className="text-blue-600 font-semibold hover:underline decoration-blue-300 underline-offset-2 transition-colors"
              title={`Learn more about ${matchKey}`}
            >
              {part}
            </Link>
          );
        }
      }
      return part;
    });
  }, [text]);

  return <>{processedText}</>;
};

export default InternalLinkAutomator;