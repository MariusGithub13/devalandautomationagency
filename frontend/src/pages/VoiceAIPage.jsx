import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Clock, TrendingUp, CheckCircle, Zap, Users, BarChart3, Shield, ArrowRight, Star, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Breadcrumb from '../components/Breadcrumb';
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

      {/* Breadcrumb Navigation */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb 
          items={[
            { label: 'Services', href: '/services' },
            { label: 'Voice AI Agents', href: '/voice-ai' }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pb-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                24/7 AI-Powered Support
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                All-In-One Chat Widget +{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Voice AI Agents
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                One powerful widget with 4 channels: Live Chat, Voice AI, Facebook & Instagram messaging. 
                Handle all customer conversations from a single platform. 24/7 automation + human handoff when needed.
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

      {/* Live Demo Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Live Demos Available Now
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Experience Our Voice AI in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Try our live Voice AI agents right now — no signup required. See how natural conversations drive real results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Phone Demo */}
            <Card className="hover-lift border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Call Luna - Multilingual Demo</h3>
                    <p className="text-gray-600">Speak with our Voice AI in Italian, English, Spanish & more</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 border-2 border-blue-300 mb-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <a 
                      href="tel:+15597174103" 
                      className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      +1 (559) 717-4103
                    </a>
                  </div>
                  <p className="text-center text-sm text-gray-600">Tap to call from mobile or use your phone</p>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Natural conversation flow</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multi-language support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time responses</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Website Demo */}
            <Card className="hover-lift border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Meet Amy - E-commerce AI</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-green-600">Live & Operational Since 2024</span>
                    </div>
                    <p className="text-gray-600">Amy handles customer inquiries 24/7 on Shea Terra Organics, successfully managing real customer queries for months with proven results</p>
                  </div>
                </div>

                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white mb-6"
                >
                  <a href="https://www.sheaterraorganics.com/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit Live Site
                  </a>
                </Button>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real customer interactions daily</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Bilingual support (English & Spanish)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Smart product recommendations & order tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Proven track record of customer satisfaction</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Industry-Specific Demos */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industry-Specific Voice AI Demos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover-lift bg-white border-2 border-gray-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Hotels</h4>
                  <p className="text-sm text-gray-600 mb-4">Bookings & concierge services</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="https://ai.devaland.net/hotels" target="_blank" rel="noopener noreferrer">
                      Try Demo
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-white border-2 border-gray-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Dental Clinics</h4>
                  <p className="text-sm text-gray-600 mb-4">Appointments & service bookings</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="https://ai.devaland.net/londoncitydentists" target="_blank" rel="noopener noreferrer">
                      Try Demo
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-white border-2 border-gray-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Restaurants</h4>
                  <p className="text-sm text-gray-600 mb-4">Orders & reservations</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="https://ai.devaland.net/Pizzeria" target="_blank" rel="noopener noreferrer">
                      Try Demo
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-white border-2 border-gray-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Banking</h4>
                  <p className="text-sm text-gray-600 mb-4">Advanced workflows</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="https://ai.devaland.net/banking" target="_blank" rel="noopener noreferrer">
                      Try Demo
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Video Overview */}
          <Card className="bg-gradient-to-br from-blue-900 to-purple-900 text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">See How Brands Capture Leads 24/7</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Watch real examples of Voice AI agents handling customer inquiries, booking appointments, and qualifying leads — all automatically.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                <a 
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7397501012212850688/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Watch LinkedIn Demo Video
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* All-In-One Chat Widget Feature Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                <MessageSquare className="w-4 h-4" />
                All-In-One Solution
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                One Widget. Four Powerful Channels.
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Stop juggling multiple chat platforms. Our unified chat widget gives your customers choice 
                while keeping all conversations in one dashboard for your team.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Live Chat</h3>
                    <p className="text-gray-600 text-sm">Real-time text messaging with instant responses and AI co-pilot for your team</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Voice AI Chat</h3>
                    <p className="text-gray-600 text-sm">Click-to-call voice conversations with AI agents—no phone number needed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Facebook Messenger</h3>
                    <p className="text-gray-600 text-sm">Connect your Facebook page and respond to messages directly from your dashboard</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Instagram Direct</h3>
                    <p className="text-gray-600 text-sm">Manage Instagram DMs alongside all other channels in one unified inbox</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Key Features
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Unified inbox for all channels
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    AI-powered auto-responses
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Seamless human handoff
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Mobile & desktop notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Analytics & conversation insights
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                    <h3 className="font-bold text-lg">Customer Chat Options</h3>
                    <p className="text-sm opacity-90">Choose how to connect</p>
                  </div>
                  <div className="p-6 space-y-3">
                    <button className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                      <span className="font-medium text-gray-900">Chat via Live Chat</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
                      <Phone className="w-6 h-6 text-purple-600" />
                      <span className="font-medium text-gray-900">Chat with Voice</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="font-medium text-gray-900">Chat with Facebook</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
                      <svg className="w-6 h-6" fill="url(#instagram-gradient)" viewBox="0 0 24 24">
                        <defs>
                          <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#833AB4'}} />
                            <stop offset="50%" style={{stopColor: '#E1306C'}} />
                            <stop offset="100%" style={{stopColor: '#FCAF45'}} />
                          </linearGradient>
                        </defs>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="font-medium text-gray-900">Chat with Instagram</span>
                    </button>
                  </div>
                  <div className="bg-gray-50 p-4 text-center text-sm text-gray-600">
                    Powered by <span className="font-bold text-blue-600">Devaland AI</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-xl font-bold flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                Live & Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Chat Widget Types Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Chat Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build custom chat widgets tailored to your needs. Select the type that best fits your business model and customer communication preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* All-In-One Chat */}
            <Card className="border-2 border-blue-500 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                RECOMMENDED
              </div>
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">All-In-One Chat</h3>
                <p className="text-gray-600 mb-6">
                  Combine WhatsApp, Live Chat, Email/SMS, Facebook, Instagram & Voice AI in one widget for seamless customer communication.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Multi-channel unified inbox
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Customer chooses their preferred channel
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    AI + human handoff seamlessly
                  </div>
                </div>
                <Button asChild className="w-full btn-primary text-white">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Voice AI */}
            <Card className="border-2 hover:border-purple-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Voice AI</h3>
                <p className="text-gray-600 mb-6">
                  Let AI talk, listen and assist your visitors to handle voice conversations for you 24/7, no human intervention needed.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Natural voice conversations
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    24/7 automated support
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    No phone number required
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Live Chat */}
            <Card className="border-2 hover:border-blue-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Live Chat</h3>
                <p className="text-gray-600 mb-6">
                  Engage visitors instantly through real-time website chat. Powered by your team or conversation AI, anytime, anywhere.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Real-time messaging
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    AI co-pilot for agents
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Chat history & analytics
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* SMS / Email Chat */}
            <Card className="border-2 hover:border-green-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">SMS / Email Chat</h3>
                <p className="text-gray-600 mb-6">
                  Collect visitor details and follow up via SMS or Email. Ideal for teams that don't offer 24/7 live support.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Lead capture forms
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Automated follow-ups
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Works offline
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Facebook Chat */}
            <Card className="border-2 hover:border-blue-600 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Facebook Chat</h3>
                <p className="text-gray-600 mb-6">
                  Redirect visitors to Facebook Messenger for real-time conversations. Perfect for businesses active on Facebook.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Connect Facebook page
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Unified inbox integration
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Messenger automation
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Instagram Chat */}
            <Card className="border-2 hover:border-pink-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{background: 'linear-gradient(45deg, #833AB4, #E1306C, #FCAF45)'}}>
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Instagram Chat</h3>
                <p className="text-gray-600 mb-6">
                  Route visitors to Instagram DMs for instant engagement. Great for brands connecting with customers on Instagram.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Instagram DM integration
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Visual-first communication
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Story & post engagement
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp Chat */}
            <Card className="border-2 hover:border-green-600 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">WhatsApp Chat</h3>
                <p className="text-gray-600 mb-6">
                  Let visitors message you directly on WhatsApp. Ideal for small teams managing chats without 24/7 coverage.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    WhatsApp Business API
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Click-to-chat widget
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Rich media support
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Not Sure Which One to Choose?</h3>
              <p className="text-gray-600 mb-6">
                Book a free consultation and we'll help you select the perfect chat solution for your business needs. 
                We can also create custom combinations tailored to your workflow.
              </p>
              <Button asChild size="lg" className="btn-primary text-white">
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Expert Advice
                </a>
              </Button>
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

      {/* Pricing/Packages Section - Detailed Monthly Plans for Each Chat Widget */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Flexible Packages for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent monthly pricing for each chat widget type. All packages include setup, custom AI training, and ongoing support.
            </p>
          </div>

          {/* All-In-One Chat Packages */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">All-In-One Chat Widget</h3>
                <p className="text-gray-600">Live Chat + Voice AI + Facebook + Instagram + WhatsApp + SMS/Email</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Starter</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">$297</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      All 6 channels enabled
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Up to 500 conversations/month
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      2 team members
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Basic AI training
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Email support
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500 shadow-xl relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    POPULAR
                  </span>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Professional</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">$597</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      All 6 channels enabled
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Up to 2,000 conversations/month
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      5 team members
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Advanced AI training + custom flows
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Priority support + analytics
                    </li>
                  </ul>
                  <Button asChild className="w-full btn-primary text-white">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">$1,497</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      All 6 channels enabled
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Unlimited conversations
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Unlimited team members
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Custom AI + integrations
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Dedicated account manager
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Voice AI Only Packages */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Voice AI Chat Widget</h3>
                <p className="text-gray-600">AI-powered voice conversations on your website</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Basic</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">$197</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Up to 300 voice calls/month
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Custom voice agent training
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Call recordings & transcripts
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Basic analytics dashboard
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500 shadow-xl relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    POPULAR
                  </span>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Professional</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">$397</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Up to 1,000 voice calls/month
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Advanced AI personality tuning
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      CRM integrations
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Advanced analytics + reporting
                    </li>
                  </ul>
                  <Button asChild className="w-full btn-primary text-white">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">$997</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Unlimited voice calls
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Multi-language support
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Custom integrations + API access
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Dedicated success manager
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Live Chat Only Packages */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Live Chat Widget</h3>
                <p className="text-gray-600">Real-time text messaging with AI assistance</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Starter</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">$97</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Up to 500 chats/month
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      2 agents
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      AI-powered auto-responses
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Chat history
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500 shadow-xl relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    POPULAR
                  </span>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Professional</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">$197</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Up to 2,000 chats/month
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      5 agents
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      AI co-pilot for agents
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Advanced analytics
                    </li>
                  </ul>
                  <Button asChild className="w-full btn-primary text-white">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">$497</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Unlimited chats
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Unlimited agents
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Custom AI workflows
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      White-label options
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Single-Channel Packages (WhatsApp, Facebook, Instagram, SMS/Email) */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Single-Channel Widgets</h3>
                <p className="text-gray-600">WhatsApp, Facebook, Instagram, or SMS/Email only</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Basic</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">$77</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Single channel (choose one)
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Up to 300 messages/month
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Basic AI auto-replies
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Message history
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500 shadow-xl relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    POPULAR
                  </span>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Professional</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">$147</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Single channel (choose one)
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Up to 1,500 messages/month
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Advanced AI workflows
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Analytics dashboard
                    </li>
                  </ul>
                  <Button asChild className="w-full btn-primary text-white">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">$297</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Single channel (choose one)
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Unlimited messages
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Custom AI + integrations
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Priority support
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Setup Fee Notice */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">One-Time Setup Fee</h3>
            <p className="text-gray-600 mb-4">
              All packages include a <strong>one-time setup fee of $500-$2,500</strong> depending on complexity. 
              This covers custom AI training, widget installation, integration setup, and team onboarding.
            </p>
            <p className="text-sm text-gray-500">
              Setup fees waived for annual commitments • Volume discounts available • Custom enterprise pricing upon request
            </p>
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
