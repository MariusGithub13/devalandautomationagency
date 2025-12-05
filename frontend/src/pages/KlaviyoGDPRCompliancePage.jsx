import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileCheck, Users, Globe, AlertTriangle, CheckCircle, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { companyData } from '../data/mock';

const KlaviyoGDPRCompliancePage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Klaviyo GDPR compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Klaviyo is GDPR compliant and has achieved ISO 27001, ISO 27018, and ISO 27701 certifications. Klaviyo provides tools for consent management, data access requests, data deletion, and transparent privacy policies. However, businesses using Klaviyo must configure these features correctly and follow GDPR best practices."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need double opt-in for GDPR compliance in Klaviyo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While double opt-in isn't strictly required by GDPR, it's considered best practice for email marketing consent. Double opt-in provides clear proof of consent, reduces spam complaints, improves email deliverability, and demonstrates compliance with GDPR's requirement for explicit, freely-given consent. Single opt-in can be GDPR-compliant if properly documented."
        }
      },
      {
        "@type": "Question",
        "name": "How long can I store customer data in Klaviyo under GDPR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GDPR requires storing personal data only as long as necessary for the stated purpose. For active email subscribers, data can be retained indefinitely while they remain subscribed. For inactive subscribers (no engagement for 12-24 months), consider data deletion or re-confirmation campaigns. After unsubscribe, retain minimal data (email + opt-out status) to prevent re-adding."
        }
      },
      {
        "@type": "Question",
        "name": "What are GDPR fines for non-compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GDPR fines can reach up to €20 million or 4% of annual global turnover (whichever is higher). Common violations include lack of consent documentation (€10-50K for SMBs), failure to respond to data requests within 30 days (€5-30K), and inadequate privacy policies (€15-75K). Regular audits and proper Klaviyo configuration prevent violations."
        }
      },
      {
        "@type": "Question",
        "name": "How do I handle GDPR data access requests in Klaviyo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Navigate to the profile, click 'Export Profile Data', and Klaviyo generates a complete data export including profile information, segment memberships, email activity, and custom properties. You must respond within 30 days of request. For data deletion requests, use the 'Delete Profile' feature which removes all personal data except minimal anti-spam records."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use Klaviyo for B2B email marketing under GDPR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but B2B marketing has different consent requirements. For EU business contacts, legitimate interest may apply for work email addresses, but you must provide opt-out options, maintain transparency, and document your legitimate interest assessment. GDPR protects individual rights even in B2B contexts, so treat business contacts with the same care as B2C."
        }
      }
    ]
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://devaland.com/klaviyo-gdpr-compliance",
    "headline": "Complete Klaviyo GDPR Compliance Guide for E-commerce Businesses",
    "description": "Comprehensive guide to GDPR compliance in Klaviyo email marketing: consent management, data protection, privacy policies, opt-in strategies, and avoiding €20M fines.",
    "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
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
    "datePublished": "2024-12-05",
    "dateModified": "2024-12-05",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://devaland.com/klaviyo-gdpr-compliance"
    }
  };

  return (
    <>
      <SEO 
        title="Klaviyo GDPR Compliance: Complete Guide for E-commerce | Devaland"
        description="Master GDPR compliance in Klaviyo email marketing. Learn consent management, double opt-in setup, data protection, privacy policies, and avoid €20M fines. Expert guide for EU e-commerce businesses."
        canonical="https://devaland.com/klaviyo-gdpr-compliance"
        keywords={[
          "klaviyo gdpr",
          "gdpr compliance email marketing",
          "klaviyo privacy policy",
          "double opt-in klaviyo",
          "klaviyo consent management",
          "gdpr email consent",
          "klaviyo data protection",
          "gdpr fines email marketing"
        ]}
        schema={[pageSchema, faqSchema]}
      />

      <Breadcrumb 
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Klaviyo Email Marketing', href: '/klaviyo' },
          { label: 'GDPR Compliance', href: '/klaviyo-gdpr-compliance' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <ShieldCheck className="w-4 h-4 mr-1" />
                Compliance Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Complete Klaviyo GDPR Compliance Guide
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Navigate GDPR regulations confidently with our comprehensive guide to consent management, data protection, and privacy policies for Klaviyo email marketing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    Get GDPR Compliance Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Link to="/klaviyo">
                    Explore Klaviyo Services
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <ShieldCheck className="w-12 h-12 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">€20M</div>
                  <p className="text-blue-100">Maximum GDPR fine</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <FileCheck className="w-12 h-12 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">30 days</div>
                  <p className="text-blue-100">Data request deadline</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">500M+</div>
                  <p className="text-blue-100">EU citizens protected</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Globe className="w-12 h-12 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">27</div>
                  <p className="text-blue-100">EU member states</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Is Klaviyo GDPR Compliant? */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-green-100 text-green-700 border-green-300 mb-4">
              Platform Certification
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Is Klaviyo GDPR Compliant?
            </h2>
            <p className="text-xl text-gray-600">
              Yes, Klaviyo is GDPR compliant with ISO 27001, 27018, and 27701 certifications. However, compliance also depends on how YOU configure and use the platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Klaviyo's Compliance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ ISO 27001 certified</li>
                  <li>✓ EU data centers available</li>
                  <li>✓ Standard Contractual Clauses</li>
                  <li>✓ Data Processing Agreements</li>
                  <li>✓ Built-in consent tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <AlertTriangle className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Your Responsibilities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Obtain valid consent</li>
                  <li>✓ Document consent records</li>
                  <li>✓ Create privacy policies</li>
                  <li>✓ Handle data requests</li>
                  <li>✓ Configure opt-in forms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <ShieldCheck className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Practices</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Use double opt-in</li>
                  <li>✓ Regular compliance audits</li>
                  <li>✓ Staff training</li>
                  <li>✓ Clear unsubscribe links</li>
                  <li>✓ Transparent data usage</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GDPR Core Principles */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              7 Core GDPR Principles for Email Marketing
            </h2>
            <p className="text-xl text-gray-600">
              Understanding these principles is essential for compliant Klaviyo campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Lawfulness, Fairness, Transparency</h3>
                    <p className="text-gray-600 mb-3">
                      Process data lawfully with explicit consent, be fair in data usage, and transparent about what data you collect and why.
                    </p>
                    <Badge variant="outline">Klaviyo Tool: Consent Management</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-lg p-3 flex-shrink-0">
                    <FileCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Purpose Limitation</h3>
                    <p className="text-gray-600 mb-3">
                      Collect data for specific, explicit purposes and don't use it for unrelated activities without new consent.
                    </p>
                    <Badge variant="outline">Example: Email for marketing only</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 rounded-lg p-3 flex-shrink-0">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Data Minimization</h3>
                    <p className="text-gray-600 mb-3">
                      Only collect data that's necessary for your stated purpose. Don't ask for information you don't need.
                    </p>
                    <Badge variant="outline">Minimal: Email, Name, Consent</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 rounded-lg p-3 flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Accuracy</h3>
                    <p className="text-gray-600 mb-3">
                      Keep personal data accurate and up-to-date. Provide ways for customers to update their information.
                    </p>
                    <Badge variant="outline">Klaviyo: Profile Update Links</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Storage Limitation</h3>
                    <p className="text-gray-600 mb-3">
                      Don't keep personal data longer than necessary. Delete inactive subscribers after 12-24 months.
                    </p>
                    <Badge variant="outline">Best Practice: 24-month retention</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 rounded-lg p-3 flex-shrink-0">
                    <Globe className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Integrity & Confidentiality</h3>
                    <p className="text-gray-600 mb-3">
                      Protect personal data against unauthorized access, loss, or damage using appropriate security measures.
                    </p>
                    <Badge variant="outline">Klaviyo: Enterprise Security</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 rounded-lg p-3 flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">7. Accountability</h3>
                    <p className="text-gray-600 mb-3">
                      Be responsible for and able to demonstrate compliance with GDPR principles. Document your processes and maintain records.
                    </p>
                    <div className="flex gap-2 flex-wrap mt-3">
                      <Badge variant="outline">Consent Records</Badge>
                      <Badge variant="outline">Privacy Policies</Badge>
                      <Badge variant="outline">DPA Agreements</Badge>
                      <Badge variant="outline">Audit Logs</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Double Opt-In Setup */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="bg-blue-100 text-blue-700 border-blue-300 mb-4">
                Best Practice
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Setting Up Double Opt-In in Klaviyo
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Double opt-in provides the strongest proof of consent and is considered GDPR best practice for email marketing compliance.
              </p>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 1: Create Confirmation Email</h3>
                    <p className="text-gray-600 mb-3">
                      In Klaviyo, create a new email template for opt-in confirmation with clear CTA button to confirm subscription.
                    </p>
                    <code className="bg-gray-100 p-2 rounded block text-sm">
                      Settings → Email → Double Opt-in Template
                    </code>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-600">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 2: Enable Double Opt-In</h3>
                    <p className="text-gray-600 mb-3">
                      Navigate to list settings and enable double opt-in requirement for all new subscribers.
                    </p>
                    <code className="bg-gray-100 p-2 rounded block text-sm">
                      Lists & Segments → [List Name] → Settings → Double Opt-in: ON
                    </code>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-600">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 3: Update Signup Forms</h3>
                    <p className="text-gray-600 mb-3">
                      Modify form success messages to inform users about the confirmation email they'll receive.
                    </p>
                    <code className="bg-gray-100 p-2 rounded block text-sm">
                      Forms → [Form Name] → Success Message: "Check your inbox!"
                    </code>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-yellow-600">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 4: Monitor Confirmation Rates</h3>
                    <p className="text-gray-600 mb-3">
                      Track opt-in confirmation rates (target: 60-80%) and optimize email copy if rates are low.
                    </p>
                    <Badge variant="outline" className="mt-2">Typical Rate: 60-80%</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Double Opt-In vs Single Opt-In</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-gray-900">Double Opt-In (Recommended)</span>
                      </div>
                      <ul className="ml-7 space-y-1 text-gray-600">
                        <li>✓ Clear proof of consent</li>
                        <li>✓ Higher engagement rates</li>
                        <li>✓ Better deliverability</li>
                        <li>✓ Fewer spam complaints</li>
                        <li>✓ GDPR best practice</li>
                      </ul>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-600" />
                        <span className="font-semibold text-gray-900">Single Opt-In (Higher Risk)</span>
                      </div>
                      <ul className="ml-7 space-y-1 text-gray-600">
                        <li>⚠️ Weaker consent proof</li>
                        <li>⚠️ More invalid emails</li>
                        <li>⚠️ Lower engagement</li>
                        <li>⚠️ Higher unsubscribe rates</li>
                        <li>⚠️ Compliance concerns</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Consent Documentation</h3>
                  <p className="text-gray-600 mb-4">
                    Klaviyo automatically records consent information including:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Timestamp of subscription</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">IP address of subscriber</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Signup form source URL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Consent method (double/single opt-in)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Subscription list/segment information</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 border-purple-300 mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about Klaviyo GDPR compliance
            </p>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Your Klaviyo GDPR Compliance Audit
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ensure your Klaviyo account is fully GDPR compliant with our comprehensive audit. We'll review consent management, data handling, and provide actionable recommendations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-blue-50"
            >
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                Book GDPR Compliance Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              as={Link}
              to="/klaviyo-case-studies"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default KlaviyoGDPRCompliancePage;
