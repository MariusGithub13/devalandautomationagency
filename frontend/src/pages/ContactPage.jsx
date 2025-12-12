import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import InternalLinkBlock from '../components/InternalLinkBlock';
import { companyData } from '../data/mock';
import { sendTrustpilotInvitation, generateReferenceId } from '../utils/trustpilot';

const ContactPage = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Devaland",
    "description": "Get in touch with our automation experts for a free consultation",
    "url": "https://devaland.com/contact"
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    message: '',
    budget: '',
    shopifyStore: '',
    emailListSize: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Additional validation for Klaviyo Shopify service
    if (formData.projectType === 'klaviyo-shopify' && !formData.shopifyStore) {
      toast.error('Please provide your Shopify store website address');
      return;
    }

    try {
      // Submit form to Netlify Function
      // In production, Netlify Functions are available at /.netlify/functions/[function-name]
      const apiUrl = process.env.REACT_APP_API_URL || '/.netlify/functions';
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      if (process.env.NODE_ENV === 'development') {
        console.log('✅ Form submitted successfully:', result);
      }

      // Show success message
      const successMessage = formData.projectType === 'klaviyo-shopify' 
        ? 'Thank you! We\'ll contact you within 24 hours to schedule your Klaviyo automation audit for your Shopify store.'
        : 'Thank you! We\'ll contact you within 24 hours to schedule your consultation.';
      
      toast.success(successMessage);
      
      // Send Trustpilot invitation after successful form submission
      const referenceId = generateReferenceId('Contact');
      if (process.env.NODE_ENV === 'development') {
        console.log('📧 Sending Trustpilot invitation...', {
          email: formData.email,
          name: formData.name,
          referenceId: referenceId
        });
      }
      
      try {
        const invitationSent = await sendTrustpilotInvitation({
          recipientEmail: formData.email,
          recipientName: formData.name,
          referenceId: referenceId
        });
        
        if (invitationSent) {
          if (process.env.NODE_ENV === 'development') {
            console.log('✅ Trustpilot invitation sent successfully');
          }
          toast.success('🎉 You\'ll receive a review invitation from Trustpilot via email!', {
            duration: 6000
          });
        } else {
          if (process.env.NODE_ENV === 'development') {
            console.warn('⚠️ Trustpilot invitation may not have been sent');
          }
          toast.info('Note: Review invitation is pending. You may receive it shortly.', {
            duration: 5000
          });
        }
      } catch (trustpilotError) {
        if (process.env.NODE_ENV === 'development') {
          console.error('❌ Trustpilot invitation error:', trustpilotError);
        }
        // Don't show error to user since form submission was successful
        // Just log it for debugging
      }
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        message: '',
        budget: '',
        shopifyStore: '',
        emailListSize: ''
      });
      
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('❌ Form submission error:', error);
      }
      toast.error('Failed to submit form. Please try again or contact us directly at office@devaland.com');
    }
  };

  return (
    <>
      <SEO 
        title="Contact Devaland - Free Automation Consultation | AI Chatbots & Email Marketing"
        description="Get in touch with our automation experts. Schedule a free consultation to discover how AI chatbots, Voice AI, Klaviyo email marketing, RPA, and workflow automation can transform your business. 24-hour response guarantee."
        canonical="https://devaland.com/contact"
        keywords={[
          "contact automation agency",
          "free automation consultation",
          "klaviyo consultation",
          "RPA consultation"
        ]}
        schema={contactSchema}
      />
      
      <div className="pt-16">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb 
          items={[
            { label: 'Contact', href: '/contact' }
          ]}
        />
      </div>
      
      {/* Hero Section */}
      <section className="section-padding-sm bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display text-gray-900 mb-6">
              Let's Automate Your Success
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your operations? Schedule a free consultation and discover 
              how our automation solutions can drive growth for your enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Calendly CTA */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display text-gray-900 mb-4">
            Need to Talk Right Away?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Skip the form and schedule your free consultation directly
          </p>
          <a
            href={companyData.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center btn-primary text-white font-semibold py-4 px-8 text-lg rounded-lg group hover-lift transition-all duration-200"
          >
            <span>Schedule Call Now</span>
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl font-display">Book Your Free Automation Audit</CardTitle>
                  <p className="text-gray-600">
                    Tell us about your challenges and we'll show you exactly how automation can solve them.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Smith"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Business Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                          Company Name *
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company Inc."
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectType" className="text-sm font-medium text-gray-700">
                          Project Type
                        </Label>
                        <Select 
                          value={formData.projectType}
                          onValueChange={(value) => handleSelectChange('projectType', value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="klaviyo-shopify">Klaviyo Automation Services for Growing Shopify Store</SelectItem>
                            <SelectItem value="rpa">Robotic Process Automation (RPA) Development</SelectItem>
                            <SelectItem value="workflow">Workflow Automation</SelectItem>
                            <SelectItem value="ai">Voice AI Agents & Chatbot Solutions</SelectItem>
                            <SelectItem value="integration">System Integration</SelectItem>
                            <SelectItem value="consulting">Automation Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget" className="text-sm font-medium text-gray-700">
                          {formData.projectType === 'klaviyo-shopify' 
                            ? 'Monthly Revenue from Shopify' 
                            : 'Budget Range'}
                        </Label>
                        <Select 
                          value={formData.budget}
                          onValueChange={(value) => handleSelectChange('budget', value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder={
                              formData.projectType === 'klaviyo-shopify' 
                                ? 'Select your monthly revenue range' 
                                : 'Select budget range'
                            } />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10k-25k">$10k - $25k</SelectItem>
                            <SelectItem value="25k-50k">$25k - $50k</SelectItem>
                            <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                            <SelectItem value="100k+">$100k+</SelectItem>
                            <SelectItem value="not-sure">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Shopify-specific fields - shown when Klaviyo Shopify service is selected */}
                    {formData.projectType === 'klaviyo-shopify' && (
                      <div className="grid md:grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div>
                          <Label htmlFor="shopifyStore" className="text-sm font-medium text-gray-700">
                            Shopify Store Website *
                          </Label>
                          <Input
                            id="shopifyStore"
                            name="shopifyStore"
                            type="url"
                            value={formData.shopifyStore}
                            onChange={handleInputChange}
                            placeholder="https://yourstore.myshopify.com"
                            className="mt-1"
                            required={formData.projectType === 'klaviyo-shopify'}
                          />
                        </div>
                        <div>
                          <Label htmlFor="emailListSize" className="text-sm font-medium text-gray-700">
                            Current Email List Size
                          </Label>
                          <Select 
                            value={formData.emailListSize}
                            onValueChange={(value) => handleSelectChange('emailListSize', value)}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select list size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-1k">0 - 1,000 subscribers</SelectItem>
                              <SelectItem value="1k-5k">1,000 - 5,000 subscribers</SelectItem>
                              <SelectItem value="5k-10k">5,000 - 10,000 subscribers</SelectItem>
                              <SelectItem value="10k-25k">10,000 - 25,000 subscribers</SelectItem>
                              <SelectItem value="25k-50k">25,000 - 50,000 subscribers</SelectItem>
                              <SelectItem value="50k+">50,000+ subscribers</SelectItem>
                              <SelectItem value="no-list">No email list yet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your current challenges, processes you'd like to automate, and what success looks like for your organization..."
                        rows={5}
                        className="mt-1"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full btn-primary text-white font-semibold py-4 text-lg rounded-lg group"
                    >
                      <span>Schedule Free Consultation</span>
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      We'll contact you within 24 hours to schedule your consultation
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl font-display">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <a 
                        href={`mailto:${companyData.contact.email}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {companyData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone size={24} className="text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Phone / WhatsApp</div>
                      <a 
                        href={`tel:${companyData.contact.phone}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {companyData.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <MapPin size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Office</div>
                      <address className="text-gray-600 not-italic">
                        Sântandrei 13, Simeria 335903,<br />
                        Hunedoara County, Transylvania, Romania<br />
                        <span className="text-sm italic">{companyData.contact.addressNote}</span>
                      </address>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Clock size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Business Hours</div>
                      <div className="text-gray-600">{companyData.contact.businessHours}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl font-display">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        step: "1",
                        title: "Initial Consultation",
                        description: "We'll discuss your challenges and explore automation opportunities."
                      },
                      {
                        step: "2",
                        title: "Process Analysis",
                        description: "Our experts will analyze your current workflows and identify optimization areas."
                      },
                      {
                        step: "3",
                        title: "Custom Proposal",
                        description: "Receive a detailed proposal with ROI projections and implementation timeline."
                      },
                      {
                        step: "4",
                        title: "Project Kickoff",
                        description: "Begin your automation journey with our proven implementation methodology."
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {item.step}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-gray-600 text-sm">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle size={24} className="text-blue-600" />
                    <span className="font-medium text-gray-900">Why Choose Us?</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Free initial consultation & process audit</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Guaranteed ROI or money back</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>24/7 support & maintenance included</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>Enterprise-grade security & compliance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Learn More About Our Services */}
          <div className="max-w-7xl mx-auto mt-16 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4">
                Learn More About Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our proven automation solutions and resources before scheduling your consultation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <InternalLinkBlock
                title="Klaviyo Email Marketing"
                description="Expert Klaviyo implementation to increase email revenue by 30-45%"
                links={[
                  { label: "Klaviyo Services", to: "/klaviyo" },
                  { label: "10 Essential Flows", to: "/blog/best-10-klaviyo-automation-flows-every-ecommerce-store-needs" },
                  { label: "Segmentation Strategies", to: "/klaviyo-segmentation-strategies" },
                  { label: "Black Friday Strategy", to: "/klaviyo-black-friday-strategy" }
                ]}
                variant="accent"
              />

              <InternalLinkBlock
                title="Voice AI Solutions"
                description="24/7 AI customer support that reduces costs by 60%"
                links={[
                  { label: "Voice AI Services", to: "/voice-ai" },
                  { label: "Pricing Comparison", to: "/blog/voice-ai-pricing-comparison-2025" },
                  { label: "Implementation Guide", to: "/blog/voice-ai-implementation-real-business-results-roi-analysis-technical-guide" },
                  { label: "Small Business Guide", to: "/blog/ai-voice-assistants-small-business-guide-2025" }
                ]}
                variant="default"
              />

              <InternalLinkBlock
                title="Success Stories & Resources"
                description="Real results from businesses that transformed with our solutions"
                links={[
                  { label: "Case Studies", to: "/case-studies" },
                  { label: "All Services", to: "/services" },
                  { label: "About Our Team", to: "/about" },
                  { label: "Blog & Resources", to: "/blog" }
                ]}
                variant="minimal"
              />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">Get answers to common questions about our automation services</p>
            </div>
            <div className="grid gap-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to implement automation solutions?</h3>
                  <p className="text-gray-600">Implementation timelines vary based on project complexity. Simple Klaviyo automation flows can be set up within 1-2 weeks, while comprehensive Voice AI chatbot integrations typically take 3-4 weeks. We provide a detailed timeline during your initial consultation and keep you updated throughout the process.</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your pricing structure?</h3>
                  <p className="text-gray-600">We offer flexible pricing based on your specific needs and project scope. Our Klaviyo services start from €500/month for basic automation setups, while Voice AI chatbots begin at €1,200 for initial implementation plus monthly maintenance. Every project includes a free consultation where we provide a detailed quote with ROI projections.</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide ongoing support after implementation?</h3>
                  <p className="text-gray-600">Yes! All our packages include comprehensive post-implementation support. We offer 24/7 monitoring, regular optimization updates, performance reporting, and dedicated account management. Our goal is not just to implement solutions but to ensure they continue delivering results as your business grows.</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you integrate with our existing systems?</h3>
                  <p className="text-gray-600">Absolutely! We specialize in seamless integrations with popular platforms like Shopify, WooCommerce, Magento, HubSpot, Salesforce, and many others. Our team has extensive experience working with various APIs and can create custom integrations for proprietary systems. During the discovery phase, we audit your current tech stack to ensure smooth integration.</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What makes Devaland different from other automation agencies?</h3>
                  <p className="text-gray-600">Our approach combines technical expertise with business strategy. Unlike agencies that just implement tools, we focus on understanding your business goals and crafting custom solutions that deliver measurable ROI. We're based in Europe (Romania), offering competitive pricing without compromising on quality. Plus, our guaranteed ROI policy means you only pay if we deliver results.</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you work with businesses outside Europe?</h3>
                  <p className="text-gray-600">Yes! While we're based in Romania, we serve clients globally. We've successfully delivered automation projects for businesses in the US, UK, Australia, and across Europe. We work in multiple time zones and ensure seamless communication through scheduled calls, project management tools, and regular status updates. All our services are delivered remotely with the same quality standards regardless of location.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ContactPage;