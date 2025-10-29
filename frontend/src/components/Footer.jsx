import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin, Facebook, Instagram, Youtube, Github,
  Phone, Mail, Globe, MessageSquare, MessageCircle,
  Send, // telegram-ish
  Twitch, Twitter, Book, BookOpen, Rss,
  // generic icon fallback
  CircleDot
} from "lucide-react";
import CookieResetLink from "./CookieResetLink";

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    title={label}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-colors"
  >
    {children || <CircleDot size={18} />}
  </a>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t bg-white">
      {/* top strip */}
      <div className="mx-auto w-full max-w-7xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand / mission */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img
                src="/logo192.png"
                alt="Devaland logo"
                className="h-7 w-7 rounded"
              />
              <span className="text-lg font-semibold tracking-tight">
                Devaland
              </span>
            </div>
            <p className="text-sm text-gray-600">
              We automate operations and build revenue-driving customer journeys.
              <br/>Klaviyo, workflows, and AI—done right.
            </p>

            <div className="flex gap-3 pt-2">
              <a href="tel:+40721269312" className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600">
                <Phone size={16}/> +40 (721) 269 312
              </a>
              <a href="mailto:hi@devaland.com" className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600">
                <Mail size={16}/> hi@devaland.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-blue-600" to="/">Home</Link></li>
              <li><Link className="hover:text-blue-600" to="/klaviyo-services">Klaviyo Services</Link></li>
              <li><Link className="hover:text-blue-600" to="/automation-services">Automation Services</Link></li>
              <li><Link className="hover:text-blue-600" to="/case-studies">Case Studies</Link></li>
              <li><Link className="hover:text-blue-600" to="/klaviyo-case-studies">Klaviyo Case Studies</Link></li>
              <li><Link className="hover:text-blue-600" to="/about">About</Link></li>
              <li><Link className="hover:text-blue-600" to="/blog">Blog</Link></li>
              <li><Link className="hover:text-blue-600" to="/contact">Contact</Link></li>
              <li><a className="hover:text-blue-600" href="/sitemap.html">Sitemap (HTML)</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700">
              Policies
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-blue-600" href="/privacy">Privacy Policy</a></li>
              <li><a className="hover:text-blue-600" href="/terms">Terms &amp; Conditions</a></li>
              <li><a className="hover:text-blue-600" href="/cookies">Cookie Policy</a></li>
              <li><a className="hover:text-blue-600" href="/gdpr">GDPR</a></li>
              <li className="pt-1">
                <CookieResetLink className="text-gray-700" />
              </li>
            </ul>
          </div>

          {/* Review / Socials (icons) */}
          <div className="space-y-3">
            <a
              href="https://www.trustpilot.com/review/devaland.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:border-blue-500 hover:text-blue-600"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Review us on Trustpilot
            </a>

            <div className="flex flex-wrap gap-3 pt-1">
              <SocialIcon href="https://www.linkedin.com/in/marius-andronie/" label="LinkedIn"><Linkedin size={18}/></SocialIcon>
              <SocialIcon href="https://www.facebook.com/Devaland13" label="Facebook"><Facebook size={18}/></SocialIcon>
              <SocialIcon href="https://www.facebook.com/dreamvillage13" label="Facebook (DreamVillage)"><Facebook size={18}/></SocialIcon>
              <SocialIcon href="https://www.instagram.com/digitalvampire13/" label="Instagram"><Instagram size={18}/></SocialIcon>
              <SocialIcon href="https://www.youtube.com/@devaland13" label="YouTube"><Youtube size={18}/></SocialIcon>
              <SocialIcon href="https://github.com/MariusGithub13" label="GitHub"><Github size={18}/></SocialIcon>
              <SocialIcon href="https://t.me/Devaland13" label="Telegram"><Send size={18}/></SocialIcon>
              <SocialIcon href="https://api.whatsapp.com/send?phone=40721269312" label="WhatsApp"><MessageSquare size={18}/></SocialIcon>
              <SocialIcon href="https://www.tiktok.com/@devaland13" label="TikTok"><MessageCircle size={18}/></SocialIcon>
              <SocialIcon href="https://x.com/Carlosman1313" label="X (Twitter)"><Twitter size={18}/></SocialIcon>
              <SocialIcon href="https://mariusandronie.com/" label="Website"><Globe size={18}/></SocialIcon>
              <SocialIcon href="https://mariusandronie.substack.com/" label="Substack"><Rss size={18}/></SocialIcon>
              <SocialIcon href="https://www.goodreads.com/author/show/54880532.Marius_Andronie" label="Goodreads"><BookOpen size={18}/></SocialIcon>
              <SocialIcon href="https://www.twitch.tv/devaland13" label="Twitch"><Twitch size={18}/></SocialIcon>
              <SocialIcon href="https://devaland.medium.com/" label="Medium"><Book size={18}/></SocialIcon>
              <SocialIcon href="https://mastodon.social/@GreyWolf13" label="Mastodon"><Globe size={18}/></SocialIcon>
              <SocialIcon href="https://me.dm/@devaland" label="Mastodon (me.dm)"><Globe size={18}/></SocialIcon>
              <SocialIcon href="https://devaland.netlify.app/" label="Netlify Site"><Globe size={18}/></SocialIcon>
              <SocialIcon href="https://devaland.vercel.app/" label="Vercel Site"><Globe size={18}/></SocialIcon>
              <SocialIcon href="https://linktr.ee/devaland" label="Linktree"><Globe size={18}/></SocialIcon>
              <SocialIcon href="https://smart.bio/devaland13/" label="Smart.bio"><Globe size={18}/></SocialIcon>
              <SocialIcon href="https://devaland.start.page/" label="Start.page"><Globe size={18}/></SocialIcon>
              <SocialIcon href="https://www.redbubble.com/people/devaland13/shop?asc=u" label="Redbubble"><Globe size={18}/></SocialIcon>
              <SocialIcon href="https://www.teepublic.com/user/devaland?utm_source=designer&utm_medium=social&utm_campaign=fqfQzbMd8rw" label="TeePublic"><Globe size={18}/></SocialIcon>
              <SocialIcon href="https://www.threads.com/@digitalvampire13" label="Threads"><MessageCircle size={18}/></SocialIcon>
              <SocialIcon href="https://www.quora.com/profile/Devaland-1" label="Quora"><Globe size={18}/></SocialIcon>
              <SocialIcon href="https://www.tumblr.com/devaland" label="Tumblr"><Globe size={18}/></SocialIcon>
              <SocialIcon href="https://www.ctan.org/home/Devaland" label="CTAN"><Globe size={18}/></SocialIcon>
            </div>
          </div>
        </div>

        {/* SEO text list */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <div className="space-x-2">
            <a className="hover:text-blue-600" href="https://www.linkedin.com/in/marius-andronie/">LinkedIn</a>,
            <a className="hover:text-blue-600" href="https://www.facebook.com/Devaland13">Facebook (Devaland13)</a>,
            <a className="hover:text-blue-600" href="https://www.facebook.com/dreamvillage13">Facebook (DreamVillage13)</a>,
            <a className="hover:text-blue-600" href="https://www.instagram.com/digitalvampire13/">Instagram</a>,
            <a className="hover:text-blue-600" href="https://www.youtube.com/@devaland13">YouTube</a>,
            <a className="hover:text-blue-600" href="https://mariusandronie.com/">Personal Website</a>,
            <a className="hover:text-blue-600" href="https://mariusandronie.substack.com/">Substack</a>,
            <a className="hover:text-blue-600" href="https://x.com/Carlosman1313">X (Twitter)</a>,
            <a className="hover:text-blue-600" href="https://www.goodreads.com/author/show/54880532.Marius_Andronie">Goodreads</a>,
            <a className="hover:text-blue-600" href="https://github.com/MariusGithub13">GitHub</a>,
            <a className="hover:text-blue-600" href="https://devaland.medium.com/">Medium</a>,
            <a className="hover:text-blue-600" href="https://mastodon.social/@GreyWolf13">Mastodon</a>,
            <a className="hover:text-blue-600" href="https://me.dm/@devaland">Mastodon (me.dm)</a>,
            <a className="hover:text-blue-600" href="https://linktr.ee/devaland">Linktree</a>,
            <a className="hover:text-blue-600" href="https://smart.bio/devaland13/">Smart.bio</a>,
            <a className="hover:text-blue-600" href="https://devaland.start.page/">Start Page</a>,
            <a className="hover:text-blue-600" href="https://devaland.netlify.app/">Netlify</a>,
            <a className="hover:text-blue-600" href="https://devaland.vercel.app/">Vercel</a>,
            <a className="hover:text-blue-600" href="https://www.redbubble.com/people/devaland13/shop?asc=u">Redbubble</a>,
            <a className="hover:text-blue-600" href="https://www.teepublic.com/user/devaland?utm_source=designer&utm_medium=social&utm_campaign=fqfQzbMd8rw">TeePublic</a>,
            <a className="hover:text-blue-600" href="https://www.quora.com/profile/Devaland-1">Quora</a>,
            <a className="hover:text-blue-600" href="https://www.tumblr.com/devaland">Tumblr</a>,
            <a className="hover:text-blue-600" href="https://www.tiktok.com/@devaland13">TikTok</a>
          </div>
        </div>
      </div>

      {/* legal strip */}
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-6 text-xs text-gray-500 md:flex-row md:justify-between">
          <div>
            © {year} DEVALAND MARKETING SRL · All Rights Reserved. &nbsp;
            C.I.F./VAT: RO50841395 · Trade Registry: ROONRC.J2024039063003
          </div>
          <div className="flex items-center gap-4">
            <a href="/robots.txt" className="hover:text-blue-600">robots.txt</a>
<a href="/sitemap.html" className="hover:text-blue-600 underline-offset-4 hover:underline">
  HTML Sitemap
</a>
            <a href="/llms.txt" className="hover:text-blue-600">llms.txt</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
<p className="mt-3 text-xs text-gray-500">
  <button
    onClick={(e) => {
      e.preventDefault();
      import("../utils/openCookieSettings").then(({ openCookieSettings }) => {
        openCookieSettings();
      });
    }}
    className="underline hover:text-blue-600 transition-colors duration-200"
  >
    Change cookie settings
  </button>
</p>