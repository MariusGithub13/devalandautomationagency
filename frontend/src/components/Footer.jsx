import React, { useEffect, memo } from "react";
// cookie settings removed — keep footer clean
import {
  Linkedin, Facebook, Instagram, Youtube, Github, Twitch,
  Globe, Phone, Mail, MapPin, MessageCircle, MessageSquare, Megaphone, Link
} from "lucide-react";
import NewsletterForm from './NewsletterForm';

const brand = {
  name: "Devaland Automation Agency",
  tagline: "Marketing Automation & Klaviyo Specialists",
};

const LEGAL = {
  company: "DEVALAND MARKETING S.R.L.",
  vat: "RO50841395",
  trade: "ROONRCJ2024039063003",
  // Source of truth for contacts (from /contact):
  phoneDisplay: "+40 (721) 269 312",
  phoneHref: "tel:+40721269312",
  email: "office@devaland.com",
  emailHref: "mailto:office@devaland.com",
  address: "Sântandrei 13, Simeria 335903,\nHunedoara County, Transylvania, Romania\n(Near Dracula's Castle :)",
};

const links = {
  explore: [
    { to: "/", label: "Home" },
    { to: "/klaviyo", label: "Klaviyo Services" },
    { to: "/voice-ai", label: "Voice AI Agents" },
    { to: "/services", label: "Automation Services" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    { to: "/sitemap.html", label: "Sitemap (HTML)" },
  ],
  // Primary social networks (always visible)
  primarySocialIcons: [
    { href: "https://www.linkedin.com/in/marius-andronie/", Icon: Linkedin, label: "LinkedIn", color: "bg-[#0A66C2]/10 text-[#0A66C2] border-[#0A66C2]/20 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:scale-110" },
    { href: "https://www.facebook.com/Devaland13", Icon: Facebook, label: "Facebook", color: "bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/20 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] hover:scale-110" },
    { href: "https://www.instagram.com/digitalvampire13/", Icon: Instagram, label: "Instagram", color: "bg-gradient-to-br from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#FCAF45]/10 text-[#E1306C] border-[#E1306C]/20 hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FCAF45] hover:text-white hover:border-transparent hover:scale-110" },
    { href: "https://www.youtube.com/@devaland13", Icon: Youtube, label: "YouTube", color: "bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/20 hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:scale-110" },
    { href: "https://x.com/Carlosman1313", Icon: Megaphone, label: "X (Twitter)", color: "bg-black/10 text-black border-black/20 hover:bg-black hover:text-white hover:border-black hover:scale-110" }
  ],
  // Secondary profiles (collapsed by default to prevent PageRank dilution)
  secondarySocialIcons: [
    { href: "https://github.com/MariusGithub13", Icon: Github, label: "GitHub", color: "bg-[#181717]/10 text-[#181717] border-[#181717]/20 hover:bg-[#181717] hover:text-white hover:border-[#181717] hover:scale-110" },
    { href: "https://www.twitch.tv/devaland13", Icon: Twitch, label: "Twitch", color: "bg-[#9146FF]/10 text-[#9146FF] border-[#9146FF]/20 hover:bg-[#9146FF] hover:text-white hover:border-[#9146FF] hover:scale-110" },
    { href: "https://www.threads.com/@digitalvampire13", Icon: MessageSquare, label: "Threads", color: "bg-black/10 text-black border-black/20 hover:bg-black hover:text-white hover:border-black hover:scale-110" },
    { href: "https://www.reddit.com/user/Devaland13/", Icon: MessageCircle, label: "Reddit", color: "bg-[#FF4500]/10 text-[#FF4500] border-[#FF4500]/20 hover:bg-[#FF4500] hover:text-white hover:border-[#FF4500] hover:scale-110" },
    { href: "https://devaland.net/", Icon: Globe, label: "devaland.net", color: "bg-blue-600/10 text-blue-600 border-blue-600/20 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110" },
    { href: "https://bx.community/@GrayWolf", Icon: Globe, label: "bx.community" },
    { href: "https://renewableenergy-directory.com/", Icon: Globe, label: "Renewable Directory" },
    { href: "https://awesomegang.com/marius-andronie/", Icon: Globe, label: "AwesomeGang" },
    { href: "https://www.goodreads.com/author/show/54880532.Marius_Andronie", Icon: Globe, label: "Goodreads" },
    { href: "https://leanpub.com/u/marius-andronie", Icon: Globe, label: "Leanpub" },
    { href: "https://mariusandronie.netlify.app/", Icon: Globe, label: "mariusandronie.netlify.app" },
    { href: "https://devaland.medium.com/", Icon: Globe, label: "Medium" },
    { href: "https://uk.pinterest.com/freedomstar1313/", Icon: Globe, label: "Pinterest" },
    { href: "https://www.tiktok.com/@devaland13", Icon: Globe, label: "TikTok" },
    { href: "https://devaland.start.page/", Icon: Link, label: "Start Page" },
    { href: "https://linktr.ee/devaland", Icon: Link, label: "Linktree" },
    { href: "https://smart.bio/devaland13/", Icon: Link, label: "Smart.bio" },
    { href: "https://devaland.netlify.app/", Icon: Globe, label: "devaland.netlify.app" },
    { href: "https://devaland.vercel.app/", Icon: Globe, label: "devaland.vercel.app" },
    { href: "https://www.redbubble.com/people/devaland13/shop?asc=u", Icon: Globe, label: "Redbubble" },
    { href: "https://www.teepublic.com/user/devaland?utm_source=designer&utm_medium=social&utm_campaign=fqfQzbMd8rw", Icon: Globe, label: "TeePublic" },
    { href: "https://mariusandronie.com/", Icon: Globe, label: "mariusandronie.com" },
    { href: "https://www.amazon.com/author/devaland_marius-andronie", Icon: Globe, label: "Amazon Author" },
    { href: "https://t.me/Devaland13", Icon: Globe, label: "Telegram" },
    { href: "https://api.whatsapp.com/send?phone=40721269312", Icon: Phone, label: "WhatsApp" },
    { href: "https://mariusandronie.substack.com/", Icon: Globe, label: "Substack" },
    { href: "https://mastodon.social/@GreyWolf13", Icon: Globe, label: "Mastodon (social)" },
    { href: "https://me.dm/@devaland", Icon: Globe, label: "Mastodon (me.dm)" },
    { href: "https://www.ctan.org/home/Devaland", Icon: Globe, label: "CTAN" }
  ],
  seoTextLinks: [
    ["LinkedIn", "https://www.linkedin.com/in/marius-andronie/"],
    ["Facebook (Devaland13)", "https://www.facebook.com/Devaland13"],
    ["Instagram", "https://www.instagram.com/digitalvampire13/"],
    ["YouTube", "https://www.youtube.com/@devaland13"],
    ["Pinterest", "https://uk.pinterest.com/freedomstar1313/"],
    ["Medium", "https://devaland.medium.com/"],
    ["Telegram", "https://t.me/Devaland13"],
    ["WhatsApp", "https://api.whatsapp.com/send?phone=40721269312"],
    ["Substack", "https://mariusandronie.substack.com/"],
    ["Threads", "https://www.threads.com/@digitalvampire13"],
    ["X (Twitter)", "https://x.com/Carlosman1313"],
    ["Goodreads (Author)", "https://www.goodreads.com/author/show/54880532.Marius_Andronie"],
    ["TikTok", "https://www.tiktok.com/@devaland13"],
    ["GitHub", "https://github.com/MariusGithub13"],
    ["Twitch", "https://www.twitch.tv/devaland13"],
    ["Reddit", "https://www.reddit.com/user/Devaland13/"],
    ["Tumblr", "https://www.tumblr.com/devaland"],
    ["Mastodon", "https://mastodon.social/@GreyWolf13"],
    ["Mastodon (me.dm)", "https://me.dm/@devaland"],
    ["CTAN", "https://www.ctan.org/home/Devaland"],
    ["Linktree", "https://linktr.ee/devaland"],
    ["Smart.bio", "https://smart.bio/devaland13/"],
    ["Start Page", "https://devaland.start.page/"],
    ["devaland.netlify.app", "https://devaland.netlify.app/"],
    ["devaland.vercel.app", "https://devaland.vercel.app/"],
    ["Redbubble Shop", "https://www.redbubble.com/people/devaland13/shop?asc=u"],
    ["TeePublic Shop", "https://www.teepublic.com/user/devaland?utm_source=designer&utm_medium=social&utm_campaign=fqfQzbMd8rw"],
    ["devaland.net", "https://devaland.net/"],
    ["bx.community", "https://bx.community/@GrayWolf"],
    ["Renewable Energy Directory", "https://renewableenergy-directory.com/"],
    ["AwesomeGang (Author)", "https://awesomegang.com/marius-andronie/"],
    ["Leanpub", "https://leanpub.com/u/marius-andronie"],
    ["mariusandronie.com", "https://mariusandronie.com/"],
    ["mariusandronie.netlify.app", "https://mariusandronie.netlify.app/"]
  ]
};

function InlineLogo() {
  // Simple inline SVG – shows immediately and can’t break due to missing file
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" className="text-blue-600">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M3 12c3-4 6-6 9-6s6 2 9 6c-3 4-6 6-9 6s-6-2-9-6z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

import LogoImg from '../assets/Devaland-Logo.jpg';

const Footer = memo(() => {
  // Trustpilot script is included in `public/index.html` for Netlify compatibility.
  // Ensure Trustpilot TrustBox initializes even if the script loaded before/after React mount.
  React.useEffect(() => {
    let attempts = 0;
    const maxAttempts = 10;
    const delay = 500; // ms

    function tryInit() {
      attempts += 1;
      const widgets = document.querySelectorAll('.trustpilot-widget');
      if (typeof window.Trustpilot !== 'undefined') {
        try {
          // Prefer available API methods (different versions expose different names)
          if (typeof window.Trustpilot.loadFromElements === 'function') {
            window.Trustpilot.loadFromElements(widgets);
            return;
          }
          if (typeof window.Trustpilot.loadFromElement === 'function') {
            widgets.forEach((el) => window.Trustpilot.loadFromElement(el));
            return;
          }
          if (typeof window.Trustpilot.init === 'function') {
            window.Trustpilot.init();
            return;
          }
        } catch (err) {
          // ignore and retry
          if (process.env.NODE_ENV === 'development') {
            console.warn('Trustpilot init error, will retry', err);
          }
        }
      }

      if (attempts < maxAttempts) {
        setTimeout(tryInit, delay);
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Trustpilot widget failed to initialize after multiple attempts');
        }
      }
    }

    tryInit();
  }, []);

  // cookie settings control removed to declutter footer

  return (
    <footer className="mt-16 border-t border-gray-200/70 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
        {/* Top: brand + explore + legal + newsletter + contact */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr_2fr] md:gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex flex-col items-center gap-3 text-center">
              <FooterLogo />
              <div>
                <div className="font-semibold text-gray-900">{brand.name}</div>
                <div className="text-base text-gray-600">{brand.tagline}</div>
              </div>
            </div>
            {/* Trustpilot Review Collector widget (TrustBox) - visually prominent */}
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="w-full max-w-md px-4 py-5 rounded-lg border border-gray-200 bg-white shadow-md flex flex-col items-center">
                <div className="mb-3 text-lg font-semibold text-gray-900 text-center">See what our customers say</div>
                <div
                  className="trustpilot-widget"
                  data-locale="en-US"
                  data-template-id="56278e9abfbbba0bdcd568bc"
                  data-businessunit-id="68d4dd4d6b90a6eb23a0d4f2"
                  data-style-height="80px"
                  data-style-width="100%"
                  data-token="a130c89b-6620-42ad-99b5-9162b70c1229"
                >
                  <a href="https://www.trustpilot.com/review/devaland.com" target="_blank" rel="noopener noreferrer" className="block text-center text-base font-bold text-gray-900">Trustpilot</a>
                </div>
              </div>
            </div>

            {/* Klaviyo Partner Badge */}
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="w-full max-w-md px-4 py-5 rounded-lg border border-gray-200 bg-white shadow-md flex flex-col items-center">
                <div className="mb-3 text-lg font-semibold text-gray-900 text-center">Devaland is a Certified Klaviyo Partner</div>
                <p className="mb-4 text-sm text-gray-600 text-center leading-relaxed">
                  As a certified Klaviyo partner agency, we empower businesses across diverse industries to accelerate revenue and build meaningful customer relationships through advanced email marketing strategies.
                </p>
                <a
                  href="https://www.klaviyo.com/partners/signup?utm_source=001Nu00000HqbJVIAZ&utm_medium=partner"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Klaviyo website"
                  className="inline-block w-full max-w-xs"
                >
                  <img src="/images/Klaviyo Agency Partner.webp" alt="Klaviyo Agency Partner" width="320" height="102" className="w-full h-auto object-contain" />
                </a>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="text-base font-semibold text-gray-900 mb-3">Explore</div>
            <nav className="grid grid-cols-1 gap-2 text-base">
              {links.explore.map((l) => (
                <a key={l.to} href={l.to} className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <div className="text-base font-semibold text-gray-900 mb-3">Legal</div>
            <nav className="grid grid-cols-1 gap-2 text-base">
              <a href="/privacy" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline">Privacy Policy</a>
              <a href="/terms" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline">Terms & Conditions</a>
              <a href="/cookies" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline">Cookie Policy</a>
              <a href="/gdpr" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline">GDPR</a>
              <a href="http://www.anpc.gov.ro/" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">ANPC</a>
              <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">ANPC SOL</a>
              <a href="https://reclamatiisal.anpc.ro/" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">ANPC SAL</a>
            </nav>
          </div>

          {/* Newsletter Signup */}
          <div>
            <div className="text-base font-semibold text-gray-900 mb-3">Newsletter</div>
            <p className="text-sm text-gray-600 mb-4">
              Get automation insights, case studies, and Klaviyo tips delivered monthly.
            </p>
            <NewsletterForm compact={true} />
          </div>

          {/* Contact */}
          <div>
            <div className="text-base font-semibold text-gray-900 mb-3">Contact</div>
            <ul className="space-y-2 text-base text-gray-700">
              <li className="flex items-start gap-2">
                <div className="text-gray-900 font-medium">
                  {LEGAL.company}
                </div>
              </li>
              
              {/* Headquarters */}
              <li className="flex items-start gap-2 mt-3">
                <MapPin size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Headquarters<br />(Registered Tax Office):</div>
                  <span className="whitespace-pre-line text-gray-600">{LEGAL.address}</span>
                </div>
              </li>

              {/* Contact Details */}
              <li className="flex items-center gap-2 mt-3">
                <Phone size={16} className="text-green-600 flex-shrink-0" />
                <a href={LEGAL.phoneHref} className="hover:text-blue-700 underline-offset-4 hover:underline">
                  {LEGAL.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600 flex-shrink-0" />
                <a href={LEGAL.emailHref} className="hover:text-blue-700 underline-offset-4 hover:underline">
                  {LEGAL.email}
                </a>
              </li>

              {/* Company Registration Details */}
              <li className="flex items-start gap-2 mt-3">
                <span className="text-gray-600">
                  VAT Code: {LEGAL.vat}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Link size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-base font-bold text-gray-700 mb-1">VIES VAT number validation:</div>
                  <a 
                    href="https://ec.europa.eu/taxation_customs/vies/#/vat-validation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline text-base break-all"
                  >
                    ec.europa.eu/taxation_customs/vies
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-600">
                  VAT Registered: February 01, 2025
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-600 text-base">
                  Romanian Commercial Trade Registry ID Code: J2024039063003
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-600 text-base">
                  European Union Trade Registry Unique ID Code (EUID): ROONRC.J2024039063003
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-600 text-base">
                  NACE Code: 7311 – Advertising Agencies
                </span>
              </li>
            </ul>
              {/* ANPC/SOL/SAL logos - stack SAL below SOL for clearer visual order */}
              <div className="mt-6 flex flex-col items-start space-y-3">
                <a
                  href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open ODR (SOL) in new tab"
                  className="inline-block"
                >
                  <img src="/images/sol.png" alt="SOL" width="96" height="96" className="h-24 w-auto object-contain rounded-sm shadow border border-gray-200 bg-white p-1" />
                  <span className="sr-only">European Online Dispute Resolution (ODR) — opens in a new tab</span>
                </a>
                <a
                  href="https://reclamatiisal.anpc.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open ANPC reclamations (SAL) in new tab"
                  className="inline-block"
                >
                  <img src="/images/sal.png" alt="SAL" width="96" height="96" className="h-24 w-auto object-contain rounded-sm shadow border border-gray-200 bg-white p-1" />
                  <span className="sr-only">ANPC reclamations portal — opens in a new tab</span>
                </a>
                <div className="flex flex-col items-start space-y-2">
                  <a
                    href="https://consumer-redress.ec.europa.eu/index_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-gray-700 hover:text-blue-700 underline-offset-2 hover:underline"
                  >
                    Consumer Redress in the European Union
                  </a>
                  <a
                    href="https://consumer-redress.ec.europa.eu/index_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open EU Consumer Redress in new tab"
                    className="inline-block"
                  >
                    <img src="/images/EU Consumer Redress.svg" alt="Consumer Redress in the EU" width="96" height="96" className="h-24 w-auto object-contain rounded-sm shadow border border-gray-200 bg-white p-1" />
                    <span className="sr-only">EU Consumer Redress — opens in a new tab</span>
                  </a>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <a
                    href="https://ec.europa.eu/taxation_customs/vies/#/vat-validation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-gray-700 hover:text-blue-700 underline-offset-2 hover:underline"
                  >
                    VIES VAT Number Validation - European Commission
                  </a>
                  <a
                    href="https://ec.europa.eu/taxation_customs/vies/#/vat-validation"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="EU VIES VAT Validation"
                    className="inline-block"
                  >
                    <img src="/images/EU Consumer Redress.svg" alt="VIES VAT number validation - European Commission" width="96" height="96" className="h-24 w-auto object-contain rounded-sm shadow border border-gray-200 bg-white p-1" />
                  </a>
                </div>
              </div>

              {/* Google Client Reviews Widget - Replaces duplicate Trustpilot
                  Google Reviews for SEO and credibility
                  Business Profile: Devaland Marketing S.R.L.
              */}
              <div className="mt-6 flex flex-col items-start">
                <div className="w-full max-w-md px-4 py-5 rounded-lg border border-gray-200 bg-white shadow-md flex flex-col items-center">
                  <div className="mb-3 text-lg font-semibold text-gray-900 text-center">Client Reviews</div>
                  {/* Google Business Profile Link */}
                  <div className="w-full space-y-3">
                    <a 
                      href="https://www.google.com/search?q=DEVALAND+MARKETING+SRL&stick=H4sIAAAAAAAA_-NgU1I1qDAxM7RMNTRKNjJLSTJNTUuzMqgwMk9KMkpKTUs1S0lNSjU1XsQq5uIa5ujj6Oei4OsY5O0a4unnrhAc5AMAFBctkEIAAAA&hl=en-GB" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-blue-500 transition-all group"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-600">Google Business Profile</div>
                        <div className="text-sm text-gray-600">View our complete profile</div>
                      </div>
                    </a>
                    {/* Write a Review Link */}
                    <a 
                      href="https://g.page/r/CfSNoCv66NgaEBM/review" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 px-4 py-3 bg-blue-50 border border-blue-300 rounded-lg hover:bg-blue-100 hover:border-blue-500 transition-all group"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="#FBBC05" d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-blue-700 group-hover:text-blue-900">Write a Review</div>
                        <div className="text-sm text-blue-600">Share your experience</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>

        {/* Primary Social Icons (Always Visible) */}
        <div className="mt-12 text-center">
          <div className="text-gray-700 font-semibold mb-4 text-base">Connect With Us</div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {links.primarySocialIcons.map(({ href, Icon, label, color }) => (
              <a key={href} href={href} aria-label={label} target="_blank" rel="noopener noreferrer nofollow"
                 className={`rounded-full border-2 p-2.5 transition-all duration-300 ${color || 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110'}`}>
                <Icon size={20} />
              </a>
            ))}
          </div>
          
          {/* Collapsible Secondary Profiles */}
          <details className="mt-6 mx-auto max-w-2xl">
            <summary className="cursor-pointer text-sm text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2 mx-auto">
              <span>See All Social Profiles</span>
              <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {links.secondarySocialIcons.map(({ href, Icon, label, color }) => (
                <a key={href} href={href} aria-label={label} target="_blank" rel="noopener noreferrer nofollow"
                   className={`rounded-full border-2 p-2.5 transition-all duration-300 ${color || 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:scale-110'}`}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </details>
        </div>

        {/* SEO Text Links (Collapsed) */}
        <details className="mt-6 mx-auto max-w-4xl text-center">
          <summary className="cursor-pointer text-sm text-gray-600 hover:text-blue-700 font-medium inline-flex items-center gap-2 mx-auto">
            <span>Complete Platform Directory</span>
            <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="mt-4 text-sm">
            <div className="text-gray-700 font-medium mb-2">Follow Devaland on:</div>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-gray-600">
              {links.seoTextLinks.map(([label, href]) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer nofollow"
                   className="underline underline-offset-4 hover:text-blue-700">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </details>

        {/* Copyright - at the very bottom, centered */}
        <div className="mt-12 text-center text-sm text-gray-600 w-full">
          Copyright © {new Date().getFullYear()} {LEGAL.company}. &nbsp;VAT Code: {LEGAL.vat}. Trade Registry: {LEGAL.trade}.
        </div>

        {/* ...existing code... */}
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

function FooterLogo() {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return (
      <svg width="56" height="56" viewBox="0 0 24 24" className="text-blue-600">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M3 12c3-4 6-6 9-6s6 2 9 6c-3 4-6 6-9 6s-6-2-9-6z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      src={LogoImg}
      alt="Devaland logo"
      className="h-20 w-20 md:h-24 md:w-24 rounded-full border border-gray-200 bg-white shadow object-contain"
      onError={() => setFailed(true)}
    />
  );
}

export default Footer;