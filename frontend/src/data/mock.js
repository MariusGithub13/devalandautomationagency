// Mock data for Devaland Automation Agency
export const companyData = {
  name: "Devaland",
  tagline: "Automate Your Operations. Accelerate Your Growth.",
  description: "We don't just build bots; we architect intelligent automation systems that unlock exponential growth, eliminate operational friction, and provide a competitive edge.",
  logo: "https://devaland.com/assets/klaviyo-partner-badge-BynIJnns.png", // Using existing logo
  contact: {
    email: "hello@devaland.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Tech City, TC 12345"
  },
  stats: {
    hoursAutomated: "50,000+",
    clientsSaved: "$5M+",
    projectsDelivered: "200+",
    yearsExperience: "5+"
  }
};

export const heroImages = {
  primary: "https://images.unsplash.com/photo-1644325349124-d1756b79dd42",
  secondary: "https://images.unsplash.com/photo-1580742432710-d3c3703559a9",
  transformation: "https://images.unsplash.com/photo-1644329770639-1a20809b82a3"
};

export const serviceImages = {
  rpa: "https://images.unsplash.com/photo-1647427060118-4911c9821b82",
  workflow: "https://images.unsplash.com/photo-1666148670142-2f01b117e6e0",
  ai: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01",
  automation: "https://images.unsplash.com/photo-1716436329475-4c55d05383bb"
};

export const services = [
  {
    id: 1,
    category: "Process-Specific Automation",
    title: "Sales & Marketing Automation", 
    description: "Lead nurturing, CRM hygiene, campaign setup, and customer journey optimization.",
    image: serviceImages.workflow,
    tools: ["HubSpot", "Salesforce", "Marketo", "Klaviyo"],
    benefits: ["40% faster lead processing", "85% reduction in manual tasks", "3x higher conversion rates"]
  },
  {
    id: 2,
    category: "Process-Specific Automation",
    title: "Operations & HR Automation",
    description: "Onboarding workflows, data entry automation, report generation, and employee management.",
    image: serviceImages.automation,
    tools: ["Workday", "BambooHR", "Monday.com", "Asana"],
    benefits: ["60% faster onboarding", "90% reduction in paperwork", "50% improvement in accuracy"]
  },
  {
    id: 3,
    category: "Technical Implementation", 
    title: "RPA Development",
    description: "Robotic Process Automation using enterprise-grade platforms for complex business processes.",
    image: serviceImages.rpa,
    tools: ["UiPath", "Automation Anywhere", "Blue Prism", "Power Automate"],
    benefits: ["24/7 processing capability", "99.9% accuracy rate", "70% cost reduction"]
  },
  {
    id: 4,
    category: "Technical Implementation",
    title: "AI & Chatbot Solutions", 
    description: "Custom AI implementations, intelligent chatbots, and machine learning automation.",
    image: serviceImages.ai,
    tools: ["OpenAI GPT", "Microsoft Bot Framework", "Dialogflow", "Azure AI"],
    benefits: ["24/7 customer support", "80% query resolution", "50% support cost reduction"]
  }
];

export const caseStudies = [
  {
    id: 1,
    client: "TechFlow Solutions",
    industry: "Technology",
    challenge: "Manual invoice processing was taking 40+ hours weekly, causing delays and errors in financial operations.",
    solution: "Implemented end-to-end RPA solution using UiPath for invoice capture, validation, and processing with ERP integration.",
    results: {
      timeReduction: "85%",
      hoursSaved: "120 hours/month", 
      costSavings: "$180,000/year",
      accuracy: "99.7%"
    },
    testimonial: "Their expertise in Klaviyo automation is unmatched. We saw immediate improvements in our customer engagement metrics.",
    clientName: "Michael Chen",
    clientTitle: "CTO"
  },
  {
    id: 2,
    client: "Fashion Forward Co.",
    industry: "E-commerce", 
    challenge: "Customer onboarding and order processing workflows were creating bottlenecks during peak seasons.",
    solution: "Designed intelligent workflow automation connecting Shopify, CRM, and fulfillment systems with custom API integrations.",
    results: {
      timeReduction: "70%",
      hoursSaved: "200 hours/month",
      costSavings: "$250,000/year", 
      accuracy: "98.5%"
    },
    testimonial: "Devaland transformed our email marketing strategy. The results speak for themselves - 45% revenue increase in just 6 months!",
    clientName: "Sarah Johnson",
    clientTitle: "Operations Director"
  },
  {
    id: 3,
    client: "Wellness Plus",
    industry: "Health & Wellness",
    challenge: "Patient data entry and appointment scheduling required extensive manual coordination across multiple systems.",
    solution: "Built comprehensive automation platform integrating patient management, scheduling, and billing systems with smart notifications.",
    results: {
      timeReduction: "90%", 
      hoursSaved: "150 hours/month",
      costSavings: "$200,000/year",
      accuracy: "99.2%"
    },
    testimonial: "Professional, knowledgeable, and results-driven. Devaland delivered beyond our expectations.",
    clientName: "Emma Rodriguez", 
    clientTitle: "Practice Manager"
  }
];

export const team = [
  {
    id: 1,
    name: "Marius Andronie",
    role: "Founder & CEO", 
    bio: "Automation strategist with 8+ years experience in enterprise process optimization and RPA implementation.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    expertise: ["Strategic Planning", "RPA Architecture", "Business Process Analysis"]
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Head of Technical Implementation",
    bio: "Senior automation engineer specializing in UiPath, Python, and enterprise system integrations.", 
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    expertise: ["UiPath Development", "Python Automation", "API Integration"]
  },
  {
    id: 3,
    name: "David Chen",
    role: "AI Solutions Architect",
    bio: "Machine learning expert focused on intelligent automation and custom AI implementations for enterprise clients.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", 
    expertise: ["Machine Learning", "Natural Language Processing", "AI Integration"]
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "10 Essential RPA Automation Flows Every Enterprise Needs",
    excerpt: "Discover the critical automation workflows that can transform your business operations and deliver measurable ROI.",
    category: "RPA Strategy",
    readTime: "8 min read", 
    date: "2024-01-15",
    author: "Marius Andronie",
    image: serviceImages.rpa
  },
  {
    id: 2, 
    title: "Enterprise Process Mining: Finding Hidden Automation Opportunities",
    excerpt: "Learn advanced techniques to identify and prioritize automation opportunities within your existing business processes.",
    category: "Process Optimization",
    readTime: "12 min read",
    date: "2024-01-10", 
    author: "Sarah Mitchell",
    image: serviceImages.workflow
  },
  {
    id: 3,
    title: "AI-Powered Automation: The Future of Intelligent Business Operations", 
    excerpt: "How artificial intelligence is revolutionizing automation strategies for forward-thinking enterprises.",
    category: "AI Innovation",
    readTime: "6 min read",
    date: "2024-01-05",
    author: "David Chen", 
    image: serviceImages.ai
  }
];

export const clientLogos = [
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop", 
  "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=60&fit=crop",
  "https://images.unsplash.com/photo-1560472354-a4b1d3d1b5b9?w=120&h=60&fit=crop",
  "https://images.unsplash.com/photo-1560472355-a4a1b3d1b5b9?w=120&h=60&fit=crop",
  "https://images.unsplash.com/photo-1560472355-b6b1d3d1b5b9?w=120&h=60&fit=crop"
];