import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import { services } from '../data/mock';

const ServicesPage = () => {
  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display text-gray-900 mb-6">
              Enterprise Automation Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Strategic automation solutions designed for enterprise-scale transformation. 
              From process discovery to full implementation, we architect intelligent systems 
              that deliver measurable ROI.
            </p>
            <Button asChild size="lg" className="btn-primary text-white px-8 py-4 rounded-lg">
              <Link to="/contact">Schedule Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {categories.map((category, categoryIndex) => (
        <section key={category} className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800">{category}</Badge>
              <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">
                {category === 'Process-Specific Automation' ? 
                  'Business Process Automation' : 
                  'Technical Implementation Services'}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                {category === 'Process-Specific Automation' ? 
                  'Streamline your core business processes with intelligent automation that eliminates manual work and reduces operational costs.' :
                  'Advanced technical solutions using cutting-edge automation platforms and custom development to solve complex enterprise challenges.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.filter(service => service.category === category).map((service, index) => (
                <Card key={service.id} className={`hover-lift animate-fade-in-up delay-${index * 200}`}>
                  <CardHeader className="pb-4">
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-64 object-cover hover-scale"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Tools Used */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="secondary" className="bg-gray-100 text-gray-700">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Outcomes</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600">
                            <CheckCircle size={16} className="text-green-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      asChild
                      className="w-full btn-primary text-white py-3 rounded-lg group"
                    >
                      <Link to="/contact" className="inline-flex items-center justify-center space-x-2">
                        <span>Discuss This Service</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Our Proven Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every automation project follows our systematic approach to ensure successful delivery and maximum ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "Comprehensive process audit and automation opportunity identification."
              },
              {
                step: "02", 
                title: "Strategy & Design",
                description: "Custom automation architecture design aligned with business objectives."
              },
              {
                step: "03",
                title: "Development & Testing", 
                description: "Agile development with continuous testing and validation protocols."
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Seamless implementation with comprehensive training and ongoing support."
              }
            ].map((phase, index) => (
              <Card key={index} className={`glass border-white/20 animate-fade-in-up delay-${index * 100}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{phase.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-300">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our automation solutions can drive growth and efficiency in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="btn-accent text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift"
            >
              <Link to="/contact">Book Free Automation Audit</Link>
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
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;