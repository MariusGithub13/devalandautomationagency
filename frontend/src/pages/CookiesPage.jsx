import React from 'react';
import { companyData } from '../data/mock';
import SEO from '../components/SEO';

const CookiesPage = () => {
  return (
    <>
      <SEO 
        title="Cookie Policy - Devaland Automation Agency | Website Cookies Explained"
        description="Learn about how Devaland uses cookies to enhance your browsing experience. Our cookie policy explains what cookies we use and how to manage your preferences."
        canonical="https://devaland.com/cookies"
        keywords={['cookie policy', 'website cookies', 'cookie consent', 'browser cookies', 'cookie management']}
      />
    <div className="pt-16">
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display text-gray-900 mb-8">Cookie Policy</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> January 2025
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We use cookies to understand how you use our website, remember your preferences, and improve our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            
            <div className="grid gap-6 mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p className="text-gray-700">Required for the website to function properly. These cookies enable core functionality such as security, network management, and accessibility.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="text-gray-700">Help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                <p className="text-gray-700">Remember your preferences and choices to provide enhanced, personalized features.</p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                <p className="text-gray-700">Used to deliver relevant advertisements and track the effectiveness of our advertising campaigns.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can control and manage cookies through your browser settings. Most browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Important Note</h4>
              <p className="text-gray-700">
                Please note that disabling cookies may affect the functionality of our website. Some features may not work properly if cookies are disabled.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Control Cookies in Popular Browsers:</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We may use third-party services that place cookies on your device. These are governed by the respective third parties' privacy policies. Some of our third-party partners include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Google Analytics for website analytics</li>
              <li>Microsoft Clarity for user behavior analysis</li>
              <li>Social media platforms for sharing functionality</li>
              <li>Advertising partners for targeted marketing</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent and Preferences</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you first visit our website, you'll see a cookie consent banner. You can choose to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Accept all cookies</li>
              <li>Accept only necessary cookies</li>
              <li>Customize your preferences</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              You can change your cookie preferences at any time by clicking on the cookie settings link in our website footer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new policy on our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at <a href={`mailto:${companyData.contact.email}`} className="text-blue-600 hover:text-blue-800">{companyData.contact.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default CookiesPage;