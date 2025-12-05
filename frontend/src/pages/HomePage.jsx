import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, ExternalLink, Sparkles, Zap, Brain } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import SEO from '../components/SEO';
// TrustpilotWidget removed - using consistent footer-style widget
import { companyData, heroImages, services, caseStudies, awards } from '../data/mock';
import robotLadyImage from '../assets/Devaland-robot-lady.jpeg';

const HomePage = () => {
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
        title="Klaviyo Email Marketing & AI Voice Automation Agency | Devaland"
        description="Expert Klaviyo email marketing agency + AI voice agents & chatbots for e-commerce. 45% revenue increase with proven automation flows, abandoned cart recovery, SMS marketing & 24/7 AI support. Free audit."
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
            alt="Digital Transformation"
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

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span className="font-medium">Enterprise Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award size={20} className="text-yellow-400" />
                  <span className="font-medium">Certified Partners</span>
                </div>
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

      {/* AI-Powered Innovation Section with Robot Lady */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
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
              // Define related services for each service
              const getRelatedServices = (serviceId) => {
                switch(serviceId) {
                  case 1: // Sales & Marketing Automation
                    return [
                      { name: 'Klaviyo Services', link: '/klaviyo' },
                      { name: 'Robotic Process Automation (RPA) Development', link: '/services#rpa-development' }
                    ];
                  case 2: // Operations & HR Automation  
                    return [
                      { name: 'Robotic Process Automation (RPA) Development', link: '/services#rpa-development' },
                      { name: 'AI Solutions', link: '/services#ai--chatbot-solutions' }
                    ];
                  case 3: // Robotic Process Automation (RPA) Development
                    return [
                      { name: 'Sales Automation', link: '/services#sales--marketing-automation' },
                      { name: 'Operations Automation', link: '/services#operations--hr-automation' }
                    ];
                  case 4: // Voice AI Agents & Chatbot Solutions
                    return [
                      { name: 'Sales Automation', link: '/services#sales--marketing-automation' },
                      { name: 'Operations Automation', link: '/services#operations--hr-automation' }
                    ];
                  default:
                    return [];
                }
              };

              const relatedServices = getRelatedServices(service.id);

              return (
                <Card key={service.id} className={`hover-lift group animate-fade-in-up delay-${index * 100} h-full`}>
                  <CardContent className="p-6 h-full flex flex-col">
                    <Link 
                      to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                      className="block"
                    >
                      <div className="relative overflow-hidden rounded-lg mb-4">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {service.description}
                      </p>
                    </Link>
                    
                    {/* Related Services Links */}
                    <div className="mb-4 flex-grow">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Related Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {relatedServices.map((relatedService, idx) => (
                          <Link
                            key={idx}
                            to={relatedService.link}
                            className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md hover:bg-blue-100 transition-colors duration-200"
                          >
                            #{relatedService.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Link 
                      to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                      className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200 mt-auto"
                    >
                      <span>Learn More</span>
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
                loading="lazy"
                decoding="async"
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
    </div>
    </>
  );
};

export default HomePage;