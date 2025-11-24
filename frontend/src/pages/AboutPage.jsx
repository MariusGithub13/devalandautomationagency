import React from 'react';
import { ArrowRight, Users, Award, Target, Lightbulb, ExternalLink, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { companyData, team, heroImages, awards } from '../data/mock';

const AboutPage = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Devaland Automation Agency",
    "description": "Learn about our mission to transform enterprise operations through intelligent automation",
    "url": "https://devaland.com/about"
  };

  return (
    <>
      <SEO 
        title="About Us - Enterprise Automation Experts"
        description="Founded to transform how enterprises operate, Devaland has grown to a leading automation agency trusted worldwide. Learn about our team, mission, and values driving digital transformation."
        canonical="https://devaland.com/about"
        keywords={[
          "automation agency",
          "devaland team",
          "automation experts",
          "klaviyo partner",
          "RPA specialists"
        ]}
        schema={aboutSchema}
      />
      
      <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-display text-gray-900 mb-6">
                Pioneering the Future of Enterprise Automation
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded with the vision to transform how enterprises operate, {companyData.name} has grown 
                from a boutique consultancy to a leading automation agency trusted by businesses worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that intelligent automation isn't just about replacing manual processes—it's about 
                unlocking human potential and creating competitive advantages that drive sustainable growth.
              </p>
              <Button asChild size="lg" className="btn-primary text-white px-8 py-4 rounded-lg">
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">Partner With Us</a>
              </Button>
            </div>
            <div className="animate-fade-in-up delay-300">
              <img 
                src={heroImages.secondary} 
                alt="Modern Office"
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by principles that drive excellence and innovation in every automation solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-lift animate-fade-in-up">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target size={32} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Partnership</h3>
                <p className="text-gray-600 leading-relaxed">
                  We embed ourselves in your business to understand your unique challenges and architect 
                  solutions that align with your strategic objectives.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift animate-fade-in-up delay-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We stay at the forefront of automation technology, leveraging the latest tools and 
                  methodologies to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift animate-fade-in-up delay-400">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award size={32} className="text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Measurable Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every project is tied to clear KPIs like cost savings, time reduction, and error elimination, 
                  ensuring tangible business value.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display text-gray-900 mb-6">
                Why Enterprises Choose {companyData.name}
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Deep-Dive Discovery Process",
                    description: "We don't just automate existing processes—we optimize them first. Our comprehensive analysis identifies hidden inefficiencies and opportunities."
                  },
                  {
                    title: "Technology-Agnostic Approach", 
                    description: "We recommend and implement the best tool for each specific challenge, whether it's UiPath, Klaviyo, custom development, or cloud-native solutions."
                  },
                  {
                    title: "Enterprise-Scale Expertise",
                    description: "Our team has implemented automation solutions for organizations processing millions of transactions, handling complex compliance requirements."
                  },
                  {
                    title: "Ongoing Partnership",
                    description: "Beyond implementation, we provide continuous optimization, monitoring, and support to ensure your automation investment delivers long-term value."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImages.transformation} 
                alt="Team Collaboration"
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{companyData.stats.yearsExperience}</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{companyData.stats.projectsDelivered}</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans with deep expertise in automation strategy, technical implementation, 
              and business process optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.id} className={`hover-lift animate-fade-in-up delay-${index * 200}`}>
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-2">Expertise:</div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      >
                        <Linkedin size={16} />
                        <span className="text-sm font-medium">Connect on LinkedIn</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display mb-6">Industry Recognition</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading industry organizations and publications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="glass border-white/20 group hover-lift">
                <CardContent className="p-6 text-center">
                  <Award size={48} className="text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                  <p className="text-white/80 mb-4">{award.description}</p>
                  <a 
                    href={award.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">View Recognition</span>
                    <ExternalLink size={14} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-display text-gray-900 mb-6">Company Information</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <span className="font-semibold text-gray-900">Legal Name:</span> {companyData.legal.companyName}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">VAT Number:</span> {companyData.legal.vatNumber}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Trade Registry:</span> {companyData.legal.tradeRegistry}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Date of Incorporation:</span> {companyData.legal.dateOfIncorporation}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">CAEN Code:</span> {companyData.legal.caenCode}
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-display text-gray-900 mb-6">Contact Details</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <span className="font-semibold text-gray-900">Address:</span><br />
                  {companyData.contact.address}<br />
                  <span className="text-sm italic">{companyData.contact.addressNote}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Business Hours:</span> {companyData.contact.businessHours}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Phone:</span> {companyData.contact.phone}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Email:</span> {companyData.contact.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Ready to Partner With Industry Leaders?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the enterprises that trust us to transform their operations through intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="btn-accent text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift"
            >
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <span>Schedule Discovery Call</span>
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="glass text-white border-white/30 font-semibold px-8 py-4 text-lg rounded-lg hover:bg-white/10"
            >
              <Link to="/services">Explore Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutPage;