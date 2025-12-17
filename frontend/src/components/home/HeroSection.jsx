import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const HeroSection = ({ companyData, heroImages }) => {
  // Absolute safety guards
  if (!companyData || !heroImages) return null;

  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImages.primary}
          alt="Marketing Automation Background"
          className="w-full h-full object-cover object-center"
          loading="eager"
          draggable={false}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-950/60 to-black/50"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
            Turn Automation Into Your #1 Revenue Channel
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8">
            Klaviyo email automation & AI Voice Agents that grow revenue —
            without hiring more staff.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asChild size="lg" className="px-8">
              <a
                href={companyData.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Free Revenue & Automation Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="px-8">
              <a href="/voice-ai">See Live Voice AI Demo</a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">Certified Klaviyo Partner</Badge>
            <Badge variant="secondary">50+ Clients</Badge>
            <Badge variant="secondary">ROI-Driven Automation</Badge>
          </div>
        </div>

        {/* Right stats card */}
        <div className="hidden lg:block bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <h3 className="text-white text-xl font-semibold mb-6">
            Proven Results
          </h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-3xl font-bold text-yellow-400">50,000+</p>
              <p className="text-white/80">Hours Automated</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-blue-400">200+</p>
              <p className="text-white/80">Projects Delivered</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-green-400">45–85%</p>
              <p className="text-white/80">Revenue Growth</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-purple-400">5+</p>
              <p className="text-white/80">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
