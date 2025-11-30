import React, { useState } from 'react';
import { TrendingUp, Clock, DollarSign, Target, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { caseStudies } from '../data/mock';

const CaseStudiesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  
  const industries = ['All', ...new Set(caseStudies.map(study => study.industry))];
  
  const filteredCaseStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Automation Success Stories & Case Studies",
    "description": "Real results from enterprise automation implementations across industries",
    "url": "https://devaland.com/case-studies"
  };

  return (
    <>
      <SEO 
        title="Case Studies - Proven Automation & AI Success Stories | Devaland Results"
        description="See how we've helped e-commerce businesses achieve remarkable results through automation, AI chatbots, Voice AI agents, and Klaviyo email marketing. Real case studies with measurable ROI and 10x returns."
        canonical="https://devaland.com/case-studies"
        keywords={[
          "automation case studies",
          "klaviyo success stories",
          "RPA case studies",
          "workflow automation results",
          "email marketing case studies",
          "automation ROI"
        ]}
        schema={caseStudiesSchema}
      />
      
      <div className="pt-16">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb 
          items={[
            { label: 'Case Studies', href: '/case-studies' }
          ]}
        />
      </div>
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display text-gray-900 mb-6">
              Proven Success Stories
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              See how we've helped enterprises across industries achieve remarkable results through 
              strategic automation implementation and intelligent process optimization.
            </p>
            
            {/* Results Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-gray-600 font-medium">Average Time Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$630k</div>
                <div className="text-gray-600 font-medium">Average Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
                <div className="text-gray-600 font-medium">Average Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">340%</div>
                <div className="text-gray-600 font-medium">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedIndustry === industry 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredCaseStudies.map((study, index) => (
              <Card key={study.id} className={`hover-lift animate-fade-in-up delay-${index * 200}`}>
                <div className="grid lg:grid-cols-2 gap-8">
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-blue-100 text-blue-800">{study.industry}</Badge>
                    </div>
                    <CardTitle className="text-3xl font-display text-gray-900 mb-4">
                      {study.client}
                    </CardTitle>
                    
                    {/* Challenge */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <Target size={20} className="text-red-500 mr-2" />
                        The Challenge
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <TrendingUp size={20} className="text-blue-500 mr-2" />
                        Our Solution
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 mb-6">
                      "{study.testimonial}"
                      <footer className="mt-3 font-medium text-gray-900 not-italic">
                        - {study.clientName}, {study.clientTitle}
                      </footer>
                    </blockquote>
                  </CardHeader>

                  <CardContent className="p-8 bg-gray-50">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Measurable Results</h3>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <Clock size={24} className="text-blue-500 mx-auto mb-2" />
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          {study.results.timeReduction}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">Time Reduction</div>
                      </div>
                      
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <DollarSign size={24} className="text-green-500 mx-auto mb-2" />
                        <div className="text-3xl font-bold text-green-600 mb-1">
                          {study.results.costSavings}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">Annual Savings</div>
                      </div>
                      
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm col-span-2">
                        <TrendingUp size={24} className="text-purple-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-purple-600 mb-1">
                          {study.results.hoursSaved}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">Hours Saved Monthly</div>
                      </div>
                    </div>

                    {/* Accuracy Badge */}
                    <div className="text-center p-4 bg-gradient-primary rounded-lg text-white">
                      <div className="text-2xl font-bold mb-1">{study.results.accuracy}</div>
                      <div className="text-sm opacity-90">Process Accuracy</div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the growing list of enterprises that have transformed their operations with our proven automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="btn-accent text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift"
            >
              <Link to="/contact" className="inline-flex items-center space-x-2">
                <span>Start Your Transformation</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="glass text-white border-white/30 font-semibold px-8 py-4 text-lg rounded-lg hover:bg-white/10"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default CaseStudiesPage;