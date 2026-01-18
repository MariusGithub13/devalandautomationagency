import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar, TrendingUp, Target, Zap, Clock, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { companyData } from '../data/mock';
import InternalLinkAutomator from '../components/InternalLinkAutomator';

const KlaviyoPredictedNextOrderPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Klaviyo's Predicted Date of Next Order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Predicted Date of Next Order is a Klaviyo predictive analytics property that uses machine learning to forecast when a customer is most likely to make their next purchase based on their historical purchase behavior, order frequency, and product consumption patterns. This AI-powered prediction helps you send timely replenishment reminders and targeted campaigns."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is Klaviyo's next order prediction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Klaviyo's predictive analytics typically achieve 75-85% accuracy for customers with 2+ previous orders. Accuracy improves with more historical data. The algorithm considers purchase frequency, time between orders, seasonal variations, and product consumption rates to generate predictions."
        }
      },
      {
        "@type": "Question",
        "name": "How do I enable Predicted Date of Next Order in Klaviyo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Predicted Date of Next Order is automatically calculated for profiles with sufficient purchase history. Access it via profile properties under 'Predicted Date of Next Order'. Use it in segments, flows, and campaigns by adding it as a condition or trigger. Minimum requirement is typically 2-3 historical orders."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best way to use predicted next order date in flows?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Create replenishment reminder flows triggered 3-7 days before the predicted next order date. Segment by product category for relevant messaging. Send pre-emptive emails with one-click reorder buttons, subscription offers, and bulk purchase discounts. Include dynamic product recommendations based on previous purchases."
        }
      },
      {
        "@type": "Question",
        "name": "Which products work best for predicted next order campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consumable products with predictable usage patterns work best: supplements (25-35 day cycles), skincare (30-60 days), pet food (20-45 days), coffee/tea (14-30 days), cleaning products (30-60 days), and subscription boxes. Products with variable consumption patterns may have lower prediction accuracy."
        }
      },
      {
        "@type": "Question",
        "name": "How can I improve predicted next order accuracy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Improve accuracy by ensuring clean order data, tracking product usage rates, collecting customer feedback on consumption patterns, segmenting by product size/quantity, accounting for seasonal variations, and regularly reviewing prediction performance. More historical data and consistent customer behavior improve predictions."
        }
      }
    ]
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Klaviyo Predicted Date of Next Order: Complete Setup & Optimization Guide",
    "description": "Master Klaviyo's predicted next order date feature to automate replenishment reminders and increase repeat purchase rates by 30-40%. Expert implementation guide with flows, segmentation, and optimization strategies.",
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
        title="Klaviyo Predicted Date of Next Order: Complete Setup Guide | Devaland"
        description="Master Klaviyo's predicted next order date feature to automate replenishment reminders and increase repeat purchase rates by 30-40%. Expert implementation guide with flows, segmentation, and optimization strategies."
        canonical="https://devaland.com/klaviyo-predicted-next-order"
        keywords={[
          "predicted date of next order klaviyo",
          "klaviyo predictive analytics",
          "klaviyo replenishment flows",
          "klaviyo predicted next order date",
          "klaviyo automation for consumables",
          "klaviyo subscription reminders",
          "klaviyo reorder automation",
          "klaviyo purchase prediction"
        ]}
        schema={[pageSchema, faqSchema]}
      />

      {/* Breadcrumb */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Klaviyo Marketing', href: '/klaviyo' },
            { label: 'Predicted Next Order Date', href: '/klaviyo-predicted-next-order' }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Klaviyo Predictive Analytics
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Klaviyo Predicted Date of Next Order: Complete Setup Guide
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Automate replenishment reminders with AI-powered predictions. Increase repeat purchase rates by 30-40% with perfectly timed reorder campaigns for consumable products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
              >
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                  Book Free Klaviyo Audit
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/klaviyo-case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Predicted Next Order Date */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What is Klaviyo's Predicted Date of Next Order?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Klaviyo's machine learning algorithm analyzes customer purchase patterns to predict when they'll likely buy again. Use these insights to send timely replenishment reminders that convert 20-30% higher than generic campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-gray-100 hover:border-blue-500 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Analysis</h3>
                <p className="text-gray-600">
                  Machine learning examines purchase frequency, order timing, product usage rates, and seasonal patterns to generate accurate predictions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-purple-500 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Automatic Updates</h3>
                <p className="text-gray-600">
                  Predictions recalculate daily as new purchase data arrives, ensuring always-current estimates for optimal timing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100 hover:border-green-500 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">75-85% Accuracy</h3>
                <p className="text-gray-600">
                  For customers with 2+ orders, predictions achieve high accuracy, improving with more historical data and consistent behavior.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Use Predicted Next Order Date?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">30-40% Higher Conversion Rates</h4>
                  <p className="text-gray-600">
                    Perfectly timed replenishment reminders convert significantly better than generic campaigns
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Reduced Churn Risk</h4>
                  <p className="text-gray-600">
                    Prevent customers from buying from competitors by reaching them before they run out
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Subscription Conversion</h4>
                  <p className="text-gray-600">
                    Use predictions to promote subscription models with compelling convenience messaging
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Automated Revenue Growth</h4>
                  <p className="text-gray-600">
                    Set up once and generate ongoing repeat purchases without manual intervention
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How to Set Up Predicted Next Order Flows
            </h2>
            <p className="text-xl text-gray-600">
              Follow our expert implementation guide to start leveraging predictive analytics in your Klaviyo account.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Step 1 */}
            <Card className="border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Enable Predictive Analytics</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold">Prerequisites:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>At least 180 days of historical purchase data</li>
                    <li>Minimum 500 orders in your account</li>
                    <li>Customers with 2+ orders for accurate predictions</li>
                    <li>Proper Shopify/WooCommerce integration</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Note:</strong> Predictions automatically calculate for eligible profiles. No manual activation required for standard accounts.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-2 border-purple-200">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Create Replenishment Flow</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold">Flow Trigger Settings:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Trigger: Date Property → Predicted Date of Next Order</li>
                    <li>Timing: 3-7 days before predicted date</li>
                    <li>Filter: Has purchased in last 365 days</li>
                    <li>Exclude: Active subscription customers</li>
                  </ul>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
                    <p className="text-sm">
                      <strong>Pro Tip:</strong> Test different lead times (3 vs 7 days) to find optimal timing for your products.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-2 border-green-600">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Design Email Sequence</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold">Recommended 3-Email Sequence:</p>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-semibold">Email 1 (Day 0): Friendly Reminder</p>
                      <p className="text-sm text-gray-600">Subject: "Time for a refill? Your [Product] is running low"</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-semibold">Email 2 (Day 3): Convenience Focus</p>
                      <p className="text-sm text-gray-600">Subject: "One-click reorder: [Product] delivered in 2 days"</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-semibold">Email 3 (Day 7): Urgency + Incentive</p>
                      <p className="text-sm text-gray-600">Subject: "Don't run out! 15% off your reorder"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-2 border-orange-600">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Optimize & Scale</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold">Advanced Optimization Tactics:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Segment by product category for personalized messaging</li>
                    <li>A/B test lead times (3, 5, 7 days before predicted date)</li>
                    <li>Add bulk purchase discounts for larger orders</li>
                    <li>Include subscription conversion offers</li>
                    <li>Track prediction accuracy and adjust timing</li>
                  </ul>
                  <div className="bg-green-50 border-l-4 border-green-600 p-4 mt-4">
                    <p className="text-sm">
                      <strong>Success Metric:</strong> Aim for 25-35% conversion rate on replenishment flows.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Products for Prediction */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Best Product Categories for Predicted Next Order
            </h2>
            <p className="text-xl text-gray-600">
              Consumable products with predictable usage patterns generate the most accurate predictions and highest ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
              <Clock className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Supplements & Vitamins</h3>
              <p className="text-gray-700 mb-3">Average cycle: 25-35 days</p>
              <p className="text-sm text-gray-600">
                Highly predictable usage patterns. Perfect for daily consumption products with standard bottle sizes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
              <TrendingUp className="text-purple-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Beauty & Skincare</h3>
              <p className="text-gray-700 mb-3">Average cycle: 30-60 days</p>
              <p className="text-sm text-gray-600">
                Great for serums, moisturizers, cleansers. Varies by product size and daily usage amount.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-600">
              <Target className="text-green-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pet Food & Supplies</h3>
              <p className="text-gray-700 mb-3">Average cycle: 20-45 days</p>
              <p className="text-sm text-gray-600">
                Consistent consumption based on pet size. Highly effective for treats, food, and regular supplies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-600">
              <Zap className="text-orange-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Coffee & Tea</h3>
              <p className="text-gray-700 mb-3">Average cycle: 14-30 days</p>
              <p className="text-sm text-gray-600">
                Short replenishment cycles ideal for subscription conversion. Strong customer loyalty potential.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-2 border-pink-200">
              <Calendar className="text-pink-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Lenses & Care</h3>
              <p className="text-gray-700 mb-3">Average cycle: 30-90 days</p>
              <p className="text-sm text-gray-600">
                Extremely predictable. Monthly supplies align perfectly with natural reorder timing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border-2 border-indigo-200">
              <BarChart3 className="text-indigo-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cleaning Products</h3>
              <p className="text-gray-700 mb-3">Average cycle: 30-60 days</p>
              <p className="text-sm text-gray-600">
                Household staples with consistent usage. Good for eco-friendly refill programs.
              </p>
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
                What is Klaviyo's Predicted Date of Next Order?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Predicted Date of Next Order is a Klaviyo predictive analytics property that uses machine learning to forecast when a customer is most likely to make their next purchase based on their historical purchase behavior, order frequency, and product consumption patterns. This AI-powered prediction helps you send timely replenishment reminders and targeted campaigns.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How accurate is Klaviyo's next order prediction?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Klaviyo's predictive analytics typically achieve 75-85% accuracy for customers with 2+ previous orders. Accuracy improves with more historical data. The algorithm considers purchase frequency, time between orders, seasonal variations, and product consumption rates to generate predictions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do I enable Predicted Date of Next Order in Klaviyo?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Predicted Date of Next Order is automatically calculated for profiles with sufficient purchase history. Access it via profile properties under 'Predicted Date of Next Order'. Use it in segments, flows, and campaigns by adding it as a condition or trigger. Minimum requirement is typically 2-3 historical orders.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's the best way to use predicted next order date in flows?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Create replenishment reminder flows triggered 3-7 days before the predicted next order date. Segment by product category for relevant messaging. Send pre-emptive emails with one-click reorder buttons, subscription offers, and bulk purchase discounts. Include dynamic product recommendations based on previous purchases.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Which products work best for predicted next order campaigns?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Consumable products with predictable usage patterns work best: supplements (25-35 day cycles), skincare (30-60 days), pet food (20-45 days), coffee/tea (14-30 days), cleaning products (30-60 days), and subscription boxes. Products with variable consumption patterns may have lower prediction accuracy.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How can I improve predicted next order accuracy?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Improve accuracy by ensuring clean order data, tracking product usage rates, collecting customer feedback on consumption patterns, segmenting by product size/quantity, accounting for seasonal variations, and regularly reviewing prediction performance. More historical data and consistent customer behavior improve predictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement Predictive Replenishment Flows?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Our Klaviyo experts will set up your predicted next order flows, optimize timing, and create conversion-focused email sequences that drive repeat purchases on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
            >
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                Book Free Strategy Call
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

export default KlaviyoPredictedNextOrderPage;
