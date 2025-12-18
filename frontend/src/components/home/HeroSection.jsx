import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = ({ companyData }) => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ================= LEFT CONTENT ================= */}
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
              Trusted by Shopify brands and service businesses to increase
              email-driven revenue by 30–45% using Klaviyo flows, AI voice agents,
              and automation systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 text-lg"
              >
                <a
                  href={companyData?.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a free Klaviyo and AI automation audit call"
                >
                  Book Your Free Automation Audit
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>

              <p className="text-sm text-blue-200 mt-2 sm:mt-3">
                No obligation · Free strategy call
              </p>
            </div>
          </div>

          {/* ================= RIGHT IMAGE (LCP OPTIMIZED) ================= */}
          <div className="relative">
            <picture>
              {/* AVIF — best compression */}
              <source
                type="image/avif"
                srcSet="/images/optimized/hero/hero-primary.avif"
              />

              {/* WebP — responsive sizes */}
              <source
                type="image/webp"
                srcSet="
                  /images/optimized/hero/hero-primary-320.webp 320w,
                  /images/optimized/hero/hero-primary-400.webp 400w,
                  /images/optimized/hero/hero-primary-640.webp 640w,
                  /images/optimized/hero/hero-primary-800.webp 800w,
                  /images/optimized/hero/hero-primary-1200.webp 1200w
                "
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 600px"
              />

              {/* Fallback */}
              <img
                src="/images/optimized/hero/hero-primary.webp"
                alt="AI automation dashboards and Klaviyo email systems by Devaland"
                width="600"
                height="600"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
