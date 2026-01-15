import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  ChevronDown, 
  User, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Share2 
} from 'lucide-react';

// UI and Custom Components
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import NewsletterForm from '../components/NewsletterForm';
import RelatedPosts from '../components/RelatedPosts';
import AuthorAvatar from '../components/AuthorAvatar';
import { blogPosts } from '../data/mock';

// --- SUB-COMPONENT: READING PROGRESS BAR ---
const ReadingProgressBar = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };
    window.addEventListener('scroll', updateScrollCompletion);
    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  return (
    <div className="fixed top-16 left-0 w-full h-1.5 z-[60] bg-transparent pointer-events-none">
      <div 
        className="h-full bg-blue-600 transition-all duration-150 ease-out shadow-[0_0_15px_rgba(37,99,235,0.6)]"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [imgLoaded, setImgLoaded] = useState(false);

  // --- 1. DATA FINDING ---
  const post = useMemo(() => {
    return blogPosts.find(p => 
      p.slug === slug || 
      p.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-') === slug
    );
  }, [slug]);

  // --- 2. DYNAMIC TOC GENERATOR ---
  const toc = useMemo(() => {
    if (!post) return [];
    const headings = [];
    const lines = post.content.split('\n');
    lines.forEach(line => {
      if (line.startsWith('## ')) {
        const title = line.replace('## ', '');
        const id = title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
        headings.push({ id, title });
      }
    });
    return headings;
  }, [post]);

  if (!post) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-blue-600 font-bold underline">Back to Blog</Link>
      </div>
    );
  }

  const shareUrl = `https://devaland.com/blog/${slug}`;

  // --- 3. SEO & BREADCRUMB SCHEMA ---
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${slug}` }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "author": { "@type": "Person", "name": post.author }
  };

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={shareUrl}
        ogImage={post.image}
        ogType="article"
        schema={articleSchema}
        breadcrumbItems={breadcrumbItems}
      />
      
      <ReadingProgressBar />

      <main className="bg-white min-h-screen">
        {/* Navigation Wrapper */}
        <div className="pt-24 max-w-5xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Content Section */}
        <header className="max-w-5xl mx-auto px-4 py-12 md:py-20">
          <Link to="/blog" className="inline-flex items-center text-blue-600 font-bold mb-8 group">
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
          
          <Badge className="bg-blue-600 text-white mb-6 px-4 py-1.5 rounded-full border-none uppercase tracking-widest text-[10px] font-bold">
            {post.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display text-gray-900 mb-8 leading-[1.1] tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-500 font-medium py-8 border-y border-gray-100">
            <div className="flex items-center gap-2"><Calendar size={18} className="text-blue-600"/> {post.date}</div>
            <div className="flex items-center gap-2"><Clock size={18} className="text-blue-600"/> {post.readTime}</div>
            <div className="flex items-center gap-3">
              <AuthorAvatar author={post.author} size={32} />
              <span className="text-gray-900 font-bold">{post.author}</span>
            </div>
          </div>
        </header>

        {/* Main Article Grid */}
        <section className="max-w-5xl mx-auto px-4 pb-24">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              
              {/* Featured Image Restoration */}
              <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl bg-gray-50 border border-gray-100">
                {!imgLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
                <img 
                  src={post.image} 
                  alt={post.title}
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>

              {/* Table of Contents */}
              {toc.length > 0 && (
                <nav className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-8 mb-16 shadow-sm">
                  <button 
                    onClick={() => setIsTocOpen(!isTocOpen)}
                    className="flex items-center justify-between w-full group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-600 text-white text-[10px] px-2.5 py-1 rounded-lg font-black uppercase tracking-widest">Guide</span>
                      <h2 className="text-xl font-display text-gray-900 group-hover:text-blue-600 transition-colors">Table of Contents</h2>
                    </div>
                    <ChevronDown className={`text-blue-600 transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`} size={24} />
                  </button>
                  {isTocOpen && (
                    <ul className="mt-8 grid md:grid-cols-2 gap-4 border-t border-blue-100 pt-8">
                      {toc.map((item) => (
                        <li key={item.id}>
                          <a href={`#${item.id}`} className="flex items-start gap-2 text-gray-600 hover:text-blue-600 font-semibold text-sm leading-snug transition-all hover:translate-x-1">
                            <span className="text-blue-400 mt-1">→</span>
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </nav>
              )}

              {/* --- THE FIX: MARKDOWN RENDERING --- */}
              <div className="prose prose-blue lg:prose-xl max-w-none text-gray-800 prose-headings:font-display prose-headings:tracking-tight prose-strong:text-gray-900">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({node, ...props}) => {
                      const id = props.children.toString().toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
                      return <h2 id={id} className="text-3xl md:text-4xl font-bold mt-20 mb-8 text-gray-900 scroll-mt-28 border-l-4 border-blue-600 pl-6" {...props} />
                    },
                    p: ({node, ...props}) => <p className="mb-8 leading-relaxed text-gray-700 font-medium" {...props} />,
                    ul: ({node, ...props}) => <ul className="bg-gray-50 rounded-3xl p-8 mb-10 list-none space-y-4 border border-gray-100" {...props} />,
                    li: ({node, ...props}) => <li className="flex gap-3 text-gray-700 font-semibold items-start before:content-['✓'] before:text-blue-600 before:font-black" {...props} />
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Newsletter Block */}
              <div className="bg-gray-900 rounded-[2.5rem] p-10 md:p-16 my-20 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
                <h3 className="text-3xl md:text-4xl font-display mb-6">Stay Ahead of Automation</h3>
                <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-xl">
                  Get monthly case studies and Voice AI implementation guides delivered to your inbox.
                </p>
                <NewsletterForm />
              </div>

              <RelatedPosts currentSlug={slug} category={post.category} limit={3} />
            </div>

            {/* Sticky Sidebar Elements */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                {/* Social Sharing */}
                <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                     <Share2 size={14} /> Share Knowledge
                   </h3>
                   <div className="flex gap-4">
                      <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all h-12 w-12" asChild>
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener"><Linkedin size={20}/></a>
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all h-12 w-12" asChild>
                        <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`} target="_blank" rel="noopener"><Twitter size={20}/></a>
                      </Button>
                      <Button size="icon" variant="outline" className="rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all h-12 w-12" asChild>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener"><Facebook size={20}/></a>
                      </Button>
                   </div>
                </div>

                {/* Main Sidebar CTA */}
                <div className="bg-blue-600 rounded-[2rem] p-8 text-white shadow-xl shadow-blue-200">
                  <h3 className="text-2xl font-display font-bold mb-4">Ready to Automate?</h3>
                  <p className="text-blue-100 mb-8 text-sm leading-relaxed font-medium">
                    Analyze your volume and identify exactly where Voice AI saves 50% on support.
                  </p>
                  <Button asChild className="w-full bg-white hover:bg-blue-50 text-blue-600 font-bold py-7 rounded-2xl shadow-lg transition-all text-lg">
                    <a href="https://calendly.com/devaland/30min" target="_blank" rel="noopener">
                      Free Strategy Call
                    </a>
                  </Button>
                </div>

                {/* Author Info */}
                <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                  <AuthorAvatar author={post.author} size={64} />
                  <h4 className="text-lg font-bold text-gray-900 mt-4">{post.author}</h4>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed font-medium">
                    Certified Klaviyo Expert. Scaling brands through high-ROI automation since 2018.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPostPage;