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

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Cookie Information</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies We Use</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <table className="w-full text-sm text-gray-700">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 font-semibold">Cookie Name</th>
                    <th className="text-left py-2 font-semibold">Purpose</th>
                    <th className="text-left py-2 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">cookieConsent</td>
                    <td className="py-3">Stores your cookie preferences</td>
                    <td className="py-3">1 year</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">session_id</td>
                    <td className="py-3">Maintains your session across pages</td>
                    <td className="py-3">Session</td>
                  </tr>
                  <tr>
                    <td className="py-3">csrf_token</td>
                    <td className="py-3">Security protection against cross-site attacks</td>
                    <td className="py-3">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies help us understand how visitors use our website. All information collected is anonymous and used only to improve our services:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-gray-700">
                <li><strong>Google Analytics (_ga, _gid, _gat):</strong> Tracks page views, user sessions, and website performance metrics. Duration: 2 years (_ga), 24 hours (_gid)</li>
                <li><strong>Microsoft Clarity (_clck, _clsk):</strong> Records user interactions through heatmaps and session recordings to improve UX. Duration: 1 year (_clck), session (_clsk)</li>
                <li><strong>Hotjar (_hjid, _hjIncludedInSample):</strong> Analyzes user behavior and collects feedback. Duration: 1 year</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              With your consent, we use marketing cookies to show you relevant advertisements and measure campaign effectiveness:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <ul className="space-y-3 text-gray-700">
                <li><strong>Facebook Pixel (_fbp):</strong> Tracks conversions from Facebook ads and creates custom audiences. Duration: 90 days</li>
                <li><strong>Google Ads (_gcl_au):</strong> Measures ad performance and attribution. Duration: 90 days</li>
                <li><strong>LinkedIn Insight Tag (_li_id):</strong> Tracks website visits from LinkedIn campaigns. Duration: 180 days</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Cookie Management Guide</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Chrome</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                  <li>Click the three-dot menu in the top-right corner</li>
                  <li>Select "Settings"</li>
                  <li>Click "Privacy and security" in the left sidebar</li>
                  <li>Select "Cookies and other site data"</li>
                  <li>Choose your preferred cookie settings:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Allow all cookies</li>
                      <li>Block third-party cookies in Incognito</li>
                      <li>Block third-party cookies</li>
                      <li>Block all cookies (not recommended - may break sites)</li>
                    </ul>
                  </li>
                  <li>To delete existing cookies, click "See all cookies and site data" → "Remove all"</li>
                </ol>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Mozilla Firefox</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                  <li>Click the menu button and select "Settings"</li>
                  <li>Select "Privacy & Security" from the left menu</li>
                  <li>Under "Cookies and Site Data", click "Manage Data"</li>
                  <li>Choose enhanced tracking protection level:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Standard (blocks social media trackers, cross-site cookies)</li>
                      <li>Strict (blocks trackers in all windows)</li>
                      <li>Custom (choose what to block)</li>
                    </ul>
                  </li>
                  <li>To clear cookies, click "Clear Data" and select "Cookies and Site Data"</li>
                </ol>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Safari (Mac)</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                  <li>Open Safari and click "Safari" in the menu bar</li>
                  <li>Select "Preferences"</li>
                  <li>Click the "Privacy" tab</li>
                  <li>Choose your cookie preferences:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Check "Prevent cross-site tracking" (recommended)</li>
                      <li>Check "Block all cookies" (may affect site functionality)</li>
                    </ul>
                  </li>
                  <li>To remove cookies, click "Manage Website Data" → "Remove All"</li>
                </ol>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Microsoft Edge</h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                  <li>Click the three-dot menu and select "Settings"</li>
                  <li>Click "Cookies and site permissions"</li>
                  <li>Click "Manage and delete cookies and site data"</li>
                  <li>Configure your preferences:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Toggle "Block third-party cookies" on/off</li>
                      <li>Add sites to allow or block lists</li>
                    </ul>
                  </li>
                  <li>To clear cookies, click "See all cookies and site data" → "Remove all"</li>
                </ol>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mobile Device Cookie Management</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">iPhone/iPad (iOS)</h3>
            <ol className="list-decimal pl-6 text-gray-700 mb-6">
              <li>Open "Settings" app</li>
              <li>Scroll down and tap "Safari"</li>
              <li>Tap "Clear History and Website Data" to remove all cookies</li>
              <li>Or under "Privacy & Security", toggle "Prevent Cross-Site Tracking" and "Block All Cookies"</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Android Devices</h3>
            <ol className="list-decimal pl-6 text-gray-700 mb-8">
              <li>Open Chrome app</li>
              <li>Tap three-dot menu → "Settings"</li>
              <li>Tap "Site settings" → "Cookies"</li>
              <li>Choose to allow, block third-party, or block all cookies</li>
              <li>To clear cookies: Settings → Privacy → Clear browsing data → Cookies and site data</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Impact of Disabling Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While you can disable cookies, please be aware of the potential impact:
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Essential Cookies Blocked:</strong> The website may not function properly, forms may not submit, and you'll need to re-enter preferences on each visit.</li>
                <li><strong>Analytics Cookies Blocked:</strong> We won't be able to improve the website based on user behavior data, but functionality remains intact.</li>
                <li><strong>Marketing Cookies Blocked:</strong> You'll still see ads, but they may be less relevant to your interests. No impact on website functionality.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Cookie Choices and GDPR Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Under the EU General Data Protection Regulation (GDPR) and ePrivacy Directive, you have specific rights regarding cookies:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Right to Consent:</strong> We must obtain your explicit consent before placing non-essential cookies.</li>
              <li><strong>Right to Withdraw:</strong> You can withdraw cookie consent at any time through our cookie settings.</li>
              <li><strong>Right to Information:</strong> We must clearly explain what cookies we use and why.</li>
              <li><strong>Right to Access:</strong> You can request information about data collected through cookies.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              To exercise these rights or change your cookie preferences, click the "Cookie Settings" link in our website footer or contact us directly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We may update this Cookie Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. We will notify you of any significant changes by:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Posting the new policy on this page with an updated "Last updated" date</li>
              <li>Displaying a prominent notice on our homepage for 30 days</li>
              <li>Sending an email notification if you've subscribed to our communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us About Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href={`mailto:${companyData.contact.email}`} className="text-blue-600 hover:text-blue-800">{companyData.contact.email}</a></p>
              <p className="text-gray-700 mb-2"><strong>Subject Line:</strong> Cookie Policy Inquiry</p>
              <p className="text-gray-700"><strong>Response Time:</strong> We aim to respond within 48 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default CookiesPage;