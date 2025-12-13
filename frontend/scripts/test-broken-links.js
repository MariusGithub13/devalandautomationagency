#!/usr/bin/env node
/**
 * Comprehensive Broken Link Testing Script
 * Tests all internal routes and external links across the Devaland website
 * 
 * Usage: node frontend/scripts/test-broken-links.js [--external] [--output report.json]
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration
const FRONTEND_DIR = path.join(__dirname, '../src');
const TIMEOUT = 10000; // 10 seconds
const USER_AGENT = 'Mozilla/5.0 (compatible; DevalandLinkChecker/1.0)';

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

// Parse command line arguments
const args = process.argv.slice(2);
const testExternal = args.includes('--external');
const outputIndex = args.indexOf('--output');
const outputFile = outputIndex !== -1 ? args[outputIndex + 1] : null;

// Results tracking
const results = {
  timestamp: new Date().toISOString(),
  summary: {
    totalLinks: 0,
    workingLinks: 0,
    brokenLinks: 0,
    skippedLinks: 0,
    warnings: 0
  },
  internalRoutes: [],
  externalLinks: [],
  imageAssets: [],
  errors: [],
  warnings: []
};

/**
 * Extract links from JSX files
 */
function extractLinksFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const links = {
    internal: [],
    external: [],
    anchors: []
  };

  // Match React Router Link 'to' attributes
  const linkToMatches = content.matchAll(/to=["']([^"']+)["']/g);
  for (const match of linkToMatches) {
    const href = match[1];
    if (href.startsWith('/')) {
      links.internal.push({ href, file: path.basename(filePath), type: 'Link' });
    }
  }

  // Match anchor 'href' attributes
  const hrefMatches = content.matchAll(/href=["']([^"']+)["']/g);
  for (const match of hrefMatches) {
    const href = match[1];
    if (href.startsWith('http://') || href.startsWith('https://')) {
      links.external.push({ href, file: path.basename(filePath), type: 'anchor' });
    } else if (href.startsWith('/')) {
      links.internal.push({ href, file: path.basename(filePath), type: 'anchor' });
    } else if (href.startsWith('#')) {
      links.anchors.push({ href, file: path.basename(filePath), type: 'anchor' });
    } else if (href.startsWith('tel:') || href.startsWith('mailto:')) {
      // Skip tel: and mailto: links
      continue;
    }
  }

  // Match image src attributes
  const imgMatches = content.matchAll(/src=["']([^"']+\.(?:jpg|jpeg|png|gif|webp|svg))["']/gi);
  for (const match of imgMatches) {
    const src = match[1];
    if (src.startsWith('/images')) {
      links.internal.push({ href: src, file: path.basename(filePath), type: 'image' });
    }
  }

  return links;
}

/**
 * Recursively scan directory for JSX files
 */
function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  const allLinks = {
    internal: [],
    external: [],
    anchors: []
  };

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const subLinks = scanDirectory(filePath);
      allLinks.internal.push(...subLinks.internal);
      allLinks.external.push(...subLinks.external);
      allLinks.anchors.push(...subLinks.anchors);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      const links = extractLinksFromFile(filePath);
      allLinks.internal.push(...links.internal);
      allLinks.external.push(...links.external);
      allLinks.anchors.push(...links.anchors);
    }
  }

  return allLinks;
}

/**
 * Get routes defined in App.js
 */
function getDefinedRoutes() {
  const appJsPath = path.join(FRONTEND_DIR, 'App.js');
  const content = fs.readFileSync(appJsPath, 'utf8');
  const routes = [];

  // Extract routes from <Route path="..." />
  const routeMatches = content.matchAll(/<Route\s+path=["']([^"']+)["']/g);
  for (const match of routeMatches) {
    routes.push(match[1]);
  }

  return routes;
}

/**
 * Check if internal route is defined in App.js
 */
function validateInternalRoute(route, definedRoutes) {
  // Remove hash and query params
  const cleanRoute = route.split('#')[0].split('?')[0];
  
  // Check for exact match
  if (definedRoutes.includes(cleanRoute)) {
    return { valid: true, type: 'exact' };
  }

  // Check for dynamic routes (e.g., /blog/:slug)
  for (const definedRoute of definedRoutes) {
    if (definedRoute.includes(':')) {
      const pattern = definedRoute.replace(/:[^/]+/g, '[^/]+');
      const regex = new RegExp(`^${pattern}$`);
      if (regex.test(cleanRoute)) {
        return { valid: true, type: 'dynamic' };
      }
    }
  }

  // Check if it's a static file in public folder
  if (cleanRoute.match(/\.(html|pdf|xml|txt|json)$/)) {
    const publicPath = path.join(__dirname, '../public', cleanRoute);
    if (fs.existsSync(publicPath)) {
      return { valid: true, type: 'static' };
    }
  }

  // Check if it's an image file
  if (cleanRoute.startsWith('/images')) {
    const publicPath = path.join(__dirname, '../public', cleanRoute);
    if (fs.existsSync(publicPath)) {
      return { valid: true, type: 'image' };
    }
  }

  return { valid: false, type: 'unknown' };
}

/**
 * Test external URL with retry logic
 */
function testExternalUrl(url, maxRetries = 2) {
  return new Promise((resolve) => {
    let attempts = 0;

    function attemptRequest() {
      attempts++;
      
      const urlObj = new URL(url);
      const protocol = urlObj.protocol === 'https:' ? https : http;
      
      const options = {
        method: 'HEAD',
        timeout: TIMEOUT,
        headers: {
          'User-Agent': USER_AGENT
        }
      };

      const req = protocol.request(urlObj, options, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          resolve({ 
            url, 
            status: 'working', 
            statusCode: res.statusCode,
            redirected: res.statusCode >= 300 && res.statusCode < 400
          });
        } else if (res.statusCode === 429 && attempts <= maxRetries) {
          // Rate limited, retry after delay
          setTimeout(() => attemptRequest(), 2000 * attempts);
        } else {
          resolve({ 
            url, 
            status: 'broken', 
            statusCode: res.statusCode,
            error: `HTTP ${res.statusCode}`
          });
        }
      });

      req.on('error', (err) => {
        if (attempts <= maxRetries) {
          setTimeout(() => attemptRequest(), 1000 * attempts);
        } else {
          resolve({ 
            url, 
            status: 'broken', 
            error: err.message 
          });
        }
      });

      req.on('timeout', () => {
        req.destroy();
        if (attempts <= maxRetries) {
          setTimeout(() => attemptRequest(), 1000 * attempts);
        } else {
          resolve({ 
            url, 
            status: 'broken', 
            error: 'Request timeout' 
          });
        }
      });

      req.end();
    }

    attemptRequest();
  });
}

/**
 * Batch test external URLs with rate limiting
 */
async function testExternalUrls(urls, batchSize = 10, delayMs = 1000) {
  const results = [];
  const uniqueUrls = [...new Set(urls)];

  console.log(`\n${colors.cyan}Testing ${uniqueUrls.length} unique external URLs...${colors.reset}`);
  console.log(`${colors.yellow}This may take several minutes...${colors.reset}\n`);

  for (let i = 0; i < uniqueUrls.length; i += batchSize) {
    const batch = uniqueUrls.slice(i, i + batchSize);
    const batchPromises = batch.map(url => testExternalUrl(url));
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);

    // Progress indicator
    const progress = Math.min(i + batchSize, uniqueUrls.length);
    const percent = Math.round((progress / uniqueUrls.length) * 100);
    process.stdout.write(`\rProgress: ${progress}/${uniqueUrls.length} (${percent}%) `);

    // Rate limiting delay between batches
    if (i + batchSize < uniqueUrls.length) {
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  }

  console.log('\n');
  return results;
}

/**
 * Main testing function
 */
async function runTests() {
  console.log(`${colors.bold}${colors.blue}`);
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║     Devaland Broken Link Testing                       ║');
  console.log('╚════════════════════════════════════════════════════════╝');
  console.log(colors.reset);

  // Step 1: Extract all links from source files
  console.log(`\n${colors.cyan}Step 1: Scanning source files for links...${colors.reset}`);
  const links = scanDirectory(FRONTEND_DIR);
  
  console.log(`  Found ${colors.bold}${links.internal.length}${colors.reset} internal references`);
  console.log(`  Found ${colors.bold}${links.external.length}${colors.reset} external references`);
  console.log(`  Found ${colors.bold}${links.anchors.length}${colors.reset} anchor references`);

  // Step 2: Get defined routes
  console.log(`\n${colors.cyan}Step 2: Loading defined routes from App.js...${colors.reset}`);
  const definedRoutes = getDefinedRoutes();
  console.log(`  Found ${colors.bold}${definedRoutes.length}${colors.reset} defined routes`);

  // Step 3: Validate internal routes
  console.log(`\n${colors.cyan}Step 3: Validating internal routes...${colors.reset}`);
  const uniqueInternalLinks = [...new Map(links.internal.map(l => [l.href, l])).values()];
  
  for (const link of uniqueInternalLinks) {
    const validation = validateInternalRoute(link.href, definedRoutes);
    const result = {
      href: link.href,
      type: link.type,
      foundIn: link.file,
      status: validation.valid ? 'working' : 'broken',
      routeType: validation.type
    };

    results.internalRoutes.push(result);
    results.summary.totalLinks++;

    if (validation.valid) {
      results.summary.workingLinks++;
      console.log(`  ${colors.green}✓${colors.reset} ${link.href} (${validation.type})`);
    } else {
      results.summary.brokenLinks++;
      results.errors.push(`Internal route not found: ${link.href} (used in ${link.file})`);
      console.log(`  ${colors.red}✗${colors.reset} ${link.href} ${colors.red}(NOT FOUND)${colors.reset}`);
    }
  }

  // Step 4: Test external links (if flag is set)
  if (testExternal) {
    console.log(`\n${colors.cyan}Step 4: Testing external URLs...${colors.reset}`);
    const uniqueExternalUrls = [...new Set(links.external.map(l => l.href))];
    const externalResults = await testExternalUrls(uniqueExternalUrls);

    for (const result of externalResults) {
      const linkInfo = links.external.find(l => l.href === result.url);
      const fullResult = {
        ...result,
        foundIn: linkInfo ? linkInfo.file : 'unknown',
        type: linkInfo ? linkInfo.type : 'unknown'
      };

      results.externalLinks.push(fullResult);
      results.summary.totalLinks++;

      if (result.status === 'working') {
        results.summary.workingLinks++;
        const redirectNote = result.redirected ? ` ${colors.yellow}(redirect)${colors.reset}` : '';
        console.log(`  ${colors.green}✓${colors.reset} ${result.url}${redirectNote}`);
        if (result.redirected) {
          results.warnings.push(`External URL redirects: ${result.url}`);
          results.summary.warnings++;
        }
      } else {
        results.summary.brokenLinks++;
        results.errors.push(`External URL broken: ${result.url} - ${result.error}`);
        console.log(`  ${colors.red}✗${colors.reset} ${result.url} ${colors.red}(${result.error})${colors.reset}`);
      }
    }
  } else {
    console.log(`\n${colors.yellow}Step 4: Skipping external link testing (use --external flag to enable)${colors.reset}`);
    results.summary.skippedLinks = links.external.length;
  }

  // Print summary
  console.log(`\n${colors.bold}${colors.blue}`);
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║                  TEST SUMMARY                          ║');
  console.log('╚════════════════════════════════════════════════════════╝');
  console.log(colors.reset);

  console.log(`\n  Total Links Tested: ${colors.bold}${results.summary.totalLinks}${colors.reset}`);
  console.log(`  ${colors.green}✓ Working Links: ${results.summary.workingLinks}${colors.reset}`);
  console.log(`  ${colors.red}✗ Broken Links: ${results.summary.brokenLinks}${colors.reset}`);
  console.log(`  ${colors.yellow}⚠ Warnings: ${results.summary.warnings}${colors.reset}`);
  console.log(`  ${colors.cyan}○ Skipped Links: ${results.summary.skippedLinks}${colors.reset}`);

  if (results.errors.length > 0) {
    console.log(`\n${colors.red}${colors.bold}ERRORS FOUND:${colors.reset}`);
    results.errors.forEach((error, i) => {
      console.log(`  ${i + 1}. ${error}`);
    });
  }

  if (results.warnings.length > 0) {
    console.log(`\n${colors.yellow}${colors.bold}WARNINGS:${colors.reset}`);
    results.warnings.forEach((warning, i) => {
      console.log(`  ${i + 1}. ${warning}`);
    });
  }

  // Save report to file
  if (outputFile) {
    fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
    console.log(`\n${colors.green}Report saved to: ${outputFile}${colors.reset}`);
  }

  // Exit with error code if broken links found
  if (results.summary.brokenLinks > 0) {
    console.log(`\n${colors.red}${colors.bold}Tests failed: ${results.summary.brokenLinks} broken link(s) found${colors.reset}\n`);
    process.exit(1);
  } else {
    console.log(`\n${colors.green}${colors.bold}All tests passed! ✓${colors.reset}\n`);
    process.exit(0);
  }
}

// Run tests
runTests().catch(err => {
  console.error(`${colors.red}Fatal error:${colors.reset}`, err);
  process.exit(1);
});
