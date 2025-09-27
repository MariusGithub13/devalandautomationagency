// Updated Devaland company data with real information
export const companyData = {
  name: "Devaland",
  tagline: "Automate Your Operations. Accelerate Your Growth.",
  description: "We don't just build bots; we architect intelligent automation systems that unlock exponential growth, eliminate operational friction, and provide a competitive edge.",
  logo: "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg",
  contact: {
    email: "office@devaland.com",
    phone: "+40 (721) 269 312",
    whatsapp: "+40 (721) 269 312",
    address: "Sântandrei 13, Simeria 335903, Hunedoara County, Transylvania, Romania",
    addressNote: "(Near Dracula's Castle :)",
    businessHours: "9:00am – 5:00pm, Monday to Friday"
  },
  legal: {
    companyName: "DEVALAND MARKETING SRL",
    vatNumber: "RO50841395",
    tradeRegistry: "ROONRC.J2024039063003",
    dateOfIncorporation: "November 07, 2024",
    vatRegistered: "February 01, 2025",
    caenCode: "7311 – Advertising Agencies"
  },
  social: {
    linkedin: "https://www.linkedin.com/company/devaland/",
    trustpilot: "https://www.trustpilot.com/review/devaland.com"
  },
  calendly: "https://calendly.com/devaland/30min",
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
  automation: "https://images.unsplash.com/photo-1716436329475-4c55d05383bb",
  klaviyo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
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

export const klaviyoServices = [
  {
    id: 1,
    title: "Email Campaign Management",
    description: "Create targeted, high-converting email campaigns that drive revenue and engage your Shopify customers.",
    features: ["Campaign Strategy & Planning", "A/B Testing & Optimization", "Performance Analytics", "Revenue Attribution"],
    results: "Average 45% increase in email revenue"
  },
  {
    id: 2,
    title: "Automation Flows Setup",
    description: "Set up welcome series, abandoned cart recovery, and personalized customer journeys that work 24/7.",
    features: ["Welcome Series", "Abandoned Cart Recovery", "Browse Abandonment", "Post-Purchase Flows"],
    results: "Up to 30% cart recovery rate"
  },
  {
    id: 3,
    title: "Advanced Segmentation",
    description: "Segment your audience for maximum relevance and higher conversion rates using behavioral data.",
    features: ["Behavioral Segmentation", "Purchase History Analysis", "Engagement Scoring", "Lifecycle Stages"],
    results: "180% improvement in email ROI"
  },
  {
    id: 4,
    title: "SMS Marketing Integration",
    description: "Expand your reach with strategic SMS campaigns that complement your email marketing perfectly.",
    features: ["SMS Automation", "Cart Recovery SMS", "Order Updates", "Promotional Campaigns"],
    results: "25% higher customer lifetime value"
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
    testimonial: "Their expertise in automation is unmatched. We saw immediate improvements in our operational efficiency.",
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
    image: "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/oe2wb7ir_Marius%20picture%20high-quality.jpeg",
    expertise: ["Strategic Planning", "RPA Architecture", "Business Process Analysis"],
    linkedin: "https://www.linkedin.com/in/marius-andronie/"
  },
  {
    id: 2,
    name: "Sera Andronie",
    role: "Co-Founder & CEO",
    bio: "Business development expert specializing in strategic partnerships and enterprise client relationships.", 
    image: "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/swtrsx9w_Sera.jpeg",
    expertise: ["Business Development", "Strategic Partnerships", "Client Relations"],
    linkedin: "https://www.linkedin.com/in/andronie-serafim-184186211/"
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    role: "Head of Technical Implementation",
    bio: "Senior automation engineer specializing in UiPath, Python, and enterprise system integrations.", 
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    expertise: ["UiPath Development", "Python Automation", "API Integration"]
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "10 Klaviyo Automation Flows Every E-commerce Store Needs",
    excerpt: "Discover the essential automation flows that can transform your email marketing strategy and boost revenue. From welcome series to win-back campaigns, learn how to set up automated sequences that work 24/7 for your business.",
    category: "Klaviyo Tips",
    readTime: "12 min read",
    date: "2024-07-24",
    author: "Marius Andronie",
    image: serviceImages.klaviyo,
    content: "Email marketing automation is the backbone of successful e-commerce businesses. With Klaviyo's powerful automation platform, you can create flows that work around the clock to nurture leads, recover abandoned carts, and turn one-time buyers into loyal customers.\n\nIn this comprehensive guide, we'll explore the 10 most effective automation flows every e-commerce store should implement to maximize revenue and customer engagement.\n\n## 1. Welcome Series Flow\n\nYour welcome series is the first impression new subscribers get of your brand. This flow should introduce your brand story, showcase your best products, and provide value from the very first email.\n\n**Key emails to include:**\n- Welcome email with brand introduction\n- Product showcase highlighting bestsellers\n- Social proof with customer reviews\n- Educational content or tips\n- Exclusive discount for first purchase\n\n## 2. Abandoned Cart Recovery\n\nCart abandonment affects every e-commerce store, with average rates around 70%. A well-crafted abandoned cart series can recover 15-25% of these lost sales.\n\n**Best practices:**\n- Send the first email within 1 hour\n- Include product images and details\n- Address common objections\n- Offer incentives strategically\n- Create urgency with limited-time offers\n\n## 3. Browse Abandonment Flow\n\nCapture customers who viewed products but didn't add them to cart. This flow targets warm prospects who showed interest but need additional nurturing.\n\n## 4. Post-Purchase Thank You Series\n\nTurn new customers into repeat buyers with a strategic post-purchase sequence that builds loyalty and encourages future purchases.\n\n## 5. Win-Back Campaign\n\nRe-engage customers who haven't purchased in a while with compelling offers and personalized product recommendations.\n\n## 6. Birthday & Anniversary Flows\n\nCelebrate customer milestones with personalized offers that make them feel valued and appreciated.\n\n## 7. VIP Customer Flow\n\nReward your best customers with exclusive perks, early access to new products, and special treatment.\n\n## 8. Cross-Sell & Upsell Flows\n\nIncrease average order value by recommending complementary products based on purchase history.\n\n## 9. Replenishment Reminders\n\nFor consumable products, remind customers when it's time to reorder based on typical usage patterns.\n\n## 10. Seasonal Campaign Flows\n\nPrepare automated sequences for major shopping events like Black Friday, Valentine's Day, and back-to-school season.\n\n## Conclusion\n\nImplementing these automation flows will create a comprehensive email marketing system that nurtures customers at every stage of their journey. Start with the basics like welcome series and abandoned cart recovery, then gradually add more sophisticated flows based on your business needs.\n\nNeed help setting up these automation flows? Contact our Klaviyo experts for a free consultation and see how we can help you implement a revenue-generating email marketing system."
  },
  {
    id: 2,
    title: "Email Segmentation Strategies That Actually Work",
    excerpt: "Learn advanced segmentation techniques to improve your email relevance and conversion rates. We'll cover behavioral segmentation, demographic targeting, and predictive analytics to help you send the right message to the right person.",
    category: "Email Marketing",
    readTime: "9 min read",
    date: "2024-07-24",
    author: "Devaland Team",
    image: serviceImages.workflow,
    content: "Effective email segmentation is the difference between generic mass emails and personalized messages that drive real results. When you segment your email list properly, you can achieve open rates 14.31% higher and click-through rates 100.95% higher than non-segmented campaigns.\n\n## Understanding Email Segmentation\n\nEmail segmentation involves dividing your email list into smaller, more targeted groups based on specific criteria. Instead of sending the same message to everyone, you create tailored content for different audience segments.\n\n## Demographic Segmentation\n\n**Age Groups**\n- Millennials prefer mobile-optimized emails with social sharing options\n- Gen X responds well to detailed product information and value propositions\n- Baby Boomers appreciate straightforward messaging and phone support options\n\n**Geographic Location**\n- Timezone-based sending for optimal open rates\n- Weather-triggered campaigns (promote coats during cold spells)\n- Local event and holiday promotions\n- Currency and language preferences\n\n## Behavioral Segmentation\n\n**Purchase History**\n- First-time buyers vs. repeat customers\n- High-value customers vs. bargain hunters\n- Product category preferences\n- Purchase frequency patterns\n\n**Website Behavior**\n- Pages visited and time spent\n- Products viewed but not purchased\n- Email engagement history\n- Download and content consumption patterns\n\n**Email Engagement Levels**\n- Highly engaged subscribers (opens most emails)\n- Moderately engaged (selective openers)\n- Low engagement (rarely opens)\n- Win-back candidates (haven't engaged recently)\n\n## Advanced Segmentation Techniques\n\n**RFM Analysis (Recency, Frequency, Monetary)**\n- Recent purchasers with high lifetime value\n- Frequent buyers with lower spend\n- One-time high-value customers\n- Customers at risk of churning\n\n**Lifecycle Stage Segmentation**\n- Prospects (subscribed but never purchased)\n- New customers (made 1 purchase)\n- Repeat customers (2-5 purchases)\n- VIP customers (5+ purchases or high CLV)\n- Churned customers (no recent activity)\n\n**Predictive Segmentation**\n- Likelihood to purchase predictions\n- Churn risk scoring\n- Product affinity modeling\n- Optimal send time predictions\n\n## Implementing Segmentation in Klaviyo\n\n**Dynamic Segments**\nKlaviyo's dynamic segments automatically update based on real-time customer behavior:\n\n```\nSegment: High-Value Customers\nConditions: \n- Total spent > $500 in last 12 months\n- Number of orders > 3\n- Last order within 90 days\n```\n\n**Static Segments**\nUse for one-time campaigns or historical analysis:\n- Black Friday 2023 purchasers\n- Specific campaign responders\n- Manual list uploads\n\n## Segmentation Best Practices\n\n**Start Simple**\nBegin with basic segments:\n1. Engaged vs. unengaged subscribers\n2. Customers vs. prospects\n3. Geographic regions\n\n**Gradually Add Complexity**\nAs you collect more data, create more sophisticated segments:\n- Purchase behavior combinations\n- Multi-criteria behavioral segments\n- Predictive model outputs\n\n**Regular Segment Maintenance**\n- Review segment performance monthly\n- Update criteria based on business changes\n- Archive outdated segments\n- Test new segmentation approaches\n\n## Measuring Segmentation Success\n\n**Key Metrics to Track:**\n- Open rates by segment\n- Click-through rates by segment\n- Conversion rates and revenue per segment\n- Unsubscribe rates by segment\n- Overall list health metrics\n\n**A/B Test Different Approaches:**\n- Compare segmented vs. non-segmented campaigns\n- Test different segmentation criteria\n- Experiment with segment-specific content\n\n## Common Segmentation Mistakes\n\n**Over-Segmentation**\n- Creating too many small segments\n- Making criteria too specific\n- Not having enough data to support segments\n\n**Under-Segmentation**\n- Treating all customers the same\n- Ignoring clear behavioral differences\n- Missing personalization opportunities\n\n**Static Thinking**\n- Not updating segments regularly\n- Ignoring changing customer behavior\n- Using outdated criteria\n\n## Advanced Klaviyo Segmentation Features\n\n**Conditional Splits**\nUse conditional logic to create complex segments:\n- IF customer purchased Category A AND lives in Region B\n- IF engagement score > X OR total spent > Y\n\n**Flow Filters**\nApply segmentation directly within automation flows:\n- Different paths based on purchase history\n- Personalized product recommendations\n- Behavior-triggered messaging\n\n**Predictive Analytics**\nLeverage Klaviyo's AI for:\n- Churn risk identification\n- Customer lifetime value predictions\n- Product affinity scoring\n- Optimal send time determination\n\n## Conclusion\n\nEffective email segmentation transforms your email marketing from a broadcast tool into a precision instrument for customer engagement. Start with basic demographic and behavioral segments, then gradually incorporate more sophisticated approaches as your data and understanding grow.\n\nThe key is to always test, measure, and refine your segmentation strategy based on actual performance data. What works for one business may not work for another, so continuous optimization is essential.\n\nReady to implement advanced segmentation strategies? Our team can help you set up sophisticated segments and automation flows that drive real revenue growth."
  },
  {
    id: 3,
    title: "Maximizing Black Friday Sales with Klaviyo",
    excerpt: "Prepare your e-commerce store for the biggest shopping event of the year. Learn how to create urgency, segment your audience, and optimize your campaigns for maximum Black Friday and Cyber Monday revenue.",
    category: "E-commerce",
    readTime: "8 min read",
    date: "2024-07-24",
    author: "Devaland Team",
    image: serviceImages.ai,
    content: "Black Friday and Cyber Monday represent the biggest revenue opportunity of the year for e-commerce businesses. With proper planning and execution, you can capture a significant portion of the $9.12 billion spent online during Black Friday alone.\n\n## Pre-Black Friday Planning (8-12 weeks before)\n\n**Audience Building**\nStart building your email list early with lead magnets specifically designed for Black Friday shoppers:\n- \"Early Bird Black Friday Access\" signup forms\n- Gift guides and holiday shopping checklists\n- Exclusive preview content for subscribers\n\n**Historical Analysis**\nReview last year's performance to identify:\n- Best-performing products and categories\n- Optimal send times and frequencies\n- Most effective subject lines and offers\n- Customer segments with highest conversion rates\n\n**Inventory Planning**\nCoordinate with your inventory team to ensure:\n- Adequate stock for promoted products\n- Clear understanding of inventory constraints\n- Backup products if primary items sell out\n\n## Segmentation Strategy for Black Friday\n\n**VIP Customers**\n- Previous Black Friday buyers\n- High lifetime value customers\n- Most engaged subscribers\n- Give early access and exclusive offers\n\n**Bargain Hunters**\n- Coupon code users\n- Sale-responsive customers\n- Price-sensitive segments\n- Focus on discounts and value messaging\n\n**Gift Buyers**\n- Customers who bought gifts last year\n- Multiple item purchasers\n- Holiday-specific product viewers\n- Emphasize gift guides and bundles\n\n**New Subscribers**\n- Recent email signups\n- First-time visitors\n- Social media followers\n- Focus on brand introduction and best deals\n\n## Campaign Timeline and Strategy\n\n**8 Weeks Before: Teaser Campaign**\n- Announce Black Friday is coming\n- Start building anticipation\n- Grow email list with early access offers\n\n**4 Weeks Before: Preview Campaign**\n- Share sneak peeks of deals\n- Introduce gift guides\n- Segment list based on interests\n\n**2 Weeks Before: Early Access**\n- VIP customer early access\n- Preview deals for top subscribers\n- Create FOMO with limited-time previews\n\n**Black Friday Week: Full Campaign**\n- Daily emails with different focus\n- Real-time inventory updates\n- Multiple touchpoints across channels\n\n## Email Campaign Types for Black Friday\n\n**Countdown Campaigns**\nBuild excitement with countdown timers:\n- \"7 Days Until Black Friday\"\n- \"48 Hours Left for Early Access\"\n- \"Last 6 Hours - Don't Miss Out\"\n\n**Flash Sales**\nCreate urgency with time-limited offers:\n- 4-hour flash sales\n- Hourly deal changes\n- Limited quantity offers\n\n**Gift Guides**\nHelp customers find perfect gifts:\n- \"Gifts Under $50\"\n- \"Tech Gifts for Him\"\n- \"Stocking Stuffers She'll Love\"\n\n**Abandoned Cart Recovery**\nSpecial Black Friday cart recovery:\n- Higher urgency messaging\n- Additional discounts\n- Stock scarcity warnings\n\n## Automation Flows for Black Friday\n\n**Early Access Flow**\n```\nTrigger: VIP segment subscription\nEmail 1: Welcome to early access (immediate)\nEmail 2: Your exclusive deals are live (Day 1)\nEmail 3: Reminder - early access ends soon (Day 2)\nEmail 4: Last chance for early access (Day 3)\n```\n\n**Black Friday Weekend Flow**\n```\nTrigger: Black Friday email opens\nEmail 1: Black Friday deals are live (immediate)\nEmail 2: Don't forget these deals (6 hours later)\nEmail 3: Cyber Monday preview (Sunday)\nEmail 4: Cyber Monday deals live (Monday)\n```\n\n**Post-Purchase Thank You**\n```\nTrigger: Black Friday purchase\nEmail 1: Thank you + shipping info (immediate)\nEmail 2: Related product recommendations (Day 2)\nEmail 3: Review request (Day 7)\nEmail 4: Cyber Monday deals (if applicable)\n```\n\n## Subject Line Strategies\n\n**Urgency and Scarcity**\n- \"[ENDING SOON] 50% off everything\"\n- \"Only 127 left in stock\"\n- \"Your cart expires in 2 hours\"\n\n**Personalization**\n- \"[First Name], your Black Friday deals are here\"\n- \"Handpicked for you: 40% off favorites\"\n- \"[First Name], don't miss your wishlist items\"\n\n**Curiosity and Intrigue**\n- \"The deal you've been waiting for...\"\n- \"Something special inside 🎁\"\n- \"Your secret Black Friday code\"\n\n## Mobile Optimization\n\nWith 54% of Black Friday emails opened on mobile:\n- Use single-column layouts\n- Large, touch-friendly buttons\n- Compressed images for fast loading\n- Short, scannable content blocks\n- Mobile-specific subject lines (shorter)\n\n## Performance Tracking and Optimization\n\n**Real-Time Monitoring**\nTrack these metrics hourly during peak times:\n- Open and click rates\n- Conversion rates by segment\n- Revenue per email\n- Website traffic from emails\n- Cart abandonment rates\n\n**Quick Optimization Tactics**\n- A/B test send times during the day\n- Adjust inventory messaging based on stock levels\n- Modify subject lines based on performance\n- Segment non-openers for different messaging\n\n**Post-Black Friday Analysis**\n- Compare performance to previous years\n- Identify best-performing segments and messages\n- Document lessons learned for next year\n- Plan Cyber Monday strategy based on Black Friday results\n\n## Cyber Monday Strategy\n\n**Differentiate from Black Friday**\n- Focus on tech and digital products\n- Online-exclusive deals\n- Different product categories\n- Mobile-specific offers\n\n**Target Non-Black Friday Buyers**\n- Segment customers who didn't purchase on Black Friday\n- Offer different products or better deals\n- Use different messaging angles\n- Create new urgency around Cyber Monday\n\n## Common Mistakes to Avoid\n\n**Over-Mailing**\n- Respect subscriber preferences\n- Vary content and offers\n- Monitor unsubscribe rates\n- Segment by engagement level\n\n**Underselling Your Deals**\n- Clearly communicate the value\n- Show original vs. sale prices\n- Highlight savings amounts\n- Use visual cues for discounts\n\n**Technical Issues**\n- Test all emails across devices\n- Ensure website can handle traffic\n- Verify all links work correctly\n- Have customer service ready\n\n**Ignoring Post-Purchase**\n- Don't forget customers who already bought\n- Offer complementary products\n- Ask for reviews and referrals\n- Plan for holiday gift wrapping\n\n## Conclusion\n\nBlack Friday success requires months of planning, strategic segmentation, and flawless execution. The businesses that start early, test thoroughly, and optimize continuously will capture the largest share of holiday revenue.\n\nRemember that Black Friday is not just about the single day—it's about building relationships with new customers that will pay dividends throughout the following year.\n\nNeed help planning your Black Friday Klaviyo strategy? Our team has helped hundreds of e-commerce stores maximize their holiday revenue. Contact us for a free consultation and custom Black Friday playbook."
  },
  {
    id: 4,
    title: "SMS Marketing: The Perfect Complement to Email",
    excerpt: "How to integrate SMS marketing with your email campaigns for maximum customer engagement. Learn best practices for timing, messaging, and compliance to create a unified multi-channel experience.",
    category: "SMS Marketing",
    readTime: "4 min read",
    date: "2024-01-09",
    author: "Marius Andronie",
    image: serviceImages.klaviyo
  },
  {
    id: 5,
    title: "Advanced Klaviyo Analytics: Beyond Open and Click Rates",
    excerpt: "Dive deep into Klaviyo's analytics capabilities to understand customer behavior, predict trends, and optimize your email marketing ROI. Learn to track revenue attribution and customer lifetime value.",
    category: "Analytics",
    readTime: "8 min read",
    date: "2024-01-04",
    author: "Marius Andronie",
    image: serviceImages.ai
  },
  {
    id: 6,
    title: "Building Customer Loyalty Through Email Personalization",
    excerpt: "Create deeper connections with your customers through advanced personalization techniques. Learn how to use dynamic content, behavioral triggers, and AI-driven recommendations to increase engagement.",
    category: "Email Marketing",
    readTime: "5 min read",
    date: "2024-01-02",
    author: "Devaland Team",
    image: serviceImages.workflow
  }
];

export const awards = [
  {
    title: "Stellar Business Award",
    description: "Best Marketing & Automation Agency",
    url: "https://stellarbusiness.com/devaland-marketing-srl/"
  },
  {
    title: "Featured in New York Weekly",
    description: "High-Tech Automation Marketing",
    url: "https://nyweekly.com/tech/marius-andronie-founder-of-devaland-marketing-agency-driving-growth-in-high-tech-automation-marketing/"
  },
  {
    title: "Klaviyo Agency Partner",
    description: "Certified automation platform partner",
    url: "https://www.klaviyo.com/partner/signup?utm_source=001Nu00000HqbJVIAZ&utm_medium=partner"
  }
];

export const klaviyoSuccessStories = [
  {
    id: 1,
    client: "Fashion Forward Co.",
    industry: "Fashion E-commerce",
    initials: "FF",
    overview: "Complete Klaviyo setup and optimization for a growing fashion retailer with 50,000+ subscribers",
    timeline: "6 months",
    challenges: [
      "Low email engagement rates (12% open rate)",
      "No automation workflows in place", 
      "Poor list segmentation strategy",
      "Inconsistent email design and messaging"
    ],
    solutions: [
      "Implemented advanced segmentation based on purchase behavior",
      "Created 8 automated email flows including welcome series and abandoned cart",
      "Redesigned email templates with mobile-first approach",
      "A/B tested subject lines and send times"
    ],
    results: {
      revenueIncrease: "+45%",
      openRate: "28%",
      clickRate: "6.2%",
      conversionRate: "3.8%"
    },
    testimonial: "Devaland transformed our email marketing strategy. The results speak for themselves - 45% revenue increase in just 6 months!",
    clientName: "Sarah Johnson",
    clientTitle: "Marketing Director"
  },
  {
    id: 2,
    client: "Health & Wellness Plus",
    industry: "Health & Wellness", 
    initials: "HW",
    overview: "Advanced automation flows and segmentation strategy for a health supplement company",
    timeline: "4 months",
    challenges: [
      "Complex product catalog with varying customer needs",
      "Difficulty nurturing leads through long sales cycles",
      "Low customer lifetime value",
      "Manual email sending processes"
    ],
    solutions: [
      "Created behavior-based product recommendation flows",
      "Implemented educational email sequences for different health goals",
      "Set up post-purchase upsell and cross-sell automations",
      "Developed customer health journey mapping"
    ],
    results: {
      revenueIncrease: "+80%",
      openRate: "35%",
      clickRate: "8.1%",
      conversionRate: "5.2%"
    },
    testimonial: "The automation flows have revolutionized how we communicate with our customers. Our ROI improved by 180%!",
    clientName: "Dr. Michael Chen",
    clientTitle: "Founder"
  },
  {
    id: 3,
    client: "TechFlow Solutions",
    industry: "B2B Technology",
    initials: "TS", 
    overview: "Multi-channel marketing automation implementation for a B2B software company",
    timeline: "8 months",
    challenges: [
      "Long B2B sales cycles requiring nurturing",
      "Multiple decision-makers in buying process",
      "Low trial-to-paid conversion rates",
      "Lack of lead scoring and qualification"
    ],
    solutions: [
      "Developed multi-touch nurturing sequences",
      "Created role-based email content for different stakeholders", 
      "Implemented lead scoring and progressive profiling",
      "Integrated email with sales CRM for better alignment"
    ],
    results: {
      revenueIncrease: "+65%",
      openRate: "42%",
      clickRate: "12.3%",
      conversionRate: "8.7%"
    },
    testimonial: "Professional, knowledgeable, and results-driven. Devaland delivered beyond our expectations for our B2B campaigns.",
    clientName: "Emma Rodriguez",
    clientTitle: "VP Marketing"
  },
  {
    id: 4,
    client: "Artisan Crafts Co.",
    industry: "Handmade Crafts",
    initials: "AC",
    overview: "Seasonal campaign optimization and customer retention strategy for artisan marketplace",
    timeline: "5 months", 
    challenges: [
      "Highly seasonal business with revenue fluctuations",
      "Low repeat purchase rates",
      "Difficulty showcasing artisan stories effectively",
      "Competition from larger craft platforms"
    ],
    solutions: [
      "Created seasonal campaign calendar with advance planning",
      "Developed artisan spotlight email series",
      "Implemented loyalty program with email integration", 
      "Built customer win-back campaigns"
    ],
    results: {
      revenueIncrease: "+55%",
      openRate: "31%",
      clickRate: "7.8%",
      conversionRate: "4.1%"
    },
    testimonial: "Our seasonal campaigns now generate consistent revenue year-round. The artisan spotlights have been particularly effective.",
    clientName: "Lisa Thompson",
    clientTitle: "E-commerce Manager"
  },
  {
    id: 5,
    client: "Pet Paradise Store",
    industry: "Pet Products",
    initials: "PP",
    overview: "Subscription box marketing automation and customer lifecycle management", 
    timeline: "6 months",
    challenges: [
      "High subscription churn rates",
      "Difficulty personalizing for different pet types",
      "Low customer engagement between shipments",
      "Complex inventory management for subscriptions"
    ],
    solutions: [
      "Created pet-specific content and product recommendations",
      "Developed subscription lifecycle email series",
      "Implemented pet birthday and milestone campaigns",
      "Built churn prediction and retention flows"
    ],
    results: {
      revenueIncrease: "+70%",
      openRate: "38%", 
      clickRate: "9.4%",
      conversionRate: "6.1%"
    },
    testimonial: "The personalized pet content has made all the difference. Our subscription retention improved dramatically.",
    clientName: "Mark Davis",
    clientTitle: "Founder"
  },
  {
    id: 6,
    client: "Gourmet Kitchen Hub", 
    industry: "Kitchen & Cooking",
    initials: "GK",
    overview: "Recipe-driven email marketing with product integration for cooking enthusiasts",
    timeline: "7 months",
    challenges: [
      "Connecting recipes with product sales",
      "Seasonal cooking trend alignment", 
      "Building community around cooking content",
      "Managing large recipe and product databases"
    ],
    solutions: [
      "Created recipe-based product recommendation engine",
      "Developed seasonal cooking campaign series",
      "Built user-generated content integration",
      "Implemented cooking skill-based segmentation"
    ],
    results: {
      revenueIncrease: "+85%",
      openRate: "44%",
      clickRate: "11.2%",
      conversionRate: "7.3%"
    },
    testimonial: "The recipe integration with product recommendations has been genius. Our customers love the personalized cooking content.",
    clientName: "Chef Amanda White",
    clientTitle: "Brand Manager"
  }
];

export const klaviyoStats = {
  averageRevenueIncrease: "65%",
  averageOpenRate: "36%", 
  averageClickRate: "9.2%",
  clientsServed: "50+"
};