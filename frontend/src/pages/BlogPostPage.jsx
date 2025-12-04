import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Facebook, Twitter } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { blogPosts } from '../data/mock';

const BlogPostPage = () => {
  const { slug } = useParams();
  
  // Find the blog post by slug
  const post = blogPosts.find(p => 
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

  // Generate canonical URL from slug
  const canonicalUrl = `https://devaland.com/blog/${slug}`;
  
  // Generate Article schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image || "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Devaland Marketing S.R.L.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "keywords": post.tags?.join(", ") || post.category,
    "articleSection": post.category,
    "wordCount": post.content?.length || 1000,
    "timeRequired": post.readTime
  };

  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(post.title);

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={canonicalUrl}
        ogImage={post.image || "https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg"}
        ogType="article"
        keywords={post.tags || [post.category, "email marketing", "automation", "klaviyo"]}
        schema={articleSchema}
      />
      
      {/* Breadcrumb Navigation */}
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
          {/* Back Navigation */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-white/90 hover:text-white mb-8 group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Blog
          </Link>

          {/* Article Meta */}
          <div className="mb-6">
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>By {post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Image */}
              <div className="relative overflow-hidden rounded-xl mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  loading="eager"
                  fetchpriority="high"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <style>{`
                  .prose h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #1f2937;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 3px solid #3b82f6;
                    background: linear-gradient(to right, #eff6ff, transparent);
                    padding-left: 1rem;
                    padding-right: 1rem;
                    padding-top: 0.75rem;
                    border-radius: 0.5rem;
                    position: relative;
                  }
                  .prose h2:before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: linear-gradient(to bottom, #3b82f6, #1d4ed8);
                    border-radius: 0.5rem 0 0 0.5rem;
                  }
                  .prose h2:first-of-type {
                    margin-top: 1rem;
                  }
                  .prose a {
                    color: #2563eb;
                    text-decoration: underline;
                    font-weight: 500;
                    transition: color 0.2s ease;
                  }
                  .prose a:hover {
                    color: #1d4ed8;
                    text-decoration: underline;
                  }
                `}</style>
                <div className="leading-relaxed">
                  {(() => {
                    const markdownToHtml = (text) => {
                      if (!text) return '';
                      // Convert markdown-like H2 headings to HTML with ids
                      let html = text.replace(/^## (.+)$/gm, (_, m) => {
                        const id = m.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
                        return `<h2 id="${id}">${m}</h2>`;
                      });
                      // Convert bold markers **text** to <strong>
                      html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                      // Preserve paragraph breaks
                      html = html.replace(/\n\n/g, '<br/><br/>');
                      return html;
                    };

                    const contentHtml = markdownToHtml(post.content);

                    return (
                      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                    );
                  })()}
                </div>
              </div>

              {/* Share Section */}
              <div className="border-t border-gray-200 pt-8 mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <Button 
                    as="a"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </Button>
                  <Button 
                    as="a"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Facebook size={16} />
                    <span>Facebook</span>
                  </Button>
                  <Button 
                    as="a"
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Twitter size={16} />
                    <span>Twitter</span>
                  </Button>
                </div>
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Author</h3>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-xl">
                    {post.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{post.author}</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      Klaviyo Certified Expert and founder of Devaland Marketing, specializing in e-commerce email marketing automation for Shopify brands.
                    </p>
                    <Link to="/about" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {/* Table of Contents (for long articles) */}
                {(post.content.includes('##') || post.content.includes('<h2')) && (() => {
                  const markdownToHtml = (text) => {
                    if (!text) return '';
                    return text.replace(/^## (.+)$/gm, (_, m) => {
                      const id = m.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
                      return `<h2 id="${id}">${m}</h2>`;
                    }).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n\n/g, '<br/><br/>');
                  };

                  const contentHtml = markdownToHtml(post.content);
                  const headings = [];
                  try {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(contentHtml, 'text/html');
                    const hs = Array.from(doc.querySelectorAll('h2'));
                    hs.slice(0, 8).forEach(h => headings.push({ text: h.textContent, id: h.id || h.textContent.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-') }));
                  } catch (e) {
                    // fallback to simple regex if DOMParser is unavailable
                    const matches = post.content.match(/## .+/g) || [];
                    matches.slice(0, 8).forEach(m => headings.push({ text: m.replace('## ', ''), id: m.replace('## ', '').toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-') }));
                  }

                  if (headings.length === 0) return null;

                  return (
                    <div className="bg-white rounded-xl p-6 mb-8 border-2 border-blue-200 shadow-lg">
                      <div className="flex items-center gap-2 mb-5 pb-4 border-b-2 border-blue-100">
                        <div className="bg-blue-600 text-white rounded-lg px-3 py-1.5 text-sm font-bold">TOC</div>
                        <h3 className="text-lg font-bold text-gray-900">Table of Contents</h3>
                      </div>
                      <nav className="space-y-2">
                        {headings.map((heading, index) => (
                          <a
                            key={index}
                            href={`#${heading.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.getElementById(heading.id);
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }}
                            className="group flex items-start gap-2 text-sm text-gray-700 hover:text-blue-600 transition-all duration-200 rounded-lg px-3 py-2.5 hover:bg-blue-50 border-l-3 border-transparent hover:border-l-4 hover:border-blue-600"
                          >
                            <span className="leading-snug flex-1">{heading.text}</span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  );
                })()}

                {/* Related Articles */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {blogPosts
                      .filter(p => p.id !== post.id && p.category === post.category)
                      .slice(0, 3)
                      .map(relatedPost => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}
                          className="block group"
                        >
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2 mb-1">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500">{relatedPost.readTime}</p>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-lg p-6 mt-8">
                  <h3 className="font-semibold mb-2">Need Help Implementing?</h3>
                  <p className="text-sm text-blue-100 mb-4">
                    Get expert assistance with your Klaviyo automation setup.
                  </p>
                  <Link to="/contact" className="btn-secondary text-blue-600 bg-white hover:bg-gray-50 w-full justify-center">
                    Get Free Consultation
                  </Link>
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