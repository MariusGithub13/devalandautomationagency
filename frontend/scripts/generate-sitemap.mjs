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
  const unique = Array.from(new Set([...ROUTES, ...blog]));
  const xml = toXml(unique);
  const out = path.join(PUBLIC, "sitemap.xml");
  fs.writeFileSync(out, xml, "utf8");
  console.log(`[sitemap] wrote ${unique.length} urls to public/sitemap.xml`);
}

main();