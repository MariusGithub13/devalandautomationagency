# Broken Link Testing Script

A comprehensive Node.js script to test all internal routes and external links across the Devaland website.

## Features

- ✅ **Internal Route Validation** - Verifies all React Router paths against App.js configuration
- ✅ **External URL Testing** - Tests external links with retry logic and rate limiting
- ✅ **Image Asset Verification** - Checks for missing image files in public folder
- ✅ **Dynamic Route Support** - Handles parameterized routes like `/blog/:slug`
- ✅ **Detailed Reporting** - Generates JSON reports with comprehensive test results
- ✅ **Colorized Output** - Easy-to-read terminal output with color-coded results

## Installation

No additional dependencies required. Uses Node.js built-in modules:
- `fs` - File system operations
- `path` - Path manipulation
- `https`/`http` - HTTP requests
- `url` - URL parsing

## Usage

### Basic Usage (Internal Links Only)

```bash
node frontend/scripts/test-broken-links.js
```

This will:
- Scan all JSX/JS files for links
- Validate internal routes against React Router configuration
- Check image assets in the public folder
- Display results in terminal

### Full Testing (Internal + External Links)

```bash
node frontend/scripts/test-broken-links.js --external
```

⚠️ **Warning:** External link testing can take several minutes depending on the number of URLs.

### Generate Report File

```bash
node frontend/scripts/test-broken-links.js --output report.json
```

Or with external link testing:

```bash
node frontend/scripts/test-broken-links.js --external --output full-report.json
```

## Output

### Terminal Output

```
╔════════════════════════════════════════════════════════╗
║     Devaland Broken Link Testing                       ║
╚════════════════════════════════════════════════════════╝

Step 1: Scanning source files for links...
  Found 91 internal references
  Found 25 external references
  Found 5 anchor references

Step 2: Loading defined routes from App.js...
  Found 23 defined routes

Step 3: Validating internal routes...
  ✓ / (exact)
  ✓ /blog (exact)
  ✓ /blog/post-slug (dynamic)
  ...

╔════════════════════════════════════════════════════════╗
║                  TEST SUMMARY                          ║
╚════════════════════════════════════════════════════════╝

  Total Links Tested: 37
  ✓ Working Links: 37
  ✗ Broken Links: 0
  ⚠ Warnings: 0
  ○ Skipped Links: 25
```

### JSON Report Format

```json
{
  "timestamp": "2025-12-13T13:32:04.212Z",
  "summary": {
    "totalLinks": 37,
    "workingLinks": 37,
    "brokenLinks": 0,
    "skippedLinks": 25,
    "warnings": 0
  },
  "internalRoutes": [
    {
      "href": "/",
      "type": "Link",
      "foundIn": "Header.jsx",
      "status": "working",
      "routeType": "exact"
    }
  ],
  "externalLinks": [],
  "errors": [],
  "warnings": []
}
```

## How It Works

### 1. Link Extraction

The script scans all `.jsx` and `.js` files in `frontend/src/` directory and extracts:

- **React Router Links:** `to="/path"` attributes
- **Anchor Tags:** `href="..."` attributes
- **Image Sources:** `src="/images/..."` attributes

### 2. Internal Route Validation

For each internal link, the script:

1. Loads defined routes from `App.js`
2. Checks for exact matches: `/about` → `<Route path="/about" />`
3. Checks for dynamic matches: `/blog/post-slug` → `<Route path="/blog/:slug" />`
4. Verifies static files exist in `public/` folder
5. Verifies image files exist in `public/images/` folder

### 3. External URL Testing

For each external URL, the script:

1. Makes HTTP HEAD request to check availability
2. Implements retry logic (up to 2 retries) for transient failures
3. Handles rate limiting (429 status codes)
4. Uses timeouts (10 seconds) to prevent hanging
5. Batches requests (10 URLs per batch) with delays between batches

### 4. Result Reporting

The script provides:

- **Terminal Output:** Real-time progress with color-coded results
- **JSON Report:** Detailed results for further analysis
- **Exit Codes:** 0 for success, 1 for failures (useful in CI/CD)

## Configuration

You can modify these constants in the script:

```javascript
const TIMEOUT = 10000; // Request timeout in milliseconds
const USER_AGENT = 'Mozilla/5.0 (compatible; DevalandLinkChecker/1.0)';
const batchSize = 10; // URLs tested in parallel
const delayMs = 1000; // Delay between batches
const maxRetries = 2; // Retry attempts for failed requests
```

## Link Types Detected

### Internal Links
- React Router `<Link to="/path">` components
- Anchor tags with relative paths: `<a href="/path">`
- Static file references: `/sitemap.html`, `/robots.txt`
- Image assets: `/images/photo.jpg`

### External Links
- HTTP/HTTPS URLs: `https://example.com`
- Excluded: `mailto:`, `tel:`, `#anchor` links

### Special Cases
- **Dynamic Routes:** Automatically detected from `:param` syntax in App.js
- **Hash Links:** Treated as anchors (not tested for existence)
- **Query Parameters:** Stripped for route matching

## CI/CD Integration

Add to package.json scripts:

```json
{
  "scripts": {
    "test:links": "node frontend/scripts/test-broken-links.js",
    "test:links:full": "node frontend/scripts/test-broken-links.js --external --output link-report.json"
  }
}
```

Use in CI pipeline:

```yaml
# GitHub Actions example
- name: Test Internal Links
  run: npm run test:links
```

## Troubleshooting

### "ENOTFOUND" errors for external links

This typically indicates:
1. DNS resolution issues (common in restricted environments)
2. Domain doesn't exist
3. Network firewall blocking requests

**Solution:** Test in production environment with full internet access.

### "Request timeout" errors

This indicates:
1. Server is slow to respond
2. Network latency issues
3. Timeout setting too low

**Solution:** Increase `TIMEOUT` constant or test from different network.

### "HTTP 429" rate limit errors

This indicates:
1. Too many requests to the same domain
2. Server rate limiting detected

**Solution:** Script automatically retries with delay. If persistent, increase `delayMs`.

## Best Practices

1. **Run regularly:** Weekly for internal links, monthly for external links
2. **Monitor critical links:** Set up separate monitoring for business-critical URLs (e.g., Calendly)
3. **Update script:** Keep the route detection logic in sync with App.js changes
4. **Use in CI/CD:** Catch broken links before deployment
5. **Review warnings:** Even non-breaking issues (redirects) should be reviewed

## Limitations

1. **JavaScript-rendered content:** Cannot test links loaded dynamically after page load
2. **Authentication required:** Cannot test links behind login walls
3. **Rate limits:** Some services may block automated testing
4. **DNS restrictions:** Sandboxed environments may not resolve external domains

## Contributing

To improve the script:
1. Add support for more link types
2. Implement parallel external link testing
3. Add support for sitemap.xml validation
4. Integrate with link monitoring services APIs

## License

Part of Devaland Automation Agency codebase.
