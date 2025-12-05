import React from 'react';
import { CheckCircle, Shield, AlertCircle, Download, ArrowRight, FileText, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { companyData } from '../data/mock';

const KlaviyoGDPRPage = () => {
  const gdprSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Klaviyo GDPR Compliance Guide for E-commerce Stores",
        "description": "Complete guide to making your Klaviyo email marketing GDPR-compliant. Includes setup checklist, consent forms, and privacy policy templates.",
        "author": {
          "@type": "Organization",
          "name": "Devaland Marketing S.R.L."
        },
        "publisher": {
          "@type": "Organization",
          "name": "Devaland Marketing S.R.L.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg"
          }
        },
        "datePublished": "2025-12-05",
        "dateModified": "2025-12-05"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is Klaviyo GDPR compliant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Klaviyo is GDPR compliant as a platform and has signed Data Processing Agreements (DPAs) with EU customers. However, YOUR implementation must also be GDPR-compliant by implementing double opt-in, clear consent, unsubscribe options, and proper data handling procedures."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need double opt-in for Klaviyo GDPR compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, double opt-in is required for GDPR compliance when collecting email addresses from EU residents. Klaviyo provides built-in double opt-in functionality that sends a confirmation email before adding subscribers to your list, ensuring explicit consent."
            }
          },
          {
            "@type": "Question",
            "name": "How do I handle GDPR data deletion requests in Klaviyo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Klaviyo provides tools to handle GDPR deletion requests: 1) Use the profile deletion feature to remove customer data permanently, 2) Export data before deletion if requested, 3) Document all deletion requests for compliance records, 4) Complete deletion within 30 days of request."
            }
          },
          {
            "@type": "Question",
            "name": "What consent language do I need for Klaviyo GDPR compliance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your consent forms must include: 1) Clear explanation of what emails they'll receive, 2) Frequency of communications, 3) Link to privacy policy, 4) Explicit checkbox (not pre-checked), 5) Easy unsubscribe instructions, 6) Statement about data processing and storage."
            }
          },
          {
            "@type": "Question",
            "name": "Does Klaviyo have a Data Processing Agreement (DPA)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Klaviyo offers a standard DPA that covers GDPR requirements. You can access and sign the DPA through your Klaviyo account settings under Privacy & Security. The DPA outlines how Klaviyo processes and protects customer data on your behalf."
            }
          }
        ]
      }
    ]
  };

  const complianceChecklist = [
    {
      category: "Legal Foundation",
      items: [
        "Sign Klaviyo's Data Processing Agreement (DPA)",
        "Update your privacy policy to mention Klaviyo",
        "Create clear terms of service for email communications",
        "Document your legal basis for processing (consent, contract, legitimate interest)",
        "Appoint a Data Protection Officer if required"
      ]
    },
    {
      category: "Consent Management",
      items: [
        "Implement double opt-in for all email signups",
        "Use clear, affirmative consent language (no pre-checked boxes)",
        "Provide granular consent options (marketing vs transactional)",
        "Record consent timestamps and sources in Klaviyo",
        "Obtain re-consent for existing subscribers if needed"
      ]
    },
    {
      category: "Data Collection",
      items: [
        "Collect only necessary data for email marketing",
        "Clearly explain what data you collect and why",
        "Link to privacy policy on all signup forms",
        "Implement age verification for minors",
        "Secure data transmission with HTTPS and encryption"
      ]
    },
    {
      category: "Subscriber Rights",
      items: [
        "Provide easy unsubscribe in every email",
        "Offer preference center for granular control",
        "Enable data access requests (export profile data)",
        "Implement data deletion/erasure process",
        "Allow data portability (export in readable format)",
        "Respond to requests within 30 days"
      ]
    },
    {
      category: "Technical Implementation",
      items: [
        "Configure Klaviyo double opt-in settings",
        "Set up GDPR-compliant signup forms",
        "Enable Klaviyo's built-in unsubscribe functionality",
        "Implement cookie consent for Klaviyo tracking",
        "Regular data audits and cleanup of inactive profiles"
      ]
    }
  ];

  const setupSteps = [
    {
      step: 1,
      title: "Sign Klaviyo's DPA",
      description: "Navigate to Account Settings → Privacy & Security → Sign the Data Processing Agreement to establish legal framework.",
      icon: FileText
    },
    {
      step: 2,
      title: "Enable Double Opt-In",
      description: "Settings → Email → Double Opt-In. Customize confirmation email with clear consent language and brand voice.",
      icon: Shield
    },
    {
      step: 3,
      title: "Update Signup Forms",
      description: "Add explicit consent checkbox, link to privacy policy, and clear explanation of email frequency and content.",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "Configure Preference Center",
      description: "Create preference page where subscribers manage their consent, email frequency, and data preferences.",
      icon: Lock
    },
    {
      step: 5,
      title: "Implement Data Request Process",
      description: "Set up internal workflow to handle GDPR data access, portability, and deletion requests within 30 days.",
      icon: AlertCircle
    },
    {
      step: 6,
      title: "Update Privacy Policy",
      description: "Add section about Klaviyo usage, data processing, third-party sharing, and subscriber rights under GDPR.",
      icon: FileText
    }
  ];

  const commonMistakes = [
    {
      mistake: "Using single opt-in only",
      fix: "Enable Klaviyo's double opt-in feature for all EU subscribers",
      severity: "Critical"
    },
    {
      mistake: "Pre-checked consent boxes",
      fix: "Use explicit, unchecked consent checkboxes on all forms",
      severity: "Critical"
    },
    {
      mistake: "No unsubscribe link in emails",
      fix: "Klaviyo adds this automatically - ensure it's not removed from templates",
      severity: "Critical"
    },
    {
      mistake: "Vague privacy policy language",
      fix: "Specifically mention Klaviyo, data storage locations, and processing purposes",
      severity: "High"
    },
    {
      mistake: "No consent records",
      fix: "Use Klaviyo's consent tracking features and custom properties to record consent details",
      severity: "High"
    },
    {
      mistake: "Ignoring data deletion requests",
      fix: "Respond within 30 days and permanently delete data using Klaviyo's deletion tools",
      severity: "Critical"
    },
    {
      mistake: "Collecting unnecessary data",
      fix: "Only collect data essential for email marketing - avoid excessive profiling",
      severity: "Medium"
    },
    {
      mistake: "No cookie consent for tracking",
      fix: "Implement cookie banner that controls Klaviyo's website tracking scripts",
      severity: "High"
    }
  ];

  return (
    <>
      <SEO 
        title="Klaviyo GDPR Compliance Guide 2025 | Complete Setup Checklist"
        description="Make your Klaviyo email marketing GDPR-compliant. Step-by-step guide with double opt-in setup, consent forms, DPA signing, privacy policy templates & data deletion procedures. Free compliance checklist included."
        canonical="https://devaland.com/klaviyo-gdpr-compliance"
        keywords={[
          "klaviyo gdpr compliance",
          "klaviyo gdpr",
          "klaviyo double opt-in",
          "klaviyo privacy policy",
          "klaviyo data processing agreement",
          "klaviyo consent management",
          "klaviyo dpa",
          "gdpr email marketing",
          "klaviyo gdpr checklist",
          "klaviyo data deletion"
        ]}
        schema={gdprSchema}
      />
      
      <div className="pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb 
            items={[
              { label: 'Resources', href: '/blog' },
              { label: 'Klaviyo GDPR Compliance', href: '/klaviyo-gdpr-compliance' }
            ]}
          />
        </div>

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">GDPR Compliance Guide</Badge>
            <h1 className="text-5xl md:text-6xl font-display text-gray-900 mb-6">
              Klaviyo GDPR Compliance Guide for E-commerce
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Complete step-by-step guide to making your Klaviyo email marketing GDPR-compliant. 
              Includes setup checklist, consent forms, privacy policy requirements, and data handling procedures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-lg"
              >
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                  <span>Get GDPR Audit</span>
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="font-semibold px-8 py-4 text-lg rounded-lg"
              >
                <a href="#checklist">View Checklist</a>
              </Button>
            </div>

            <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
              <CheckCircle size={16} className="text-green-600" />
              <span>Last updated: December 2025 • GDPR-compliant since 2018</span>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield size={48} className="mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2">GDPR Basics</h3>
                  <p className="text-gray-600">
                    Understand GDPR requirements for email marketing and Klaviyo's built-in compliance features
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText size={48} className="mx-auto mb-4 text-purple-600" />
                  <h3 className="text-xl font-semibold mb-2">Step-by-Step Setup</h3>
                  <p className="text-gray-600">
                    6-step implementation guide with screenshots and configuration examples
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Download size={48} className="mx-auto mb-4 text-green-600" />
                  <h3 className="text-xl font-semibold mb-2">Free Templates</h3>
                  <p className="text-gray-600">
                    Downloadable consent forms, privacy policy sections, and compliance checklists
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Is Klaviyo GDPR Compliant? */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-6">
              Is Klaviyo GDPR Compliant?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Yes</strong>, Klaviyo as a platform is GDPR-compliant and provides all necessary tools for compliance. 
                However, <strong>your implementation</strong> must also follow GDPR requirements. Simply using Klaviyo doesn't 
                automatically make your email marketing compliant.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">What Klaviyo Provides:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span>Data Processing Agreement (DPA) covering GDPR requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span>Built-in double opt-in functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span>Automatic unsubscribe links in all emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span>Consent tracking and record-keeping features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span>Data export and deletion tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span>EU data center options for data residency</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">What YOU Must Configure:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <span>Enable and configure double opt-in settings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <span>Create GDPR-compliant consent forms and checkboxes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <span>Update your privacy policy with Klaviyo details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <span>Implement processes for data requests and deletions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                    <span>Set up preference centers for subscriber control</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Setup Steps */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-12 text-center">
              6-Step Klaviyo GDPR Setup Guide
            </h2>
            <div className="space-y-8">
              {setupSteps.map((item) => (
                <Card key={item.step} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <item.icon size={24} className="text-blue-600" />
                          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Checklist */}
        <section id="checklist" className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-12 text-center">
              Complete GDPR Compliance Checklist
            </h2>
            <div className="space-y-8">
              {complianceChecklist.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="text-green-600" size={24} />
                      {section.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 border-2 border-gray-300 rounded mt-0.5"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button 
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg rounded-lg"
              >
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download PDF Checklist</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-12 text-center">
              Common GDPR Compliance Mistakes (And How to Fix Them)
            </h2>
            <div className="space-y-6">
              {commonMistakes.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant={item.severity === "Critical" ? "destructive" : "default"}>
                            {item.severity}
                          </Badge>
                          <h3 className="text-lg font-semibold text-gray-900">{item.mistake}</h3>
                        </div>
                        <p className="text-gray-600 flex items-start gap-2">
                          <CheckCircle size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Fix:</strong> {item.fix}</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display mb-6">
              Need Help with Klaviyo GDPR Compliance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our Klaviyo experts will audit your setup, identify compliance gaps, and implement 
              all necessary GDPR requirements—so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg"
              >
                <a href={companyData.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2">
                  <span>Book Free GDPR Audit</span>
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg rounded-lg"
              >
                <Link to="/klaviyo">View Klaviyo Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display text-gray-900 mb-8 text-center">
              Related Klaviyo Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link to="/blog/10-klaviyo-automation-flows-every-e-commerce-store-needs" className="text-blue-600 hover:text-blue-700">
                      Best Klaviyo Automation Flows →
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    10 essential automation flows to increase revenue by 45%
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link to="/klaviyo" className="text-blue-600 hover:text-blue-700">
                      Klaviyo Email Marketing Services →
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Expert Klaviyo setup, flows, and campaign management
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KlaviyoGDPRPage;
