import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, Clock, TrendingUp, CheckCircle, Zap, Users, BarChart3, Shield, ArrowRight, Star, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Breadcrumb from '../components/Breadcrumb';
import InternalLinkBlock from '../components/InternalLinkBlock';
import { voiceAIData, companyData } from '../data/mock';
import ROICalculator from '../components/ROICalculator';
import robotLadyImage from '../assets/Devaland-robot-lady.webp';

const VoiceAIPage = () => {
  return (
    <>
      <Helmet>
        <title>Voice AI Agents & Chatbots | 24/7 Customer Support Automation | Devaland</title>
        <meta name="description" content="Deploy intelligent Voice AI agents for phone calls and website chatbots. Get 24/7 customer support, 80% query resolution, and 50% cost reduction." />
        <meta name="keywords" content="voice AI agents, AI phone assistant, chatbot development, conversational AI, customer support automation" />
        <link rel="canonical" href="https://devaland.com/voice-ai" />
      </Helmet>

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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
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
                Handle all conversations from a single platform with 24/7 automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="btn-primary text-white font-bold">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Book Free Voice AI Demo
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-bold">
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={robotLadyImage}
                alt="AI-Powered Voice Agent Assistant"
                width="600"
                height="800"
                className="rounded-2xl shadow-2xl transform scale-x-[-1]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Experience Our Voice AI in Action
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Phone Demo */}
            <Card className="hover-lift border-2 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Luna - Multilingual Demo</h3>
                <div className="bg-white rounded-xl p-6 border-2 border-blue-300 mb-6 text-center">
                  <a href="tel:+15597174103" className="text-3xl font-bold text-blue-600">+1 (559) 717-4103</a>
                </div>
              </CardContent>
            </Card>

            {/* Industry Demos - SEO FIX: Descriptive Links */}
            <Card className="border-2 border-purple-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry-Specific Demos</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button asChild variant="outline" size="sm">
                    <a href="https://ai.devaland.net/hotels" target="_blank" rel="noopener noreferrer">Try Hotel AI Demo</a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://ai.devaland.net/londoncitydentists" target="_blank" rel="noopener noreferrer">Try Dental AI Demo</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Section - ACCESSIBILITY FIX: Contrast & Hierarchy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            One Widget. Four Powerful Channels.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {['Live Chat', 'Voice AI Chat', 'Facebook Messenger', 'Instagram Direct'].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{item}</h3>
                  <p className="text-gray-700">Unified automation for your customer communications.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner - ACCESSIBILITY FIX: Solid Contrast */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-2">Ready to Automate Customer Support?</h2>
            {/* Removed opacity-90 for 100/100 contrast score */}
            <p className="text-white text-xl font-medium">Get a custom Voice AI demo tailored to your business needs.</p>
          </div>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-6 text-xl shadow-2xl">
            <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Book Free Audit Now</a>
          </Button>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Calculate Your Potential Savings</h2>
          <ROICalculator />
        </div>
      </section>

      {/* Final Bottom CTA - ACCESSIBILITY FIX */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to Deploy Your AI Agent?</h2>
          <p className="text-xl mb-8 text-white font-medium">
            Join the brands using Devaland to capture leads and close sales 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 font-bold px-10 py-6 text-xl">
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default VoiceAIPage;