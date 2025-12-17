import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const HeroSection = ({ companyData, heroImages }) => {
  if (!heroImages?.primary) return null;

  // ---------------------------
  // Helpers
  // ---------------------------
  const safeWindow = typeof window !== "undefined" ? window : null;

  const getQueryParams = () => {
    try {
      if (!safeWindow) return {};
      const sp = new URLSearchParams(safeWindow.location.search);
      const obj = {};
      for (const [k, v] of sp.entries()) obj[k] = v;
      return obj;
    } catch {
      return {};
    }
  };

  const getTrafficMode = (qp) => {
    // Paid-traffic signals (Google/Meta/etc.)
    const utmMedium = (qp.utm_medium || "").toLowerCase();
    const utmSource = (qp.utm_source || "").toLowerCase();
    const gclid = qp.gclid;
    const fbclid = qp.fbclid;
    const msclkid = qp.msclkid;

    const isPaid =
      utmMedium.includes("paid") ||
      utmMedium.includes("cpc") ||
      utmMedium.includes("ppc") ||
      utmMedium.includes("display") ||
      utmMedium.includes("social") ||
      utmSource.includes("google") ||
      utmSource.includes("facebook") ||
      utmSource.includes("instagram") ||
      utmSource.includes("tiktok") ||
      !!gclid ||
      !!fbclid ||
      !!msclkid;

    return isPaid ? "paid" : "organic";
  };

  const getGeoBucket = () => {
    // Lightweight "geo-ish" personalization using language + timezone (not perfect, but safe & zero-dependency).
    // If you later want accurate geo, feed country via query param (?geo=us) from your ad landing URLs.
    try {
      const qp = getQueryParams();
      const forced = (qp.geo || qp.country || "").toLowerCase(); // allow manual override
      if (forced === "us" || forced === "usa") return "US";
      if (forced === "uk" || forced === "gb") return "UK";
      if (forced === "eu" || forced === "europe") return "EU";

      const lang = (navigator?.language || "").toLowerCase(); // e.g. en-us, en-gb
      if (lang.includes("en-us")) return "US";
      if (lang.includes("en-gb")) return "UK";

      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      // Rough buckets:
      if (tz.startsWith("America/")) return "US";
      if (tz.startsWith("Europe/London")) return "UK";
      if (tz.startsWith("Europe/")) return "EU";

      return "US"; // default: Tier-1 intent
    } catch {
      return "US";
    }
  };

  const bucketUser = (key, variants) => {
    // Deterministic-ish bucket using localStorage once.
    try {
      if (!safeWindow) return variants[0];
      const existing = safeWindow.localStorage.getItem(key);
      if (existing && variants.includes(existing)) return existing;

      const chosen = variants[Math.floor(Math.random() * variants.length)];
      safeWindow.localStorage.setItem(key, chosen);
      return chosen;
    } catch {
      return variants[0];
    }
  };

  const track = (eventName, payload = {}) => {
    // Safe, non-breaking tracker: dataLayer if present, plus console in dev.
    try {
      if (!safeWindow) return;
      const event = {
        event: eventName,
        ...payload,
        ts: Date.now(),
      };

      // GTM / dataLayer
      if (safeWindow.dataLayer && Array.isArray(safeWindow.dataLayer)) {
        safeWindow.dataLayer.push(event);
      }

      // Optional: helpful during debugging
      // eslint-disable-next-line no-console
      // console.log("[track]", event);
    } catch {
      // no-op
    }
  };

  // ---------------------------
  // Personalization + Testing
  // ---------------------------
  const queryParams = useMemo(() => getQueryParams(), []);
  const trafficMode = useMemo(() => getTrafficMode(queryParams), [queryParams]);
  const geoBucket = useMemo(() => getGeoBucket(), []);

  // CTA Color Test (only one change: primary button styling)
  // Variants: "dark" vs "accent"
  const ctaColorVariant = useMemo(
    () => bucketUser("dl_cta_color_v1", ["dark", "accent"]),
    []
  );

  // Headline variant locked (you asked earlier) — keep stable.
  // If you want a headline A/B later, add a second bucketing key and only change the string.
  const copy = useMemo(() => {
    const tier1 = {
      US: {
        socialProof: "Used by Shopify brands doing $1M–$50M/year across the US & Canada",
        subline:
          "We help Shopify brands and service businesses increase revenue and cut costs using Klaviyo email automation and AI-powered Voice Agents — without hiring more staff.",
      },
      UK: {
        socialProof: "Used by Shopify brands doing £1M–£40M/year across the UK",
        subline:
          "We help Shopify brands and service businesses increase revenue and reduce costs using Klaviyo email automation and AI-powered Voice Agents — without hiring more staff.",
      },
      EU: {
        socialProof: "Used by Shopify brands doing €1M–€50M/year across the EU",
        subline:
          "We help Shopify brands and service businesses increase revenue and cut costs using Klaviyo email automation and AI-powered Voice Agents — without hiring more staff.",
      },
    };

    const base = tier1[geoBucket] || tier1.US;

    // Paid traffic gets stronger “intent-matching” microcopy
    if (trafficMode === "paid") {
      return {
        ...base,
        eyebrow: "For Shopify & service businesses",
        headline: (
          <>
            Scale Revenue Without Hiring More People Using{" "}
            <span className="text-blue-400">Automation</span>
          </>
        ),
        riskReducer: "No obligation · Free strategy call · Takes 15 minutes",
        primaryCta: "Get a Free Revenue & Automation Audit",
        secondaryCta: "See Live Voice AI Demo (24/7)",
      };
    }

    // Organic: slightly softer
    return {
      ...base,
      eyebrow: "Klaviyo + Voice AI done-for-you",
      headline: (
        <>
          Scale Revenue Without Hiring More People Using{" "}
          <span className="text-blue-400">Automation</span>
        </>
      ),
      riskReducer: "No obligation · Free strategy call · Takes 15 minutes",
      primaryCta: "Get a Free Revenue & Automation Audit",
      secondaryCta: "See Live Voice AI Demo (24/7)",
    };
  }, [geoBucket, trafficMode]);

  // ---------------------------
  // Scroll-trigger micro-animation
  // ---------------------------
  const heroRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!safeWindow) return;

    const el = heroRef.current;
    if (!el) return;

    // IntersectionObserver is safe + lightweight
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Track impression once when it becomes visible
  useEffect(() => {
    if (!inView) return;
    track("hero_impression", {
      trafficMode,
      geoBucket,
      ctaColorVariant,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  // CTA styles (A/B)
  const primaryCtaClass =
    ctaColorVariant === "accent"
      ? "px-8 py-6 text-base bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
      : "px-8 py-6 text-base bg-black text-white hover:bg-black/90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5";

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div
            className={[
              "max-w-3xl",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              "transition-all duration-700 ease-out",
            ].join(" ")}
          >
            {/* Eyebrow + Trust Badges */}
            <div className="flex flex-col gap-3 mb-6">
              <p className="text-white/70 text-sm">{copy.eyebrow}</p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Certified Klaviyo Partner</Badge>
                <Badge variant="secondary">50+ Clients</Badge>
                <Badge variant="secondary">ROI-Driven Automation</Badge>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              {copy.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              {copy.subline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <Button
                asChild
                size="lg"
                className={primaryCtaClass}
                onClick={() =>
                  track("hero_cta_click", {
                    cta: "primary",
                    trafficMode,
                    geoBucket,
                    ctaColorVariant,
                  })
                }
              >
                <a href={companyData?.calendly} target="_blank" rel="noopener noreferrer">
                  {copy.primaryCta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base text-white border-white/40 backdrop-blur-md hover:bg-white/10 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                onClick={() =>
                  track("hero_cta_click", {
                    cta: "secondary",
                    trafficMode,
                    geoBucket,
                    ctaColorVariant,
                  })
                }
              >
                <a href="/voice-ai">{copy.secondaryCta}</a>
              </Button>
            </div>

            {/* Risk reducer */}
            <p className="text-sm text-white/70 mb-6">{copy.riskReducer}</p>

            {/* Social proof */}
            <p className="text-sm md:text-base text-white/70 mb-6">
              {copy.socialProof}
            </p>

            {/* Proof Points */}
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-white/90 text-sm md:text-base">
              <li>• 45–85% Revenue Growth</li>
              <li>• 50,000+ Hours Automated</li>
              <li>• Proven with 50+ Shopify & DTC Clients</li>
            </ul>
          </div>

          {/* RIGHT: Visual Card (Desktop only) */}
          <div
            className={[
              "hidden lg:flex justify-center",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              "transition-all duration-700 ease-out delay-150",
            ].join(" ")}
          >
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl w-full max-w-md">
              <div className="absolute -top-4 -left-4 bg-blue-500 text-white text-sm px-4 py-1 rounded-full shadow">
                AI-Powered
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">24/7 Revenue Automation</h3>
              <p className="text-white/80 text-sm mb-4">
                Email, SMS & Voice AI working together to capture, convert and retain
                customers — automatically.
              </p>
              <div className="flex justify-between text-sm text-white/70">
                <span>Always-on</span>
                <span>Scales with you</span>
              </div>

              {/* Tiny “card CTA” look */}
              <div className="mt-5 rounded-xl bg-white/10 border border-white/15 p-4">
                <div className="text-white font-semibold text-sm mb-1">Fast wins we ship first</div>
                <div className="text-white/80 text-xs">
                  Abandoned cart · Winback · VIP flows · Lead capture · AI answering
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
