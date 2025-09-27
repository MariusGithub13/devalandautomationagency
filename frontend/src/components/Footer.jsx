import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { companyData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <span className="text-2xl font-display">{companyData.name}</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                {companyData.description}
              </p>
              <Button 
                asChild
                className="btn-accent text-white font-medium px-6 py-3 rounded-lg hover-lift"
              >
                <Link to="/contact" className="inline-flex items-center space-x-2">
                  <span>Start Your Automation Journey</span>
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <nav className="space-y-4">
                <Link to="/services" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Our Services
                </Link>
                <Link to="/case-studies" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Case Studies
                </Link>
                <Link to="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
                <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Blog & Insights
                </Link>
                <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-400 flex-shrink-0" />
                  <a 
                    href={`mailto:${companyData.contact.email}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {companyData.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-400 flex-shrink-0" />
                  <a 
                    href={`tel:${companyData.contact.phone}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {companyData.contact.phone}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <address className="text-gray-300 not-italic">
                    {companyData.contact.address}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} {companyData.name}. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;