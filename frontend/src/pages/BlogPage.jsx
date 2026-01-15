import React, { useState, useMemo } from 'react';
import { Calendar, Clock, ArrowRight, Search, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// UI Components
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

// Custom Components
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import NewsletterForm from '../components/NewsletterForm';
import AuthorAvatar from '../components/AuthorAvatar';

// 🚀 CRITICAL: Using lowercase 'blogPosts' to match your data file exactly
import { blogPosts } from '../data/mock';

const slugify = (text) => 
  text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Safety check: ensure posts is always an array to prevent "black screen" crashes
  const posts = blogPosts || [];

  const categories = useMemo(() => 
    ['All', ...new Set(posts.map(post => post.category))], 
  [posts]);

  const filteredPosts = useMemo(() => {
    return posts
      .filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [posts, searchTerm, selectedCategory]);

  const trendingArticles = useMemo(() => {
    return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
  }, [posts]);

  const featuredPost = filteredPosts[0];

  return (
    <>
      <SEO 
        title="Blog - Automation & Email Marketing Insights"
        description="Expert insights on Klaviyo, Voice AI, and business automation."
        canonical="https://devaland.com/blog"
      />

      {/* 🚀 RESTORED: bg-white instead of slate-950 to fix the black screen */}
      <main className="pt-16 min-h-screen bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={[{ label: 'Blog', href: '/blog' }]} />
        </nav>
        
        <header className="py-12 md:py-20 bg-gradient-to-b from-blue-50/50 to-white text-center">
          <h1 className="text-5xl md:text-7xl font-display text-gray-900 mb-6 tracking-tight">
            Automation <span className="text-blue-600">Insights</span>
          </h1>
          <div className="relative max-w-2xl mx-auto shadow-xl rounded-2xl overflow-hidden mt-10">
            <Search size={22} className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-14 py-8 text-lg border-none focus-visible:ring-blue-500 shadow-inner"
            />
          </div>
        </header>

        <nav className="sticky top-16 z-30 py-4 bg-white/80 backdrop-blur-md border-y border-gray-100 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 ${selectedCategory === category ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'}`}
            >
              {category}
            </Button>
          ))}
        </nav>

        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <article key={post.slug || post.id} className="group flex flex-col">
                <Link to={`/blog/${post.slug}`} className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </Link>
                <Badge className="w-fit mb-4 bg-blue-50 text-blue-600 border-none">{post.category}</Badge>
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                </Link>
                <p className="text-gray-600 line-clamp-3 mb-6">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-blue-600 font-bold text-sm flex items-center mt-auto">
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;