import React from 'react';
import { companyData } from '../data/mock';
import SEO from '../components/SEO';

const TermsPage = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions - Devaland Automation Agency | Service Agreement"
        description="Read Devaland's terms and conditions for our automation services, AI chatbots, and email marketing solutions. Understanding our service agreements and client responsibilities."
        canonical="https://devaland.com/terms"
        keywords={['terms and conditions', 'service agreement', 'terms of use', 'legal terms', 'client agreement']}
      />
    <div className="pt-16">
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display text-gray-900 mb-8">Terms and Conditions</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> January 2025
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to Devaland Marketing Agency!
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              These terms and conditions outline the rules and regulations for the use of Devaland Marketing Agency's Website, located at www.devaland.com.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Devaland Marketing Agency if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The website uses cookies to help personalize your online experience. By accessing Devaland Marketing Agency, you agree to use the required cookies.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You can accept or decline optional Cookies. Some required Cookies are necessary for the operation of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">License</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Unless otherwise stated, Devaland Marketing Agency and/or its licensors own the intellectual property rights for all material on Devaland Marketing Agency. All intellectual property rights are reserved. You may access this from Devaland Marketing Agency for your personal use subject to restrictions set in these terms and conditions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">You must not:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Copy or republish material from Devaland Marketing Agency</li>
              <li>Sell, rent, or sub-license material from Devaland Marketing Agency</li>
              <li>Reproduce, duplicate, or copy material from Devaland Marketing Agency</li>
              <li>Redistribute content from Devaland Marketing Agency</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comments and User Content</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Parts of this website offer users an opportunity to post and exchange opinions and information in certain areas of the website. Devaland Marketing Agency does not filter, edit, publish, or review Comments before their presence on the website. Comments do not reflect the views and opinions of Devaland Marketing Agency, its agents, and/or affiliates.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Devaland Marketing Agency shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">You warrant and represent that:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so</li>
              <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party</li>
              <li>The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy</li>
              <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Hyperlinking to Our Content</h2>
            <p className="text-gray-700 leading-relaxed mb-4">The following organizations may link to our Website without prior written approval:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Government agencies</li>
              <li>Search engines</li>
              <li>News organizations</li>
              <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses</li>
              <li>System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are raised on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Agreements</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you engage Devaland for automation services, you agree to the following terms:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Scope and Deliverables</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All projects begin with a detailed scope of work document outlining deliverables, timelines, and acceptance criteria. Changes to the agreed scope may result in additional fees and timeline adjustments. We reserve the right to refuse service modifications that fall outside our expertise or ethical guidelines.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Terms</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unless otherwise specified in your project agreement:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>A 50% deposit is required to initiate project work</li>
              <li>The remaining 50% is due upon project completion and client approval</li>
              <li>Monthly retainer services are billed at the beginning of each month</li>
              <li>Late payments may result in service suspension and interest charges of 1.5% per month</li>
              <li>All fees are quoted in EUR unless otherwise specified</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Client Responsibilities</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To ensure successful project delivery, clients agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Provide timely access to necessary platforms, accounts, and information</li>
              <li>Respond to requests for feedback and approvals within agreed timeframes</li>
              <li>Ensure all provided content is original or properly licensed</li>
              <li>Maintain backup copies of their data</li>
              <li>Not request services that violate applicable laws or third-party terms of service</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Intellectual Property Rights</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Upon full payment, clients receive ownership of custom deliverables created specifically for their project. However, Devaland retains rights to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Proprietary tools, templates, and methodologies used in service delivery</li>
              <li>General knowledge and techniques developed during the project</li>
              <li>Use the project as a case study (with client's written permission)</li>
              <li>Reusable code components and frameworks</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund and Cancellation Policy</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Refund Eligibility</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We stand behind the quality of our work. You may be eligible for a refund if:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>We fail to deliver agreed-upon services within the specified timeline (excluding delays caused by client)</li>
              <li>Delivered work significantly deviates from approved specifications</li>
              <li>Technical implementation fails to function as demonstrated in the proposal</li>
              <li>We breach material terms of the service agreement</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Non-Refundable Items</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Initial consultation fees and discovery phase work</li>
              <li>Third-party software licenses or subscriptions purchased on your behalf</li>
              <li>Completed work that has been approved and accepted</li>
              <li>Services already rendered, even if the project is incomplete</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cancellation Terms</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Either party may terminate the agreement with written notice:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li><strong>Client Cancellation:</strong> You may cancel within 14 days of signing for a full refund (minus work already completed). After 14 days, you are responsible for payment for all completed work.</li>
              <li><strong>Devaland Cancellation:</strong> We may terminate the agreement if client breaches terms, fails to provide necessary access/information, or engages in abusive behavior toward our team.</li>
              <li><strong>Monthly Services:</strong> Either party may cancel with 30 days written notice. No refunds for partial months.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by applicable law:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Our total liability for any claim shall not exceed the amount paid by you for the services in the 12 months preceding the claim</li>
              <li>We are not liable for indirect, incidental, special, consequential, or punitive damages</li>
              <li>We are not responsible for losses resulting from client's failure to maintain data backups</li>
              <li>We are not liable for third-party platform changes, outages, or policy violations</li>
              <li>We do not guarantee specific business results, revenue increases, or ROI (unless explicitly stated in writing)</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">Nothing in these terms will:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Limit or exclude our liability for death or personal injury caused by negligence</li>
              <li>Limit or exclude our liability for fraud or fraudulent misrepresentation</li>
              <li>Limit any liability in a way that is not permitted under applicable law</li>
              <li>Exclude any liability that may not be excluded under applicable law</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Warranty and Service Guarantees</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We warrant that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Services will be performed with reasonable skill and care</li>
              <li>We have the right and authority to provide the agreed services</li>
              <li>Delivered work will be free from material defects for 30 days post-delivery</li>
              <li>We will fix bugs and errors in our work at no additional charge within the warranty period</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              This warranty does not cover issues arising from: client modifications to our work, third-party platform updates, misuse of implemented systems, or failure to follow our maintenance recommendations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              In the event of any dispute, controversy, or claim arising out of or relating to these Terms:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 mb-8">
              <li className="mb-2"><strong>Negotiation:</strong> The parties shall first attempt to resolve the dispute through good-faith negotiations within 30 days.</li>
              <li className="mb-2"><strong>Mediation:</strong> If negotiation fails, the parties agree to mediation before pursuing legal action.</li>
              <li className="mb-2"><strong>Jurisdiction:</strong> These Terms shall be governed by and construed in accordance with the laws of Romania. Any legal proceedings shall be subject to the exclusive jurisdiction of the courts of Hunedoara County, Romania.</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Both parties agree to keep confidential any proprietary information shared during the course of the business relationship. This obligation survives termination of services and continues for 3 years thereafter. Confidential information does not include information that is publicly available, independently developed, or required to be disclosed by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Neither party shall be liable for failure to perform obligations due to events beyond reasonable control, including but not limited to: natural disasters, war, terrorism, pandemic, labor disputes, government actions, or interruption of internet/telecommunications services. In such events, the affected party will notify the other promptly and make reasonable efforts to resume performance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at <a href={`mailto:${companyData.contact.email}`} className="text-blue-600 hover:text-blue-800">{companyData.contact.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default TermsPage;