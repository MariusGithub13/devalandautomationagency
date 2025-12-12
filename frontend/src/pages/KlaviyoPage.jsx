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
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the best Klaviyo flows for e-commerce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best Klaviyo flows include: 1) Abandoned Cart Recovery (20-30% recovery rate), 2) Welcome Series (50-60% open rate), 3) Post-Purchase Thank You, 4) Browse Abandonment, 5) Win-Back Campaign, 6) Birthday/Anniversary Flows, 7) VIP Customer Flows, 8) Cross-sell/Upsell Flows, 9) Replenishment Reminders, and 10) Seasonal Campaigns (Black Friday/Cyber Monday)."
            }
          },
          {
            "@type": "Question",
            "name": "How do I implement Klaviyo GDPR compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Klaviyo GDPR compliance requires: 1) Double opt-in for EU subscribers, 2) Clear consent forms with explicit permission, 3) Easy unsubscribe options in every email, 4) Data processing agreements with Klaviyo, 5) Privacy policy updates, 6) Right to access and deletion requests handling. We help Shopify stores implement full GDPR-compliant Klaviyo setups with proper consent management."
            }
          },
          {
            "@type": "Question",
            "name": "What is predicted date of next order in Klaviyo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Klaviyo's Predicted Date of Next Order uses AI to forecast when customers will make their next purchase based on historical buying patterns. This predictive analytics feature helps create timely replenishment reminders and win-back campaigns. We optimize this metric to increase repeat purchase rates by 30-50%."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Klaviyo email marketing cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Klaviyo pricing starts at $20/month for up to 500 contacts and scales with your list size. Our agency services range from $2,500 for initial setup to $997-2,997/month for full management. Most clients see 300-500% ROI within 90 days, making it highly profitable investment."
            }
          },
          {
            "@type": "Question",
            "name": "What are Klaviyo flow examples for Shopify stores?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Top Klaviyo flow examples: Abandoned Cart (3-email sequence at 1hr, 24hr, 72hr), Welcome Series (5 emails over 14 days), Post-Purchase (order confirmation + cross-sells), Win-Back (targeting 60-180 day inactive customers), VIP Customer Recognition, Browse Abandonment, Birthday Rewards, Back-in-Stock Alerts. We provide 10+ proven flow templates."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Best Klaviyo Flows & Automation Agency | 45% Revenue Increase Guaranteed"
        description="Get the best Klaviyo flows: abandoned cart, welcome series, win-back & Black Friday campaigns. Expert Klaviyo automation agency with proven results. GDPR-compliant, SMS integration included. 10+ Klaviyo flow examples. Book free audit."
        canonical="https://devaland.com/klaviyo"
        keywords={[
          "best klaviyo flows",
          "klaviyo automation flows",
          "klaviyo black friday campaign",
          "klaviyo bfcm strategy",
          "klaviyo gdpr compliance",
          "klaviyo flows examples",
          "predicted date of next order klaviyo",
          "klaviyo abandoned cart flow",
          "klaviyo sms marketing",
          "klaviyo agency partner"
        ]}
        schema={klaviyoSchema}
      />
      
      <div className="pt-16">
      {/* Breadcrumb Navigation */}
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
                Get proven Klaviyo automation flows: abandoned cart recovery, welcome series, Black Friday campaigns & GDPR-compliant email marketing. 
                Expert Klaviyo agency delivering 45% revenue increases with 10+ automation flow examples.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">45%</div>
                  <div className="text-sm text-gray-600">Average Revenue Increase</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">180%</div>
                  <div className="text-sm text-gray-600">Email ROI Improvement</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift"
                >
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                    <span>Get Free Klaviyo Audit</span>
                    <ArrowRight size={20} />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-semibold px-8 py-4 text-lg rounded-lg border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  <a href="#klaviyo-success-stories">View Success Stories</a>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up delay-300">
              <img 
                src={serviceImages.klaviyo}
                alt="Email Marketing Dashboard"
                width="600"
                height="400"
                loading="eager"
                fetchpriority="high"
                className="w-full rounded-2xl shadow-2xl hover-scale"
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
                <a 
                  key={index}
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                        <Zap size={32} className="text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{award.title}</h3>
                      <p className="text-gray-600 text-sm">{award.description}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Complete Klaviyo Email Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of your Shopify email marketing 
              to maximize revenue and customer lifetime value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {klaviyoServices.map((service, index) => (
              <Card key={service.id} className={`hover-lift animate-fade-in-up delay-${index * 200}`}>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      {service.id === 1 && <Mail size={24} className="text-purple-600" />}
                      {service.id === 2 && <Zap size={24} className="text-purple-600" />}
                      {service.id === 3 && <TrendingUp size={24} className="text-purple-600" />}
                      {service.id === 4 && <MessageSquare size={24} className="text-purple-600" />}
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800 text-sm">
                        {service.results}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle size={16} className="text-purple-600 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg group"
                  >
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-2">
                      <span>Discuss This Service</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Our Proven Klaviyo Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every Klaviyo project follows our systematic approach to ensure maximum ROI and long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Strategy",
                description: "Comprehensive analysis of your current email performance and Shopify integration.",
                icon: <TrendingUp size={32} className="text-purple-600" />
              },
              {
                step: "02", 
                title: "Setup & Migration",
                description: "Complete Klaviyo setup with data migration and Shopify integration.",
                icon: <Zap size={32} className="text-purple-600" />
              },
              {
                step: "03",
                title: "Flows & Campaigns", 
                description: "Implementation of high-converting automation flows and targeted campaigns.",
                icon: <Mail size={32} className="text-purple-600" />
              },
              {
                step: "04",
                title: "Optimization & Growth",
                description: "Continuous optimization based on performance data and A/B testing.",
                icon: <ArrowRight size={32} className="text-purple-600" />
              }
            ].map((phase, index) => (
              <Card key={index} className={`text-center hover-lift animate-fade-in-up delay-${index * 100}`}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {phase.icon}
                  </div>
                  <div className="text-sm font-bold text-purple-600 mb-2">STEP {phase.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Why Shopify Brands Choose Our Klaviyo Services
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We're not just another email marketing agency. We're Klaviyo-certified specialists who understand Shopify inside and out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Klaviyo Certified Experts",
                description: "Our team holds official Klaviyo certifications and stays updated with the latest platform features and best practices."
              },
              {
                title: "Shopify Integration Specialists", 
                description: "Deep expertise in Shopify-Klaviyo integration ensures seamless data flow and accurate customer tracking."
              },
              {
                title: "Data-Driven Results",
                description: "Every strategy is backed by data analysis, A/B testing, and performance metrics to maximize your ROI."
              },
              {
                title: "Revenue-First Approach",
                description: "We focus on strategies that directly impact your bottom line, not just vanity metrics like open rates."
              },
              {
                title: "Ongoing Optimization",
                description: "Continuous monitoring and optimization ensure your email marketing performance keeps improving over time."
              },
              {
                title: "Transparent Reporting",
                description: "Monthly reports with clear ROI metrics and actionable insights to track your email marketing success."
              }
            ].map((item, index) => (
              <Card key={index} className={`glass border-white/20 animate-fade-in-up delay-${index * 100}`}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Klaviyo Success Stories */}
      <section id="klaviyo-success-stories" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Klaviyo Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed case studies showcasing our strategic approach and measurable results with Klaviyo email marketing implementations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {klaviyoSuccessStories.map((story, index) => (
              <Card key={story.id} className={`hover-lift animate-fade-in-up delay-${index * 100}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{story.initials}</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{story.client}</CardTitle>
                      <Badge className="bg-purple-100 text-purple-800 mt-1">{story.industry}</Badge>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Timeline:</strong> {story.timeline}
                    </div>
                    <p className="text-gray-700">{story.overview}</p>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    {/* Challenges */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        Challenges
                      </h4>
                      <ul className="space-y-1">
                        {story.challenges.map((challenge, i) => (
                          <li key={i} className="text-gray-600 text-sm">&bull; {challenge}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Solutions
                      </h4>
                      <ul className="space-y-1">
                        {story.solutions.map((solution, i) => (
                          <li key={i} className="text-gray-600 text-sm">&bull; {solution}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{story.results.revenueIncrease}</div>
                          <div className="text-xs text-gray-600">Revenue Increase</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{story.results.openRate}</div>
                          <div className="text-xs text-gray-600">Open Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{story.results.clickRate}</div>
                          <div className="text-xs text-gray-600">Click Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">{story.results.conversionRate}</div>
                          <div className="text-xs text-gray-600">Conversion Rate</div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-700">
                      "{story.testimonial}"
                      <footer className="mt-2 font-medium text-gray-900 not-italic">
                        — {story.clientName}, {story.clientTitle}
                      </footer>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Overall Stats */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Real Results, Real Success</h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable growth through strategic Klaviyo email marketing implementations.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">{klaviyoStats.averageRevenueIncrease}</div>
                <div className="text-purple-200 text-sm">Average Revenue Increase<br />Across all case studies</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{klaviyoStats.averageOpenRate}</div>
                <div className="text-purple-200 text-sm">Average Open Rate<br />Industry-leading performance</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{klaviyoStats.averageClickRate}</div>
                <div className="text-purple-200 text-sm">Average Click Rate<br />Well above industry average</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{klaviyoStats.clientsServed}</div>
                <div className="text-purple-200 text-sm">Clients Served<br />Successful implementations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Flexible Pricing Options</Badge>
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Choose Your Klaviyo Growth Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From DIY setup to fully managed email marketing. All packages include expert Klaviyo strategy, implementation, and proven tactics that drive revenue growth.
            </p>
          </div>

          {/* Main Pricing Tiers */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {/* DIY Setup */}
            <Card className="border-2 hover:border-purple-300 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap size={32} className="text-purple-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">DIY Setup</h4>
                  <p className="text-sm text-gray-600 mb-4">Perfect for getting started</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">$997</span>
                  </div>
                  <p className="text-xs text-gray-500">One-time setup fee</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Klaviyo account setup & integration</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>5 core email flows configured</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Basic segmentation setup</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Email templates & design</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>30-day email support</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-50">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Growth */}
            <Card className="border-2 border-purple-500 shadow-2xl relative scale-105 bg-white">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1.5 text-sm font-bold shadow-lg">
                  ⭐ MOST POPULAR
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp size={32} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Growth</h4>
                  <p className="text-sm text-gray-600 mb-4">For scaling businesses</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-purple-600">$1,997</span>
                    <span className="text-gray-600">/mo</span>
                  </div>
                  <p className="text-xs text-gray-500">+ $2,997 setup fee</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Everything in DIY</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>10+ advanced automation flows</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>4 custom campaigns per month</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Advanced segmentation strategy</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>A/B testing & optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Monthly performance reports</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>Priority email & chat support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold shadow-lg">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Scale */}
            <Card className="border-2 hover:border-purple-300 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={32} className="text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Scale</h4>
                  <p className="text-sm text-gray-600 mb-4">For high-volume brands</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">$3,997</span>
                    <span className="text-gray-600">/mo</span>
                  </div>
                  <p className="text-xs text-gray-500">+ $4,997 setup fee</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Everything in Growth</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>15+ custom flows with advanced logic</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>8 campaigns per month</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Predictive analytics & AI optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>SMS/MMS integration available</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Bi-weekly strategy calls</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                </Button>
              </CardContent>
            </Card>

            {/* Performance Plan */}
            <Card className="border-2 border-green-500 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white px-4 py-1.5 text-sm font-bold">
                  💰 RISK-FREE
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp size={32} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Performance</h4>
                  <p className="text-sm text-gray-600 mb-4">We only win when you win</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-green-600">$0</span>
                    <span className="text-gray-600">/mo</span>
                  </div>
                  <p className="text-xs text-gray-500">+ 15-20% of incremental revenue</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>No upfront costs or monthly fees</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Complete Klaviyo setup & management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Unlimited flows & campaigns</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>We only earn from new revenue we generate</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Minimum $50k/month in revenue required</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>6-month minimum commitment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Transparent performance tracking</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Apply Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Add-Ons Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Powerful Add-Ons</h3>
              <p className="text-gray-600">Enhance any package with these premium services</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border hover:border-purple-300 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MessageSquare size={20} className="text-purple-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">SMS Marketing</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Extend your reach with text message campaigns and automated SMS flows.
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-purple-600">+$797</span>
                    <span className="text-gray-600 text-sm">/month</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• 6 SMS automation flows</li>
                    <li>• 4 SMS campaigns/month</li>
                    <li>• MMS support</li>
                    <li>• Compliance management</li>
                  </ul>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Add to Plan</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border hover:border-blue-300 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap size={20} className="text-blue-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Premium Design</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Custom email templates designed to match your brand perfectly.
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">+$1,497</span>
                    <span className="text-gray-600 text-sm">/one-time</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• 10 custom email templates</li>
                    <li>• Brand style guide</li>
                    <li>• Mobile-optimized designs</li>
                    <li>• Unlimited revisions</li>
                  </ul>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Add to Plan</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border hover:border-green-300 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp size={20} className="text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Migration Service</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    Seamless migration from any email platform to Klaviyo with zero data loss.
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-green-600">+$997</span>
                    <span className="text-gray-600 text-sm">/one-time</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li>• Full data migration</li>
                    <li>• Flow recreation</li>
                    <li>• Historical data import</li>
                    <li>• Post-migration support</li>
                  </ul>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Add to Plan</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pricing Notes */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">What's Included in Every Package</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Klaviyo Platform Costs Not Included</p>
                  <p className="text-sm text-gray-600">You'll need an active Klaviyo subscription (starts at $45/month)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Monthly Performance Reviews</p>
                  <p className="text-sm text-gray-600">Detailed analytics and optimization recommendations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">No Long-Term Contracts</p>
                  <p className="text-sm text-gray-600">Month-to-month service with 30-day cancellation notice</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Annual Discounts Available</p>
                  <p className="text-sm text-gray-600">Save 15% with annual commitment + waived setup fees</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Need a custom package? Contact us for enterprise pricing and multi-brand discounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Klaviyo Resources Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Free Resources</Badge>
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">
              Klaviyo Guides & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides and strategies to maximize your Klaviyo email marketing results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* GDPR Compliance Guide */}
            <Card className="hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-green-600" size={20} />
                  <Badge variant="outline" className="text-xs">Compliance</Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                  <Link to="/klaviyo-gdpr-compliance" className="hover:underline">
                    Klaviyo GDPR Compliance Guide
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Complete GDPR setup guide with double opt-in, consent forms, DPA signing, and data deletion procedures.
                </p>
                <Link 
                  to="/klaviyo-gdpr-compliance"
                  className="text-purple-600 hover:text-purple-700 font-semibold text-sm inline-flex items-center gap-1"
                >
                  Read Full Guide <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            {/* Black Friday Strategy */}
            <Card className="hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-red-600" size={20} />
                  <Badge variant="outline" className="text-xs">BFCM</Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                  <Link to="/klaviyo-black-friday-strategy" className="hover:underline">
                    Black Friday & BFCM Strategy
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  8-week preparation timeline, automation flows, campaign templates, and proven tactics for holiday sales.
                </p>
                <Link 
                  to="/klaviyo-black-friday-strategy"
                  className="text-purple-600 hover:text-purple-700 font-semibold text-sm inline-flex items-center gap-1"
                >
                  View BFCM Guide <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            {/* Flows Examples */}
            <Card className="hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="text-blue-600" size={20} />
                  <Badge variant="outline" className="text-xs">Automation</Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                  <Link to="/klaviyo-flows-examples" className="hover:underline">
                    Best Klaviyo Flows Examples
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  6 detailed flow examples with email breakdowns, timing strategies, and implementation guides.
                </p>
                <Link 
                  to="/klaviyo-flows-examples"
                  className="text-purple-600 hover:text-purple-700 font-semibold text-sm inline-flex items-center gap-1"
                >
                  Explore Flows <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post: 10 Klaviyo Flows */}
            <Card className="hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="text-purple-600" size={20} />
                  <Badge variant="outline" className="text-xs">Blog Post</Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                  <Link to="/blog/best-10-klaviyo-automation-flows-every-ecommerce-store-needs" className="hover:underline">
                    Best 10 Klaviyo Automation Flows
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  In-depth guide covering welcome series, abandoned cart, post-purchase, win-back, and seasonal flows.
                </p>
                <Link 
                  to="/blog/best-10-klaviyo-automation-flows-every-ecommerce-store-needs"
                  className="text-purple-600 hover:text-purple-700 font-semibold text-sm inline-flex items-center gap-1"
                >
                  Read Article <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <Card className="hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-green-600" size={20} />
                  <Badge variant="outline" className="text-xs">Success Stories</Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                  <Link to="/klaviyo-case-studies" className="hover:underline">
                    Klaviyo Success Stories
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Real results from Shopify brands: 45% revenue increase, 30% cart recovery, and 180% ROI improvement.
                </p>
                <Link 
                  to="/klaviyo-case-studies"
                  className="text-purple-600 hover:text-purple-700 font-semibold text-sm inline-flex items-center gap-1"
                >
                  View Case Studies <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            {/* Blog: Advanced Analytics */}
            <Card className="hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-orange-600" size={20} />
                  <Badge variant="outline" className="text-xs">Analytics</Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                  <Link to="/blog/advanced-klaviyo-analytics-beyond-open-and-click-rates" className="hover:underline">
                    Advanced Klaviyo Analytics
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Go beyond basic metrics: revenue attribution, CLV impact, predictive analytics, and ROI measurement.
                </p>
                <Link 
                  to="/blog/advanced-klaviyo-analytics-beyond-open-and-click-rates"
                  className="text-purple-600 hover:text-purple-700 font-semibold text-sm inline-flex items-center gap-1"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services & Resources */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display mb-4">Related Services & Resources</h2>
            <p className="text-xl text-gray-600">Explore more automation and marketing solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <InternalLinkBlock
              title="Complete Marketing Automation"
              description="Full-service automation across email, SMS, and customer journey orchestration."
              links={[
                { label: "All Services", to: "/services" },
                { label: "Automation Case Studies", to: "/case-studies" },
                { label: "Our Process", to: "/about" }
              ]}
              variant="default"
            />
            
            <InternalLinkBlock
              title="Voice AI & Chat Solutions"
              description="24/7 customer support with Voice AI agents and intelligent chat widgets."
              links={[
                { label: "Voice AI Services", to: "/voice-ai" },
                { label: "Voice AI Pricing", to: "/blog/voice-ai-pricing-comparison-2025" },
                { label: "Implementation Guide", to: "/blog/voice-ai-implementation-real-business-results-roi-analysis-technical-guide" }
              ]}
              variant="accent"
            />
            
            <InternalLinkBlock
              title="Essential Klaviyo Guides"
              description="In-depth resources for maximizing your Klaviyo performance and ROI."
              links={[
                { label: "10 Essential Flows", to: "/blog/best-10-klaviyo-automation-flows-every-ecommerce-store-needs" },
                { label: "Segmentation Strategies", to: "/klaviyo-segmentation-strategies" },
                { label: "Black Friday Strategy", to: "/klaviyo-black-friday-strategy" },
                { label: "Advanced Analytics", to: "/klaviyo" }
              ]}
              variant="minimal"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display mb-4">
            Stay Updated on Klaviyo Best Practices
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get Klaviyo tips, automation strategies, and e-commerce insights delivered monthly.
          </p>
          
          <NewsletterForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the businesses that have transformed their email marketing with our expert Klaviyo services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift"
            >
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <span>Book Free Klaviyo Audit</span>
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="glass text-white border-white/30 font-semibold px-8 py-4 text-lg rounded-lg hover:bg-white/10"
            >
              <Link to="/case-studies">View Automation Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default KlaviyoPage;