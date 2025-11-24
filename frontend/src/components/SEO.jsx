import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component - Manages meta tags for search engines and social media
 * 
 * @param {Object} props
 * @param {string} props.title - Page title (will append " | Devaland" automatically)
 * @param {string} props.description - Meta description for search engines
 * @param {string} props.canonical - Canonical URL for the page
 * @param {string} props.ogImage - Open Graph image URL
 * @param {string} props.ogType - Open Graph type (default: "website")
 * @param {Object} props.schema - JSON-LD structured data object
 * @param {Array<string>} props.keywords - Array of keywords for meta keywords tag
 */
const SEO = ({
  title = "Devaland Automation Agency",
  description = "Leading automation agency specializing in RPA, workflow automation, and Klaviyo email marketing for Shopify brands. Transform your operations with intelligent automation solutions.",
  canonical = "https://devaland.com",
  ogImage = "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg",
  ogType = "website",
  schema = null,
  keywords = []
}) => {
  // Construct full title
  const fullTitle = title === "Devaland Automation Agency" 
    ? title 
    : `${title} | Devaland`;

  // Default keywords if none provided
  const defaultKeywords = [
    "automation agency",
    "RPA development",
    "Klaviyo email marketing",
    "Shopify email automation",
    "workflow automation",
    "business process automation"
  ];
  
  const metaKeywords = keywords.length > 0 ? keywords.join(", ") : defaultKeywords.join(", ");

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
      
      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
