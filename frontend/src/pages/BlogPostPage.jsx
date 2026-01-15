import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Facebook, Twitter, ChevronDown, ChevronUp } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import VoiceAIAdvantages from '../components/VoiceAIAdvantages';
import PhoneAICallout from '../components/PhoneAICallout';
import RelatedPosts from '../components/RelatedPosts';
import NewsletterForm from '../components/NewsletterForm';
import InternalLinkBlock from '../components/InternalLinkBlock';
import AuthorAvatar from '../components/AuthorAvatar';
import { blogPosts } from '../data/mock';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [isTocOpen, setIsTocOpen] = useState(false);
  
  // Find the blog post by slug
  const post = blogPosts.find(p => 
    p.slug === slug || 
    p.title.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-') === slug
  );

  if (!post) {
    return (
      <div className="section-padding bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary text-white px-6 py-3 rounded-lg">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // --- IMAGE OPTIMIZATION HELPER ---
  const getOptimizedImage = (url) => {
    if (!url || !url.includes('unsplash.com')) return { src: url, srcSet: null };
    const baseUrl = url.split('?')[0];
    // Force WebP and specific widths for Mobile (800) and Desktop (1600)
    const mobile = `${baseUrl}?q=80&w=800&auto=format&fm=webp`;
    const desktop = `${baseUrl}?q=80&w=1600&auto=format&fm=webp`;
    return {
      src: desktop,
      srcSet: `${mobile} 800w, ${desktop} 1600w`
    };
  };
  const optimizedImg = getOptimizedImage(post.image);

  const canonicalUrl = `https://devaland.com/blog/${slug}`;
  
  // Generate FAQ schema for specific high-traffic posts
  const getFAQSchema = (postId) => {
    const faqSchemas = {
      1: { 
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What are Klaviyo automation flows?", "acceptedAnswer": { "@type": "Answer", "text": "Klaviyo automation flows are pre-built email sequences that trigger automatically based on customer behavior." }},
          { "@type": "Question", "name": "How much do Klaviyo automation flows increase revenue?", "acceptedAnswer": { "@type": "Answer", "text": "Typically by 200-320% compared to broadcast emails." }}
        ]
      },
      // ... (Rest of your FAQ schemas remain the same)
    };
    return faqSchemas[postId] || null;
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "author": { "@type": "Person", "name": post.author },
    "publisher": { "@type": "Organization", "name": "Devaland Marketing S.R.L." },
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl }
  };

  const faqSchema = getFAQSchema(post.id);
  const schemas = faqSchema ? [articleSchema, faqSchema] : articleSchema;

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(post.title);

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={canonicalUrl}
        ogImage={post.image}
        ogType="article"
        keywords={post.tags || [post.category, "email marketing", "automation", "klaviyo"]}
        schema={schemas}
      />
      
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb 
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${slug}` }
          ]}
        />
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-white/90 hover:text-white mb-8 group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-display leading-tight mb-6">{post.title}</h1>
            {/* ACCESSIBILITY FIX: Changed text-blue-100 to text-white for contrast */}
            <p className="text-xl text-white mb-6 leading-relaxed opacity-100 font-medium">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center space-x-2"><Calendar size={16} /><span>{new Date(post.date).toLocaleDateString()}</span></div>
              <div className="flex items-center space-x-2"><Clock size={16} /><span>{post.readTime}</span></div>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              
              {/* --- OPTIMIZED IMAGE RENDER --- */}
              <div className="relative overflow-hidden rounded-xl mb-8 shadow-md">
                <img 
                  src={optimizedImg.src}
                  srcSet={optimizedImg.srcSet}
                  sizes="(max-width: 800px) 100vw, 800px"
                  alt={post.title}
                  width="800"
                  height="400"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Table of Contents - Collapsible */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border-2 border-blue-200 shadow-lg">
                <button
                  onClick={() => setIsTocOpen(!isTocOpen)}
                  className="w-full flex items-center justify-between gap-3 mb-0 pb-4 border-b-2 border-blue-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg px-3 py-1.5 text-sm font-bold shadow-md">TOC</div>
                    {/* ACCESSIBILITY FIX: Changed h3 to h2 for heading order */}
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Table of Contents</h2>
                  </div>
                  <ChevronDown className={`text-blue-600 transition-transform ${isTocOpen ? 'rotate-180' : ''}`} size={20} />
                </button>
                
                {isTocOpen && (
                  <nav className="space-y-1 mt-4 animate-in slide-in-from-top duration-300">
                    {/* (Your dynamic TOC mapping logic here) */}
                  </nav>
                )}
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                {/* ... (Your markdownToHtml and renderContent functions) ... */}
              </div>

              {/* --- ACCESSIBILITY FIX: Newsletter Signup --- */}
              <div className="bg-blue-600 text-white rounded-xl p-8 my-8 shadow-xl">
                <h3 className="text-2xl font-display mb-3">Stay Updated</h3>
                <p className="text-white mb-6 opacity-100 font-medium">
                  Get automation insights and Klaviyo tips delivered monthly.
                </p>
                <NewsletterForm />
              </div>

              <RelatedPosts currentSlug={slug} category={post.category} limit={3} />

              {/* Author Bio */}
              <div className="bg-gray-50 rounded-xl p-6 mt-8 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Author</h3>
                <div className="flex items-start space-x-4">
                  <AuthorAvatar author={post.author} size={64} />
                  <div>
                    <h4 className="font-semibold text-gray-900">{post.author}</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Klaviyo Certified Expert and founder of Devaland Marketing.
                    </p>
                    <Link to="/about" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Learn more →</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-lg mb-2">Need Help?</h3>
                  <p className="text-sm text-blue-50 mb-4">Get expert assistance with your automation setup.</p>
                  <a href="https://calendly.com/devaland/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-all">
                    Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;