import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { companyData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Horizontal separator */}
      <div className="bg-gray-200 h-px"></div>
      
      <footer className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <img 
                    src={companyData.logo} 
                    alt={companyData.name}
                    className="h-10 w-auto object-contain"
                  />
                  <span className="text-2xl font-display text-gray-900">{companyData.name}</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-md">
                  {companyData.description}
                </p>
                <Button 
                  asChild
                  className="btn-primary text-white font-medium px-6 py-3 rounded-lg hover-lift mb-6"
                >
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                    <span>Start Your Automation Journey</span>
                    <ArrowRight size={16} />
                  </a>
                </Button>

                {/* Social media moved to bottom section */}
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-gray-900">Quick Links</h3>
                <nav className="space-y-4">
                  <Link to="/klaviyo" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Klaviyo Services
                  </Link>
                  <Link to="/services" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Automation Services
                  </Link>
                  <Link to="/case-studies" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Case Studies
                  </Link>
                  <Link to="/about" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    About Us
                  </Link>
                  <Link to="/blog" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Blog & Insights
                  </Link>
                  <Link to="/contact" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-gray-900">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-blue-600 flex-shrink-0" />
                    <a 
                      href={`mailto:${companyData.contact.email}`}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-blue-600 flex-shrink-0" />
                    <a 
                      href={`tel:${companyData.contact.phone}`}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      {companyData.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <address className="text-gray-600 not-italic">
                      {companyData.contact.address}<br />
                      <span className="text-sm text-gray-500">{companyData.contact.addressNote}</span>
                    </address>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin size={18} className="text-blue-600 flex-shrink-0" />
                    <a 
                      href={companyData.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      Company LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal separator */}
          <div className="border-t border-gray-200"></div>

          {/* Bottom Footer */}
          <div className="py-8">
            {/* Centered Copyright Information */}
            <div className="text-center mb-4">
              <div className="text-gray-500 text-sm mb-2">
                Copyright © 2025 · DEVALAND MARKETING SRL · All Rights Reserved.
              </div>
              <div className="text-gray-500 text-sm">
                C.I.F./VAT Number: RO50841395. Trade Registry: ROONRC.J2024039063003.
              </div>
            </div>
            
            {/* Centered Legal Links */}
            <div className="flex flex-wrap justify-center items-center space-x-6 text-sm mb-8">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                Terms & Conditions
              </Link>
              <Link to="/cookies" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link to="/gdpr" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">
                GDPR
              </Link>
            </div>

            {/* Centered Trustpilot Widget */}
            <div className="text-center mb-6">
              {/* Fallback link with Trustpilot styling */}
              <a 
                href="https://www.trustpilot.com/review/devaland.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-100 border-2 border-green-300 rounded-lg text-green-800 hover:bg-green-200 transition-colors duration-200 font-medium"
              >
                ⭐ Review us on Trustpilot
              </a>
              
              {/* TrustBox widget - Review Collector (Hidden by default, shown when script loads) */}
              <div 
                className="trustpilot-widget mx-auto mt-4 hidden" 
                data-locale="en-US" 
                data-template-id="56278e9abfbbba0bdcd568bc" 
                data-businessunit-id="68d4dd4d6b90a6eb23a0d4f2" 
                data-style-height="52px" 
                data-style-width="300px" 
                data-token="5f80adc7-1101-44a7-9566-608788cd2550"
                style={{maxWidth: '300px', margin: '0 auto'}}
              >
                <a href="https://www.trustpilot.com/review/devaland.com" target="_blank" rel="noopener">
                  Trustpilot
                </a>
              </div>
              {/* End TrustBox widget */}
            </div>

            {/* Centered Social Media Links */}
            <div className="text-center">
              {/* Social Media Icons */}
              <div className="flex items-center justify-center space-x-4 mb-4">
                <a 
                  href="https://www.linkedin.com/in/marius-andronie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/dreamvillage13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/mariusandronie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.youtube.com/@devaland13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>

              {/* Social Media Text Links */}
              <div className="text-sm text-gray-500 space-y-1">
                <div>Follow us: 
                  <a href="https://www.linkedin.com/in/marius-andronie/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ml-1">LinkedIn</a> • 
                  <a href="https://www.facebook.com/dreamvillage13" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ml-1">Facebook</a> • 
                  <a href="https://www.instagram.com/mariusandronie/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 ml-1">Instagram</a> • 
                  <a href="https://www.youtube.com/@devaland13" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 ml-1">YouTube</a>
                </div>
                <div>Company: 
                  <a href={companyData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ml-1">Devaland LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          {/* Final horizontal separator */}
          <div className="border-t border-gray-200"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;