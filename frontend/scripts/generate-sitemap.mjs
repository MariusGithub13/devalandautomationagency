// ESM – generates frontend/public/sitemap.xml
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const BLOG_DIR = path.join(PUBLIC, "blog"); // static blog files (if any)
const SITE_URL = process.env.SITE_URL || "https://devaland.com";

// Known app routes
const coreRoutes = [
  "/",
  "/klaviyo-services",
  "/automation-services",
  "/case-studies",
  "/about",
  "/blog",
  "/contact",
  "/klaviyo-case-studies", // new landing page
  "/sitemap.html",
  "/privacy",
  "/terms",
  "/cookies",
  "/gdpr"
];

// Collect blog URLs if they exist in /public/blog/*.html
function collectBlogUrls() {
  const urls = [];
  if (!fs.existsSync(BLOG_DIR)) return urls;

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".html"));
  files.forEach((f) => {
    const slug = f.replace(/index\.html$/i, "").replace(/\.html$/i, "");
    const route = slug && slug !== "index" ? `/blog/${slug}` : "/blog";
    urls.push(route);
  });
  return Array.from(new Set(urls));
}

const blogRoutes = collectBlogUrls();
// merge + uniq
const allRoutes = Array.from(new Set([...coreRoutes, ...blogRoutes]));

// Build entries with valid changefreq
const now = new Date().toISOString();
const entries = allRoutes.map((route) => {
  const isBlog = route.startsWith("/blog/") || route === "/blog";
  return {
    loc: new URL(route, SITE_URL).toString(),
    lastmod: now,
    changefreq: isBlog ? "monthly" : "weekly",
    priority: route === "/" ? "1.0" : isBlog ? "0.6" : "0.8"
  };
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

if (!fs.existsSync(PUBLIC)) fs.mkdirSync(PUBLIC, { recursive: true });
fs.writeFileSync(path.join(PUBLIC, "sitemap.xml"), xml, "utf8");
console.log(`[sitemap] wrote ${entries.length} URLs to public/sitemap.xml`);