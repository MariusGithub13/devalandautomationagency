# Contact Form Setup Instructions

## Overview

The contact form now sends emails to `office@devaland.com` and stores submissions in MongoDB.

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

### 4. Start Backend Server

```bash
uvicorn backend.server:app --reload --port 8000
```

## Frontend Setup

### Set API URL

Create `frontend/.env` file:

```env
REACT_APP_API_URL=http://localhost:8000
```

For production (Netlify):

```env
REACT_APP_API_URL=https://your-api-domain.com
```

## Testing the Contact Form

1. Start both backend and frontend servers
2. Fill out the contact form at http://localhost:3000/contact
3. Check:
   - ✅ Console logs show "Form submitted successfully"
   - ✅ Email arrives at office@devaland.com
   - ✅ MongoDB contains the submission
   - ✅ Trustpilot invitation is sent

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin)

## Troubleshooting

### No email received?

1. Check backend console for errors
2. Verify SMTP credentials in `.env`
3. Check spam folder
4. Test SMTP connection manually

### Form submission fails?

1. Ensure backend is running on port 8000
2. Check CORS settings in backend `.env`
3. Check browser console for errors
4. Verify `REACT_APP_API_URL` is set correctly

### MongoDB errors?

1. Ensure MongoDB is running
2. Verify `MONGO_URL` in `.env`
3. Check database permissions
