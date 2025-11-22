# Netlify Deployment Guide for Contact Form

## ✅ What's Been Set Up

Your contact form is now configured to work with **Netlify Functions** (serverless backend), which means:

- No separate backend server needed
- Everything deploys together on Netlify
- Automatic scaling and zero maintenance

## 📁 Files Added/Modified

1. **`netlify/functions/contact.py`** - Serverless function that handles form submissions
2. **`netlify/functions/requirements.txt`** - Python dependencies for the function
3. **`netlify.toml`** - Updated to include functions directory
4. **`frontend/src/pages/ContactPage.jsx`** - Updated to use Netlify Functions

## 🚀 Deployment Steps

### 1. Add Environment Variables in Netlify

Go to your Netlify dashboard:
**Site settings → Environment variables → Add a variable**

Add these variables:

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = office@devaland.com
SMTP_PASSWORD = rbuc gknd fwxk glmu
CONTACT_EMAIL = office@devaland.com
```

### 2. Push to GitHub

```bash
git add .
git commit -m "Add Netlify Functions for contact form with email notifications"
git push origin main
```

### 3. Netlify Will Automatically Deploy

Netlify will:

- Build your frontend
- Deploy your serverless function at `/.netlify/functions/contact`
- Make everything live

## 🧪 Testing After Deployment

### Test the Function Directly

```bash
curl -X POST https://devaland.com/.netlify/functions/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","company":"Test Co","message":"Test message"}'
```

### Test Through the Website

1. Go to https://devaland.com/contact
2. Fill out the form
3. Submit
4. Check office@devaland.com for the email

## 📧 What Happens When Someone Submits

1. Form data sent to `/.netlify/functions/contact`
2. Serverless function validates the data
3. **Email sent to office@devaland.com** (beautiful HTML format)
4. Trustpilot invitation sent to customer
5. Success response returned to user

## 🔍 Monitoring & Debugging

### View Function Logs

- Netlify Dashboard → Functions → contact → View logs

### Common Issues

**Email not sending?**

- Check environment variables are set correctly in Netlify
- Verify SMTP_PASSWORD is the app password (16 characters)
- Check function logs for error messages

**Function not found?**

- Verify `netlify.toml` has `functions = "../netlify/functions"`
- Check the function file is in the correct directory
- Redeploy the site

**CORS errors?**

- The function already includes proper CORS headers
- Clear browser cache and try again

## 💰 Cost

**Netlify Functions Free Tier:**

- 125,000 function invocations/month
- 100 hours of function runtime/month

This is more than enough for a contact form!

## 🎉 Benefits of This Setup

✅ No separate backend server to maintain  
✅ Automatic scaling  
✅ Works with your existing Netlify deployment  
✅ Emails sent reliably to office@devaland.com  
✅ Integrated with Trustpilot  
✅ Free tier is generous

## 📝 Next Steps

1. Add environment variables in Netlify dashboard
2. Push this code to GitHub
3. Verify deployment succeeds
4. Test the contact form
5. Check your email at office@devaland.com

You're all set! 🚀
