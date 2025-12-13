# Manual External Link Verification Checklist

This checklist is for manually verifying external links that couldn't be automatically tested in the sandboxed environment.

**Date Created:** December 13, 2025  
**Test Environment:** Production (https://devaland.com)  
**Tester:** _______________  
**Date Tested:** _______________

---

## High Priority Links (Business Critical)

### 1. Calendly Booking System
**Link:** https://calendly.com/devaland/30min  
**Found in:** 15+ pages (primary CTA across website)  
**Expected:** Calendly booking page for Devaland  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 2. Trustpilot Reviews
**Link:** https://www.trustpilot.com/review/devaland.com  
**Found in:** Footer (Trustpilot widget)  
**Expected:** Devaland company profile on Trustpilot  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 3. Google Business Profile
**Link:** https://www.google.com/search?q=DEVALAND+MARKETING+SRL&stick=...  
**Found in:** Footer  
**Expected:** Google search results with business profile card  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 4. Google Review Link
**Link:** https://g.page/r/CfSNoCv66NgaEBM/review  
**Found in:** Footer  
**Expected:** Google review form for Devaland  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 5. Client Portal
**Link:** https://portal.devaland.com/login  
**Found in:** VoiceAIPage.jsx  
**Expected:** Client login portal  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 6. Klaviyo Partner Badge
**Link:** https://www.klaviyo.com/partners/signup?utm_source=001Nu00000HqbJVIAZ&utm_medium=partner  
**Found in:** Footer  
**Expected:** Klaviyo partner page  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

---

## Medium Priority Links (Legal & Compliance)

### 7. Romanian Consumer Protection (ANPC)
**Link:** http://www.anpc.gov.ro/  
**Found in:** Footer  
**Expected:** Romanian ANPC official website  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 8. EU Online Dispute Resolution (SOL)
**Link:** https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO  
**Found in:** Footer  
**Expected:** EU ODR platform  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 9. ANPC Complaints Portal (SAL)
**Link:** https://reclamatiisal.anpc.ro/  
**Found in:** Footer  
**Expected:** ANPC complaints portal  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 10. EU VIES VAT Validation
**Link:** https://ec.europa.eu/taxation_customs/vies/#/vat-validation  
**Found in:** Footer  
**Expected:** EU VAT number validation tool  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 11. EU Consumer Redress
**Link:** https://consumer-redress.ec.europa.eu/index_en  
**Found in:** Footer  
**Expected:** EU consumer redress portal  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 12. Google Maps Address
**Link:** https://www.google.com/maps/search/?api=1&query=Santandrei+13,+335903+Simeria,+Romania  
**Found in:** ContactPage.jsx  
**Expected:** Google Maps showing company address  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

---

## Low Priority Links (Case Studies & Demos)

### 13. Client Website - Shea Terra Organics
**Link:** https://www.sheaterraorganics.com/  
**Found in:** CaseStudiesPage.jsx  
**Expected:** Client e-commerce website  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 14. Voice AI Demo - Hotels
**Link:** https://ai.devaland.net/hotels  
**Found in:** VoiceAIPage.jsx  
**Expected:** Voice AI demo for hotel booking  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 15. Voice AI Demo - London City Dentists
**Link:** https://ai.devaland.net/londoncitydentists  
**Found in:** VoiceAIPage.jsx  
**Expected:** Voice AI demo for dental appointments  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 16. Voice AI Demo - Pizzeria
**Link:** https://ai.devaland.net/Pizzeria  
**Found in:** VoiceAIPage.jsx  
**Expected:** Voice AI demo for pizza orders  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 17. Voice AI Demo - Banking
**Link:** https://ai.devaland.net/banking  
**Found in:** VoiceAIPage.jsx  
**Expected:** Voice AI demo for banking services  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

### 18. LinkedIn Social Post
**Link:** https://www.linkedin.com/feed/update/urn:li:activity:7397501012212850688/  
**Found in:** KlaviyoCaseStudies.jsx  
**Expected:** LinkedIn post about case study  
**Test Result:** ⬜ Working ⬜ Broken ⬜ Redirects  
**Notes:** _____________________________________

---

## Testing Instructions

### How to Test Each Link:

1. **Open the link in a new browser tab**
   - Right-click → "Open in new tab" or Ctrl+Click (Cmd+Click on Mac)

2. **Check the result:**
   - ✅ **Working:** Page loads correctly with expected content
   - ❌ **Broken:** 404, 500, or other error page
   - ↪️ **Redirects:** Page redirects to different URL (note new URL)

3. **Document issues:**
   - Note any error messages
   - Screenshot broken pages
   - Record redirect destinations
   - Note slow loading times (>5 seconds)

4. **Test from different locations:**
   - Test from different browsers (Chrome, Firefox, Safari)
   - Test from different devices (Desktop, Mobile)
   - Test from different networks (Office, Mobile data)

### Common Issues to Watch For:

- **SSL Certificate Errors:** Expired or invalid certificates
- **Geo-restrictions:** Content blocked in certain regions
- **Rate Limiting:** Too many requests blocking access
- **Redirects:** Old URLs redirecting to new locations
- **Mobile Issues:** Links work on desktop but not mobile
- **Broken Widgets:** Embedded content (Trustpilot, Google Reviews) not loading

---

## Follow-up Actions

### If Links Are Broken:

1. **Verify the URL is correct**
   - Check for typos in the codebase
   - Verify with service provider

2. **Update the link**
   - Find the correct URL
   - Update in the appropriate component file
   - Test again

3. **Remove if no longer needed**
   - If service discontinued, remove link
   - Update documentation

4. **Add redirect if URL changed**
   - Configure redirect in `netlify.toml`
   - Test redirect works

### If Links Redirect:

1. **Update to new URL if permanent**
   - Use the final destination URL in code
   - Avoid unnecessary redirects

2. **Keep original if temporary**
   - Monitor for changes
   - Document redirect reason

---

## Results Summary

**Total Links Tested:** _____ / 18  
**Working Links:** _____  
**Broken Links:** _____  
**Redirecting Links:** _____  

**Issues Found:**
- __________________________________________________
- __________________________________________________
- __________________________________________________

**Actions Required:**
- [ ] Update broken links in codebase
- [ ] Configure redirects in netlify.toml
- [ ] Contact service providers about issues
- [ ] Update documentation
- [ ] Schedule re-test date: _______________

---

## Sign-off

**Tester Signature:** _______________  
**Date:** _______________  
**Approved By:** _______________  
**Date:** _______________

---

## Automated Re-testing

After fixing any issues, run the automated test again:

```bash
# In frontend directory
npm run test:links:full
```

This will generate an updated report showing all fixes.
