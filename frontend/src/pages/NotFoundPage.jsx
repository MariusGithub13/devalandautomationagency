import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Bot } from 'lucide-react';
import { Button } from '../components/ui/button';
import SEO from '../components/SEO';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 overflow-hidden relative">
            <SEO
                title="404 - Page Not Found"
                description="The page you are looking for does not exist or has been moved."
                noindex={true}
            />

            {/* Background Polish */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-2xl w-full text-center relative z-10 animate-in fade-in zoom-in duration-500">
                <div className="mb-8 inline-flex items-center justify-center w-24 h-24 bg-blue-500/10 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
                    <Bot size={48} className="text-blue-400 animate-bounce" />
                </div>

                <h1 className="text-8xl md:text-9xl font-black text-white mb-4 tracking-tighter opacity-20">
                    404
                </h1>

                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                    System Error: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Route Not Found</span>
                </h2>

                <p className="text-xl text-slate-400 mb-12 max-w-lg mx-auto leading-relaxed">
                    It seems our AI couldn't locate the data you're looking for. The link might be broken or the page has been moved to a new destination.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20">
                        <Link to="/" className="flex items-center gap-2">
                            <Home size={20} />
                            Return Home
                        </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-slate-800 bg-slate-900/50 text-white hover:bg-slate-800 px-8 py-6 rounded-2xl font-bold backdrop-blur-sm transition-all">
                        <Link to="/blog" className="flex items-center gap-2">
                            <Search size={20} />
                            Browse Articles
                        </Link>
                    </Button>
                </div>

                <p className="mt-16 text-slate-600 text-sm font-medium flex items-center justify-center gap-2">
                    <ArrowLeft size={14} />
                    Lost? Use the menu above to navigate back.
                </p>
            </div>
        </div>
    );
};

export default NotFoundPage;
