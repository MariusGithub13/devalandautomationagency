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
cd netlify/functions && npm install && netlify dev
```

## 🏗️ Architecture (Critical Understanding)

**Three-part system:**
1. **`backend/`** — FastAPI with Motor (async MongoDB, optional). Routes prefixed `/api`. Uses `uvicorn` in dev.
2. **`frontend/`** — React (CRA) with craco customization. Routing in `App.js` (React Router v6). UI components in `src/components/ui/` (Radix + CVA). ALL pages except HomePage lazy-loaded.
3. **`netlify/functions/`** — Node.js 18 serverless functions. **Primary contact form handler** (not FastAPI).

**Why this matters:**
- Contact forms → `netlify/functions/contact.js` sends dual emails via SMTP (notification + confirmation). FastAPI endpoint is secondary.
- MongoDB is **optional** — emails work without it (graceful degradation pattern throughout).
- Frontend builds include sitemap generation via `prebuild` hook.

## ⚡ The THREE-PLACE RULE (Most Common Task)

When adding a new page route, update **all three**:
1. Create `frontend/src/pages/NewPage.jsx` with `<SEO />` and `<Breadcrumb />` components
2. Add lazy route in `frontend/src/App.js`: `const NewPage = lazy(() => import('./pages/NewPage')); ... <Route path="/new-page" element={<NewPage />} />`
3. Add URL to `frontend/scripts/generate-sitemap.mjs` ROUTES array: `"/new-page"`

**Forget step 3 = page won't appear in search engines.**

## 📁 Key File Reference (Where to Look First)

| Issue | Check These Files |
|-------|------------------|
| API logic, DB connection | `backend/server.py` |
| Contact form email delivery | `netlify/functions/contact.js` |
| Routing, lazy loading | `frontend/src/App.js` |
| Build failures | `frontend/package.json` (lifecycle hooks), `craco.config.js` |
| CSP/CORS issues | `netlify.toml` (headers section) |
| SEO meta tags | `frontend/src/components/SEO.jsx` (react-helmet-async) |
| Static content | `frontend/src/data/mock.js` (services, blog posts, company info) |
| Path alias config | `frontend/jsconfig.json` + `craco.config.js` (`@/` → `src/`) |

## 🔑 Environment Variables (Required)

**Backend** (`backend/.env`):
```env
MONGO_URL=mongodb+srv://...  # Optional, graceful degradation
DB_NAME=devaland_db
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=app-password  # Gmail App Password, not account password
CONTACT_EMAIL=office@devaland.com
CORS_ORIGINS=http://localhost:3000  # Comma-separated for prod
```

**Netlify Functions** (set in Netlify UI):
- Same SMTP keys as backend
- See `netlify/functions/.env.example` and `CONTACT_FORM_SETUP.md` for detailed setup

**Quick Setup** (copy these templates):

`backend/.env` template:
```bash
# MongoDB (Optional - graceful degradation)
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=devaland_db

# SMTP Configuration (Required for emails)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password-here
CONTACT_EMAIL=office@devaland.com

# CORS (Development)
CORS_ORIGINS=http://localhost:3000
# Production: CORS_ORIGINS=https://devaland.com,https://www.devaland.com
```

`netlify/functions/.env` template (for local testing only):
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password-here
CONTACT_EMAIL=office@devaland.com
```

## 🎨 Code Patterns & Conventions

**UI Components** (46 pre-built in `src/components/ui/`):
- Always use existing Radix + CVA components before creating custom UI
- Import pattern: `import { Button } from '@/components/ui/button'`
- Classnames: Always use `cn()` from `@/lib/utils` for merging (never manual concatenation)
- Examples: `button.jsx`, `toast.jsx`, `dialog.jsx`, `carousel.jsx`, `accordion.jsx`
- Available: accordion, alert, avatar, badge, button, calendar, card, carousel, checkbox, dialog, dropdown-menu, form, input, tabs, toast, tooltip, and 30+ more

**Data Management** (Critical):
- ALL static content lives in `frontend/src/data/mock.js` — never hardcode in components
- Exports: `companyData`, `services`, `klaviyoServices`, `blogPosts`, `caseStudies`, `heroImages`
- Pattern: `import { companyData, services } from '@/data/mock'`
- Update `mock.js` first, then create page components that display the data

**SEO Components** (Always Include):
- `<SEO />` — First component in every page (react-helmet-async for meta tags)
- `<Breadcrumb />` — After SEO, auto-generates JSON-LD structured data
- `<InternalLinkBlock />` — Contextual navigation blocks for internal linking (critical for SEO)
- `<RelatedPosts />` — Blog post recommendations based on category/tags
- `<NewsletterForm />` — Klaviyo integration via Netlify function (`klaviyo-subscribe.js`)

**Async Backend** (Motor pattern):
- Always `await` Motor queries: `await db.collection.find().to_list(limit)`
- API routes use `APIRouter(prefix="/api")` then include in app
- Close connections on shutdown: `@app.on_event("shutdown")`
- `serverSelectionTimeoutMS=2000` for fast fail if MongoDB unavailable

**Performance Patterns**:
- Lazy load heavy components: `const Component = lazy(() => import('./Component'))` + `<Suspense>`
- Images require `width`/`height` attributes to prevent CLS
- Below-fold images: add `loading="lazy"`
- Third-party widgets: load in `useEffect`, cleanup on unmount (see `TrustpilotWidget.jsx`)

**Security** (CSP/CORS):
- CSP configured in `netlify.toml` headers — test changes with `Content-Security-Policy-Report-Only` first
- CORS: Backend uses `CORSMiddleware` with `CORS_ORIGINS` env var (never `*` in production)
- Netlify functions: Handle OPTIONS preflight manually (see `contact.js` example)

## 📝 Code Examples (Copy These Patterns)

**Add New Page** (SEO-ready template):
```jsx
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';

function MyPage() {
  return (
    <>
      <SEO 
        title="Page Title | Devaland"
        description="SEO description for search engines"
        canonical="https://devaland.com/my-page"
        keywords={["keyword1", "keyword2"]}
      />
      <Breadcrumb items={[{label: "My Page", href: "/my-page"}]} />
      {/* Page content */}
    </>
  );
}
export default MyPage;
```

**Add Carousel** (see `BlogPage.jsx` for full example):
```jsx
import useEmblaCarousel from 'embla-carousel-react';

const [emblaRef] = useEmblaCarousel({
  align: 'start',
  loop: true,
  breakpoints: {
    '(min-width: 768px)': { slidesToScroll: 2 },
    '(min-width: 1024px)': { slidesToScroll: 3 }
  }
});
```

**Add API Endpoint** (FastAPI + Motor):
```python
# In backend/server.py
from pydantic import BaseModel

class MyRequest(BaseModel):
    field: str

@api_router.post("/my-endpoint")
async def my_endpoint(request: MyRequest):
    if mongodb_available:
        await db.my_collection.insert_one(request.dict())
    return {"status": "success"}
```

**Third-Party Widget Pattern** (see `TrustpilotWidget.jsx`):
```jsx
useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://example.com/widget.js';
  script.async = true;
  document.body.appendChild(script);
  
  return () => document.body.removeChild(script); // Cleanup
}, []);
```

**Internal Linking Block** (critical for SEO — use on every major page):
```jsx
import InternalLinkBlock from '@/components/InternalLinkBlock';

<InternalLinkBlock
  title="Klaviyo Resources"
  description="Expert guides to maximize your email marketing ROI"
  links={[
    { label: "10 Essential Flows", to: "/blog/best-10-klaviyo-automation-flows" },
    { label: "Segmentation Guide", to: "/klaviyo-segmentation-strategies" },
    { label: "Case Studies", to: "/klaviyo-case-studies" }
  ]}
  variant="accent"  // 'default' | 'accent' | 'minimal'
/>
```

**Related Posts** (blog pages — increases engagement and internal links):
```jsx
import RelatedPosts from '@/components/RelatedPosts';

<RelatedPosts 
  currentSlug={slug}
  category="Email Marketing"
  tags={["klaviyo", "automation", "shopify"]}
  limit={3}
/>
```

**Newsletter Integration** (Klaviyo via Netlify function):
```jsx
import NewsletterForm from '@/components/NewsletterForm';

<NewsletterForm />  // Full form with GDPR consent
<NewsletterForm compact />  // Compact version for footer/sidebar
```

## ⚠️ Common Pitfalls & Debugging

**Build Failures**:
- ESLint errors → `DISABLE_ESLINT_PLUGIN=true` in `netlify.toml`
- Source map warnings → Already disabled in `craco.config.js`
- Sitemap not updating → Check `prebuild` script in `package.json`
- `@/` imports not resolving → Check both `jsconfig.json` AND `craco.config.js`

**Dependency Issues**:
- React Router ESM errors → `fix-missing-files` postinstall script (don't remove it)
- webpack 5 compatibility → Root `package.json` pins `ajv@6.12.6` (don't upgrade)
- Always use `--legacy-peer-deps` flag for npm commands

**Runtime Issues**:
- Chat widget CSP violations → Add origin to `script-src` and `connect-src` in `netlify.toml`
- Email not sending → Check Netlify function logs; MongoDB failure won't block emails
- Images missing dimensions → Add `width` and `height` to prevent CLS
- Third-party scripts not loading → Update CSP headers in `netlify.toml`

## 🔐 Security Notes

**CSP Configuration** (`netlify.toml`):
- Test CSP changes with `Content-Security-Policy-Report-Only` first
- Add third-party widget origins to both `script-src` and `connect-src`
- Current setup allows `'unsafe-inline'` for Radix UI dynamic styles

**CORS Setup**:
- Backend: Set `CORS_ORIGINS` in `.env` (comma-separated, never `*` in production)
- Netlify Functions: Handle OPTIONS preflight manually (see `contact.js`)

**Secrets Management**:
- Never commit `.env` files
- Backend: Use `.env.example` for documentation
- Netlify: Set env vars in UI (Site settings > Environment variables)
- Different credentials for dev/staging/prod

**Input Validation**:
- Backend: Pydantic `EmailStr` auto-validates emails
- Frontend: Use `react-hook-form` + `zod` schemas (already installed)

## 🎯 Performance Best Practices

**Critical Rules** (See `PAGESPEED_PERFORMANCE_FIXES_DEC_2025.md` for details):
1. **Images**: Always add `width`/`height` attributes to prevent CLS
2. **Lazy loading**: Add `loading="lazy"` for below-fold images
3. **Font display**: Use `font-display: swap` (already configured)
4. **Caching**: Static assets cached 1 year via `netlify.toml`

**Image Optimization**:
- Convert to WebP: `cwebp input.jpg -q 80 -o output.webp`
- Store in `/frontend/public/images/optimized/`
- Update `mock.js` with new paths

## � Internal Linking Strategy

**Critical for SEO** — Google Search Console shows only 36 internal links (very low).

**Components for Internal Linking**:
1. `<InternalLinkBlock />` — Contextual link blocks (3-5 per page)
2. `<RelatedPosts />` — Automatic blog post recommendations
3. `<Breadcrumb />` — Hierarchical navigation (includes structured data)
4. In-content links — Natural contextual links in paragraphs

**Best Practices**:
- **Anchor text**: Use descriptive phrases ("Klaviyo automation guide" not "click here")
- **Link depth**: Every page should be 3 clicks from homepage
- **Content clusters**: Group related content with bidirectional links
- **Blog posts**: 4-5 internal links per post minimum
- **Service pages**: Link to related blog posts, case studies, contact

**Example Pattern** (KlaviyoPage):
```jsx
{/* Near top: Breadcrumb for structure */}
<Breadcrumb items={[{label: 'Services', href: '/services'}, {label: 'Klaviyo', href: '/klaviyo'}]} />

{/* In content: Natural contextual links */}
<p>Learn about our <Link to="/klaviyo-automation-guide">proven automation strategies</Link>...</p>

{/* Bottom section: Link blocks to related content */}
<InternalLinkBlock
  title="Essential Resources"
  links={[
    { label: "10 Best Klaviyo Flows", to: "/blog/best-10-klaviyo-flows" },
    { label: "GDPR Compliance", to: "/klaviyo-gdpr-compliance" },
    { label: "Case Studies", to: "/klaviyo-case-studies" }
  ]}
/>
```

See `INTERNAL_LINKING_STRATEGY.md` for comprehensive guide.

## �🚀 Deployment Workflow

```bash
# Preview deployment (test before production)
netlify deploy
# Returns preview URL like: https://deploy-preview-123--devaland.netlify.app

# Production deployment (after testing preview)
netlify deploy --prod

# Quick production deployment (skip preview)
git push origin main  # Auto-deploys via Netlify GitHub integration

# Check deployment status
netlify status

# View deployment logs
netlify logs:function contact  # View specific function logs
```

## Quick Reference: Common Tasks

**Adding a new page** (THREE-PLACE RULE):
1. Create `frontend/src/pages/NewPage.jsx` with SEO + Breadcrumb components
2. Add route in `frontend/src/App.js`: `const NewPage = lazy(() => import('./pages/NewPage'));` and `<Route path="/new-page" element={<NewPage />} />`
3. Add to sitemap: `frontend/scripts/generate-sitemap.mjs` ROUTES array: `"/new-page"`

**Adding a blog post**:
1. Add post data to `frontend/src/data/mock.js` in `blogPosts` array with unique `slug`
2. Add slug to `frontend/scripts/generate-sitemap.mjs` BLOG_POSTS array: `"/blog/post-slug"`
3. Post automatically renders via `BlogPostPage.jsx` dynamic route
4. Include `<RelatedPosts />` at bottom of post for internal linking
5. Add `<InternalLinkBlock />` components in content for topical authority

**Blog content quality standards** (critical for SEO):
1. **Minimum content length**: 2,500-8,000 words (not just excerpts)
2. **Complete article structure**: Introduction, 8-12 H2 sections with 3-5 H3 subsections each, conclusion with CTA
3. **SEO optimization**: Target keywords in first 100 words, H2/H3 headings, naturally throughout content
4. **Internal linking**: 4-6 contextual links to related blog posts, service pages, and case studies
5. **Practical value**: Real examples, data/statistics, actionable steps, case studies, ROI calculations
6. **Formatting**: Short paragraphs (3-4 sentences), bullet points, numbered lists, bold key concepts
7. **GSC compliance**: Articles indexed in Google Search Console MUST have complete content (not excerpts)

**Blog post template pattern**:
```javascript
{
  id: 1,
  slug: "descriptive-keyword-rich-slug",
  title: "Compelling Title with Target Keywords (Under 60 chars)",
  excerpt: "Engaging 150-160 character summary with keywords and value proposition",
  category: "Email Marketing", // or "Voice AI", "E-commerce", etc.
  readTime: "8-12 min read",
  date: "2024-MM-DD",
  author: "Marius Andronie" or "Devaland Team",
  image: "path/to/image.jpg",
  tags: ["primary keyword", "secondary keyword", "related term", "niche term", "brand term"],
  content: `FULL ARTICLE CONTENT HERE - 2,500-8,000 words
  
## Introduction (200-300 words)
Hook with problem/pain point, present solution/opportunity, preview article value

## Section 1: Core Concept (400-600 words)
Explain fundamental concept, provide context, use real examples

## Section 2-10: Deep Dive Topics (300-500 words each)
Detailed explanations, step-by-step guides, data and statistics, case studies

## Conclusion (200-300 words)
Summarize key takeaways, provide clear next steps, strong CTA

**CRITICAL**: Never use placeholder text like "content here" or truncated articles. 
Every blog post must have COMPLETE, SUBSTANTIAL content ready for publication.`,
  internalLinks: [
    { text: "Related Service", href: "/service-page" },
    { text: "Related Blog Post", href: "/blog/related-post" },
    { text: "Case Studies", href: "/case-studies" },
    { text: "Contact Us", href: "/contact" }
  ]
}
```

**SEO optimization checklist** (every page):
1. `<SEO />` component with unique title, description, keywords
2. `<Breadcrumb />` with logical hierarchy (auto-generates JSON-LD)
3. 3-5 `<InternalLinkBlock />` components linking to related content
4. Image `width`/`height` attributes (prevent CLS)
5. Add page to `generate-sitemap.mjs` ROUTES array

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

## � Blog Content Audit & Quality Assurance

**Current blog post status** (15 total):
- ✅ **Complete** (4 posts): "10 Klaviyo Flows", "SMS Marketing", "Advanced Analytics", "Customer Loyalty"
- ⚠️ **Incomplete** (11 posts): Need full 2,500-8,000 word articles

**Before updating blog posts**:
1. Check current word count: Blog post should have 2,500+ words minimum
2. Verify article structure: Must have 8-12 H2 sections with subsections
3. Confirm internal links: 4-6 contextual links to related content
4. Ensure SEO elements: Keywords in headings, first paragraph, naturally throughout
5. Add practical value: Real examples, statistics, actionable steps, ROI calculations

**Common blog content mistakes**:
- Using excerpt text as full article (100-300 words instead of 3,000+)
- Missing H2/H3 heading structure
- No internal links or only 1-2 links
- Generic content without specific examples or data
- Placeholder text like "content here" or "to be completed"
- Articles cut off mid-sentence or mid-section

**Quality checklist before publishing**:
- [ ] Article has 2,500+ words of complete content
- [ ] Clear introduction (200-300 words) with problem/solution
- [ ] 8-12 major sections (H2) with detailed content
- [ ] 3-5 subsections (H3) per major section
- [ ] 4-6 internal links to related blog posts, services, case studies
- [ ] Real examples, statistics, case studies included
- [ ] Actionable steps or frameworks provided
- [ ] Strong conclusion with clear CTA
- [ ] All `internalLinks` array populated with 4+ links
- [ ] Article reads smoothly from start to finish (no truncation)

## �📚 Additional Resources

For detailed information on specific topics:
- **`CONTACT_FORM_SETUP.md`** — SMTP configuration walkthrough
- **`SEO_INDEXING_FIXES.md`** — Complete SEO action plan (300+ page indexing issues)
- **`INTERNAL_LINKING_STRATEGY.md`** — Internal linking best practices (GSC shows only 36 links - critical issue)
- **`GSC_SETUP_GUIDE.md`** — Google Search Console setup and monitoring
- **`PAGESPEED_PERFORMANCE_FIXES_DEC_2025.md`** — Performance optimization guide
- **`BREADCRUMB_SEO_STRATEGY.md`** — Site architecture & navigation
- **`KLAVIYO_PAGE_SEO_OPPORTUNITY.md`** — Klaviyo content strategy
- **`VOICE_AI_SEO_GUIDE.md`** — Voice AI page optimization
- **`ROI_CALCULATOR_SUMMARY.md`** — Calculator component docs
- **`TRUSTPILOT_IMPLEMENTATION_COMPLETE.md`** — Widget integration
- **`POPULAR_ARTICLES_CAROUSEL.md`** — Embla carousel implementation

## When Making Changes

- Edit files minimally; keep public APIs stable (don't rename routes without updating frontend/backend)
- Add new env keys to `.env.example` files and document in PR
- Remember THREE-PLACE RULE for new pages
- Run build/test commands locally before proposing changes
