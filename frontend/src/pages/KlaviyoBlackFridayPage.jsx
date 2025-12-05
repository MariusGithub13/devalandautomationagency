import React from 'react';
import { Calendar, TrendingUp, Zap, Mail, Clock, ArrowRight, Download, Target, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { companyData } from '../data/mock';

const KlaviyoBlackFridayPage = () => {
  const bfcmSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Klaviyo Black Friday & BFCM Strategy Guide 2025",
        "description": "Complete Klaviyo Black Friday Cyber Monday (BFCM) strategy with campaign templates, automation flows, timeline, and proven tactics to maximize revenue during the biggest shopping weekend.",
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
            "name": "When should I start my Klaviyo Black Friday campaign?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Start your Klaviyo Black Friday campaign preparation 8-12 weeks before BFCM (early September). Launch teaser emails 2-3 weeks before Black Friday, early access campaigns 1 week before, and main campaigns starting Thanksgiving week. The timeline includes: September - strategy & list segmentation, October - email design & flow setup, November 1-15 - teaser campaigns, November 15-24 - early access, November 24-27 - main BFCM push."
            }
          },
          {
            "@type": "Question",
            "name": "What Klaviyo flows are essential for Black Friday?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Essential Klaviyo flows for Black Friday include: 1) VIP Early Access Flow (48 hours before public launch), 2) Countdown Flow (24hr, 12hr, 2hr urgency reminders), 3) Browse Abandonment with BFCM discount, 4) Cart Abandonment with urgency messaging, 5) Post-Purchase Cross-sell Flow, 6) Win-back Flow targeting lapsed customers with special BFCM offers."
            }
          },
          {
            "@type": "Question",
            "name": "How do I segment my Klaviyo list for BFCM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Segment your Klaviyo list for BFCM into: 1) VIP Customers (purchased 2+ times or spent $500+) - get early access and exclusive discounts, 2) Engaged Subscribers (opened/clicked in last 30 days), 3) Browse Abandoners (viewed products but didn't purchase), 4) Cart Abandoners (added to cart but didn't complete), 5) Lapsed Customers (purchased before but not in 90+ days), 6) Never Purchased (subscribed but never bought)."
            }
          },
          {
            "@type": "Question",
            "name": "What's the best Klaviyo Black Friday email frequency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Optimal Klaviyo Black Friday email frequency: Pre-BFCM (2-3 weeks before): 2-3 teaser emails per week, Black Friday weekend: 5-7 emails total (Thanksgiving: 1, Black Friday: 2-3, Saturday: 1, Cyber Monday: 2), Post-BFCM: 1 last chance email. Use separate VIP segments to send additional early access emails without over-mailing the general list."
            }
          },
          {
            "@type": "Question",
            "name": "How can I increase Klaviyo Black Friday revenue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Increase Klaviyo Black Friday revenue with these tactics: 1) Tiered discounts (VIP gets 30%, general list gets 20%), 2) Flash sales every 6-8 hours with countdown timers, 3) Free shipping thresholds to increase AOV ($100+ orders), 4) Product bundles and gift sets, 5) Early access for engaged subscribers (48 hours before public), 6) Post-purchase flows for immediate cross-sells, 7) SMS + email combined reach, 8) Personalized product recommendations based on browse history."
            }
          }
        ]
      }
    ]
  };

  const timeline = [
    {
      phase: "8-12 Weeks Before",
      period: "Early September",
      tasks: [
        "Finalize BFCM strategy and discount levels",
        "Analyze last year's performance data",
        "Build and refine Klaviyo segments",
        "Plan product bundles and exclusive offers",
        "Set revenue goals and KPIs"
      ],
      icon: Target
    },
    {
      phase: "6-8 Weeks Before",
      period: "Late September - Early October",
      tasks: [
        "Design email templates with BFCM branding",
        "Create flow templates for all BFCM automations",
        "Write copy for all campaign emails",
        "Set up A/B tests for subject lines",
        "Prepare SMS campaigns if using Klaviyo SMS"
      ],
      icon: Mail
    },
    {
      phase: "4-6 Weeks Before",
      period: "Mid-October",
      tasks: [
        "Build all Klaviyo flows (early access, countdown, urgency)",
        "Set up dynamic discount codes in Klaviyo",
        "Create landing pages for BFCM offers",
        "Test all flows and campaigns in preview mode",
        "Coordinate with fulfillment team on capacity"
      ],
      icon: Zap
    },
    {
      phase: "2-3 Weeks Before",
      period: "Early November",
      tasks: [
        "Launch teaser campaigns to build anticipation",
        "Send 'Save the Date' emails to VIP segment",
        "Start warming up lapsed customer segment",
        "Publish blog content about BFCM deals",
        "Promote early bird signup for exclusive access"
      ],
      icon: Calendar
    },
    {
      phase: "1 Week Before",
      period: "November 17-23",
      tasks: [
        "Send VIP early access emails (48 hours before public)",
        "Launch countdown campaigns to engaged subscribers",
        "Activate browse & cart abandonment flows with BFCM messaging",
        "Send last chance to join VIP segment email",
        "Prepare customer support for high volume"
      ],
      icon: Clock
    },
    {
      phase: "BFCM Weekend",
      period: "November 24-27",
      tasks: [
        "Thanksgiving: Preview email with deals going live midnight",
        "Black Friday: Morning launch + afternoon urgency email",
        "Saturday: Flash sale for specific categories",
        "Cyber Monday: Final push with last chance messaging",
        "Monitor performance and adjust flows in real-time"
      ],
      icon: TrendingUp
    },
    {
      phase: "Post-BFCM",
      period: "November 28+",
      tasks: [
        "Send final 'Last Chance' email (extended 24 hours)",
        "Launch post-purchase cross-sell flows immediately",
        "Thank you email to all BFCM purchasers",
        "Request reviews from satisfied customers",
        "Analyze results and document learnings for next year"
      ],
      icon: DollarSign
    }
  ];

  const essentialFlows = [
    {
      name: "VIP Early Access Flow",
      trigger: "48 hours before public launch",
      emails: 2,
      description: "Reward your best customers with exclusive early access. Tier based on lifetime value or engagement.",
      expectedLift: "+35% from VIP segment"
    },
    {
      name: "Countdown Urgency Flow",
      trigger: "Based on time remaining",
      emails: 4,
      description: "Automated reminders at 24hr, 12hr, 6hr, and 2hr before sale ends. Dynamic countdown timers in email.",
      expectedLift: "+20% conversion rate"
    },
    {
      name: "Browse Abandonment (BFCM)",
      trigger: "Viewed product, didn't add to cart",
      emails: 3,
      description: "Show BFCM discount on products they browsed. Include social proof and urgency messaging.",
      expectedLift: "+15% recovery rate"
    },
    {
      name: "Cart Abandonment (BFCM)",
      trigger: "Added to cart, didn't purchase",
      emails: 3,
      description: "Remind them of BFCM discount expiring soon. Add free shipping threshold incentive.",
      expectedLift: "+25% cart recovery"
    },
    {
      name: "Post-Purchase Cross-Sell",
      trigger: "Immediately after BFCM purchase",
      emails: 2,
      description: "Strike while the iron is hot. Offer complementary products at BFCM price for 24 hours.",
      expectedLift: "+$15-30 per customer"
    },
    {
      name: "Win-Back BFCM Offer",
      trigger: "Lapsed customers (90+ days)",
      emails: 3,
      description: "Target customers who haven't purchased recently with irresistible BFCM comeback offer.",
      expectedLift: "+10% reactivation"
    }
  ];

  const campaignIdeas = [
    {
      type: "Tiered Discounts",
      description: "VIP: 30% off, Engaged: 25% off, General: 20% off",
      tactic: "Create separate Klaviyo segments and send targeted discount codes"
    },
    {
      type: "Flash Sales",
      description: "Lightning deals every 6 hours on different categories",
      tactic: "Schedule campaigns with countdown timers and rotate featured products"
    },
    {
      type: "Free Shipping Threshold",
      description: "Free shipping on orders $100+ (your AOV is typically $75)",
      tactic: "Encourage larger carts with progress bar showing how close to threshold"
    },
    {
      type: "Bundle Offers",
      description: "Pre-made gift sets at bundle discount (save 35% vs individual)",
      tactic: "Use product blocks in Klaviyo to showcase bundles with clear savings"
    },
    {
      type: "Early Bird Special",
      description: "First 100 orders get extra 10% off + free gift",
      tactic: "Create urgency and FOMO - track manually or with Shopify inventory"
    },
    {
      type: "Mystery Gift",
      description: "Orders over $150 get mystery bonus item",
      tactic: "Build excitement and increase AOV without heavy discounting"
    },
    {
      type: "Loyalty Points Multiplier",
      description: "Earn 3x points on all BFCM purchases",
      tactic: "If using loyalty program, integrate with Klaviyo for targeted messaging"
    },
    {
      type: "Refer-a-Friend Bonus",
      description: "Both referrer and friend get extra 15% during BFCM",
      tactic: "Leverage existing customers to acquire new ones at high-intent time"
    }
  ];

  const subjectLines = {
    teaser: [
      "Our biggest sale of the year is coming... 👀",
      "[NAME], you're on the VIP early access list 🎁",
      "Mark your calendar: Black Friday deals drop in 7 days",
      "Sneak peek: Your exclusive Black Friday discount inside"
    ],
    earlyAccess: [
      "VIP ONLY: Shop 48 hours early (before anyone else)",
      "[NAME], your early access starts NOW (30% off everything)",
      "🔓 Unlock your VIP Black Friday discount now",
      "Early access is live! Your 30% off code inside"
    ],
    blackFriday: [
      "🚨 BLACK FRIDAY: 25% off everything starts NOW",
      "It's here! The sale you've been waiting for is LIVE",
      "[NAME], your Black Friday discount expires in 24 hours ⏰",
      "Last chance: Black Friday sale ends at midnight"
    ],
    cyberMonday: [
      "CYBER MONDAY: Extra 5% off on top of your discount 💻",
      "Final hours: Your last chance for 25% off everything",
      "[NAME], we're extending your discount by 24 hours (because we love you)",
      "ENDING TONIGHT: This is your final call for BFCM savings"
    ]
  };

  return (
    <>
      <SEO 
        title="Klaviyo Black Friday Strategy 2025 | BFCM Campaign Templates & Timeline"
        description="Complete Klaviyo Black Friday & Cyber Monday (BFCM) strategy guide. Get campaign templates, automation flows, 8-week timeline, segmentation tactics, and proven subject lines to maximize your 2025 holiday revenue."
        canonical="https://devaland.com/klaviyo-black-friday-strategy"
        keywords={[
          "klaviyo black friday",
          "klaviyo bfcm",
          "black friday klaviyo strategy",
          "klaviyo cyber monday",
          "bfcm email campaigns",
          "klaviyo holiday strategy",
          "black friday automation flows",
          "klaviyo black friday flows",
          "bfcm klaviyo templates",
          "klaviyo black friday segmentation"
        ]}
        schema={bfcmSchema}
      />
      
      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[
              { label: 'Resources', href: '/blog' },
              { label: 'Klaviyo Black Friday Strategy', href: '/klaviyo-black-friday-strategy' }
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-red-600 text-white border-0">Black Friday Strategy 2025</Badge>
            <h1 className="text-5xl md:text-6xl font-display mb-6">
              Klaviyo Black Friday & BFCM Strategy Guide
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Complete 8-week timeline, automation flows, campaign templates, and proven tactics to maximize 
              your Black Friday Cyber Monday revenue. Used by brands generating $500K+ in BFCM weekend sales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg rounded-lg"
              >
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                  <span>Get BFCM Strategy Call</span>
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg"
              >
                <a href="#timeline">View Timeline</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-red-400">35-45%</div>
                <div className="text-sm opacity-80">Of annual revenue</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-red-400">8 weeks</div>
                <div className="text-sm opacity-80">Preparation timeline</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-red-400">6 flows</div>
                <div className="text-sm opacity-80">Essential automations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4 text-center">
              8-Week BFCM Preparation Timeline
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Start planning in early September for a successful Black Friday launch
            </p>
            
            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white">
                          <phase.icon size={28} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{phase.phase}</h3>
                          <Badge variant="outline">{phase.period}</Badge>
                        </div>
                        <ul className="space-y-2 mt-4">
                          {phase.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start gap-2 text-gray-700">
                              <ArrowRight size={18} className="text-red-600 mt-1 flex-shrink-0" />
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Flows */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-12 text-center">
              6 Essential Klaviyo Flows for BFCM
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {essentialFlows.map((flow, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{flow.name}</CardTitle>
                      <Badge className="bg-red-100 text-red-800">{flow.emails} emails</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Trigger: {flow.trigger}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{flow.description}</p>
                    <div className="flex items-center gap-2 text-green-700 font-semibold">
                      <TrendingUp size={18} />
                      <span>{flow.expectedLift}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Campaign Ideas */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-12 text-center">
              8 High-Converting BFCM Campaign Ideas
            </h2>
            <div className="space-y-4">
              {campaignIdeas.map((idea, index) => (
                <Card key={index} className="border-l-4 border-l-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{idea.type}</h3>
                        <p className="text-gray-700 mb-2">{idea.description}</p>
                        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                          <strong>Klaviyo Implementation:</strong> {idea.tactic}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Subject Lines */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-red-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-12 text-center">
              Proven BFCM Subject Lines (50%+ Open Rates)
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="text-blue-600" />
                    Teaser Emails
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {subjectLines.teaser.map((line, index) => (
                      <li key={index} className="text-gray-700 bg-white p-3 rounded border border-gray-200">
                        {line}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="text-purple-600" />
                    Early Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {subjectLines.earlyAccess.map((line, index) => (
                      <li key={index} className="text-gray-700 bg-white p-3 rounded border border-gray-200">
                        {line}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="text-red-600" />
                    Black Friday
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {subjectLines.blackFriday.map((line, index) => (
                      <li key={index} className="text-gray-700 bg-white p-3 rounded border border-gray-200">
                        {line}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="text-green-600" />
                    Cyber Monday
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {subjectLines.cyberMonday.map((line, index) => (
                      <li key={index} className="text-gray-700 bg-white p-3 rounded border border-gray-200">
                        {line}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-red-600 to-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display mb-6">
              Ready to Maximize Your 2025 Black Friday Revenue?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our Klaviyo experts will build your entire BFCM strategy, design all email templates, 
              set up automation flows, and manage your campaigns throughout the holiday weekend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg"
              >
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                  <span>Book Strategy Call (2025 Slots Filling Fast)</span>
                  <ArrowRight size={20} />
                </a>
              </Button>
            </div>
            <p className="text-sm opacity-75">
              Limited availability • BFCM strategy calls must be completed by September 30, 2025
            </p>
          </div>
        </section>

        {/* Related Resources */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display text-gray-900 mb-8 text-center">
              Related Klaviyo Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link to="/blog/maximizing-black-friday-sales-with-klaviyo" className="text-blue-600 hover:text-blue-700">
                      Maximizing Black Friday Sales with Klaviyo →
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    In-depth blog post with case studies and performance data
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link to="/blog/10-klaviyo-automation-flows-every-e-commerce-store-needs" className="text-blue-600 hover:text-blue-700">
                      Best Klaviyo Automation Flows →
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    10 essential flows to set up before Black Friday
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

export default KlaviyoBlackFridayPage;
