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
  ExternalLink,
  Target,
  Users,
  Clock,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import SEO from "../components/SEO";
import FAQSection from "../components/FAQSection";
import InternalLinkBlock from "../components/InternalLinkBlock";
import NewsletterForm from "../components/NewsletterForm";

import {
  companyData,
  heroImages,
  services,
  caseStudies,
  awards,
} from "../data/mock";

import robotLadyImage from "../assets/Devaland-robot-lady.jpeg";

const HomePage = () => {
  const serviceConfig = {
    1: { icon: Rocket, gradient: "from-blue-500 to-blue-600" },
    2: { icon: Briefcase, gradient: "from-green-500 to-green-600" },
    3: { icon: Settings, gradient: "from-purple-500 to-purple-600" },
    4: { icon: Bot, gradient: "from-orange-500 to-orange-600" },
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Devaland Marketing S.R.L.",
    alternateName: "Devaland",
    url: "https://devaland.com",
    logo: "https://devaland.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/devaland/",
      "https://www.instagram.com/devaland/",
      "https://www.facebook.com/devaland/",
    ],
  };

  return (
    <>
      <SEO
        title="Klaviyo & AI Automation Agency | Devaland"
        description="Increase revenue with Klaviyo email automation and AI Voice Agents. Trusted by 50+ Shopify & DTC brands."
        canonical="https://devaland.com"
        schema={homeSchema}
      />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages?.primary}
            alt="Automation background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-blue-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
              Turn Automation Into Your #1 Revenue Channel
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              We help Shopify brands and service businesses increase revenue and
              cut costs using Klaviyo email automation and AI-powered Voice
              Agents — without hiring more staff.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="btn-accent text-white">
                <a
                  href={companyData?.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Free Revenue & Automation Audit
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>

              <Button asChild size="lg" variant="outline" className="text-white">
                <Link to="/voice-ai">See Live Voice AI Demo (24/7)</Link>
              </Button>
            </div>

            <ul className="flex flex-col sm:flex-row gap-4 text-white/90 mb-6">
              <li>• 45–85% Revenue Growth</li>
              <li>• 50,000+ Hours Automated</li>
              <li>• 50+ Shopify & DTC Clients</li>
            </ul>

            <div className="flex gap-3 flex-wrap">
              <Badge>Certified Klaviyo Partner</Badge>
              <Badge>ROI-Driven Automation</Badge>
              <Badge>Featured in New York Weekly</Badge>
            </div>
          </div>

          <Card className="glass border-white/20 p-8">
            <CardContent>
              <h3 className="text-2xl font-bold text-white mb-6">
                Proven Results
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">
                    {companyData?.stats?.hoursAutomated ?? "—"}
                  </div>
                  <div className="opacity-80">Hours Automated</div>
                </div>
                <div className="text-center text-white">
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
      {Array.isArray(awards) && awards.length > 0 && (
        <section className="section-padding bg-gradient-primary text-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {awards.map((award, i) => (
              <Card key={i} className="glass border-white/20">
                <CardContent className="text-center p-6">
                  <Award className="mx-auto mb-4 text-yellow-400" size={40} />
                  <h3 className="font-bold mb-2">{award.title}</h3>
                  <p className="opacity-80 mb-4">{award.description}</p>
                  {award.url && (
                    <a
                      href={award.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      View Recognition
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* ================= SERVICES ================= */}
      {Array.isArray(services) && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = serviceConfig[service.id]?.icon || Settings;

              return (
                <Card key={service.id}>
                  <CardContent className="p-8">
                    <Icon className="mb-4" />
                    <h3 className="text-xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="mb-4">{service.description}</p>

                    {Array.isArray(service.features) &&
                      service.features.map((f, idx) => (
                        <div key={idx} className="flex gap-2">
                          <CheckCircle size={16} />
                          <span>{f}</span>
                        </div>
                      ))}

                    <Button asChild variant="outline" className="mt-4">
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      {/* ================= CASE STUDIES ================= */}
      {Array.isArray(caseStudies) && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((cs) => (
              <Card key={cs.id}>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{cs.title}</h3>
                  <p className="mb-4">{cs.description}</p>
                  <div className="flex gap-2 items-center text-green-600">
                    <TrendingUp size={16} /> {cs.result}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* ================= FAQ ================= */}
      <FAQSection />

      {/* ================= NEWSLETTER ================= */}
      <section className="section-padding bg-blue-600 text-white text-center">
        <h2 className="text-3xl mb-4">Stay Updated</h2>
        <NewsletterForm />
      </section>
    </>
  );
};

export default HomePage;
