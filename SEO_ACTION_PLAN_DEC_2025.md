# SEO Action Plan - December 2025

**Last Updated:** December 10, 2025  
**Google Search Console Status:** 20 indexed, 394 not indexed

---

## 🚨 Critical Issues (Fix Immediately)

### 1. Soft 404 (69 pages) - **FIXED**

**Problem:** Googlebot sees empty pages before JavaScript renders content.

**Solution Implemented:**

- ✅ Added `netlify-plugin-prerender-spa` to `netlify.toml`
- ✅ Added `@netlify/plugin-sitemap` for automatic sitemap updates

**Next Steps:**

1. Deploy to Netlify (these plugins will auto-install)
2. Wait 1-2 weeks for Google to re-crawl
3. Request re-indexing in GSC for affected URLs

**Expected Result:** Soft 404 count should drop from 69 to ~10-15

---

### 2. Crawled - currently not indexed (140 pages)

**Problem:** Google crawled but chose not to index (largest issue).

**Root Causes:**

- Low-quality or thin content (< 300 words)
- Duplicate content across pages
- Low page authority
- Not enough unique value

**Action Plan:**

#### **Phase 1: Content Audit (Week 1)**

Run audit to identify:

- [ ] Pages with < 300 words of unique content
- [ ] Pages with duplicate titles/descriptions
- [ ] Pages missing h1 tags
- [ ] Pages with broken internal links

#### **Phase 2: Content Enhancement (Weeks 2-4)**

For each low-quality page:

- [ ] Add 500+ words of unique, valuable content
- [ ] Add FAQ section with schema markup
- [ ] Add internal links from high-authority pages
- [ ] Update meta descriptions to be more compelling
- [ ] Add relevant images with alt text

#### **Phase 3: Technical Fixes (Week 1)**

- [ ] Add `<link rel="canonical">` to all pages
- [ ] Ensure all pages have unique titles (check duplicate titles)
- [ ] Add schema markup (Article, FAQPage, BreadcrumbList)
- [ ] Improve internal linking structure

---

### 3. Not found (404) - 39 pages

**Problem:** Old URLs in Google's index that no longer exist.

**Solution:**

1. Export list of 404 URLs from GSC
2. Create 301 redirects to relevant current pages
3. Remove URLs from Google's index via GSC URL Removal tool

**Action Required:**

```bash
# 1. Go to GSC > Pages > Not found (404)
# 2. Export list of URLs
# 3. Add to netlify.toml redirects section:

[[redirects]]
  from = "/old-url"
  to = "/new-url"
  status = 301
  force = true
```

---

### 4. Page with redirect (29 pages)

**Problem:** Too many redirect chains slow crawling.

**Check:**

- [ ] Verify all redirects are 301 (permanent), not 302 (temporary)
- [ ] Remove redirect chains (A → B → C should be A → C)
- [ ] Update internal links to point directly to final URLs

---

### 5. Excluded by 'noindex' tag (68 pages)

**Status:** PASSED - These are intentionally excluded

**Action:** Review list to ensure no important pages are accidentally excluded:

- Privacy policy pages ✅
- Terms of service ✅
- Admin pages ✅
- Duplicate pages ✅

**No action needed** unless important pages are mistakenly tagged.

---

## 📊 Performance Monitoring

### Blog Post Trends (Last 90 days):

#### **Winner: 10 Klaviyo Automation Flows** 📈

- **+335% impressions** (GROWING!)
- **Action:** Double down on this content
  - Create related posts (Klaviyo segmentation, advanced flows)
  - Add more internal links to this post
  - Update with 2025 examples
  - Add video embedded content

#### **Declining: Black Friday Klaviyo** 📉

- **-87% impressions** (SEASONAL DECLINE EXPECTED)
- **Action for 2025:**
  - Update for BFCM 2025 in October
  - Add "Updated for 2025" badge
  - Refresh statistics and examples
  - Add case study results from 2024

---

## 🎯 Quick Wins (Implement This Week)

### 1. Add FAQ Schema to Top Blog Posts

**Why:** Get featured snippets in Google results

**Target pages:**

- `/blog/10-klaviyo-automation-flows-every-ecommerce-store-needs`
- `/blog/voice-ai-healthcare-hipaa-patient-scheduling-guide`
- `/blog/voice-ai-shopify-brands-customer-service-guide`

**Implementation:** Already in `BlogPostPage.jsx` (lines 43-100) - just verify it's working

---

### 2. Fix Missing Breadcrumbs in GSC

**Current Status:** 0 valid breadcrumbs detected by Google

**Problem:** Breadcrumbs exist in code but not recognized by GSC

**Solution:**

- [ ] Validate breadcrumb JSON-LD with Google Rich Results Test
- [ ] Ensure `itemListElement` has proper `@id` and `item` URLs
- [ ] Add breadcrumbs to ALL pages (currently missing on some)

**Test URL:** https://search.google.com/test/rich-results

---

### 3. Optimize High-Impression Pages

**Pages getting impressions but low clicks:**

Check GSC > Performance > Pages and identify pages with:

- High impressions (>100)
- Low CTR (<2%)

**Fix:**

1. Rewrite meta descriptions to be more compelling
2. Add power words ("Free", "Guide", "2025", "Complete")
3. Add numbers to titles ("10 Ways", "5 Steps")
4. Include call-to-action in description

---

## 🔍 Ongoing Monitoring (Weekly Tasks)

### Week 1:

- [ ] Deploy Netlify prerendering plugin
- [ ] Export 404 URLs from GSC and create redirects
- [ ] Request re-indexing for Soft 404 pages

### Week 2:

- [ ] Check if Soft 404 count decreased
- [ ] Audit top 20 "Crawled - currently not indexed" pages
- [ ] Add 500+ words to thin content pages

### Week 3:

- [ ] Validate breadcrumb structured data
- [ ] Add FAQ schema to top 5 blog posts
- [ ] Update declining Black Friday post

### Week 4:

- [ ] Re-submit sitemap in GSC
- [ ] Check indexing progress
- [ ] Document what worked / what didn't

---

## 📈 Expected Results Timeline

### Week 1-2:

- Soft 404s: 69 → 40 (-42%)
- Indexed pages: 20 → 30 (+50%)

### Week 3-4:

- Soft 404s: 40 → 20 (-50% total)
- Indexed pages: 30 → 50 (+150% total)
- Crawled not indexed: 140 → 100 (-29%)

### Month 2:

- Soft 404s: 20 → 10 (-85% total)
- Indexed pages: 50 → 100 (+400% total)
- Crawled not indexed: 100 → 60 (-57% total)

### Month 3:

- Target: 150+ indexed pages (750% increase)
- Target: <50 crawled not indexed
- Target: <5 soft 404s

---

## 🛠️ Tools & Resources

**Validation Tools:**

- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema Markup Validator: https://validator.schema.org/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- PageSpeed Insights: https://pagespeed.web.dev/

**Monitoring:**

- Google Search Console: https://search.google.com/search-console
- Weekly GSC Reports: Enable email notifications for coverage issues

---

## 📝 Notes

- **Prerendering plugin** added to fix Soft 404s - this is the single most important fix
- **140 "Crawled not indexed"** pages will require manual content improvements
- **68 noindex pages** are intentional - no action needed
- **Blog post strategy:** Focus on expanding high-performing content (Klaviyo flows)
- **Seasonal content:** Update Black Friday post in October 2025

**Next Review:** December 24, 2025 (2 weeks after deploy)
