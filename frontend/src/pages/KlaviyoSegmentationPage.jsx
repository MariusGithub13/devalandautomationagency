import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, TrendingUp, Filter, Brain, Zap, ArrowRight, CheckCircle, BarChart3, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { companyData } from '../data/mock';

const KlaviyoSegmentationPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Klaviyo segmentation and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Klaviyo segmentation divides your email list into targeted groups based on behavior, demographics, purchase history, or engagement levels. It's critical because segmented campaigns achieve 14.31% higher open rates, 100.95% higher click-through rates, and 760% more revenue than non-segmented broadcasts. Segmentation ensures every subscriber receives relevant, personalized content that matches their interests and stage in the customer journey."
        }
      },
      {
        "@type": "Question",
        "name": "What are the most effective Klaviyo segmentation strategies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most effective strategies include: 1) RFM segmentation (Recency, Frequency, Monetary) identifying VIPs vs at-risk customers, 2) Behavioral segmentation based on browsing and purchase patterns, 3) Lifecycle stage segmentation (prospects, new customers, loyal, churned), 4) Engagement-based segmentation separating active vs inactive subscribers, 5) Predictive segmentation using AI for churn risk and purchase likelihood. Combining multiple criteria creates highly targeted micro-segments."
        }
      },
      {
        "@type": "Question",
        "name": "How many segments should I create in Klaviyo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start with 5-10 foundational segments: engaged vs unengaged subscribers, customers vs prospects, VIP customers, at-risk customers, and 2-3 product category segments. As your list grows beyond 10,000 subscribers, expand to 15-25 segments with more granular criteria. Avoid over-segmentation (50+ segments) which becomes unmanageable. Focus on actionable segments with distinct messaging needs and minimum 500 subscribers per segment for statistical significance."
        }
      },
      {
        "@type": "Question",
        "name": "What is RFM segmentation in Klaviyo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RFM segmentation analyzes three key metrics: Recency (days since last purchase), Frequency (number of orders), and Monetary value (total spent). In Klaviyo, create segments like 'Champions' (recent, frequent, high-value), 'Loyal Customers' (frequent but lower spend), 'At Risk' (previously high-value but no recent purchase), and 'Lost Customers' (no activity 180+ days). Each segment receives tailored messaging and offers matching their customer value and engagement level."
        }
      },
      {
        "@type": "Question",
        "name": "How do I segment inactive subscribers in Klaviyo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Create segments based on email engagement time periods: 1) Inactive 90-180 days (gentle re-engagement), 2) Inactive 180-365 days (aggressive win-back with offers), 3) Inactive 365+ days (sunset/suppression consideration). Use conditions: 'What someone has done (or not done) > Opened Email > zero times in last X days' combined with 'Clicked Email > zero times'. Send progressive re-engagement campaigns before removing unengaged subscribers to maintain list health and deliverability."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use AI for Klaviyo segmentation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Klaviyo's predictive analytics uses AI for advanced segmentation: Customer Lifetime Value (CLV) predictions identify high-potential customers, Churn Risk scoring flags at-risk subscribers for retention campaigns, Expected Date of Next Order predicts replenishment timing, and Product Affinity models suggest relevant items. These AI-powered segments update dynamically based on real-time behavior, enabling proactive personalization. Combine AI predictions with traditional segments for maximum targeting precision."
        }
      }
    ]
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://devaland.com/klaviyo-segmentation-strategies",
    "headline": "Advanced Klaviyo Segmentation Strategies: RFM, Behavioral & Predictive",
    "description": "Master Klaviyo segmentation with proven strategies that increase open rates by 14.31% and revenue by 760%. Learn RFM analysis, behavioral targeting, lifecycle segments, and AI-powered predictive segmentation.",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
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
    "dateModified": "2024-12-05",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://devaland.com/klaviyo-segmentation-strategies"
    }
  };

  return (
    <>
      <SEO 
        title="Klaviyo Segmentation Strategies: RFM, Behavioral & AI Targeting | Devaland"
        description="Master Klaviyo segmentation with proven strategies that increase open rates by 14.31% and revenue by 760%. Learn RFM analysis, behavioral targeting, lifecycle segments, and AI-powered predictive segmentation."
        canonical="https://devaland.com/klaviyo-segmentation-strategies"
        keywords={[
          "klaviyo segmentation",
          "klaviyo segments",
          "rfm segmentation klaviyo",
          "klaviyo customer segmentation",
          "email list segmentation",
          "klaviyo behavioral segmentation",
          "klaviyo predictive analytics",
          "klaviyo targeting strategies"
        ]}
        schema={[pageSchema, faqSchema]}
      />

      <Breadcrumb 
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Klaviyo Email Marketing', href: '/klaviyo' },
          { label: 'Segmentation Strategies', href: '/klaviyo-segmentation-strategies' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Target className="w-4 h-4 mr-1" />
                Advanced Targeting
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Master Klaviyo Segmentation for 760% More Revenue
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Transform generic broadcasts into laser-targeted campaigns with advanced segmentation strategies that increase open rates by 14.31% and click rates by 100.95%.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    Get Segmentation Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link to="/klaviyo">
                    Explore Klaviyo Services
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <TrendingUp className="w-12 h-12 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">760%</div>
                  <p className="text-blue-100">Revenue increase from segmentation</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <BarChart3 className="w-12 h-12 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">14.31%</div>
                  <p className="text-blue-100">Higher open rates</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">100.95%</div>
                  <p className="text-blue-100">Higher click rates</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Brain className="w-12 h-12 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">AI-Powered</div>
                  <p className="text-blue-100">Predictive segmentation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* RFM Segmentation */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 border-purple-300 mb-4">
              Gold Standard
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              RFM Segmentation: The Foundation
            </h2>
            <p className="text-xl text-gray-600">
              Recency, Frequency, Monetary analysis identifies your most valuable customers and those at risk of churning
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-blue-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Recency</h3>
                <p className="text-gray-600 mb-4">
                  Days since last purchase. Recent buyers are 3-5x more likely to purchase again.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">0-30 days:</span>
                    <Badge variant="outline" className="bg-green-50 text-green-700">Hot</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">31-90 days:</span>
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700">Warm</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">91-180 days:</span>
                    <Badge variant="outline" className="bg-orange-50 text-orange-700">Cooling</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">180+ days:</span>
                    <Badge variant="outline" className="bg-red-50 text-red-700">Cold</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Frequency</h3>
                <p className="text-gray-600 mb-4">
                  Number of orders. Frequent buyers have 30% higher lifetime value.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">1 order:</span>
                    <Badge variant="outline" className="bg-gray-50 text-gray-700">One-time</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">2-3 orders:</span>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">Repeat</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">4-6 orders:</span>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700">Loyal</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">7+ orders:</span>
                    <Badge variant="outline" className="bg-pink-50 text-pink-700">Champion</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-600">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Monetary</h3>
                <p className="text-gray-600 mb-4">
                  Total spent. Top 20% of customers generate 80% of revenue.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">$0-$100:</span>
                    <Badge variant="outline" className="bg-gray-50 text-gray-700">Bronze</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">$100-$500:</span>
                    <Badge variant="outline" className="bg-orange-50 text-orange-700">Silver</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">$500-$1,000:</span>
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700">Gold</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">$1,000+:</span>
                    <Badge variant="outline" className="bg-purple-50 text-purple-700">Platinum</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">8 Essential RFM Segments</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Champions</h4>
                    <p className="text-sm text-gray-600">Recent, frequent, high-value. Reward with VIP perks and early access.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Loyal Customers</h4>
                    <p className="text-sm text-gray-600">Frequent buyers with good value. Upsell and cross-sell opportunities.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Potential Loyalists</h4>
                    <p className="text-sm text-gray-600">Recent customers with potential. Nurture with personalized offers.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">New Customers</h4>
                    <p className="text-sm text-gray-600">First purchase recent. Focus on second purchase with welcome series.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Promising</h4>
                    <p className="text-sm text-gray-600">Recent shoppers with low frequency. Encourage repeat with incentives.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Need Attention</h4>
                    <p className="text-sm text-gray-600">Good value but declining. Re-engage with targeted offers.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Filter className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">At Risk</h4>
                    <p className="text-sm text-gray-600">Previously valuable, no recent activity. Win-back campaigns essential.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Lost Customers</h4>
                    <p className="text-sm text-gray-600">Long inactive. Final aggressive offers before suppression.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Behavioral Segmentation */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 border-blue-300 mb-4">
              Real-Time Targeting
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Behavioral Segmentation Strategies
            </h2>
            <p className="text-xl text-gray-600">
              Target customers based on actions they take (or don't take) on your website and in emails
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Badge className="bg-blue-100 text-blue-700 mb-4">Website Behavior</Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Category Browsers</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Segment by categories viewed: "Viewed Women's Shoes in last 7 days but hasn't purchased"
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Category-specific content</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Curated product recommendations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Educational buying guides</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Badge className="bg-purple-100 text-purple-700 mb-4">Cart Behavior</Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">High-Value Cart Abandoners</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  "Added to cart $100+ but didn't complete checkout in 24 hours"
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Premium recovery incentives</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Free shipping offers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">White-glove customer service</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Badge className="bg-green-100 text-green-700 mb-4">Email Engagement</Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Email Clickers Non-Buyers</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  "Clicked email in last 14 days but hasn't placed order"
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Address purchase barriers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Social proof and reviews</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Limited-time conversion offers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Badge className="bg-orange-100 text-orange-700 mb-4">Purchase Patterns</Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Seasonal Shoppers</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  "Only purchases during Black Friday/holiday season"
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Early seasonal notifications</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">VIP early access</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Off-season engagement tactics</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Badge className="bg-indigo-100 text-indigo-700 mb-4">Product Affinity</Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Single Category Buyers</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  "Only purchased from one product category"
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Cross-category recommendations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Bundle offers</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Complementary products</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Badge className="bg-pink-100 text-pink-700 mb-4">Search Behavior</Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Site Searchers</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  "Used site search but didn't find/purchase"
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Search-based recommendations</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">Alternative product suggestions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-600">New arrival notifications</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 border-purple-300 mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about Klaviyo segmentation strategies
            </p>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <Card key={index} className="border-l-4 border-l-purple-600">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-purple-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Klaviyo Segmentation Strategy Audit
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover untapped segments and optimization opportunities. Our experts will analyze your list and provide a custom segmentation roadmap for 760% revenue growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-blue-50"
            >
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                Book Free Segmentation Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/blog/best-email-segmentation-strategies-that-actually-work">
                Read Full Segmentation Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default KlaviyoSegmentationPage;
