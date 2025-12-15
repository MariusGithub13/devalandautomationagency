# reCAPTCHA Setup Instructions - Quick Reference

## Production Keys (devaland.com)

Your reCAPTCHA v2 site is already registered and configured. Here are your keys:

### Public Key (Site Key)
```
6LcT-SssAAAAAB3jCBIRdqmXHH2bplWaSGXVqnlI
```
✅ **Already configured** in `frontend/.env`

### Private Key (Secret Key)
```
6LcT-SssAAAAAObqfIPeOJM7Gmvxne4HL4Hd3cOe
```
⚠️ **Must be set in Netlify UI** (see instructions below)

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
   - You should see the "I'm not a robot" checkbox
   - Try submitting the form
   - Check Netlify function logs for any errors

---

## Testing Checklist

After setting up the secret key in Netlify:

- [ ] reCAPTCHA checkbox appears on contact form
- [ ] reCAPTCHA checkbox appears on newsletter form (footer)
- [ ] Form submission works with reCAPTCHA completed
- [ ] Form submission fails if reCAPTCHA not completed
- [ ] Email notifications are received at office@devaland.com
- [ ] Confirmation emails are sent to submitters
- [ ] Rate limiting works (try submitting twice quickly)
- [ ] Check Netlify function logs for "Bot detected" messages

---

## Manage Your reCAPTCHA

- **Dashboard**: https://www.google.com/recaptcha/admin
- **View Analytics**: See how many bots are being blocked
- **Update Domains**: Add/remove authorized domains
- **Check Settings**: Verify security level (default is recommended)

---

## Troubleshooting

### reCAPTCHA Not Showing?
- Clear browser cache
- Check browser console for errors
- Verify `RECAPTCHA_SECRET_KEY` is set in Netlify
- Verify site key matches in frontend/.env
- Check CSP headers allow reCAPTCHA domains

### Forms Not Working?
1. Check Netlify function logs:
   - Netlify Dashboard → Functions → contact
   - Look for error messages
2. Verify all environment variables are set:
   - `RECAPTCHA_SECRET_KEY`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`
   - `CONTACT_EMAIL`
   - `KLAVIYO_PRIVATE_API_KEY` (for newsletter)

### "reCAPTCHA verification failed" Error?
- Double-check the secret key in Netlify matches: `6LcT-SssAAAAAObqfIPeOJM7Gmvxne4HL4Hd3cOe`
- Ensure you redeployed after adding the key
- Check if you're testing from an allowed domain

---

## Security Notes

- ✅ Site Key is public and safe to commit to git
- ❌ Secret Key must NEVER be committed to git
- ✅ Secret Key is only set in Netlify environment variables
- ✅ `.env` files are in `.gitignore`
- ✅ Test keys available for local development (see CONTACT_FORM_SETUP.md)

---

## Summary

Your reCAPTCHA is **ready to use**! Just complete these steps:

1. ✅ Site key already in `frontend/.env`
2. ⚠️ Add secret key to Netlify environment variables
3. ⚠️ Redeploy the site
4. ✅ Test the forms

That's it! Your anti-bot protection is now active. 🛡️
