# Google Search Console Indexing Issues - Action Plan

## Current Problems (as of Nov 24, 2025)

Based on Google Search Console data:

1. ❌ **139 pages**: "Crawled - currently not indexed" (CRITICAL)
2. ❌ **72 pages**: "Soft 404" (Google thinks pages are empty)
3. ❌ **47 pages**: "Alternative page with proper canonical tag"
4. ❌ **39 pages**: "Not found (404)"
5. ❌ **29 pages**: "Page with redirect"
6. ✅ **69 pages**: "Excluded by 'noindex' tag" (PASSED - intentional)

## Root Causes

### 1. **SPA Crawlability Issues** (MAIN ISSUE)

- React Single Page Application loads content via JavaScript
- Googlebot sees empty HTML shell initially
- Content renders client-side AFTER initial HTML parse
- Results in "soft 404" and "crawled but not indexed"

### 2. **Missing Server-Side Rendering (SSR)**

- No pre-rendering of React pages
- No static HTML snapshots for crawlers
- Googlebot has to wait for JavaScript execution

### 3. **Redirect Chain Issues**

- 29 pages with redirects may be old URLs pointing to new structure
- Need to identify and fix redirect chains

### 4. **404 Pages**

- 39 pages returning 404
- Likely old blog posts or URLs in Google's index
- Need to identify and create 301 redirects

## Immediate Fixes (Can Implement Now)

### Fix 1: Add Prerendering for SEO-Critical Pages

**Option A: Netlify Prerendering Plugin** (RECOMMENDED)

```bash
# Add to netlify.toml
[[plugins]]
  package = "@netlify/plugin-prerendering"
```

**Option B: React Snap** (Static prerendering)

```bash
npm install --save-dev react-snap
```

### Fix 2: Improve Meta Tags Per Page

Each page component needs:

- Unique title tag
- Unique meta description
- Canonical URL
- Open Graph tags
- Structured data (JSON-LD)

**Implementation**: Use `react-helmet-async` or manual approach

### Fix 3: Add Structured Data to All Pages

Currently only homepage has Organization schema. Need:

- Article schema for blog posts
- BreadcrumbList for navigation
- WebPage schema for all pages
- FAQPage schema where relevant

### Fix 4: Fix Redirect Chains

Add to `netlify.toml`:

```toml
# Old blog URL redirects
[[redirects]]
  from = "/old-blog-url"
  to = "/blog/new-slug"
  status = 301
  force = true
```

### Fix 5: Improve Sitemap with Lastmod Dates

Current sitemap uses same lastmod for all pages. Need:

- Real lastmod dates from git or file system
- Priority adjustment based on page importance
- Image sitemaps for blog posts

## Long-Term Solutions

### Solution 1: Migrate to Next.js (BEST SOLUTION)

- Built-in SSR/SSG (Static Site Generation)
- Automatic code splitting
- Better SEO out of the box
- API routes for contact form
- Image optimization

**Estimated effort**: 2-3 weeks
**Impact**: Eliminates 90%+ of indexing issues

### Solution 2: Add Dynamic Rendering for Bots

Use service like Prerender.io or Rendertron:

- Detects bot user agents
- Serves pre-rendered HTML to bots
- Regular users get React SPA

**Estimated effort**: 1-2 days
**Impact**: Fixes "crawled but not indexed" issues
**Cost**: $5-20/month

### Solution 3: Implement React Snap

Pre-render all routes to static HTML:

```json
// package.json
{
  "scripts": {
    "postbuild": "react-snap"
  },
  "reactSnap": {
    "include": [
      "/",
      "/klaviyo",
      "/services",
      "/case-studies",
      "/about",
      "/blog",
      "/contact"
    ]
  }
}
```

**Estimated effort**: 1 day
**Impact**: Good for static pages, limited for dynamic content

## Implementation Priority

### Phase 1: Quick Wins (This Week)

1. ✅ **Optimize robots.txt and llms.txt** (DONE)
2. 🔄 **Add react-helmet-async for per-page meta tags**
3. 🔄 **Implement structured data for all page types**
4. 🔄 **Add Netlify prerendering plugin**
5. 🔄 **Identify and fix 404 pages via GSC**

### Phase 2: Medium-Term (Next 2 Weeks)

1. 🔄 **Implement React Snap for static prerendering**
2. 🔄 **Create comprehensive 301 redirect map**
3. 🔄 **Add image sitemaps**
4. 🔄 **Implement breadcrumb structured data**
5. 🔄 **Audit and fix canonical tags**

### Phase 3: Long-Term (Next Quarter)

1. 🔄 **Evaluate Next.js migration**
2. 🔄 **Implement dynamic rendering service**
3. 🔄 **Add hreflang tags for international SEO**
4. 🔄 **Implement AMP for blog posts (optional)**

## Immediate Action Items (TODAY)

### 1. Install React Helmet Async

```bash
cd frontend
npm install react-helmet-async
```

### 2. Add Netlify Prerendering

```toml
# Add to netlify.toml
[[plugins]]
  package = "@netlify/plugin-prerendering"
```

### 3. Export GSC 404 Report

- Go to Google Search Console
- Coverage > Excluded > Not found (404)
- Export list
- Create redirect rules for valid old URLs

### 4. Check for Duplicate Content

- GSC: Coverage > Excluded > Duplicate without canonical
- Add canonical tags to all pages
- Fix any www vs non-www issues

### 5. Submit URL Inspection Requests

- Test live URLs in GSC
- Request indexing for key pages:
  - Homepage
  - /klaviyo
  - /services
  - /case-studies
  - All blog posts

## Monitoring

After implementing fixes:

1. **Submit sitemap** in GSC (if not already done)
2. **Request re-indexing** for fixed pages via URL Inspection
3. **Monitor Coverage report** weekly for 4 weeks
4. **Check Core Web Vitals** for performance issues affecting indexing
5. **Verify mobile-friendliness** (Google mobile-first indexing)

## Expected Timeline

- **Week 1**: Implement quick wins, see 20-30% improvement
- **Week 2-3**: Medium-term fixes, see 50-60% improvement
- **Month 2**: Stabilization, 80%+ pages indexed
- **Quarter 1 2026**: Full migration to Next.js (if chosen), 95%+ indexing

## Resources

- [Google Search Console](https://search.google.com/search-console)
- [Netlify Prerendering](https://docs.netlify.com/site-deploys/post-processing/prerendering/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- [React Snap](https://github.com/stereobooster/react-snap)
- [Next.js](https://nextjs.org/)
