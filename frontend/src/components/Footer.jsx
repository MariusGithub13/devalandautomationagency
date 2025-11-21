import React from "react";
import { openCookieSettings } from "../utils/openCookieSettings";
import {
  Linkedin, Facebook, Instagram, Youtube, Github, Twitch,
  Globe, Phone, Mail, MapPin, MessageCircle, MessageSquare, Megaphone, Link
} from "lucide-react";

const brand = {
  name: "Devaland",
  tagline: "Marketing Automation & Klaviyo Specialists",
};

const LEGAL = {
  company: "DEVALAND MARKETING SRL",
  vat: "RO50841395",
  trade: "ROONRCJ2024039063003",
  // Source of truth for contacts (from /contact):
  phoneDisplay: "+40 (721) 269 312",
  phoneHref: "tel:+40721269312",
  emailHref: "/contact", // keep canonical (form). If you want mailto, replace with mailto:you@domain
  address: "Sântandrei 13, Simeria 335903, Hunedoara, Romania",
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

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200/70 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
        {/* Top: brand + explore + contact */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <InlineLogo />
              <div>
                <div className="font-semibold text-gray-900">{brand.name}</div>
                <div className="text-sm text-gray-600">{brand.tagline}</div>
              </div>
            </div>
            <button
              type="button"
              onClick={openCookieSettings}
              className="mt-4 inline-flex items-center gap-1 text-sm underline underline-offset-4 text-gray-600 hover:text-blue-700"
            >
              Change cookie settings
            </button>
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

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-gray-900 mb-3">Contact</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-500" />
                <span>{LEGAL.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gray-500" />
                <a href={LEGAL.phoneHref} className="hover:text-blue-700 underline-offset-4 hover:underline">
                  {LEGAL.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-500" />
                <a href={LEGAL.emailHref} className="hover:text-blue-700 underline-offset-4 hover:underline">
                  Email us (form)
                </a>
              </li>
            </ul>
              {/* ANPC/SOL/SAL logos */}
              <div className="mt-6 flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
                <a
                  href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open ODR (SOL) in new tab"
                  className="inline-block"
                >
                  <img src="/images/sol.png" alt="SOL" className="h-10 md:h-12 object-contain rounded-sm shadow-sm border border-gray-100 bg-white" />
                </a>
                <a
                  href="https://reclamatiisal.anpc.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open ANPC reclamations (SAL) in new tab"
                  className="inline-block"
                >
                  <img src="/images/sal.png" alt="SAL" className="h-10 md:h-12 object-contain rounded-sm shadow-sm border border-gray-100 bg-white" />
                </a>
              </div>
          </div>
        </div>

        {/* Legal row */}
        <div className="mt-8 text-sm text-gray-600">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href="/privacy" className="hover:text-blue-700 underline-offset-4 hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-700 underline-offset-4 hover:underline">Terms & Conditions</a>
            <a href="/cookies" className="hover:text-blue-700 underline-offset-4 hover:underline">Cookie Policy</a>
            <a href="/gdpr" className="hover:text-blue-700 underline-offset-4 hover:underline">GDPR</a>
              <a href="http://www.anpc.gov.ro/" className="hover:text-blue-700 underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">ANPC</a>
            <span className="text-gray-400">|</span>
            <span className="text-gray-500">
              Copyright © {new Date().getFullYear()} {LEGAL.company}.
              &nbsp;C.I.F./VAT: {LEGAL.vat}. Trade Registry: {LEGAL.trade}.
            </span>
          </div>
        </div>

        {/* Icons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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

        {/* ...existing code... */}
      </div>
    </footer>
  );
}