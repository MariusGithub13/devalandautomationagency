import React, { useMemo } from "react";
import { ArrowRight, TrendingUp, Clock, Mail, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Simple geo detection (fast, privacy-safe)
 * Defaults to US if unknown
 */
const getUserGeo = () => {
  if (typeof navigator === "undefined") return "US";

  const lang = navigator.language || navigator.userLanguage;
  if (!lang) return "US";

  return lang.toLowerCase().includes("en-us") ? "US" : "EU";
};

/**
 * Case studies pool
 * (You can rotate / replace weakest stat later automatically)
 */
const CASE_STUDIES = {
  US: {
    tag: "Shopify · US Brand",
    headline: "+38% Email Revenue in 90 Days",
    description:
      "A mid-seven-figure Shopify brand needed to scale repeat purchases and reduce manual workload. We rebuilt Klaviyo flows, added AI automation, and optimized segmentation.",
    bullets: [
      "Complete Klaviyo flow rebuild",
      "Advanced behavioral segmentation",
      "AI automation reduced manual support"
    ],
    stats: [
      { icon: TrendingUp, value: "+38%", label: "Email Revenue Lift" },
      { icon: Clock, value: "1,200+", label: "Hours Automated" },
      { icon: Mail, value: "62%", label: "Avg Flow Open Rate" },
      { icon: Users, value: "+21%", label: "Repeat Purchase Rate" }
    ]
  },

  EU: {
    tag: "eCommerce · EU Brand",
    headline: "+31% Revenue From Automation",
    description:
      "An EU-based eCommerce brand struggled with retention and low LTV. We implemented Klaviyo automation, lifecycle segmentation, and AI workflows.",
    bullets: [
      "Lifecycle-based Klaviyo automation",
      "Customer behavior segmentation",
      "Operational automation with AI"
    ],
    stats: [
      { icon: TrendingUp, value: "+31%", label: "Automation Revenue Lift" },
      { icon: Clock, value: "900+", label: "Manual Hours Saved" },
      { icon: Mail, value: "58%", label: "Flow Open Rate" },
      { icon: Users, value: "+18%", label: "Customer LTV Increase" }
    ]
  }
};

const CaseStudySection = () => {
  const geo = useMemo(getUserGeo, []);
  const study = CASE_STUDIES[geo] || CASE_STUDIES.US;

  return (
    <section
      aria-labelledby="case-study-heading"
      className="bg-slate-50 border-t border-slate-200 py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-2xl mb-14">
          <h2
            id="case-study-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Proven Results From Automation
          </h2>
          <p className="text-lg text-slate-600">
            Real outcomes from Klaviyo, AI systems, and revenue-focused automation.
          </p>
        </div>

        {/* CASE STUDY CARD */}
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl p-10 border border-slate-200 shadow-sm">

          {/* LEFT */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              {study.tag}
            </span>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {study.headline}
            </h3>

            <p className="text-slate-600 mb-6 leading-relaxed">
              {study.description}
            </p>

            <ul className="space-y-3 text-slate-700">
              {study.bullets.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — RESULTS GRID */}
          <div className="grid grid-cols-2 gap-6">
            {study.stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`rounded-2xl p-6 ${
                    i === 0
                      ? "bg-blue-600 text-white animate-pulse"
                      : "bg-slate-100 text-slate-900"
                  }`}
                >
                  <Icon className="mb-3" size={28} />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-600 mb-6">
            Want to see more real-world results?
          </p>

          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-lg"
          >
            <a
              href="/case-studies"
              aria-label="View detailed automation case studies"
            >
              View All Case Studies
              <ArrowRight className="ml-2" size={20} />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default CaseStudySection;
