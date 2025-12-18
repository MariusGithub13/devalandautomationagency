# Cloudflare Pages migration gameplan for `devalandautomationagency`

Cloudflare Pages is a good fit for this repo:
- **Static React SPA**: Pages builds `frontend` with CI similar to Netlify.
- **Free tier**: no monthly caps on requests/bandwidth for static assets; build minutes are generous and include previews.
- **Automatic HTTPS/SSL**: free certificates on all custom domains with HTTP\->HTTPS enforced at the edge.
- **Custom domains + DNS**: works whether you keep DNS elsewhere (CNAME/"flattened" A) or move DNS to Cloudflare for full record control.
- **SEO + speed**: uses the same `_headers`/`_redirects` conventions we had on Netlify, so prerender-friendly headers, caching, and redirect rules stay intact, with global caching by default.

## Deployment recipe (GitHub -> Cloudflare Pages)
1. In Cloudflare Pages, create a project and connect the `devalandautomationagency` GitHub repo.
2. Build configuration:
   - **Root directory**: `frontend`
   - **Build command**: `npm ci --legacy-peer-deps && npm run build`
   - **Output directory**: `build`
   - **Node version**: 18 (default is fine). Set env vars (`RECAPTCHA_SECRET_KEY`, `RECAPTCHA_SCORE_THRESHOLD`, SMTP creds, etc.) in the Pages project settings.
3. Redirects + headers: Pages will read the new `frontend/public/_redirects` and `frontend/public/_headers` we added, so the SPA routing, canonicalization, HSTS, CSP, caching, and SEO files mirror Netlify.
4. DNS cutover: 
   - If keeping DNS where it is, point `devaland.com`/`www.devaland.com` to the Pages hostname (A/AAAA or CNAME). Keep the existing records intact.
   - If moving DNS to Cloudflare, import/export your Netlify DNS records, recreate them, then switch nameservers. Use low TTL for a safe cutover.
5. Enable **Always Use HTTPS** and **Auto Minify/Brotli** in Cloudflare for extra speed. Tiered caching and Polish are optional paid add-ons.

## Mapping Netlify features to Cloudflare
- **`_redirects` + SPA routing**: All Netlify redirects (HTTPS/www canonicalization, legacy content, blog slug fixes, feed cleanup, SPA fallback) now live in `frontend/public/_redirects` and publish with the build. The final rule keeps `/* -> /index.html 200` for React Router.
- **`netlify.toml` headers -> `_headers`**: The security, performance, and SEO headers are mirrored in `frontend/public/_headers` (CSP with Google/Trustpilot/LeadConnector domains, HSTS, cache rules). This preserves SEO tweaks and page speed caching strategy.
- **Netlify Functions (`netlify/functions/…`)**: Pages Functions/Workers use the Fetch API (no Node `net`/SMTP). Port the handlers by moving them to `functions/` with `export async function onRequest(context)` signatures, and swap `nodemailer`/SMTP for an email API (e.g., SendGrid, Resend, Postmark) via `fetch`. Python functions should be reimplemented in JS/TS or hosted elsewhere (e.g., Cloudflare Workers w/ Durable Objects or KV if stateful).
- **reCAPTCHA**: Works the same; keep `RECAPTCHA_SECRET_KEY` and threshold env vars in Pages. The client integration does not change.
- **Optional backend/serverless**: For dynamic needs, use Pages Functions or standalone Cloudflare Workers; both support custom domains and share the same SSL.

## SEO + performance safeguards
- Canonical HTTPS/non-www enforcement and legacy URL redirects remain intact via `_redirects`.
- Long-term caching for static assets and no-cache for HTML stay in `_headers`, matching the Netlify behavior that protected your LCP/CLS improvements.
- CSP and security headers remain aligned with the Netlify config (SAMEORIGIN framing for GBP verification).
- Keep your existing sitemap/robots files; Pages serves them unchanged from `frontend/public`.

## Pick the Cloudflare runtime: Pages Functions (recommended) vs Workers

**Recommendation: use Cloudflare Pages Functions for all existing Netlify Functions.**

- **Why Pages Functions:**
  - Tied to the Pages build + preview flow (mirrors Netlify deploy previews), so PRs keep their own function previews automatically.
  - Same free-hosting model as your static assets (no extra request charges for current traffic levels), with free custom-domain SSL and automatic HTTPS on the same hostname as the site.
  - Route-by-route control that matches how Netlify Functions were invoked (`/.netlify/functions/...`), with global edge execution for speed/SEO (TTFB stays low).
  - Built on the same runtime as Workers; you can still reach KV/D1/Queues if you add them later, without running a separate product.
- **When to prefer a standalone Worker instead:** scheduled jobs, long-running tasks, TCP/UDP needs, or if you need isolated limits separate from Pages builds. In that case, bind the Worker to a route (e.g., `api.devaland.com/*`) and keep the site on Pages.

## Convert Netlify Functions to Pages Functions (zero-downtime path)

1. **Create `functions/` at the repo root** (Cloudflare Pages default) and recreate each Netlify function there with `export async function onRequest(context)`.
2. **Replace SMTP (`nodemailer`) with an HTTPS email API** (Workers runtime blocks raw SMTP):
   - Provision an API key with Resend/SendGrid/Postmark.
   - Use `await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: 'Bearer …', 'Content-Type': 'application/json' }, body: JSON.stringify({ from, to, subject, html }) });`.
   - Keep reCAPTCHA verification via `fetch('https://www.google.com/recaptcha/api/siteverify', …)` using the existing `RECAPTCHA_SECRET_KEY` env var. Configure `RECAPTCHA_SCORE_THRESHOLD` in Pages project settings.
3. **Apply the same spam/rate-limit logic:** reuse the Map-based rate limiter and spam heuristics from `netlify/functions/contact.js` inside the new `functions/contact.js`.
4. **Recreate `klaviyo-subscribe`** as `functions/klaviyo-subscribe.js` using `fetch` to the Klaviyo API with your public/private keys stored as Pages env vars.
5. **Python-only logic:** reimplement in JS/TS to run on Pages Functions (Python is not supported). If you must keep Python, deploy it as a separate Worker with a `wrangler.toml` and a route like `api.devaland.com/python/*`.
6. **Routing:** add redirects that point old Netlify Function URLs (`/.netlify/functions/*`) to the new endpoints (`/functions/contact`, etc.) if you previously linked them directly. Otherwise, update the frontend `fetch` targets to the new paths before switching DNS.
7. **Deploy safely:**
   - Create a **staging branch** and let Pages build + function previews run.
   - Test form submissions (with real API keys on staging) and confirm responses/headers match production.
   - Flip DNS to Pages once staging succeeds. Because SSL is automatic and redirects/headers are already mirrored, SEO signals (canonical HTTPS, HSTS, caching) remain intact during the cutover.
