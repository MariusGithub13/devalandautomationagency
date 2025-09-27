import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import TrustpilotWidget from '../components/TrustpilotWidget';
import { companyData, heroImages, services, caseStudies } from '../data/mock';

const HomePage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImages.primary}
            alt="Digital Transformation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-blue-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-6 leading-tight">
                {companyData.tagline}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                {companyData.description}
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  asChild
                  size="lg"
                  className="btn-accent text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift animate-pulse-glow"
                >
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                    <span>Book Free Automation Audit</span>
                    <ArrowRight size={20} />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="glass text-white border-white/30 font-semibold px-8 py-4 text-lg rounded-lg hover:bg-white/10"
                >
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-white/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span className="font-medium">Enterprise Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award size={20} className="text-yellow-400" />
                  <span className="font-medium">Certified Partners</span>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="animate-fade-in-up delay-300">
              <Card className="glass border-white/20 p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-white mb-6">Proven Results</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">{companyData.stats.hoursAutomated}</div>
                      <div className="text-white/80 font-medium">Hours Automated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">{companyData.stats.clientsSaved}</div>
                      <div className="text-white/80 font-medium">Client Savings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">{companyData.stats.projectsDelivered}</div>
                      <div className="text-white/80 font-medium">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-2">{companyData.stats.yearsExperience}</div>
                      <div className="text-white/80 font-medium">Years Experience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trustpilot Section */}
      <section className="section-padding-sm bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-600 mb-8">Trusted by Growing Businesses</h2>
            <div className="flex justify-center">
              <TrustpilotWidget variant="full" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Comprehensive Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic planning to technical implementation, we deliver end-to-end automation 
              solutions that drive measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} className={`hover-lift cursor-pointer group animate-fade-in-up delay-${index * 100}`}>
                <CardContent className="p-6">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors duration-200">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-primary text-white px-8 py-4 rounded-lg mr-4">
              <Link to="/services">Explore Automation Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-4 rounded-lg">
              <Link to="/klaviyo">Klaviyo for Shopify</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Featured Success Story
              </div>
              <h2 className="text-4xl font-display text-gray-900 mb-6">
                {caseStudies[0].results.timeReduction} Time Reduction for {caseStudies[0].client}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {caseStudies[0].challenge}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{caseStudies[0].results.timeReduction}</div>
                  <div className="text-gray-600 font-medium">Time Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{caseStudies[0].results.costSavings}</div>
                  <div className="text-gray-600 font-medium">Annual Savings</div>
                </div>
              </div>
              <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 mb-8">
                "{caseStudies[0].testimonial}"
                <footer className="mt-2 font-medium text-gray-900">
                  - {caseStudies[0].clientName}, {caseStudies[0].clientTitle}
                </footer>
              </blockquote>
              <Button asChild className="btn-primary text-white px-6 py-3 rounded-lg">
                <Link to="/case-studies">View All Case Studies</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heroImages.transformation} 
                alt="Automation Success"
                className="w-full rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <TrendingUp size={24} className="text-green-600" />
                  <div>
                    <div className="font-bold text-gray-900">ROI Achieved</div>
                    <div className="text-green-600 font-semibold">340%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Ready to Automate Your Success?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the enterprises that have transformed their operations with our expert automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="btn-accent text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift"
            >
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <span>Start Your Free Consultation</span>
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg" 
              className="glass text-white border-white/30 font-semibold px-8 py-4 text-lg rounded-lg hover:bg-white/10"
            >
              <Link to="/about">Learn About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;