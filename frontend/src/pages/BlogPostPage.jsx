import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  ArrowLeft, Calendar, Clock, ChevronDown, Share2, Linkedin, Twitter, Facebook 
} from 'lucide-react';

// UI Components
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import NewsletterForm from '../components/NewsletterForm';
import RelatedPosts from '../components/RelatedPosts';
import AuthorAvatar from '../components/AuthorAvatar';

// 🚀 CRITICAL: Using lowercase 'blogPosts' to match your data file exactly
import { blogPosts } from '../data/mock';

// --- SUB-COMPONENT: READING PROGRESS BAR ---
const ReadingProgressBar = () => {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const updateScroll = () => {
      const current = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      if (height) setCompletion(Number((current / height).toFixed(2)) * 100);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  return (
    <div className="fixed top-16 left-0 w-full h-1.5 z-[60] bg-transparent pointer-events-none">
      <div className="h-full bg-blue-400 transition-all duration-150 shadow-[0_0_15px_rgba(96,165,250,0.8)]" style={{ width: `${completion}%` }} />
    </div>
  );
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Use lowercase blogPosts and find by slug
  const post = useMemo(() => {
    return (blogPosts || []).find(p => p.slug === slug || slugify(p.title) === slug);
  }, [slug]);

  const toc = useMemo(() => {
    if (!post) return [];
    return post.content.split('\n')
      .filter(line => line.startsWith('## '))
      .map(line => {
        const title = line.replace('## ', '');
        return { id: title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-'), title };
      });
  }, [post]);

  if (!post) return <div className="py-40 text-center"><h1>Post not found</h1><Link to="/blog">Back to Blog</Link></div>;

  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title, href: `/blog/${slug}` }];

  return (
    <>
      <SEO title={post.title} description={post.excerpt} ogImage={post.image} />
      <ReadingProgressBar />
      <main className="bg-white min-h-screen">
        
        {/* 🚀 RESTORED: Beautiful Deep Blue Gradient Header */}
        <header className="bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 pt-32 pb-24 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <Link to="/blog" className="text-blue-200 font-bold mb-8 hover:text-white flex items-center gap-2">
              <ArrowLeft size={18} /> Back to Blog
            </Link>
            <Badge className="bg-blue-400/20 text-blue-100 border border-blue-400/30 mb-6">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display mb-8 leading-tight tracking-tight">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100/70 font-medium pt-8 border-t border-white/10">
              <span>📅 {post.date}</span>
              <span>⏱️ {post.readTime}</span>
              <div className="flex items-center gap-3"><AuthorAvatar author={post.author} size={32} /> {post.author}</div>
            </div>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-4 pb-24 -mt-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <img src={post.image} alt={post.title} className="w-full aspect-video object-cover rounded-[2rem] shadow-2xl mb-12" />

              {/* Table of Contents */}
              {toc.length > 0 && (
                <nav className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 mb-16 shadow-sm">
                  <button onClick={() => setIsTocOpen(!isTocOpen)} className="flex items-center justify-between w-full group">
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-600 text-white text-[10px] px-2.5 py-1 rounded-lg uppercase font-black">Guide</span>
                      <h2 className="text-xl font-display text-gray-900 group-hover:text-blue-600">Table of Contents</h2>
                    </div>
                    <ChevronDown className={`text-blue-600 transition-transform ${isTocOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isTocOpen && (
                    <ul className="mt-8 grid md:grid-cols-2 gap-4 border-t border-blue-100 pt-8">
                      {toc.map(item => (
                        <li key={item.id}><a href={`#${item.id}`} className="text-gray-600 hover:text-blue-600 font-semibold text-sm">→ {item.title}</a></li>
                      ))}
                    </ul>
                  )}
                </nav>
              )}

              <div className="prose prose-blue lg:prose-xl max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({node, ...props}) => {
                      const id = props.children.toString().toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
                      return <h2 id={id} className="text-3xl font-bold mt-20 mb-8 border-l-4 border-blue-600 pl-6" {...props} />
                    },
                    li: ({node, ...props}) => <li className="flex gap-3 items-start before:content-['✓'] before:text-blue-600 before:font-black" {...props} />
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              <div className="bg-gray-900 rounded-[2.5rem] p-10 md:p-16 my-20 text-white shadow-2xl relative overflow-hidden">
                <h3 className="text-3xl md:text-4xl font-display mb-6">Stay Ahead of Automation</h3>
                <NewsletterForm />
              </div>
              <RelatedPosts currentSlug={slug} category={post.category} limit={3} />
            </div>

            <aside className="lg:col-span-4 pt-12 lg:pt-0">
              <div className="sticky top-28 space-y-8">
                <div className="bg-blue-600 rounded-[2rem] p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-display font-bold mb-4">Ready to Automate?</h3>
                  <Button asChild className="w-full bg-white text-blue-600 font-bold py-7 rounded-2xl text-lg"><Link to="/contact">Free Strategy Call</Link></Button>
                </div>
                <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                  <AuthorAvatar author={post.author} size={64} />
                  <h4 className="text-lg font-bold text-gray-900 mt-4">{post.author}</h4>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed">Certified Klaviyo Expert. Scaling brands since 2018.</p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
export default BlogPostPage;