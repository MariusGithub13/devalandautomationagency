# Devaland-safe Cloudflare security rules

This playbook explains what causes "Cloudflare blocked" errors and how to configure Cloudflare so real visitors (and SEO tools) are not interrupted while the site is protected.

## What the blocking pages mean
- **WAF rule triggered (e.g., Error 1020/Access denied):** A firewall rule matched request patterns (URL, query strings, rate of requests). False positives come from overly broad or aggressive rules.
- **Bot Fight/Super Bot Fight mode:** Cloudflare scored a visitor as a bot based on IP reputation or browser fingerprint. VPNs, privacy browsers, or headless tools can be misclassified.
- **Rate limiting:** Per-IP or per-path request thresholds were exceeded. Too-low limits can throttle normal browsing.
- **Country/ASN blocks:** Requests from entire countries/ISPs are denied. CGNAT mobile carriers can be misidentified as hosting providers.
- **JS challenges/CAPTCHAs failing:** Ad blockers or strict privacy settings can prevent the challenge from completing.

## Safe baseline configuration (launch profile)
Use these defaults to avoid unexpected blocks for `devaland.com` and previews:
- **Security Level:** `Medium` (Cloudflare Dashboard → Security → Settings). Avoid "Under Attack" unless under active attack.
- **Bot Fight Mode:** `Off` at launch. Turn on later only in "Definitely Automated" mode and monitor.
- **Managed WAF Ruleset:** Start with the **Low Sensitivity** template. Disable rules that generate false positives in the analytics panel.
- **Action policy:** Prefer **Challenge** over **Block** for new rules so legitimate users can pass with a one-time check.
- **Browser Integrity Check:** `Off` initially (it can flag privacy tools). Enable later if needed, but challenge instead of block.
- **Always Use HTTPS:** `On` to enforce HTTPS without custom rules.
- **HTTP/2 + HTTP/3 + Brotli:** `On` for faster page loads; does not affect blocking.
- **Turn off Cloudflare CAPTCHA products:** Keep reCAPTCHA v3 inside the app for spam protection instead of edge CAPTCHAs.

## Allowlist important traffic
Add bypass rules (Security → WAF → Custom Rules) with action **Skip → WAF, Bot Fight, Rate Limit** for these paths and bots:
- **Paths to skip:**
  - `/contact`
  - `/api/*` (if APIs run through Pages Functions/Workers)
  - `/assets/*`
  - `/sitemap.xml`, `/robots.txt`, `/feed.xml`
  - `/blog/*`
- **Verified bots:** Turn on **Allow verified bots** and add explicit allows for `Googlebot`, `Bingbot`, `Lighthouse`, `PageSpeed Insights`, `AhrefsBot`, `SemrushBot`.

Example custom rule (expression + action):
- **Name:** Allow verified bots
- **Expression:** `(cf.client.bot)`
- **Action:** `Skip` → WAF + Rate Limiting + Bot Fight

- **Name:** Allow SEO + form paths
- **Expression:** `(http.request.uri.path starts_with "/contact" or http.request.uri.path starts_with "/api/" or http.request.uri.path starts_with "/blog/" or http.request.uri.path in {"/robots.txt" "/sitemap.xml" "/feed.xml"} or http.request.uri.path starts_with "/assets/")`
- **Action:** `Skip` → WAF + Rate Limiting + Bot Fight

## Safe rate limiting
If you need rate limits, use **Challenge** with generous thresholds:
- **Rule:** Protect dynamic endpoints
- **Expression:** `(http.request.uri.path starts_with "/api/" or http.request.uri.path starts_with "/contact")`
- **Threshold:** 500 requests per 5 minutes per IP (adjust based on real traffic). 
- **Action:** `Challenge`

Avoid blocking static assets; exclude `*.js`, `*.css`, images.

## WAF custom rules to reduce noise (challenge-first)
Add targeted rules instead of broad "block all" patterns:
1. **SQLi/XSS payloads:** Use Managed Rules; keep action as **Challenge** until logs prove safe to block.
2. **Known bad countries/ASNs (if ever needed):** Prefer Challenge instead of Block so VPN/mobile users are not hard-stopped.
3. **User-agent anomalies:** Challenge requests where `http.user_agent eq "-"` or empty.

## Testing checklist before enabling stricter rules
1. Open the site on:
   - Mobile 4G/5G (CGNAT), Wi‑Fi, and a VPN.
   - Privacy browsers (Brave/Tor) and normal Chrome/Edge.
2. Run Google PageSpeed Insights and Lighthouse; confirm no challenges appear.
3. Use `curl -I https://www.devaland.com/` and ensure HTTP 200/301 without Cloudflare error codes.
4. Check Cloudflare Security → Events for any false-positive challenges; disable or relax rules that show legitimate IPs.
5. After 48 hours of clean logs, you may raise sensitivity slightly or enable Bot Fight Mode ("Definitely automated only").

## How to diagnose and unblock a visitor quickly
- Ask the visitor for their **Ray ID** from the block page; search it in Security → Events to see which rule fired.
- If the rule is yours, lower the sensitivity or switch action to **Challenge/Log**.
- Add the visitor’s IP to a temporary allow list if needed (Security → WAF → Tools).
- Keep **Custom Pages → Challenge Passage** enabled so solved challenges are remembered, reducing repeated prompts.

## Why this is safer than Netlify
- Cloudflare gives per-rule analytics, verified bot controls, and challenge-first actions—reducing false blocks.
- Global edge + Brotli keep performance fast; HTTPS/HSTS remain automatic.
- WAF and rate limiting are tunable without code changes, so we can protect forms and APIs while keeping SEO crawlers unblocked.

## Implementation order (do this in Dashboard)
1. Set Security Level to Medium; disable Bot Fight and Browser Integrity Check initially.
2. Enable Always Use HTTPS, HTTP/2/3, and Brotli under Speed/SSL settings.
3. Add the two **Skip** rules for verified bots and critical paths.
4. Add the **Challenge** rate-limit rule for `/api/*` and `/contact` with a generous threshold.
5. Turn on the Managed Ruleset at Low Sensitivity; change actions to Challenge.
6. Monitor Security Events for 48 hours, then optionally enable Bot Fight Mode (Definitely Automated) if clean.
7. Keep reCAPTCHA v3 inside the app; do not enable Cloudflare Turnstile/CAPTCHA unless specifically needed.

This configuration preserves performance and SEO while preventing the false-positive blocks you encountered.
