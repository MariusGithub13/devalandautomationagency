import React from "react";
import { ArrowRight, TrendingUp, DollarSign, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = ({ companyData }) => {
  return (
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
              We help Shopify brands and service businesses increase revenue and
              cut costs using Klaviyo automation and AI voice systems —
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

          {/* RIGHT SIDE — RESULTS GRAPHIC */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">

              {/* CARD 1 */}
              <div className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-6 text-white">
                <TrendingUp className="text-blue-300 mb-3" size={28} />
                <p className="text-3xl font-bold">+34%</p>
                <p className="text-sm text-blue-100 mt-1">
                  Email Revenue Growth
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-6 text-white">
                <DollarSign className="text-green-300 mb-3" size={28} />
                <p className="text-3xl font-bold">$1.2M+</p>
                <p className="text-sm text-blue-100 mt-1">
                  Attributed to Automation
                </p>
              </div>

              {/* CARD 3 */}
              <div className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-6 text-white">
                <Clock className="text-purple-300 mb-3" size={28} />
                <p className="text-3xl font-bold">45,000+</p>
                <p className="text-sm text-blue-100 mt-1">
                  Hours Automated
                </p>
              </div>

              {/* CARD 4 */}
              <div className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-6 text-white">
                <Users className="text-yellow-300 mb-3" size={28} />
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-blue-100 mt-1">
                  Brands Scaled
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
