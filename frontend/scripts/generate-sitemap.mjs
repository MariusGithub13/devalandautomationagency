/**
 * Devaland Marketing - Automated Sitemap Generator (2026)
 * Generates frontend/public/sitemap.xml at build time.
 * Extension: .mjs (ES Module)
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

// Canonical base URL
const BASE = "https://devaland.com";

// 1. Known Static Routes (React SPA)
const ROUTES = [
  "/",
  "/klaviyo",
  "/klaviyo-gdpr",
  "/klaviyo-gdpr-compliance",
  "/klaviyo-black-friday-strategy",
  "/klaviyo-flows-examples",
  "/klaviyo-predicted-next-order",
  "/klaviyo-placed-order-rate",
  "/klaviyo-automation-guide",
  "/klaviyo-segmentation-strategies",
  "/klaviyo-email-templates",
  "/voice-ai",
  "/services",
  "/case-studies",
  "/about",
  "/blog",
  "/contact",
  "/klaviyo-case-studies",
  "/sitemap.html",
  "/privacy",
  "/terms",
  "/cookies",
  "/gdpr",
];

// 2. Blog Post Slugs from your data/mock.js
const BLOG_POSTS = [
  "/blog/best-10-klaviyo-automation-flows-every-ecommerce-store-needs",
  "/blog/email-segmentation-strategies-that-actually-work",
  "/blog/maximizing-black-friday-sales-with-klaviyo",
  "/blog/sms-marketing-the-perfect-complement-to-email",
  "/blog/advanced-klaviyo-analytics-beyond-open-and-click-rates",
  "/blog/building-customer-loyalty-through-email-personalization",
  "/blog/all-in-one-chat-widget-complete-guide",
  "/blog/voice-ai-agents-the-future-of-business-communication",
  "/blog/voice-ai-implementation-real-business-results-roi-analysis-technical-guide",
  "/blog/voice-ai-pricing-comparison-2025",
  "/blog/ai-voice-assistants-small-business-guide-2025",
  "/blog/voice-ai-vs-call-centers-cost-benefit-analysis",
  "/blog/voice-ai-restaurants-phone-orders-reservations-guide",
  "/blog/voice-ai-healthcare-hipaa-patient-scheduling-guide",
  "/blog/voice-ai-shopify-brands-customer-service-guide",
];

/**
 * Scans for any static HTML blog posts under public/blog/*.html
 */
function discoverBlogUrls() {
  const blogDir = path.join(PUBLIC, "blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith(".html"))
    .map((d) => `/blog/${d.name.replace(/\.html$/, "")}`);
}

/**
 * Generates XML body based on route priority and crawl frequency
 */
function toXml(routes) {
  const now = new Date().toISOString();

  // Daily for index and blog home; monthly for articles
  const getChangefreq = (loc) => {
    if (loc === "/" || loc === "/blog") return "daily";
    if (loc.startsWith("/blog/")) return "monthly";
    return "weekly";
  };

  // Higher priority for core service pages (Voice AI/Klaviyo)
  const getPriority = (loc) => {
    if (loc === "/") return "1.0";
    if (loc === "/voice-ai" || loc === "/klaviyo") return "0.9";
    if (loc === "/blog") return "0.8";
    if (loc.startsWith("/blog/")) return "0.7";
    return "0.5"; // Utilities/Legal
  };

  const body = routes
    .map((loc) => {
      // Clean up the root URL slash to avoid double slashes
      const href = `${BASE}${loc === "/" ? "" : loc}`;
      return `
<url>
  <loc>${href}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>${getChangefreq(loc)}</changefreq>
  <priority>${getPriority(loc)}</priority>
</url>`.trim();
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

function main() {
  const blogHtml = discoverBlogUrls();
  const allUrls = Array.from(new Set([...ROUTES, ...BLOG_POSTS, ...blogHtml]));

  // Sorting urls alphabetically
  allUrls.sort();

  const xml = toXml(allUrls);
  const outPath = path.join(PUBLIC, "sitemap.xml");

  try {
    fs.writeFileSync(outPath, xml, "utf8");
    console.log(`[sitemap] Successfully wrote ${allUrls.length} URLs to public/sitemap.xml`);
  } catch (error) {
    console.error(`[sitemap] Error writing sitemap: ${error.message}`);
  }
}

main();