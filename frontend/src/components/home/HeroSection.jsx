import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

const HEADLINE_VARIANTS = {
  A: "Turn Automation Into Your #1 Revenue Channel",
  B: "Scale Revenue Without Hiring More People",
  C: "Your Business Should Run Itself. Almost.",
};

const CTA_COLORS = {
  A: "bg-blue-600 hover:bg-blue-700",
  B: "bg-indigo-600 hover:bg-indigo-700",
};

const HeroSection = ({ companyData, heroImages }) => {
  if (!heroImages?.primary) return null;

  const [headlineVariant, setHeadlineVariant] = useState("A");
  const [ctaVariant, setCtaVariant] = useState("A");
  const [showCalendly, setShowCalendly] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(false);

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // A/B headline
  useEffect(() => {
    const stored = localStorage.getItem("heroHeadline");
    if (stored && HEADLINE_VARIANTS[stored]) {
      setHeadlineVariant(stored);
    } else {
      const pick = ["A", "B", "C"][Math.floor(Math.random() * 3)];
      localStorage.setItem("heroHeadline", pick);
      setHeadlineVariant(pick);
    }
  }, []);

  // CTA color test
  useEffect(() => {
    const stored = localStorage.getItem("heroCTA");
    if (stored && CTA_COLORS[stored]) {
      setCtaVariant(stored);
    } else {
      const pick = Math.random() < 0.5 ? "A" : "B";
      localStorage.setItem("heroCTA", pick);
      setCtaVariant(pick);
    }
  }, []);

  // Scroll micro-animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    const el = document.getElementById("hero");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Close Calendly with ESC
  useEffect(() => {
    if (!showCalendly) return;
    const esc = (e) => e.key === "Escape" && setShowCalendly(false);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [showCalendly]);

  const heroSrc = useMemo(() => {
    return isMobile ? heroImages.mobile : heroImages.primary;
  }, [isMobile, heroImages]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSrc}
          srcSet={heroImages.primarySrcSet}
          sizes="(max-width: 360px) 100vw, (max-width: 768px) 90vw, 1200px"
          alt="Marketing Automation & AI Voice Agents"
          width="1200"
          height="600"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-blue-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Certified Klaviyo Partner</Badge>
              <Badge variant="secondary">50+ Clients</Badge>
              <Badge variant="secondary">Used by Shopify brands doing $1M–$50M/year</Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {HEADLINE_VARIANTS[headlineVariant]}
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              We help Shopify brands and service businesses increase revenue and
              cut costs using Klaviyo automation and AI Voice Agents — without
              hiring more staff.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button
                size="lg"
                className={`px-8 py-6 text-base text-white ${CTA_COLORS[ctaVariant]}`}
                onClick={() => setShowCalendly(true)}
              >
                Book a Free Revenue Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              {!isMobile && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base text-white border-white/50 hover:bg-white/10"
                >
                  <a href="/voice-ai">See Live Voice AI Demo</a>
                </Button>
              )}
            </div>

            <p className="text-sm text-white/70">No obligation • Free strategy call</p>
          </div>

          {/* Right visual */}
          <div className="hidden lg:block">
            <Card className="glass border-white/20 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Automation Impact</h3>
              <ul className="space-y-2 text-white/90">
                <li>• 45–85% Revenue Growth</li>
                <li>• 50,000+ Hours Automated</li>
                <li>• AI Voice Agents 24/7</li>
                <li>• Klaviyo Email & SMS</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setShowCalendly(false)}
        >
          <div
            className="relative bg-white w-full max-w-3xl h-[80vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-3 right-3 z-10 text-black text-xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              src={companyData.calendly}
              title="Calendly"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
