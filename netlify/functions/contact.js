const nodemailer = require('nodemailer');

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

    // Create HTML confirmation email
    const htmlBody = `
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

    // Send confirmation email to the customer
    await transporter.sendMail({
      from: smtpUser,
      to: formData.email,
      subject: 'Thank you for contacting Devaland - We\'ll be in touch soon!',
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
