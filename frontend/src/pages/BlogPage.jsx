import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/mock';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
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
                    className="w-full h-full min-h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit bg-blue-100 text-blue-800 mb-4">
                    {filteredPosts[0].category}
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl font-display text-gray-900 mb-4 leading-tight">
                    {filteredPosts[0].title}
                  </h2>
                  
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
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover hover-scale"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-gray-800">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
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
                        >
                          <Button variant="ghost" size="sm" className="group text-blue-600 hover:text-blue-800">
                            <span>Read More</span>
                            <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                          </Button>
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
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-gray-900 border-0"
            />
            <Button className="btn-accent text-white px-6 py-3">
              Subscribe
            </Button>
          </div>
          
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
  );
};

export default BlogPage;