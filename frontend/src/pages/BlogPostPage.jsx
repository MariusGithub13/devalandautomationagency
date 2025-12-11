import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Facebook, Twitter, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import VoiceAIAdvantages from '../components/VoiceAIAdvantages';
import PhoneAICallout from '../components/PhoneAICallout';
import { blogPosts } from '../data/mock';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [isTocOpen, setIsTocOpen] = useState(false);
  
  // Find the blog post by slug (check explicit slug property first, then fall back to title transformation)
  const post = blogPosts.find(p => 
    p.slug === slug || 
    p.title.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-') === slug
  );

  if (!post) {
    return (
      <div className="section-padding bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary text-white px-6 py-3 rounded-lg">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Generate canonical URL from slug
  const canonicalUrl = `https://devaland.com/blog/${slug}`;
  
  // Generate FAQ schema for specific high-traffic posts
  const getFAQSchema = (postId) => {
    const faqSchemas = {
      1: { // Best 10 Klaviyo Automation Flows
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are Klaviyo automation flows?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Klaviyo automation flows are pre-built email sequences that trigger automatically based on customer behavior, demographics, or time-based events. Unlike one-time campaigns, these flows run continuously, engaging customers at the perfect moment in their buying journey."
            }
          },
          {
            "@type": "Question",
            "name": "How much do Klaviyo automation flows increase revenue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Klaviyo automation flows typically increase email marketing revenue by 200-320% compared to broadcast emails alone. Welcome series can generate 13% of total email revenue, abandoned cart flows can recover 15-25% of lost sales, and post-purchase flows can increase repeat purchase rates by 30-50%."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between Klaviyo flows and campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Flows are automated email sequences triggered by customer behavior or time-based events that run continuously. Campaigns are one-time email broadcasts sent to specific segments at scheduled times. Flows provide personalized, timely messaging for individual customer journeys, while campaigns deliver broad messages to multiple customers simultaneously."
            }
          },
          {
            "@type": "Question",
            "name": "How long should a welcome email series be in Klaviyo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The optimal welcome series length is 3-5 emails sent over 7-14 days. This provides enough touchpoints to build relationships without overwhelming new subscribers. High-value or complex products may warrant longer series (up to 7 emails), while simple products work well with shorter 3-email sequences."
            }
          },
          {
            "@type": "Question",
            "name": "How do I set up automation flows if I'm new to Klaviyo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Start with essentials: welcome series and abandoned cart. Use Klaviyo templates and configure triggers carefully. Test with small segments first, keep personalization simple initially, monitor performance weekly, and gradually expand. Consider professional help for optimal results. Most beginners can have basic flows running within 1-2 weeks."
            }
          }
        ]
      },
      2: { // Best Email Segmentation Strategies
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is email segmentation and why is it important?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Email segmentation involves dividing your email list into smaller, more targeted groups based on specific criteria like demographics, behavior, or purchase history. It's important because segmented campaigns achieve 14.31% higher open rates and 100.95% higher click-through rates than non-segmented campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "What are the best ways to segment email lists?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Best segmentation methods include: demographic segmentation (age, location), behavioral segmentation (purchase history, website activity), RFM analysis (recency, frequency, monetary), lifecycle stage segmentation (prospects, new customers, VIPs), and predictive segmentation (likelihood to purchase, churn risk)."
            }
          },
          {
            "@type": "Question",
            "name": "How many segments should I create?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Start with 3-5 basic segments (engaged vs unengaged, customers vs prospects, geographic regions). Gradually add complexity as you collect more data. Avoid over-segmentation - having too many small segments can make management difficult and reduce effectiveness."
            }
          }
        ]
      },
      5: { // Advanced Klaviyo Analytics
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What metrics should I track in Klaviyo besides open and click rates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Focus on revenue-focused metrics: Revenue Per Recipient (RPR), Customer Lifetime Value (CLV) impact, Placed Order Rate, attribution analysis, and cohort performance. These metrics directly tie email performance to business results and show true ROI."
            }
          },
          {
            "@type": "Question",
            "name": "How do I measure email marketing ROI in Klaviyo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use Klaviyo's revenue attribution dashboard to track total attributed revenue by channel, campaign, and flow. Calculate ROI as (Email Revenue - Email Costs) / Email Costs. Monitor revenue per recipient, conversion rates by segment, and customer lifetime value impact."
            }
          },
          {
            "@type": "Question",
            "name": "What is Revenue Per Recipient and why does it matter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Revenue Per Recipient (RPR) is total revenue divided by total email recipients. It's the most important email metric because it directly ties email performance to business results, accounts for both engagement and conversion, and helps compare campaign effectiveness across different segments."
            }
          }
        ]
      },
      3: { // Maximizing Black Friday Sales with Klaviyo
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "When should I start preparing my Black Friday email campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Start planning 8-12 weeks before Black Friday. Begin audience building 8 weeks out, send preview campaigns 4 weeks before, offer VIP early access 2 weeks before, and launch full campaign during Black Friday week. Early preparation allows for proper segmentation, inventory planning, and creative development."
            }
          },
          {
            "@type": "Question",
            "name": "How many emails should I send during Black Friday weekend?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Send 5-7 emails during Black Friday weekend: Black Friday launch (Friday morning), reminder (Friday evening), Saturday flash deals, Sunday preview of Cyber Monday, Cyber Monday launch, mid-day reminder, and final hours urgency email. Segment by engagement to avoid over-mailing less active subscribers."
            }
          },
          {
            "@type": "Question",
            "name": "What email subject lines work best for Black Friday?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use urgency and scarcity ('ENDING SOON: 50% off', 'Only 127 left'), personalization ('[First Name], your Black Friday deals'), curiosity ('The deal you've been waiting for...'), and clear value propositions ('60% off everything - 24 hours only'). A/B test different approaches with your audience."
            }
          },
          {
            "@type": "Question",
            "name": "How do I reduce cart abandonment during Black Friday?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Implement aggressive abandoned cart recovery with 1-hour, 6-hour, and 24-hour follow-ups. Use stronger urgency messaging, show stock scarcity, offer additional discounts if needed, and ensure mobile optimization. Monitor recovery rates in real-time and adjust strategy accordingly."
            }
          }
        ]
      },
      4: { // SMS Marketing: The Perfect Complement to Email
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the typical ROI for SMS marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SMS marketing delivers an average ROI of $71 for every $1 spent, with 98% open rates and 45% response rates. SMS campaigns see 6x higher conversion rates than email, making it one of the most profitable marketing channels when used strategically."
            }
          },
          {
            "@type": "Question",
            "name": "How many SMS messages should I send per month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Send 2-4 promotional SMS messages per month to avoid opt-outs. Transactional messages (order confirmations, shipping updates) can be sent as needed. Monitor opt-out rates (keep under 5%) and adjust frequency based on engagement. High-value customers may tolerate more frequent messaging."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need permission to send SMS marketing messages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you must obtain explicit opt-in consent before sending SMS marketing messages. This is required by TCPA (US) and GDPR (EU) regulations. Use double opt-in when possible, clearly explain message frequency, and provide easy opt-out instructions in every message."
            }
          },
          {
            "@type": "Question",
            "name": "How should I integrate SMS with my email campaigns?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use email for detailed content and product showcases, then follow up with SMS for urgent reminders and time-sensitive offers. For abandoned carts, send email first (1 hour), then SMS for urgency (6 hours). For welcome series, send comprehensive email sequence complemented by a quick SMS welcome with exclusive discount."
            }
          }
        ]
      },
      6: { // Building Customer Loyalty Through Email Personalization
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is email personalization beyond using first names?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Advanced email personalization includes behavioral personalization (browsing history, purchase patterns), predictive personalization (AI-driven recommendations, churn risk), contextual personalization (real-time inventory, weather-based), and lifecycle stage customization (new customer vs VIP). True personalization creates individualized experiences that match customer interests and needs."
            }
          },
          {
            "@type": "Question",
            "name": "How much does email personalization increase conversion rates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Personalized emails drive 6x higher transaction rates and generate 18x more revenue than generic broadcast emails. Personalization increases open rates by 26%, click rates by 14%, and conversion rates by 10-15%. Customer lifetime value increases by 15-30% with consistent personalization."
            }
          },
          {
            "@type": "Question",
            "name": "What data should I collect for email personalization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Collect zero-party data (preferences, interests stated by customers), first-party data (purchase history, website behavior, email engagement), demographic data (age, location, gender), and behavioral data (browsing patterns, cart behavior, content consumption). Focus on data that directly improves customer experience."
            }
          },
          {
            "@type": "Question",
            "name": "How do I avoid creepy over-personalization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Be transparent about data usage, provide clear value exchange, give customers control over personalization levels, avoid using too much personal data at once, and focus on helpful recommendations rather than surveillance. If personalization feels intrusive, scale back and let customers opt into deeper personalization."
            }
          }
        ]
      },
      7: { // All-In-One Chat Widget
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an All-In-One Chat Widget?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An All-In-One Chat Widget combines AI chatbots, voice AI agents, and live chat in a single interface. It provides 24/7 customer support, captures leads, answers questions instantly, and seamlessly transfers complex issues to human agents. It typically achieves 90% visitor engagement rates with under-10-second response times."
            }
          },
          {
            "@type": "Question",
            "name": "How much can a chat widget reduce customer support costs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All-In-One Chat Widgets reduce customer support costs by 80% per interaction. They handle 78-82% of inquiries autonomously, decrease cost-per-call from $10-15 (human agents) to $0.50-2 (AI), and allow businesses to serve thousands of customers simultaneously without hiring additional staff."
            }
          },
          {
            "@type": "Question",
            "name": "Can chat widgets capture leads outside business hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, chat widgets capture 60% of leads outside business hours. With 67% of customers expecting immediate responses and 82% wanting instant help, 24/7 chat widgets prevent lead loss by engaging visitors when human agents are unavailable, qualifying leads, and scheduling follow-ups."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical ROI for implementing a chat widget?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Businesses achieve 1,782% first-year ROI from All-In-One Chat Widgets. Benefits include 35-50% conversion rate increases, 80% cost reduction per interaction, 24/7 lead capture, 85-95% customer satisfaction rates, and the ability to handle unlimited simultaneous conversations without additional staffing costs."
            }
          }
        ]
      },
      8: { // Voice AI Agents
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes Voice AI Agents sound human?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Voice AI Agents use advanced text-to-speech technology (like ElevenLabs) combined with RAG (Retrieval-Augmented Generation) to sound natural. They achieve 95% human-like voice quality, understand context, remember conversation history, adjust tone based on emotional cues, and speak with natural prosody and inflection across 50+ languages."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Voice AI reduce customer service costs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Voice AI reduces costs by 90-95% at scale. Traditional call center agents cost $30,000-50,000 annually plus overhead, while Voice AI costs $497-997 monthly and handles thousands of calls simultaneously. Cost-per-call drops from $10-15 (human) to $0.50-2 (AI), delivering 67% cost savings and 208% ROI in the first year."
            }
          },
          {
            "@type": "Question",
            "name": "What languages do Voice AI Agents support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Voice AI Agents support 50+ languages including English, Spanish, French, Italian, German, Portuguese, Dutch, Russian, Japanese, Mandarin, Hindi, Arabic, and more. They can switch languages mid-conversation and maintain consistent voice characteristics across all languages using advanced voice cloning technology."
            }
          },
          {
            "@type": "Question",
            "name": "Can Voice AI handle complex customer service scenarios?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Voice AI achieves 78-82% autonomous call resolution. It handles appointment scheduling, order processing, FAQs, troubleshooting, and multilingual support. For complex scenarios requiring human judgment, it seamlessly escalates to live agents with full conversation context. Implementation includes CRM integration, custom workflows, and business-specific training."
            }
          }
        ]
      },
      9: { // Voice AI Implementation
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is RAG in Voice AI technology?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RAG (Retrieval-Augmented Generation) combines large language models with your specific business knowledge. It converts your documents into searchable vectors, retrieves relevant information based on customer questions, and generates accurate responses grounded in your actual business data. This achieves 95%+ accuracy compared to 60-70% with generic chatbots."
            }
          },
          {
            "@type": "Question",
            "name": "How long does Voice AI implementation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Voice AI implementation takes 6-8 weeks total: Week 1-2 planning and discovery, Week 3-4 development and training, Week 5-6 testing and pilot launch, Week 7-8 full launch and optimization. Custom demos can be created in 24-48 hours. Many businesses see positive ROI within 2-4 months of implementation."
            }
          },
          {
            "@type": "Question",
            "name": "What ROI can I expect from Voice AI implementation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Small businesses (1-10 employees) see 105-289% ROI with 4-7 month break-even. Medium businesses (11-50 employees) achieve 509-1056% ROI with 2-3 month break-even. Large businesses (51+ employees) reach 994-2313% ROI with 1-2 month break-even. Benefits include 60-80% automation, 85-95% customer satisfaction, and significant staff time savings."
            }
          },
          {
            "@type": "Question",
            "name": "What industries benefit most from Voice AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "E-commerce (product info, order tracking, returns), Healthcare (appointment scheduling, insurance verification, patient intake), Restaurants (phone orders, reservations, delivery coordination), and Professional Services (consultation scheduling, client intake, service information) see the highest ROI. Any business with 50+ daily customer calls benefits significantly."
            }
          }
        ]
      }
    };
    
    return faqSchemas[postId] || null;
  };

  // Generate Article schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image || "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Devaland Marketing S.R.L.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "keywords": post.tags?.join(", ") || post.category,
    "articleSection": post.category,
    "wordCount": post.content?.length || 1000,
    "timeRequired": post.readTime
  };

  // Combine Article schema with FAQ schema if available
  const faqSchema = getFAQSchema(post.id);
  const schemas = faqSchema ? [articleSchema, faqSchema] : articleSchema;

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(post.title);

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={canonicalUrl}
        ogImage={post.image || "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg"}
        ogType="article"
        keywords={post.tags || [post.category, "email marketing", "automation", "klaviyo"]}
        schema={schemas}
      />
      
      {/* Breadcrumb Navigation */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb 
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${slug}` }
          ]}
        />
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-white/90 hover:text-white mb-8 group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Blog
          </Link>

          {/* Article Meta */}
          <div className="mb-6">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Image */}
              <div className="relative overflow-hidden rounded-xl mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  width="800"
                  height="400"
                  loading="eager"
                  fetchpriority="high"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Table of Contents - Collapsible */}
              {(post.content.includes('##') || post.content.includes('<h2')) && (() => {
                const markdownToHtml = (text) => {
                  if (!text) return '';
                  return text.replace(/^## (.+)$/gm, (_, m) => {
                    const id = m.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
                    return `<h2 id="${id}">${m}</h2>`;
                  }).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n\n/g, '<br/><br/>');
                };

                const contentHtml = markdownToHtml(post.content);
                const headings = [];
                try {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(contentHtml, 'text/html');
                  const hs = Array.from(doc.querySelectorAll('h2'));
                  // Show ALL headings, not just first 8
                  hs.forEach(h => headings.push({ text: h.textContent, id: h.id || h.textContent.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-') }));
                } catch (e) {
                  const matches = post.content.match(/## .+/g) || [];
                  matches.forEach(m => headings.push({ text: m.replace('## ', ''), id: m.replace('## ', '').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-') }));
                }

                if (headings.length === 0) return null;

                return (
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border-2 border-blue-200 shadow-lg">
                    <button
                      onClick={() => setIsTocOpen(!isTocOpen)}
                      className="w-full flex items-center justify-between gap-3 mb-0 pb-4 border-b-2 border-blue-200 hover:border-blue-300 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg px-3 py-1.5 text-sm font-bold shadow-md">
                          TOC
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          Table of Contents
                        </h3>
                        <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                          {headings.length} sections
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 font-medium">
                          {isTocOpen ? 'Collapse' : 'Expand'}
                        </span>
                        {isTocOpen ? (
                          <ChevronUp className="text-blue-600 transition-transform" size={20} />
                        ) : (
                          <ChevronDown className="text-blue-600 transition-transform" size={20} />
                        )}
                      </div>
                    </button>
                    
                    {isTocOpen && (
                      <nav className="space-y-1 mt-4 animate-in slide-in-from-top duration-300">
                        {headings.map((heading, index) => (
                          <a
                            key={index}
                            href={`#${heading.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.getElementById(heading.id);
                              if (element) {
                                // Get element position
                                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                // Offset for fixed header (80px) + some padding (20px)
                                const offsetPosition = elementPosition - 100;
                                
                                window.scrollTo({
                                  top: offsetPosition,
                                  behavior: 'smooth'
                                });
                              }
                            }}
                            className="group flex items-start gap-3 text-sm text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg px-4 py-3 hover:bg-white hover:shadow-sm border-l-3 border-transparent hover:border-l-4 hover:border-blue-600"
                          >
                            <span className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-semibold text-gray-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                              {index + 1}
                            </span>
                            <span className="leading-snug flex-1">{heading.text}</span>
                          </a>
                        ))}
                      </nav>
                    )}
                  </div>
                );
              })()}

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <style>{`
                  .prose h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #1f2937;
                    margin-top: 1.25rem;
                    margin-bottom: 0.5rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 3px solid #3b82f6;
                    background: linear-gradient(to right, #eff6ff, transparent);
                    padding-left: 1rem;
                    padding-right: 1rem;
                    padding-top: 0.75rem;
                    border-radius: 0.5rem;
                    position: relative;
                  }
                  .prose h2:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: linear-gradient(to bottom, #3b82f6, #1d4ed8);
                    border-radius: 0.5rem 0 0 0.5rem;
                  }
                  .prose h2:first-of-type {
                    margin-top: 0.25rem;
                  }
                  .prose h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #1f2937;
                    margin-top: 1rem;
                    margin-bottom: 0.4rem;
                    padding-left: 0.75rem;
                    border-left: 3px solid #3b82f6;
                  }
                  .prose h4 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #374151;
                    margin-top: 0.85rem;
                    margin-bottom: 0.4rem;
                  }
                  .prose ul {
                    list-style-type: disc;
                    padding-left: 1.5rem;
                    margin-top: 0.5rem;
                    margin-bottom: 0.5rem;
                  }
                  .prose ol {
                    list-style-type: decimal;
                    padding-left: 1.5rem;
                    margin-top: 0.5rem;
                    margin-bottom: 0.5rem;
                  }
                  .prose li {
                    margin-bottom: 0.25rem;
                    line-height: 1.5;
                  }
                  .prose li:last-child {
                    margin-bottom: 0;
                  }
                  .prose a {
                    color: #2563eb;
                    text-decoration: underline;
                    font-weight: 500;
                    transition: color 0.2s ease;
                  }
                  .prose a:hover {
                    color: #1d4ed8;
                    text-decoration: underline;
                  }
                `}</style>
                <div className="leading-relaxed">
                  {(() => {
                    const markdownToHtml = (text) => {
                      if (!text) return '';
                      
                      let html = text;
                      
                      // Convert H4 headings (#### ) before H3 to avoid conflicts
                      html = html.replace(/^#### (.+)$/gm, (_, m) => {
                        const id = m.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
                        return `<h4 id="${id}">${m}</h4>`;
                      });
                      
                      // Convert H3 headings (### ) before H2 to avoid conflicts
                      html = html.replace(/^### (.+)$/gm, (_, m) => {
                        const id = m.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
                        return `<h3 id="${id}">${m}</h3>`;
                      });
                      
                      // Convert H2 headings (## )
                      html = html.replace(/^## (.+)$/gm, (_, m) => {
                        const id = m.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
                        return `<h2 id="${id}">${m}</h2>`;
                      });
                      
                      // Convert bold markers **text** to <strong>
                      html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                      
                      // Convert bullet lists (lines starting with - or *)
                      html = html.replace(/^([*-]) (.+)$/gm, '<li>$2</li>');
                      
                      // Wrap consecutive <li> elements in <ul>
                      html = html.replace(/(<li>.*?<\/li>\s*)+/gs, (match) => {
                        return `<ul>${match}</ul>`;
                      });
                      
                      // Convert numbered lists (lines starting with number.)
                      html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
                      
                      // Preserve paragraph breaks
                      html = html.replace(/\n\n/g, '<br/><br/>');
                      
                      return html;
                    };

                    // Split content by special markers for component injection
                    const renderContent = () => {
                      const content = post.content;
                      
                      // Check if this is the Voice AI Shopify article (post id 14)
                      if (post.id === 14) {
                        const sections = [];
                        
                        // Split by the Voice AI Advantage section marker
                        const advantageMarker = '**The Voice AI Advantage:**';
                        const phoneMarker = '📞 **Phone AI Sister Agent:**';
                        
                        if (content.includes(advantageMarker)) {
                          const beforeAdvantage = content.substring(0, content.indexOf(advantageMarker));
                          const afterAdvantage = content.substring(content.indexOf(advantageMarker));
                          
                          // Find where the advantage list ends (next ## heading)
                          const nextHeadingMatch = afterAdvantage.match(/\n\n## /);
                          const advantageEndIndex = nextHeadingMatch ? nextHeadingMatch.index : 500;
                          const afterAdvantageList = afterAdvantage.substring(advantageEndIndex);
                          
                          sections.push(
                            <div key="before-advantage" dangerouslySetInnerHTML={{ __html: markdownToHtml(beforeAdvantage) }} />
                          );
                          sections.push(<VoiceAIAdvantages key="voice-ai-advantages" />);
                          
                          // Now check for Phone AI marker in the remaining content
                          if (afterAdvantageList.includes(phoneMarker)) {
                            const beforePhone = afterAdvantageList.substring(0, afterAdvantageList.indexOf(phoneMarker));
                            const afterPhone = afterAdvantageList.substring(afterAdvantageList.indexOf(phoneMarker));
                            
                            // Find where phone section ends (next ### heading)
                            const nextPhoneHeadingMatch = afterPhone.match(/\n\n### /);
                            const phoneEndIndex = nextPhoneHeadingMatch ? nextPhoneHeadingMatch.index : 300;
                            const afterPhoneSection = afterPhone.substring(phoneEndIndex);
                            
                            sections.push(
                              <div key="before-phone" dangerouslySetInnerHTML={{ __html: markdownToHtml(beforePhone) }} />
                            );
                            sections.push(<PhoneAICallout key="phone-ai-callout" />);
                            sections.push(
                              <div key="after-phone" dangerouslySetInnerHTML={{ __html: markdownToHtml(afterPhoneSection) }} />
                            );
                          } else {
                            sections.push(
                              <div key="after-advantage" dangerouslySetInnerHTML={{ __html: markdownToHtml(afterAdvantageList) }} />
                            );
                          }
                          
                          return sections;
                        }
                      }
                      
                      // Default rendering for other posts
                      const contentHtml = markdownToHtml(content);
                      return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
                    };

                    return renderContent();
                  })()}
                </div>
              </div>

              {/* Share Section */}
              <div className="border-t border-gray-200 pt-8 mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <Button 
                    as="a"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </Button>
                  <Button 
                    as="a"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Facebook size={16} />
                    <span>Facebook</span>
                  </Button>
                  <Button 
                    as="a"
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Twitter size={16} />
                    <span>Twitter</span>
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Author</h3>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xl">
                    {post.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{post.author}</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Klaviyo Certified Expert and founder of Devaland Marketing, specializing in e-commerce email marketing automation for Shopify brands.
                    </p>
                    <Link to="/about" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* CTA */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-lg mb-2">Need Help Implementing?</h3>
                  <p className="text-sm text-blue-100 mb-4">
                    Get expert assistance with your Klaviyo automation setup.
                  </p>
                  <a 
                    href="https://calendly.com/devaland/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                  >
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;