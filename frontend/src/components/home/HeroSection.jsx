import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight, TrendingUp, Clock, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const GEO_COPY = {
  US: {
    cta: "Book Free Revenue Audit",
    headline: "Klaviyo & AI Automation That Scales Revenue",
    sub: "Trusted by Shopify brands doing $1M–$50M/year to increase email revenue by 30–45%.",
  },
  EU: {
    cta: "Book Free Automation Audit",
    headline: "Klaviyo & AI Automation That Cuts Costs & Scales Growth",
    sub: "Trusted by European brands to automate operations and increase retention.",
  },
  DEFAULT: {
    cta: "Book Free Automation Audit",
    headline: "Klaviyo & AI Automation That Scales Revenue",
    sub: "Trusted by Shopify brands to increase revenue with automation & AI systems.",
  },
};

const STATS_POOL = [
  {
    id: "revenue",
    icon: TrendingUp,
    value: "30–45%",
    label: "Email Revenue Lift",
  },
  {
    id: "hours",
    icon: Clock,
    value: "50,000+",
    label: "Hours Automated",
  },
  {
    id: "clients",
    icon: Users,
    value: "50+",
    label: "Active Clients",
  },
  {
    id: "gdpr",
    icon: ShieldCheck,
    value: "100%",
    label: "GDPR-Safe Systems",
  },
];

function detectGeo() {
  if (typeof navigator === "undefined") return "DEFAULT";
  const lang = navigator.language || "";
  if (lang.startsWith("en-US")) return "US";
  if (lang.startsWith("en-GB") || lang.startsWith("de") || lang.startsWith("fr")) return "EU";
  return "DEFAULT";
}

const HeroSection = ({ companyData }) => {
  const geo = useMemo(detectGeo, []);
  const copy = GEO_COPY[geo] || GEO_COPY.DEFAULT;

  const [highlightedStat, setHighlightedStat] = useState(STATS_POOL[0]);

  // Rotate highlighted stat every 7 days (credibility A/B)
  useEffect(() => {
    const key = "heroStatIndex";
    const stored = Number(localStorage.getItem(key)) || 0;
    const nextIndex = (stored + 1) % STATS_POOL.length;
    setHighlightedStat(STATS_POOL[nextIndex]);
    localStorage.setItem(key, nextIndex.toString());
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT — COPY */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              {copy.headline}
            </h1>

            <p className="text-lg md:text-xl text-blue-100 max-w-xl mb-8">
              {copy.sub}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 text-lg transition-transform hover:scale-[1.02]"
              >
                <a
                  href={companyData?.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a free automation audit"
                >
                  {copy.cta}
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>

              <span className="text-sm text-blue-200 self-center">
                No obligation · Free strategy call
              </span>
            </div>

            <p className="mt-6 text-sm text-blue-300">
              Used by Shopify brands doing <strong>$1M–$50M/year</strong>
            </p>
          </div>

          {/* RIGHT — RESULTS GRAPHIC (FAST, NO IMAGES) */}
          <div className="grid grid-cols-2 gap-6">
            {STATS_POOL.map((stat) => {
              const Icon = stat.icon;
              const isActive = stat.id === highlightedStat.id;

              return (
                <div
                  key={stat.id}
                  className={`rounded-2xl p-6 bg-white/10 backdrop-blur border border-white/15 transition-transform duration-300 ${
                    isActive ? "scale-[1.05] ring-2 ring-blue-400" : ""
                  }`}
                >
                  <Icon className="text-blue-300 mb-3" size={28} />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
