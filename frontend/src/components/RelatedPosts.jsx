import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mock';

/**
 * RelatedPosts Component
 * 
 * Displays related blog posts based on category and tags
 * Increases internal linking and keeps users engaged
 * 
 * @param {string} currentSlug - Current blog post slug to exclude
 * @param {string} category - Post category for matching
 * @param {string[]} tags - Post tags for matching
 * @param {number} limit - Maximum number of related posts to show (default: 3)
 */
const RelatedPosts = ({ currentSlug, category, tags = [], limit = 3 }) => {
  // Find related posts by category or shared tags
  const related = blogPosts
    .filter(post => {
      if (post.slug === currentSlug) return false;
      
      // Match by category or any shared tag
      const hasMatchingCategory = post.category === category;
      const hasMatchingTag = post.tags && post.tags.some(tag => tags.includes(tag));
      
      return hasMatchingCategory || hasMatchingTag;
    })
    .slice(0, limit);

  // Don't render if no related posts found
  if (related.length === 0) return null;

  return (
    <section className="py-12 border-t border-gray-200 mt-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Related Articles</h2>
        <Link 
          to="/blog" 
          className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 group"
        >
          View All Posts
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {related.map(post => (
          <Link 
            key={post.id} 
            to={`/blog/${post.slug}`}
            className="block group"
          >
            <div className="relative overflow-hidden rounded-xl mb-4">
              <img 
                src={post.image} 
                alt={post.title}
                width="400"
                height="250"
                loading="lazy"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="space-y-2">
              {post.category && (
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
                  {post.category}
                </span>
              )}
              
              <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-sm text-gray-500 pt-2">
                <span>{post.date}</span>
                {post.author && (
                  <>
                    <span>•</span>
                    <span>{post.author}</span>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Additional internal links for SEO */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-1">
              Need Expert Help?
            </h3>
            <p className="text-gray-600 text-sm">
              Get personalized advice from our automation specialists
            </p>
          </div>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
