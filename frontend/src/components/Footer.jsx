import React from "react";
import CookieResetLink from "./CookieResetLink";
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Pinterest,
  Github,
  Twitch,
  Reddit,
  Twitter,
  Globe,
  Link as LinkIcon,
  Star,
  PenSquare,
  Newspaper,
  BookOpen,
  BookMarked,
  MessageCircle,
  Send,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

const year = new Date().getFullYear();

/**
 * All social/profile links (icons shown where available).
 * We also render a crawlable SEO text list below.
 */
const SOCIAL_LINKS = [
  // Core profiles (existing)
  { label: "LinkedIn", href: "https://www.linkedin.com/in/marius-andronie/", Icon: Linkedin },
  { label: "Facebook (Devaland13)", href: "https://www.facebook.com/Devaland13", Icon: Facebook },
  { label: "Facebook (DreamVillage13)", href: "https://www.facebook.com/dreamvillage13", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/digitalvampire13/", Icon: Instagram },
  { label: "YouTube", href: "https://www.youtube.com/@devaland13", Icon: Youtube },
  { label: "Pinterest", href: "https://uk.pinterest.com/freedomstar1313/", Icon: Pinterest },
  { label: "Medium", href: "https://devaland.medium.com/", Icon: PenSquare },

  // New additions
  { label: "Personal Website", href: "https://mariusandronie.com/", Icon: Globe },
  { label: "Amazon Author", href: "https://www.amazon.com/author/devaland_marius-andronie", Icon: BookOpen },
  { label: "Telegram", href: "https://t.me/Devaland13", Icon: Send },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=40721269312", Icon: MessageCircle },
  { label: "Substack", href: "https://mariusandronie.substack.com/", Icon: Newspaper },
  { label: "X (Twitter)", href: "https://x.com/Carlosman1313", Icon: Twitter },
  { label: "Goodreads (Author)", href: "https://www.goodreads.com/author/show/54880532.Marius_Andronie", Icon: BookMarked },
  { label: "Phone", href: "tel:+40721269312", Icon: PhoneCall },

  // Already present (kept)
  { label: "TikTok", href: "https://www.tiktok.com/@devaland13", Icon: Globe },
  { label: "Threads", href: "https://www.threads.com/@digitalvampire13", Icon: Globe },
  { label: "GitHub", href: "https://github.com/MariusGithub13", Icon: Github },
  { label: "Twitch", href: "https://www.twitch.tv/devaland13", Icon: Twitch },
  { label: "Reddit", href: "https://www.reddit.com/user/Devaland13/", Icon: Reddit },
  { label: "Quora", href: "https://www.quora.com/profile/Devaland-1", Icon: Globe },
  { label: "Tumblr", href: "https://www.tumblr.com/devaland", Icon: Globe },
  { label: "Mastodon", href: "https://mastodon.social/@GreyWolf13", Icon: Globe, rel: "me" },
  { label: "Mastodon (me.dm)", href: "https://me.dm/@devaland", Icon: Globe, rel: "me" },
  { label: "Signal", href: "https://signal.me/#eu/WY4BeF00EXt9YCJQanV5us0XvBFVE_hzEFecWdXOgg2urDUuvHFM5LMWiCAYNC84", Icon: ShieldCheck },

  // Hubs / link pages / mirrors
  { label: "CTAN", href: "https://www.ctan.org/home/Devaland", Icon: Globe },
  { label: "Linktree", href: "https://linktr.ee/devaland", Icon: LinkIcon },
  { label: "Smart.bio", href: "https://smart.bio/devaland13/", Icon: LinkIcon },
  { label: "Start Page", href: "https://devaland.start.page/", Icon: LinkIcon },
  { label: "Netlify Site", href: "https://devaland.netlify.app/", Icon: LinkIcon },
  { label: "Vercel Site", href: "https://devaland.vercel.app/", Icon: LinkIcon },
  { label: "Redbubble Shop", href: "https://www.redbubble.com/people/devaland13/shop?asc=u", Icon: Globe },
  { label: "TeePublic Shop", href: "https://www.teepublic.com/user/devaland?utm_source=designer&utm_medium=social&utm_campaign=fqfQzbMd8rw", Icon: Globe },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200/60 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {/* Policy links + cookie settings */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
          <a
            href="/privacy"
            className="hover:text-blue-600 underline-offset-4 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:text-blue-600 underline-offset-4 hover:underline"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="/cookies"
            className="hover:text-blue-600 underline-offset-4 hover:underline"
          >
            Cookie Policy
          </a>
          <a
            href="/gdpr"
            className="hover:text-blue-600 underline-offset-4 hover:underline"
          >
            GDPR
          </a>

          {/* Reopen vendor cookie banner */}
          <CookieResetLink className="ml-1" />
        </div>

        {/* Company legal line */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Copyright © {year} · DEVALAND MARKETING SRL · All Rights Reserved.
          <br className="hidden sm:block" />
          <span className="sm:ml-2">
            C.I.F./VAT Number: RO50841395. Trade Registry: ROONRC.J2024039063003.
          </span>
        </p>

        {/* Trustpilot CTA */}
        <div className="mt-6 flex justify-center">
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50 px-4 py-2 text-emerald-700 hover:bg-emerald-100 transition-colors"
          >
            <Star size={16} className="fill-emerald-500 text-emerald-500" />
            <span className="font-medium">Review us on Trustpilot</span>
          </a>
        </div>

        {/* Icon row (wraps on small screens) */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {SOCIAL_LINKS.map(({ label, href, Icon, rel }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel={rel ? `${rel} noopener noreferrer` : "noopener noreferrer"}
              aria-label={label}
              title={label}
              className="rounded-full border border-gray-200 p-2 text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* SEO text list */}
        <div className="mt-6 text-center text-xs text-gray-500 leading-relaxed">
          <span className="block mb-1 font-medium text-gray-600">
            Follow Devaland on:
          </span>
          <p className="mx-auto max-w-4xl">
            {SOCIAL_LINKS.map(({ label, href }, i) => (
              <span key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-blue-600"
                >
                  {label}
                </a>
                {i < SOCIAL_LINKS.length - 1 ? ", " : "."}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}