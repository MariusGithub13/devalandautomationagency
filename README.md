# Devaland Automation Agency 🚀

**Marketing automation and digital transformation solutions** - A modern web presence built with React, FastAPI, and Netlify.

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/devaland/deploys)

## 🌟 About

Devaland Automation Agency specializes in:
- **Email Marketing**: Klaviyo automation, segmentation, and optimization
- **Voice AI**: Conversational AI solutions for customer engagement
- **E-commerce**: Shopify integration and optimization
- **Marketing Automation**: End-to-end automation workflows

**Website**: [https://devaland.com](https://devaland.com)

---

## 🏗️ Architecture

This is a mono-repo with three integrated systems:

```
devalandautomationagency/
├── frontend/          # React SPA (Create React App + craco)
├── backend/           # FastAPI with async MongoDB (optional)
├── netlify/           # Serverless functions for contact forms & emails
└── .github/           # GitHub Actions workflows & Copilot instructions
```

### Tech Stack

**Frontend** (Primary):
- React 18 with React Router v6
- Radix UI components + Tailwind CSS
- react-helmet-async for SEO
- Embla carousel for content sliders
- 46 pre-built UI components

**Backend** (Optional):
- FastAPI with Pydantic validation
- Motor (async MongoDB driver)
- CORS-enabled API endpoints
- Graceful degradation (works without MongoDB)

**Serverless Functions**:
- Netlify Functions (Node.js 18)
- SMTP email delivery (contact forms, confirmations)
- Klaviyo newsletter integration
- Independent from backend

**Deployment**:
- Netlify (frontend + functions)
- GitHub Actions (broken link testing)
- Automated deployments on push to main

---

## 🚀 Quick Start (30 seconds)

### Prerequisites

- **Node.js 18.x** and **npm 10.x** (required)
- **Python 3.11+** (optional, for backend)
- **Git** (for version control)
- **Netlify CLI** (optional, for local function testing)

### 1. Clone Repository

```bash
git clone https://github.com/MariusGithub13/devalandautomationagency.git
cd devalandautomationagency
```

### 2. Frontend Setup (Essential)

```bash
cd frontend
npm install
npm start
```

Frontend runs at **http://localhost:3000**

### 3. Backend Setup (Optional)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt

# Create .env file (see backend/.env.example)
cp .env.example .env
# Edit .env with your credentials

uvicorn server:app --reload --port 8000
```

Backend runs at **http://localhost:8000**

### 4. Netlify Functions (Optional - for local testing)

```bash
cd netlify/functions
npm install

# Create .env file (see .env.example)
cp .env.example .env
# Edit .env with SMTP credentials

netlify dev  # Requires Netlify CLI: npm install -g netlify-cli
```

---

## 📁 Project Structure

```
frontend/
├── public/              # Static assets (images, fonts)
├── scripts/             # Build scripts (sitemap generation, link testing)
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # 46 pre-built Radix UI components
│   │   ├── SEO.jsx     # SEO meta tags
│   │   ├── Breadcrumb.jsx
│   │   └── ...
│   ├── data/           # Static content (mock.js)
│   ├── lib/            # Utilities (cn() for classnames)
│   ├── pages/          # Page components
│   ├── App.js          # Routing configuration
│   └── index.js        # Entry point
├── craco.config.js     # CRA customization
├── jsconfig.json       # Path aliases (@/ → src/)
└── package.json        # Dependencies & scripts

backend/
├── server.py           # FastAPI application
├── requirements.txt    # Python dependencies
└── .env.example        # Environment template

netlify/
├── functions/          # Serverless functions
│   ├── contact.js      # Contact form handler
│   ├── klaviyo-subscribe.js
│   └── .env.example
└── netlify.toml        # Netlify configuration (headers, redirects)

.github/
├── workflows/          # GitHub Actions
│   └── broken-link-testing.yml
└── copilot-instructions.md  # Copilot coding guidelines
```

---

## 🛠️ Development Commands

### Frontend

```bash
cd frontend

# Development server
npm start               # http://localhost:3000

# Production build
npm run build          # Generates sitemap before build

# Testing
npm run test:links                  # Test internal links
npm run test:links:external         # Test external links too
npm run test:links:report           # Generate JSON report
npm run test:links:full             # Full report with external links

# Maintenance
npm run fix-missing-files           # Fix React Router ESM issues
```

### Backend

```bash
cd backend

# Development server
uvicorn server:app --reload --port 8000

# Production server
uvicorn server:app --host 0.0.0.0 --port 8000

# Requirements
pip install -r requirements.txt
pip freeze > requirements.txt  # Update requirements
```

### Deployment

```bash
# Automatic (recommended)
git push origin main  # Auto-deploys via Netlify

# Manual preview
netlify deploy  # Preview URL

# Manual production
netlify deploy --prod

# Check status
netlify status

# View logs
netlify logs:function contact
```

---

## 🔑 Environment Setup

### Frontend (No env vars needed)

Frontend is statically built, no environment variables required.

### Backend (.env file)

Create `backend/.env`:

```env
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

### Netlify Functions (Set in Netlify UI)

In Netlify Dashboard: **Site settings → Environment variables**

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password-here
CONTACT_EMAIL=office@devaland.com
KLAVIYO_PRIVATE_API_KEY=your-klaviyo-key  # Optional
```

**See `CONTACT_FORM_SETUP.md` for detailed SMTP setup instructions.**

---

## 🎨 Key Features

### SEO Optimization
- Meta tags with react-helmet-async
- Automatic sitemap generation
- Breadcrumb navigation with JSON-LD
- Internal linking strategy
- Google Search Console integration

### Performance
- Lazy loading for all pages except HomePage
- Image optimization with dimensions
- Font-display: swap
- 1-year caching for static assets
- Code splitting with React.lazy

### UI Components
- 46 pre-built Radix UI components
- Tailwind CSS for styling
- CVA (Class Variance Authority) for variants
- Accessible by default
- Responsive design

### Contact Forms
- Dual email delivery (notification + confirmation)
- SMTP integration via Netlify Functions
- reCAPTCHA protection
- Form validation with react-hook-form + zod

### Content Management
- All static content in `frontend/src/data/mock.js`
- Easy to update services, blog posts, case studies
- No CMS needed for current setup

---

## 🧪 Testing

### Automated Tests

**Broken Link Testing** (GitHub Actions):
- Runs on every PR (internal links only)
- Weekly schedule for external links (Mondays 9 AM UTC)
- Creates issues automatically for broken links
- Artifacts saved for 30-90 days

**Run locally**:
```bash
cd frontend
npm run test:links              # Internal links
npm run test:links:external     # All links
npm run test:links:report       # JSON report
```

### Manual Testing Checklist

Before submitting PR:

- [ ] Frontend builds successfully: `npm run build`
- [ ] No console errors in browser
- [ ] All links work (internal and external)
- [ ] Forms submit correctly
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Images load and have proper dimensions
- [ ] SEO tags present (view page source)
- [ ] Breadcrumb navigation works
- [ ] No broken images or 404s

---

## 📚 Documentation

### For Developers

- **`.github/copilot-instructions.md`** - Complete coding guidelines (491 lines)
- **`AGENTS.md`** - AI agent context and standards (this file)
- **`CONTACT_FORM_SETUP.md`** - SMTP configuration walkthrough
- **`INTERNAL_LINKING_STRATEGY.md`** - SEO internal linking guide

### For SEO

- **`SEO_INDEXING_FIXES.md`** - Complete SEO action plan
- **`GSC_SETUP_GUIDE.md`** - Google Search Console setup
- **`BREADCRUMB_SEO_STRATEGY.md`** - Site architecture
- **`KLAVIYO_PAGE_SEO_OPPORTUNITY.md`** - Content strategy

### For Performance

- **`PAGESPEED_PERFORMANCE_FIXES_DEC_2025.md`** - Optimization guide
- **`MOBILE_PERFORMANCE_OPTIMIZATION_SUMMARY.md`** - Mobile fixes
- **`PERFORMANCE_TESTING_GUIDE.md`** - Testing procedures

### Implementation Guides

- **`TRUSTPILOT_IMPLEMENTATION_COMPLETE.md`** - Review widget
- **`POPULAR_ARTICLES_CAROUSEL.md`** - Embla carousel
- **`ROI_CALCULATOR_SUMMARY.md`** - Calculator component
- **`GTM_IMPLEMENTATION_SUMMARY.md`** - Google Tag Manager

---

## 🤝 Contributing

### Workflow

1. **Create branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes** following conventions in `.github/copilot-instructions.md`

3. **Test locally**:
   ```bash
   npm run build  # Must succeed
   npm run test:links  # Check for broken links
   ```

4. **Commit** with conventional commits:
   ```bash
   git commit -m "feat(blog): add new article about email marketing"
   ```

5. **Push** and create PR:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **PR Review**: Ensure CI passes, address feedback

### Branch Naming

- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/documentation-update` - Docs only
- `refactor/component-name` - Refactoring
- `perf/performance-improvement` - Performance
- `copilot/task-description` - Copilot branches

### Commit Messages

Follow conventional commits:
```
feat(scope): add new feature
fix(scope): resolve bug
docs(scope): update documentation
style(scope): formatting changes
refactor(scope): code refactoring
perf(scope): performance improvement
test(scope): add tests
chore(scope): maintenance
```

---

## 🔐 Security

### Best Practices

✅ **Do**:
- Use environment variables for secrets
- Validate all inputs (Pydantic, zod)
- Keep dependencies updated
- Review security alerts
- Implement rate limiting
- Use HTTPS only

❌ **Don't**:
- Commit `.env` files
- Hardcode API keys or passwords
- Use `CORS_ORIGINS=*` in production
- Ignore security warnings
- Skip input validation

### Reporting Security Issues

Email security concerns to: **security@devaland.com**

**Do not** create public GitHub issues for security vulnerabilities.

---

## 📊 Performance

### Current Scores

- **PageSpeed Insights**: 90+ (target)
- **Core Web Vitals**: All passing
- **Lighthouse**: 95+ performance

### Optimization Techniques

1. **Images**: WebP format, proper dimensions, lazy loading
2. **Code Splitting**: React.lazy for route-based splitting
3. **Caching**: 1-year cache for static assets
4. **Fonts**: font-display: swap
5. **CSS**: Tailwind with PurgeCSS
6. **Build**: Craco with optimizations

See `PAGESPEED_PERFORMANCE_FIXES_DEC_2025.md` for details.

---

## 🐛 Troubleshooting

### Common Issues

**Build fails with ESLint errors**
```bash
# ESLint plugin is disabled in netlify.toml
# Check: DISABLE_ESLINT_PLUGIN="true"
```

**`@/` imports not resolving**
```bash
# Check both files:
# 1. frontend/jsconfig.json
# 2. frontend/craco.config.js
```

**Contact form not sending emails**
```bash
# 1. Check Netlify function logs
# 2. Verify SMTP env vars in Netlify UI
# 3. Test locally: netlify dev
```

**React Router ESM errors**
```bash
# Run postinstall script
npm run fix-missing-files
```

**MongoDB connection errors**
```bash
# Expected - graceful degradation
# Emails will still work via Netlify Functions
```

**CSP violations in console**
```bash
# 1. Identify blocked domain
# 2. Add to netlify.toml CSP header
# 3. Test with Content-Security-Policy-Report-Only first
```

---

## 📞 Support

### Getting Help

1. **Check documentation** (see Documentation section)
2. **Search issues** on GitHub
3. **Create issue** with details:
   - Environment (dev/prod)
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if UI issue
   - Error messages/logs

### Resources

- **Website**: [https://devaland.com](https://devaland.com)
- **GitHub**: [https://github.com/MariusGithub13/devalandautomationagency](https://github.com/MariusGithub13/devalandautomationagency)
- **Email**: contact@devaland.com

---

## 📄 License

Copyright © 2024 Devaland Automation Agency. All rights reserved.

---

## 🙏 Acknowledgments

Built with:
- [React](https://react.dev/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Netlify](https://www.netlify.com/)

---

**For AI Agents**: See `.github/copilot-instructions.md` for complete coding guidelines and `AGENTS.md` for additional context.
