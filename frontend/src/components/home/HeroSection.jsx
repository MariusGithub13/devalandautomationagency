import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

// ---------- helpers ----------
const isMobileViewport = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia
    ? window.matchMedia("(max-width: 768px)").matches
    : window.innerWidth <= 768;
};

const safePushDataLayer = (eventName, payload = {}) => {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...payload,
    });
  } catch {
    // no-op
  }
};

const HeroSection = ({ companyData, heroImages }) => {
  if (!heroImages?.primary) return null;

  // ---------- A/B headline logic (locked / deterministic) ----------
  // If you already lock a winning variant elsewhere, keep it stable here:
  const headlineVariant = useMemo(() => {
    try {
      const key = "hero_headline_variant";
      const existing = localStorage.getItem(key);
      if (existing) return existing;

      // Lock winner here (change as needed): "C"
      const winner = "C";
      localStorage.setItem(key, winner);
      return winner;
    } catch {
      return "C";
    }
  }, []);

  const headlineText = useMemo(() => {
    // Variant C (higher-risk, higher-reward) — adjust copy here if needed
    switch (headlineVariant) {
      case "A":
        return "Turn Automation Into Your #1 Revenue Channel";
      case "B":
        return "Scale Revenue With Klaviyo + AI Voice Agents";
      case "C":
      default:
        return "Stop Losing Leads After Hours — Let AI Convert Them";
    }
  }, [headlineVariant]);

  const subheadlineText = useMemo(() => {
    return "We help Shopify brands and service businesses increase revenue and cut costs using Klaviyo email automation and AI-powered Voice Agents — without hiring more staff.";
  }, []);

  // ---------- CTA color A/B test (kept simple) ----------
  const ctaColorVariant = useMemo(() => {
    try {
      const key = "hero_cta_color_variant";
      const existing = localStorage.getItem(key);
      if (existing) return existing;

      // 50/50
      const v = Math.random() < 0.5 ? "A" : "B";
      localStorage.setItem(key, v);
      return v;
    } catch {
      return "A";
    }
  }, []);

  const primaryCtaClass =
    ctaColorVariant === "B"
      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
      : "bg-blue-600 hover:bg-blue-700 text-white";

  // ---------- Scroll micro-animation for CTA ----------
  const ctaWrapRef = useRef(null);
  const [ctaAnimated, setCtaAnimated] = useState(false);

  useEffect(() => {
    if (!ctaWrapRef.current) return;

    const el = ctaWrapRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setCtaAnimated(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // ---------- Calendly inline modal ----------
  const [calOpen, setCalOpen] = useState(false);

  // ESC close + close button always visible
  useEffect(() => {
    if (!calOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setCalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [calOpen]);

  // Load Calendly script only when modal opens (or on intent)
  useEffect(() => {
    if (!calOpen) return;

    if (document.getElementById("calendly-widget-script")) return;

    const s = document.createElement("script");
    s.id = "calendly-widget-script";
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, [calOpen]);

  const onPrimaryCtaClick = () => {
    // Tracking (GTM / GA4 via dataLayer)
    safePushDataLayer("hero_cta_click", {
      cta: "primary",
      variant: headlineVariant,
      ctaColor: ctaColorVariant,
      page: "home",
    });

    // Open inline Calendly modal
    setCalOpen(true);
  };

  const onSecondaryCtaClick = () => {
    safePushDataLayer("hero_cta_click", {
      cta: "secondary",
      variant: headlineVariant,
      ctaColor: ctaColorVariant,
      page: "home",
    });
  };

  // ---------- Mobile LCP image optimization ----------
  // Use a dedicated small image if available, and ensure srcSet includes small widths
  const isMobile = useMemo(() => isMobileViewport(), []);
  const heroSrc = isMobile && heroImages.mobile ? heroImages.mobile : heroImages.primary;

  // Prefer a srcSet that includes 360w/720w/1200w.
  // If your heroImages.primarySrcSet already contains 360w, this will still work.
  const heroSrcSet =
    heroImages.primarySrcSet ||
    (heroImages.mobile
      ? `${heroImages.mobile} 360w, ${heroImages.primary} 1200w`
      : undefined);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSrc}
          srcSet={heroSrcSet}
          sizes="(max-width: 360px) 100vw, (max-width: 768px) 90vw, 1200px"
          alt="Marketing Automation & AI Voice Agents"
          width={1200}
          height={600}
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-blue-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div className="max-w-3xl">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Certified Klaviyo Partner</Badge>
              <Badge variant="secondary">50+ Clients</Badge>
              <Badge variant="secondary">ROI-Driven Automation</Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {headlineText}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
              {subheadlineText}
            </p>

            {/* CTAs */}
            <div ref={ctaWrapRef} className="mb-4">
              {/* Mobile: ONLY primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="button"
                  size="lg"
                  onClick={onPrimaryCtaClick}
                  className={[
                    "px-8 py-6 text-base rounded-xl shadow-lg transition-transform",
                    primaryCtaClass,
                    ctaAnimated ? "translate-y-0 opacity-100" : "translate-y-1 opacity-95",
                  ].join(" ")}
                >
                  <span className="inline-flex items-center">
                    Book a Free Revenue &amp; Automation Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </Button>

                {/* Desktop + tablet: show secondary */}
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="hidden sm:inline-flex px-8 py-6 text-base rounded-xl text-white border-white/50 hover:bg-white/10"
                >
                  <a href="/voice-ai" onClick={onSecondaryCtaClick}>
                    See Live Voice AI Demo (24/7)
                  </a>
                </Button>
              </div>

              {/* Social proof line under CTA (optional, high ROI) */}
              <p className="mt-3 text-sm text-white/80">
                Used by Shopify brands doing <span className="font-semibold text-white">$1M–$50M/year</span>.
                <span className="ml-2 text-white/70">No obligation.</span>
              </p>
            </div>

            {/* Proof Points */}
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-white/90 text-sm md:text-base">
              <li>• 45–85% Revenue Growth</li>
              <li>• 50,000+ Hours Automated</li>
              <li>• Proven with 50+ Shopify &amp; DTC Clients</li>
            </ul>
          </div>

          {/* Right graphic (desktop only) */}
          <div className="hidden lg:block">
            <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md p-6 shadow-xl">
              <div className="text-white font-semibold text-lg mb-3">
                Explore AI Solutions
              </div>
              <div className="space-y-3">
                <div className="rounded-xl bg-white/10 border border-white/10 p-4">
                  <div className="text-white font-semibold">Voice AI Agents</div>
                  <div className="text-white/80 text-sm">
                    Capture leads, answer FAQs, and book calls 24/7.
                  </div>
                </div>
                <div className="rounded-xl bg-white/10 border border-white/10 p-4">
                  <div className="text-white font-semibold">Klaviyo Automation</div>
                  <div className="text-white/80 text-sm">
                    Flows that lift revenue while reducing support load.
                  </div>
                </div>
                <div className="rounded-xl bg-white/10 border border-white/10 p-4">
                  <div className="text-white font-semibold">Revenue Audit</div>
                  <div className="text-white/80 text-sm">
                    Find quick wins and prioritize high-ROI fixes.
                  </div>
                </div>
              </div>

              <div className="mt-5 text-white/70 text-xs">
                Tip: Keep this card — it doesn’t affect mobile LCP (desktop-only).
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      {calOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Calendly booking modal"
          onMouseDown={(e) => {
            // click outside closes
            if (e.target === e.currentTarget) setCalOpen(false);
          }}
        >
          <div className="relative w-full max-w-3xl h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Close button (always visible) */}
            <button
              type="button"
              aria-label="Close"
              onClick={() => setCalOpen(false)}
              className="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 text-black"
            >
              ✕
            </button>

            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget w-full h-full"
              data-url={companyData?.calendly}
              style={{ minWidth: "320px", height: "100%" }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
