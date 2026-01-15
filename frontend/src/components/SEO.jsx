import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component - Manages meta tags and multiple JSON-LD schemas
 * * @param {Array<Object>} props.breadcrumbItems - Array of { label: string, href: string }
 */
const SEO = ({
  title = "Devaland Automation Agency",
  description = "Leading automation agency specializing in RPA, workflow automation, and Klaviyo email marketing for Shopify brands.",
  canonical = "https://devaland.com",
  ogImage = "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg",
  ogType = "website",
  schema = null,
  keywords = [],
  breadcrumbItems = [] // 👈 New prop for breadcrumb automation
}) => {
  const fullTitle = title === "Devaland Automation Agency" ? title : `${title} | Devaland`;
  
  const defaultKeywords = [
    "automation agency", "RPA development", "Klaviyo email marketing",
    "Shopify email automation", "workflow automation", "business process automation"
  ];
  const metaKeywords = keywords.length > 0 ? keywords.join(", ") : defaultKeywords.join(", ");

  // --- BREADCRUMB SCHEMA GENERATOR ---
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
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Devaland" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* 1. Page-Specific Structured Data (e.g., BlogPosting) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* 2. Automated Breadcrumb Structured Data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;