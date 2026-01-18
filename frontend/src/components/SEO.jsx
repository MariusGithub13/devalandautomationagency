import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Devaland Automation Agency",
  description = "Leading automation agency specializing in RPA, workflow automation, and Klaviyo email marketing for Shopify brands.",
  canonical = "https://devaland.com",
  ogImage = "/Devaland-Logo.webp",
  ogType = "website",
  schema = null,
  keywords = [],
  breadcrumbItems = [],
  noindex = false
}) => {
  const fullTitle = title === "Devaland Automation Agency" ? title : `${title} | Devaland`;

  const defaultKeywords = [
    "automation agency", "RPA development", "Klaviyo email marketing",
    "Shopify email automation", "workflow automation", "business process automation"
  ];
  const metaKeywords = keywords.length > 0 ? keywords.join(", ") : defaultKeywords.join(", ");

  // --- 1. UNIFIED BUSINESS SCHEMA ---
  // Combines Organization & ProfessionalService into ONE block to prevent duplicates
  const unifiedBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Devaland Automation Agency",
    "legalName": "Devaland Marketing S.R.L.",
    "alternateName": "Devaland",
    "url": "https://devaland.com",
    "logo": "https://devaland.com/Devaland-Logo.webp",
    "image": "https://devaland.com/Devaland-Logo.webp",
    "telephone": "+40-721-269-312",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sântandrei 13",
      "addressLocality": "Simeria",
      "postalCode": "335903",
      "addressRegion": "Hunedoara County",
      "addressCountry": "RO" // ✅ Correct ISO string format
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+40-721-269-312",
      "contactType": "customer service",
      "availableLanguage": ["English", "Romanian"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/devaland/",
      "https://www.linkedin.com/in/marius-andronie/",
      "https://www.facebook.com/marius.andronie/",
      "https://www.instagram.com/mariusandronie/",
      "https://www.youtube.com/@devaland13",
      "https://www.trustpilot.com/review/devaland.com"
    ],
    "areaServed": [
      { "@type": "Country", "name": "RO" },
      { "@type": "Country", "name": "US" },
      { "@type": "Country", "name": "Global" }
    ],
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "RO",
      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
      "merchantReturnLink": "https://devaland.com/terms",
      "description": "Devaland provides digital automation services; physical returns are not permitted."
    }
  };

  // --- 2. BREADCRUMB SCHEMA ---
  const breadcrumbSchema = breadcrumbItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://devaland.com${item.href || ''}`
    }))
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Devaland" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* 1. Unified Business Data Script */}
      <script type="application/ld+json">
        {JSON.stringify(unifiedBusinessSchema)}
      </script>

      {/* 2. Page-Specific Schema (e.g., BlogPosting) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* 3. Automated Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;