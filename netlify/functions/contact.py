import json
import os
from datetime import datetime
import uuid
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import asyncio


async def send_email_notification(form_data):
    """Send email notification to office@devaland.com"""
    try:
        # Email configuration from environment variables
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER', '')
        smtp_password = os.environ.get('SMTP_PASSWORD', '')
        recipient_email = os.environ.get('CONTACT_EMAIL', 'office@devaland.com')
        
        if not smtp_user or not smtp_password:
            print("SMTP credentials not configured. Email will not be sent.")
            return False
        
        # Create email message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'New Contact Form Submission from {form_data["name"]}'
        msg['From'] = smtp_user
        msg['To'] = recipient_email
        
        # Create HTML email body
        html_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background: #f9fafb; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <p><strong>Name:</strong> {form_data["name"]}</p>
                        <p><strong>Email:</strong> <a href="mailto:{form_data["email"]}">{form_data["email"]}</a></p>
                        <p><strong>Company:</strong> {form_data["company"]}</p>
                        {f'<p><strong>Phone:</strong> {form_data.get("phone", "N/A")}</p>' if form_data.get("phone") else ''}
                        {f'<p><strong>Project Type:</strong> {form_data.get("projectType", "N/A")}</p>' if form_data.get("projectType") else ''}
                        {f'<p><strong>Budget:</strong> {form_data.get("budget", "N/A")}</p>' if form_data.get("budget") else ''}
                        {f'<p><strong>Shopify Store:</strong> {form_data.get("shopifyStore", "N/A")}</p>' if form_data.get("shopifyStore") else ''}
                        {f'<p><strong>Email List Size:</strong> {form_data.get("emailListSize", "N/A")}</p>' if form_data.get("emailListSize") else ''}
                    </div>
                    
                    <div style="background: #fff; padding: 15px; border-left: 4px solid #1e40af; margin: 20px 0;">
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">{form_data["message"]}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                        <p><strong>Submission ID:</strong> {form_data["id"]}</p>
                        <p><strong>Timestamp:</strong> {form_data["timestamp"]}</p>
                    </div>
                </div>
            </body>
        </html>
        """
        
        # Attach HTML body
        html_part = MIMEText(html_body, 'html')
        msg.attach(html_part)
        
        # Send email
        await aiosmtplib.send(
            msg,
            hostname=smtp_host,
            port=smtp_port,
            username=smtp_user,
            password=smtp_password,
            start_tls=True
        )
        
        print(f"✅ Email notification sent successfully for submission {form_data['id']}")
        return True
        
    except Exception as e:
        print(f"❌ Failed to send email notification: {str(e)}")
        return False


def handler(event, context):
    """Netlify Function handler for contact form submissions"""
    
    # Handle CORS preflight
    if event['httpMethod'] == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            'body': ''
        }
    
    # Only allow POST
    if event['httpMethod'] != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        # Parse request body
        body = json.loads(event['body'])
        
        # Validate required fields
        required_fields = ['name', 'email', 'company', 'message']
        for field in required_fields:
            if not body.get(field):
                return {
                    'statusCode': 400,
                    'headers': {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    'body': json.dumps({'error': f'Missing required field: {field}'})
                }
        
        # Create submission object
        submission = {
            'id': str(uuid.uuid4()),
            'name': body['name'],
            'email': body['email'],
            'company': body['company'],
            'phone': body.get('phone'),
            'projectType': body.get('projectType'),
            'message': body['message'],
            'budget': body.get('budget'),
            'shopifyStore': body.get('shopifyStore'),
            'emailListSize': body.get('emailListSize'),
            'timestamp': datetime.utcnow().isoformat(),
            'status': 'new'
        }
        
        # Send email notification
        email_sent = asyncio.run(send_email_notification(submission))
        
        if email_sent:
            print(f"✅ Contact form processed successfully: {submission['id']}")
        else:
            print(f"⚠️ Email sending failed for: {submission['id']}")
        
        # Return success response
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps(submission)
        }
        
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': 'Invalid JSON in request body'})
        }
    except Exception as e:
        print(f"❌ Error processing contact form: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({'error': f'Failed to process contact form: {str(e)}'})
        }
