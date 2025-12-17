import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Award,
  Sparkles,
  Zap,
  Brain,
  Rocket,
  Settings,
  Bot,
  Briefcase,
  TrendingUp,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import SEO from "../components/SEO";
import FAQSection from "../components/FAQSection";
import InternalLinkBlock from "../components/InternalLinkBlock";
import NewsletterForm from "../components/NewsletterForm";

import {
  companyData as rawCompanyData,
  heroImages as rawHeroImages,
  services as rawServices,
  caseStudies as rawCaseStudies,
  awards as rawAwards,
} from "../data/mock";

import robotLadyImage from "../assets/Devaland-robot-lady.jpeg";

/* ---------------- SAFE NORMALIZED DATA ---------------- */
const companyData = rawCompanyData ?? {};
const heroImages = rawHeroImages ?? {};
const services = Array.isArray(rawServices) ? rawServices : [];
const caseStudies = Array.isArray(rawCaseStudies) ? rawCaseStudies : [];
const awards = Array.isArray(rawAwards) ? rawAwards : [];

const HomePage = () => {
  return (
    <>
      <SEO
        title="Klaviyo & AI Automation Agency | Devaland"
        description="Increase revenue with Klaviyo email automation and AI Voice Agents."
        canonical="https://devaland.com"
      />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          {heroImages.primary && (
            <img
              src={heroImages.primary}
              alt="Automation background"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-blue-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
              Turn Automation Into Your #1 Revenue Channel
            </h1>
            <p className="text-gray-200 text-xl mb-8">
              Klaviyo email automation & AI Voice Agents that grow revenue
              without hiring more staff.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg">
                <a
                  href={companyData.calendly || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Free Revenue & Automation Audit
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link to="/voice-ai">See Live Voice AI Demo</Link>
              </Button>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Badge>Certified Klaviyo Partner</Badge>
              <Badge>50+ Clients</Badge>
              <Badge>ROI-Driven Automation</Badge>
            </div>
          </div>

          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold">
                    {companyData?.stats?.hoursAutomated ?? "—"}
                  </div>
                  <div className="opacity-80">Hours Automated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">
                    {companyData?.stats?.projectsDelivered ?? "—"}
                  </div>
                  <div className="opacity-80">Projects Delivered</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ================= AWARDS ================= */}
      {awards.length > 0 && (
        <section className="section-padding">
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
            {awards.map((award, i) => (
              <Card key={i}>
                <CardContent className="p-6 text-center">
                  <Award className="mx-auto mb-4" />
                  <h3 className="font-bold">{award.title}</h3>
                  <p>{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* ================= SERVICES ================= */}
      {services.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto px-6">
            {services.map((s) => (
              <Card key={s.id}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{s.title}</h3>
                  <p className="mb-4">{s.description}</p>

                  {Array.isArray(s.features) &&
                    s.features.map((f, i) => (
                      <div key={i} className="flex gap-2">
                        <CheckCircle size={16} /> {f}
                      </div>
                    ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* ================= CASE STUDIES ================= */}
      {caseStudies.length > 0 && (
        <section className="section-padding">
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
            {caseStudies.slice(0, 3).map((c) => (
              <Card key={c.id}>
                <CardContent className="p-6">
                  <h3 className="font-bold">{c.title}</h3>
                  <p>{c.description}</p>
                  <div className="mt-2 text-green-600">
                    <TrendingUp size={16} /> {c.result}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* ================= FAQ ================= */}
      <FAQSection faqs={[]} />

      {/* ================= NEWSLETTER ================= */}
      <section className="section-padding bg-blue-600 text-white text-center">
        <h2 className="text-3xl mb-4">Stay Updated</h2>
        <NewsletterForm />
      </section>
    </>
  );
};

export default HomePage;
