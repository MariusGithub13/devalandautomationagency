import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Clock, Target, TrendingUp, Mail, BarChart3, Users, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { companyData } from '../data/mock';

const KlaviyoAutomationGuidePage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Klaviyo automation and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Klaviyo automation consists of pre-built email and SMS sequences (called flows) that automatically send personalized messages triggered by customer behavior, time-based events, or profile changes. These automated workflows run 24/7 without manual intervention, responding to actions like abandoned carts, purchases, website browsing, or specific dates. Automation flows handle nurturing, conversions, and retention while you focus on strategy."
        }
      },
      {
        "@type": "Question",
        "name": "How much revenue can Klaviyo automation generate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Klaviyo automation typically generates 25-40% of total email marketing revenue for e-commerce businesses. Abandoned cart flows alone can recover $50,000-200,000+ annually for mid-sized stores. Welcome series contribute 10-15% of email revenue, while post-purchase and replenishment flows add another 15-20%. Combined, comprehensive automation can increase overall revenue by 30-50% compared to manual campaigns only."
        }
      },
      {
        "@type": "Question",
        "name": "What are the most important Klaviyo automation flows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential Klaviyo flows include: 1) Abandoned Cart Recovery (highest ROI, 8-15% conversion), 2) Welcome Series (builds relationships, 3-8% conversion), 3) Post-Purchase Thank You (drives repeat purchases, 5-12% conversion), 4) Browse Abandonment (capitalizes on interest, 2-5% conversion), 5) Win-Back Campaigns (re-engages dormant customers, 2-5% conversion). Start with these five before adding advanced flows."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to set up Klaviyo automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basic automation setup takes 2-4 weeks for DIY implementation: Week 1 (abandoned cart + welcome series), Week 2 (post-purchase + browse abandonment), Weeks 3-4 (testing and optimization). Professional setup by experts takes 1-2 weeks for comprehensive automation including all essential flows, advanced segmentation, and performance tracking. Add 2-3 weeks for custom design and extensive personalization."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use Klaviyo automation for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Klaviyo automation is perfect for small businesses and startups. Free plan supports up to 250 contacts with basic automation. Small e-commerce stores ($10K-50K monthly revenue) typically pay $20-100/month and see 300-500% ROI within 90 days. Start with essential flows (abandoned cart, welcome series) and scale as you grow. Automation handles customer engagement without requiring full-time staff."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between Klaviyo flows and campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Flows are automated, behavior-triggered email sequences that run continuously and personalize to individual customer actions. Campaigns are one-time broadcast emails sent manually to specific segments at scheduled times. Flows provide ongoing, personalized engagement (welcome series, abandoned carts), while campaigns deliver time-sensitive announcements (sales, new products). Use flows for evergreen automation and campaigns for promotional broadcasts."
        }
      }
    ]
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Klaviyo Automation Guide: Setup, Flows & Best Practices",
    "description": "Master Klaviyo automation with our complete guide. Learn to set up essential flows, optimize performance, and generate 25-40% more revenue on autopilot. Expert strategies for e-commerce success.",
    "image": "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg",
    "author": {
      "@type": "Organization",
      "name": "Devaland Marketing S.R.L."
    },
    "publisher": {
      "@type": "Organization",
      "name": "Devaland Marketing S.R.L.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg"
      }
    },
    "datePublished": "2024-12-05",
    "dateModified": "2024-12-05"
  };

  return (
    <>
      <SEO 
        title="Complete Klaviyo Automation Guide: Flows, Setup & Best Practices | Devaland"
        description="Master Klaviyo automation with our complete guide. Learn to set up essential flows, optimize performance, and generate 25-40% more revenue on autopilot. Expert strategies for e-commerce success."
        canonical="https://devaland.com/klaviyo-automation-guide"
        keywords={[
          "klaviyo automation",
          "klaviyo flows",
          "klaviyo automation setup",
          "klaviyo email automation",
          "klaviyo workflow automation",
          "klaviyo automation examples",
          "klaviyo automation best practices",
          "e-commerce automation flows"
        ]}
        schema={[pageSchema, faqSchema]}
      />

      {/* Breadcrumb */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb 
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Klaviyo Marketing', href: '/klaviyo' },
            { label: 'Automation Guide', href: '/klaviyo-automation-guide' }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Complete Klaviyo Automation Masterclass
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Klaviyo Automation: Complete Guide to Revenue-Generating Flows
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Build automated email workflows that convert 24/7. Master essential Klaviyo flows, advanced segmentation, and optimization strategies to generate 25-40% more revenue without increasing ad spend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-blue-50 font-semibold"
              >
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                  Book Free Automation Audit
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/blog/best-10-klaviyo-automation-flows-every-ecommerce-store-needs">Read Flow Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Klaviyo Automation Matters */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Klaviyo Automation is Essential for E-commerce Growth
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Email automation isn't optional anymore—it's the foundation of scalable e-commerce success. Klaviyo's automation platform delivers personalized messaging at scale without requiring constant manual effort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-purple-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">25-40%</div>
              <p className="text-gray-700 font-medium">Revenue Increase</p>
              <p className="text-sm text-gray-600 mt-2">From comprehensive automation implementation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-700 font-medium">Always Working</p>
              <p className="text-sm text-gray-600 mt-2">Automated flows engage customers around the clock</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-green-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">50%+</div>
              <p className="text-gray-700 font-medium">Higher Open Rates</p>
              <p className="text-sm text-gray-600 mt-2">Compared to manual broadcast campaigns</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-orange-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">300-500%</div>
              <p className="text-gray-700 font-medium">ROI in 90 Days</p>
              <p className="text-sm text-gray-600 mt-2">Typical return on automation investment</p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Makes Klaviyo Automation Powerful?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Behavior-Based Triggers</h4>
                  <p className="text-gray-600">
                    Respond instantly to customer actions: cart abandonment, product views, purchases, email clicks, and 100+ other triggers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Deep Personalization</h4>
                  <p className="text-gray-600">
                    Use 300+ profile properties and events to customize content, timing, and product recommendations for each customer
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Smart Flow Logic</h4>
                  <p className="text-gray-600">
                    Advanced conditional splits, time delays, and filters ensure customers receive the right message at the perfect moment
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Revenue Attribution</h4>
                  <p className="text-gray-600">
                    Track exactly how much revenue each flow generates, making ROI measurement clear and optimization data-driven
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Automation Flows */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              5 Essential Klaviyo Automation Flows to Start With
            </h2>
            <p className="text-xl text-gray-600">
              These core flows form the foundation of successful e-commerce automation. Implement them in order for maximum impact.
            </p>
          </div>

          <div className="space-y-8">
            {/* Flow 1 */}
            <Card className="border-2 border-green-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">Abandoned Cart Recovery</h3>
                      <Badge className="bg-green-100 text-green-700">Highest ROI</Badge>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">
                      Recover 15-25% of abandoned carts with perfectly timed reminder sequences. Average recovery value: $50K-200K+ annually.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 1 (1 hour):</p>
                        <p className="text-sm text-gray-600">Gentle reminder with cart details</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 2 (24 hours):</p>
                        <p className="text-sm text-gray-600">Social proof + reviews</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 3 (72 hours):</p>
                        <p className="text-sm text-gray-600">Incentive + urgency</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <Target className="text-green-600" size={16} />
                        <strong>Conversion Rate:</strong> 8-15%
                      </span>
                      <span className="flex items-center gap-2">
                        <BarChart3 className="text-green-600" size={16} />
                        <strong>Revenue Impact:</strong> High
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flow 2 */}
            <Card className="border-2 border-blue-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">Welcome Series</h3>
                      <Badge className="bg-blue-100 text-blue-700">Essential</Badge>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">
                      Build relationships with new subscribers. Generates 10-15% of total email revenue with 3-8% conversion rates.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 1 (Immediate):</p>
                        <p className="text-sm text-gray-600">Welcome + discount code</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 2 (Day 2):</p>
                        <p className="text-sm text-gray-600">Social proof + bestsellers</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 3 (Day 4):</p>
                        <p className="text-sm text-gray-600">Educational content</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <Target className="text-blue-600" size={16} />
                        <strong>Conversion Rate:</strong> 3-8%
                      </span>
                      <span className="flex items-center gap-2">
                        <BarChart3 className="text-blue-600" size={16} />
                        <strong>Revenue Impact:</strong> Medium-High
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flow 3 */}
            <Card className="border-2 border-purple-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">Post-Purchase Thank You</h3>
                      <Badge className="bg-purple-100 text-purple-700">Retention</Badge>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">
                      Turn one-time buyers into repeat customers. Increases customer lifetime value by 30-50% with 5-12% repeat purchase rates.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 1 (Immediate):</p>
                        <p className="text-sm text-gray-600">Order confirmation + gratitude</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 2 (Day 7):</p>
                        <p className="text-sm text-gray-600">Usage tips + education</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 3 (Day 21):</p>
                        <p className="text-sm text-gray-600">Review request</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <Target className="text-purple-600" size={16} />
                        <strong>Conversion Rate:</strong> 5-12%
                      </span>
                      <span className="flex items-center gap-2">
                        <BarChart3 className="text-purple-600" size={16} />
                        <strong>Revenue Impact:</strong> Medium-High
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flow 4 */}
            <Card className="border-2 border-orange-600 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-orange-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">Browse Abandonment</h3>
                      <Badge className="bg-orange-100 text-orange-700">Traffic Monetization</Badge>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">
                      Convert product viewers into buyers. Captures 95% of traffic that doesn't add to cart with 2-5% conversion rates.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 1 (2-4 hours):</p>
                        <p className="text-sm text-gray-600">Product showcase + reviews</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 2 (24 hours):</p>
                        <p className="text-sm text-gray-600">Similar products + social proof</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 3 (7 days):</p>
                        <p className="text-sm text-gray-600">Educational content</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <Target className="text-orange-600" size={16} />
                        <strong>Conversion Rate:</strong> 2-5%
                      </span>
                      <span className="flex items-center gap-2">
                        <BarChart3 className="text-orange-600" size={16} />
                        <strong>Revenue Impact:</strong> Medium
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flow 5 */}
            <Card className="border-2 border-indigo-200 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl">
                    5
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">Win-Back Campaign</h3>
                      <Badge className="bg-indigo-100 text-indigo-700">Re-engagement</Badge>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">
                      Reactivate dormant customers at 5x lower cost than new acquisition. Revives 10-15% of inactive customers with 2-5% conversion.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 1 (60 days):</p>
                        <p className="text-sm text-gray-600">"We miss you" + what's new</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 2 (Day 7):</p>
                        <p className="text-sm text-gray-600">Incentive offer (15% off)</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900">Email 3 (Day 14):</p>
                        <p className="text-sm text-gray-600">Last chance (25% off)</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <Target className="text-indigo-600" size={16} />
                        <strong>Conversion Rate:</strong> 2-5%
                      </span>
                      <span className="flex items-center gap-2">
                        <BarChart3 className="text-indigo-600" size={16} />
                        <strong>Revenue Impact:</strong> Medium
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Klaviyo Automation Implementation Timeline
            </h2>
            <p className="text-xl text-gray-600">
              Follow this proven roadmap to build comprehensive automation in 4 weeks or less.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl flex flex-col items-center justify-center font-bold">
                <span className="text-2xl">1</span>
                <span className="text-xs">WEEK</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Foundation Setup</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Install Klaviyo on Shopify/WooCommerce and verify tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Set up abandoned cart flow (3-email sequence)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Create welcome series (3-5 emails)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span>Design email templates with brand styling</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex flex-col items-center justify-center font-bold">
                <span className="text-2xl">2</span>
                <span className="text-xs">WEEK</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expansion & Optimization</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <span>Implement post-purchase thank you series</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <span>Set up browse abandonment flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <span>Add basic segmentation (engaged vs. unengaged)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                    <span>Test initial flows and gather performance data</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl flex flex-col items-center justify-center font-bold">
                <span className="text-2xl">3</span>
                <span className="text-xs">WEEK</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                    <span>Create win-back campaign for dormant customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                    <span>Add conditional splits based on behavior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                    <span>Implement dynamic product recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-purple-500 flex-shrink-0 mt-1" size={20} />
                    <span>Set up A/B testing for subject lines</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl flex flex-col items-center justify-center font-bold">
                <span className="text-2xl">4</span>
                <span className="text-xs">WEEK</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Refinement & Scaling</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span>Analyze performance metrics and optimize timing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span>Refine segmentation with RFM analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span>Add replenishment flows (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span>Document processes and create optimization plan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What is Klaviyo automation and how does it work?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Klaviyo automation consists of pre-built email and SMS sequences (called flows) that automatically send personalized messages triggered by customer behavior, time-based events, or profile changes. These automated workflows run 24/7 without manual intervention, responding to actions like abandoned carts, purchases, website browsing, or specific dates. Automation flows handle nurturing, conversions, and retention while you focus on strategy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much revenue can Klaviyo automation generate?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Klaviyo automation typically generates 25-40% of total email marketing revenue for e-commerce businesses. Abandoned cart flows alone can recover $50,000-200,000+ annually for mid-sized stores. Welcome series contribute 10-15% of email revenue, while post-purchase and replenishment flows add another 15-20%. Combined, comprehensive automation can increase overall revenue by 30-50% compared to manual campaigns only.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What are the most important Klaviyo automation flows?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Essential Klaviyo flows include: 1) Abandoned Cart Recovery (highest ROI, 8-15% conversion), 2) Welcome Series (builds relationships, 3-8% conversion), 3) Post-Purchase Thank You (drives repeat purchases, 5-12% conversion), 4) Browse Abandonment (capitalizes on interest, 2-5% conversion), 5) Win-Back Campaigns (re-engages dormant customers, 2-5% conversion). Start with these five before adding advanced flows.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How long does it take to set up Klaviyo automation?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Basic automation setup takes 2-4 weeks for DIY implementation: Week 1 (abandoned cart + welcome series), Week 2 (post-purchase + browse abandonment), Weeks 3-4 (testing and optimization). Professional setup by experts takes 1-2 weeks for comprehensive automation including all essential flows, advanced segmentation, and performance tracking. Add 2-3 weeks for custom design and extensive personalization.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I use Klaviyo automation for small businesses?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes! Klaviyo automation is perfect for small businesses and startups. Free plan supports up to 250 contacts with basic automation. Small e-commerce stores ($10K-50K monthly revenue) typically pay $20-100/month and see 300-500% ROI within 90 days. Start with essential flows (abandoned cart, welcome series) and scale as you grow. Automation handles customer engagement without requiring full-time staff.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's the difference between Klaviyo flows and campaigns?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Flows are automated, behavior-triggered email sequences that run continuously and personalize to individual customer actions. Campaigns are one-time broadcast emails sent manually to specific segments at scheduled times. Flows provide ongoing, personalized engagement (welcome series, abandoned carts), while campaigns deliver time-sensitive announcements (sales, new products). Use flows for evergreen automation and campaigns for promotional broadcasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Revenue-Generating Automation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Our Klaviyo experts will design, implement, and optimize complete automation systems tailored to your business. Start generating 25-40% more revenue on autopilot within 30 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-blue-50 font-semibold px-8"
            >
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                Book Free Automation Audit
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8"
            >
              <Link to="/klaviyo">Explore All Klaviyo Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default KlaviyoAutomationGuidePage;
