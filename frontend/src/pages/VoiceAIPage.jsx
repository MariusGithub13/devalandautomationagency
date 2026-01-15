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
        <link rel="canonical" href="https://devaland.com/voice-ai" />
      </Helmet>

      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Voice AI', href: '/voice-ai' }]} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pb-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
                <Zap className="w-4 h-4" /> 24/7 AI-Powered Support
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
                All-In-One Chat Widget + <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Voice AI Agents</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                One powerful widget with 4 channels: Live Chat, Voice AI, Facebook & Instagram messaging. Handle all customer conversations from a single platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-primary text-white font-bold">
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5 mr-2" /> Book Free AI Demo</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src={robotLadyImage} alt="AI-Powered Voice Agent" width="600" height="800" className="rounded-2xl shadow-2xl transform scale-x-[-1]" loading="eager" fetchPriority="high" />
            </div>
          </div>
        </div>
      </section>

      {/* --- RESTORED PRICING PACKAGES --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Flexible Packages for Every Business</h2>
            <p className="text-xl text-gray-600">Transparent monthly pricing with custom AI training included.</p>
          </div>

          {/* 1. All-In-One Chat Widget */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <MessageSquare className="text-blue-600" /> All-In-One Chat Widget (6 Channels)
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Starter", price: "$297", convos: "500" },
                { name: "Professional", price: "$597", convos: "2,000", popular: true },
                { name: "Enterprise", price: "$1,497", convos: "Unlimited" }
              ].map((plan, i) => (
                <Card key={i} className={`border-2 flex flex-col ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : ''}`}>
                  <CardContent className="p-8 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-6">{plan.price}<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                    <ul className="space-y-3 mb-8 text-sm text-gray-600">
                      <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> {plan.convos} conversations/month</li>
                      <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> All 6 channels enabled</li>
                      <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> AI Training & Setup</li>
                    </ul>
                    <Button asChild className={`w-full mt-auto ${plan.popular ? 'btn-primary text-white' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                      <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 2. Voice AI Chat Widget */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Phone className="text-purple-600" /> Voice AI Chat Widget
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Basic", price: "$197", calls: "300" },
                { name: "Professional", price: "$397", calls: "1,000", popular: true },
                { name: "Enterprise", price: "$997", calls: "Unlimited" }
              ].map((plan, i) => (
                <Card key={i} className={`border-2 flex flex-col ${plan.popular ? 'border-purple-500 shadow-xl' : ''}`}>
                  <CardContent className="p-8 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-6">{plan.price}<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                    <ul className="space-y-3 mb-8 text-sm text-gray-600">
                      <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> {plan.calls} voice calls/month</li>
                      <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> AI Personality Tuning</li>
                      <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-600" /> Transcripts & Analytics</li>
                    </ul>
                    <Button asChild className="w-full mt-auto" variant="outline">
                      <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - ACCESSIBILITY FIX: Contrast White Text */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to Deploy Your Voice AI Agent?</h2>
          <p className="text-xl mb-8 text-white opacity-100 font-medium">
            Book a free 30-minute consultation and see how AI voice agents transform support.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-10 py-6 text-xl">
            <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Book Free Audit Now</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default VoiceAIPage;