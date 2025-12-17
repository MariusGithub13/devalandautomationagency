import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const HeroSection = ({ companyData, heroImages }) => {
  if (!heroImages?.primary) return null;

  // ---------- Headline A/B Test (copy only) ----------
  const headlineVariant =
    typeof window !== "undefined"
      ? localStorage.getItem("hero_headline_variant") ||
        (() => {
          const v = Math.random() < 0.5 ? "A" : "B";
          localStorage.setItem("hero_headline_variant", v);
          return v;
        })()
      : "A";

  // Track headline view once per session
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "hero_headline_view",
      variant: headlineVariant,
    });
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages.primary}
          srcSet={heroImages.primarySrcSet}
          sizes="(max-width: 768px) 100vw, 1200px"
          alt="Marketing Automation & AI Voice Agents"
          width={1200}
          height={600}
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-blue-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">Certified Klaviyo Partner</Badge>
            <Badge variant="secondary">50+ Clients</Badge>
            <Badge variant="secondary">ROI-Driven Automation</Badge>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            {headlineVariant === "A" ? (
              <>
                Turn Automation Into Your{" "}
                <span className="text-blue-400">#1 Revenue Channel</span>
              </>
            ) : (
              <>
                Scale Revenue Without Hiring More People Using{" "}
                <span className="text-blue-400">Automation</span>
              </>
            )}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            We help Shopify brands and service businesses increase revenue and cut
            costs using Klaviyo email automation and AI-powered Voice Agents —
            without hiring more staff.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asChild size="lg" className="px-8 py-6 text-base">
              <a
                href={companyData?.calendly}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (window.dataLayer) {
                    window.dataLayer.push({
                      event: "hero_primary_cta_click",
                      cta_text: "Book Free Revenue & Automation Audit",
                      variant: headlineVariant,
                      location: "hero",
                    });
                  }
                }}
              >
                Book a Free Revenue & Automation Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base text-white border-white/50 hover:bg-white/10"
            >
              <a
                href="/voice-ai"
                onClick={() => {
                  if (window.dataLayer) {
                    window.dataLayer.push({
                      event: "hero_secondary_cta_click",
                      cta_text: "See Live Voice AI Demo",
                      variant: headlineVariant,
                      location: "hero",
                    });
                  }
                }}
              >
                See Live Voice AI Demo
              </a>
            </Button>
          </div>

          {/* Micro-trust line */}
          <p className="text-white/70 text-sm mb-6">
            Trusted by Shopify & service businesses across the US, UK, Canada &
            EU
          </p>

          {/* Proof Points */}
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-white/90 text-sm md:text-base">
            <li>• 45–85% Revenue Growth</li>
            <li>• 50,000+ Hours Automated</li>
            <li>• Proven with 50+ Shopify & DTC Clients</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
