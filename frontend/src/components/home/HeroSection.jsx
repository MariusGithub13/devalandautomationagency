import React, { useMemo, useEffect, useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  Clock,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* -----------------------------
   GEO DETECTION (lightweight)
------------------------------ */
function getGeoVariant() {
  if (typeof navigator === "undefined") return "DEFAULT";
  const lang = navigator.language || "";
  if (lang.startsWith("en-US")) return "US";
  if (
    lang.startsWith("en-GB") ||
    lang.startsWith("de") ||
    lang.startsWith("fr") ||
    lang.startsWith("it") ||
    lang.startsWith("es")
  ) {
    return "EU";
  }
  return "DEFAULT";
}

/* -----------------------------
   WEEK INDEX (deterministic)
------------------------------ */
function getWeekIndex() {
  return Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
}

/* -----------------------------
   STAT PERFORMANCE TRACKING
------------------------------ */
function getStatWeights() {
  try {
    return JSON.parse(localStorage.getItem("heroStatWeights")) || {};
  } catch {
    return {};
  }
}

function saveStatWeights(weights) {
  localStorage.setItem("heroStatWeights", JSON.stringify(weights));
}

function getLastRotation() {
  return Number(localStorage.getItem("heroStatRotationTs") || 0);
}

function setRotationNow() {
  localStorage.setItem("heroStatRotationTs", Date.now().toString());
}

const ROTATION_WINDOW = 30 * 24 * 60 * 60 * 1000; // 30 days

/* =============================
   HERO SECTION
============================= */
const HeroSection = ({ companyData }) => {
  const geo = useMemo(getGeoVariant, []);
  const [highlightIndex, setHighlightIndex] = useState(0);

  /* -----------------------------
     GEO-PERSONALIZED COPY
  ------------------------------ */
  const ctaCopyByGeo = {
    US: "Book Free Revenue Audit",
    EU: "Book Free Automation Strategy",
    DEFAULT: "Book Free Automation & Revenue Audit"
  };

  /* -----------------------------
     GEO-PERSONALIZED STATS
  ------------------------------ */
  const statsByGeo = {
    US: [
      { id: "rev", icon: TrendingUp, value: "+38%", label: "Email Revenue Lift" },
      { id: "cash", icon: DollarSign, value: "$1.6M+", label: "Automation Revenue" },
      { id: "time", icon: Clock, value: "52,000+", label: "Hours Saved" },
      { id: "brands", icon: Users, value: "55+", label: "Brands Scaled" }
    ],
    EU: [
      { id: "rev", icon: TrendingUp, value: "+29%", label: "Revenue Growth" },
      { id: "cash", icon: DollarSign, value: "€1.1M+", label: "Automation Impact" },
      { id: "time", icon: Clock, value: "41,000+", label: "Hours Automated" },
      { id: "brands", icon: Users, value: "40+", label: "EU Brands Supported" }
    ],
    DEFAULT: [
      { id: "rev", icon: TrendingUp, value: "+34%", label: "Revenue Growth" },
      { id: "cash", icon: DollarSign, value: "$1.2M+", label: "Automation Revenue" },
      { id: "time", icon: Clock, value: "45,000+", label: "Hours Automated" },
      { id: "brands", icon: Users, value: "50+", label: "Brands Scaled" }
    ]
  };

  const stats = statsByGeo[geo];

  /* -----------------------------
     AUTO-ROTATE WEAK STAT (30d)
  ------------------------------ */
  useEffect(() => {
    const now = Date.now();
    const lastRotation = getLastRotation();

    const weights = getStatWeights();

    // Initialize weights if missing
    stats.forEach((s, idx) => {
      if (weights[s.id] === undefined) {
        weights[s.id] = idx;
      }
    });

    // Rotate after 30 days
    if (now - lastRotation > ROTATION_WINDOW) {
      const weakest = Object.entries(weights).sort((a, b) => a[1] - b[1])[0];
      const weakestIndex = stats.findIndex(s => s.id === weakest[0]);
      setHighlightIndex(weakestIndex === -1 ? 0 : weakestIndex);
      setRotationNow();
    } else {
      setHighlightIndex(getWeekIndex() % stats.length);
    }

    saveStatWeights(weights);
  }, [stats]);

  /* -----------------------------
     TRACK STAT VISIBILITY
  ------------------------------ */
  useEffect(() => {
    const weights = getStatWeights();
    const stat = stats[highlightIndex];
    if (stat) {
      weights[stat.id] = (weights[stat.id] || 0) + 1;
      saveStatWeights(weights);
    }
  }, [highlightIndex, stats]);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Klaviyo & AI Automation
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  That Scales Revenue
                </span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100 max-w-xl mb-8">
                We help Shopify brands and service businesses grow revenue
                and reduce operational load using Klaviyo automation
                and AI voice systems.
              </p>

              {/* CTA */}
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
                    aria-label="Book a free automation strategy call"
                  >
                    {ctaCopyByGeo[geo]}
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </Button>

                <p className="text-sm text-blue-200">
                  No obligation · Free strategy call
                </p>
              </div>

              <p className="mt-6 text-sm text-blue-300">
                Used by Shopify brands doing <strong>$1M–$50M/year</strong>
              </p>
            </div>

            {/* RIGHT — RESULTS */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                const isActive = idx === highlightIndex;

                return (
                  <div
                    key={stat.id}
                    className={`
                      rounded-2xl p-6 text-white border backdrop-blur
                      transition-all duration-700 ease-out
                      ${isActive
                        ? "bg-white/25 border-white/40 scale-[1.04] animate-[pulse_2s_ease-out_1]"
                        : "bg-white/10 border-white/15"}
                    `}
                  >
                    <Icon size={28} className="mb-3 text-blue-200" />
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-blue-100 mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* CASE STUDY LINK */}
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
