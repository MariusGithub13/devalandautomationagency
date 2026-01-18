import React from 'react';
import { Mail, ShoppingCart, Heart, Gift, TrendingUp, ArrowRight, Download, Users, Repeat } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { companyData } from '../data/mock';

const KlaviyoFlowsExamplesPage = () => {
  const flowsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Best Klaviyo Automation Flows Examples for E-commerce",
        "description": "10+ proven Klaviyo automation flow examples with visual diagrams, templates, and implementation guides. Includes welcome series, abandoned cart, browse abandonment, post-purchase, and win-back flows.",
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
        "datePublished": "2025-12-05",
        "dateModified": "2025-12-05"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the best Klaviyo automation flows for e-commerce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best Klaviyo automation flows for e-commerce are: 1) Welcome Series (3-5 emails introducing brand and products), 2) Abandoned Cart (3 emails recovering 25-30% of lost carts), 3) Browse Abandonment (2-3 emails for product viewers), 4) Post-Purchase Thank You & Cross-Sell (2-4 emails), 5) Win-Back Campaign (3 emails re-engaging lapsed customers), 6) VIP Customer Nurture (exclusive perks for top spenders). These flows generate 30-40% of total email revenue on autopilot."
            }
          },
          {
            "@type": "Question",
            "name": "How many emails should be in a Klaviyo flow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Optimal email counts per Klaviyo flow: Welcome Series - 3-5 emails, Abandoned Cart - 3 emails (1hr, 24hr, 72hr delays), Browse Abandonment - 2-3 emails, Post-Purchase - 2-4 emails depending on product education needs, Win-Back - 3 emails over 2-3 weeks, Birthday/Anniversary - 1-2 emails. More emails isn't always better - focus on value and timing rather than volume."
            }
          },
          {
            "@type": "Question",
            "name": "What triggers should I use for Klaviyo automation flows?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Essential Klaviyo flow triggers: Subscribed to List (Welcome Series), Started Checkout but not Placed Order (Abandoned Cart), Viewed Product but not Added to Cart (Browse Abandonment), Placed Order (Post-Purchase), No Purchase in X Days (Win-Back), Birthday/Anniversary Date, Added to Specific List/Segment, Custom Event from Shopify/website integration. Use multiple condition filters to refine audience and avoid over-mailing."
            }
          },
          {
            "@type": "Question",
            "name": "How do I set up a Klaviyo abandoned cart flow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To set up Klaviyo abandoned cart flow: 1) Go to Flows → Create Flow → Abandoned Cart template, 2) Set trigger: 'Started Checkout' + 'Has not placed order since starting checkout', 3) Add 3 emails with delays: Email 1 (1 hour) - reminder, Email 2 (24 hours) - urgency/discount, Email 3 (72 hours) - last chance, 4) Exclude customers who purchase during the flow, 5) Add product feed dynamic blocks to show cart contents, 6) Include customer service contact info, 7) Test flow before activation."
            }
          },
          {
            "@type": "Question",
            "name": "What's the average ROI of Klaviyo automation flows?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Average ROI by Klaviyo flow: Welcome Series - 15-20x ROI (highest engagement period), Abandoned Cart - 20-30x ROI (recovers 25-30% of lost revenue), Browse Abandonment - 10-15x ROI, Post-Purchase - 8-12x ROI (lower margin but high volume), Win-Back - 15-20x ROI (reactivates lapsed customers at low cost). Combined, automation flows typically generate 30-40% of total email revenue while requiring minimal ongoing management."
            }
          }
        ]
      }
    ]
  };

  const flows = [
    {
      name: "Welcome Series",
      icon: Heart,
      emails: "3-5 emails",
      trigger: "Subscribed to List",
      timing: "Immediately, Day 2, Day 5, Day 10, Day 20",
      expectedROI: "15-20x",
      revenueContribution: "8-12%",
      description: "First impression matters. Welcome new subscribers with brand story, best sellers, social proof, and special offer.",
      emails_breakdown: [
        {
          email: "Email 1: Welcome & Brand Story",
          timing: "Immediately",
          goal: "Make a great first impression and set expectations",
          content: ["Thank them for subscribing", "Share your brand story and mission", "Introduce your bestselling products", "Set expectations for email frequency"]
        },
        {
          email: "Email 2: Social Proof & Reviews",
          timing: "Day 2",
          goal: "Build trust and credibility",
          content: ["Customer testimonials and reviews", "User-generated content from Instagram", "Press mentions or awards", "Money-back guarantee or return policy"]
        },
        {
          email: "Email 3: Exclusive Discount",
          timing: "Day 5",
          goal: "Convert subscriber to first-time customer",
          content: ["Exclusive 15-20% discount code", "Urgency: expires in 48 hours", "Best sellers or new arrivals", "Free shipping threshold"]
        }
      ],
      bestPractices: [
        "Send first email immediately while interest is hot",
        "Include founder photo/video for personal connection",
        "Showcase unique value proposition clearly",
        "Offer 15-20% discount on email 3 to drive first purchase",
        "Exclude recent purchasers from discount email"
      ]
    },
    {
      name: "Abandoned Cart Recovery",
      icon: ShoppingCart,
      emails: "3 emails",
      trigger: "Started Checkout, No Purchase",
      timing: "1 hour, 24 hours, 72 hours",
      expectedROI: "20-30x",
      revenueContribution: "15-25%",
      description: "Recover 25-30% of abandoned carts with strategic reminders, urgency, and incentives.",
      emails_breakdown: [
        {
          email: "Email 1: Gentle Reminder",
          timing: "1 hour after abandonment",
          goal: "Catch them before they forget",
          content: ["Subject: You left something in your cart", "Show cart contents with images", "Easy 'Complete Purchase' button", "No discount yet - just helpful reminder"]
        },
        {
          email: "Email 2: Urgency + Incentive",
          timing: "24 hours after abandonment",
          goal: "Create urgency and overcome price objections",
          content: ["Subject: Still interested? Here's 10% off", "Cart contents + product benefits", "10% discount code (expires in 24h)", "Social proof: 'Join 10,000+ happy customers'"]
        },
        {
          email: "Email 3: Last Chance",
          timing: "72 hours after abandonment",
          goal: "Final push with scarcity and support",
          content: ["Subject: Your cart expires in 2 hours", "Countdown timer for discount expiration", "Limited stock warning on popular items", "Customer support contact: 'Questions? We're here to help'"]
        }
      ],
      bestPractices: [
        "Use dynamic product blocks to show exact cart contents",
        "Include high-quality product images",
        "Add reviews/ratings for products in cart",
        "Offer free shipping threshold incentive",
        "Exclude customers who purchase between emails",
        "Calculate cart value and segment messaging accordingly"
      ]
    },
    {
      name: "Browse Abandonment",
      icon: Users,
      emails: "2-3 emails",
      trigger: "Viewed Product, No Add to Cart",
      timing: "4 hours, 48 hours",
      expectedROI: "10-15x",
      revenueContribution: "5-10%",
      description: "Remind visitors about products they viewed but didn't add to cart. Great for high-consideration purchases.",
      emails_breakdown: [
        {
          email: "Email 1: Product Reminder",
          timing: "4 hours after browse",
          goal: "Bring them back to the product page",
          content: ["Show product they viewed", "Include product reviews and ratings", "Related products they might like", "Clear CTA to 'View Product'"]
        },
        {
          email: "Email 2: Social Proof + Urgency",
          timing: "48 hours after browse",
          goal: "Overcome hesitation with social proof",
          content: ["Customer photos using the product", "Star rating and review count", "Low stock or high demand message", "Limited-time discount if appropriate"]
        }
      ],
      bestPractices: [
        "Segment by product category viewed",
        "Include 'Customers also viewed' recommendations",
        "Add size guides or product dimensions for apparel/furniture",
        "Use lifestyle images showing product in use",
        "Exclude recent purchasers and cart abandoners"
      ]
    },
    {
      name: "Post-Purchase Thank You & Cross-Sell",
      icon: Gift,
      emails: "2-4 emails",
      trigger: "Placed Order",
      timing: "Immediately, Day 3, Day 7, Day 14",
      expectedROI: "8-12x",
      revenueContribution: "10-15%",
      description: "Delight customers after purchase, gather reviews, and recommend complementary products.",
      emails_breakdown: [
        {
          email: "Email 1: Order Confirmation & Thank You",
          timing: "Immediately after purchase",
          goal: "Confirm order and set expectations",
          content: ["Thank you message", "Order summary with tracking", "Estimated delivery date", "Customer service contact"]
        },
        {
          email: "Email 2: Product Education",
          timing: "Day 3 (or 1 day after delivery)",
          goal: "Help them get maximum value",
          content: ["How to use the product", "Care instructions or tips", "Link to video tutorials if available", "Invite to join Facebook community"]
        },
        {
          email: "Email 3: Cross-Sell Recommendations",
          timing: "Day 7",
          goal: "Recommend complementary products",
          content: ["'Complete your set' product recommendations", "Frequently bought together items", "Limited-time bundle discount", "Free shipping on next order"]
        },
        {
          email: "Email 4: Review Request",
          timing: "Day 14 (or after they've had time to use product)",
          goal: "Gather social proof",
          content: ["Request honest review", "Offer entry into giveaway for leaving review", "Share how reviews help other customers", "Link directly to review page"]
        }
      ],
      bestPractices: [
        "Segment by product purchased for relevant recommendations",
        "Time review request based on product type (consumables: 7 days, durable goods: 21+ days)",
        "Personalize cross-sells based on order contents",
        "Offer loyalty points or discount for review",
        "Exclude customers with recent orders from aggressive cross-sell"
      ]
    },
    {
      name: "Win-Back Lapsed Customers",
      icon: Repeat,
      emails: "3 emails",
      trigger: "No Purchase in 60-90 Days",
      timing: "Day 0, Day 7, Day 14",
      expectedROI: "15-20x",
      revenueContribution: "8-12%",
      description: "Re-engage customers who haven't purchased recently with special offers and 'we miss you' messaging.",
      emails_breakdown: [
        {
          email: "Email 1: We Miss You",
          timing: "When customer hits 60-90 days inactive",
          goal: "Remind them of your brand",
          content: ["Subject: We miss you, [Name]!", "Recap what they loved last time", "Show new products since their last purchase", "Soft CTA: 'See What's New'"]
        },
        {
          email: "Email 2: Exclusive Comeback Offer",
          timing: "7 days after Email 1",
          goal: "Incentivize return with special offer",
          content: ["Subject: Here's 25% off to come back", "Exclusive win-back discount code", "Highlight bestsellers and new arrivals", "Urgency: 'Expires in 5 days'"]
        },
        {
          email: "Email 3: Last Chance",
          timing: "14 days after Email 1",
          goal: "Final push or preference center",
          content: ["Subject: Last chance for 25% off", "Countdown timer for discount expiration", "Personal note from founder", "Alternative: Update email preferences or unsubscribe"]
        }
      ],
      bestPractices: [
        "Adjust 'inactive' threshold based on product purchase cycle",
        "Segment by customer lifetime value (VIPs get better offers)",
        "Reference their previous purchases for personalization",
        "Offer increasing discounts (20% → 25% → 30%) if budget allows",
        "Provide preference center to reduce frequency instead of losing them"
      ]
    },
    {
      name: "VIP Customer Nurture",
      icon: TrendingUp,
      emails: "Ongoing",
      trigger: "Reached VIP Status (2+ purchases or $500+ spent)",
      timing: "Monthly or based on behavior",
      expectedROI: "25-40x",
      revenueContribution: "20-30%",
      description: "Reward and retain your best customers with exclusive perks, early access, and personalized recommendations.",
      emails_breakdown: [
        {
          email: "Welcome to VIP Email",
          timing: "When customer qualifies",
          goal: "Make them feel special and valued",
          content: ["Congratulate them on VIP status", "Explain exclusive benefits", "Offer VIP-only discount code", "Personal thank you from founder"]
        },
        {
          email: "VIP Early Access",
          timing: "Before product launches or sales",
          goal: "Make them feel like insiders",
          content: ["Exclusive preview of new products", "Early access link (24-48hrs before public)", "Limited edition VIP-only products", "Personal shopping assistance offer"]
        },
        {
          email: "VIP Milestone Rewards",
          timing: "At purchase milestones",
          goal: "Celebrate and incentivize continued loyalty",
          content: ["Celebrate 5th purchase or $1000 spent", "Free gift with next order", "VIP loyalty points bonus", "Handwritten thank you note with order"]
        }
      ],
      bestPractices: [
        "Define VIP criteria based on your business (2+ orders or $500+ LTV common)",
        "Track VIP status with custom profile property",
        "Offer tangible benefits: early access, exclusive discounts, free shipping",
        "Personal touches: founder notes, birthday gifts, surprise bonuses",
        "Create VIP-only products or bundles for exclusivity"
      ]
    }
  ];

  const implementationGuide = [
    {
      step: 1,
      title: "Choose Your Flow",
      description: "Start with Welcome Series and Abandoned Cart - these generate the highest ROI with minimal setup."
    },
    {
      step: 2,
      title: "Create Flow in Klaviyo",
      description: "Flows → Create Flow → Use template or start from scratch. Set trigger and add time delays between emails."
    },
    {
      step: 3,
      title: "Design Email Templates",
      description: "Use Klaviyo's drag-and-drop editor. Include dynamic product blocks, your branding, and clear CTAs."
    },
    {
      step: 4,
      title: "Set Up Smart Sending",
      description: "Enable Smart Sending to prevent over-mailing. Add filters to exclude recent purchasers and subscribers."
    },
    {
      step: 5,
      title: "Test Before Launch",
      description: "Use 'Preview & Test' to send test emails to yourself. Check mobile rendering and all links work."
    },
    {
      step: 6,
      title: "Activate & Monitor",
      description: "Turn flow on. Monitor open rates, click rates, and revenue daily. Optimize based on performance data."
    }
  ];

  const comparisonTable = [
    {
      flow: "Welcome Series",
      avgOpenRate: "60-70%",
      avgClickRate: "15-25%",
      avgConversion: "8-12%",
      setupTime: "2-3 hours",
      bestFor: "Building relationship with new subscribers"
    },
    {
      flow: "Abandoned Cart",
      avgOpenRate: "45-55%",
      avgClickRate: "12-18%",
      avgConversion: "25-30%",
      setupTime: "1-2 hours",
      bestFor: "Immediate revenue recovery"
    },
    {
      flow: "Browse Abandonment",
      avgOpenRate: "35-45%",
      avgClickRate: "10-15%",
      avgConversion: "5-10%",
      setupTime: "1-2 hours",
      bestFor: "High consideration products"
    },
    {
      flow: "Post-Purchase",
      avgOpenRate: "55-65%",
      avgClickRate: "18-25%",
      avgConversion: "12-18%",
      setupTime: "2-3 hours",
      bestFor: "Cross-selling and reviews"
    },
    {
      flow: "Win-Back",
      avgOpenRate: "30-40%",
      avgClickRate: "8-12%",
      avgConversion: "10-15%",
      setupTime: "1-2 hours",
      bestFor: "Reactivating lapsed customers"
    },
    {
      flow: "VIP Nurture",
      avgOpenRate: "65-75%",
      avgClickRate: "20-30%",
      avgConversion: "15-25%",
      setupTime: "3-4 hours",
      bestFor: "Retention of best customers"
    }
  ];

  return (
    <>
      <SEO
        title="Best Klaviyo Flows Examples 2025 | Automation Templates & Implementation Guide"
        description="10+ proven Klaviyo automation flow examples with visual diagrams, email templates, timing strategies, and step-by-step implementation guides. Includes welcome series, abandoned cart, browse abandonment, post-purchase, win-back, and VIP flows."
        canonical="https://devaland.com/klaviyo-flows-examples"
        keywords={[
          "best klaviyo flows",
          "klaviyo flows examples",
          "klaviyo automation flows",
          "klaviyo flow templates",
          "abandoned cart flow klaviyo",
          "welcome series klaviyo",
          "klaviyo flow setup",
          "email automation flows",
          "klaviyo workflow examples",
          "best email automation flows"
        ]}
        schema={flowsSchema}
      />

      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Resources', href: '/blog' },
              { label: 'Klaviyo Flows Examples', href: '/klaviyo-flows-examples' }
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Flow Templates & Examples</Badge>
            <h1 className="text-5xl md:text-6xl font-display text-gray-900 mb-6">
              Best Klaviyo Automation Flows Examples
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              10+ proven automation flow examples with email breakdowns, timing strategies, and implementation guides.
              These flows generate 30-40% of total email revenue on autopilot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-lg"
              >
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                  <span>Get Flows Built for You</span>
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-semibold px-8 py-4 text-lg rounded-lg"
              >
                <a href="#flows">Browse Examples</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-purple-600">30-40%</div>
                <div className="text-sm text-gray-600">Of email revenue</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-purple-600">20-30x</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Automated selling</div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Comparison Table */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-12 text-center">
              Flow Performance Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="p-4 text-left font-semibold">Flow Type</th>
                    <th className="p-4 text-left font-semibold">Open Rate</th>
                    <th className="p-4 text-left font-semibold">Click Rate</th>
                    <th className="p-4 text-left font-semibold">Conversion</th>
                    <th className="p-4 text-left font-semibold">Setup Time</th>
                    <th className="p-4 text-left font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 font-semibold text-gray-900">{row.flow}</td>
                      <td className="p-4 text-gray-700">{row.avgOpenRate}</td>
                      <td className="p-4 text-gray-700">{row.avgClickRate}</td>
                      <td className="p-4 text-gray-700 font-semibold text-green-600">{row.avgConversion}</td>
                      <td className="p-4 text-gray-700">{row.setupTime}</td>
                      <td className="p-4 text-gray-600 text-sm">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Flow Examples */}
        <section id="flows" className="section-padding bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-12 text-center">
              Detailed Flow Examples & Templates
            </h2>
            <div className="space-y-12">
              {flows.map((flow, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white">
                        <flow.icon size={32} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-1">{flow.name}</CardTitle>
                        <div className="flex flex-wrap gap-2 text-sm">
                          <Badge variant="outline">{flow.emails}</Badge>
                          <Badge variant="outline">ROI: {flow.expectedROI}</Badge>
                          <Badge className="bg-green-100 text-green-800">
                            Revenue: {flow.revenueContribution}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <p className="text-gray-700 text-lg leading-relaxed">{flow.description}</p>
                      <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-blue-50 p-3 rounded">
                          <strong className="text-blue-900">Trigger:</strong>
                          <span className="text-gray-700 ml-2">{flow.trigger}</span>
                        </div>
                        <div className="bg-purple-50 p-3 rounded">
                          <strong className="text-purple-900">Timing:</strong>
                          <span className="text-gray-700 ml-2">{flow.timing}</span>
                        </div>
                      </div>
                    </div>

                    {/* Email Breakdown */}
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">📧 Email Sequence Breakdown:</h4>
                    <div className="space-y-4 mb-6">
                      {flow.emails_breakdown.map((email, emailIndex) => (
                        <div key={emailIndex} className="border-l-4 border-purple-500 pl-4 py-2 bg-white rounded-r">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-gray-900">{email.email}</h5>
                            <Badge variant="outline" className="text-xs">{email.timing}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2"><strong>Goal:</strong> {email.goal}</p>
                          <ul className="space-y-1">
                            {email.content.map((item, itemIndex) => (
                              <li key={itemIndex} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-purple-600">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Best Practices */}
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">✅ Best Practices:</h4>
                    <ul className="space-y-2">
                      {flow.bestPractices.map((practice, practiceIndex) => (
                        <li key={practiceIndex} className="flex items-start gap-2 text-gray-700">
                          <ArrowRight size={18} className="text-green-600 mt-1 flex-shrink-0" />
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-12 text-center">
              How to Implement Flows in Klaviyo
            </h2>
            <div className="space-y-6">
              {implementationGuide.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700"><InternalLinkAutomator text={step.description} /></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display mb-6">
              Want These Flows Built & Optimized for Your Store?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our Klaviyo experts will design, build, and optimize all automation flows for your e-commerce store.
              Get professional templates, A/B testing, and ongoing optimization—revenue guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg"
              >
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                  <span>Book Strategy Call</span>
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-lg"
              >
                <Link to="/klaviyo">View Klaviyo Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display text-gray-900 mb-8 text-center">
              Related Klaviyo Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link to="/blog/best-10-klaviyo-automation-flows-every-ecommerce-store-needs" className="text-blue-600 hover:text-blue-700">
                      10 Klaviyo Automation Flows (Detailed Blog Post) →
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    In-depth guide with case studies and advanced flow strategies
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link to="/klaviyo-black-friday-strategy" className="text-blue-600 hover:text-blue-700">
                      Klaviyo Black Friday Flow Strategy →
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Specialized flows for BFCM: countdown, VIP early access, urgency
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KlaviyoFlowsExamplesPage;
