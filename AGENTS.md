# AGENTS.md - AI Agent Context & Guidelines

**Last updated**: December 16, 2024

This document provides additional context, standards, and guidelines for AI agents (GitHub Copilot, custom coding agents) working on this repository. Read this alongside `.github/copilot-instructions.md` for complete understanding.

---

## 🎯 Repository Overview

**Devaland Automation Agency** is a marketing automation company website with three integrated systems:

- **Frontend**: React SPA (CRA + craco) with Radix UI components and Tailwind CSS
- **Backend**: FastAPI with async MongoDB (optional - graceful degradation pattern)
- **Serverless**: Netlify Functions for contact forms, newsletter subscriptions, and email delivery

**Tech Stack**:
- Frontend: React 18, React Router v6, Radix UI, Tailwind CSS, react-helmet-async (SEO)
- Backend: Python 3.11+, FastAPI, Motor (async MongoDB), Pydantic
- Deployment: Netlify (frontend + functions), optional backend deployment
- CI/CD: GitHub Actions (broken link testing)

---

## 🔄 Git Workflow & Branch Strategy

### Branch Naming Conventions

Use descriptive branch names with prefixes:

```
feature/feature-name          # New features
fix/bug-description          # Bug fixes
hotfix/critical-issue        # Production hotfixes
refactor/component-name      # Code refactoring
docs/documentation-update    # Documentation changes
test/test-description        # Test additions
perf/performance-improvement # Performance optimizations
copilot/task-description     # Copilot-created branches
```

**Examples**:
- `feature/add-testimonials-carousel`
- `fix/contact-form-validation`
- `docs/update-setup-instructions`
- `perf/optimize-image-loading`

### Commit Message Standards

Follow conventional commits format:

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring (no feature change)
- `perf`: Performance improvement
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (deps, build config)
- `ci`: CI/CD changes

**Examples**:
```
feat(blog): add popular articles carousel
fix(contact): resolve email validation error
docs(readme): update environment setup instructions
perf(images): implement lazy loading for hero images
refactor(ui): migrate button component to Radix UI
test(links): add external link validation
```

**Commit message rules**:
- Keep subject line under 72 characters
- Use present tense ("add" not "added")
- Don't end subject with period
- Use imperative mood ("change" not "changes")
- Reference issues/PRs when relevant: `fixes #123`, `relates to #456`

---

## 🔍 Code Review Guidelines

### Pull Request Standards

Every PR must include:

1. **Clear title**: Descriptive, follows commit convention
2. **Description**: What changed, why, and how to test
3. **Checklist**: Mark completed items
4. **Screenshots**: For UI changes (mandatory)
5. **Related issues**: Link to issues being addressed
6. **Testing**: Evidence of manual testing or passing CI

**PR Template**:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## How Has This Been Tested?
Describe manual testing steps

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated (if applicable)
- [ ] Linting passes
- [ ] Build succeeds
- [ ] Manually tested
- [ ] Screenshots added (UI changes)

## Screenshots (for UI changes)
Add screenshots here
```

### Code Review Checklist

**Functionality**:
- [ ] Code does what it's supposed to do
- [ ] Edge cases handled
- [ ] Error handling implemented
- [ ] No console.log or debug code left
- [ ] Works across browsers (if frontend)

**Code Quality**:
- [ ] Follows existing patterns and conventions
- [ ] No unnecessary complexity
- [ ] DRY principle followed
- [ ] Meaningful variable/function names
- [ ] Comments explain "why" not "what"
- [ ] No commented-out code

**Performance**:
- [ ] No unnecessary re-renders (React)
- [ ] Images optimized and have dimensions
- [ ] Lazy loading implemented where appropriate
- [ ] No performance regressions

**Security**:
- [ ] No hardcoded secrets or credentials
- [ ] Input validation implemented
- [ ] XSS vulnerabilities addressed
- [ ] CSP headers updated if needed
- [ ] CORS configured correctly

**SEO** (frontend only):
- [ ] `<SEO />` component included
- [ ] `<Breadcrumb />` component added
- [ ] Internal links added
- [ ] Page added to sitemap generator
- [ ] Meta tags accurate
- [ ] Images have alt text

**Testing**:
- [ ] All existing tests pass
- [ ] New tests added for new features
- [ ] Manual testing completed
- [ ] No broken links introduced

---

## 🧪 Testing Standards

### Testing Infrastructure

**Available Tests**:
1. **Broken Link Testing**: Internal and external link validation
   - Command: `npm run test:links` (internal only)
   - Command: `npm run test:links:external` (includes external)
   - Command: `npm run test:links:report` (generates JSON report)
   - Command: `npm run test:links:full` (full report with external)

2. **Unit Tests**: React Testing Library (when added)
   - Command: `npm test` (not yet implemented)

3. **Build Tests**: Ensure build succeeds
   - Command: `npm run build`

**CI/CD Workflows**:
- **Broken Link Testing**: Runs on PRs and weekly schedule
  - Tests internal links on every PR
  - Tests external links weekly (Mondays 9 AM UTC)
  - Creates issues for broken links automatically

### When to Add Tests

**Always add tests for**:
- New API endpoints
- Form validation logic
- Complex business logic
- Utility functions
- Bug fixes (prevent regression)

**Manual testing required for**:
- UI changes
- Email delivery
- Third-party integrations
- Performance optimizations

### How to Test Locally

**Frontend**:
```bash
cd frontend
npm install
npm start  # Dev server at localhost:3000
npm run build  # Test production build
npm run test:links  # Test internal links
```

**Backend**:
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn server:app --reload --port 8000
```

**Netlify Functions**:
```bash
cd netlify/functions
npm install
netlify dev  # Requires Netlify CLI
```

---

## 🏗️ Architecture Decisions

### Why This Architecture?

**Three-Part System**:
1. **FastAPI Backend** (optional): For potential future dashboard, analytics, or CMS needs
2. **React Frontend** (primary): Fast, SEO-optimized SPA with static generation
3. **Netlify Functions** (serverless): Contact forms, emails, newsletter - no server management

**Graceful Degradation Pattern**:
- MongoDB is optional - emails work without it
- Backend can be turned off - frontend + functions still work
- Each system can fail independently without breaking the whole site

**Technology Choices**:
- **React Router v6**: Client-side routing with lazy loading for performance
- **Radix UI**: Accessible, unstyled primitives for full design control
- **Tailwind CSS**: Utility-first for rapid development
- **Craco**: CRA customization without ejecting
- **Motor**: Async MongoDB for high-performance database operations
- **Pydantic**: Type-safe API validation
- **Netlify**: JAMstack hosting with CDN, serverless functions, and auto-deploy

### Key Design Patterns

**Frontend Patterns**:
1. **Lazy Loading**: All pages except HomePage lazy-loaded for performance
2. **Data Centralization**: All static content in `frontend/src/data/mock.js`
3. **Component Composition**: Radix UI primitives + CVA variants
4. **SEO First**: Every page has `<SEO />` and `<Breadcrumb />` components
5. **Performance**: Images have dimensions, lazy loading, font-display: swap

**Backend Patterns**:
1. **Async Everywhere**: All I/O operations use async/await
2. **Graceful Degradation**: MongoDB optional, fallback to memory/skip
3. **Validation First**: Pydantic models validate all inputs
4. **CORS Configuration**: Environment-based, never wildcard in production

**Security Patterns**:
1. **CSP Headers**: Strict Content Security Policy in netlify.toml
2. **Input Validation**: Pydantic + zod schemas
3. **Secrets Management**: Never commit .env files
4. **HTTPS Only**: Force SSL via Netlify

---

## 📚 API Standards

### Backend API Conventions

**Endpoint Structure**:
```python
# All API routes prefixed with /api
@api_router.post("/contact")
@api_router.get("/blog-posts")
@api_router.get("/services")
```

**Request/Response Models**:
```python
from pydantic import BaseModel, EmailStr

class ContactRequest(BaseModel):
    name: str
    email: EmailStr  # Auto-validates email format
    message: str
    
class ContactResponse(BaseModel):
    status: str
    message: str
```

**Error Handling**:
```python
from fastapi import HTTPException

# Use appropriate HTTP status codes
raise HTTPException(status_code=400, detail="Invalid email format")
raise HTTPException(status_code=404, detail="Resource not found")
raise HTTPException(status_code=500, detail="Internal server error")
```

### Netlify Function Standards

**File Structure**:
```
netlify/functions/
├── contact.js           # Contact form handler
├── klaviyo-subscribe.js # Newsletter subscription
└── .env.example        # Environment template
```

**Function Template**:
```javascript
exports.handler = async (event, context) => {
  // Handle CORS preflight
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

  try {
    // Function logic here
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
```

---

## 🎨 UI/UX Standards

### Component Guidelines

**Always use existing components first**:
- Check `frontend/src/components/ui/` before creating new UI components
- 46 pre-built Radix + CVA components available
- Use `cn()` utility for className merging (never manual concatenation)

**Component Import Pattern**:
```jsx
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
import { Toast } from '@/components/ui/toast';
```

**SEO Component Pattern** (every page):
```jsx
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';

function MyPage() {
  return (
    <>
      <SEO 
        title="Page Title | Devaland"
        description="SEO description"
        canonical="https://devaland.com/my-page"
        keywords={["keyword1", "keyword2"]}
      />
      <Breadcrumb items={[
        {label: "Home", href: "/"},
        {label: "My Page", href: "/my-page"}
      ]} />
      {/* Page content */}
    </>
  );
}
```

### Accessibility Requirements

**Mandatory**:
- [ ] Semantic HTML (header, nav, main, footer, article, section)
- [ ] ARIA labels for interactive elements
- [ ] Keyboard navigation support (tab order, focus management)
- [ ] Alt text for all images
- [ ] Color contrast ratio 4.5:1 minimum (WCAG AA)
- [ ] Focus indicators visible
- [ ] Screen reader tested (VoiceOver, NVDA, or JAWS)

**Radix UI Benefits**:
- Built-in ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support

---

## 🚀 Deployment & Environments

### Environments

1. **Development**: `localhost:3000` (frontend), `localhost:8000` (backend)
2. **Preview**: Netlify deploy previews (every PR)
3. **Production**: `https://devaland.com` (main branch)

### Deployment Process

**Automatic** (recommended):
```bash
# Push to main branch - auto-deploys via Netlify GitHub integration
git push origin main
```

**Manual** (testing):
```bash
# Preview deployment
netlify deploy

# Production deployment (after testing preview)
netlify deploy --prod
```

### Environment Variables

**Frontend** (Netlify UI):
- No environment variables needed (static build)

**Backend** (if deployed):
- `MONGO_URL`: MongoDB connection string
- `DB_NAME`: Database name
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`: Email config
- `CONTACT_EMAIL`: Recipient email
- `CORS_ORIGINS`: Allowed origins (comma-separated)

**Netlify Functions** (Netlify UI):
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`: Email config
- `CONTACT_EMAIL`: Recipient email
- `KLAVIYO_PRIVATE_API_KEY`: Newsletter integration (optional)

---

## 🐛 Common Issues & Solutions

### Build Issues

**Problem**: ESLint errors blocking build
**Solution**: ESLint plugin disabled in netlify.toml (`DISABLE_ESLINT_PLUGIN=true`)

**Problem**: Source map warnings
**Solution**: Already disabled in craco.config.js

**Problem**: `@/` imports not resolving
**Solution**: Check both `jsconfig.json` AND `craco.config.js`

**Problem**: React Router ESM errors
**Solution**: postinstall script fixes this automatically (`fix-missing-files`)

### Runtime Issues

**Problem**: Contact form not sending emails
**Solution**: 
1. Check Netlify function logs (Netlify UI > Functions tab)
2. Verify SMTP environment variables
3. Test locally with `netlify dev`

**Problem**: CSP violations in browser console
**Solution**: 
1. Identify blocked resource domain
2. Add to appropriate directive in `netlify.toml` CSP header
3. Test with `Content-Security-Policy-Report-Only` first

**Problem**: Images causing layout shift (CLS)
**Solution**: Always add `width` and `height` attributes

**Problem**: MongoDB connection errors
**Solution**: Expected behavior - graceful degradation. Emails will still work.

---

## 📊 Monitoring & Analytics

### Tools in Use

1. **Google Search Console**: SEO performance, indexing status
2. **Netlify Analytics**: Traffic, performance, function logs
3. **Trustpilot**: Customer reviews and ratings widget
4. **Klaviyo**: Email marketing and newsletters (optional integration)

### Key Metrics to Track

**SEO**:
- Indexed pages (target: 300+, currently low)
- Internal links (target: 500+, currently 36)
- Core Web Vitals (LCP, FID, CLS)
- Keyword rankings

**Performance**:
- PageSpeed Insights score (target: 90+)
- Largest Contentful Paint (LCP < 2.5s)
- Cumulative Layout Shift (CLS < 0.1)
- First Input Delay (FID < 100ms)

**User Engagement**:
- Bounce rate
- Average session duration
- Pages per session
- Conversion rate (contact form submissions)

---

## 🎓 Learning Resources

### Repository Documentation

- `.github/copilot-instructions.md` - Complete coding guidelines
- `CONTACT_FORM_SETUP.md` - SMTP configuration
- `SEO_INDEXING_FIXES.md` - SEO action plan
- `INTERNAL_LINKING_STRATEGY.md` - Internal linking best practices
- `PAGESPEED_PERFORMANCE_FIXES_DEC_2025.md` - Performance optimization
- `GSC_SETUP_GUIDE.md` - Google Search Console setup

### External Resources

**React**:
- [React Docs](https://react.dev/)
- [React Router v6](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)

**UI Libraries**:
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

**Backend**:
- [FastAPI](https://fastapi.tiangolo.com/)
- [Motor (Async MongoDB)](https://motor.readthedocs.io/)
- [Pydantic](https://docs.pydantic.dev/)

**Deployment**:
- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)

---

## 🔐 Security Best Practices

### Never Commit

- `.env` files with real credentials
- API keys or tokens
- Passwords or secrets
- Personal information
- Database credentials

### Always Do

- Use environment variables for secrets
- Validate all user inputs
- Implement CORS correctly
- Use HTTPS only
- Keep dependencies updated
- Review security alerts
- Test authentication flows
- Implement rate limiting
- Log security events

### Security Checklist

**Frontend**:
- [ ] XSS prevention (React escapes by default)
- [ ] CSP headers configured
- [ ] No inline scripts
- [ ] Input sanitization
- [ ] HTTPS enforced

**Backend**:
- [ ] Input validation (Pydantic)
- [ ] CORS configured correctly
- [ ] No SQL injection (parameterized queries)
- [ ] Rate limiting implemented
- [ ] Error messages don't leak info

**Deployment**:
- [ ] Environment variables set correctly
- [ ] HTTPS only
- [ ] Security headers enabled
- [ ] Dependencies scanned for vulnerabilities
- [ ] No secrets in code

---

## 💡 Tips for AI Agents

### Before Starting Work

1. **Read the issue carefully**: Understand the problem and acceptance criteria
2. **Review related files**: Check `.github/copilot-instructions.md` and this AGENTS.md
3. **Check existing patterns**: Look for similar implementations in the codebase
4. **Plan your changes**: Think through the minimal changes needed
5. **Run tests locally**: Ensure you can build and test before making changes

### While Working

1. **Make minimal changes**: Change as few lines as possible
2. **Follow existing patterns**: Don't introduce new patterns without reason
3. **Test frequently**: Build and test after each significant change
4. **Check for regressions**: Ensure existing functionality still works
5. **Document as you go**: Update docs if you change behavior

### Before Submitting

1. **Self-review**: Read through all your changes
2. **Test thoroughly**: Manual testing + automated tests
3. **Check checklist**: Ensure all PR checklist items completed
4. **Add screenshots**: Mandatory for UI changes
5. **Update docs**: If behavior changed, update relevant documentation

### Quality Standards

**Code must be**:
- Working (tested and verified)
- Clean (follows conventions)
- Documented (complex logic explained)
- Secure (no vulnerabilities introduced)
- Performant (no obvious performance issues)

**Never submit**:
- Untested code
- Code with console.log statements
- Commented-out code
- Hardcoded credentials
- Broken builds
- Code that doesn't follow conventions

---

## 📞 Getting Help

### When Stuck

1. **Check documentation**: Review .github/copilot-instructions.md and relevant docs
2. **Search codebase**: Look for similar implementations
3. **Ask for clarification**: Comment on the issue if requirements unclear
4. **Test incrementally**: Isolate the problem with minimal reproducible example
5. **Check logs**: Netlify function logs, browser console, server logs

### Resources

- Repository documentation files (see Learning Resources section)
- GitHub Issues for questions
- Pull Request comments for code review feedback

---

**Remember**: This is a real business website. Quality, security, and user experience matter. Take time to do things right. Test thoroughly. Follow conventions. When in doubt, ask.
