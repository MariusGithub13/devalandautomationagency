import React from 'react';
import { companyData } from '../data/mock';
import SEO from '../components/SEO';

const PrivacyPage = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - Devaland Automation Agency | Data Protection & Security"
        description="Learn how Devaland protects your personal data and privacy. Our comprehensive privacy policy covers data collection, usage, and your rights under GDPR."
        canonical="https://devaland.com/privacy"
        keywords={['privacy policy', 'data protection', 'GDPR compliance', 'personal data', 'privacy rights']}
      />
    <div className="pt-16">
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> January 2025
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Devaland Marketing Agency website is owned by {companyData.legal.companyName}, which is a data controller of your personal data.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We have adopted this Privacy Policy, which determines how we are processing the information collected by Devaland Marketing Agency, and also provides the reasons why we must collect certain personal data about you. So, you'll need to read this Privacy Policy before using the Devaland Marketing Agency website.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              We take care of your data and ensure it's confidential and safe.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you visit or log into our website, we use cookies and similar technologies to collect certain information about your visit. This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Usage Data:</strong> Information about how you use our site, such as pages visited, time spent on pages, and links clicked.</li>
              <li><strong>Device Information:</strong> Details about the device you use to access our site, including IP address, browser type, and operating system.</li>
              <li><strong>Personal Data:</strong> If you provide it, we may collect information such as your email address, phone number, or other contact details.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-6">
              We may also combine this information collected automatically with other data we receive from third-party sources, such as data providers and marketing partners, to create a more complete profile of you. We then use this profile to communicate with you, including providing personalized advertising and promotional content based on your interests and browsing behavior. You may opt out of this at any time.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically collected information as "Device Information."
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>Microsoft Clarity Partnership:</strong> We partner with Microsoft Clarity and Microsoft Advertising to capture how you use and interact with our website through behavioral metrics, heatmaps, and session replay to improve and market our products/services. Website usage data is captured using first and third-party cookies and other tracking technologies to determine the popularity of products/services and online activity. Additionally, we use this information for site optimization, fraud/security purposes, and advertising. For more information about how Microsoft collects and uses your data, visit the Microsoft Privacy Statement.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Do We Process Your Data?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our top priority is customer data security, and, as such, we may process only minimal user data, as much as it is necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website's features, or you wish to receive our newsletter or provide other details by filling out a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Under GDPR</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a European resident, you have the following rights related to your data:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>The right to be informed:</strong> You have the right to know what data we collect and how we use it.</li>
              <li><strong>The right of access:</strong> You can request a copy of all personal data we hold about you.</li>
              <li><strong>The right to rectification:</strong> You can ask us to correct inaccurate or incomplete data.</li>
              <li><strong>The right to erasure:</strong> Also known as "the right to be forgotten," you can request deletion of your personal data.</li>
              <li><strong>The right to restrict processing:</strong> You can request that we limit how we use your data.</li>
              <li><strong>The right to data portability:</strong> You can request your data in a structured, commonly used format.</li>
              <li><strong>The right to object:</strong> You can object to certain types of processing, including direct marketing.</li>
              <li><strong>Rights about automated decision-making and profiling:</strong> You can request human review of automated decisions.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              To exercise any of these rights, please contact us using the information provided at the end of this policy. We will respond to your request within 30 days as required by GDPR.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Specifically:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li><strong>Contact Form Data:</strong> Retained for up to 3 years to maintain business records and fulfill our contractual obligations.</li>
              <li><strong>Analytics Data:</strong> Anonymized and aggregated data may be retained indefinitely for statistical purposes.</li>
              <li><strong>Marketing Consent Records:</strong> Retained for 7 years to comply with legal requirements and demonstrate GDPR compliance.</li>
              <li><strong>Communication Records:</strong> Email correspondence and chat logs retained for 2 years for customer service purposes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. If you are located outside Romania and choose to provide information to us, please note that we transfer data, including personal data, to Romania and process it there.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              When we transfer personal data outside the European Economic Area (EEA), we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission or ensuring the recipient is Privacy Shield certified.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Processing Activities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process your personal data for the following specific purposes:
            </p>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Service Delivery</h4>
                <p className="text-gray-700 text-sm"><strong>Legal Basis:</strong> Contract performance</p>
                <p className="text-gray-700 text-sm"><strong>Purpose:</strong> To provide automation services, respond to inquiries, and manage client relationships.</p>
                <p className="text-gray-700 text-sm"><strong>Data Categories:</strong> Name, email, phone number, company information, project details.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Website Analytics</h4>
                <p className="text-gray-700 text-sm"><strong>Legal Basis:</strong> Legitimate interest</p>
                <p className="text-gray-700 text-sm"><strong>Purpose:</strong> To understand user behavior, improve website performance, and optimize user experience.</p>
                <p className="text-gray-700 text-sm"><strong>Data Categories:</strong> IP address, browser type, pages visited, time on site, referring URLs.</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Marketing Communications</h4>
                <p className="text-gray-700 text-sm"><strong>Legal Basis:</strong> Consent</p>
                <p className="text-gray-700 text-sm"><strong>Purpose:</strong> To send newsletters, promotional materials, and relevant product updates (only with your explicit consent).</p>
                <p className="text-gray-700 text-sm"><strong>Data Categories:</strong> Email address, name, communication preferences.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately. If we become aware that we have collected personal data from children without verification of parental consent, we will take steps to remove that information from our servers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We reserve the right to update this Privacy Policy at any time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to periodically review this Privacy Policy to stay informed about how we protect your information. For significant changes, we will notify you via email (if you have provided your email address) or through a prominent notice on our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Links to Other Websites</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our website may contain links to other websites that may not be owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Security</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We secure the information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We will disclose any information we collect, use, or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email at <a href={`mailto:${companyData.contact.email}`} className="text-blue-600 hover:text-blue-800">{companyData.contact.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default PrivacyPage;