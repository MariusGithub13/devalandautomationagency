import React from "react";
import CookieResetLink from "./CookieResetLink";

const Footer = () => {
  return (
    <footer className="text-center text-sm text-gray-600 mt-16 mb-12 px-4">
      <div className="space-x-4 flex flex-wrap items-center justify-center gap-2 text-gray-600">
        <a href="/privacy" className="hover:text-blue-600 transition-colors duration-200 underline-offset-4 hover:underline">Privacy Policy</a>
        <a href="/terms" className="hover:text-blue-600 transition-colors duration-200 underline-offset-4 hover:underline">Terms & Conditions</a>
        <a href="/cookies" className="hover:text-blue-600 transition-colors duration-200 underline-offset-4 hover:underline">Cookie Policy</a>
        <a href="/gdpr" className="hover:text-blue-600 transition-colors duration-200 underline-offset-4 hover:underline">GDPR</a>

        {/* New: reopen consent */}
        <CookieResetLink />
      </div>

      <p className="mt-4 text-[11px] text-gray-400">
        © {new Date().getFullYear()} Devaland Automation Agency. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;