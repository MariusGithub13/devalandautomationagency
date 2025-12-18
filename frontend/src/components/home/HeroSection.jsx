import React, { useMemo } from "react";
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  Clock,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * GEO DETECTION (lightweight, no API)
 * Uses browser language as a proxy (fast + privacy-safe)
 */
function getGeoVariant() {
  if (typeof navigator === "undefined") return "DEFAULT";
  const lang = navigator.language || "";
  if (lang.startsWith("en-US")) return "US";
  if (lang.startsWith("en-GB") || lang.startsWith("de") || lang.startsWith("fr") || lang.startsWith("it") || lang.startsWith("es"))
    return "EU";
  return "DEFAULT";
}

/**
 * WEEKLY ROTATING STAT (deterministic)
 * Changes once per week, same for all users
 */
function getWeeklyStatIndex() {
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  return weekNumber % 4;
}

const HeroSection = ({ companyData }) => {
  const geo = useMemo(getGeoVariant, []);
  const rotatingIndex = useMemo(getWeeklyStatIndex, []);

  /**
   * GEO-PERSONALIZED STATS
   */
  const statsByGeo = {
    US: {
      revenueLift: "+38%",
      automationRevenue: "$1.6M+",
      hoursSaved: "52,000+",
      brands: "55+"
    },
    EU: {
      revenueLift: "+29%",
      automationRevenue: "€1.1M+",
      hoursSaved: "41,000+",
      brands: "40+"
    },
    DEFAULT: {
      revenueLift: "+34%",
      automationRevenue: "$1.2M+",
      hoursSaved: "45,000+",
      brands: "50+"
    }
  };

  const stats = statsByGeo[geo];

  /**
   * ROTATING CREDIBILITY STAT
   */
  const rotatingStats = [
    {
      icon: <TrendingUp size={28} className="text-blue-300 mb-3" />,
      value: stats.revenueLift,
      label: "Email Revenue Growth"
    },
    {
      icon: <DollarSign size={28} className="text-green-300 mb-3" />,
      value: stats.automationRevenue,
      label: "Attributed to Automation"
    },
    {
      icon: <Clock size={28} className="text-purple-300 mb-3" />,
      value: stats.hoursSaved,
      label: "Hours Automated"
    },
    {
      icon: <Users size={28} className="text-yellow-300 mb-3" />,
      value: stats.brands,
      label: "Brands Scaled"
    }
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white">
              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6"
              >
                Klaviyo & AI Automation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  That Scales Revenue
                </span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100 max-w-xl mb-8">
                We help Shopify brands and service businesses increase revenue
                and reduce costs using Klaviyo automation and AI voice systems —
                without hiring more staff.
              </p>

              {/* PRIMARY CTA */}
              <div className="flex flex-col gap-3 max-w-sm">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-5 text-lg"
                >
                  <a
                    href={companyData?.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book a free automation and revenue audit call"
                  >
                    Book Free Automation & Revenue Audit
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </Button>

                <p className="text-sm text-blue-200">
                  No obligation · Free strategy call
                </p>
              </div>

              {/* SOCIAL PROOF */}
              <p className="mt-6 text-sm text-blue-300">
                Used by Shopify brands doing <strong>$1M–$50M/year</strong>
              </p>
            </div>

            {/* RIGHT — RESULTS CARDS */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">

                {rotatingStats.map((stat, index) => {
                  // Rotate ONE highlighted stat weekly
                  const isHighlighted = index === rotatingIndex;
                  return (
                    <div
                      key={index}
                      className={`rounded-2xl p-6 text-white border backdrop-blur transition
                        ${
                          isHighlighted
                            ? "bg-white/20 border-white/30 scale-[1.02]"
                            : "bg-white/10 border-white/15"
                        }`}
                    >
                      {stat.icon}
                      <p className="text-3xl font-bold">{stat.value}</p>
                      <p className="text-sm text-blue-100 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CASE STUDY LINK — BELOW HERO */}
      <section className="bg-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-blue-200 text-sm mb-3">
            Want proof beyond numbers?
          </p>
          <a
            href="/case-studies"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-lg"
          >
            Read real client case studies
            <ArrowRight className="ml-2" size={18} />
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
