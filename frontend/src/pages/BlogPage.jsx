import React, { useState, useMemo } from 'react';
import { Calendar, Clock, ArrowRight, Search, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// UI Components - Standard Shadcn/UI imports
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';

// Custom Components
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import NewsletterForm from '../components/NewsletterForm';
import AuthorAvatar from '../components/AuthorAvatar';

// 🚀 CRITICAL: Using lowercase 'blogPosts' to match your mock.js exactly
import { blogPosts } from '../data/mock';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // --- 1. DATA SAFETY GUARD ---
  // This prevents the "Black Screen" if data is missing or improperly imported
  const allPosts = useMemo(() => Array.isArray(blogPosts) ? blogPosts : [], []);

  // Generate unique categories list
  const categories = useMemo(() => 
    ['All', ...new Set(allPosts.map(post => post.category).filter(Boolean))], 
  [allPosts]);

  // --- 2. FILTER & SEARCH LOGIC ---
  const filteredPosts = useMemo(() => {
    return allPosts
      .filter(post => {
        const title = post.title?.toLowerCase() || '';
        const excerpt = post.excerpt?.toLowerCase() || '';
        const search = searchTerm.toLowerCase();
        
        const matchesSearch = title.includes(search) || excerpt.includes(search);
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [allPosts, searchTerm, selectedCategory]);

  const featuredPost = filteredPosts[0];

  return (
    <>
      <SEO 
        title="Blog - Automation & Email Marketing Insights"
        description="Expert insights on Klaviyo, Voice AI, and business automation."
        canonical="https://devaland.com/blog"
      />

      {/* 🚀 FORCED WHITE BACKGROUND: Prevents the slate-950 black screen crash */}
      <main className="pt-24 min-h-screen bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={[{ label: 'Blog', href: '/blog' }]} />
        </nav>
        
        {/* Header / Hero */}
        <header className="py-12 md:py-20 bg-gradient-to-b from-blue-50/50 to-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-display text-gray-900 mb-6 tracking-tight">
              Automation <span className="text-blue-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Expert strategies on Klaviyo and Voice AI to help your business scale efficiently.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto shadow-2xl rounded-2xl overflow-hidden mt-10">
              <Search size={22} className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles by topic or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 py-8 text-lg border-none focus-visible:ring-blue-500 shadow-inner bg-white"
              />
            </div>
          </div>
        </header>

        {/* Category Filters */}
        <nav className="sticky top-16 z-30 py-4 bg-white/80 backdrop-blur-md border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 transition-all ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </nav>

        {/* --- 3. ARTICLE FEED --- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <Search className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No matches found</h3>
                <p className="text-gray-500">We couldn't find anything matching "{searchTerm}"</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredPosts.map((post) => (
                  <article key={post.slug || post.id} className="group flex flex-col bg-white">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-lg border border-gray-100 block"
                    >
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-blue-50 text-blue-600 border-none hover:bg-blue-100 uppercase text-[10px] font-bold">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                      <div className="flex items-center gap-2">
                        <AuthorAvatar author={post.author} size={32} />
                        <span className="text-sm font-semibold text-gray-700">{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-800 font-bold text-sm flex items-center">
                        Read More <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-blue-700 py-20 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-display mb-6">Master Automation</h2>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto">
              Join 2,000+ business owners receiving monthly deep-dives on Klaviyo and Voice AI.
            </p>
            <div className="max-w-md mx-auto">
                <NewsletterForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;