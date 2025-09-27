import React from 'react';
import { Shield, CheckCircle, UserCheck, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { companyData } from '../data/mock';

const GDPRPage = () => {
  return (
    <div className="pt-16">
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={40} className="text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">GDPR Compliance</h1>
            <p className="text-xl text-gray-600">
              At Devaland Marketing, we are fully committed to complying with the General Data Protection Regulation (GDPR).
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is GDPR?</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy for all individuals within the European Union (EU) and the European Economic Area (EEA). It also addresses the export of personal data outside the EU and EEA areas. The GDPR aims primarily to give control to citizens and residents over their personal data and to simplify the regulatory environment for international business by unifying the regulation within the EU.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment to GDPR</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {companyData.legal.companyName} has implemented a variety of measures to ensure we are GDPR compliant. We have reviewed and updated our internal processes, policies, and documentation to meet the requirements of the regulation.
            </p>
          </div>

          {/* GDPR Principles */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={20} className="text-green-600" />
                  </div>
                  <span>Lawfulness & Transparency</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We process personal data lawfully, fairly, and in a transparent manner.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserCheck size={20} className="text-blue-600" />
                  </div>
                  <span>Purpose Limitation</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We collect personal data for specified, explicit, and legitimate purposes only.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Lock size={20} className="text-purple-600" />
                  </div>
                  <span>Data Minimization</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We only collect personal data that is adequate, relevant, and necessary.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Shield size={20} className="text-orange-600" />
                  </div>
                  <span>Integrity & Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We ensure appropriate security measures to protect your personal data.</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Under GDPR</h2>
            <p className="text-gray-700 leading-relaxed mb-4">As a data subject, you have several rights under GDPR:</p>
            
            <div className="grid gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">📋 Right to be Informed</h4>
                <p className="text-gray-700 text-sm">You have the right to be informed about the collection and use of your personal data.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">🔍 Right of Access</h4>
                <p className="text-gray-700 text-sm">You have the right to access your personal data and supplementary information.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">✏️ Right to Rectification</h4>
                <p className="text-gray-700 text-sm">You have the right to have inaccurate personal data rectified or completed if incomplete.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">🗑️ Right to Erasure</h4>
                <p className="text-gray-700 text-sm">You have the right to have your personal data erased (the "right to be forgotten").</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">⏸️ Right to Restrict Processing</h4>
                <p className="text-gray-700 text-sm">You have the right to request the restriction or suppression of your personal data.</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">📤 Right to Data Portability</h4>
                <p className="text-gray-700 text-sm">You have the right to obtain and reuse your personal data across different services.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Exercise Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you wish to exercise any of your rights under GDPR, please contact us at <a href={`mailto:${companyData.contact.email}`} className="text-blue-600 hover:text-blue-800">{companyData.contact.email}</a>. We will respond to your request within one month of receipt.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Our Data Protection Officer</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about our GDPR compliance or our privacy practices, please contact us at:
              </p>
              <div className="text-gray-700">
                <strong>{companyData.legal.companyName}</strong><br />
                {companyData.contact.address}<br />
                Email: <a href={`mailto:${companyData.contact.email}`} className="text-blue-600 hover:text-blue-800">{companyData.contact.email}</a><br />
                Phone: <a href={`tel:${companyData.contact.phone}`} className="text-blue-600 hover:text-blue-800">{companyData.contact.phone}</a>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Monitoring</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We regularly review and update our GDPR compliance measures to ensure we continue to meet the highest standards of data protection. This includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-8">
              <li>Regular staff training on data protection</li>
              <li>Data protection impact assessments for new processes</li>
              <li>Regular audits of our data processing activities</li>
              <li>Continuous monitoring of data security measures</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              We are committed to maintaining the highest standards of data protection and will continue to evolve our practices as GDPR guidance and best practices develop.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GDPRPage;