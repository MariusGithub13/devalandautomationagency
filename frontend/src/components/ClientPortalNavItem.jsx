import React from "react";
export default function ClientPortalNavItem({ className = "" }) {
  return (
    <a
      href="https://portal.devaland.com/login"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center rounded px-3 py-2 font-medium text-blue-700 hover:bg-blue-50 ${className}`}
    >
      Clients Portal Login
    </a>
  );
}
