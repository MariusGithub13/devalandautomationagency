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
import { blogPosts } from "../src/data/mock.js";

const BLOG_POSTS = blogPosts.map(post => `/blog/${post.slug}`);

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

  // Write XML
  const xml = toXml(allUrls);
  const outPath = path.join(PUBLIC, "sitemap.xml");

  // Write HTML
  const html = toHtml(allUrls);
  const htmlPath = path.join(PUBLIC, "sitemap.html");

  try {
    fs.writeFileSync(outPath, xml, "utf8");
    console.log(`[sitemap] Successfully wrote ${allUrls.length} URLs to public/sitemap.xml`);

    fs.writeFileSync(htmlPath, html, "utf8");
    console.log(`[sitemap] Successfully wrote public/sitemap.html`);
  } catch (error) {
    console.error(`[sitemap] Error writing sitemap: ${error.message}`);
  }
}

/**
 * Generates simple HTML sitemap for humans
 */
function toHtml(routes) {
  const links = routes.map(route => {
    // Derive a readable title from the slug
    const title = route === "/" ? "Home" :
      route.split("/").pop().replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
    return `<li><a href="${route}">${title}</a></li>`;
  }).join("\n    ");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Devaland - Sitemap</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 0 auto; padding: 2rem; line-height: 1.6; }
    h1 { color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; }
    ul { list-style-type: none; padding: 0; }
    li { margin-bottom: 0.5rem; }
    a { text-decoration: none; color: #334155; font-weight: 500; }
    a:hover { color: #2563eb; text-decoration: underline; }
  </style>
</head>
<body>
  <h1>Sitemap</h1>
  <ul>
    ${links}
  </ul>
</body>
</html>`;
}

main();