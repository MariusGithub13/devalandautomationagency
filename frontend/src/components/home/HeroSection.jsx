import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

function safeTrack(eventName, payload = {}) {
  try {
    // GA4 gtag
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
      return;
    }
    // GTM dataLayer
    if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...payload });
      return;
    }
    // Fallback: do nothing (safe)
  } catch (e) {
    // swallow
  }
}

function getQueryParam(name) {
  if (typeof window === "undefined") return null;
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

const STORAGE_KEY = "devaland_hero_variant_v1";

const HeroSection = ({ companyData, heroImages }) => {
  if (!heroImages?.primary) return null;

  const stats = companyData?.stats || {};
  const hoursAutomated = stats?.hoursAutomated || "50,000+";
  const clientsSaved = stats?.clientsSaved || "$5M+";
  const projectsDelivered = stats?.projectsDelivered || "200+";
  const yearsExperience = stats?.yearsExperience || "5+";

  // A/B/C headline variants (C = higher-risk, higher-reward)
  const variants = useMemo(
    () => ({
      A: {
        id: "A",
        h1: (
          <>
            Turn Automation Into Your{" "}
            <span className="text-blue-400">#1 Revenue Channel</span>
          </>
        ),
        eyebrow: "Certified Klaviyo Partner",
      },
      B: {
        id: "B",
        h1: (
          <>
            Scale Revenue Without Hiring More People Using{" "}
            <span className="text-blue-400">Automation</span>
          </>
        ),
        eyebrow: "ROI-Driven Automation",
      },
      C: {
        id: "C",
        h1: (
          <>
            Replace Busywork With{" "}
            <span className="text-blue-400">Revenue Systems</span> — In 30 Days
          </>
        ),
        eyebrow: "Built for Tier-1 Markets",
      },
    }),
    []
  );

  const [variantKey, setVariantKey] = useState("A");

  useEffect(() => {
    // 1) allow forcing variant via URL: ?hero_variant=A|B|C
    const forced = (getQueryParam("hero_variant") || "").toUpperCase();
    if (forced && variants[forced]) {
      setVariantKey(forced);
      try {
        localStorage.setItem(STORAGE_KEY, forced);
      } catch (e) {}
      safeTrack("hero_variant_assigned", { hero_variant: forced, source: "query" });
      return;
    }

    // 2) persist via localStorage
    let saved = null;
    try {
      saved = (localStorage.getItem(STORAGE_KEY) || "").toUpperCase();
    } catch (e) {}

    if (saved && variants[saved]) {
      setVariantKey(saved);
      safeTrack("hero_variant_assigned", { hero_variant: saved, source: "storage" });
      return;
    }

    // 3) random assignment (stable once stored)
    const keys = Object.keys(variants); // ["A","B","C"]
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setVariantKey(randomKey);
    try {
      localStorage.setItem(STORAGE_KEY, randomKey);
    } catch (e) {}
    safeTrack("hero_variant_assigned", { hero_variant: randomKey, source: "random" });
  }, [variants]);

  const active = variants[variantKey] || variants.A;

  const onPrimaryClick = () => {
    safeTrack("hero_cta_click", {
      hero_variant: active.id,
      cta: "primary",
      label: "Book a Free Revenue & Automation Audit",
    });
  };

  const onSecondaryClick = () => {
    safeTrack("hero_cta_click", {
      hero_variant: active.id,
      cta: "secondary",
      label: "See Live Voice AI Demo",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages.primary}
          srcSet={heroImages.primarySrcSet}
          sizes="100vw"
          alt="Marketing Automation & AI Voice Agents"
          width={1200}
          height={600}
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchpriority="high"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-blue-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">{active.eyebrow}</Badge>
              <Badge variant="secondary">50+ Clients</Badge>
              <Badge variant="secondary">ROI-Driven Automation</Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {active.h1}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              We help Shopify brands and service businesses increase revenue and cut
              costs using Klaviyo email automation and AI-powered Voice Agents — without
              hiring more staff.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="px-8 py-6 text-base">
                <a
                  href={companyData?.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onPrimaryClick}
                >
                  Book a Free Revenue &amp; Automation Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base text-white border-white/50 hover:bg-white/10"
              >
                <a href="/voice-ai" onClick={onSecondaryClick}>
                  See Live Voice AI Demo (24/7)
                </a>
              </Button>
            </div>

            {/* Proof Points */}
            <div className="text-white/80 text-sm md:text-base mb-4">
              Trusted by Shopify &amp; service businesses across the US, UK, Canada &amp; EU
            </div>

            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-white/90 text-sm md:text-base">
              <li>• 45–85% Revenue Growth</li>
              <li>• 50,000+ Hours Automated</li>
              <li>• Proven with 50+ Shopify &amp; DTC Clients</li>
            </ul>
          </div>

          {/* Right “Graphic” (Results Card) */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-2xl p-8">
                <div className="text-white text-2xl font-bold mb-6">
                  Proven Results
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-3xl font-extrabold text-white">
                      {hoursAutomated}
                    </div>
                    <div className="text-white/70 mt-1">Hours Automated</div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-3xl font-extrabold text-white">
                      {projectsDelivered}
                    </div>
                    <div className="text-white/70 mt-1">Projects Delivered</div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-3xl font-extrabold text-white">
                      {clientsSaved}
                    </div>
                    <div className="text-white/70 mt-1">Client Savings</div>
                  </div>

                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <div className="text-3xl font-extrabold text-white">
                      {yearsExperience}
                    </div>
                    <div className="text-white/70 mt-1">Years Experience</div>
                  </div>
                </div>

                <div className="mt-6 text-white/70 text-sm">
                  Want the full breakdown? Book the audit and we’ll show exactly where revenue is leaking.
                </div>
              </div>

              {/* subtle glow */}
              <div
                className="absolute -inset-6 -z-10 blur-3xl opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(59,130,246,.8), transparent 55%), radial-gradient(circle at 70% 70%, rgba(16,185,129,.7), transparent 55%)",
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
