import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';
import { companyData } from '../data/mock';

const ContactPage = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    toast.success('Thank you! We\'ll contact you within 24 hours to schedule your consultation.');
    
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
  };

  return (
    <div className="pt-16">
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
                            <SelectItem value="rpa">RPA Development</SelectItem>
                            <SelectItem value="workflow">Workflow Automation</SelectItem>
                            <SelectItem value="ai">AI & Chatbot Solutions</SelectItem>
                            <SelectItem value="integration">System Integration</SelectItem>
                            <SelectItem value="consulting">Automation Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget" className="text-sm font-medium text-gray-700">
                          Budget Range
                        </Label>
                        <Select 
                          value={formData.budget}
                          onValueChange={(value) => handleSelectChange('budget', value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select budget range" />
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
                        {companyData.contact.address}<br />
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
        </div>
      </section>
    </div>
  );
};

export default ContactPage;