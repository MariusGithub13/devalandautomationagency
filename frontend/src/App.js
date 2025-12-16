import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import HomePage from "./pages/HomePage"; 

// Lazy load pages for better code splitting and performance
const KlaviyoPage = lazy(() => import("./pages/KlaviyoPage"));
const KlaviyoGDPRPage = lazy(() => import("./pages/KlaviyoGDPRPage"));
const KlaviyoGDPRCompliancePage = lazy(() => import("./pages/KlaviyoGDPRCompliancePage"));
const KlaviyoBlackFridayPage = lazy(() => import("./pages/KlaviyoBlackFridayPage"));
const KlaviyoFlowsExamplesPage = lazy(() => import("./pages/KlaviyoFlowsExamplesPage"));
const KlaviyoPredictedNextOrderPage = lazy(() => import("./pages/KlaviyoPredictedNextOrderPage"));
const KlaviyoPlacedOrderRatePage = lazy(() => import("./pages/KlaviyoPlacedOrderRatePage"));
const KlaviyoAutomationGuidePage = lazy(() => import("./pages/KlaviyoAutomationGuidePage"));
const KlaviyoSegmentationPage = lazy(() => import("./pages/KlaviyoSegmentationPage"));
const KlaviyoEmailTemplatesPage = lazy(() => import("./pages/KlaviyoEmailTemplatesPage"));
const VoiceAIPage = lazy(() => import("./pages/VoiceAIPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const CookiesPage = lazy(() => import("./pages/CookiesPage"));
const GDPRPage = lazy(() => import("./pages/GDPRPage"));
const KlaviyoCaseStudies = lazy(() => import("./pages/KlaviyoCaseStudies"));
const ChatBubble = lazy(() => import("./components/ChatBubble"));
const DeferredTrustpilot = lazy(() => import("./components/DeferredTrustpilot"));

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="min-h-screen">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/klaviyo" element={<KlaviyoPage />} />
              <Route path="/klaviyo-gdpr" element={<KlaviyoGDPRPage />} />
              <Route path="/klaviyo-gdpr-compliance" element={<KlaviyoGDPRCompliancePage />} />
              <Route path="/klaviyo-black-friday-strategy" element={<KlaviyoBlackFridayPage />} />
              <Route path="/klaviyo-flows-examples" element={<KlaviyoFlowsExamplesPage />} />
              <Route path="/klaviyo-predicted-next-order" element={<KlaviyoPredictedNextOrderPage />} />
              <Route path="/klaviyo-placed-order-rate" element={<KlaviyoPlacedOrderRatePage />} />
              <Route path="/klaviyo-automation-guide" element={<KlaviyoAutomationGuidePage />} />
              <Route path="/klaviyo-segmentation-strategies" element={<KlaviyoSegmentationPage />} />
              <Route path="/klaviyo-email-templates" element={<KlaviyoEmailTemplatesPage />} />
              <Route path="/voice-ai" element={<VoiceAIPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/gdpr" element={<GDPRPage />} />
              <Route path="/klaviyo-case-studies" element={<KlaviyoCaseStudies />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CookieConsent />
        <Toaster position="bottom-right" />

        {/* ✅ Lazy-loaded chat bubble - defers until user interaction or 6s */}
        <Suspense fallback={null}>
          <ChatBubble />
        </Suspense>

        {/* ✅ Lazy-loaded Trustpilot - defers until user interaction or 5s */}
        <Suspense fallback={null}>
          <DeferredTrustpilot />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
