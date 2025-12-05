// Writes frontend/public/sitemap.xml at build time
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

// canonical base
const BASE = "https://devaland.com";

// Known routes (React SPA) — unified short slugs
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

// Blog post slugs from mock.js
// Generated using: title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')
const BLOG_POSTS = [
  "/blog/10-klaviyo-automation-flows-every-e-commerce-store-needs",
  "/blog/email-segmentation-strategies-that-actually-work",
  "/blog/maximizing-black-friday-sales-with-klaviyo",
  "/blog/sms-marketing-the-perfect-complement-to-email",
  "/blog/advanced-klaviyo-analytics-beyond-open-and-click-rates",
  "/blog/building-customer-loyalty-through-email-personalization",
  "/blog/all-in-one-chat-widget-complete-guide",
  "/blog/voice-ai-agents-future-business-communication",
  "/blog/voice-ai-implementation-real-business-results-roi-analysis-technical-guide",
  "/blog/voice-ai-pricing-comparison-2025",
  "/blog/ai-voice-assistants-small-business-guide-2025",
  "/blog/voice-ai-vs-call-centers-cost-benefit-analysis",
  "/blog/voice-ai-restaurants-phone-orders-reservations-guide",
  "/blog/voice-ai-healthcare-hipaa-patient-scheduling-guide",
];

// Optionally find static HTML blog posts under public/blog/*.html
function discoverBlogUrls() {
  const blogDir = path.join(PUBLIC, "blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith(".html"))
    .map((d) => `/blog/${d.name.replace(/\.html$/, "")}`);
}

function toXml(routes) {
  const now = new Date().toISOString();

  const changefreq = (loc) => (loc.startsWith("/blog/") ? "monthly" : loc === "/" ? "weekly" : "weekly");
  const priority = (loc) => (loc === "/" ? "1.0" : loc === "/blog" ? "0.6" : "0.8");

  const body = routes
    .map((loc) => {
      const href = `${BASE}${loc}`;
      return `
<url>
  <loc>${href}</loc>
  <lastmod>${now}</lastmod>
  <changefreq>${changefreq(loc)}</changefreq>
  <priority>${priority(loc)}</priority>
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
  const blog = discoverBlogUrls();
  const unique = Array.from(new Set([...ROUTES, ...BLOG_POSTS, ...blog]));
  const xml = toXml(unique);
  const out = path.join(PUBLIC, "sitemap.xml");
  fs.writeFileSync(out, xml, "utf8");
  console.log(`[sitemap] wrote ${unique.length} urls to public/sitemap.xml`);
}

main();