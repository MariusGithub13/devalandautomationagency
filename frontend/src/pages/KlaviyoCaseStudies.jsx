import React from 'react';
import { ArrowRight, CheckCircle, Zap, TrendingUp, Mail, MessageSquare, Award, Target, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import InternalLinkBlock from '../components/InternalLinkBlock';
import NewsletterForm from '../components/NewsletterForm';
import { companyData, klaviyoSuccessStories, klaviyoStats, awards, serviceImages } from '../data/mock';

const KlaviyoCaseStudies = () => {
  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Klaviyo E-commerce Case Studies",
    "description": "Real revenue growth results from Shopify and e-commerce brands using Klaviyo email marketing automation. See 45-80% revenue increases, 30%+ open rates, and proven automation strategies.",
    "publisher": {
      "@type": "Organization",
      "name": "Devaland Marketing S.R.L.",
      "url": "https://devaland.com"
    }
  };

  return (
    <>
      <SEO 
        title="Klaviyo Case Studies: Real E-commerce Revenue Growth Results | 45-80% Revenue Increase"
        description="Real Klaviyo success stories from Shopify brands. See how our email marketing automation increased revenue 45-80%, achieved 30%+ open rates, and recovered abandoned carts. Browse detailed case studies with results, challenges, and solutions."
        canonical="https://devaland.com/klaviyo-case-studies"
        keywords={[
          "klaviyo case studies",
          "klaviyo success stories",
          "klaviyo results",
          "klaviyo roi",
          "email marketing case studies",
          "shopify klaviyo results",
          "abandoned cart recovery results",
          "email automation success",
          "klaviyo revenue increase"
        ]}
        schema={caseStudiesSchema}
      />
      
      <div className="pt-16">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/services' },
              { label: 'Klaviyo', href: '/klaviyo' },
              { label: 'Case Studies', href: '/klaviyo-case-studies' }
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">Real Results, Real Businesses</Badge>
                <h1 className="text-5xl md:text-6xl font-display text-white mb-6">
                  Klaviyo E-commerce Case Studies: Real Revenue Growth for Online Brands
                </h1>
                <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                  Explore real results—45-80% revenue increases, 30%+ open rates, abandoned cart recovery, and proven automation flows implemented for Shopify stores and e-commerce brands.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                    <div className="text-3xl font-bold text-white mb-2">{klaviyoStats.averageRevenueIncrease}</div>
                    <div className="text-sm text-purple-200">Avg Revenue Increase</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                    <div className="text-3xl font-bold text-white mb-2">{klaviyoStats.averageOpenRate}</div>
                    <div className="text-sm text-purple-200">Avg Open Rate</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-white text-purple-900 hover:bg-purple-50 font-semibold px-8 py-4 text-lg rounded-lg hover-lift"
                  >
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                      <span>Book Klaviyo Audit</span>
                      <ArrowRight size={20} />
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-lg"
                  >
                    <a href="#case-studies">View Case Studies</a>
                  </Button>
                </div>
              </div>

              <div className="animate-fade-in-up delay-300">
                <img 
                  src={serviceImages.klaviyo}
                  alt="Klaviyo Email Marketing Success - Revenue Growth Dashboard"
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

        {/* Trust Indicators Section */}
        <section className="section-padding-sm bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Trusted Klaviyo Partner & Award Winner</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Certified Klaviyo experts delivering proven strategies for e-commerce success
              </p>
            </div>
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
                        <Award size={32} className="text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{award.title}</h3>
                      <p className="text-gray-600 text-sm">{award.description}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Case Studies Section */}
        <section id="case-studies" className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800">Detailed Success Stories</Badge>
              <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
                Real Klaviyo Results from E-commerce Brands
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped online stores across industries achieve remarkable growth through strategic Klaviyo email marketing and automation implementations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {klaviyoSuccessStories.slice(0, 4).map((story, index) => (
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
                          Solutions Implemented
                        </h4>
                        <ul className="space-y-1">
                          {story.solutions.map((solution, i) => (
                            <li key={i} className="text-gray-600 text-sm flex items-start">
                              <CheckCircle size={14} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">Measurable Results</h4>
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

            {/* Overall Stats Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-6">Proven Track Record Across All Industries</h3>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                These results represent real implementations across diverse e-commerce sectors, proving that strategic Klaviyo email marketing works for any online business.
              </p>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-2">{klaviyoStats.averageRevenueIncrease}</div>
                  <div className="text-purple-200 text-sm">Average Revenue Increase</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">{klaviyoStats.averageOpenRate}</div>
                  <div className="text-purple-200 text-sm">Average Open Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">{klaviyoStats.averageClickRate}</div>
                  <div className="text-purple-200 text-sm">Average Click Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">{klaviyoStats.clientsServed}</div>
                  <div className="text-purple-200 text-sm">Clients Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Flows Delivered Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
                Klaviyo Automation Flows We Implement
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every successful case study includes strategic implementation of these high-converting automation flows
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Welcome Series",
                  description: "5-email nurture sequence with brand story, social proof, and first-purchase incentives",
                  metric: "50-60% open rate"
                },
                {
                  icon: <TrendingUp className="w-6 h-6" />,
                  title: "Abandoned Cart Recovery",
                  description: "3-email sequence with gentle reminders, free shipping offers, and urgency messaging",
                  metric: "10-30% recovery rate"
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Browse Abandonment",
                  description: "Product reminders with customer reviews and alternative recommendations",
                  metric: "2-5% conversion"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Post-Purchase Flows",
                  description: "Thank you emails, cross-sell recommendations, and review requests",
                  metric: "15-25% repeat rate"
                },
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "Win-Back Campaigns",
                  description: "Re-engagement sequences for inactive customers with special offers",
                  metric: "5-10% reactivation"
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "VIP Customer Flows",
                  description: "Exclusive offers and early access for high-value customers",
                  metric: "30% higher LTV"
                }
              ].map((flow, index) => (
                <Card key={index} className={`hover-lift animate-fade-in-up delay-${index * 100}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                      {flow.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{flow.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{flow.description}</p>
                    <Badge className="bg-green-100 text-green-800">{flow.metric}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift"
              >
                <Link to="/klaviyo-flows-examples" className="inline-flex items-center space-x-2">
                  <span>View Detailed Flow Examples</span>
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our Klaviyo case studies and services
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Are these real results or estimates?",
                  answer: "These are 100% real results from actual client implementations. All metrics shown are directly from Klaviyo analytics dashboards and verified through client reporting. We're proud to showcase genuine success stories with measurable ROI."
                },
                {
                  question: "How long does it take to see results like these?",
                  answer: "Most clients see initial improvements within 30-60 days of implementation. Significant revenue increases (45%+) typically occur over 4-6 months as automation flows mature and we optimize based on performance data. Quick wins come from abandoned cart recovery, while long-term gains build through welcome series and customer journey optimization."
                },
                {
                  question: "What size businesses do these case studies represent?",
                  answer: "Our case studies span various business sizes: small e-commerce stores ($250K-1M annual revenue), mid-market brands ($1M-10M revenue), and larger enterprise clients ($10M+ revenue). The strategies and flows we implement scale effectively across all business sizes."
                },
                {
                  question: "Can you guarantee similar results for my business?",
                  answer: "While we can't guarantee specific percentages (every business is unique), we can guarantee our proven methodology and dedicated optimization approach. We offer a Performance Plan option where we only earn from incremental revenue we generate, demonstrating our confidence in delivering results."
                },
                {
                  question: "Do you work with businesses outside e-commerce?",
                  answer: "While most of our case studies feature e-commerce brands (where Klaviyo excels), we also work with B2B companies, SaaS businesses, and service-based organizations. The core automation principles apply across industries, with customization for each business model."
                },
                {
                  question: "What makes your approach different from other Klaviyo agencies?",
                  answer: "We focus on revenue-first strategies, not vanity metrics. Every flow is designed with ROI in mind. We combine deep Klaviyo technical expertise with conversion optimization and customer psychology. Plus, our transparent reporting means you always know exactly how your email marketing performs."
                }
              ].map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="text-purple-600 mr-3 flex-shrink-0" size={20} />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 ml-8">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display mb-4">Related Klaviyo Resources</h2>
              <p className="text-xl text-gray-600">Learn more about our Klaviyo services and strategies</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <InternalLinkBlock
                title="Essential Klaviyo Guides"
                description="Deep-dive guides for maximizing your Klaviyo performance"
                links={[
                  { label: "10 Best Klaviyo Flows", to: "/blog/best-10-klaviyo-automation-flows-every-ecommerce-store-needs" },
                  { label: "Black Friday Strategy", to: "/klaviyo-black-friday-strategy" },
                  { label: "Advanced Analytics Guide", to: "/blog/advanced-klaviyo-analytics-beyond-open-and-click-rates" },
                  { label: "GDPR Compliance", to: "/klaviyo-gdpr-compliance" }
                ]}
                variant="default"
              />
              
              <InternalLinkBlock
                title="Klaviyo Services"
                description="Explore our complete Klaviyo implementation and management packages"
                links={[
                  { label: "Klaviyo Overview", to: "/klaviyo" },
                  { label: "Automation Flows Setup", to: "/klaviyo-flows-examples" },
                  { label: "Segmentation Strategies", to: "/klaviyo-segmentation-strategies" },
                  { label: "Email Template Design", to: "/klaviyo-email-templates" }
                ]}
                variant="accent"
              />
              
              <InternalLinkBlock
                title="Other Services"
                description="Complete marketing automation solutions"
                links={[
                  { label: "All Services", to: "/services" },
                  { label: "Voice AI Solutions", to: "/voice-ai" },
                  { label: "General Case Studies", to: "/case-studies" },
                  { label: "Book Consultation", to: "/contact" }
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
              Get Klaviyo Tips & E-commerce Strategies
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join 5,000+ e-commerce brands getting Klaviyo automation tips, case study insights, and proven strategies delivered monthly.
            </p>
            
            <NewsletterForm />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can replicate these results for your e-commerce business. Book a free Klaviyo audit to get started.
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
                <Link to="/klaviyo">View Klaviyo Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KlaviyoCaseStudies;