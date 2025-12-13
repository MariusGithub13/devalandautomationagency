# Quick Start Guide - Broken Link Testing

This guide provides quick commands to test your website for broken links.

## Quick Commands

### Test Internal Links (Fast)
```bash
cd frontend
npm run test:links
```
**Takes:** ~2 seconds  
**Tests:** All internal routes, images, and React Router paths

### Test All Links (Comprehensive)
```bash
cd frontend
npm run test:links:full
```
**Takes:** ~2-5 minutes  
**Tests:** Internal routes + external URLs (18 URLs)

### Generate Report File
```bash
cd frontend
npm run test:links:report
# Creates: broken-links-report.json
```

## Understanding Results

### ✅ All Tests Passing
```
✓ Working Links: 37
✗ Broken Links: 0
```
**Action:** None needed! 🎉

### ❌ Broken Links Found
```
✗ Broken Links: 3

ERRORS FOUND:
  1. Internal route not found: /old-page (used in Header.jsx)
  2. External URL broken: https://example.com - HTTP 404
```
**Action:** Fix or remove broken links

### ⚠️ Warnings
```
⚠ Warnings: 2

WARNINGS:
  1. External URL redirects: https://old-url.com
```
**Action:** Update URLs to final destination

## Common Issues

### Issue: "Route not found"
**Cause:** Link points to non-existent page  
**Fix:** Add route to `App.js` or fix the link

### Issue: "Image not found"
**Cause:** Image file missing from `public/images/`  
**Fix:** Add image or update path

### Issue: "External URL broken"
**Cause:** External website down or URL changed  
**Fix:** Verify manually and update URL

## Integration with CI/CD

The GitHub Actions workflow automatically:
- ✅ Tests internal links on every PR
- ✅ Tests external links weekly (Mondays 9am UTC)
- ✅ Creates issues for broken external links
- ✅ Comments on PRs with test results

## Manual Testing

For external links that need manual verification:

1. Open: [Manual Verification Checklist](./MANUAL_LINK_VERIFICATION_CHECKLIST.md)
2. Test each high-priority link in browser
3. Document results
4. Fix any issues found

## Monitoring

### Recommended Schedule:
- **Internal Links:** Test on every PR (automatic)
- **External Links:** Test monthly
- **Critical Links:** Monitor with external service
  - Calendly booking link
  - Client portal
  - Payment/API endpoints

### External Monitoring Tools:
- [UptimeRobot](https://uptimerobot.com/) - Free uptime monitoring
- [Pingdom](https://www.pingdom.com/) - Website monitoring
- [StatusCake](https://www.statuscake.com/) - Uptime testing

## Need Help?

- 📖 Full documentation: [frontend/scripts/README_LINK_TESTING.md](./frontend/scripts/README_LINK_TESTING.md)
- 📊 Detailed report: [BROKEN_LINKS_TEST_REPORT.md](./BROKEN_LINKS_TEST_REPORT.md)
- ✅ Manual checklist: [MANUAL_LINK_VERIFICATION_CHECKLIST.md](./MANUAL_LINK_VERIFICATION_CHECKLIST.md)

## Troubleshooting

### "npm: command not found"
```bash
# Install Node.js from nodejs.org
# Then try again
```

### "Cannot find module"
```bash
cd frontend
npm install
npm run test:links
```

### "Permission denied"
```bash
chmod +x scripts/test-broken-links.js
npm run test:links
```

## What Gets Tested?

✅ **Internal Routes** (23 routes)
- Homepage, About, Services, etc.
- All Klaviyo service pages
- Blog posts (dynamic routes)
- Legal pages (Privacy, Terms, etc.)

✅ **Image Assets** (9 images)
- Logos and badges
- Service images
- Legal compliance badges

✅ **External URLs** (18 URLs) - when using `--external` flag
- Calendly booking links
- Social media profiles
- Legal compliance sites
- Client case studies

## Test Reports

All test reports are saved in the `frontend/` directory:
- `broken-links-report.json` - Internal links only
- `broken-links-full-report.json` - All links

Reports include:
- Test timestamp
- Summary statistics
- Detailed results per link
- Errors and warnings
- Source file locations

---

**Last Updated:** December 13, 2025  
**Script Location:** `frontend/scripts/test-broken-links.js`  
**Maintained By:** Devaland Development Team
