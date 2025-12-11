import React, { useState, useEffect, memo, useCallback, useMemo } from 'react';
import LogoImg from '../assets/Devaland-Logo.jpg';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { companyData } from '../data/mock';

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Memoize scroll handler to prevent re-creating function on every render
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Memoize navigation array to prevent re-creating on every render
  const navigation = useMemo(() => [
    { name: 'Home', href: '/' },
    { name: 'Automation Services', href: '/services' },
    { name: 'Klaviyo Services', href: '/klaviyo' },
    { name: 'Voice AI Agents', href: '/voice-ai' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ], []);

  // Memoize isActive function
  const isActive = useCallback((path) => location.pathname === path, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg border-b border-gray-200/20' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 lg:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover-scale flex-shrink-0">
            {/** header image with fallback to inline SVG if loading fails */}
            <HeaderLogo />
            <span className="text-sm sm:text-base lg:text-xl font-display text-gray-900 whitespace-nowrap">{companyData.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-2 xl:px-3 py-2 text-sm xl:text-base font-medium whitespace-nowrap transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-20 sm:top-24 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40 max-h-[calc(100vh-5rem)] sm:max-h-[calc(100vh-6rem)] overflow-y-auto">
            <nav className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50 rounded-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  asChild
                  className="w-full btn-primary text-white font-medium py-3 rounded-lg"
                >
                  <a href={companyData.calendly} target="_blank" rel="noopener noreferrer">
                    Book Free Audit
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;

function HeaderLogo() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <svg width="48" height="48" viewBox="0 0 24 24" className="text-blue-600">
        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M3 12c3-4 6-6 9-6s6 2 9 6c-3 4-6 6-9 6s-6-2-9-6z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      src={LogoImg}
      alt="Devaland logo"
      className="h-12 sm:h-16 lg:h-20 w-auto object-contain"
      onError={() => setFailed(true)}
    />
  );
}