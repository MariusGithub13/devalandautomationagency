import React from 'react';
import { ArrowRight, CheckCircle, Zap, TrendingUp, Mail, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import { companyData, klaviyoServices, serviceImages, awards, klaviyoSuccessStories, klaviyoStats } from '../data/mock';

const KlaviyoPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-purple-100 text-purple-800">Klaviyo Certified Partners</Badge>
              <h1 className="text-5xl md:text-6xl font-display text-gray-900 mb-6">
                Klaviyo Email Marketing for Growing Shopify Brands
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your Shopify store's email marketing with our expert Klaviyo services. 
                Drive revenue growth through strategic automation flows, advanced segmentation, and data-driven campaigns.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">45%</div>
                  <div className="text-sm text-gray-600">Average Revenue Increase</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">180%</div>
                  <div className="text-sm text-gray-600">Email ROI Improvement</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift"
                >
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                    <span>Get Free Klaviyo Audit</span>
                    <ArrowRight size={20} />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-semibold px-8 py-4 text-lg rounded-lg border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  <a href="#klaviyo-success-stories">View Success Stories</a>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up delay-300">
              <img 
                src={serviceImages.klaviyo}
                alt="Email Marketing Dashboard"
                className="w-full rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding-sm bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Recognized Excellence</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {awards.map((award, index) => (
                <a 
                  key={index}
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="hover-lift text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                        <Zap size={32} className="text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{award.title}</h3>
                      <p className="text-gray-600 text-sm">{award.description}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Complete Klaviyo Email Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of your Shopify email marketing 
              to maximize revenue and customer lifetime value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {klaviyoServices.map((service, index) => (
              <Card key={service.id} className={`hover-lift animate-fade-in-up delay-${index * 200}`}>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      {service.id === 1 && <Mail size={24} className="text-purple-600" />}
                      {service.id === 2 && <Zap size={24} className="text-purple-600" />}
                      {service.id === 3 && <TrendingUp size={24} className="text-purple-600" />}
                      {service.id === 4 && <MessageSquare size={24} className="text-purple-600" />}
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-100 text-green-800 text-sm">
                        {service.results}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle size={16} className="text-purple-600 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg group"
                  >
                    <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-2">
                      <span>Discuss This Service</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Our Proven Klaviyo Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every Klaviyo project follows our systematic approach to ensure maximum ROI and long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit & Strategy",
                description: "Comprehensive analysis of your current email performance and Shopify integration.",
                icon: <TrendingUp size={32} className="text-purple-600" />
              },
              {
                step: "02", 
                title: "Setup & Migration",
                description: "Complete Klaviyo setup with data migration and Shopify integration.",
                icon: <Zap size={32} className="text-purple-600" />
              },
              {
                step: "03",
                title: "Flows & Campaigns", 
                description: "Implementation of high-converting automation flows and targeted campaigns.",
                icon: <Mail size={32} className="text-purple-600" />
              },
              {
                step: "04",
                title: "Optimization & Growth",
                description: "Continuous optimization based on performance data and A/B testing.",
                icon: <ArrowRight size={32} className="text-purple-600" />
              }
            ].map((phase, index) => (
              <Card key={index} className={`text-center hover-lift animate-fade-in-up delay-${index * 100}`}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {phase.icon}
                  </div>
                  <div className="text-sm font-bold text-purple-600 mb-2">STEP {phase.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Why Shopify Brands Choose Our Klaviyo Services
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We're not just another email marketing agency. We're Klaviyo-certified specialists who understand Shopify inside and out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Klaviyo Certified Experts",
                description: "Our team holds official Klaviyo certifications and stays updated with the latest platform features and best practices."
              },
              {
                title: "Shopify Integration Specialists", 
                description: "Deep expertise in Shopify-Klaviyo integration ensures seamless data flow and accurate customer tracking."
              },
              {
                title: "Data-Driven Results",
                description: "Every strategy is backed by data analysis, A/B testing, and performance metrics to maximize your ROI."
              },
              {
                title: "Revenue-First Approach",
                description: "We focus on strategies that directly impact your bottom line, not just vanity metrics like open rates."
              },
              {
                title: "Ongoing Optimization",
                description: "Continuous monitoring and optimization ensure your email marketing performance keeps improving over time."
              },
              {
                title: "Transparent Reporting",
                description: "Monthly reports with clear ROI metrics and actionable insights to track your email marketing success."
              }
            ].map((item, index) => (
              <Card key={index} className={`glass border-white/20 animate-fade-in-up delay-${index * 100}`}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Klaviyo Success Stories */}
      <section id="klaviyo-success-stories" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Klaviyo Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed case studies showcasing our strategic approach and measurable results with Klaviyo email marketing implementations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {klaviyoSuccessStories.map((story, index) => (
              <Card key={story.id} className={`hover-lift animate-fade-in-up delay-${index * 100}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{story.initials}</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{story.client}</CardTitle>
                      <Badge className="bg-purple-100 text-purple-800 mt-1">{story.industry}</Badge>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Timeline:</strong> {story.timeline}
                    </div>
                    <p className="text-gray-700">{story.overview}</p>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-6">
                    {/* Challenges */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        Challenges
                      </h4>
                      <ul className="space-y-1">
                        {story.challenges.map((challenge, i) => (
                          <li key={i} className="text-gray-600 text-sm">&bull; {challenge}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Solutions
                      </h4>
                      <ul className="space-y-1">
                        {story.solutions.map((solution, i) => (
                          <li key={i} className="text-gray-600 text-sm">&bull; {solution}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{story.results.revenueIncrease}</div>
                          <div className="text-xs text-gray-600">Revenue Increase</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{story.results.openRate}</div>
                          <div className="text-xs text-gray-600">Open Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{story.results.clickRate}</div>
                          <div className="text-xs text-gray-600">Click Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">{story.results.conversionRate}</div>
                          <div className="text-xs text-gray-600">Conversion Rate</div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-700">
                      "{story.testimonial}"
                      <footer className="mt-2 font-medium text-gray-900 not-italic">
                        — {story.clientName}, {story.clientTitle}
                      </footer>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Overall Stats */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Real Results, Real Success</h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Discover how we've helped businesses across industries achieve remarkable growth through strategic Klaviyo email marketing implementations.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">{klaviyoStats.averageRevenueIncrease}</div>
                <div className="text-purple-200 text-sm">Average Revenue Increase<br />Across all case studies</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{klaviyoStats.averageOpenRate}</div>
                <div className="text-purple-200 text-sm">Average Open Rate<br />Industry-leading performance</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{klaviyoStats.averageClickRate}</div>
                <div className="text-purple-200 text-sm">Average Click Rate<br />Well above industry average</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{klaviyoStats.clientsServed}</div>
                <div className="text-purple-200 text-sm">Clients Served<br />Successful implementations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the businesses that have transformed their email marketing with our expert Klaviyo services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift"
            >
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                <span>Book Free Klaviyo Audit</span>
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="glass text-white border-white/30 font-semibold px-8 py-4 text-lg rounded-lg hover:bg-white/10"
            >
              <Link to="/case-studies">View Automation Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KlaviyoPage;