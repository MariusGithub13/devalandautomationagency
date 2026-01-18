import React from 'react';
import InternalLinkAutomator from '../components/InternalLinkAutomator';
import { Link } from 'react-router-dom';
import { Mail, Layout, Smartphone, Palette, Zap, Code, ArrowRight, CheckCircle, Eye, MousePointer } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { companyData } from '../data/mock';

const KlaviyoEmailTemplatesPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I create email templates in Klaviyo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Create templates in Klaviyo by navigating to Content > Email Templates > Create Template. Choose between drag-and-drop editor (no coding required) or HTML editor (full customization). Design your layout, add dynamic content blocks, configure mobile optimization, and save as reusable template. Use Klaviyo's template variables for personalization like {{ first_name }} and {{ event.ProductName }}. Test across devices before deploying."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best Klaviyo email template practices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Best practices include: 1) Mobile-first design (60%+ opens on mobile), 2) Single-column layouts for readability, 3) Maximum 600px width for compatibility, 4) Alt text for all images, 5) Clear hierarchy with headings, 6) Single primary CTA per email, 7) Branded header and footer, 8) Dynamic content blocks for personalization, 9) Plain-text alternative versions, 10) Accessibility considerations (contrast, font size 14px+)."
        }
      },
      {
        "@type": "Question",
        "name": "Can I import custom HTML templates into Klaviyo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Klaviyo supports custom HTML templates. Click 'Create Template' > 'HTML Email' > paste your HTML code. Ensure your HTML uses inline CSS (external stylesheets aren't supported), includes Klaviyo tracking code, uses template variables for personalization, and is mobile-responsive with media queries. Test thoroughly as some CSS properties aren't supported by all email clients. Export from design tools like Figma, then optimize for email."
        }
      },
      {
        "@type": "Question",
        "name": "How do I make Klaviyo templates mobile-responsive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use Klaviyo's responsive design features: 1) Drag-and-drop editor auto-generates mobile-responsive code, 2) For HTML templates, use media queries (@media only screen and (max-width: 600px)), 3) Single-column layouts stack automatically, 4) Use percentage widths instead of fixed pixels, 5) Minimum 44x44px touch targets for buttons, 6) Font size 14px+ for mobile readability, 7) Test with Klaviyo's preview tool across devices."
        }
      },
      {
        "@type": "Question",
        "name": "What's the optimal Klaviyo email template width?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Optimal template width is 600-640px. This ensures compatibility with most email clients while remaining readable on desktop and mobile. Narrower templates (600px) are safer for older email clients like Outlook. Use a centered container with max-width: 600px and set to 100% width on mobile devices. This width provides ~8-10 words per line at standard font sizes, optimal for reading comprehension and engagement."
        }
      },
      {
        "@type": "Question",
        "name": "How do I add dynamic content to Klaviyo templates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Add dynamic content using Klaviyo template variables: {{ first_name }} for personalization, {% if %} statements for conditional content, {% for %} loops for product recommendations, {{ event.* }} for flow-triggered data (abandoned cart items, order details), custom property variables like {{ person.favorite_category }}, and dynamic product feeds. Use Klaviyo's drag-and-drop blocks for pre-built dynamic content or write custom liquid code for advanced personalization."
        }
      }
    ]
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://devaland.com/klaviyo-email-templates",
    "headline": "Klaviyo Email Templates: Design Best Practices & Template Library",
    "description": "Master Klaviyo email template design with proven best practices, mobile-responsive layouts, and professional templates that increase click rates by 40%. Complete guide to creating high-converting email designs.",
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
      "@id": "https://devaland.com/klaviyo-email-templates"
    }
  };

  return (
    <>
      <SEO
        title="Klaviyo Email Templates: Design Best Practices & Examples | Devaland"
        description="Master Klaviyo email template design with proven best practices, mobile-responsive layouts, and professional templates that increase click rates by 40%. Complete guide to creating high-converting email designs."
        canonical="https://devaland.com/klaviyo-email-templates"
        keywords={[
          "klaviyo email templates",
          "klaviyo template design",
          "klaviyo html templates",
          "email design klaviyo",
          "klaviyo responsive templates",
          "klaviyo drag and drop",
          "email template best practices",
          "klaviyo template library"
        ]}
        schema={[pageSchema, faqSchema]}
      />

      <Breadcrumb
        items={[
          { label: 'Services', href: '/services' },
          { label: 'Klaviyo Email Marketing', href: '/klaviyo' },
          { label: 'Email Templates', href: '/klaviyo-email-templates' }
        ]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                <Layout className="w-4 h-4 mr-1" />
                Template Design
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                High-Converting Klaviyo Email Templates
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                <InternalLinkAutomator text="Professional email template designs that increase click rates by 40% and conversions by 25%. Mobile-responsive, brand-customized, and optimized for every email client." />
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    Get Custom Templates
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
                  <Eye className="w-12 h-12 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">40%</div>
                  <p className="text-blue-100">Higher click rates</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <MousePointer className="w-12 h-12 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">25%</div>
                  <p className="text-blue-100">More conversions</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Smartphone className="w-12 h-12 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">60%</div>
                  <p className="text-blue-100">Mobile opens</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Zap className="w-12 h-12 text-white mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">600px</div>
                  <p className="text-blue-100">Optimal width</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Template Design Best Practices */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-blue-100 text-blue-700 border-blue-300 mb-4">
              Design Principles
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Email Template Best Practices
            </h2>
            <p className="text-xl text-gray-600">
              <InternalLinkAutomator text="10 proven design principles for high-converting Klaviyo email templates" />
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Mobile-First Design</h3>
                    <p className="text-gray-600 mb-3">
                      60%+ of emails are opened on mobile. Design for mobile first, then enhance for desktop.
                    </p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Single-column layouts</div>
                      <div>• Touch-friendly 44x44px buttons</div>
                      <div>• Font size 14px minimum</div>
                      <div>• Tap targets properly spaced</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layout className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Optimal Width</h3>
                    <p className="text-gray-600 mb-3">
                      600-640px template width ensures compatibility across all email clients.
                    </p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Max-width: 600px</div>
                      <div>• Centered container</div>
                      <div>• 100% width on mobile</div>
                      <div>• Safe for Outlook compatibility</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Visual Hierarchy</h3>
                    <p className="text-gray-600 mb-3">
                      Guide readers through content with clear structure and typography.
                    </p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• H1: 28-36px (main headline)</div>
                      <div>• H2: 22-28px (section headers)</div>
                      <div>• Body: 14-16px (readable)</div>
                      <div>• Single focal point per section</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MousePointer className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Clear Call-to-Action</h3>
                    <p className="text-gray-600 mb-3">
                      Single primary CTA per email with contrasting button design.
                    </p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Action-oriented copy ("Shop Now")</div>
                      <div>• High contrast button color</div>
                      <div>• Above the fold placement</div>
                      <div>• Repeated at email end</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-indigo-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Brand Consistency</h3>
                    <p className="text-gray-600 mb-3">
                      Use brand colors, fonts, logo placement for instant recognition.
                    </p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Logo in header (120-200px)</div>
                      <div>• Brand color palette</div>
                      <div>• Consistent typography</div>
                      <div>• Voice and tone alignment</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-pink-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Image Optimization</h3>
                    <p className="text-gray-600 mb-3">
                      Optimized images load fast and display correctly with images-off.
                    </p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Alt text for all images</div>
                      <div>• Max 1MB per image</div>
                      <div>• Web-optimized formats (JPG/PNG)</div>
                      <div>• Descriptive filenames</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Best Practices</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">7. White Space:</span>
                    <span className="text-gray-600"> Use generous padding (20-40px) for readability and breathing room</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">8. Accessibility:</span>
                    <span className="text-gray-600"> WCAG 2.1 AA contrast ratios (4.5:1 for text), semantic HTML structure</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">9. Dynamic Content:</span>
                    <span className="text-gray-600"> Personalization blocks with Klaviyo variables (first_name, product recommendations)</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">10. Plain Text Version:</span>
                    <span className="text-gray-600"> Always include plain-text alternative for accessibility and deliverability</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Template Types */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="bg-purple-100 text-purple-700 border-purple-300 mb-4">
              Template Library
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Essential Email Template Types
            </h2>
            <p className="text-xl text-gray-600">
              Professional templates for every stage of the customer journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-blue-200 hover:border-blue-500 transition-colors">
              <CardContent className="p-6">
                <Badge className="bg-blue-100 text-blue-700 mb-4">Flow Templates</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Welcome Series</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  3-5 email sequence introducing brand, values, and bestsellers
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">• Brand story template</div>
                  <div className="text-sm text-gray-600">• Product showcase layout</div>
                  <div className="text-sm text-gray-600">• Discount offer design</div>
                  <div className="text-sm text-gray-600">• Social proof template</div>
                </div>
                <Badge variant="outline" className="text-xs">50-60% open rate</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-500 transition-colors">
              <CardContent className="p-6">
                <Badge className="bg-purple-100 text-purple-700 mb-4">Recovery Templates</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Abandoned Cart</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  3-email sequence with product images, reviews, and urgency
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">• Cart summary template</div>
                  <div className="text-sm text-gray-600">• Social proof layout</div>
                  <div className="text-sm text-gray-600">• Incentive offer design</div>
                  <div className="text-sm text-gray-600">• Urgency countdown template</div>
                </div>
                <Badge variant="outline" className="text-xs">8-15% conversion</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-600 hover:border-green-700 transition-colors">
              <CardContent className="p-6">
                <Badge className="bg-green-100 text-green-700 mb-4">Engagement Templates</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Post-Purchase</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Thank you series with usage tips and cross-sell opportunities
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">• Thank you template</div>
                  <div className="text-sm text-gray-600">• Usage tips layout</div>
                  <div className="text-sm text-gray-600">• Cross-sell design</div>
                  <div className="text-sm text-gray-600">• Review request template</div>
                </div>
                <Badge variant="outline" className="text-xs">5-12% repeat rate</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-600 hover:border-orange-700 transition-colors">
              <CardContent className="p-6">
                <Badge className="bg-orange-100 text-orange-700 mb-4">Campaign Templates</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Promotional</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Sale announcements, product launches, seasonal campaigns
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">• Sale announcement template</div>
                  <div className="text-sm text-gray-600">• Flash sale layout</div>
                  <div className="text-sm text-gray-600">• Product launch design</div>
                  <div className="text-sm text-gray-600">• Seasonal campaign template</div>
                </div>
                <Badge variant="outline" className="text-xs">2-5% conversion</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-indigo-200 hover:border-indigo-500 transition-colors">
              <CardContent className="p-6">
                <Badge className="bg-indigo-100 text-indigo-700 mb-4">Content Templates</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Newsletter</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Regular content updates, blog roundups, company news
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">• Article digest template</div>
                  <div className="text-sm text-gray-600">• Company update layout</div>
                  <div className="text-sm text-gray-600">• Blog roundup design</div>
                  <div className="text-sm text-gray-600">• Resource hub template</div>
                </div>
                <Badge variant="outline" className="text-xs">15-25% open rate</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 hover:border-pink-500 transition-colors">
              <CardContent className="p-6">
                <Badge className="bg-pink-100 text-pink-700 mb-4">Re-engagement</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Win-Back</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Re-activate dormant customers with special offers
                </p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">• "We miss you" template</div>
                  <div className="text-sm text-gray-600">• Special offer layout</div>
                  <div className="text-sm text-gray-600">• Preference center design</div>
                  <div className="text-sm text-gray-600">• Final chance template</div>
                </div>
                <Badge variant="outline" className="text-xs">12-15% reactivation</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HTML vs Drag-and-Drop */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Badge className="bg-blue-100 text-blue-700 border-blue-300 mb-4">
                Template Editors
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Drag-and-Drop vs HTML Templates
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Choose the right editor based on your technical expertise and customization needs
              </p>

              <Card className="mb-6 border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Layout className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Drag-and-Drop Editor</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Perfect for marketers without coding experience. Visual builder with pre-built blocks.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">No coding required</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Mobile-responsive automatically</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Quick template creation (15-30 min)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Limited customization options</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Ideal for standard layouts</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-600">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">HTML Editor</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Maximum flexibility for custom designs. Full control over every element.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Complete design freedom</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Advanced personalization</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Custom animations and effects</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Requires HTML/CSS knowledge</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Longer development time (1-3 hours)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 mb-6">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Which Should You Choose?</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Choose Drag-and-Drop If:</h4>
                      <div className="space-y-2 text-gray-600">
                        <div>✓ You need templates quickly</div>
                        <div>✓ No technical team available</div>
                        <div>✓ Standard layouts work for your brand</div>
                        <div>✓ You want easy maintenance</div>
                        <div>✓ Budget-conscious approach</div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Choose HTML Templates If:</h4>
                      <div className="space-y-2 text-gray-600">
                        <div>✓ Brand requires unique designs</div>
                        <div>✓ Technical resources available</div>
                        <div>✓ Complex layouts needed</div>
                        <div>✓ Advanced personalization required</div>
                        <div>✓ Maximum control desired</div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Pro Tip:</p>
                      <p className="text-sm text-gray-600">
                        Start with drag-and-drop for speed, then transition to custom HTML as your program matures and you identify specific design needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Template Development Process</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-semibold text-sm">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Design & Wireframe</h4>
                        <p className="text-sm text-gray-600">Create mockups in Figma or sketch layouts</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 font-semibold text-sm">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Build in Klaviyo</h4>
                        <p className="text-sm text-gray-600">Use editor of choice, add dynamic content</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 font-semibold text-sm">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Test Across Devices</h4>
                        <p className="text-sm text-gray-600">Preview on mobile, tablet, desktop, email clients</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 font-semibold text-sm">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Deploy & Monitor</h4>
                        <p className="text-sm text-gray-600">Launch to campaigns, track performance, iterate</p>
                      </div>
                    </div>
                  </div>
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
              Common questions about Klaviyo email template design
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
                    <InternalLinkAutomator text={faq.acceptedAnswer.text} />
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
          <Mail className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get Professional Klaviyo Email Templates
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Custom-designed, mobile-responsive email templates that increase click rates by 40% and conversions by 25%. Complete template library + ongoing design support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                Get Custom Templates
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/klaviyo-case-studies">
                View Design Examples
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default KlaviyoEmailTemplatesPage;
