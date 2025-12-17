import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const CTA_COLOR_KEY = "devaland_cta_color_v1";

const HeroSection = ({ companyData, heroImages }) => {
  if (!heroImages?.primary) return null;

  /* ============================
     CTA COLOR A/B TEST
  ============================ */
  const [ctaColor, setCtaColor] = useState("dark");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CTA_COLOR_KEY);
      if (stored === "dark" || stored === "accent") {
        setCtaColor(stored);
      } else {
        const v = Math.random() < 0.5 ? "dark" : "accent";
        localStorage.setItem(CTA_COLOR_KEY, v);
        setCtaColor(v);
      }
    } catch {
      // fallback to dark
    }
  }, []);

  const primaryCtaClass =
    ctaColor === "accent"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-black hover:bg-black/90 text-white";

  /* ============================
     SCROLL MICRO-ANIMATION
  ============================ */
  const ctaRef = useRef(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    if (!ctaRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  /* ============================
     INLINE CALENDLY MODAL
  ============================ */
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    if (!showCalendly) return;

    // Lazy-load Calendly script only when modal opens
    if (!document.getElementById("calendly-script")) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.id = "calendly-script";
      document.body.appendChild(script);
    }

    // Track open
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "calendly_modal_open",
        cta_color: ctaColor,
        location: "hero",
      });
    }
  }, [showCalendly, ctaColor]);

  return (
    <>
      {/* HERO */}
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
          <div className="max-w-3xl">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Certified Klaviyo Partner</Badge>
              <Badge variant="secondary">50+ Clients</Badge>
              <Badge variant="secondary">ROI-Driven Automation</Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Scale Revenue Without Hiring More People Using{" "}
              <span className="text-blue-400">Automation</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              We help Shopify brands and service businesses increase revenue and
              cut costs using Klaviyo email automation and AI-powered Voice
              Agents — without adding headcount.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className={`flex flex-col sm:flex-row gap-4 mb-4 w-full transition-all duration-700 ease-out ${
                ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {/* PRIMARY CTA (opens modal) */}
              <Button
                size="lg"
                className={`px-8 py-6 text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all ${primaryCtaClass}`}
                onClick={() => setShowCalendly(true)}
              >
                Get a Free Revenue &amp; Automation Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              {/* SECONDARY CTA (desktop only) */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hidden sm:flex px-8 py-6 text-base text-white border-white/50 hover:bg-white/10 w-full sm:w-auto"
              >
                <a href="/voice-ai">See Live Voice AI Demo (24/7)</a>
              </Button>
            </div>

            {/* Micro risk reducer */}
            <p className="text-sm text-white/70 mb-6">
              No obligation • Free strategy call • Takes 15 minutes
            </p>

            {/* Proof Points */}
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-white/90 text-sm md:text-base">
              <li>• 45–85% Revenue Growth</li>
              <li>• 50,000+ Hours Automated</li>
              <li>• Proven with 50+ Shopify &amp; DTC Clients</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CALENDLY MODAL */}
      {showCalendly && (
        <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              aria-label="Close Calendly"
            >
              <X size={24} />
            </button>

            <div
              className="calendly-inline-widget"
              data-url={companyData?.calendly}
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
