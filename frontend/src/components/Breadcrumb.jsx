import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumb Component - Provides navigation context and SEO benefits
 * 
 * @param {Object} props
 * @param {Array<{label: string, href: string}>} props.items - Breadcrumb items
 * @param {'light'|'dark'} props.variant - Theme variant ('light' for white bg, 'dark' for dark/gradient bg)
 */
const Breadcrumb = ({ items = [], variant = 'light' }) => {
  const isDark = variant === 'dark';

  const baseTextColor = isDark ? 'text-blue-100/70 hover:text-white' : 'text-gray-500 hover:text-gray-900';
  const activeTextColor = isDark ? 'text-white' : 'text-gray-900';
  const separatorColor = isDark ? 'text-blue-300/40' : 'text-gray-400';

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://devaland.com"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://devaland.com${item.href}`
      }))
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Visual Breadcrumb */}
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className={`flex items-center transition-colors ${baseTextColor}`}
              aria-label="Home"
            >
              <Home size={16} />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight size={16} className={separatorColor} />
              {index === items.length - 1 ? (
                <span className={`${activeTextColor} font-medium`} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className={`transition-colors ${baseTextColor}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
