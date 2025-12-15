const https = require('https');

// Rate limiting cache (extended for better protection)
const submissionCache = new Map();
const RATE_LIMIT_WINDOW = 600000; // 10 minutes (5-10 min recommended)
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

// Verify reCAPTCHA token with Google
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  // If no secret key configured, log warning and allow submission (graceful degradation)
  if (!secretKey) {
    console.warn('⚠️ RECAPTCHA_SECRET_KEY not configured - skipping verification');
    return { success: true, message: 'reCAPTCHA not configured' };
  }

  return new Promise((resolve) => {
    const postData = `secret=${secretKey}&response=${token}`;
    
    const options = {
      hostname: 'www.google.com',
      path: '/recaptcha/api/siteverify',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        try {
          const result = JSON.parse(body);
          resolve(result);
        } catch (error) {
          console.error('❌ reCAPTCHA verification parse error:', error);
          resolve({ success: false, message: 'Verification failed' });
        }
      });
    });

    req.on('error', (error) => {
      console.error('❌ reCAPTCHA verification request error:', error);
      resolve({ success: false, message: 'Network error' });
    });

    req.write(postData);
    req.end();
  });
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
 * Klaviyo Newsletter Subscription Handler
 * Subscribes email addresses to Klaviyo list via API v2024-10-15
 * 
 * Required Environment Variables:
 * - KLAVIYO_PRIVATE_API_KEY: Your Klaviyo Private API Key (starts with pk_)
 * 
 * Expected Request Body:
 * {
 *   "email": "user@example.com",
 *   "listId": "YOUR_KLAVIYO_LIST_ID",
 *   "timeTaken": 2500 (optional - milliseconds to fill form)
 * }
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
    const { email, listId, timeTaken, 'bot-field': botField, recaptchaToken } = JSON.parse(event.body);

    // HONEYPOT CHECK: If bot-field is filled, silently accept and skip processing
    if (botField) {
      console.log('🤖 Bot detected: honeypot field filled - silently rejecting');
      // Return 200 OK to fool bots, but don't subscribe
      return {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ 
          success: true,
          message: 'Thank you for subscribing'
        })
      };
    }

    // reCAPTCHA VERIFICATION
    if (recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken);
      if (!recaptchaResult.success) {
        console.log('🤖 Bot detected: reCAPTCHA verification failed', recaptchaResult);
        return {
          statusCode: 403,
          headers: { 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({ 
            success: false,
            message: 'reCAPTCHA verification failed. Please try again.'
          })
        };
      }
    } else if (process.env.RECAPTCHA_SECRET_KEY) {
      // If reCAPTCHA is configured but no token provided
      console.log('⚠️ reCAPTCHA token missing');
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ 
          success: false,
          message: 'reCAPTCHA verification required'
        })
      };
    }

    // Bot protection: Timing check (newsletter forms should take at least 2 seconds)
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

    // Validation
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ 
          success: false,
          message: 'Valid email address is required' 
        })
      };
    }

    // SPAM DETECTION: Check for suspicious email patterns
    const spamCheck = detectSpamEmail(email);
    if (spamCheck.isSpam) {
      console.log('🚫 Spam email detected:', email, 'reason:', spamCheck.reason);
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ 
          success: false,
          message: 'Please use a valid email address'
        })
      };
    }

    if (!listId) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ 
          success: false,
          message: 'List ID is required' 
        })
      };
    }

    // Rate limiting check
    cleanupCache();
    const emailKey = email.toLowerCase();
    const lastSubmission = submissionCache.get(emailKey);
    
    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - lastSubmission;
      if (timeSinceLastSubmission < RATE_LIMIT_WINDOW) {
        console.log('⏱️ Rate limit exceeded:', email, 'minutes since last:', Math.round(timeSinceLastSubmission / 60000));
        return {
          statusCode: 429,
          headers: { 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({ 
            success: false,
            message: 'You have recently subscribed. Please check your email.',
            retryAfter: Math.ceil((RATE_LIMIT_WINDOW - timeSinceLastSubmission) / 60000)
          })
        };
      }
    }

    // Record this submission
    submissionCache.set(emailKey, Date.now());

    const KLAVIYO_API_KEY = process.env.KLAVIYO_PRIVATE_API_KEY;

    if (!KLAVIYO_API_KEY) {
      console.error('KLAVIYO_PRIVATE_API_KEY environment variable not set');
      return {
        statusCode: 500,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ 
          success: false,
          message: 'Server configuration error' 
        })
      };
    }

    // Step 1: Create/Update Profile first
    const profileData = JSON.stringify({
      data: {
        type: 'profile',
        attributes: {
          email: email
        }
      }
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

    // Create profile
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
              console.error('Profile creation error:', res.statusCode, body);
              reject(new Error(`Profile creation failed: ${res.statusCode}`));
            }
          } catch (e) {
            reject(e);
          }
        });
      });
      req.on('error', reject);
      req.write(profileData);
      req.end();
    });

    // Step 2: Subscribe profile to list
    const subscriptionData = JSON.stringify({
      data: [
        {
          type: 'profile-subscription-bulk-create-job',
          attributes: {
            custom_source: 'Website Newsletter Form',
            profiles: {
              data: [
                {
                  type: 'profile',
                  id: profileResult,
                  attributes: {
                    email: email,
                    subscriptions: {
                      email: {
                        marketing: {
                          consent: 'SUBSCRIBED'
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          relationships: {
            list: {
              data: {
                type: 'list',
                id: listId
              }
            }
          }
        }
      ]
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

    // Subscribe to list
    return new Promise((resolve) => {
      const req = https.request(subscriptionOptions, (res) => {
        let body = '';
        
        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          const success = res.statusCode === 202 || res.statusCode === 201 || res.statusCode === 200;
          
          if (!success) {
            console.error('Klaviyo Subscription Error:', res.statusCode, body);
          } else {
            console.log('Klaviyo Subscription Success:', res.statusCode);
          }

          resolve({
            statusCode: success ? 200 : 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({
              success: success,
              message: success 
                ? 'Successfully subscribed to newsletter' 
                : 'Failed to subscribe. Please try again.'
            })
          });
        });
      });

      req.on('error', (error) => {
        console.error('Request error:', error);
        resolve({
          statusCode: 500,
          headers: { 'Access-Control-Allow-Origin': '*' },
          body: JSON.stringify({
            success: false,
            message: 'Network error. Please try again.'
          })
        });
      });

      req.write(subscriptionData);
      req.end();
    });

  } catch (error) {
    console.error('Handler error:', error);
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        success: false,
        error: 'Internal server error'
      })
    };
  }
};
