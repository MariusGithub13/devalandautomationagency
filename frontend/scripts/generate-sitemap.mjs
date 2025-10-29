// Node ESM script – writes frontend/public/sitemap.xml at build time
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const SITE_URL = process.env.SITE_URL || "https://devaland.com";

// 1) Core routes
const routes = [
  "/",
  "/klaviyo-services",
  "/automation-services",
  "/case-studies",
  "/klaviyo-case-studies",
  "/about",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
  "/gdpr",
  "/sitemap.html",
];

// 2) Auto-add blog html files under public/blog (if any)
const blogDir = path.join(PUBLIC, "blog");
if (fs.existsSync(blogDir)) {
  const stack = [blogDir];
  while (stack.length) {
    const dir = stack.pop();
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) stack.push(full);
      else if (ent.isFile() && ent.name.endsWith(".html")) {
        const rel = full.replace(PUBLIC, "").replace(/index\.html$/, "");
        const pretty = rel.replace(/\.html$/, "");
        routes.push(pretty);
      }
    }
  }
}

// 3) Build url entries (valid changefreq values only)
const now = new Date().toISOString();
const entries = routes
  .map((route) => route.replace(/\/{2,}/g, "/"))
  .filter((v, i, arr) => arr.indexOf(v) === i) // unique
  .map((route) => {
    const changefreq = route.startsWith("/blog") ? "monthly" : "weekly";
    const priority =
      route === "/" ? "1.0" : route.startsWith("/blog") ? "0.6" : "0.8";
    return {
      loc: `${SITE_URL}${route}`,
      lastmod: now,
      changefreq,
      priority,
    };
  });

// 4) Write XML
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  entries
    .map(
      (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>\n`
    )
    .join("") +
  `</urlset>\n`;

fs.writeFileSync(path.join(PUBLIC, "sitemap.xml"), xml, "utf8");
console.log(`[sitemap] wrote ${entries.length} urls to public/sitemap.xml`);
