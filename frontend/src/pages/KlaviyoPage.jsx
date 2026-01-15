import React from 'react';
import { ArrowRight, CheckCircle, Zap, TrendingUp, Mail, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import InternalLinkBlock from '../components/InternalLinkBlock';
import NewsletterForm from '../components/NewsletterForm';
import { companyData, klaviyoServices, awards, klaviyoSuccessStories, klaviyoStats } from '../data/mock';

const KlaviyoPage = () => {
  // Helper for responsive images (Fixed LCP diagnostic)
  const getOptimizedImage = (url) => {
    if (!url) return { src: '', srcSet: null };
    // If it's a local optimized image, we serve it directly
    if (url.includes('/images/optimized/')) {
      return { src: url, srcSet: null };
    }
    // If it's Unsplash, we apply our resizing logic
    if (url.includes('unsplash.com')) {
      const baseUrl = url.split('?')[0];
      return {
        src: `${baseUrl}?q=80&w=1200&auto=format&fm=webp`,
        srcSet: `${baseUrl}?q=80&w=600&auto=format&fm=webp 600w, ${baseUrl}?q=80&w=1200&auto=format&fm=webp 1200w`
      };
    }
    return { src: url, srcSet: null };
  };

  const klaviyoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Klaviyo Email Marketing Services",
        "description": "Expert Klaviyo email marketing and automation for Shopify brands.",
        "provider": { "@type": "Organization", "name": companyData.name, "url": "https://devaland.com" }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Best Klaviyo Flows & Automation Agency | 45% Revenue Increase Guaranteed"
        description="Get the best Klaviyo flows: abandoned cart, welcome series, win-back & Black Friday campaigns. Expert Klaviyo automation agency with proven results."
        canonical="https://devaland.com/klaviyo"
        schema={klaviyoSchema}
      />
      
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Klaviyo Email Marketing', href: '/klaviyo' }
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <Badge className="mb-4 bg-purple-100 text-purple-800">Klaviyo Certified Partners</Badge>
                <h1 className="text-5xl md:text-6xl font-display text-gray-900 mb-6">
                  Best Klaviyo Flows & Automation for Shopify & E-commerce
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Get proven Klaviyo automation flows: abandoned cart recovery, welcome series, and Black Friday campaigns.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-lg">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                      <span>Get Free Klaviyo Audit</span>
                      <ArrowRight size={20} />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="animate-fade-in-up delay-300">
                <img 
                  src="/images/optimized/services/klaviyo.webp"
                  alt="Email Marketing Dashboard"
                  width="600"
                  height="400"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full rounded-2xl shadow-2xl hover-scale"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">Complete Klaviyo Services</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {klaviyoServices.map((service) => (
                <Card key={service.id} className="hover-lift">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="mb-6">
                      {/* ACCESSIBILITY FIX: Changed h4 to h3 for hierarchy */}
                      <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                      <ul className="space-y-2">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <CheckCircle size={16} className="text-purple-600 mr-3" /> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">Choose Your Growth Plan</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {/* Pricing Cards (Fixing h4 -> h3) */}
              {['DIY Setup', 'Growth', 'Scale'].map((plan, idx) => (
                <Card key={idx} className="border-2 hover:border-purple-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan}</h3>
                    <Button asChild className="w-full mt-4 bg-purple-600 text-white">
                      <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}

              {/* Performance Plan - ACCESSIBILITY FIX: Solid background, no opacity */}
              <Card className="border-2 border-green-500 shadow-xl bg-white relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-600 text-white px-4 py-1.5 text-sm font-bold opacity-100 shadow-md">
                    💰 RISK-FREE
                  </Badge>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Performance</h3>
                  <p className="text-green-600 font-bold text-4xl mb-4">$0 <span className="text-sm text-gray-500">/mo</span></p>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Apply Now</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources Section - SEO FIX: Descriptive Links */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-4xl font-display mb-12">Klaviyo Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Go beyond basic metrics like open rates.</p>
                  <Link 
                    to="/blog/advanced-klaviyo-analytics-beyond-open-and-click-rates"
                    className="text-purple-600 font-bold text-sm inline-flex items-center gap-1"
                  >
                    Read our Klaviyo Analytics Guide <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
              {/* ... Other resource cards with similar descriptive links ... */}
            </div>
          </div>
        </section>

        {/* Newsletter Section - ACCESSIBILITY FIX: Contrast */}
        <section className="section-padding bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-display mb-4 text-white">
              Stay Updated on Klaviyo Best Practices
            </h2>
            <p className="text-xl mb-8 text-white opacity-100 font-medium">
              Get Klaviyo tips, automation strategies, and e-commerce insights delivered monthly.
            </p>
            <NewsletterForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default KlaviyoPage;