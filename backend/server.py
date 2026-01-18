from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks, Request
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
from contextlib import asynccontextmanager
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

# Configure logging first
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection (optional - will work without it)
MONGO_TIMEOUT_MS = 2000
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
mongo_client = None
db = None
mongodb_available = False

try:
    mongo_client = AsyncIOMotorClient(mongo_url, serverSelectionTimeoutMS=MONGO_TIMEOUT_MS)
    db = mongo_client[os.environ.get('DB_NAME', 'devaland_db')]
    mongodb_available = True
    logger.info("MongoDB connection established")
except Exception as e:
    logger.warning(f"MongoDB not available: {e}. Emails will still be sent.")

# Lifespan context manager for startup/shutdown
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("Application starting up")
    yield
    # Shutdown
    if mongodb_available and mongo_client:
        mongo_client.close()
        logger.info("MongoDB connection closed")

# Create the main app with lifespan
app = FastAPI(lifespan=lifespan)

# Initialize rate limiter
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# Create a router with the /api/v1 prefix
api_router = APIRouter(prefix="/api/v1")


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
    if not mongodb_available or db is None:
        raise HTTPException(status_code=503, detail="MongoDB not available")
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.model_dump())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks(skip: int = 0, limit: int = 100):
    if not mongodb_available or db is None:
        raise HTTPException(status_code=503, detail="MongoDB not available")
    if limit > 1000:
        limit = 1000
    status_checks = await db.status_checks.find().skip(skip).limit(limit).to_list(limit)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact", response_model=ContactFormSubmission)
@limiter.limit("5/minute")
async def submit_contact_form(request: Request, form_data: ContactFormCreate, background_tasks: BackgroundTasks):
    """Handle contact form submission"""
    try:
        # Create submission object with timestamp
        submission = ContactFormSubmission(**form_data.model_dump())
        
        # Send email notification in background (non-blocking)
        background_tasks.add_task(send_email_notification, submission)
        logger.info(f"📧 Email notification queued for submission: {submission.id}")
        
        # Store in MongoDB if available
        if mongodb_available and db is not None:
            try:
                await db.contact_submissions.insert_one(submission.model_dump())
                logger.info(f"📝 Contact form submission stored: {submission.id}")
            except Exception as mongo_error:
                logger.warning(f"MongoDB storage failed (email will still be sent): {mongo_error}")
        else:
            logger.info(f"ℹ️ MongoDB not available, but email will be sent: {submission.id}")
        
        return submission
        
    except Exception as e:
        logger.error(f"❌ Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to process contact form: {str(e)}")

@api_router.get("/contact", response_model=List[ContactFormSubmission])
async def get_contact_submissions(limit: int = 100):
    """Get all contact form submissions (admin endpoint)"""
    if not mongodb_available or db is None:
        raise HTTPException(status_code=503, detail="MongoDB not available. Contact submissions are being emailed but not stored.")
    try:
        submissions = await db.contact_submissions.find().sort("timestamp", -1).to_list(limit)
        return [ContactFormSubmission(**submission) for submission in submissions]
    except Exception as e:
        logger.error(f"Error fetching contact submissions: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch contact submissions")

# Include the router in the main app
app.include_router(api_router)

# CORS configuration - secure default
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', 'https://devaland.com').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@api_router.get("/health")
async def health_check():
    """Health check endpoint for monitoring"""
    return {
        "status": "healthy",
        "mongodb": mongodb_available,
        "timestamp": datetime.utcnow().isoformat()
    }
