# Copilot / AI Agent Instructions for this repository

Purpose: Help an AI coding agent become productive quickly in this mono-repo containing a FastAPI backend, React SPA frontend, and Netlify serverless functions.

## Architecture Overview

- **Big picture**: This repo has three main parts:
  - `backend/` — FastAPI app (`server.py`) using Motor (async MongoDB, optional). Environment-driven config: `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`, SMTP settings. Routes are mounted under the `/api` prefix (see `APIRouter(prefix="/api")`). Use `uvicorn` to run during development (example below).
  - `frontend/` — React (Create React App) with `craco` used for builds. Entry is `src/index.js` and routing is in `src/App.js` (React Router v6). UI primitives live in `src/components/ui/` (Radix + custom wrappers).
  - `netlify/functions/` — Serverless functions (Node.js 18) handling contact form submissions via SMTP. Deployed automatically with frontend to Netlify.

- **Why this structure**: separation of API and UI simplifies local dev and deployment. Frontend + serverless functions deploy to Netlify as SPA (see `netlify.toml` for build config). Contact forms are handled via Netlify functions (not FastAPI) to avoid CORS complexity and enable automatic email notifications. Frontend build step runs a sitemap generator (`scripts/generate-sitemap.mjs`) before `npm run build`.

## Critical Data Flows

**Contact form architecture** (critical pattern):
  - Frontend submits to `/.netlify/functions/contact` (Netlify serverless function in `netlify/functions/contact.js`)
  - Netlify function sends **two emails** using nodemailer/SMTP: notification to `office@devaland.com` AND confirmation to customer
  - Newsletter subscriptions detected via `projectType === 'newsletter'` get customized confirmation email with resources
  - Backend `/api/contact` endpoint exists but is **secondary** — MongoDB storage is optional (emails work without DB)
  - SMTP config via env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_EMAIL`
  - Both implementations gracefully handle MongoDB unavailability — email sending is the primary goal
  - Helper function `getProjectTypeLabel()` maps project type codes to human-readable labels in emails

## Key Files Reference

- `backend/server.py` — API, DB client, CORS, example models (`StatusCheck`, `StatusCheckCreate`) and endpoints (`POST /api/status`, `GET /api/status`). Contact endpoint at `POST /api/contact` with email notification via `aiosmtplib`.
- `netlify/functions/contact.js` — Primary contact form handler using nodemailer. Sends notification + confirmation emails, handles CORS, includes project type labels and newsletter detection.
- `backend/requirements.txt` — exact Python deps and lint/test tooling to match.
- `frontend/package.json` — node engine (18.x), `craco` usage, lifecycle hooks (notably `postinstall` -> `fix-missing-files`), and `prebuild` sitemap generation.
- `frontend/src/App.js` — routing, lazy-loading example for `ChatBubble`, and how `Toaster`, `Header`, `Footer`, and consent components are wired.
- `frontend/src/components/ui/` — shared UI primitives (Radix wrappers). Use these rather than adding ad-hoc DOM/ARIA implementations.
- `netlify.toml` — deployment config with build commands, env vars (Node 18.20.4, `--legacy-peer-deps`), CSP headers, and SPA redirect rules.
- `craco.config.js` — webpack customization: disables source maps, configures `@/` alias, and optional hot reload control via `DISABLE_HOT_RELOAD` env var.
- `frontend/src/lib/utils.js` — `cn()` utility for merging Tailwind classes (using `clsx` + `tailwind-merge`).

## Development Workflows

**Concrete dev commands**:
- Frontend dev: `cd frontend && npm install && npm start` (uses `npx craco start` per `package.json`).
- Frontend build: `cd frontend && npm run build` (runs `node scripts/generate-sitemap.mjs` first).
- Backend dev (recommended): create env file `backend/.env` with `MONGO_URL` and `DB_NAME`, then run:
  - `python -m venv .venv && source .venv/bin/activate`
  - `pip install -r backend/requirements.txt`
  - `uvicorn backend.server:app --reload --port 8000 --host 127.0.0.1`
- Tests / linters follow Python tooling from `requirements.txt` (pytest, black, isort, flake8, mypy) and frontend CRA test scripts.

## Environment & Secrets

**Backend expects `backend/.env`** (loaded with python-dotenv):
- Backend expects `backend/.env` (loaded with python-dotenv). Keys used by the code: `MONGO_URL`, `DB_NAME`, optionally `CORS_ORIGINS`, plus SMTP settings: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_EMAIL`.
- See `backend/.env.example` for complete configuration template with notes about Gmail App Passwords and alternative SMTP providers.
- Netlify functions: SMTP env vars must be set in Netlify UI under Site settings > Environment variables (same keys as backend).
- See `netlify/functions/.env.example` for Netlify-specific configuration guidance.
- Do not hardcode secrets in code. If asked to add a secret, reference `.env` and document required keys in PR description.

## Patterns & Conventions Specific to This Repo

- Router composition: API routes are added to an `APIRouter(prefix="/api")` and then included in `app`. When adding endpoints prefer router usage for consistent prefixing.
- Async DB: use `motor.motor_asyncio.AsyncIOMotorClient` and `await` for DB calls. Close the client on shutdown (see `@app.on_event("shutdown")`).
- Frontend import alias `@/` is used in `src` (see `jsconfig.json`) — prefer `@/path` imports over relative deep paths.
- UI primitives: prefer components in `src/components/ui/` (e.g., `button.jsx`, `toast.jsx`) to ensure consistent styling and accessibility.
  - Use `class-variance-authority` (CVA) pattern for variant-based styling (see `button.jsx` for reference).
  - Always use `cn()` from `@/lib/utils` for className merging instead of manual string concatenation.
  - All UI components wrap Radix primitives with consistent Tailwind styling and CVA variants.
- React Router v6: use `<Routes>` + `<Route path="..." element={<Component/>} />`. See `src/App.js` for routing examples and how additional pages are added.
- Lazy loading: non-critical UI uses `React.lazy` and `Suspense` (example: `ChatBubble` in `App.js`). Follow this pattern for heavy components.
- Build hooks: `prebuild` runs a sitemap generator before building. If modifying build output, ensure sitemap script still runs.
- Postinstall fix: `fix-missing-files` copies `react-router-dom` dist file to `.mjs` to satisfy ESM consumers — be careful when upgrading `react-router-dom`.
- Netlify deployment: SPA redirect (`/* /index.html 200`) is configured in both `netlify.toml` and `frontend/public/_redirects` — keep both in sync.
- Root-level `package.json` pins `ajv` deps for webpack compatibility — don't remove these.

## Examples to Copy From

- Adding an API route: mirror `create_status_check` in `backend/server.py` — create Pydantic models for requests/responses and persist via Motor.
- Adding a route in frontend: add a page component under `frontend/src/pages/` and register the route in `frontend/src/App.js`. Update `scripts/generate-sitemap.mjs` ROUTES array.
- Using DB: follow async pattern `await db.collection.find().to_list()` and return Pydantic-constructed objects if returning via FastAPI.
- Creating UI components: extend Radix primitives with CVA variants (see `button.jsx`) and use `cn()` for className composition.

## Sitemap Generation Workflow (Important for SEO)

- Sitemap is generated at build time by `frontend/scripts/generate-sitemap.mjs` (runs via `prebuild` hook in `package.json`)
- When adding a new page route, you MUST update THREE places:
  1. Create page component in `frontend/src/pages/[PageName].jsx`
  2. Add route in `frontend/src/App.js`: `<Route path="/new-route" element={<NewPage />} />`
  3. Add URL to `ROUTES` array in `frontend/scripts/generate-sitemap.mjs`: `"/new-route"`
- For blog posts, add slug to `BLOG_POSTS` array in sitemap script (format: `/blog/slug-here`)
- Generated sitemap writes to `frontend/public/sitemap.xml` and includes lastmod, changefreq, priority per route
- If you forget to update sitemap script, the new route won't appear in search engines
- Sitemap script also auto-discovers static HTML files in `frontend/public/blog/` directory

## Performance Optimization Patterns

### Frontend Build Optimization

**Webpack Configuration** (`craco.config.js`):
- Source maps are **completely disabled** in production to reduce bundle size and improve build times
- `@/` path alias configured for cleaner imports and better tree-shaking
- Source-map-loader removed to prevent warnings from third-party packages
- Performance hints disabled to reduce build noise

**Package Management**:
- Root `package.json` pins `ajv@6.12.6` and `ajv-keywords@3.5.2` for webpack 5 compatibility
- `--legacy-peer-deps` flag used in all npm commands to handle CRA 5.0 dependency conflicts
- Post-install script (`fix-missing-files`) patches react-router-dom ESM compatibility

**Code Splitting & Lazy Loading**:
- Heavy components use `React.lazy()` and `Suspense` (see `ChatBubble` in `App.js`)
- Pattern: `const Component = lazy(() => import('./Component'))` wrapped in `<Suspense fallback={null}>`
- Apply to: third-party widgets, modals, non-critical UI, heavy libraries

**Asset Optimization**:
- Images served from CDN: `customer-assets.emergentagent.com`
- Preconnect hints in `index.html` for fonts and external resources
- DNS prefetch for third-party scripts (Calendly, LeadConnector, Trustpilot)

**React Performance Patterns**:
- Avoid inline function definitions in render (causes re-renders)
- Use `React.memo()` for expensive pure components
- Implement `useMemo()` and `useCallback()` for expensive computations
- Prefer CSS animations over JavaScript for UI transitions

### Backend Performance

**Async Database Operations**:
- Always use `await` with Motor queries: `await db.collection.find().to_list(limit)`
- Close connections on shutdown: `@app.on_event("shutdown")`
- Set `serverSelectionTimeoutMS=2000` to fail fast if MongoDB unavailable
- Graceful degradation: email sending works even if MongoDB is down

**API Optimization**:
- Pydantic models provide automatic validation and serialization
- FastAPI's automatic OpenAPI docs disabled in production if needed
- CORS middleware configured once at app level, not per route
- Response model validation ensures consistent API contracts

**Email Performance** (Netlify Functions):
- Parallel email sending: `Promise.all([sendNotification(), sendConfirmation()])`
- Nodemailer connection pooling configured for high-volume periods
- Email templates pre-compiled (HTML strings, not template engine overhead)
- Async/await pattern prevents blocking other function invocations

### Network & Caching

**CDN Strategy**:
- Static assets served through Netlify CDN
- Cache-Control headers set in `netlify.toml` via `[[headers]]`
- Sitemap and robots.txt cached appropriately for search engines

**API Response Caching** (if implementing):
- Cache status checks with short TTL (60s)
- Invalidate cache on POST/PUT/DELETE operations
- Use Redis or in-memory cache for frequently accessed data

## Security Considerations (CSP, CORS)

### Content Security Policy (CSP)

**Current CSP Configuration** (`netlify.toml`):
```
Content-Security-Policy = "
  default-src 'self' https:;
  script-src 'self' 'unsafe-inline' 'unsafe-eval' 
    https://widgets.leadconnectorhq.com 
    https://www.google.com 
    https://widget.trustpilot.com
    https://api.devaland.com;
  connect-src 'self' 
    https://widgets.leadconnectorhq.com
    https://api.trustpilot.com
    https://*.livekit.cloud wss://*.livekit.cloud;
  style-src 'self' 'unsafe-inline' https: 
    https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com data:;
  img-src 'self' data: https:;
  frame-src https://*.trustpilot.com https://www.google.com;
  frame-ancestors 'none';
"
```

**CSP Best Practices**:
- `frame-ancestors 'none'` prevents clickjacking attacks
- Avoid `'unsafe-inline'` and `'unsafe-eval'` when possible (currently needed for LeadConnector widget)
- Use `nonce` or `hash` for inline scripts in future improvements
- `https:` fallback allows flexibility but document specific origins for tighter security

**Testing CSP Changes**:
1. Use `Content-Security-Policy-Report-Only` header first
2. Monitor browser console for violations
3. Test all third-party widgets (Trustpilot, LeadConnector, chat)
4. Verify forms, contact submissions, and API calls work
5. Gradually tighten policy by removing wildcards

**Common CSP Issues**:
- **Chat widget not loading**: Add widget origin to `script-src` and `connect-src`
- **Fonts not displaying**: Ensure `data:` in `font-src` for base64 fonts
- **Images broken**: Check `img-src` includes CDN origins
- **Styles missing**: Add `'unsafe-inline'` to `style-src` (needed for Radix UI dynamic styles)

### Cross-Origin Resource Sharing (CORS)

**Backend CORS Configuration** (`backend/server.py`):
```python
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)
```

**Production CORS Setup**:
- Set `CORS_ORIGINS` in `backend/.env`: `CORS_ORIGINS=https://devaland.com,https://www.devaland.com`
- Never use `allow_origins=["*"]` in production with `allow_credentials=True`
- Restrict `allow_methods` to actual needs: `["GET", "POST", "OPTIONS"]`
- Limit `allow_headers` to required headers: `["Content-Type", "Authorization"]`

**Netlify Functions CORS** (`netlify/functions/contact.js`):
```javascript
// Handle OPTIONS preflight
if (event.httpMethod === 'OPTIONS') {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'POST, OPTIONS'
    },
    body: ''
  };
}
```

**CORS Best Practices**:
- Always handle OPTIONS preflight requests
- Return CORS headers in both success and error responses
- Use specific origins instead of `*` for sensitive operations
- Include credentials only when absolutely necessary
- Document CORS configuration in deployment notes

### Authentication & Authorization

**Current State**: No authentication implemented (public API endpoints)

**When Implementing Auth**:
- Use JWT tokens with short expiration (15-30 min)
- Store tokens in httpOnly cookies, not localStorage (XSS protection)
- Implement CSRF protection for state-changing operations
- Use `python-jose` for JWT handling (already in requirements.txt)
- Hash passwords with `passlib[bcrypt]` (already in requirements.txt)

**Admin Endpoints Security**:
- `GET /api/contact` should require authentication (currently open)
- Implement rate limiting for contact form submissions
- Add IP-based throttling for abuse prevention

### Environment Variable Security

**Critical Secrets**:
- `SMTP_PASSWORD`: Never commit to git, use environment variables only
- `MONGO_URL`: Restrict IP whitelist in MongoDB Atlas
- API keys: Rotate regularly, use different keys for dev/staging/prod

**Backend `.env` Protection**:
- Add `backend/.env` to `.gitignore` (already configured)
- Use `.env.example` for documentation, never actual values
- In production, use platform environment variables (not .env files)

**Netlify Environment Variables**:
- Set in Netlify UI: Site settings > Environment variables
- Never expose secrets in `netlify.toml` (public in repo)
- Use different SMTP credentials for production vs preview deploys

### Input Validation & Sanitization

**Pydantic Validation** (Backend):
```python
class ContactFormCreate(BaseModel):
    name: str
    email: EmailStr  # Auto-validates email format
    company: str
    phone: Optional[str] = None
    message: str
    
    @validator('message')
    def message_length(cls, v):
        if len(v) > 5000:
            raise ValueError('Message too long')
        return v
```

**Frontend Validation**:
- Use `react-hook-form` with `@hookform/resolvers` (already installed)
- Implement `zod` schemas for form validation (already installed)
- Sanitize user input before displaying (prevent XSS)
- Never use `dangerouslySetInnerHTML` without sanitization

**MongoDB Injection Prevention**:
- Pydantic models automatically prevent injection in type-safe fields
- Never construct queries with string concatenation
- Use Motor's query builders: `db.collection.find({'email': user_email})`

### Rate Limiting & DDoS Protection

**Netlify Functions** (Built-in protection):
- Automatic rate limiting per IP
- Cold start protection prevents resource exhaustion
- Consider implementing custom rate limiting for contact form

**Backend Rate Limiting** (If exposing FastAPI publicly):
```python
# Add to requirements.txt: slowapi
from slowapi import Limiter
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter

@app.post("/api/contact")
@limiter.limit("5/minute")
async def submit_contact_form(...):
```

### HTTPS & Transport Security

**Current Setup**:
- Netlify provides automatic SSL/TLS certificates
- All HTTP traffic redirected to HTTPS automatically
- HSTS not yet implemented (recommended addition)

**Recommended Headers** (add to `netlify.toml`):
```toml
Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
```

**Security Headers Already Implemented**:
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-XSS-Protection: 1; mode=block` - Legacy XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Limits referrer leakage

### Third-Party Script Security

**Current Third-Party Scripts**:
- Trustpilot widget: `widget.trustpilot.com`
- LeadConnector chat: `beta.leadconnectorhq.com`
- Review widget: `api.devaland.com` (currently disabled due to data issues)

**Security Best Practices**:
- Use Subresource Integrity (SRI) when possible: `<script src="..." integrity="sha384-..." crossorigin="anonymous">`
- Load scripts asynchronously to prevent blocking: `async` or `defer` attributes
- Regularly audit third-party scripts for vulnerabilities
- Consider self-hosting critical third-party libraries
- Monitor CSP reports for unexpected script sources

**Script Loading Pattern** (see `index.html`):
```javascript
// Conditional loading based on consent
if (marketingConsent === 'granted') {
  injectChatWidget();
}
```

### Session Management & Cookie Security

**Cookie Settings** (`CookieConsent.jsx`):
- Marketing consent stored in `localStorage` (not sensitive data)
- For session cookies, always use: `httpOnly`, `secure`, `sameSite=Strict`

**GDPR Compliance**:
- Essential cookies loaded without consent
- Marketing/analytics require explicit opt-in
- Clear privacy policy link in consent banner
- Easy opt-out mechanism via footer link

### Monitoring & Incident Response

**Security Monitoring**:
- Monitor Netlify function logs for suspicious activity
- Check Google Search Console for security issues
- Review CSP violation reports regularly
- Set up alerts for failed login attempts (when auth is implemented)

**Incident Response Checklist**:
1. Rotate compromised credentials immediately
2. Review recent deployments and changes
3. Check access logs for suspicious patterns
4. Update dependencies if vulnerability found
5. Document incident and prevention measures

## Testing & CI Hints

- Backend tests: repository includes `pytest` in requirements — run from project root: `pytest -q` (after installing backend deps in venv and setting test DB env variables).
- Frontend tests: `cd frontend && npm test` (CRA test runner).

## When Making Changes an AI Agent Should Do

- Edit existing files minimally and keep public APIs stable (don't rename top-level routes without updates across frontend/backend).
- Add new environment keys to `backend/.env.example` (create if missing) and mention them in PR notes.
- Run local build/test commands described above before proposing a change.

## Files to Check When Debugging Issues

- `backend/server.py` for API logic and DB connection issues.
- `netlify/functions/contact.js` for contact form email delivery issues.
- `frontend/package.json` for build scripts, `scripts/generate-sitemap.mjs` for prebuild behavior.
- `frontend/src/App.js` and `frontend/src/index.js` for routing, providers, and root render issues.
- `netlify.toml` for deployment config, CSP headers causing content blocking, or build failures.
- `craco.config.js` if webpack build issues or hot reload problems occur.
- `frontend/public/index.html` for meta tags, structured data, and third-party script loading.
- `frontend/public/structured-data.json` for SEO structured data configuration.

## Known Issues & Maintenance Notes

### SEO Performance Insights (November 2025)

**Google Search Console Analysis** (Last 90 days):
- **Primary traffic**: Brand searches ("devaland") - 21 clicks, 143 impressions
- **Zero-click queries** (high impressions, no clicks):
  - `klaviyo gdpr` (25 impressions)
  - `best klaviyo flows` (17 impressions)
  - `klaviyo automation` (12 impressions)
  - `predicted date of next order klaviyo` (11 impressions)
  - `klaviyo black friday` (11 impressions)
  - `klaviyo bfcm` (11 impressions)

**SEO Optimization Opportunities**:

1. **Content Gap Analysis**:
   - **Missing content**: No dedicated pages for high-impression queries
   - **Existing blog posts** (from `mock.js`):
     - ✅ "10 Klaviyo Automation Flows Every E-commerce Store Needs" (targets: `best klaviyo flows`, `klaviyo flows examples`)
     - ✅ "Maximizing Black Friday Sales with Klaviyo" (targets: `klaviyo black friday`, `klaviyo bfcm`)
     - ✅ "Advanced Klaviyo Analytics: Beyond Open and Click Rates"
     - ❌ Missing: GDPR compliance content
     - ❌ Missing: Predicted next order date feature
   
   - **Action**: Create NEW blog posts for unfulfilled queries:
     - **Priority 1**: "Klaviyo GDPR Compliance: Complete Guide for E-commerce" (25 impressions, 0 clicks)
       - Target: `klaviyo gdpr`, `klaviyo privacy policy`
       - Slug: `/blog/klaviyo-gdpr-compliance-guide`
     - **Priority 2**: "Klaviyo Predicted Date of Next Order: Setup & Optimization" (11 impressions)
       - Target: `predicted date of next order klaviyo`, `klaviyo automation`
       - Slug: `/blog/klaviyo-predicted-next-order-date-setup`
     - **Priority 3**: "Klaviyo Placed Order Rate: Metric Explained" (8 impressions)
       - Target: `placed order rate klaviyo`
       - Slug: `/blog/klaviyo-placed-order-rate-explained`

2. **Optimize Existing Blog Post Titles & Meta**:
   - "10 Klaviyo Automation Flows" → Update meta description to include "best klaviyo flows"
   - "Maximizing Black Friday Sales" → Add keywords "klaviyo bfcm" in description
   - Ensure H1 tags match search intent for target queries
   - Current traffic shows impressions but low CTR for non-brand terms
   - **Action**: Add compelling meta descriptions with clear value propositions
   - Include target keywords naturally in descriptions
   - Add call-to-action phrases ("Learn how", "Get started", "Free guide")

3. **Internal Linking Strategy**:
   - **Blog posts** should link to `/klaviyo` service page
   - **Service pages** should link to relevant blog content
   - Use descriptive anchor text with target keywords
   - Create topic clusters around "Klaviyo automation" theme

4. **Structured Data Enhancement**:
   - Add `FAQPage` schema for common Klaviyo questions
   - Implement `HowTo` schema for tutorial content
   - Add `Article` schema to all blog posts (partially implemented)
   - Include `breadcrumb` schema for better navigation

5. **Content Optimization Checklist**:
   - **Title tags**: Include primary keyword in first 60 characters
   - **H1 tags**: Match search intent for target queries
   - **Header hierarchy**: Use H2/H3 with related keywords
   - **Image alt text**: Descriptive text with relevant keywords
   - **Internal links**: 3-5 contextual links per page

**Implementation Priority**:
1. Create blog posts for high-impression keywords (immediate impact)
2. Optimize existing `/klaviyo` page meta description
3. Add FAQ section to homepage or dedicated FAQ page
4. Implement internal linking between blog posts and service pages
5. Monitor Search Console weekly for new keyword opportunities

**Adding New SEO-Optimized Content**:

When creating new blog posts for target keywords:
1. **Create page component** in `frontend/src/pages/BlogPostPage.jsx` (already exists)
2. **Add blog post data** to `frontend/src/data/mock.js` in `blogPosts` array
3. **Update sitemap** in `frontend/scripts/generate-sitemap.mjs`:
   ```javascript
   const BLOG_POSTS = [
     "/blog/existing-post-slug",
     "/blog/klaviyo-gdpr-compliance-guide", // NEW
   ];
   ```
4. **Add structured data** to `frontend/public/structured-data.json`:
   ```json
   {
     "@type": "Article",
     "@id": "https://devaland.com/blog/klaviyo-gdpr-compliance-guide",
     "headline": "Complete Klaviyo GDPR Compliance Guide",
     "keywords": ["klaviyo gdpr", "gdpr compliance", "email marketing"]
   }
   ```
5. **Meta tags**: Update page component with SEO-optimized title and description
6. **Internal links**: Link from `/klaviyo` service page to new blog post

### Review Widget Structured Data (November 2025)
- **Issue**: External review widget (`https://api.devaland.com/reputation/assets/review-widget.js`) injects invalid Review snippets structured data
- **Google Search Console Errors**:
  - "Rating is outside the specified or default range"
  - "Value in property 'reviewCount' must be positive"
- **Root Cause**: Third-party review widget script injecting schema markup with invalid values (negative reviewCount or out-of-range ratings)
- **Solution Options**:
  1. Contact review widget provider to fix their structured data output
  2. Remove/replace the review widget script if not essential
  3. Add custom script to intercept and fix injected structured data before Google crawls
  4. Use Trustpilot widget directly instead of custom review widget
- **Current Workaround**: Script loads at end of `<body>` in `index.html` - can be commented out if reviews aren't critical

If anything is unclear or you'd like me to expand a section (example end-to-end add-route PR, or add a `backend/.env.example`), tell me which area to elaborate. I'll iterate the file.
