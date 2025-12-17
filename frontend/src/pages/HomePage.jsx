import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Award, Sparkles, Zap, Brain, Mail, Rocket, Settings, Bot, Briefcase, TrendingUp, ExternalLink, Target, BarChart3, Users, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import InternalLinkBlock from '../components/InternalLinkBlock';
import NewsletterForm from '../components/NewsletterForm';
// TrustpilotWidget removed - using consistent footer-style widget
import { companyData, heroImages, services, caseStudies, awards } from '../data/mock';
import robotLadyImage from '../assets/Devaland-robot-lady.jpeg';

const HomePage = () => {
  // Optimized service icon and related services mapping
  const serviceConfig = {
    1: { // Sales & Marketing
      icon: Rocket,
      gradient: 'from-blue-500 to-blue-600'
    },
    2: { // Operations & HR
      icon: Briefcase,
      gradient: 'from-green-500 to-green-600'
    },
    3: { // RPA Development
      icon: Settings,
      gradient: 'from-purple-500 to-purple-600'
    },
    4: { // Voice AI & Chatbot
      icon: Bot,
      gradient: 'from-orange-500 to-orange-600'
    }
  };

  // Structured data for homepage
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Devaland Marketing S.R.L.",
    "alternateName": "Devaland",
    "url": "https://devaland.com",
    "logo": "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+40-721-269-312",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sântandrei 13",
      "addressLocality": "Simeria",
      "postalCode": "335903",
      "addressRegion": "Hunedoara County",
      "addressCountry": "RO"
    },
    "sameAs": [
      "https://www.linkedin.com/company/devaland/",
      "https://www.linkedin.com/in/marius-andronie/",
      "https://www.facebook.com/marius.andronie/",
      "https://www.instagram.com/mariusandronie/",
      "https://www.youtube.com/@devaland13",
      "https://www.trustpilot.com/review/devaland.com"
    ],
    "description": "Leading automation agency specializing in RPA, workflow automation, and Klaviyo email marketing for Shopify brands."
  };

  return (
    <>
      <SEO 
        title="#1 Klaviyo Agency + AI Voice Automation | 50+ E-commerce Clients | Devaland"
        description="Trusted by 50+ Shopify brands. Boost email revenue by 45% with expert Klaviyo flows, AI voice agents & 24/7 chatbots. Award-winning automation agency. Free audit + consultation → Book now!"
        canonical="https://devaland.com"
        keywords={[
          "klaviyo email marketing agency",
          "klaviyo automation flows",
          "AI voice agents",
          "AI chatbot development",
          "shopify klaviyo expert",
          "klaviyo abandoned cart",
          "voice AI for business",
          "24/7 customer support automation",
          "klaviyo flow optimization",
          "e-commerce automation agency"
        ]}
        schema={homeSchema}
      />
      
      <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImages.primary}
            srcSet={heroImages.primarySrcSet}
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
            alt="Digital Transformation"
            width="1200"
            height="593"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-blue-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
                Turn Automation Into Your #1 Revenue Channel
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                We help Shopify brands and service businesses increase revenue and cut costs using Klaviyo email automation and AI-powered Voice Agents — without hiring more staff.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  asChild
                  size="lg"
                  className="btn-accent text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift animate-pulse-glow"
                >
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                    <span>Book a Free Revenue &amp; Automation Audit</span>
                    <ArrowRight size={20} />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="glass text-white border-white/30 font-semibold px-8 py-4 text-lg rounded-lg hover:bg-white/10"
                >
                  <Link to="/voice-ai">See Live Voice AI Demo (24/7)</Link>
                </Button>
              </div>

              {/* Quick proof points */}
              <ul className="flex flex-col sm:flex-row gap-4 text-white/90 mb-8 text-base md:text-lg">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  45–85% Revenue Growth
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  50,000+ Hours Automated
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  Proven with 50+ Shopify &amp; DTC Clients
                </li>
              </ul>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white/90 text-blue-900">Certified Klaviyo Partner</Badge>
                <Badge className="bg-green-100 text-green-800">ROI-Driven Automation</Badge>
                <Badge className="bg-blue-100 text-blue-800">Featured in New York Weekly</Badge>
              </div>
            </div>

            {/* Stats Card */}
            <div className="animate-fade-in-up delay-300">
              <Card className="glass border-white/20 p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-white mb-6">Proven Results</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">{companyData.stats.hoursAutomated}</div>
                      <div className="text-white/80 font-medium">Hours Automated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">{companyData.stats.clientsSaved}</div>
                      <div className="text-white/80 font-medium">Client Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">{companyData.stats.projectsDelivered}</div>
                      <div className="text-white/80 font-medium">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-2">{companyData.stats.yearsExperience}</div>
                      <div className="text-white/80 font-medium">Years Experience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display mb-6">Industry Recognition</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading industry organizations and publications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="glass border-white/20 group hover-lift">
                <CardContent className="p-6 text-center">
                  <Award size={48} className="text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                  <p className="text-white/80 mb-4">{award.description}</p>
                  <a 
                    href={award.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">View Recognition</span>
                    <ExternalLink size={14} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600 text-white">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Automation Solutions That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Klaviyo email marketing to AI voice agents, we help businesses automate processes, increase revenue, and reduce operational costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const config = serviceConfig[service.id];
              const IconComponent = config?.icon || Settings;
              
              return (
                <Card key={index} className="group hover-lift bg-white border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config?.gradient || 'from-gray-500 to-gray-600'} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="text-sm text-gray-500">
                        Starting at <span className="font-semibold text-gray-900">${service.startingPrice}</span>/month
                      </div>
                      <Button asChild variant="outline" className="group">
                        <Link to={service.link} className="inline-flex items-center">
                          <span>Learn More</span>
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/services" className="inline-flex items-center space-x-2">
                <span>View All Services</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-600 text-white">Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Real Results From Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped companies automate their operations, increase revenue, and save time with our proven automation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {caseStudies.slice(0, 3).map((study, index) => (
              <Link key={index} to={`/case-studies#${study.id}`}>
                <Card className="group hover-lift h-full bg-white border border-gray-100 shadow-lg">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{study.description}</p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 font-medium">{study.result}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-600">{study.timeframe}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      <span>Read Case Study</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/case-studies" className="inline-flex items-center space-x-2">
                <span>View All Case Studies</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-600 text-white">Why Devaland</Badge>
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Built for Performance, Designed for Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with proven marketing strategies to deliver automation solutions that scale with your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Revenue-Focused Strategy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every automation we build is designed to directly impact your bottom line through increased conversions and reduced costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Fast Implementation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Get results quickly with our proven processes and experienced team. Most projects delivered in 2-4 weeks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">AI-Powered Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Stay ahead of the competition with cutting-edge AI solutions that automate customer support and business processes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Dedicated Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Work directly with our experts and get ongoing optimization to ensure your automations continue performing.
                  </p>
                </div>
              </div>

              <Button 
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg shadow-xl hover-lift"
              >
                <Link to="/voice-ai" className="inline-flex items-center space-x-2">
                  <span>Explore AI Solutions</span>
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>

            {/* Right side - Robot Lady Image */}
            <div className="relative animate-fade-in-up delay-300">
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-30 animate-pulse"></div>
                
                {/* Main image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                  <img
                    src={robotLadyImage}
                    alt="AI-Powered Automation Assistant - Devaland's intelligent automation solutions"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="800"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">AI-Powered</div>
                      <div className="text-sm text-gray-600">24/7 Automation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Navigation - Explore Our Services & Resources */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-600 text-white">Explore Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">
              Everything You Need to Grow Your Business
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From email marketing automation to AI-powered customer support, discover how our solutions drive measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <InternalLinkBlock
              title="Klaviyo Email Marketing"
              description="Transform your e-commerce email strategy with expert Klaviyo implementation and optimization"
              links={[
                { label: "Klaviyo Services Overview", to: "/klaviyo" },
                { label: "Klaviyo Flow Examples", to: "/klaviyo-flows-examples" },
                { label: "Klaviyo Automation Guide", to: "/klaviyo-automation-guide" },
                { label: "Email Segmentation Strategies", to: "/klaviyo-segmentation-strategies" }
              ]}
              variant="accent"
            />

            <InternalLinkBlock
              title="Voice AI Solutions"
              description="24/7 AI-powered customer support that reduces costs and improves satisfaction"
              links={[
                { label: "Voice AI Services", to: "/voice-ai" },
                { label: "Voice AI Pricing Guide", to: "/blog/voice-ai-pricing-comparison-2025" },
                { label: "Implementation ROI Analysis", to: "/blog/voice-ai-implementation-real-business-results-roi-analysis-technical-guide" },
                { label: "Voice AI for Restaurants", to: "/blog/voice-ai-restaurants-phone-orders-reservations-guide" }
              ]}
              variant="default"
            />

            <InternalLinkBlock
              title="Industry Solutions & Insights"
              description="Proven strategies and success stories from businesses like yours"
              links={[
                { label: "All Automation Services", to: "/services" },
                { label: "Case Studies & Results", to: "/case-studies" },
                { label: "About Devaland", to: "/about" },
                { label: "Blog & Resource Center", to: "/blog" },
                { label: "Contact & Free Consultation", to: "/contact" }
              ]}
              variant="minimal"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={[
          {
            question: "What results can I expect from Klaviyo email marketing automation?",
            answer: "Our clients typically see 30-45% increase in email revenue within the first 90 days. We implement proven automation flows including welcome series, abandoned cart recovery, browse abandonment, post-purchase sequences, and win-back campaigns. Average ROI is 4,200% for e-commerce brands using our Klaviyo optimization services."
          },
          {
            question: "How do AI voice agents and chatbots improve customer support?",
            answer: "Our AI voice agents provide 24/7 customer support, handling 80% of routine inquiries automatically. This reduces support costs by 60% while improving response times from hours to seconds. Voice AI can schedule appointments, answer product questions, process orders, and escalate complex issues to human agents seamlessly. Available in 50+ languages."
          },
          {
            question: "What's included in the free automation audit?",
            answer: "Our free audit includes: complete Klaviyo account review, analysis of existing email flows and campaigns, identification of revenue opportunities, abandoned cart recovery optimization, segmentation strategy review, deliverability check, and a custom roadmap with projected ROI. No obligations, just actionable insights in a 30-minute consultation."
          },
          {
            question: "How long does it take to implement Klaviyo automation flows?",
            answer: "Essential flows (welcome, abandoned cart, browse abandonment) can be implemented in 1-2 weeks. Complete automation setup including advanced segmentation, predictive analytics, and SMS integration typically takes 4-6 weeks."
          },
          {
            question: "Do you work with businesses outside the US?",
            answer: "Yes! We work with businesses globally, with a focus on English-speaking markets including US, UK, Canada, Australia, and New Zealand. Our team provides support in multiple time zones."
          },
          {
            question: "What makes Devaland different from other automation agencies?",
            answer: "We combine technical automation expertise with proven marketing strategy. Unlike agencies that focus on just implementation, we prioritize revenue impact and ongoing optimization. Plus, we offer both Klaviyo email marketing and AI voice solutions under one roof."
          }
        ]}
        title="Frequently Asked Questions About Our Automation Services"
      />

      {/* Final CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Ready to Automate Your Success?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the enterprises that have transformed their operations with our expert automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="btn-accent text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift"
            >
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <span>Start Your Free Consultation</span>
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg" 
              className="glass text-white border-white/30 font-semibold px-8 py-4 text-lg rounded-lg hover:bg-white/10"
            >
              <Link to="/about">Learn About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display mb-4">
            Stay Updated on Automation Trends
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest insights, case studies, and automation strategies delivered to your inbox monthly.
          </p>
          
          <NewsletterForm />
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;
