# Copilot / AI Agent Instructions

**Last updated**: December 12, 2025

This mono-repo contains: FastAPI backend, React SPA frontend (CRA + craco), and Netlify serverless functions.

## 🚀 Quick Start (30 seconds)

```bash
# Frontend dev (http://localhost:3000)
cd frontend && npm install && npm start

# Backend dev (http://localhost:8000) - optional, requires backend/.env
cd backend && python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt && uvicorn server:app --reload --port 8000

# Test Netlify functions locally
# Copilot / AI Agent Instructions

**Last updated:** January 8, 2026

This monorepo powers Devaland's automation agency platform. It consists of three tightly integrated parts:

## 🏗️ Architecture Overview

1. **backend/** — FastAPI (Python) with optional MongoDB (Motor). All API routes are under `/api`. Graceful degradation: if MongoDB is unavailable, email and core features still work.
2. **frontend/** — React SPA (CRA + craco). Routing in `src/App.js` (React Router v6). UI components in `src/components/ui/` (Radix + CVA). All pages except HomePage are lazy-loaded. Static content (services, blog, company info) is in `src/data/mock.js`.
3. **netlify/functions/** — Node.js 18 serverless functions. **Contact form is handled here, not in FastAPI.**

**Key integration:**
- Contact forms use `netlify/functions/contact.js` (SMTP, dual email: notification + confirmation). FastAPI endpoint is fallback only.
- MongoDB is optional; all features degrade gracefully if unavailable.
- Sitemap is generated at build via `frontend/scripts/generate-sitemap.mjs`.

## ⚡ Developer Workflow

**Quick start:**
- Frontend: `cd frontend && npm install && npm start` (http://localhost:3000)
- Backend: `cd backend && python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt && uvicorn server:app --reload --port 8000`
- Netlify functions: `cd netlify/functions && npm install && netlify dev`

**THREE-PLACE RULE for new pages:**
1. Create `frontend/src/pages/NewPage.jsx` (must include `<SEO />` and `<Breadcrumb />`)
2. Add lazy route in `frontend/src/App.js`
3. Add route to `frontend/scripts/generate-sitemap.mjs` for SEO

**Build/Debug:**
- Build scripts and hooks: see `frontend/package.json`, `craco.config.js`
- ESLint can be disabled via `DISABLE_ESLINT_PLUGIN=true` in `netlify.toml`
- For CSP/CORS, see `netlify.toml` and backend `.env` (`CORS_ORIGINS`)

## 📁 Key Files & Patterns

| Task | File(s) |
|------|---------|
| API logic | backend/server.py |
| Contact form | netlify/functions/contact.js |
| Routing | frontend/src/App.js |
| Static content | frontend/src/data/mock.js |
| UI components | frontend/src/components/ui/ |
| SEO meta | frontend/src/components/SEO.jsx |
| Sitemap | frontend/scripts/generate-sitemap.mjs |
| Path aliases | frontend/jsconfig.json, craco.config.js |

**UI:** Always use Radix + CVA components from `src/components/ui/`. Use `cn()` from `@/lib/utils` for class merging. Never hardcode static content—import from `mock.js`.

**SEO:** Every page must use `<SEO />` and `<Breadcrumb />`. Add 3-5 `<InternalLinkBlock />`s for internal linking. See `INTERNAL_LINKING_STRATEGY.md` for details.

**Contact/email:** Use Netlify function (`contact.js`). SMTP config is required in both backend and Netlify env vars. MongoDB failure does not block email.

## 🔑 Environment & Secrets

- Backend: see `backend/.env.example` for required keys (MongoDB, SMTP, CORS)
- Netlify: set SMTP keys in UI (see `CONTACT_FORM_SETUP.md`)
- Never commit `.env` files

## 📝 Project-Specific Patterns

- **Static content:** All in `frontend/src/data/mock.js` (services, blog, company info)
- **Lazy loading:** All pages except HomePage are lazy-loaded in `App.js`
- **Internal linking:** Use `<InternalLinkBlock />` and `<RelatedPosts />` on all major pages
- **Image optimization:** All images must have `width`/`height` attributes; use WebP in `/frontend/public/images/optimized/`
- **Performance:** See `PAGESPEED_PERFORMANCE_FIXES_DEC_2025.md` for required optimizations
- **CSP/CORS:** Update `netlify.toml` for new third-party scripts; test with `Content-Security-Policy-Report-Only` first

## 🚩 Common Pitfalls

- Forgetting to update sitemap (page won't be indexed)
- Hardcoding static content in components (must use `mock.js`)
- Missing SEO components or internal links
- Not handling MongoDB unavailability gracefully
- Not updating CORS/CSP for new integrations

## 📚 Further Reading

- `INTERNAL_LINKING_STRATEGY.md` — Internal linking best practices
- `CONTACT_FORM_SETUP.md` — SMTP/Netlify config
- `SEO_INDEXING_FIXES.md` — SEO action plan
- `PAGESPEED_PERFORMANCE_FIXES_DEC_2025.md` — Performance
- `BREADCRUMB_SEO_STRATEGY.md` — Navigation/SEO

---
**When in doubt, check the referenced files above for canonical patterns.**
## ⚡ Developer Workflow

**Quick start:**
- Frontend: `cd frontend && npm install && npm start` (http://localhost:3000)
- Backend: `cd backend && python -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt && uvicorn server:app --reload --port 8000`
- Netlify functions: `cd netlify/functions && npm install && netlify dev`

**THREE-PLACE RULE for new pages:**
1. Create `frontend/src/pages/NewPage.jsx` (must include `<SEO />` and `<Breadcrumb />`)
2. Add lazy route in `frontend/src/App.js`
3. Add route to `frontend/scripts/generate-sitemap.mjs` for SEO

**Build/Debug:**
- Build scripts and hooks: see `frontend/package.json`, `craco.config.js`
- ESLint can be disabled via `DISABLE_ESLINT_PLUGIN=true` in `netlify.toml`
- For CSP/CORS, see `netlify.toml` and backend `.env` (`CORS_ORIGINS`)

## 📁 Key Files & Patterns

| Task | File(s) |
|------|---------|
| API logic | backend/server.py |
| Contact form | netlify/functions/contact.js |
| Routing | frontend/src/App.js |
| Static content | frontend/src/data/mock.js |
| UI components | frontend/src/components/ui/ |
| SEO meta | frontend/src/components/SEO.jsx |
| Sitemap | frontend/scripts/generate-sitemap.mjs |
| Path aliases | frontend/jsconfig.json, craco.config.js |

**UI:** Always use Radix + CVA components from `src/components/ui/`. Use `cn()` from `@/lib/utils` for class merging. Never hardcode static content—import from `mock.js`.

**SEO:** Every page must use `<SEO />` and `<Breadcrumb />`. Add 3-5 `<InternalLinkBlock />`s for internal linking. See `INTERNAL_LINKING_STRATEGY.md` for details.

**Contact/email:** Use Netlify function (`contact.js`). SMTP config is required in both backend and Netlify env vars. MongoDB failure does not block email.

## 🔑 Environment & Secrets

- Backend: see `backend/.env.example` for required keys (MongoDB, SMTP, CORS)
- Netlify: set SMTP keys in UI (see `CONTACT_FORM_SETUP.md`)
- Never commit `.env` files

## 📝 Project-Specific Patterns

- **Static content:** All in `frontend/src/data/mock.js` (services, blog, company info)
- **Lazy loading:** All pages except HomePage are lazy-loaded in `App.js`
- **Internal linking:** Use `<InternalLinkBlock />` and `<RelatedPosts />` on all major pages
- **Image optimization:** All images must have `width`/`height` attributes; use WebP in `/frontend/public/images/optimized/`
- **Performance:** See `PAGESPEED_PERFORMANCE_FIXES_DEC_2025.md` for required optimizations
- **CSP/CORS:** Update `netlify.toml` for new third-party scripts; test with `Content-Security-Policy-Report-Only` first

## 🚩 Common Pitfalls

- Forgetting to update sitemap (page won't be indexed)
- Hardcoding static content in components (must use `mock.js`)
- Missing SEO components or internal links
- Not handling MongoDB unavailability gracefully
- Not updating CORS/CSP for new integrations

## 📚 Further Reading

- `INTERNAL_LINKING_STRATEGY.md` — Internal linking best practices
- `CONTACT_FORM_SETUP.md` — SMTP/Netlify config
- `SEO_INDEXING_FIXES.md` — SEO action plan
- `PAGESPEED_PERFORMANCE_FIXES_DEC_2025.md` — Performance
- `BREADCRUMB_SEO_STRATEGY.md` — Navigation/SEO

---
**When in doubt, check the referenced files above for canonical patterns.**
    { label: "10 Essential Flows", to: "/blog/best-10-klaviyo-automation-flows" },
