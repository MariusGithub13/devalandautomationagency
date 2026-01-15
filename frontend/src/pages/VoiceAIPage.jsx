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
        <title>Voice AI Agents & Chatbots | 24/7 Support | Devaland</title>
        <meta name="description" content="Deploy intelligent Voice AI agents for phone calls and website chatbots. 80% query resolution." />
        <link rel="canonical" href="https://devaland.com/voice-ai" />
      </Helmet>

      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Voice AI', href: '/voice-ai' }]} />
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-bold mb-6">
                <Zap className="w-4 h-4" /> 24/7 AI-Powered Support
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">All-In-One Chat Widget + <span className="text-blue-600">Voice AI Agents</span></h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">Unified widget for Live Chat, Voice AI, FB & Instagram. 24/7 automation with human handoff.</p>
              <div className="flex gap-4 mb-8">
                <Button asChild size="lg" className="btn-primary text-white font-bold"><a href={companyData.calendly}><Phone className="mr-2"/> Book AI Demo</a></Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t">
                <div><div className="text-3xl font-bold">80%</div><div className="text-xs text-gray-500 uppercase">Resolution</div></div>
                <div><div className="text-3xl font-bold">24/7</div><div className="text-xs text-gray-500 uppercase">Availability</div></div>
                <div><div className="text-3xl font-bold">50%</div><div className="text-xs text-gray-500 uppercase">Cost Savings</div></div>
              </div>
            </div>
            <div className="relative">
              <img src={robotLadyImage} alt="AI Voice Agent" width="600" height="800" className="rounded-2xl shadow-2xl transform scale-x-[-1]" loading="eager" fetchPriority="high" />
            </div>
          </div>
        </div>
      </section>

      {/* Live Demos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">Experience Our Voice AI in Action</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold mb-4">Meet Luna - Multilingual Agent</h3>
              <p className="text-gray-600 mb-6">Speak with our AI in Italian, English, or Spanish.</p>
              <div className="p-6 bg-blue-50 rounded-xl text-center"><a href="tel:+15597174103" className="text-3xl font-bold text-blue-600">+1 (559) 717-4103</a></div>
            </Card>
            <Card className="p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold mb-4">Meet Amy - E-commerce Assistant</h3>
              <p className="text-gray-600 mb-6">Live on Shea Terra Organics since 2024.</p>
              <Button asChild className="w-full bg-purple-600 text-white font-bold"><a href="https://www.sheaterraorganics.com/">Visit Live Site</a></Button>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Calculate Your Potential Savings</h2>
          <ROICalculator />
        </div>
      </section>

      {/* FULL PRICING GRID RESTORATION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-bold mb-16">Flexible Packages for Every Business</h2>
          
          {/* All-In-One Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8">All-In-One Chat Widget (Full Stack)</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Starter", price: "$297", details: "500 convos/mo" },
                { name: "Professional", price: "$597", details: "2,000 convos/mo", popular: true },
                { name: "Enterprise", price: "$1,497", details: "Unlimited convos" }
              ].map((plan, i) => (
                <Card key={i} className={`p-8 border-2 flex flex-col ${plan.popular ? 'border-blue-500 shadow-2xl scale-105' : ''}`}>
                  <h4 className="text-xl font-bold mb-4">{plan.name}</h4>
                  <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm text-gray-500">/mo</span></div>
                  <ul className="mb-8 space-y-2 text-sm text-gray-600">
                    <li><CheckCircle className="inline mr-2 w-4 text-green-500"/> {plan.details}</li>
                    <li><CheckCircle className="inline mr-2 w-4 text-green-500"/> All 6 Channels Enabled</li>
                    <li><CheckCircle className="inline mr-2 w-4 text-green-500"/> Custom AI Training</li>
                  </ul>
                  <Button asChild className="mt-auto bg-blue-600 text-white font-bold"><a href={companyData.calendly}>Get Started</a></Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Voice AI Only Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Voice AI Only (Phone Support)</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Basic", price: "$197", details: "300 calls/mo" },
                { name: "Professional", price: "$397", details: "1,000 calls/mo", popular: true },
                { name: "Enterprise", price: "$997", details: "Unlimited calls" }
              ].map((plan, i) => (
                <Card key={i} className="p-8 border-2 flex flex-col">
                  <h4 className="text-xl font-bold mb-4">{plan.name}</h4>
                  <div className="text-4xl font-bold mb-6">{plan.price}<span className="text-sm text-gray-500">/mo</span></div>
                  <ul className="mb-8 space-y-2 text-sm text-gray-600">
                    <li><CheckCircle className="inline mr-2 w-4 text-purple-500"/> {plan.details}</li>
                    <li><CheckCircle className="inline mr-2 w-4 text-purple-500"/> Multi-language Agent</li>
                    <li><CheckCircle className="inline mr-2 w-4 text-purple-500"/> Call Transcripts</li>
                  </ul>
                  <Button asChild variant="outline" className="mt-auto"><a href={companyData.calendly}>Get Started</a></Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Ready to Deploy Your AI Agent?</h2>
          <p className="text-xl mb-8 font-medium opacity-100 text-white">Book a free audit and transform your customer experience.</p>
          <Button asChild size="lg" className="bg-white text-blue-600 font-bold px-10 py-6 text-xl"><a href={companyData.calendly}>Book Free Audit Now</a></Button>
        </div>
      </section>
    </>
  );
};

export default VoiceAIPage;