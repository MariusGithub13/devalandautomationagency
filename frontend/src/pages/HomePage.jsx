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
      "availableLanguage": ["English", "Romanian"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sântandrei 13",
      "addressLocality": "Simeria",
      "postalCode": "335903",
      "addressRegion": "Hunedoara County",
      "addressCountry": "Romania"
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
                {companyData.tagline}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                {companyData.description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  asChild
                  size="lg"
                  className="btn-accent text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift animate-pulse-glow"
                >
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                    <span>Book Free Automation Audit</span>
                    <ArrowRight size={20} />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="glass text-white border-white/30 font-semibold px-8 py-4 text-lg rounded-lg hover:bg-white/10"
                >
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
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

      {/* AI-Powered Innovation Section with Robot Lady */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-white animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Next-Generation AI Automation</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Meet Your AI-Powered
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                  Automation Partner
                </span>
              </h2>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                We combine cutting-edge artificial intelligence with proven automation frameworks to deliver 
                intelligent solutions that learn, adapt, and scale with your business.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Intelligent Decision Making</h3>
                    <p className="text-gray-300">AI-powered systems that understand context and make smart choices</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Lightning-Fast Processing</h3>
                    <p className="text-gray-300">Handle thousands of tasks simultaneously with zero errors</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Continuous Improvement</h3>
                    <p className="text-gray-300">Systems that learn from data and get better over time</p>
                  </div>
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

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Comprehensive Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic planning to technical implementation, we deliver end-to-end automation 
              solutions that drive measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const config = serviceConfig[service.id] || { icon: Target, gradient: 'from-gray-500 to-gray-600', related: [] };
              const Icon = config.icon;

              return (
                <Card key={service.id} className="hover-lift group h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <Link 
                      to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                      className="block"
                    >
                      <div className="flex items-center justify-center mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-br ${config.gradient} rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-300`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 text-center">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 text-center">
                        {service.description}
                      </p>
                    </Link>
                    
                    <Link 
                      to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                      className="flex items-center justify-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 mt-auto"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <span>Learn More About {service.title}</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-primary text-white px-8 py-4 rounded-lg mr-4 text-lg font-semibold">
              <Link to="/services">Explore Automation Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-4 rounded-lg text-lg font-semibold">
              <Link to="/klaviyo">Klaviyo for Shopify</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Klaviyo Resources Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-blue-600 text-white mb-4">
              <Mail className="inline-block mr-2" size={16} />
              Klaviyo Email Marketing Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Klaviyo Automation Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive guides and proven strategies to maximize your Klaviyo email marketing performance and drive 30-45% revenue growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Resource 1: Klaviyo Flows */}
            <Link to="/klaviyo-flows-examples" className="group">
              <Card className="border-2 border-blue-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <Zap className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <Badge className="bg-green-100 text-green-700">Popular</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    Best Klaviyo Flows Examples
                  </h3>
                  <p className="text-gray-600 mb-4">
                    30+ proven flow templates for e-commerce. Abandoned cart, welcome series, post-purchase, and advanced automation examples.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Flow Library</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Resource 2: Automation Guide */}
            <Link to="/klaviyo-automation-guide" className="group">
              <Card className="border-2 border-purple-200 hover:border-purple-500 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                      <Target className="text-purple-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">Essential</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    Complete Automation Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master Klaviyo automation from setup to optimization. Proven strategies to generate 25-40% more revenue on autopilot.
                  </p>
                  <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Read Full Guide</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Resource 3: GDPR Compliance */}
            <Link to="/klaviyo-gdpr-compliance" className="group">
              <Card className="border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                      <CheckCircle className="text-indigo-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <Badge className="bg-orange-100 text-orange-700">Compliance</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    GDPR Compliance Guide
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete Klaviyo GDPR setup checklist. Consent management, data privacy, and compliance best practices for EU markets.
                  </p>
                  <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Ensure Compliance</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Resource 4: Black Friday Strategy */}
            <Link to="/klaviyo-black-friday-strategy" className="group">
              <Card className="border-2 border-orange-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                      <TrendingUp className="text-orange-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <Badge className="bg-purple-100 text-purple-700">Seasonal</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    Black Friday Strategy
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complete BFCM playbook with campaign timelines, segmentation tactics, and email sequences that drive 2-3x holiday revenue.
                  </p>
                  <div className="flex items-center text-orange-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Get BFCM Playbook</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Resource 5: Predictive Analytics */}
            <Link to="/klaviyo-predicted-next-order" className="group">
              <Card className="border-2 border-green-200 hover:border-green-500 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors duration-300">
                      <BarChart3 className="text-green-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <Badge className="bg-indigo-100 text-indigo-700">Advanced</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    Predictive Next Order Date
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Use AI-powered predictions for perfect replenishment timing. Increase repeat purchases by 30-40% with predictive flows.
                  </p>
                  <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn Predictive Analytics</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Resource 6: Metrics Guide */}
            <Link to="/klaviyo-placed-order-rate" className="group">
              <Card className="border-2 border-pink-200 hover:border-pink-500 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-600 transition-colors duration-300">
                      <Target className="text-pink-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-700">Analytics</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                    Placed Order Rate Explained
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Master the metric that matters most. Understand benchmarks, track performance, and optimize for maximum email ROI.
                  </p>
                  <div className="flex items-center text-pink-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Understand Metrics</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Resource 7: Segmentation Strategies - NEW */}
            <Link to="/klaviyo-segmentation-strategies" className="group">
              <Card className="border-2 border-blue-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <Users className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <Badge className="bg-red-100 text-red-700">NEW</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    Segmentation Strategies
                  </h3>
                  <p className="text-gray-600 mb-4">
                    RFM segmentation, behavioral targeting, and predictive analytics. Increase revenue by 760% with laser-targeted campaigns.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Master Segmentation</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Resource 8: Email Templates - NEW */}
            <Link to="/klaviyo-email-templates" className="group">
              <Card className="border-2 border-purple-200 hover:border-purple-500 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                      <Mail className="text-purple-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <Badge className="bg-red-100 text-red-700">NEW</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    Email Template Design
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professional templates, design best practices, and mobile optimization. Increase click rates by 40% with proven designs.
                  </p>
                  <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Templates</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Resource 9: Voice AI - Cross-sell */}
            <Link to="/voice-ai" className="group">
              <Card className="border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                      <Brain className="text-indigo-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <Badge className="bg-green-100 text-green-700">Voice AI</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                    Voice AI Automation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Complement your email campaigns with AI voice agents. Handle calls, qualify leads, and book appointments 24/7.
                  </p>
                  <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Explore Voice AI</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* CTA Row */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Scale Your Klaviyo Revenue?</h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Our Klaviyo experts will audit your account, identify opportunities, and implement proven strategies to increase email revenue by 30-45%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8">
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                  Book Free Klaviyo Audit
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                <Link to="/klaviyo">Explore All Klaviyo Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Voice AI Articles Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-blue-500 text-white mb-4">
              <Brain className="inline-block mr-2" size={16} />
              Voice AI Expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Voice AI Implementation Guides
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive resources for implementing Voice AI across industries - from pricing strategies to industry-specific deployment guides.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Article 1: Pricing */}
            <Link to="/blog/voice-ai-pricing-comparison-2025" className="group">
                <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-400 transition-colors duration-300">
                      <Target className="text-white" size={24} />
                    </div>
                    <Badge className="bg-yellow-500 text-gray-900">New</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-200">
                    Voice AI Pricing Guide 2025
                  </h3>
                  <p className="text-white/90 mb-4 line-clamp-3">
                    Compare pricing models across platforms ($0.05-$0.60/minute). Calculate ROI and find the best plan for your call volume.
                  </p>
                  <div className="flex items-center text-white font-medium group-hover:text-blue-100">
                    <span>Read Full Guide</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Featured Article 2: Small Business */}
            <Link to="/blog/ai-voice-assistants-small-business-guide-2025" className="group">
                <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center group-hover:bg-purple-400 transition-colors duration-300">
                      <Users className="text-white" size={24} />
                    </div>
                    <Badge className="bg-yellow-500 text-gray-900">New</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-200">
                    Small Business Voice AI
                  </h3>
                  <p className="text-white/90 mb-4 line-clamp-3">
                    Budget-friendly guide with 60-point vendor scorecard, 4-week roadmap, and common mistakes to avoid.
                  </p>
                  <div className="flex items-center text-white font-medium group-hover:text-blue-100">
                    <span>Read Full Guide</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Featured Article 3: vs Call Centers */}
            <Link to="/blog/voice-ai-vs-call-centers-cost-benefit-analysis" className="group">
                <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:bg-green-400 transition-colors duration-300">
                      <BarChart3 className="text-white" size={24} />
                    </div>
                    <Badge className="bg-yellow-500 text-gray-900">New</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-200">
                    Voice AI vs Call Centers
                  </h3>
                  <p className="text-white/90 mb-4 line-clamp-3">
                    Cost comparison: $5,267/month vs $997/month (81% savings). 3-year TCO analysis and hybrid model recommendations.
                  </p>
                  <div className="flex items-center text-white font-medium group-hover:text-blue-100">
                    <span>Read Analysis</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Featured Article 4: Restaurants */}
            <Link to="/blog/voice-ai-restaurants-phone-orders-reservations-guide" className="group">
                <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-400 transition-colors duration-300">
                      <Sparkles className="text-white" size={24} />
                    </div>
                    <Badge className="bg-yellow-500 text-gray-900">New</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-200">
                    Voice AI for Restaurants
                  </h3>
                  <p className="text-white/90 mb-4 line-clamp-3">
                    Menu training, POS integration (Toast/Square/Clover), multilingual orders (29+ languages), peak hour management.
                  </p>
                  <div className="flex items-center text-white font-medium group-hover:text-blue-100">
                    <span>Restaurant Guide</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Featured Article 5: Healthcare */}
            <Link to="/blog/voice-ai-healthcare-hipaa-patient-scheduling-guide" className="group">
                <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center group-hover:bg-red-400 transition-colors duration-300">
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <Badge className="bg-yellow-500 text-gray-900">New</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-200">
                    Voice AI for Healthcare
                  </h3>
                  <p className="text-white/90 mb-4 line-clamp-3">
                    HIPAA-compliant patient scheduling, no-show reduction (18% → 7%), insurance verification, prescription refills.
                  </p>
                  <div className="flex items-center text-white font-medium group-hover:text-blue-100">
                    <span>Healthcare Guide</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Featured Article 6: Shopify Brands */}
            <Link to="/blog/voice-ai-shopify-brands-customer-service-guide" className="group">
                <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center group-hover:bg-indigo-400 transition-colors duration-300">
                      <Zap className="text-white" size={24} />
                    </div>
                    <Badge className="bg-yellow-500 text-gray-900">New</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-200">
                    Voice AI for Shopify Brands
                  </h3>
                  <p className="text-white/90 mb-4 line-clamp-3">
                    Meet Amy at Shea Terra Organics: 29+ languages, 24/7 customer service, order tracking, product recommendations. Live demo available.
                  </p>
                  <div className="flex items-center text-white font-medium group-hover:text-blue-100">
                    <span>Shopify Guide</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold">
              <Link to="/blog">View All Voice AI Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Featured Success Story
              </div>
              <h2 className="text-4xl font-display text-gray-900 mb-6">
                {caseStudies[0].results.timeReduction} Time Reduction for {caseStudies[0].client}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {caseStudies[0].challenge}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{caseStudies[0].results.timeReduction}</div>
                  <div className="text-gray-600 font-medium">Time Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{caseStudies[0].results.costSavings}</div>
                  <div className="text-gray-600 font-medium">Annual Savings</div>
                </div>
              </div>
              <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 mb-8">
                "{caseStudies[0].testimonial}"
                <footer className="mt-2 font-medium text-gray-900">
                  - {caseStudies[0].clientName}, {caseStudies[0].clientTitle}
                </footer>
              </blockquote>
              <Button asChild className="btn-primary text-white px-6 py-3 rounded-lg">
                <Link to="/case-studies">View All Case Studies</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heroImages.transformation} 
                alt="Automation Success"
                width="800"
                height="533"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                className="w-full rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp size={24} className="text-green-600" />
                  <div>
                    <div className="font-bold text-gray-900">ROI Achieved</div>
                    <div className="text-green-600 font-semibold">340%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest from Blog Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-600 text-white">Latest Insights</Badge>
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert insights on Klaviyo automation, Voice AI implementation, and business growth strategies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Latest Blog Post 1 - Klaviyo Automation */}
            <Link to="/blog/best-10-klaviyo-automation-flows-every-ecommerce-store-needs" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Mail className="text-white opacity-50" size={64} />
                    </div>
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-gray-900">Popular</Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Clock size={16} className="mr-2" />
                      <span>25 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      Best 10 Klaviyo Automation Flows Every E-commerce Store Needs
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      Complete guide to Klaviyo flows including abandoned cart, welcome series, and win-back campaigns. Increase revenue by 320% with proven automation.
                    </p>
                    <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700">
                      <span>Read Article</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Latest Blog Post 2 - Voice AI */}
            <Link to="/blog/voice-ai-shopify-brands-customer-service-guide" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-indigo-600 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Bot className="text-white opacity-50" size={64} />
                    </div>
                    <Badge className="absolute top-4 left-4 bg-green-500 text-white">New</Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Clock size={16} className="mr-2" />
                      <span>20 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      Voice AI for Shopify Brands: Complete Customer Service Automation
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      Meet Amy at Shea Terra Organics: 29+ languages, 24/7 customer service, order tracking, product recommendations. Live demo available.
                    </p>
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      <span>Read Guide</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Latest Blog Post 3 - Implementation */}
            <Link to="/blog/voice-ai-implementation-real-business-results-roi-analysis-technical-guide" className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-green-600 to-teal-600 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BarChart3 className="text-white opacity-50" size={64} />
                    </div>
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white">Trending</Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Clock size={16} className="mr-2" />
                      <span>18 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      Voice AI Implementation: Real Results, ROI & Technical Guide
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      Real business results from Voice AI implementations. Complete ROI analysis, technical architecture, and step-by-step implementation guide.
                    </p>
                    <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                      <span>Read Analysis</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/blog" className="inline-flex items-center">
                <span>View All Articles</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
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
            answer: "Essential flows (welcome, abandoned cart, browse abandonment) can be implemented in 1-2 weeks. Complete automation setup including advanced segmentation, predictive analytics, and SMS integration typically takes 4-6 weeks. You'll start seeing results within the first week as flows go live. We provide full training and ongoing optimization."
          },
          {
            question: "Do you work with Shopify stores outside of email marketing?",
            answer: "Yes! Beyond Klaviyo email marketing, we offer: AI voice agents for customer support, AI chatbots for sales & lead generation, RPA (Robotic Process Automation) for order processing, inventory management automation, custom Shopify app development, and workflow automation for operations. We're a full-service automation agency for e-commerce."
          },
          {
            question: "What is your pricing model for Klaviyo and automation services?",
            answer: "We offer flexible pricing based on your needs: Klaviyo Setup & Strategy ($2,500-$5,000 one-time), Monthly Management ($1,500-$4,000/month including flow optimization, campaign creation, A/B testing), AI Voice Agent Setup ($3,000-$8,000 one-time + $500-$1,500/month hosting), and Custom Automation Projects (quoted individually). All packages include strategy, implementation, and ongoing support. ROI guarantee available."
          },
          {
            question: "Can you migrate my existing email platform to Klaviyo?",
            answer: "Absolutely! We specialize in seamless migrations from Mailchimp, Klaviyo, Omnisend, Attentive, and other platforms to Klaviyo. We transfer all subscriber data, historical campaign data, segmentation rules, and recreate your best-performing automations. Migration typically takes 1-2 weeks with zero data loss and minimal downtime. We also provide team training on the new platform."
          },
          {
            question: "Do you provide ongoing support and optimization after setup?",
            answer: "Yes! All our packages include ongoing support. We provide: monthly performance reports with detailed analytics, continuous A/B testing of subject lines and content, flow optimization based on data insights, seasonal campaign strategy (Black Friday, holiday, etc.), deliverability monitoring, list growth strategies, and quarterly strategy sessions. You'll have a dedicated account manager and direct access to our team via Slack or email."
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