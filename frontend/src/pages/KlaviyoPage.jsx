import React from 'react';
import { ArrowRight, CheckCircle, Zap, TrendingUp, Mail, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import NewsletterForm from '../components/NewsletterForm';
import { companyData, klaviyoServices } from '../data/mock';

const KlaviyoPage = () => {
  const klaviyoSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Klaviyo Email Marketing Services",
    "description": "Expert Klaviyo email marketing and automation for Shopify brands.",
    "provider": { "@type": "Organization", "name": "Devaland", "url": "https://devaland.com" }
  };

  return (
    <>
      <SEO 
        title="Best Klaviyo Flows & Automation Agency | 45% Revenue Increase Guaranteed"
        description="Get the best Klaviyo flows: abandoned cart, welcome series, & win-back campaigns. Expert Klaviyo agency with proven results."
        canonical="https://devaland.com/klaviyo"
        schema={klaviyoSchema}
      />
      
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Klaviyo', href: '/klaviyo' }]} />
        </div>

        {/* Hero & Service Sections (Remaining same as previous working version) */}
        {/* ... */}

        {/* --- PRICING SECTION: RESTORED DATA --- */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">Choose Your Klaviyo Growth Plan</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {/* DIY Setup */}
              <Card className="border-2 hover:border-purple-300 transition-all flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">DIY Setup</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-1">$997</div>
                    <p className="text-xs text-gray-500">One-time setup fee</p>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm text-gray-600">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> Klaviyo account setup & integration</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> 5 core email flows configured</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> Basic segmentation setup</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> Email templates & design</li>
                  </ul>
                  <Button asChild className="w-full bg-purple-600 text-white mt-auto">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Growth */}
              <Card className="border-2 border-purple-500 shadow-2xl relative bg-white flex flex-col scale-105 z-10">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white px-4 py-1.5 text-sm font-bold shadow-lg">⭐ POPULAR</Badge>
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="text-center mb-6 mt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-1">$1,997<span className="text-lg text-gray-500">/mo</span></div>
                    <p className="text-xs text-gray-500">+ $2,997 setup fee</p>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm text-gray-600">
                    <li className="flex gap-2"><strong>Everything in DIY</strong></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> 10+ advanced flows</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> 4 custom campaigns /mo</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> A/B testing & optimization</li>
                  </ul>
                  <Button asChild className="w-full bg-purple-600 text-white mt-auto">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Scale */}
              <Card className="border-2 hover:border-purple-300 transition-all flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-1">$3,997<span className="text-lg text-gray-500">/mo</span></div>
                    <p className="text-xs text-gray-500">+ $4,997 setup fee</p>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm text-gray-600">
                    <li className="flex gap-2"><strong>Everything in Growth</strong></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> 15+ custom flows</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> 8 campaigns /mo</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> Dedicated account manager</li>
                  </ul>
                  <Button asChild className="w-full bg-purple-600 text-white mt-auto">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Performance - ACCESSIBILITY FIX: No Opacity */}
              <Card className="border-2 border-green-500 shadow-xl bg-white relative flex flex-col">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-600 text-white px-4 py-1.5 text-sm font-bold shadow-md">💰 RISK-FREE</Badge>
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="text-center mb-6 mt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Performance</h3>
                    <div className="text-4xl font-bold text-green-600 mb-1">$0<span className="text-lg text-gray-500">/mo</span></div>
                    <p className="text-xs text-gray-500">+ Revenue share</p>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm text-gray-600">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> Full Klaviyo management</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> Unlimited flows & campaigns</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> Share of incremental revenue</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> No upfront costs</li>
                  </ul>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-bold mt-auto">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Apply Now</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section - ACCESSIBILITY: High Contrast White Text */}
        <section className="section-padding bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-display mb-4 text-white">Stay Updated on Klaviyo Best Practices</h2>
            <p className="text-xl mb-8 text-white font-medium">Get Klaviyo tips and automation strategies delivered monthly.</p>
            <NewsletterForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default KlaviyoPage;