from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactFormSubmission(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: str
    phone: Optional[str] = None
    projectType: Optional[str] = None
    message: str
    budget: Optional[str] = None
    shopifyStore: Optional[str] = None
    emailListSize: Optional[str] = None
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"  # new, contacted, completed

class ContactFormCreate(BaseModel):
    name: str
    email: EmailStr
    company: str
    phone: Optional[str] = None
    projectType: Optional[str] = None
    message: str
    budget: Optional[str] = None
    shopifyStore: Optional[str] = None
    emailListSize: Optional[str] = None

# Email configuration
async def send_email_notification(form_data: ContactFormSubmission):
    """Send email notification to office@devaland.com"""
    try:
        # Email configuration from environment variables
        smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
        smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        smtp_user = os.environ.get('SMTP_USER', '')
        smtp_password = os.environ.get('SMTP_PASSWORD', '')
        recipient_email = os.environ.get('CONTACT_EMAIL', 'office@devaland.com')
        
        if not smtp_user or not smtp_password:
            logger.warning("SMTP credentials not configured. Email will not be sent.")
            return False
        
        # Create email message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'New Contact Form Submission from {form_data.name}'
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
                        <p><strong>Name:</strong> {form_data.name}</p>
                        <p><strong>Email:</strong> <a href="mailto:{form_data.email}">{form_data.email}</a></p>
                        <p><strong>Company:</strong> {form_data.company}</p>
                        {f'<p><strong>Phone:</strong> {form_data.phone}</p>' if form_data.phone else ''}
                        {f'<p><strong>Project Type:</strong> {form_data.projectType}</p>' if form_data.projectType else ''}
                        {f'<p><strong>Budget:</strong> {form_data.budget}</p>' if form_data.budget else ''}
                        {f'<p><strong>Shopify Store:</strong> {form_data.shopifyStore}</p>' if form_data.shopifyStore else ''}
                        {f'<p><strong>Email List Size:</strong> {form_data.emailListSize}</p>' if form_data.emailListSize else ''}
                    </div>
                    
                    <div style="background: #fff; padding: 15px; border-left: 4px solid #1e40af; margin: 20px 0;">
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">{form_data.message}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                        <p><strong>Submission ID:</strong> {form_data.id}</p>
                        <p><strong>Timestamp:</strong> {form_data.timestamp.strftime('%Y-%m-%d %H:%M:%S UTC')}</p>
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
        
        logger.info(f"Email notification sent successfully for submission {form_data.id}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send email notification: {str(e)}")
        return False

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact", response_model=ContactFormSubmission)
async def submit_contact_form(form_data: ContactFormCreate):
    """Handle contact form submission"""
    try:
        # Create submission object with timestamp
        submission = ContactFormSubmission(**form_data.dict())
        
        # Store in MongoDB
        await db.contact_submissions.insert_one(submission.dict())
        logger.info(f"Contact form submission stored: {submission.id}")
        
        # Send email notification
        email_sent = await send_email_notification(submission)
        if email_sent:
            logger.info(f"Email notification sent for submission: {submission.id}")
        else:
            logger.warning(f"Email notification failed for submission: {submission.id}")
        
        return submission
        
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process contact form submission")

@api_router.get("/contact", response_model=List[ContactFormSubmission])
async def get_contact_submissions(limit: int = 100):
    """Get all contact form submissions (admin endpoint)"""
    try:
        submissions = await db.contact_submissions.find().sort("timestamp", -1).to_list(limit)
        return [ContactFormSubmission(**submission) for submission in submissions]
    except Exception as e:
        logger.error(f"Error fetching contact submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contact submissions")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
