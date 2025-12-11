# Copilot / AI Agent Instructions for this repository

Purpose: Help an AI coding agent become productive quickly in this mono-repo containing a FastAPI backend, React SPA frontend, and Netlify serverless functions.

## Additional Documentation Resources

This file provides the core architecture and patterns. For specific topics, see:
- **`CONTACT_FORM_SETUP.md`** — Detailed SMTP configuration and contact form troubleshooting
- **`SEO_INDEXING_FIXES.md`** — Complete SEO action plan and Google Search Console fixes
- **`PAGESPEED_PERFORMANCE_FIXES_DEC_2025.md`** — PageSpeed Insights fixes and performance optimization guide (Dec 2025)
- **`BREADCRUMB_SEO_STRATEGY.md`** — Breadcrumb implementation and site architecture
- **`KLAVIYO_PAGE_SEO_OPPORTUNITY.md`** — Specific SEO optimization for Klaviyo content
- **`VOICE_AI_SEO_GUIDE.md`** — Voice AI page SEO and content strategy
- **`ROI_CALCULATOR_SUMMARY.md`** — ROI calculator component documentation
- **`TRUSTPILOT_IMPLEMENTATION_COMPLETE.md`** — Trustpilot widget integration guide
- **`POPULAR_ARTICLES_CAROUSEL.md`** — Carousel implementation with Embla React
- **`BLOG_PAGE_FIX_SUMMARY.md`** — Blog page structured data fixes and GSC issues

## Quick Start Guide (Read This First!)

**Essential Commands**:
```bash
# Frontend development
cd frontend && npm install && npm start

# Frontend build (includes sitemap generation)
cd frontend && npm run build

# Backend development (requires backend/.env with MONGO_URL, DB_NAME, SMTP config)
cd backend && python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn server:app --reload --port 8000

# Test Netlify functions locally
cd netlify/functions && npm install
```

**Critical Architecture Facts**:
- **Contact forms**: Primary handler is `netlify/functions/contact.js` (not FastAPI) - sends dual emails via nodemailer
- **Routes**: Add new routes in THREE places: `App.js`, `src/pages/`, and `scripts/generate-sitemap.mjs`
- **UI components**: Always use primitives from `src/components/ui/` with CVA variants + `cn()` utility
- **Import alias**: Use `@/` for all src imports (configured in `jsconfig.json`)
- **Lazy loading**: ALL pages except HomePage use `React.lazy()` + `Suspense` - follow this pattern for new pages and heavy components

**Environment Setup**:
- Backend: Create `backend/.env` with `MONGO_URL`, `DB_NAME`, SMTP settings (keys: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_EMAIL`)
- Netlify: Set SMTP vars in Netlify UI (same keys as backend .env)
- MongoDB is **optional** - emails work without it (graceful degradation)
- See `backend/.env.example` and `netlify/functions/.env.example` for templates and SMTP provider examples
- See `CONTACT_FORM_SETUP.md` for detailed SMTP configuration walkthrough

**When Debugging**:
- CSP/CORS issues → `netlify.toml` headers section
- Build failures → `craco.config.js`, `package.json` lifecycle hooks
- Email delivery → `netlify/functions/contact.js` logs (check Netlify function logs in UI)
- SEO/indexing → `SEO_INDEXING_FIXES.md`, `netlify.toml` prerendering config, `SEO.jsx` component
- Import errors → Check `jsconfig.json` for `@/` alias configuration
- Sitemap issues → `scripts/generate-sitemap.mjs` runs in `prebuild` hook

## Architecture Overview

- **Big picture**: This repo has three main parts:
  - `backend/` — FastAPI app (`server.py`) using Motor (async MongoDB, optional). Environment-driven config: `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS`, SMTP settings. Routes are mounted under the `/api` prefix (see `APIRouter(prefix="/api")`). Use `uvicorn` to run during development.
  - `frontend/` — React (Create React App) with `craco` for build customization. Entry is `src/index.js` and routing is in `src/App.js` (React Router v6). UI primitives live in `src/components/ui/` (Radix + custom wrappers). Extensive lazy loading via `React.lazy()` for all pages except HomePage.
  - `netlify/functions/` — Serverless functions (Node.js 18) handling contact form submissions via SMTP. Deployed automatically with frontend to Netlify.

- **Why this structure**: separation of API and UI simplifies local dev and deployment. Frontend + serverless functions deploy to Netlify as SPA (see `netlify.toml` for build config). Contact forms are handled via Netlify functions (not FastAPI) to avoid CORS complexity and enable automatic email notifications. Frontend build step runs a sitemap generator (`scripts/generate-sitemap.mjs`) before `npm run build`.

- **Build output**: `frontend/build/` contains the production-ready SPA. Files in `frontend/public/` are copied to `build/` during the build process. Generated files like `sitemap.xml` are written to `public/` before build and end up in `build/`.

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
  - All 45+ components use CVA (class-variance-authority) for variant-based styling
  - Radix UI primitives provide accessibility out of the box
  - Examples: `button.jsx`, `toast.jsx`, `dialog.jsx`, `carousel.jsx`, `accordion.jsx`
  - Always import with `@/components/ui/[component]` alias
- `frontend/src/components/SEO.jsx` — SEO component using `react-helmet-async` for dynamic meta tags, Open Graph data, and JSON-LD structured data injection. Every page MUST use this component.
- `frontend/src/components/Breadcrumb.jsx` — Reusable breadcrumb navigation component with automatic JSON-LD BreadcrumbList structured data generation. Used on all pages except homepage.
- `frontend/src/components/ROICalculator.jsx` — Interactive calculator with business size configurations and ROI calculations. Example of complex stateful component with multiple input fields.
- `frontend/src/components/TrustpilotWidget.jsx` — Third-party widget integration example: loads external script in `useEffect`, handles cleanup, provides fallback UI before script loads.
- `frontend/src/data/mock.js` — Centralized data store for services, blog posts, company info, case studies. **Update this file** when adding new content instead of hardcoding in components.
- `frontend/jsconfig.json` — Configures `@/` path alias for cleaner imports (maps to `src/` directory).
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
- Keys used by the code: `MONGO_URL`, `DB_NAME`, optionally `CORS_ORIGINS`, plus SMTP settings: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_EMAIL`.
- See `backend/.env.example` for complete template with all SMTP provider options (Gmail, SendGrid, AWS SES, Mailgun).
- For detailed SMTP configuration walkthrough (Gmail App Passwords, etc.), see `CONTACT_FORM_SETUP.md` in the repository root.
- Netlify functions: SMTP env vars must be set in Netlify UI under Site settings > Environment variables (same keys as backend). See `netlify/functions/.env.example` for setup instructions.
- Do not hardcode secrets in code. If asked to add a secret, reference `.env` and document required keys in PR description.

## Patterns & Conventions Specific to This Repo

- Router composition: API routes are added to an `APIRouter(prefix="/api")` and then included in `app`. When adding endpoints prefer router usage for consistent prefixing.
- Async DB: use `motor.motor_asyncio.AsyncIOMotorClient` and `await` for DB calls. Close the client on shutdown (see `@app.on_event("shutdown")`).
- Frontend import alias `@/` is used in `src` (see `jsconfig.json`) — prefer `@/path` imports over relative deep paths.
- UI primitives: prefer components in `src/components/ui/` (e.g., `button.jsx`, `toast.jsx`) to ensure consistent styling and accessibility.
  - Use `class-variance-authority` (CVA) pattern for variant-based styling (see `button.jsx` for reference).
  - Always use `cn()` from `@/lib/utils` for className merging instead of manual string concatenation.
  - All UI components wrap Radix primitives with consistent Tailwind styling and CVA variants.
  - 46 pre-built components available: `accordion`, `alert`, `avatar`, `badge`, `button`, `calendar`, `card`, `carousel`, `checkbox`, `collapsible`, `command`, `dialog`, `drawer`, `dropdown-menu`, `form`, `hover-card`, `input`, `label`, `menubar`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`, `scroll-area`, `select`, `separator`, `sheet`, `skeleton`, `slider`, `switch`, `tabs`, `textarea`, `toast`, `toggle`, `tooltip`, and more.
  - Check `src/components/ui/` directory before creating custom UI elements.
- React Router v6: use `<Routes>` + `<Route path="..." element={<Component/>} />`. See `src/App.js` for routing examples and how additional pages are added.
- Lazy loading: non-critical UI uses `React.lazy` and `Suspense` (example: `ChatBubble` in `App.js`). Follow this pattern for heavy components like third-party widgets, calculators, and modals.
- **Third-party widget pattern**: Load external scripts in `useEffect` hook and cleanup on unmount (see `TrustpilotWidget.jsx`). Store widget configuration in CSP headers (`netlify.toml`).
- **Carousel pattern**: Use `embla-carousel-react` for content sliders. See `BlogPage.jsx` Popular Articles section for reference implementation with responsive breakpoints, auto-loop, and touch swipe support.
- **Data centralization**: All static content (services, blog posts, company info, case studies) lives in `frontend/src/data/mock.js`. Update this file when adding new content rather than hardcoding in components.
- Build hooks: `prebuild` runs a sitemap generator before building. If modifying build output, ensure sitemap script still runs.
- Postinstall fix: `fix-missing-files` copies `react-router-dom` dist file to `.mjs` to satisfy ESM consumers — be careful when upgrading `react-router-dom`.
- Netlify deployment: SPA redirect (`/* /index.html 200`) is configured in both `netlify.toml` and `frontend/public/_redirects` — keep both in sync.
- Root-level `package.json` pins `ajv` deps for webpack compatibility — don't remove these.

## Examples to Copy From

- Adding an API route: mirror `create_status_check` in `backend/server.py` — create Pydantic models for requests/responses and persist via Motor.
- Adding a route in frontend: add a page component under `frontend/src/pages/` and register the route in `frontend/src/App.js`. Update `scripts/generate-sitemap.mjs` ROUTES array.
- **SEO implementation**: Import `SEO` component in page, use within component body with unique props:
  ```jsx
  import SEO from '@/components/SEO';
  
  function MyPage() {
    return (
      <>
        <SEO 
          title="My Page Title"
          description="Unique description for search engines"
          canonical="https://devaland.com/my-page"
          keywords={["keyword1", "keyword2"]}
          schema={{ /* JSON-LD structured data */ }}
        />
        {/* Page content */}
      </>
    );
  }
  ```
- **Breadcrumb implementation**: Import `Breadcrumb` component on all pages except homepage:
  ```jsx
  import Breadcrumb from '@/components/Breadcrumb';
  
  function ServicesPage() {
    return (
      <>
        <Breadcrumb items={[{label: "Services", href: "/services"}]} />
        {/* Rest of page content */}
      </>
    );
  }
  // For nested pages (e.g., Klaviyo under Services):
  <Breadcrumb items={[
    {label: "Services", href: "/services"},
    {label: "Klaviyo Email Marketing", href: "/klaviyo"}
  ]} />
- Using DB: follow async pattern `await db.collection.find().to_list()` and return Pydantic-constructed objects if returning via FastAPI.
- Creating UI components: extend Radix primitives with CVA variants (see `button.jsx`) and use `cn()` for className composition.
- **Carousel implementation**: Import `useEmblaCarousel` from `embla-carousel-react`, configure with responsive breakpoints and loop options:
  ```jsx
  import useEmblaCarousel from 'embla-carousel-react';
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });
  ```
  See `BlogPage.jsx` Popular Articles section for complete implementation with navigation buttons and mobile swipe.
- **Adding content to data layer**: Update `frontend/src/data/mock.js` when adding services, blog posts, case studies, or company info. This centralizes content management and prevents hardcoding across components. Data structure includes: `companyData`, `services`, `klaviyoServices`, `blogPosts`, `caseStudies`, `heroImages`, `serviceImages`.

## Data Layer Pattern (Critical)

**Centralized Data Management** (`frontend/src/data/mock.js`):
- ALL static content lives here - never hardcode in components
- **Key exports**: `companyData` (contact info, legal, social links), `services` (service listings), `klaviyoServices` (Klaviyo-specific offerings), `blogPosts` (blog metadata), `caseStudies`, `heroImages`, `serviceImages`
- **Company data structure**: Includes nested objects for `contact` (email, phone, address), `legal` (VAT, registration), `social` (LinkedIn, Trustpilot), `stats` (metrics), `calendly` link
- **Service data structure**: Each service has `id`, `category`, `title`, `description`, `image`, `tools[]`, `benefits[]`
- **Blog post data structure**: Each post has `id`, `slug`, `title`, `excerpt`, `content`, `author`, `date`, `category`, `image`, `tags[]`
- **When adding content**: Update `mock.js` first, then create page component that imports and displays the data
- **Pattern**: `import { companyData, services } from '@/data/mock'` in components

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
**Code Splitting & Lazy Loading**:
- Heavy components use `React.lazy()` and `Suspense` (see `ChatBubble` in `App.js`)
- Pattern: `const Component = lazy(() => import('./Component'))` wrapped in `<Suspense fallback={<LoadingSpinner/>}>`
- Apply to: third-party widgets, modals, non-critical UI, heavy libraries, carousels with many images
- ALL pages except HomePage use lazy loading (see `App.js` for complete pattern)
- Loading fallback shows spinner for pages, `null` for non-critical widgets

**Asset Optimization**:
- Images served from CDN: `customer-assets.emergentagent.com` and `images.unsplash.com`
- Preconnect hints in `index.html` for fonts and external resources
- DNS prefetch for third-party scripts (Calendly, LeadConnector, Trustpilot)
- **Google Fonts optimized**: Use `display=swap` parameter to prevent FOIT (Flash of Invisible Text)
- **Image dimensions required**: Always add `width` and `height` attributes to prevent CLS (Cumulative Layout Shift)
- **Cache headers**: Static assets cached for 1 year via `netlify.toml` headers (images, fonts, JS, CSS)
- **Modern formats**: Support for WebP and AVIF images in cache headers

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
- Add new environment keys to `backend/.env.example` and `netlify/functions/.env.example` and mention them in PR notes.
- Run local build/test commands described above before proposing a change.
- When adding new pages, remember the **THREE-PLACE RULE**: `src/pages/`, `App.js`, and `generate-sitemap.mjs`.

## Performance Best Practices (PageSpeed Insights)

**Current Performance Status** (Dec 11, 2025):
- Mobile Score: 63/100 → Target: 90+
- LCP (Largest Contentful Paint): 10.3s → Target: < 2.5s
- See `PAGESPEED_PERFORMANCE_FIXES_DEC_2025.md` for complete audit and fixes

**Critical Performance Rules**:
1. **Images MUST have width/height attributes** to prevent CLS:
   ```jsx
   <img src="/images/hero.webp" alt="Hero" width="1200" height="600" />
   ```
2. **Use font-display: swap** for all web fonts (already implemented in `index.html`)
3. **Add loading="lazy"** for below-the-fold images:
   ```jsx
   <img src="/images/service.webp" alt="Service" width="400" height="300" loading="lazy" />
   ```
4. **Optimize images before upload**:
   - Convert to WebP: `cwebp input.jpg -q 80 -o output.webp`
   - Convert to AVIF: `avif --quality 70 input.jpg output.avif`
   - Store in `/frontend/public/images/optimized/`
5. **Leverage browser caching** - already configured in `netlify.toml`:
   - Static assets: 1 year (31536000s)
   - HTML: No cache (0s, must-revalidate)
   - Fonts: 1 year + CORS headers

**Testing Performance Locally**:
```bash
# Run Lighthouse audit
npx lighthouse https://devaland.com --view

# Mobile simulation
npx lighthouse https://devaland.com --preset=mobile --view

# Specific page
npx lighthouse https://devaland.com/klaviyo --view
```

**Image Optimization Workflow**:
1. Download from Unsplash at appropriate size (not full resolution)
2. Convert to WebP and AVIF formats
3. Add to `/frontend/public/images/optimized/`
4. Update `mock.js` with new paths
5. Add width/height attributes to `<img>` tags

## Quick Reference: Common Tasks

**Adding a new page** (THREE-PLACE RULE):
1. Create `frontend/src/pages/NewPage.jsx` with SEO + Breadcrumb components
2. Add route in `frontend/src/App.js`: `const NewPage = lazy(() => import('./pages/NewPage'));` and `<Route path="/new-page" element={<NewPage />} />`
3. Add to sitemap: `frontend/scripts/generate-sitemap.mjs` ROUTES array: `"/new-page"`

**Adding a blog post**:
1. Add post data to `frontend/src/data/mock.js` in `blogPosts` array with unique `slug`
2. Add slug to `frontend/scripts/generate-sitemap.mjs` BLOG_POSTS array: `"/blog/post-slug"`
3. Post automatically renders via `BlogPostPage.jsx` dynamic route
4. Optionally add structured data to `frontend/public/structured-data.json`

**Adding a UI component**:
1. Check if component exists in `frontend/src/components/ui/` first
2. If creating new: extend Radix primitive, use CVA for variants, export with TypeScript-like prop types
3. Always use `cn()` utility for className merging: `cn("base-classes", variants, className)`

**Debugging email delivery**:
1. Check Netlify function logs in Netlify UI (Functions tab)
2. Verify SMTP env vars set in Netlify: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `CONTACT_EMAIL`
3. Test locally: `cd netlify/functions && npm install && netlify dev` (requires Netlify CLI)
4. MongoDB failure won't block emails - graceful degradation by design

**Debugging CSP violations**:
1. Open browser console, look for "Content Security Policy" errors
2. Identify blocked resource domain (e.g., `https://example.com`)
3. Add domain to appropriate directive in `netlify.toml` CSP header: `script-src`, `connect-src`, `img-src`, etc.
4. Redeploy and test

## Common Development Pain Points

**Dependency Management**:
- React Router ESM issues → Fixed by `fix-missing-files` postinstall script (don't remove it)
- webpack 5 compatibility → Root `package.json` pins `ajv@6.12.6` (don't upgrade without testing)
- Peer dependency conflicts → Always use `--legacy-peer-deps` flag for npm commands

**Build Failures**:
- ESLint errors in deploy → `DISABLE_ESLINT_PLUGIN=true` in `netlify.toml`
- Source map warnings → Source maps disabled in `craco.config.js`
- Sitemap not updating → Check `prebuild` script in `frontend/package.json`

**Runtime Issues**:
- `@/` imports not resolving → Check both `jsconfig.json` AND `craco.config.js` have matching config
- Chat widget CSP violations → Add origin to both `script-src` and `connect-src` in `netlify.toml`
- Email not sending → MongoDB failure won't block emails (graceful degradation by design)

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

### Google Search Console Indexing Issues (Tracked November 2025, Updated December 2025)

**Current Status**: Multiple indexing problems affecting 300+ pages

**Problems Identified**:
- 139 pages: "Crawled - currently not indexed" (Google sees content but won't index)
- 72 pages: "Soft 404" (Google thinks pages are empty)
- 47 pages: "Alternative page with proper canonical tag"
- 39 pages: "Not found (404)" - old URLs in Google's index
- 29 pages: "Page with redirect" - redirect chains

**Root Cause**: React SPA architecture issues:
1. Googlebot sees empty HTML shell before JavaScript executes
2. No server-side rendering (SSR) or pre-rendering
3. Content loads client-side after initial page load
4. Missing per-page meta tags and structured data

**Fixes Implemented** (Nov 24-30, 2025):
1. ✅ Added Netlify prerendering plugin to netlify.toml
2. ✅ Implemented comprehensive 301 redirects for old URLs
3. ✅ Added HTTPS and www → non-www redirect forcing
4. ✅ Improved caching headers for static assets vs HTML
5. ✅ Added HSTS header for security and SEO trust signals
6. ✅ Synchronized netlify.toml and public/_redirects files
7. ✅ Installed and implemented react-helmet-async (see `src/components/SEO.jsx`)
8. ✅ Created .env.example files for backend and Netlify functions

**Pending Actions**:
- [ ] Add structured data (JSON-LD) to all page types (partially implemented in `public/structured-data.json`)
- [ ] Export GSC 404 list and create additional redirects
- [ ] Request re-indexing via GSC URL Inspection tool
- [ ] Monitor Coverage report weekly for 4 weeks
- [ ] Consider Next.js migration for built-in SSR/SSG (long-term)

**Temporary Workarounds**:
- Netlify prerendering plugin generates static HTML for crawlers
- Explicit redirects prevent redirect chains
- Aggressive caching for static assets improves Core Web Vitals

**Monitoring Plan**:
- Week 1-2: Expect 20-30% improvement in indexed pages
- Week 3-4: Target 50-60% improvement
- Month 2: Stabilization at 80%+ pages indexed

See `SEO_INDEXING_FIXES.md` for complete action plan and technical details.

### SEO Performance Insights (Tracked November 2025, Updated December 2025)

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

### Review Widget Structured Data (November 2025, Unresolved)
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
