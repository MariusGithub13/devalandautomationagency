import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Clock, TrendingUp, CheckCircle, Zap, Users, BarChart3, Shield, ArrowRight, Star, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { voiceAIData, companyData } from '../data/mock';
import ROICalculator from '../components/ROICalculator';

const VoiceAIPage = () => {
  return (
    <>
      <Helmet>
        <title>Voice AI Agents & Chatbots | 24/7 Customer Support Automation | Devaland</title>
        <meta name="description" content="Deploy intelligent Voice AI agents for phone calls and website chatbots. Get 24/7 customer support, 80% query resolution, and 50% cost reduction. Book your free audit today." />
        <meta name="keywords" content="voice AI agents, AI phone assistant, chatbot development, conversational AI, customer support automation, AI voice bot, website chatbot, phone automation" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Voice AI Agents & Chatbots | 24/7 Automation | Devaland" />
        <meta property="og:description" content="Deploy intelligent Voice AI agents for phone calls and website chatbots. Get 24/7 customer support with 80% query resolution." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devaland.com/voice-ai" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Voice AI Agents & Chatbots | Devaland" />
        <meta name="twitter:description" content="Deploy intelligent Voice AI agents for 24/7 customer support automation." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Voice AI Agents & Chatbot Solutions",
            "description": "Custom AI voice agents for phone calls and intelligent chatbots for websites. 24/7 automated customer support.",
            "provider": {
              "@type": "Organization",
              "name": "Devaland",
              "url": "https://devaland.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "AI Automation",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "price": "Custom",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                24/7 AI-Powered Support
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Voice AI Agents That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Never Sleep
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Deploy intelligent AI voice agents for phone calls and chatbots for your website. 
                Handle customer inquiries 24/7, qualify leads automatically, and scale your support without hiring.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="btn-primary text-white">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Book Free Voice AI Demo
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/case-studies">
                    View Success Stories
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-gray-900">80%</div>
                  <div className="text-sm text-gray-600">Query Resolution</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img
                src={voiceAIData.heroImage}
                alt="Voice AI Agent Dashboard showing real-time conversations"
                className="rounded-2xl shadow-2xl"
                loading="eager"
                fetchpriority="high"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Live Now</div>
                  <div className="text-sm text-gray-600">Handling 247 calls</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to Automate Your Customer Support?</h3>
              <p className="text-blue-100 text-lg">Get a free audit and custom Voice AI demo tailored to your business</p>
            </div>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold shadow-lg flex-shrink-0">
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Book Free Audit
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Where Our Voice AI Agents Excel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From phone calls to website chat, our AI agents handle customer interactions with human-like intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {voiceAIData.useCases.map((useCase, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    {useCase.icon === 'Phone' && <Phone className="w-7 h-7 text-white" />}
                    {useCase.icon === 'MessageSquare' && <MessageSquare className="w-7 h-7 text-white" />}
                    {useCase.icon === 'Users' && <Users className="w-7 h-7 text-white" />}
                    {useCase.icon === 'Clock' && <Clock className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <ul className="space-y-3">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge technology with features designed for business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {voiceAIData.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon === 'Zap' && <Zap className="w-6 h-6 text-blue-600" />}
                  {feature.icon === 'Shield' && <Shield className="w-6 h-6 text-blue-600" />}
                  {feature.icon === 'BarChart3' && <BarChart3 className="w-6 h-6 text-blue-600" />}
                  {feature.icon === 'Users' && <Users className="w-6 h-6 text-blue-600" />}
                  {feature.icon === 'TrendingUp' && <TrendingUp className="w-6 h-6 text-blue-600" />}
                  {feature.icon === 'Clock' && <Clock className="w-6 h-6 text-blue-600" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Devaland Voice AI Agents?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We don't just deploy chatbots—we architect intelligent conversation systems that understand context, 
                learn from interactions, and deliver measurable business results.
              </p>

              <div className="space-y-6">
                {voiceAIData.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={voiceAIData.benefitsImage}
                alt="Voice AI Analytics Dashboard"
                className="rounded-2xl shadow-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Packages Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Flexible Packages for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect Voice AI solution for your needs. All packages include setup, training, and ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {voiceAIData.packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-2 border-blue-500 shadow-xl scale-105' : 'border'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    {pkg.priceNote && <span className="text-gray-600 ml-2">{pkg.priceNote}</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${pkg.popular ? 'btn-primary text-white' : ''}`} variant={pkg.popular ? 'default' : 'outline'}>
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Calculate Your Potential Savings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how much you could save by automating customer support with Voice AI
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* Client Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real Brands. Real Results.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Companies already using our Voice AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Shea Terra Organics Case Study */}
            <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Shea Terra Organics</h3>
                    <p className="text-gray-600">Natural Beauty & Skincare</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  E-commerce brand using Voice AI chatbot for 24/7 customer support, product recommendations, 
                  and order tracking. Handles skincare questions, ingredient inquiries, and shipping updates automatically.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">24/7</div>
                    <div className="text-sm text-gray-600">Support Coverage</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">Live</div>
                    <div className="text-sm text-gray-600">On Website</div>
                  </div>
                </div>

                <Button asChild variant="outline" className="w-full">
                  <a href="https://www.sheaterraorganics.com/" target="_blank" rel="noopener noreferrer">
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Devaland Own Chat Widget */}
            <Card className="border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Devaland.com</h3>
                    <p className="text-gray-600">We Practice What We Preach</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  <strong className="text-blue-600">Try it yourself!</strong> The chat widget on this website is powered by 
                  our own Voice AI technology. It handles inquiries about our services, books consultations, 
                  and answers questions about automation—24/7, without human intervention.
                </p>

                <div className="bg-blue-100 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-900 font-medium">
                    💡 Look for the chat widget in the bottom-right corner of this page. Ask it anything!
                  </p>
                </div>

                <Button asChild className="w-full btn-primary text-white">
                  <a href="#chatwidget" onClick={(e) => {
                    e.preventDefault();
                    // Trigger chat widget if it exists
                    const chatButton = document.querySelector('[data-chat-widget], .chat-widget-button, #chat-widget-container button');
                    if (chatButton) chatButton.click();
                  }}>
                    Test Our AI Chat Now
                    <MessageSquare className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Want to be featured here?</p>
            <Button asChild size="lg" variant="outline">
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                Become a Voice AI Success Story
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Powered by Leading AI Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We integrate with the best AI platforms to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {voiceAIData.technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="text-2xl font-bold text-gray-900 mb-2">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Deploy Your Voice AI Agent?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free 30-minute consultation and see how AI voice agents can transform your customer support. 
            Get a custom demo tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Book Free Consultation
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default VoiceAIPage;
