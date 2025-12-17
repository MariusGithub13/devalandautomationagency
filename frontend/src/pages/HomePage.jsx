import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Sparkles, Zap, Brain, Mail, Rocket, Settings, Bot, Briefcase, TrendingUp, ExternalLink, Target, BarChart3, Users, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import InternalLinkBlock from '../components/InternalLinkBlock';
import NewsletterForm from '../components/NewsletterForm';
import { companyData, heroImages, services, caseStudies, awards } from '../data/mock';
import robotLadyImage from '../assets/Devaland-robot-lady.jpeg';

const HomePage = () => {
  const serviceConfig = {
    1: { icon: Rocket, gradient: 'from-blue-500 to-blue-600' },
    2: { icon: Briefcase, gradient: 'from-green-500 to-green-600' },
    3: { icon: Settings, gradient: 'from-purple-500 to-purple-600' },
    4: { icon: Bot, gradient: 'from-orange-500 to-orange-600' }
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Devaland Marketing S.R.L.",
    "alternateName": "Devaland",
    "url": "https://devaland.com",
    "logo": "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+40-721-269-312",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sântandrei 13",
      "addressLocality": "Simeria",
      "postalCode": "335903",
      "addressRegion": "Hunedoara County",
      "addressCountry": "RO"
    },
    "sameAs": [
      "https://www.linkedin.com/company/devaland/",
      "https://www.linkedin.com/in/marius-andronie/",
      "https://www.facebook.com/marius.andronie/",
      "https://www.instagram.com/mariusandronie/",
      "https://www.youtube.com/@devaland13",
      "https://www.trustpilot.com/review/devaland.com"
    ],
    "description": "Leading automation agency specializing in RPA, workflow automation, and Klaviyo email marketing for Shopify brands."
  };

  return (
    <>
      <SEO
        title="#1 Klaviyo Agency + AI Voice Automation | 50+ E-commerce Clients | Devaland"
        description="Trusted by 50+ Shopify brands. Boost email revenue by 45% with expert Klaviyo flows, AI voice agents & 24/7 chatbots. Award-winning automation agency. Free audit + consultation → Book now!"
        canonical="https://devaland.com"
        keywords={[
          "klaviyo email marketing agency",
          "klaviyo automation flows",
          "AI voice agents",
          "AI chatbot development",
          "shopify klaviyo expert",
          "klaviyo abandoned cart",
          "voice AI for business",
          "24/7 customer support automation",
          "klaviyo flow optimization",
          "e-commerce automation agency"
        ]}
        schema={homeSchema}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroImages.primary}
              srcSet={heroImages.primarySrcSet}
              sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
              alt="Digital Transformation"
              width="1200"
              height="593"
              className="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-blue-900/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
                  Turn Automation Into Your #1 Revenue Channel
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                  We help Shopify brands and service businesses increase revenue and cut costs using Klaviyo email automation and AI-powered Voice Agents — without hiring more staff.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="btn-accent text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift animate-pulse-glow"
                  >
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                      <span>Book a Free Revenue &amp; Automation Audit</span>
                      <ArrowRight size={20} />
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="glass text-white border-white/30 font-semibold px-8 py-4 text-lg rounded-lg hover:bg-white/10"
                  >
                    <Link to="/voice-ai">See Live Voice AI Demo (24/7)</Link>
                  </Button>
                </div>

                <ul className="flex flex-col sm:flex-row gap-4 text-white/90 mb-8 text-base md:text-lg">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    45–85% Revenue Growth
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    50,000+ Hours Automated
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    Proven with 50+ Shopify &amp; DTC Clients
                  </li>
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/90 text-blue-900">Certified Klaviyo Partner</Badge>
                  <Badge className="bg-green-100 text-green-800">ROI-Driven Automation</Badge>
                  <Badge className="bg-blue-100 text-blue-800">Featured in New York Weekly</Badge>
                </div>
              </div>

              {/* Stats Card */}
              <div className="animate-fade-in-up delay-300">
                <Card className="glass border-white/20 p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-white mb-6">Proven Results</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">{companyData.stats.hoursAutomated}</div>
                        <div className="text-white/80 font-medium">Hours Automated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">{companyData.stats.clientsSaved}</div>
                        <div className="text-white/80 font-medium">Client Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">{companyData.stats.projectsDelivered}</div>
                        <div className="text-white/80 font-medium">Projects Delivered</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-400 mb-2">{companyData.stats.yearsExperience}</div>
                        <div className="text-white/80 font-medium">Years Experience</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* EVERYTHING BELOW REMAINS UNCHANGED */}
        {/* … rest of your file exactly as you pasted … */}
      </div>
    </>
  );
};

export default HomePage;
