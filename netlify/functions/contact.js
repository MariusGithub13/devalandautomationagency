const nodemailer = require('nodemailer');
const https = require('https');

// In-memory rate limiting (extended for better protection)
const submissionCache = new Map();
const RATE_LIMIT_WINDOW = 600000; // 10 minutes (5-10 min recommended)
const MAX_SUBMISSIONS_PER_EMAIL = 1;

// Spam detection patterns
const SPAM_PATTERNS = {
  nonsenseNames: /^[aeiou]{4,}|^[bcdfghjklmnpqrstvwxyz]{5,}|test|asdf|qwerty|admin|null|undefined/i,
  suspiciousContent: /viagra|cialis|casino|lottery|winner|congratulations|click here|buy now|limited time|act now/i,
  excessiveLinks: /https?:\/\/[^\s]+/g,
  repeatedChars: /(.)\1{4,}/,
  allCaps: /^[A-Z\s]{20,}$/
};

// Helper function to get readable project type label
function getProjectTypeLabel(value) {
  const projectTypes = {
    'klaviyo-shopify': 'Klaviyo Automation Services for Growing Shopify Store',
    'rpa': 'Robotic Process Automation (RPA) Development',
    'workflow': 'Workflow Automation',
    'ai': 'Voice AI Agents & Chatbot Solutions',
    'integration': 'System Integration',
    'consulting': 'Automation Consulting',
    'other': 'Other'
  };
  return projectTypes[value] || value;
}

// Clean up old entries from rate limit cache
function cleanupCache() {
  const now = Date.now();
  for (const [key, timestamp] of submissionCache.entries()) {
    if (now - timestamp > RATE_LIMIT_WINDOW) {
      submissionCache.delete(key);
    }
  }
}

// Verify reCAPTCHA v3 token with Google
async function verifyRecaptcha(token) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  // If no secret key configured, log warning and allow submission (graceful degradation)
  if (!secretKey) {
    console.warn('⚠️ RECAPTCHA_SECRET_KEY not configured - skipping verification');
    return { success: true, score: 1.0, message: 'reCAPTCHA not configured' };
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
          // reCAPTCHA v3 returns a score from 0.0 to 1.0
          // 0.0 is very likely a bot, 1.0 is very likely a human
          resolve(result);
        } catch (error) {
          console.error('❌ reCAPTCHA verification parse error:', error);
          resolve({ success: false, score: 0.0, message: 'Verification failed' });
        }
      });
    });

    req.on('error', (error) => {
      console.error('❌ reCAPTCHA verification request error:', error);
      resolve({ success: false, score: 0.0, message: 'Network error' });
    });

    req.write(postData);
    req.end();
  });
}

// Validate content for spam patterns
function detectSpam(name, message) {
  const issues = [];
  
  // Check name for nonsense
  if (SPAM_PATTERNS.nonsenseNames.test(name)) {
    issues.push('suspicious_name');
  }
  
  // Check message for spam keywords
  if (SPAM_PATTERNS.suspiciousContent.test(message)) {
    issues.push('suspicious_content');
  }
  
  // Check for excessive links
  const linkMatches = message.match(SPAM_PATTERNS.excessiveLinks);
  if (linkMatches && linkMatches.length > 2) {
    issues.push('excessive_links');
  }
  
  // Check for repeated characters
  if (SPAM_PATTERNS.repeatedChars.test(message)) {
    issues.push('repeated_chars');
  }
  
  // Check for all caps
  if (SPAM_PATTERNS.allCaps.test(message)) {
    issues.push('all_caps');
  }
  
  // Check message length (too short or suspiciously long)
  if (message.length < 10) {
    issues.push('message_too_short');
  } else if (message.length > 5000) {
    issues.push('message_too_long');
  }
  
  return {
    isSpam: issues.length > 0,
    issues: issues
  };
}

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

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse request body
    const body = JSON.parse(event.body);
    
    // HONEYPOT CHECK: If bot-field is filled, silently accept and skip processing
    if (body['bot-field']) {
      console.log('🤖 Bot detected: honeypot field filled - silently rejecting');
      // Return 200 OK to fool bots, but don't send emails
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          message: 'Thank you for your submission',
          id: 'honeypot-' + Date.now()
        })
      };
    }

    // reCAPTCHA VERIFICATION (v3 with score check)
    if (body.recaptchaToken) {
      const recaptchaResult = await verifyRecaptcha(body.recaptchaToken);
      if (!recaptchaResult.success) {
        console.log('🤖 Bot detected: reCAPTCHA verification failed', recaptchaResult);
        return {
          statusCode: 403,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ error: 'reCAPTCHA verification failed' })
        };
      }
      
      // Check score threshold for v3 (configurable via env var, default 0.5)
      const scoreThreshold = parseFloat(process.env.RECAPTCHA_SCORE_THRESHOLD) || 0.5;
      if (recaptchaResult.score !== undefined && recaptchaResult.score < scoreThreshold) {
        console.log('🤖 Bot detected: reCAPTCHA score too low', recaptchaResult.score, 'threshold:', scoreThreshold);
        return {
          statusCode: 403,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            error: 'Bot-like behavior detected. Please try again.',
            score: recaptchaResult.score 
          })
        };
      }
      
      // Log score for monitoring (optional)
      if (process.env.NODE_ENV === 'development' && recaptchaResult.score !== undefined) {
        console.log('✅ reCAPTCHA v3 score:', recaptchaResult.score);
      }
    } else if (process.env.RECAPTCHA_SECRET_KEY) {
      // If reCAPTCHA is configured but no token provided
      console.log('⚠️ reCAPTCHA token missing');
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'reCAPTCHA verification required' })
      };
    }
    
    // Bot protection: Check if form was filled too quickly
    if (body.timeTaken && body.timeTaken < 3000) {
      console.log('🤖 Bot detected: Form filled too quickly', body.timeTaken);
      return {
        statusCode: 429,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'Please take your time filling out the form' })
      };
    }

    // Rate limiting: Check if email has submitted recently
    cleanupCache();
    const emailKey = body.email.toLowerCase();
    const lastSubmission = submissionCache.get(emailKey);
    
    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - lastSubmission;
      if (timeSinceLastSubmission < RATE_LIMIT_WINDOW) {
        console.log('🚫 Rate limit exceeded:', emailKey, 'minutes since last:', Math.round(timeSinceLastSubmission / 60000));
        return {
          statusCode: 429,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            error: 'You have recently submitted a form. Please wait before submitting again.',
            retryAfter: Math.ceil((RATE_LIMIT_WINDOW - timeSinceLastSubmission) / 60000) // in minutes
          })
        };
      }
    }
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'company', 'message'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return {
          statusCode: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ error: `Missing required field: ${field}` })
        };
      }
    }

    // SPAM DETECTION: Check for spammy content
    const spamCheck = detectSpam(body.name, body.message);
    if (spamCheck.isSpam) {
      console.log('🚫 Spam detected:', emailKey, 'issues:', spamCheck.issues);
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Your submission appears to contain invalid content. Please review and try again.',
          issues: process.env.NODE_ENV === 'development' ? spamCheck.issues : undefined
        })
      };
    }
    
    // Record this submission
    submissionCache.set(emailKey, Date.now());

    // Create submission object
    const submission = {
      id: generateUUID(),
      name: body.name,
      email: body.email,
      company: body.company,
      phone: body.phone || null,
      projectType: body.projectType || null,
      message: body.message,
      budget: body.budget || null,
      shopifyStore: body.shopifyStore || null,
      emailListSize: body.emailListSize || null,
      timestamp: new Date().toISOString(),
      status: 'new'
    };

    // Send email notification and confirmation
    const [notificationSent, confirmationSent] = await Promise.all([
      sendEmailNotification(submission),
      sendConfirmationEmail(submission)
    ]);
    
    if (notificationSent && confirmationSent) {
      console.log('✅ Contact form processed successfully:', submission.id);
    } else {
      console.warn('⚠️ Some emails failed:', { notificationSent, confirmationSent });
    }

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...submission,
        emailsSent: {
          notification: notificationSent,
          confirmation: confirmationSent
        }
      })
    };
    
  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: `Failed to process contact form: ${error.message}` })
    };
  }
};

async function sendEmailNotification(formData) {
  try {
    // Email configuration from environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER || '';
    const smtpPassword = process.env.SMTP_PASSWORD || '';
    const recipientEmail = process.env.CONTACT_EMAIL || 'office@devaland.com';
    
    if (!smtpUser || !smtpPassword) {
      console.error('SMTP credentials not configured');
      return false;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPassword
      }
    });

    // Create HTML email body
    const htmlBody = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background: #f9fafb; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
              <p><strong>Company:</strong> ${formData.company}</p>
              ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
              ${formData.projectType ? `<p><strong>Project Type:</strong> ${getProjectTypeLabel(formData.projectType)}</p>` : ''}
              ${formData.budget ? `<p><strong>Budget:</strong> ${formData.budget}</p>` : ''}
              ${formData.shopifyStore ? `<p><strong>Shopify Store:</strong> ${formData.shopifyStore}</p>` : ''}
              ${formData.emailListSize ? `<p><strong>Email List Size:</strong> ${formData.emailListSize}</p>` : ''}
            </div>
            
            <div style="background: #fff; padding: 15px; border-left: 4px solid #1e40af; margin: 20px 0;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${formData.message}</p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
              <p><strong>Submission ID:</strong> ${formData.id}</p>
              <p><strong>Timestamp:</strong> ${formData.timestamp}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: smtpUser,
      to: recipientEmail,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: htmlBody
    });

    console.log(`✅ Email notification sent successfully for submission ${formData.id}`);
    return true;
    
  } catch (error) {
    console.error('❌ Failed to send email notification:', error);
    return false;
  }
}

async function sendConfirmationEmail(formData) {
  try {
    // Email configuration from environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER || '';
    const smtpPassword = process.env.SMTP_PASSWORD || '';
    
    if (!smtpUser || !smtpPassword) {
      console.error('SMTP credentials not configured');
      return false;
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPassword
      }
    });

    // Check if this is a newsletter subscription
    const isNewsletter = formData.projectType === 'newsletter' || formData.company === 'Newsletter Subscription';

    let htmlBody;
    let subject;

    if (isNewsletter) {
      // Newsletter-specific confirmation email
      subject = 'Welcome to Devaland\'s Automation Newsletter! 🚀';
      htmlBody = `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
              <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
                Welcome to Devaland's Automation Newsletter! 🚀
              </h2>
              
              <p>Hi there,</p>
              
              <p>Thank you for subscribing to our newsletter! You've just taken the first step towards staying ahead in the world of automation and AI.</p>
              
              <div style="background: #f0f7ff; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #1e40af;">
                <h3 style="color: #1e40af; margin-top: 0;">What to Expect:</h3>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li><strong>Monthly Insights:</strong> Latest automation trends and strategies</li>
                  <li><strong>Case Studies:</strong> Real-world success stories from our clients</li>
                  <li><strong>Expert Tips:</strong> Klaviyo, RPA, and AI automation best practices</li>
                  <li><strong>Exclusive Content:</strong> Early access to new resources and tools</li>
                </ul>
              </div>
              
              <p>While you're here, explore our resources:</p>
              <div style="background: #fff; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <ul style="list-style: none; padding: 0; margin: 0;">
                  <li style="margin: 10px 0;">📚 <a href="https://devaland.com/blog" style="color: #1e40af; text-decoration: none; font-weight: 500;">Read Our Blog</a> - Automation insights and guides</li>
                  <li style="margin: 10px 0;">💼 <a href="https://devaland.com/case-studies" style="color: #1e40af; text-decoration: none; font-weight: 500;">View Case Studies</a> - See our proven results</li>
                  <li style="margin: 10px 0;">🎯 <a href="https://devaland.com/klaviyo" style="color: #1e40af; text-decoration: none; font-weight: 500;">Klaviyo Services</a> - Email marketing automation</li>
                  <li style="margin: 10px 0;">📅 <a href="https://calendly.com/devaland/30min" style="color: #1e40af; text-decoration: none; font-weight: 500;">Book a Free Consultation</a> - Let's discuss your automation needs</li>
                </ul>
              </div>
              
              <div style="background: #f9fafb; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <p style="margin: 0; font-size: 14px; color: #666;">
                  <strong>Need immediate help?</strong><br>
                  Don't wait for the next newsletter. Reach out to us directly at 
                  <a href="mailto:office@devaland.com" style="color: #1e40af;">office@devaland.com</a> 
                  or connect with our founder on 
                  <a href="https://www.linkedin.com/in/marius-andronie/" style="color: #1e40af;">LinkedIn</a>.
                </p>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                <p style="font-size: 14px; color: #666;">
                  Best regards,<br>
                  <strong>Marius Andronie</strong><br>
                  Founder & CEO, Devaland Marketing<br>
                  <a href="mailto:office@devaland.com" style="color: #1e40af;">office@devaland.com</a><br>
                  <a href="https://devaland.com" style="color: #1e40af;">devaland.com</a>
                </p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #f9fafb; border-radius: 5px; font-size: 12px; color: #999; text-align: center;">
                <p style="margin: 0;">You're receiving this because you subscribed to Devaland's newsletter.</p>
                <p style="margin: 5px 0 0 0;">Don't want to receive these emails? <a href="mailto:office@devaland.com?subject=Unsubscribe" style="color: #1e40af;">Unsubscribe here</a></p>
              </div>
            </div>
          </body>
        </html>
      `;
    } else {
      // Regular contact form confirmation
      subject = 'Thank you for contacting Devaland - We\'ll be in touch soon!';
      htmlBody = `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
              <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
                Thank You for Contacting Devaland
              </h2>
              
              <p>Hi ${formData.name},</p>
              
              <p>Thank you for reaching out to us! We've received your message and will get back to you within 24 hours.</p>
              
              <div style="background: #f9fafb; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="color: #1e40af; margin-top: 0;">Your Submission Details:</h3>
                <p><strong>Company:</strong> ${formData.company}</p>
                ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
                ${formData.projectType ? `<p><strong>Project Type:</strong> ${getProjectTypeLabel(formData.projectType)}</p>` : ''}
                ${formData.budget ? `<p><strong>Budget:</strong> ${formData.budget}</p>` : ''}
              </div>
              
              <div style="background: #fff; padding: 15px; border-left: 4px solid #1e40af; margin: 20px 0;">
                <p><strong>Your Message:</strong></p>
                <p style="white-space: pre-wrap;">${formData.message}</p>
              </div>
              
              <p>In the meantime, feel free to:</p>
              <ul>
                <li>Check out our <a href="https://devaland.com/case-studies" style="color: #1e40af;">case studies</a></li>
                <li>Read our <a href="https://devaland.com/blog" style="color: #1e40af;">blog</a></li>
                <li>Schedule a call directly on our <a href="https://calendly.com/devaland/30min" style="color: #1e40af;">Calendly</a></li>
                <li>Connect with me on <a href="https://www.linkedin.com/in/marius-andronie/" style="color: #1e40af;">LinkedIn</a></li>
              </ul>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                <p style="font-size: 14px; color: #666;">
                  Best regards,<br>
                  <strong>The Devaland Team</strong><br>
                  <a href="mailto:office@devaland.com" style="color: #1e40af;">office@devaland.com</a><br>
                  <a href="https://devaland.com" style="color: #1e40af;">devaland.com</a><br>
                  <a href="https://www.linkedin.com/in/marius-andronie/" style="color: #1e40af;">LinkedIn Profile</a>
                </p>
              </div>
              
              <div style="margin-top: 20px; font-size: 12px; color: #999;">
                <p>Reference ID: ${formData.id}</p>
              </div>
            </div>
          </body>
        </html>
      `;
    }

    // Send confirmation email to the customer
    await transporter.sendMail({
      from: smtpUser,
      to: formData.email,
      subject: subject,
      html: htmlBody
    });

    console.log(`✅ Confirmation email sent to ${formData.email}`);
    return true;
    
  } catch (error) {
    console.error('❌ Failed to send confirmation email:', error);
    return false;
  }
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
