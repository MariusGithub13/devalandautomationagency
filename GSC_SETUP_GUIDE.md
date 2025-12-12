# Google Search Console Setup Guide

**Last Updated**: December 12, 2025

## Primary Property Configuration

### ✅ Recommended: Domain Property

**Property**: `devaland.com`

**Advantages:**

- Aggregates all protocol variants (http/https)
- Includes all subdomains automatically
- Single source of truth for all site data
- Future-proof for subdomain expansion
- Better data accuracy (currently capturing +1 click and +1 query vs URL prefix)

### Verification Methods

**DNS Verification (Recommended for domain properties):**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property → Domain property → Enter `devaland.com`
3. Copy the TXT record provided by Google
4. Add to DNS settings (Netlify or domain registrar)
5. Click "Verify"

**HTML Tag Verification (Alternative):**

```html
<!-- Add to frontend/public/index.html in <head> section -->
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

## Sitemap Submission

### Current Sitemap Configuration

**Sitemap URL**: `https://devaland.com/sitemap.xml`

**Auto-generated via**: `frontend/scripts/generate-sitemap.mjs` (runs during `prebuild`)

**Included URLs**:

- All React SPA routes (from `ROUTES` array)
- Blog posts (from `BLOG_POSTS` array)
- Static HTML files in `public/blog/` directory

### Submit to GSC

1. Open [Google Search Console](https://search.google.com/search-console)
2. Select `devaland.com` property
3. Go to **Sitemaps** (left sidebar)
4. Enter sitemap URL: `sitemap.xml`
5. Click **Submit**

**Expected Result**: Google will discover and crawl all listed URLs.

## Current GSC Data (December 2025)

### Performance Metrics (Last 90 days)

**Domain Property** (`devaland.com`):

- **Total Clicks**: 12
- **Total Impressions**: 124
- **Unique Queries**: 66
- **Primary Traffic**: Brand searches ("devaland")

**High-Impression Zero-Click Queries**:

- `best klaviyo flows` (22 impressions, 0 clicks)
- `what is klaviyo sales funnel` (14 impressions, 0 clicks)
- `klaviyo black friday` (13 impressions, 0 clicks)
- `klaviyo automation` (12 impressions, 0 clicks)
- `predicted date of next order klaviyo` (10 impressions, 0 clicks)

### Coverage Status

**✅ Indexed Pages**: Monitor weekly via GSC > Coverage report

**⚠️ Known Issues** (see `SEO_INDEXING_FIXES.md` for details):

- 139 pages: "Crawled - currently not indexed"
- 72 pages: "Soft 404" (empty content detection)
- 39 pages: "Not found (404)" - old URLs requiring redirects

## URL Structure Best Practices

### Current Configuration ✅

**Primary Domain**: `https://devaland.com` (non-www, HTTPS)

**Redirect Chain**:

```
http://www.devaland.com → https://devaland.com
http://devaland.com → https://devaland.com
https://www.devaland.com → https://devaland.com
```

**Canonical Tags**: All pages use `https://devaland.com` in canonical URLs

**Configured in**:

- `netlify.toml` (301 redirects)
- `frontend/public/_redirects` (Netlify rules)
- `frontend/src/components/SEO.jsx` (canonical meta tags)

### URL Guidelines

**✅ DO:**

- Use `https://devaland.com/page-name` format
- Include canonical tags on all pages
- Keep URLs short and descriptive
- Use hyphens for word separation
- Include target keywords in URLs

**❌ DON'T:**

- Use www subdomain
- Add trailing slashes (except homepage: `/`)
- Use query parameters for main content pages
- Include session IDs or tracking parameters in URLs

## Monitoring & Maintenance

### Weekly Tasks

1. **Check Coverage Report**

   - GSC > Coverage > See which pages are indexed
   - Monitor "Crawled - currently not indexed" issues
   - Request re-indexing for important pages

2. **Review Performance Data**

   - GSC > Performance > Check clicks, impressions, CTR
   - Identify high-impression, zero-click queries
   - Create content for missed opportunities

3. **Monitor Search Appearance**
   - GSC > Enhancements > Structured Data
   - Check for schema markup errors
   - Validate breadcrumb implementation

### Monthly Tasks

1. **Sitemap Health**

   - GSC > Sitemaps > Check submission status
   - Verify all important pages are included
   - Update sitemap if new pages added

2. **Core Web Vitals**

   - GSC > Experience > Core Web Vitals
   - Monitor mobile vs desktop performance
   - Address CLS, LCP, FID issues

3. **Mobile Usability**
   - GSC > Experience > Mobile Usability
   - Fix any mobile-specific issues
   - Test responsive design on key pages

### Quarterly Tasks

1. **Search Analytics Deep Dive**

   - Export 3-month performance data
   - Identify trending queries
   - Analyze competitor rankings

2. **Content Gap Analysis**

   - Compare impressions vs clicks
   - Find underperforming pages
   - Create content strategy for gaps

3. **Technical SEO Audit**
   - Review redirect chains
   - Check for broken links
   - Validate structured data

## Re-Indexing Workflow

### Request URL Inspection

For new/updated pages:

1. Open GSC > URL Inspection tool
2. Enter full URL: `https://devaland.com/page-name`
3. Wait for Google to fetch the page
4. If eligible, click "Request Indexing"
5. Monitor status in Coverage report

### Bulk Re-Indexing

For multiple pages:

1. Ensure sitemap is updated
2. Submit sitemap to GSC (forces recrawl)
3. Monitor crawl stats in Settings > Crawl Stats
4. Wait 7-14 days for Google to process

## Integration with Other Tools

### Google Analytics 4 (GA4)

**Link Properties**:

- Go to GSC > Settings > Property Settings
- Click "Link with Google Analytics"
- Select GA4 property to link
- View GSC data inside GA4 reports

### Netlify Prerendering

**Current Setup** (configured in `netlify.toml`):

```toml
[[plugins]]
  package = "@netlify/plugin-sitemap"
```

**How It Helps GSC**:

- Generates static HTML for crawlers
- Reduces "Soft 404" errors
- Improves indexing of SPA routes
- Provides content for Google to analyze

## Troubleshooting Common Issues

### Issue: "Crawled - currently not indexed"

**Cause**: Google crawled the page but decided not to index it (low quality signal)

**Solutions**:

1. Add unique, valuable content (500+ words)
2. Include target keywords naturally
3. Add internal links from high-authority pages
4. Ensure page has proper meta descriptions
5. Request re-indexing after improvements

### Issue: "Soft 404"

**Cause**: Page returns 200 status but appears empty (React SPA issue)

**Solutions**:

1. Enable Netlify prerendering (already configured)
2. Add server-side rendering (SSR)
3. Ensure content loads quickly
4. Check JavaScript errors preventing render

### Issue: "Alternative page with proper canonical tag"

**Cause**: Multiple URLs point to the same content

**Solutions**:

1. Verify canonical tags are correct
2. Use 301 redirects for duplicate URLs
3. Consolidate similar content
4. Choose one preferred URL structure

## Resources

- [Google Search Console](https://search.google.com/search-console)
- [Google Search Central Documentation](https://developers.google.com/search/docs)
- [Netlify Plugin Sitemap](https://github.com/netlify/netlify-plugin-sitemap)
- Internal: `SEO_INDEXING_FIXES.md` - Complete indexing action plan
- Internal: `PAGESPEED_PERFORMANCE_FIXES_DEC_2025.md` - Core Web Vitals optimization

## Quick Reference Commands

```bash
# Regenerate sitemap locally
cd frontend && npm run build

# Test sitemap URL
curl -I https://devaland.com/sitemap.xml

# Validate sitemap structure
xmllint --noout frontend/public/sitemap.xml

# Check robots.txt
curl https://devaland.com/robots.txt
```

---

**Note**: Always use the **domain property** (`devaland.com`) for primary monitoring and optimization decisions. The URL prefix property (`https://devaland.com/`) can be kept for historical data and troubleshooting specific protocol issues.
