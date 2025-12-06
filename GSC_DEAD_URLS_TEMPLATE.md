# GSC Dead URLs Removal Template

## Instructions for URL Removal

**Status:** Waiting for GSC CSV export from client

### How to Export GSC Not-Indexed URLs:

1. Go to: https://search.google.com/search-console
2. Select property: `devaland.com`
3. Navigate to: **Indexing** → **Pages**
4. Click on **"Not indexed"** section (showing 394 pages)
5. Review the reasons:
   - "Not found (404)"
   - "Soft 404"
   - "Crawled - currently not indexed"
   - "Page with redirect"
6. Click **Export** button (top right corner)
7. Download the CSV file
8. Upload it here for processing

### Once CSV is Provided, I Will:

1. **Analyze the URLs** to categorize them:

   - Dead URLs to remove permanently
   - Redirect opportunities (301 redirects)
   - URLs that need content fixes
   - Duplicate content issues

2. **Create Redirect Rules** in `netlify.toml`:

   ```toml
   [[redirects]]
     from = "/old-url"
     to = "/new-url"
     status = 301
     force = true
   ```

3. **Generate GSC Removal Requests List**:

   - Batch removal commands
   - URLs to submit to GSC Removals tool
   - Priority order for submissions

4. **Create Internal Link Audit**:
   - Find and fix any remaining internal links to dead URLs
   - Update sitemap if needed

### Expected Results After Processing:

- **Indexed pages:** 20 → 38 (all valid URLs)
- **Not indexed:** 394 → <50 (cleaned up)
- **Broken links:** All fixed
- **Redirects:** Properly configured for moved content

### Next Steps:

**Please provide the CSV file from Google Search Console so I can:**

1. Analyze the 394 not-indexed URLs
2. Identify which are truly dead vs. fixable
3. Create proper 301 redirects
4. Generate the removal request list
5. Fix any remaining issues

---

**Note:** I've already fixed the 7 broken internal blog links identified earlier. Once you provide the GSC CSV, I can complete the full URL cleanup process.
