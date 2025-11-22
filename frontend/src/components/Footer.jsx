import React, { useEffect } from "react";
// cookie settings removed — keep footer clean
import {
  Linkedin, Facebook, Instagram, Youtube, Github, Twitch,
  Globe, Phone, Mail, MapPin, MessageCircle, MessageSquare, Megaphone, Link
} from "lucide-react";

const brand = {
  name: "Devaland Automation Agency",
  tagline: "Marketing Automation & Klaviyo Specialists",
};

const LEGAL = {
  company: "DEVALAND MARKETING SRL",
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
    { to: "/services", label: "Automation Services" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
    { to: "/sitemap.html", label: "Sitemap (HTML)" },
  ],
  socialIcons: [
    { href: "https://www.linkedin.com/in/marius-andronie/", Icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.facebook.com/Devaland13", Icon: Facebook, label: "Facebook" },
    { href: "https://www.instagram.com/digitalvampire13/", Icon: Instagram, label: "Instagram" },
    { href: "https://www.youtube.com/@devaland13", Icon: Youtube, label: "YouTube" },
    { href: "https://github.com/MariusGithub13", Icon: Github, label: "GitHub" },
    { href: "https://www.twitch.tv/devaland13", Icon: Twitch, label: "Twitch" },
    { href: "https://x.com/Carlosman1313", Icon: Megaphone, label: "X (Twitter)" },
    { href: "https://www.threads.com/@digitalvampire13", Icon: MessageSquare, label: "Threads" },
    { href: "https://www.reddit.com/user/Devaland13/", Icon: MessageCircle, label: "Reddit" },
    { href: "https://devaland.net/", Icon: Globe, label: "devaland.net" },
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

export default function Footer() {
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
          // eslint-disable-next-line no-console
          console.warn('Trustpilot init error, will retry', err);
        }
      }

      if (attempts < maxAttempts) {
        setTimeout(tryInit, delay);
      } else {
        // eslint-disable-next-line no-console
        console.warn('Trustpilot widget failed to initialize after multiple attempts');
      }
    }

    tryInit();
  }, []);

  // cookie settings control removed to declutter footer

  return (
    <footer className="mt-16 border-t border-gray-200/70 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
        {/* Top: brand + explore + legal + contact */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 md:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <FooterLogo />
              <div>
                <div className="font-semibold text-gray-900">{brand.name}</div>
                <div className="text-sm text-gray-600">{brand.tagline}</div>
              </div>
            </div>
            {/* Trustpilot Review Collector widget (TrustBox) - visually prominent */}
            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="w-full max-w-lg px-6 py-8 rounded-xl border border-gray-100 bg-white shadow-lg flex flex-col items-center">
                <div className="mb-4 text-2xl font-semibold text-gray-900 text-center">See what our customers say</div>
                <div
                  className="trustpilot-widget"
                  data-locale="en-US"
                  data-template-id="56278e9abfbbba0bdcd568bc"
                  data-businessunit-id="68d4dd4d6b90a6eb23a0d4f2"
                  data-style-height="80px"
                  data-style-width="400px"
                  data-token="a130c89b-6620-42ad-99b5-9162b70c1229"
                >
                  <a href="https://www.trustpilot.com/review/devaland.com" target="_blank" rel="noopener noreferrer" className="block text-center text-lg font-bold text-gray-900">Trustpilot</a>
                </div>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Explore</div>
            <nav className="grid grid-cols-1 gap-2 text-sm">
              {links.explore.map((l) => (
                <a key={l.to} href={l.to} className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Legal</div>
            <nav className="grid grid-cols-1 gap-2 text-sm">
              <a href="/privacy" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline">Privacy Policy</a>
              <a href="/terms" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline">Terms & Conditions</a>
              <a href="/cookies" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline">Cookie Policy</a>
              <a href="/gdpr" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline">GDPR</a>
              <a href="http://www.anpc.gov.ro/" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">ANPC</a>
              <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">ANPC SOL</a>
              <a href="https://reclamatiisal.anpc.ro/" className="text-gray-600 hover:text-blue-700 underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">ANPC SAL</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Contact</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <div className="text-gray-900 font-medium">
                  {LEGAL.company}
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-600">
                  C.I.F./VAT: {LEGAL.vat}
                </span>
              </li>
              <li className="flex items-center gap-2 mt-3">
                <Phone size={16} className="text-gray-500 flex-shrink-0" />
                <a href={LEGAL.phoneHref} className="hover:text-blue-700 underline-offset-4 hover:underline">
                  {LEGAL.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-500 flex-shrink-0" />
                <a href={LEGAL.emailHref} className="hover:text-blue-700 underline-offset-4 hover:underline">
                  {LEGAL.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{LEGAL.address}</span>
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
                  <img src="/images/sol.png" alt="SOL" className="h-12 object-contain rounded-sm shadow border border-gray-200 bg-white p-1" />
                  <span className="sr-only">European Online Dispute Resolution (ODR) — opens in a new tab</span>
                </a>
                <a
                  href="https://reclamatiisal.anpc.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open ANPC reclamations (SAL) in new tab"
                  className="inline-block"
                >
                  <img src="/images/sal.png" alt="SAL" className="h-12 object-contain rounded-sm shadow border border-gray-200 bg-white p-1" />
                  <span className="sr-only">ANPC reclamations portal — opens in a new tab</span>
                </a>
              </div>
          </div>
        </div>

        {/* Icons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {links.socialIcons.map(({ href, Icon, label }) => (
            <a key={href} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
               className="rounded-full border border-gray-200 p-2 hover:border-blue-600 hover:text-blue-700">
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* SEO text links */}
        <div className="mt-6 text-center text-sm">
          <div className="text-gray-700 font-medium mb-1">Follow Devaland on:</div>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-gray-600">
            {links.seoTextLinks.map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                 className="underline underline-offset-4 hover:text-blue-700">
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright - at the very bottom, centered */}
        <div className="mt-12 text-center text-xs text-gray-500 w-full">
          Copyright © {new Date().getFullYear()} {LEGAL.company}. &nbsp;C.I.F./VAT: {LEGAL.vat}. Trade Registry: {LEGAL.trade}.
        </div>

        {/* ...existing code... */}
      </div>
    </footer>
  );
}

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