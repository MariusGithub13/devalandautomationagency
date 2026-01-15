import React, { useState, useMemo } from 'react';
import { Calendar, Clock, ArrowRight, Search, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// UI Components
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
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
import { blogPosts } from '../data/mock';

/**
 * Helper to generate URL-friendly slugs from titles
 */
const slugify = (text) => 
  text.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-');

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Static SEO Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Devaland Automation Blog",
    "description": "Expert insights on email marketing automation, Klaviyo, RPA, and business process automation",
    "url": "https://devaland.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Devaland Marketing S.R.L.",
      "url": "https://devaland.com"
    }
  };

  // Generate unique categories list
  const categories = useMemo(() => 
    ['All', ...new Set(blogPosts.map(post => post.category))], 
  []);

  // Memoized Filtered Posts
  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // Keep latest first
  }, [searchTerm, selectedCategory]);

  // Memoized Trending Articles (Top 6 latest regardless of filter)
  const trendingArticles = useMemo(() => {
    return [...blogPosts]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 6);
  }, []);

  const featuredPost = filteredPosts[0];

  return (
    <>
      <SEO 
        title="Blog - Automation & Email Marketing Insights"
        description="Expert insights on email marketing automation, Klaviyo best practices, RPA development, and business process automation."
        canonical="https://devaland.com/blog"
        keywords={["email marketing blog", "klaviyo tips", "automation blog", "RPA insights"]}
        schema={blogSchema}
      />

      <main className="pt-16 min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb items={[{ label: 'Blog', href: '/blog' }]} />
        </nav>
        
        {/* Hero Section */}
        <header className="py-12 md:py-20 bg-gradient-to-b from-blue-50/50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-display text-gray-900 mb-6 tracking-tight">
              Automation <span className="text-blue-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Expert strategies on Klaviyo, RPA, and business process automation to help your business scale efficiently.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto shadow-xl rounded-2xl overflow-hidden">
              <Search size={22} className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by topic, keyword, or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-14 py-8 text-lg border-none focus-visible:ring-blue-500 shadow-inner"
              />
            </div>
          </div>
        </header>

        {/* Category Filter */}
        <nav className="sticky top-16 z-30 py-4 bg-white/80 backdrop-blur-md border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-6 transition-all ${
                    selectedCategory === category 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </nav>

        {/* Featured Article Section */}
        {featuredPost && selectedCategory === 'All' && !searchTerm && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-2 mb-8">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-bold uppercase tracking-wider text-blue-600">Editor's Choice</span>
              </div>
              <Card className="group overflow-hidden border-none shadow-2xl rounded-3xl">
                <div className="grid lg:grid-cols-2">
                  <Link to={`/blog/${slugify(featuredPost.title)}`} className="relative overflow-hidden aspect-video lg:aspect-auto">
                    <img 
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />
                  </Link>
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 border-none px-4 py-1">
                      {featuredPost.category}
                    </Badge>
                    <Link to={`/blog/${slugify(featuredPost.title)}`}>
                      <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                        {featuredPost.title}
                      </h2>
                    </Link>
                    <p className="text-lg text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <AuthorAvatar author={featuredPost.author} size={48} />
                        <div>
                          <p className="text-sm font-bold text-gray-900">{featuredPost.author}</p>
                          <p className="text-xs text-gray-500">{featuredPost.date} • {featuredPost.readTime}</p>
                        </div>
                      </div>
                      <Button asChild className="rounded-full px-6 bg-gray-900 hover:bg-blue-600 text-white transition-all">
                        <Link to={`/blog/${slugify(featuredPost.title)}`}>Read Full Story</Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Trending Carousel */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-display text-gray-900">Trending Expertise</h2>
              <div className="hidden md:flex space-x-2">
                 <CarouselPrevious variant="outline" className="static translate-y-0" />
                 <CarouselNext variant="outline" className="static translate-y-0" />
              </div>
            </div>

            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {trendingArticles.map((post) => (
                  <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all rounded-2xl overflow-hidden flex flex-col">
                      <Link to={`/blog/${slugify(post.title)}`} className="relative block aspect-video overflow-hidden">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </Link>
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <Badge variant="secondary" className="w-fit mb-3 text-[10px] uppercase tracking-tighter">
                          {post.category}
                        </Badge>
                        <Link to={`/blog/${slugify(post.title)}`} className="flex-grow">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                        </Link>
                        <div className="flex items-center text-xs text-gray-400 mt-4 space-x-4">
                          <span className="flex items-center"><Calendar size={12} className="mr-1"/> {post.date}</span>
                          <span className="flex items-center"><Clock size={12} className="mr-1"/> {post.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* Main Feed */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
              <h2 className="text-4xl font-display text-gray-900">
                {selectedCategory === 'All' ? 'Recent Publications' : `${selectedCategory} Insights`}
              </h2>
              <p className="text-gray-500 font-medium bg-gray-100 px-4 py-1 rounded-full text-sm">
                Showing {filteredPosts.length} Results
              </p>
            </header>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <Search className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No matches found</h3>
                <p className="text-gray-500">We couldn't find anything matching "{searchTerm}"</p>
                <Button variant="link" onClick={() => {setSearchTerm(''); setSelectedCategory('All');}} className="mt-4 text-blue-600">
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="group flex flex-col">
                    <Link 
                      to={`/blog/${slugify(post.title)}`}
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md"
                    >
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-blue-50 text-blue-600 border-none hover:bg-blue-100 uppercase text-[10px]">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-400 font-medium">{post.date}</span>
                    </div>
                    <Link to={`/blog/${slugify(post.title)}`}>
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
                      <Link to={`/blog/${slugify(post.title)}`} className="text-blue-600 hover:text-blue-800 font-bold text-sm flex items-center">
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
        <section className="bg-blue-700 py-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-50" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Master Automation
            </h2>
            <p className="text-xl mb-10 text-blue-100 opacity-90 max-w-2xl mx-auto">
              Join 2,000+ business owners receiving monthly deep-dives on Klaviyo, RPA, and ROI-driven automation.
            </p>
            <NewsletterForm className="max-w-md mx-auto" />
          </div>
        </section>

        {/* Strategy CTA */}
        <section className="py-24 bg-gray-950 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-display mb-8">
              Apply These Insights Today
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Ready to stop reading and start scaling? Let's build your custom automation roadmap together.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold h-16 px-10 rounded-full shadow-2xl shadow-blue-500/20"
            >
              <Link to="/contact">
                Schedule Strategy Session <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;