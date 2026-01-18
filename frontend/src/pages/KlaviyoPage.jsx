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
import { companyData, klaviyoServices, serviceImages, awards, klaviyoSuccessStories, klaviyoStats } from '../data/mock';

const KlaviyoPage = () => {
  const klaviyoSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Klaviyo Email Marketing Services",
        "description": "Expert Klaviyo email marketing and automation for Shopify brands. Official Klaviyo Partner agency specializing in flow optimization, campaign management, and revenue growth.",
        "provider": {
          "@type": "Organization",
          "name": "Devaland Marketing S.R.L.",
          "url": "https://devaland.com"
        },
        "areaServed": "Worldwide",
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://devaland.com/klaviyo"
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Best Klaviyo Flows & Automation Agency | 45% Revenue Increase Guaranteed"
        description="Get the best Klaviyo flows: abandoned cart, welcome series, win-back & Black Friday campaigns. Expert Klaviyo automation agency with proven results. Book free audit."
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
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Get proven Klaviyo automation flows: abandoned cart recovery, welcome series, Black Friday campaigns & GDPR-compliant email marketing.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-purple-600 mb-2">45%</div>
                    <div className="text-sm text-gray-600">Average Revenue Increase</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-green-600 mb-2">180%</div>
                    <div className="text-sm text-gray-700">Email ROI Improvement</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-lg">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                      <span>Get Free Klaviyo Audit</span>
                      <ArrowRight size={20} />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="animate-fade-in-up delay-300">
                <img
                  src={serviceImages.klaviyo}
                  alt="Klaviyo Email Marketing Dashboard"
                  width="600"
                  height="400"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="section-padding-sm bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Recognized Excellence</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {awards.map((award, index) => (
                  <Card key={index} className="hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap size={32} className="text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{award.title}</h3>
                      <p className="text-gray-700 text-sm">{award.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-16 text-center">
              Complete Klaviyo Email Marketing Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {klaviyoServices.map((service) => (
                <Card key={service.id} className="hover-lift">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Mail size={24} className="text-purple-600" />
                      </div>
                      <Badge className="bg-green-100 text-green-800">{service.results}</Badge>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <CheckCircle size={16} className="text-purple-600 mr-3" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section id="klaviyo-success-stories" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-16 text-center">Klaviyo Success Stories</h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {klaviyoSuccessStories.map((story) => (
                <Card key={story.id} className="hover-lift overflow-hidden">
                  <CardHeader className="bg-gray-50 border-b">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">{story.initials}</div>
                      <div>
                        <CardTitle className="text-xl">{story.client}</CardTitle>
                        <Badge variant="outline" className="mt-1">{story.industry}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 mb-6">{story.overview}</p>
                    <div className="grid grid-cols-2 gap-4 bg-purple-50 p-4 rounded-xl">
                      <div><div className="text-2xl font-bold text-purple-600">{story.results.revenueIncrease}</div><div className="text-xs text-gray-500 uppercase">Revenue</div></div>
                      <div><div className="text-2xl font-bold text-green-600">{story.results.openRate}</div><div className="text-xs text-gray-500 uppercase">Open Rate</div></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FULL PRICING RESTORATION */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-16 text-center">Choose Your Klaviyo Growth Plan</h2>
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
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> Account setup & integration</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> 5 core flows configured</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> Basic segmentation</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> Custom email templates</li>
                  </ul>
                  <Button asChild className="w-full bg-purple-600 text-white mt-auto"><a href={companyData.calendly}>Get Started</a></Button>
                </CardContent>
              </Card>

              {/* Growth */}
              <Card className="border-2 border-purple-500 shadow-2xl relative bg-white flex flex-col scale-105 z-10">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white px-4 py-1.5 text-sm font-bold shadow-lg">⭐ MOST POPULAR</Badge>
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
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> 4 campaigns per month</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> Full A/B testing</li>
                  </ul>
                  <Button asChild className="w-full bg-purple-600 text-white mt-auto"><a href={companyData.calendly}>Get Started</a></Button>
                </CardContent>
              </Card>

              {/* Scale */}
              <Card className="border-2 hover:border-purple-300 flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Scale</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-1">$3,997<span className="text-lg text-gray-500">/mo</span></div>
                    <p className="text-xs text-gray-500">+ $4,997 setup fee</p>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm text-gray-600">
                    <li className="flex gap-2"><strong>Everything in Growth</strong></li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> 15+ complex flows</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> 8 campaigns per month</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" /> Dedicated Manager</li>
                  </ul>
                  <Button asChild variant="outline" className="w-full mt-auto"><a href={companyData.calendly}>Get Started</a></Button>
                </CardContent>
              </Card>

              {/* Performance */}
              <Card className="border-2 border-green-500 shadow-xl bg-white relative flex flex-col">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-600 text-white px-4 py-1.5 text-sm font-bold shadow-md">💰 RISK-FREE</Badge>
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="text-center mb-6 mt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Performance</h3>
                    <div className="text-4xl font-bold text-green-600 mb-1">$0<span className="text-lg text-gray-500">/mo</span></div>
                    <p className="text-xs text-gray-500">+ 15-20% incremental revenue</p>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm text-gray-600">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> Zero upfront cost</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> Full management</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> Unlimited automation</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" /> Profit-sharing model</li>
                  </ul>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-bold mt-auto"><a href={companyData.calendly}>Apply Now</a></Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-padding bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-display mb-4 text-white">Stay Updated on Klaviyo Best Practices</h2>
            <p className="text-xl mb-8 text-white font-medium opacity-100">Get automation insights and Klaviyo tips delivered monthly.</p>
            <NewsletterForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default KlaviyoPage;