import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageSquare, CheckCircle, Zap, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import Breadcrumb from '../components/Breadcrumb';
import NewsletterForm from '../components/NewsletterForm';
import { companyData } from '../data/mock';
import ROICalculator from '../components/ROICalculator';
import robotLadyImage from '../assets/Devaland-robot-lady.webp';

const VoiceAIPage = () => {
  return (
    <>
      <Helmet>
        <title>Voice AI Agents & Chatbots | 24/7 Support Automation | Devaland</title>
        <meta name="description" content="Deploy intelligent Voice AI agents for phone calls and website chatbots. 80% query resolution and 50% cost reduction. Book your free audit." />
        <link rel="canonical" href="https://devaland.com/voice-ai" />
      </Helmet>

      {/* GLOBAL CSS OVERRIDE: Forced visibility for forced white-text themes */}
      <style dangerouslySetInnerHTML={{ __html: `
        .roadmap-card h3 { color: #111827 !important; }
      `}} />

      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Voice AI', href: '/voice-ai' }]} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-bold mb-6">
              <Zap className="w-4 h-4" /> 24/7 AI-Powered Support
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              All-In-One Chat Widget + <span className="text-blue-600">Voice AI Agents</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Unified widget for Live Chat, Voice AI, FB & Instagram. 24/7 automation with seamless human handoff when needed.
            </p>
            <div className="flex gap-4 mb-8">
              <Button asChild size="lg" className="btn-primary text-white font-bold">
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5"/> Book Free AI Demo
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div><div className="text-3xl font-bold text-gray-900">80%</div><div className="text-xs text-gray-500 uppercase font-bold">Resolution</div></div>
              <div><div className="text-3xl font-bold text-gray-900">24/7</div><div className="text-xs text-gray-500 uppercase font-bold">Availability</div></div>
              <div><div className="text-3xl font-bold text-gray-900">50%</div><div className="text-xs text-gray-500 uppercase font-bold">Cost Savings</div></div>
            </div>
          </div>
          <div className="relative animate-fade-in-up delay-300">
            <img src={robotLadyImage} alt="AI-Powered Voice Agent Assistant" width="600" height="800" className="rounded-2xl shadow-2xl transform scale-x-[-1]" loading="eager" fetchPriority="high" />
          </div>
        </div>
      </section>

      {/* Live Demos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl lg:text-4xl font-bold text-gray-900 mb-12">Experience Our Voice AI in Action</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover-lift border-2 border-blue-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Luna - Multilingual Agent</h3>
              <p className="text-gray-600 mb-6 font-medium">Speak with our Voice AI in Italian, English, or Spanish. Tap to call right now.</p>
              <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100 mb-4">
                <a href="tel:+15597174103" className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors">+1 (559) 717-4103</a>
              </div>
            </Card>
            <Card className="hover-lift border-2 border-purple-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Amy - E-commerce Assistant</h3>
              <p className="text-gray-600 mb-6 font-medium">Live and operational on Shea Terra Organics since 2024. Handling real customer orders.</p>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold h-14">
                <a href="https://www.sheaterraorganics.com/" target="_blank" rel="noopener noreferrer">Visit Live Site <ExternalLink className="ml-2 w-4 h-4"/></a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET: ROADMAP DOWNLOAD */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-700 to-indigo-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center text-left">
            <div>
              <Badge className="bg-green-500 text-white mb-4 hover:bg-green-600 text-sm font-bold">FREE DOWNLOAD</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                The 2026 Voice AI Implementation Roadmap
              </h2>
              <p className="text-blue-100 mb-6 text-lg font-medium opacity-100">
                Don't guess your way into automation. Download our 15-point checklist to reduce support costs by 50%.
              </p>
              <ul className="space-y-3 mb-4">
                {['Knowledge Base Blueprint', 'Tech Stack Checklist', 'ROI Analysis Template'].map((item, i) => (
                  <li key={i} className="flex items-center text-white font-bold">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* WHITE CARD: Title visibility and Duplicate Footer fixed */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl roadmap-card">
              <h3 className="text-gray-900 font-bold text-xl mb-6 text-center">Get Instant Access</h3>
              <NewsletterForm />
              {/* Manual paragraph removed: duplicated text solved */}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="roi-calculator" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Calculate Your Potential Savings</h2>
          <ROICalculator />
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-bold text-gray-900 mb-16">Flexible Packages for Every Business</h2>
          
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <MessageSquare className="text-blue-600" /> All-In-One Chat Widget (6 Channels)
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Starter", price: "$297", details: "500 convos/mo" },
                { name: "Professional", price: "$597", details: "2,000 convos/mo", popular: true },
                { name: "Enterprise", price: "$1,497", details: "Unlimited convos" }
              ].map((plan, i) => (
                <Card key={i} className={`p-8 border-2 flex flex-col bg-white ${plan.popular ? 'border-blue-500 shadow-2xl scale-105 z-10' : ''}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-6">{plan.price}<span className="text-sm text-gray-500 font-normal">/mo</span></div>
                  <ul className="mb-8 space-y-3 text-sm text-gray-600">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0"/> {plan.details}</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0"/> 24/7 AI Automation</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0"/> All 6 Channels Active</li>
                  </ul>
                  <Button asChild className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-bold h-12">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Phone className="text-purple-600" /> Voice AI Only (Phone Support)
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Basic", price: "$197", details: "300 calls/mo" },
                { name: "Professional", price: "$397", details: "1,000 calls/mo", popular: true },
                { name: "Enterprise", price: "$997", details: "Unlimited calls" }
              ].map((plan, i) => (
                <Card key={i} className={`p-8 border-2 flex flex-col bg-white ${plan.popular ? 'border-purple-500 shadow-xl' : ''}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-gray-900 mb-6">{plan.price}<span className="text-sm text-gray-500 font-normal">/mo</span></div>
                  <ul className="mb-8 space-y-3 text-sm text-gray-600">
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0"/> {plan.details}</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0"/> Custom AI Training</li>
                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0"/> Call Transcripts</li>
                  </ul>
                  <Button asChild variant="outline" className="mt-auto border-purple-200 hover:bg-purple-50 text-purple-700 font-bold h-12">
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Get Started</a>
                  </Button>
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
          <p className="text-xl mb-8 font-medium text-white opacity-100">
            Book a free audit and transform your customer experience with Devaland automation.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-10 py-6 text-xl shadow-2xl">
            <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Book Free Audit Now</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default VoiceAIPage;