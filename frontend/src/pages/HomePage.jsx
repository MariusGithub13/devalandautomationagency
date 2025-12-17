import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Award,
  Sparkles,
  Zap,
  Brain,
  Mail,
  Rocket,
  Settings,
  Bot,
  Briefcase,
  TrendingUp,
  ExternalLink,
  Target,
  BarChart3,
  Users,
  Clock
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import InternalLinkBlock from '../components/InternalLinkBlock';

import {
  companyData,
  heroImages,
  services,
  caseStudies,
  awards
} from '../data/mock';

import robotLadyImage from '../assets/Devaland-robot-lady.jpeg';

const HomePage = () => {
  /* ===========================
     SAFETY GUARDS (CRITICAL)
     =========================== */
  const safeServices = Array.isArray(services) ? services : [];
  const safeAwards = Array.isArray(awards) ? awards : [];
  const safeCaseStudies = Array.isArray(caseStudies) ? caseStudies : [];

  const featuredCaseStudy = safeCaseStudies.length > 0 ? safeCaseStudies[0] : null;

  const serviceConfig = {
    1: { icon: Rocket, gradient: 'from-blue-500 to-blue-600' },
    2: { icon: Briefcase, gradient: 'from-green-500 to-green-600' },
    3: { icon: Settings, gradient: 'from-purple-500 to-purple-600' },
    4: { icon: Bot, gradient: 'from-orange-500 to-orange-600' }
  };

  return (
    <>
      <SEO
        title="#1 Klaviyo Agency + AI Voice Automation | Devaland"
        description="Klaviyo automation, AI voice agents, and revenue-focused automation for Shopify brands."
        canonical="https://devaland.com"
      />

      <div className="pt-16">

        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImages?.primary}
              alt="Automation Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-blue-900/80" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
                {companyData?.tagline}
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                {companyData?.description}
              </p>

              <div className="flex gap-4 flex-wrap">
                <Button asChild size="lg">
                  <a href={companyData?.calendly} target="_blank" rel="noreferrer">
                    Book Free Automation Audit <ArrowRight className="ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>

            <Card className="glass border-white/20 p-8">
              <h3 className="text-2xl text-white font-bold mb-6">Proven Results</h3>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl text-yellow-400 font-bold">
                    {companyData?.stats?.hoursAutomated}
                  </div>
                  <div className="text-white/80">Hours Automated</div>
                </div>
                <div>
                  <div className="text-3xl text-green-400 font-bold">
                    {companyData?.stats?.clientsSaved}
                  </div>
                  <div className="text-white/80">Client Savings</div>
                </div>
                <div>
                  <div className="text-3xl text-blue-400 font-bold">
                    {companyData?.stats?.projectsDelivered}
                  </div>
                  <div className="text-white/80">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl text-orange-400 font-bold">
                    {companyData?.stats?.yearsExperience}
                  </div>
                  <div className="text-white/80">Years Experience</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* ================= AWARDS ================= */}
        <section className="section-padding bg-gradient-primary text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {safeAwards.map((award, index) => (
              <Card key={index} className="glass border-white/20 text-center p-6">
                <Award className="mx-auto mb-4 text-yellow-400" size={48} />
                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                <p className="text-white/80 mb-4">{award.description}</p>
                <a href={award.url} target="_blank" rel="noreferrer" className="text-yellow-400 inline-flex items-center">
                  View <ExternalLink size={14} className="ml-1" />
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safeServices.map(service => {
              const cfg = serviceConfig[service.id] || {};
              const Icon = cfg.icon || Target;

              return (
                <Card key={service.id} className="hover-lift p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${cfg.gradient}`}>
                    <Icon className="text-white mx-auto mt-4" />
                  </div>
                  <h3 className="font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ================= CASE STUDY ================= */}
        {featuredCaseStudy && (
          <section className="section-padding bg-gradient-subtle">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  {featuredCaseStudy.results.timeReduction} Time Reduction
                </h2>
                <p className="text-gray-600 mb-6">
                  {featuredCaseStudy.challenge}
                </p>
                <blockquote className="border-l-4 border-blue-600 pl-6 italic">
                  "{featuredCaseStudy.testimonial}"
                </blockquote>
              </div>
              <img
                src={heroImages?.transformation}
                alt="Case Study"
                className="rounded-xl shadow-xl"
              />
            </div>
          </section>
        )}

        {/* ================= FAQ ================= */}
        <FAQSection title="Frequently Asked Questions" faqs={[]} />

        {/* ================= FINAL CTA ================= */}
        <section className="section-padding bg-gray-900 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Automate Your Growth?
          </h2>
          <Button asChild size="lg">
            <a href={companyData?.calendly} target="_blank" rel="noreferrer">
              Book Free Consultation <ArrowRight className="ml-2" />
            </a>
          </Button>
        </section>

      </div>
    </>
  );
};

export default HomePage;
