import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import { blogPosts } from '../data/mock';

const BlogPage = () => {
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setSubmitMessage('Please enter a valid email address');
      return;
    }

    if (!gdprConsent) {
      setSubmitMessage('Please accept the privacy policy to subscribe');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/.netlify/functions/klaviyo-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          listId: 'RCLE38' // Website Newsletter list
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitMessage('✓ Successfully subscribed! Check your email for confirmation.');
        setEmail('');
        setGdprConsent(false);
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.error('Newsletter error:', data);
        }
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Newsletter submission error:', error);
      }
      setSubmitMessage('Unable to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Blog - Automation & Email Marketing Insights"
        description="Expert insights on email marketing automation, Klaviyo best practices, RPA development, and business process automation. Stay ahead with our latest guides and case studies."
        canonical="https://devaland.com/blog"
        keywords={[
          "email marketing blog",
          "klaviyo tips",
          "automation blog",
          "RPA insights",
          "workflow automation guides",
          "klaviyo best practices"
        ]}
        schema={blogSchema}
      />
    <div className="pt-16">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb 
          items={[
            { label: 'Blog', href: '/blog' }
          ]}
        />
      </div>
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display text-gray-900 mb-6">
              Automation Insights & Expertise
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay ahead of the curve with the latest automation strategies, industry trends, 
              and expert insights from our team of automation specialists.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredPosts.length > 0 && (
        <section className="section-padding-sm bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Featured Article</Badge>
            </div>
            
            <Card className="hover-lift overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit bg-blue-100 text-blue-800 mb-4">
                    {filteredPosts[0].category}
                  </Badge>
                  
                  <Link 
                    to={`/blog/${filteredPosts[0].title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4 leading-tight hover:text-blue-600 transition-colors duration-200">
                      {filteredPosts[0].title}
                    </h2>
                  </Link>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span className="text-sm">
                          {new Date(filteredPosts[0].date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span className="text-sm">{filteredPosts[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">By {filteredPosts[0].author}</span>
                    <Link 
                      to={`/blog/${filteredPosts[0].title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}
                    >
                      <Button className="btn-primary text-white group">
                        <span>Read Article</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Popular Articles Carousel */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <Badge className="bg-purple-100 text-purple-800">Trending Now</Badge>
              </div>
              <h2 className="text-3xl font-display text-gray-900">Popular Articles</h2>
              <p className="text-gray-600 mt-2">Most read articles this month</p>
            </div>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {/* Show 6 most recent articles (prioritizing Voice AI content) */}
              {blogPosts
                .slice()
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 6)
                .map((post) => (
                  <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="hover-lift cursor-pointer h-full">
                      <CardHeader className="p-0">
                        <Link 
                          to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}
                          className="block"
                        >
                          <div className="relative overflow-hidden rounded-t-lg">
                            <img 
                              src={post.image}
                              alt={post.title}
                              width="800"
                              height="450"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-48 object-cover hover-scale"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-white/90 text-gray-800">
                                {post.category}
                              </Badge>
                            </div>
                          </div>
                        </Link>
                      </CardHeader>
                      
                      <CardContent className="p-6">
                        <Link 
                          to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}
                        >
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                            {post.title}
                          </h3>
                        </Link>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>
                                {new Date(post.date).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric' 
                                })}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Link 
                          to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}
                        >
                          <Button variant="ghost" className="w-full group hover:bg-blue-50">
                            <span>Read Article</span>
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-display text-gray-900">
                  {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
                </h2>
                <span className="text-gray-500">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post, index) => (
                  <Card key={post.id} className={`hover-lift cursor-pointer animate-fade-in-up delay-${index * 100}`}>
                    <CardHeader className="p-0">
                      <Link 
                        to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}
                        className="block"
                      >
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={post.image}
                          alt={post.title}
                          width="400"
                          height="300"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-48 object-cover hover-scale"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-gray-800">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      </Link>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <Link 
                        to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
                          {post.title}
                        </h3>
                      </Link>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar size={14} />
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{post.author}</span>
                        <Link 
                          to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}
                          className="text-blue-600 hover:text-blue-800 flex items-center group"
                        >
                          <span className="text-sm font-medium">Read More</span>
                          <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display mb-4">
            Stay Updated on Automation Trends
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest insights, case studies, and automation strategies delivered to your inbox monthly.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                required
                className="flex-1 bg-white text-gray-900 border-0"
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="btn-accent text-white px-6 py-3"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
            
            <div className="flex items-start gap-2 text-left">
              <input
                type="checkbox"
                id="gdpr-consent"
                checked={gdprConsent}
                onChange={(e) => setGdprConsent(e.target.checked)}
                disabled={isSubmitting}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="gdpr-consent" className="text-sm text-white opacity-90 cursor-pointer">
                I agree to receive email updates from Devaland and accept the{' '}
                <a href="/privacy" className="underline hover:text-blue-200" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>
                {' '}and{' '}
                <a href="/gdpr" className="underline hover:text-blue-200" target="_blank" rel="noopener noreferrer">
                  GDPR compliance
                </a>
                .
              </label>
            </div>
          </form>
          
          {submitMessage && (
            <p className={`text-sm mt-4 font-semibold ${submitMessage.includes('✓') ? 'text-green-200' : 'text-yellow-200'}`}>
              {submitMessage}
            </p>
          )}
          
          <p className="text-sm opacity-75 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how these automation insights can be applied to your specific business challenges.
          </p>
          <Button 
            asChild
            size="lg"
            className="btn-accent text-white font-semibold px-8 py-4 text-lg rounded-lg hover-lift"
          >
            <Link to="/contact" className="inline-flex items-center space-x-2">
              <span>Schedule Strategy Session</span>
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
    </>
  );
};

export default BlogPage;