# reCAPTCHA v3 Setup Instructions - Quick Reference

## Production Keys (devaland.com)

Your reCAPTCHA v3 site is already registered and configured. Here are your keys:

### Public Key (Site Key)
```
6LcT-SssAAAAAB3jCBIRdqmXHH2bplWaSGXVqnlI
```
✅ **Already configured** in `frontend/.env.example`

### Private Key (Secret Key)
```
6LcT-SssAAAAAObqfIPeOJM7Gmvxne4HL4Hd3cOe
```
⚠️ **Must be set in Netlify UI** (see instructions below)

---

## What is reCAPTCHA v3?

reCAPTCHA v3 is **invisible** to users and uses advanced risk analysis to detect bots:
- **No user interaction required** - no checkbox or challenge
- **Score-based**: Returns a score from 0.0 (bot) to 1.0 (human)
- **Action-based**: Different actions ('contact', 'newsletter') for better analytics
- **Threshold**: We use 0.5 as the minimum score (configurable in functions)

---

## Netlify Configuration (Required)

You **MUST** add the secret key to Netlify for the forms to work in production.

### Step-by-Step Instructions:

1. **Go to Netlify Dashboard**
   - Visit: https://app.netlify.com
   - Select your site: `devalandautomationagency`

2. **Navigate to Environment Variables**
   - Click: **Site settings** → **Environment variables**
   - Click: **Add a variable**

3. **Add the Secret Key**
   ```
   Variable name: RECAPTCHA_SECRET_KEY
   Value: 6LcT-SssAAAAAObqfIPeOJM7Gmvxne4HL4Hd3cOe
   ```
   - Scopes: Check both "Production" and "Deploy previews"
   - Click: **Create variable**

4. **Redeploy Your Site**
   - Go to: **Deploys** tab
   - Click: **Trigger deploy** → **Deploy site**
   - Wait for deployment to complete

5. **Verify reCAPTCHA Works**
   - Visit: https://devaland.com/contact
   - You should see "Protected by reCAPTCHA v3" notice
   - Fill out and submit the form
   - Check Netlify function logs for score values
   - Submissions with score ≥ 0.5 are accepted

---

## Testing Checklist

After setting up the secret key in Netlify:

- [ ] Contact form submits successfully without visible CAPTCHA
- [ ] Newsletter form submits successfully without visible CAPTCHA
- [ ] "Protected by reCAPTCHA v3" notice appears on both forms
- [ ] Form submission fails for very low scores (< 0.5)
- [ ] Email notifications are received at office@devaland.com
- [ ] Confirmation emails are sent to submitters
- [ ] Rate limiting works (try submitting twice quickly)
- [ ] Check Netlify function logs for score values

---

## Manage Your reCAPTCHA

- **Dashboard**: https://www.google.com/recaptcha/admin
- **View Analytics**: See score distributions and bot traffic
- **Update Domains**: Add/remove authorized domains
- **Check Settings**: Verify security level and actions

---

## Troubleshooting

### Forms Not Working?
1. Check Netlify function logs:
   - Netlify Dashboard → Functions → contact
   - Look for error messages or low score warnings
2. Verify all environment variables are set:
   - `RECAPTCHA_SECRET_KEY`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`
   - `CONTACT_EMAIL`
   - `KLAVIYO_PRIVATE_API_KEY` (for newsletter)

### "Bot-like behavior detected" Error?
- This means the reCAPTCHA score was below 0.5
- Usually happens with automated testing tools or VPNs
- Try from a different network or device
- For testing, you can temporarily lower the threshold in the functions

### "reCAPTCHA verification failed" Error?
- Double-check the secret key in Netlify matches: `6LcT-SssAAAAAObqfIPeOJM7Gmvxne4HL4Hd3cOe`
- Ensure you redeployed after adding the key
- Check if you're testing from an allowed domain

### No reCAPTCHA Badge Visible?
- reCAPTCHA v3 badge is very small and appears in bottom-right corner
- It's controlled by Google and shows automatically
- The badge is required by Google's terms of service

---

## Score Threshold Guidelines

**Current threshold: 0.5** (recommended by Google)

- **1.0**: Very likely a good interaction
- **0.9-1.0**: Likely human
- **0.5-0.9**: Potentially legitimate
- **0.3-0.5**: Suspicious, may be bot
- **0.0-0.3**: Very likely a bot

You can adjust the threshold in the serverless functions if needed:
- Higher threshold (0.7): Stricter, may reject some humans
- Lower threshold (0.3): More lenient, may accept some bots

---

## Security Notes

- ✅ Site Key is public and safe to commit to git
- ❌ Secret Key must NEVER be committed to git
- ✅ Secret Key is only set in Netlify environment variables
- ✅ `.env` files are in `.gitignore`
- ✅ Test keys available for local development (see .env.example files)

---

## Summary

Your reCAPTCHA v3 is **ready to use**! Just complete these steps:

1. ✅ Site key already in `frontend/.env.example`
2. ⚠️ Add secret key to Netlify environment variables
3. ⚠️ Redeploy the site
4. ✅ Test the forms

That's it! Your invisible anti-bot protection is now active. 🛡️

**Key Difference from v2**: No checkbox, no puzzles - completely invisible to users while providing better bot protection through score-based analysis.
