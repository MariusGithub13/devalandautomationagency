import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  ArrowLeft, Calendar, Clock, ChevronDown, ChevronRight
} from 'lucide-react';

// UI and Custom Components
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';
import NewsletterForm from '../components/NewsletterForm';
import AuthorAvatar from '../components/AuthorAvatar';
import InternalLinkAutomator from '../components/InternalLinkAutomator'; // ✅ Added back for SEO
import NotFoundPage from './NotFoundPage';

// Data
import { blogPosts } from '../data/mock';

// --- SUB-COMPONENT: READING PROGRESS BAR ---
const ReadingProgressBar = () => {
  const [completion, setCompletion] = useState(0);
  useEffect(() => {
    const updateScroll = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  return (
    /* top-16 ensures it stays exactly at the bottom of your 64px header */
    <div className="fixed top-16 left-0 w-full h-1.5 z-40 bg-transparent pointer-events-none">
      <div
        className="h-full bg-blue-500 transition-all duration-150 ease-out shadow-[0_0_15px_rgba(59,130,246,0.8)]"
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
    return (blogPosts || []).find(p => p.slug === slug);
  }, [slug]);

  // --- 2. DYNAMIC TOC GENERATOR ---
  const toc = useMemo(() => {
    if (!post) return [];
    const headings = [];
    const lines = post.content.split('\n');
    lines.forEach(line => {
      if (line.startsWith('## ')) {
        const title = line.replace('## ', '').trim();
        const id = title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
        headings.push({ id, title });
      }
    });
    return headings;
  }, [post]);

  if (!post) return <NotFoundPage />;

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title }
  ];

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        ogImage={post.image}
        ogType="article"
        canonical={`https://devaland.com/blog/${slug}`}
        breadcrumbItems={breadcrumbItems}
      />
      <ReadingProgressBar />

      <main className="bg-white min-h-screen animate-in fade-in duration-700">
        {/* Premium Gradient Header with enhanced depth */}
        <header className="bg-gradient-to-br from-[#1e40af] via-[#312e81] to-[#1e1b4b] pt-32 pb-24 text-white overflow-hidden relative">
          {/* Subtle background glow/blob for depth */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="mb-8">
              <Breadcrumb items={breadcrumbItems} variant="dark" />
            </div>

            <Link to="/blog" className="inline-flex items-center text-blue-200/80 font-bold mb-8 group hover:text-white transition-all bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/20">
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </Link>

            <div className="flex flex-col items-start gap-4 mb-8">
              <Badge className="bg-blue-400/20 text-blue-100 px-4 py-1.5 rounded-full border border-blue-400/30 uppercase tracking-[0.2em] text-[10px] font-black">
                {post.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-10 leading-[1.05] tracking-tight font-black">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-blue-100/60 font-medium pt-10 border-t border-white/5">
              <div className="flex items-center gap-2.5">
                <span className="text-blue-400">📅</span>
                {post.date}
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-blue-400">⏱️</span>
                {post.readTime} read
              </div>
              <div className="flex items-center gap-4">
                <div className="p-0.5 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full shadow-lg">
                  <AuthorAvatar author={post.author} size={36} className="border-0" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest text-blue-100/40 font-black">Author</span>
                  <span className="font-bold text-white text-base">{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <section className="max-w-5xl mx-auto px-4 pb-24 -mt-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl bg-gray-50 border border-gray-100">
                <img
                  src={post.image} alt={post.title}
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-full object-cover transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>

              {/* Table of Contents */}
              {toc.length > 0 && (
                <nav className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-8 mb-16 shadow-sm">
                  <button onClick={() => setIsTocOpen(!isTocOpen)} className="flex items-center justify-between w-full group">
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
                          <a href={`#${item.id}`} className="flex items-start gap-2 text-gray-600 hover:text-blue-600 font-semibold text-sm transition-all hover:translate-x-1">
                            <span className="text-blue-400 mt-1">→</span> {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </nav>
              )}

              {/* Markdown Content with Integrated Internal Linking */}
              <div className="prose prose-blue lg:prose-xl max-w-none text-gray-800">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ node, ...props }) => {
                      const id = props.children.toString().toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
                      return <h2 id={id} className="text-3xl md:text-4xl font-bold mt-20 mb-8 border-l-4 border-blue-600 pl-6" {...props} />
                    },
                    // ✅ Apply Automator to every paragraph rendered from Markdown
                    p: ({ node, children }) => {
                      if (typeof children === 'string') {
                        return <p className="mb-6 leading-relaxed font-body"><InternalLinkAutomator text={children} /></p>;
                      }
                      return <p className="mb-6 leading-relaxed font-body">{children}</p>;
                    },
                    li: ({ node, ...props }) => <li className="flex gap-3 items-start before:content-['✓'] before:text-blue-600 before:font-black mb-2" {...props} />
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>

              <div className="bg-gray-900 rounded-[2.5rem] p-10 md:p-16 my-20 text-white shadow-2xl relative overflow-hidden">
                <h3 className="text-3xl md:text-4xl font-display mb-6">Stay Ahead of Automation</h3>
                <NewsletterForm />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                <div className="bg-blue-600 rounded-[2rem] p-8 text-white shadow-xl">
                  <h3 className="text-2xl font-display font-bold mb-4">Ready to Automate?</h3>
                  <Button asChild className="w-full bg-white text-blue-600 font-bold py-7 rounded-2xl shadow-lg text-lg hover:bg-gray-100 transition-colors">
                    <Link to="/contact">Free Strategy Call</Link>
                  </Button>
                </div>
                <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100">
                  <AuthorAvatar author={post.author} size={64} />
                  <h4 className="text-lg font-bold text-gray-900 mt-4">{post.author}</h4>
                  <p className="text-gray-500 text-xs mt-2 leading-relaxed font-medium">Certified Klaviyo Expert. Scaling brands since 2018.</p>
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