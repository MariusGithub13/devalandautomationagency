import React from "react";
import CookieResetLink from "./CookieResetLink";
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Medium,
  Star,
} from "lucide-react";

const year = new Date().getFullYear();

const SOCIAL = [
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com" },
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com" },
  { Icon: Medium, label: "Medium", href: "https://medium.com" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200/60 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {/* Top policy links row */}
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
            Terms & Conditions
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

          {/* NEW: reopen cookie consent */}
          <CookieResetLink />
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

        {/* Social icons */}
        <div className="mt-6 flex justify-center gap-4">
          {SOCIAL.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-full border border-gray-200 p-2 text-gray-600 hover:text-blue-600 hover:border-blue-200 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* “Follow us” helper line (optional) */}
        <p className="mt-4 text-center text-xs text-gray-400">
          Follow us on{" "}
          <a href="https://www.linkedin.com" className="underline hover:text-blue-600">
            LinkedIn
          </a>
          ,{" "}
          <a href="https://www.facebook.com" className="underline hover:text-blue-600">
            Facebook
          </a>
          ,{" "}
          <a href="https://www.instagram.com" className="underline hover:text-blue-600">
            Instagram
          </a>
          ,{" "}
          <a href="https://www.youtube.com" className="underline hover:text-blue-600">
            YouTube
          </a>{" "}
          &{" "}
          <a href="https://medium.com" className="underline hover:text-blue-600">
            Medium
          </a>
          .
        </p>
      </div>
    </footer>
  );
}