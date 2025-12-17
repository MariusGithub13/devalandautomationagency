import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const HeroSection = ({ companyData, heroImages }) => {
  if (!heroImages?.primary) return null;

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
        <div className="max-w-3xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">Certified Klaviyo Partner</Badge>
            <Badge variant="secondary">50+ Clients</Badge>
            <Badge variant="secondary">ROI-Driven Automation</Badge>
          </div>

          {/* Headline – locked winning variant */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Scale Revenue Without Hiring More People Using{" "}
            <span className="text-blue-400">Automation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            We help Shopify brands and service businesses increase revenue and cut
            costs using Klaviyo email automation and AI-powered Voice Agents —
            without adding headcount.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4 w-full">
            {/* Primary CTA – always visible */}
            <Button asChild size="lg" className="px-8 py-6 text-base w-full sm:w-auto">
              <a
                href={companyData?.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full"
              >
                Book a Free Revenue &amp; Automation Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            {/* Secondary CTA – desktop/tablet only */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="hidden sm:flex px-8 py-6 text-base text-white border-white/50 hover:bg-white/10 w-full sm:w-auto"
            >
              <a
                href="/voice-ai"
                className="inline-flex items-center justify-center w-full"
              >
                See Live Voice AI Demo (24/7)
              </a>
            </Button>
          </div>

          {/* Micro risk reducer */}
          <p className="text-sm text-white/70 mb-6">
            No obligation • Used by Shopify brands doing $1M–$50M/year
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
  );
};

export default HeroSection;
