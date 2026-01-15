const https = require('https');

// Rate limiting cache
const submissionCache = new Map();
const RATE_LIMIT_WINDOW = 600000; // 10 minutes
const MAX_SUBMISSIONS_PER_EMAIL = 1;

// Spam detection patterns
const SPAM_PATTERNS = {
  suspiciousEmail: /temp|throw|fake|spam|test123|mailinator|guerrilla|10minute/i,
  disposableEmailDomains: /@(tempmail|throwaway|guerrillamail|mailinator|10minutemail|trashmail)\./i
};

function cleanupCache() {
  const now = Date.now();
  for (const [key, timestamp] of submissionCache.entries()) {
    if (now - timestamp > RATE_LIMIT_WINDOW) {
      submissionCache.delete(key);
    }
  }
}

// Validate email for spam patterns
function detectSpamEmail(email) {
  if (SPAM_PATTERNS.suspiciousEmail.test(email)) {
    return { isSpam: true, reason: 'suspicious_email_pattern' };
  }
  if (SPAM_PATTERNS.disposableEmailDomains.test(email)) {
    return { isSpam: true, reason: 'disposable_email_domain' };
  }
  return { isSpam: false };
}

/**
 * Klaviyo Newsletter Subscription Handler (v2024-10-15)
 * Bot protection: Honeypot + Timing Check + Rate Limiting
 */
exports.handler = async (event) => {
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

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { email, listId, timeTaken, 'bot-field': botField } = JSON.parse(event.body);

    // 1. HONEYPOT CHECK: If bot-field is filled, silently reject
    if (botField) {
      console.log('🤖 Bot detected: honeypot field filled');
      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ success: true, message: 'Thank you for subscribing' })
      };
    }

    // 2. TIMING CHECK: Form filled too quickly (under 2s)
    if (timeTaken && timeTaken < 2000) {
      console.log('🤖 Bot detected: Form filled too quickly', timeTaken);
      return {
        statusCode: 429,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ 
          success: false, 
          message: 'Please take a moment to review before subscribing' 
        })
      };
    }

    // 3. VALIDATION
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ success: false, message: 'Valid email address is required' })
      };
    }

    // 4. SPAM DETECTION
    const spamCheck = detectSpamEmail(email);
    if (spamCheck.isSpam) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ success: false, message: 'Please use a valid email address' })
      };
    }

    // 5. RATE LIMITING
    cleanupCache();
    const emailKey = email.toLowerCase();
    const lastSubmission = submissionCache.get(emailKey);
    if (lastSubmission && (Date.now() - lastSubmission < RATE_LIMIT_WINDOW)) {
      return {
        statusCode: 429,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ success: false, message: 'Recently subscribed. Please check your email.' })
      };
    }
    submissionCache.set(emailKey, Date.now());

    const KLAVIYO_API_KEY = process.env.KLAVIYO_PRIVATE_API_KEY;
    if (!KLAVIYO_API_KEY) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Server configuration error' }) };
    }

    // Step 1: Create/Update Profile (Klaviyo API v2024-10-15)
    const profileData = JSON.stringify({
      data: { type: 'profile', attributes: { email: email } }
    });

    const profileOptions = {
      hostname: 'a.klaviyo.com',
      path: '/api/profiles/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        'revision': '2024-10-15'
      }
    };

    const profileResult = await new Promise((resolve, reject) => {
      const req = https.request(profileOptions, (res) => {
        let body = '';
        res.on('data', (chunk) => { body += chunk; });
        res.on('end', () => {
          try {
            const data = JSON.parse(body);
            if (res.statusCode === 201 || res.statusCode === 200) {
              resolve(data.data.id);
            } else {
              reject(new Error(`Profile failed: ${res.statusCode}`));
            }
          } catch (e) { reject(e); }
        });
      });
      req.on('error', reject);
      req.write(profileData);
      req.end();
    });

    // Step 2: Subscribe profile to list
    const subscriptionData = JSON.stringify({
      data: [{
        type: 'profile-subscription-bulk-create-job',
        attributes: {
          custom_source: 'Website Newsletter Form',
          profiles: {
            data: [{
              type: 'profile',
              id: profileResult,
              attributes: {
                email: email,
                subscriptions: { email: { marketing: { consent: 'SUBSCRIBED' } } }
              }
            }]
          }
        },
        relationships: { list: { data: { type: 'list', id: listId || 'RCLE38' } } }
      }]
    });

    const subscriptionOptions = {
      hostname: 'a.klaviyo.com',
      path: '/api/profile-subscription-bulk-create-jobs/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        'revision': '2024-10-15'
      }
    };

    return new Promise((resolve) => {
      const req = https.request(subscriptionOptions, (res) => {
        let body = '';
        res.on('data', (chunk) => { body += chunk; });
        res.on('end', () => {
          const success = res.statusCode === 202 || res.statusCode === 201 || res.statusCode === 200;
          resolve({
            statusCode: success ? 200 : 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({
              success,
              message: success ? 'Successfully subscribed' : 'Failed to subscribe'
            })
          });
        });
      });
      req.on('error', () => resolve({ statusCode: 500, body: JSON.stringify({ success: false }) }));
      req.write(subscriptionData);
      req.end();
    });

  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ success: false, error: 'Internal server error' }) };
  }
};