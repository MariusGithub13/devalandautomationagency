import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Award,
  Sparkles,
  Zap,
  Brain,
  Bot,
  Briefcase,
  TrendingUp,
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
  awards,
} from '../data/mock';

import robotLadyImage from '../assets/Devaland-robot-lady.jpeg';

/* =========================
   HARD SAFETY GUARDS
   ========================= */
const SAFE_SERVICES = Array.isArray(services) ? services : [];
const SAFE_CASE_STUDIES = Array.isArray(caseStudies) ? caseStudies : [];
const SAFE_AWARDS = Array.isArray(awards) ? awards : [];
const SAFE_HERO_IMAGES = Array.isArray(heroImages) ? heroImages : [];

const HomePage = () => {
  return (
    <>
      <SEO
        title="Klaviyo & AI Automation Agency | Devaland"
        description="We help Shopify brands and service businesses grow revenue with Klaviyo email automation and AI-powered Voice Agents."
      />

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Turn Automation Into Your #1 Revenue Channel
            </h1>

            <p className="text-lg text-blue-100 mb-8 max-w-xl">
              Klaviyo email automation & AI Voice Agents that grow revenue
              without hiring more staff.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg">
                Book a Free Revenue & Automation Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button variant="outline" size="lg">
                See Live Voice AI Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary">Certified Klaviyo Partner</Badge>
              <Badge variant="secondary">50+ Clients</Badge>
              <Badge variant="secondary">ROI-Driven Automation</Badge>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Proven Results</h3>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-3xl font-bold">50,000+</p>
                    <p className="text-sm text-blue-100">Hours Automated</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">200+</p>
                    <p className="text-sm text-blue-100">Projects Delivered</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= TRUST / AWARDS ================= */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
          {SAFE_AWARDS.map((award, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <Award className="mx-auto mb-4" />
                <h4 className="font-semibold">{award.title}</h4>
                <p className="text-sm text-slate-600">{award.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Automation Services That Scale Revenue
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {SAFE_SERVICES.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Case Studies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {SAFE_CASE_STUDIES.map((cs, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{cs.title}</h4>
                  <p className="text-sm text-slate-600">{cs.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <Suspense fallback={null}>
        <FAQSection />
      </Suspense>

      {/* ================= INTERNAL LINKS ================= */}
      <InternalLinkBlock />
    </>
  );
};

export default HomePage;
