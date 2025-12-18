import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const HeroSection = ({ companyData }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <picture>
          {/* Mobile first */}
          <source
            type="image/webp"
            media="(max-width: 640px)"
            srcSet="
              /images/optimized/hero/hero-primary-320.webp 320w,
              /images/optimized/hero/hero-primary-640.webp 640w
            "
            sizes="100vw"
          />

          {/* Tablet */}
          <source
            type="image/webp"
            media="(max-width: 1024px)"
            srcSet="
              /images/optimized/hero/hero-primary-640.webp 640w,
              /images/optimized/hero/hero-primary-800.webp 800w
            "
            sizes="100vw"
          />

          {/* Desktop */}
          <source
            type="image/webp"
            media="(min-width: 1025px)"
            srcSet="
              /images/optimized/hero/hero-primary-800.webp 800w,
              /images/optimized/hero/hero-primary-1200.webp 1200w
            "
            sizes="100vw"
          />

          {/* Fallback */}
          <img
            src="/images/optimized/hero/hero-primary-800.webp"
            alt="Marketing Automation & AI Voice Agents"
            width="1200"
            height="600"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            draggable={false}
          />
        </picture>

        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-900/85 to-blue-950/90" />
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
            Turn Automation Into Your{" "}
            <span className="text-blue-300">#1 Revenue Channel</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            We help Shopify brands and service businesses increase revenue and cut
            costs using Klaviyo email automation and AI-powered Voice Agents —
            without hiring more staff.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button asChild size="lg" className="px-8 py-6 text-base">
              <a
                href={companyData?.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Revenue & Automation Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Proof */}
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-white/90 text-sm md:text-base">
            <li>• 45–85% Revenue Growth</li>
            <li>• 50,000+ Hours Automated</li>
            <li>• Used by Shopify brands doing $1M–$50M/year</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
