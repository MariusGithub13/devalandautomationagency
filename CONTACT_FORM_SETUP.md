# Contact Form Setup Instructions

## Overview

The contact form now sends emails to `office@devaland.com` and stores submissions in MongoDB. It includes comprehensive anti-bot and anti-abuse protections to prevent spam and duplicate submissions.

## Security Features

### Anti-Bot Protections
1. **Honeypot Field**: Hidden `bot-field` input that bots typically fill but humans don't see
2. **Google reCAPTCHA v2**: "I'm not a robot" verification on all forms
3. **Rate Limiting**: Prevents duplicate submissions from same email (10-minute window)
4. **Timing Check**: Rejects forms filled too quickly (< 3 seconds for contact, < 2 seconds for newsletter)
5. **Content Validation**: Detects and blocks obviously spammy content patterns
6. **Submit Button Disable**: Prevents accidental double submissions

### Spam Detection
The backend automatically detects and blocks:
- Nonsense names (e.g., "asdfgh", "testtest")
- Suspicious content (casino, lottery, pharmaceutical spam keywords)
- Excessive links in message (3+ URLs)
- Repeated characters (e.g., "aaaaaaa")
- All-caps messages
- Messages that are too short or too long
- Disposable/temporary email addresses

## Backend Setup

### 1. Install Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 2. Configure Environment Variables

Create a `backend/.env` file based on `.env.example`:

```bash
cp .env.example .env
```

### 3. Configure SMTP Email Settings

#### Option A: Gmail (Recommended for testing)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Copy the 16-character password
3. Update `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASSWORD=your-16-char-app-password
CONTACT_EMAIL=office@devaland.com
```

#### Option B: Professional SMTP Service (Recommended for production)

Use SendGrid, AWS SES, or Mailgun for better deliverability.

**SendGrid Example:**

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
CONTACT_EMAIL=office@devaland.com
```

### 4. Configure Google reCAPTCHA

**Important**: reCAPTCHA keys are required for anti-bot protection.

1. Visit https://www.google.com/recaptcha/admin
2. Register your site with reCAPTCHA v2 ("I'm not a robot" checkbox)
3. Add your domains (e.g., `devaland.com`, `localhost` for testing)
4. Copy your Site Key and Secret Key

**Frontend Configuration** (`frontend/.env`):
```env
REACT_APP_RECAPTCHA_SITE_KEY=your-site-key-here
```

**Backend Configuration** (Netlify Environment Variables):
Set in Netlify UI (Site settings → Environment variables):
```env
RECAPTCHA_SECRET_KEY=your-secret-key-here
```

**Testing with Google Test Keys** (Development Only):
- Site Key: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
- Secret Key: `6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe`

⚠️ **Note**: Test keys always pass validation. Use real keys in production!

### 5. Graceful Degradation

If `RECAPTCHA_SECRET_KEY` is not set, the backend will:
- Log a warning
- Allow form submissions to proceed
- Continue using other anti-bot protections (honeypot, rate limiting, spam detection)

This ensures the contact form works even if reCAPTCHA is temporarily misconfigured.

### 6. Start Backend Server

```bash
uvicorn backend.server:app --reload --port 8000
```

## Frontend Setup

### Set API URL

Create `frontend/.env` file:

```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_RECAPTCHA_SITE_KEY=your-site-key-here
```

For production (Netlify):

```env
REACT_APP_API_URL=https://your-api-domain.com
REACT_APP_RECAPTCHA_SITE_KEY=your-production-site-key
```

## Netlify Functions Configuration

For serverless deployment, set these environment variables in Netlify UI:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=office@devaland.com
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
KLAVIYO_PRIVATE_API_KEY=your-klaviyo-key (for newsletter)
```

## Testing the Contact Form

1. Start both backend and frontend servers
2. Fill out the contact form at http://localhost:3000/contact
3. Complete the reCAPTCHA challenge
4. Check:
   - ✅ Console logs show "Form submitted successfully"
   - ✅ Email arrives at office@devaland.com
   - ✅ MongoDB contains the submission (if configured)
   - ✅ Trustpilot invitation is sent
   - ✅ Submit button is disabled during submission

### Testing Anti-Bot Features

**Honeypot Test**:
1. Open browser DevTools
2. Find the hidden `bot-field` input
3. Fill it with any value
4. Submit form → Should be silently rejected (no error shown)

**reCAPTCHA Test**:
1. Submit form without completing reCAPTCHA
2. Should show "Please complete the reCAPTCHA verification"

**Rate Limiting Test**:
1. Submit form successfully
2. Try to submit again within 10 minutes with same email
3. Should show rate limit error

**Spam Detection Test**:
1. Try name like "asdfgh" or message with "buy viagra now"
2. Should show validation error about invalid content

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin)

## Anti-Abuse Configuration

### Rate Limiting
- **Window**: 10 minutes (600,000 ms)
- **Max Submissions**: 1 per email address
- **Location**: In-memory cache (resets on function cold start)

For production with high traffic, consider using:
- Redis for persistent rate limiting
- Cloudflare Rate Limiting
- Netlify Edge Functions with KV storage

### Content Validation Patterns

Customize spam patterns in `netlify/functions/contact.js`:

```javascript
const SPAM_PATTERNS = {
  nonsenseNames: /your-pattern/i,
  suspiciousContent: /your-keywords/i,
  // Add custom patterns as needed
};
```

## Troubleshooting

### No email received?

1. Check backend console for errors
2. Verify SMTP credentials in `.env`
3. Check spam folder
4. Test SMTP connection manually
5. Verify `RECAPTCHA_SECRET_KEY` is set

### Form submission fails?

1. Ensure backend is running on port 8000
2. Check CORS settings in backend `.env`
3. Check browser console for errors
4. Verify `REACT_APP_API_URL` is set correctly
5. Check reCAPTCHA keys are configured
6. Open Network tab to see exact error response

### reCAPTCHA not showing?

1. Verify `REACT_APP_RECAPTCHA_SITE_KEY` is set
2. Check browser console for reCAPTCHA errors
3. Ensure domain is registered in reCAPTCHA admin
4. Check CSP headers allow reCAPTCHA domains

### Legitimate submissions blocked as spam?

1. Review spam detection patterns in code
2. Check backend logs for specific issue
3. Adjust patterns to be less aggressive
4. Consider adding whitelist for known good domains

### MongoDB errors?

1. Ensure MongoDB is running
2. Verify `MONGO_URL` in `.env`
3. Check database permissions
4. Note: Email delivery works even if MongoDB fails (graceful degradation)

## Security Best Practices

1. **Never commit `.env` files** - Keep secrets out of version control
2. **Use real reCAPTCHA keys in production** - Test keys are for development only
3. **Monitor rate limiting** - Adjust window if seeing false positives
4. **Review spam logs regularly** - Fine-tune detection patterns
5. **Use HTTPS in production** - Required for reCAPTCHA
6. **Rotate SMTP passwords** - Change credentials periodically
7. **Monitor submission patterns** - Watch for unusual spikes

## Production Deployment Checklist

- [ ] Set real reCAPTCHA keys (not test keys)
- [ ] Configure production SMTP credentials
- [ ] Set `RECAPTCHA_SECRET_KEY` in Netlify environment variables
- [ ] Test contact form on production domain
- [ ] Test newsletter form on production domain
- [ ] Verify emails are delivered
- [ ] Check spam folder handling
- [ ] Test rate limiting behavior
- [ ] Monitor logs for bot attempts
- [ ] Verify graceful degradation if services fail
