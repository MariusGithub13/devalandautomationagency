import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

/**
 * InternalLinkBlock Component
 * 
 * Contextual sidebar/in-content navigation block
 * Drives internal linking and provides clear conversion paths
 * 
 * @param {string} title - Block heading
 * @param {Array} links - Array of link objects {to, label, icon?, external?}
 * @param {string} ctaText - Call-to-action text (optional)
 * @param {string} ctaLink - CTA destination (optional)
 * @param {string} variant - Visual style: 'default' | 'accent' | 'minimal'
 * @param {string} className - Additional CSS classes
 */
const InternalLinkBlock = ({ 
  title = "Related Resources",
  description,
  links = [],
  ctaText,
  ctaLink,
  variant = 'default',
  className 
}) => {
  const variants = {
    default: {
      container: 'bg-gray-50 border border-gray-200',
      border: 'border-gray-300',
      title: 'text-gray-900',
      link: 'text-gray-700 hover:text-blue-600',
      cta: 'bg-blue-600 text-white hover:bg-blue-700'
    },
    accent: {
      container: 'bg-blue-50 border-l-4 border-blue-600',
      border: 'border-blue-200',
      title: 'text-blue-900',
      link: 'text-blue-700 hover:text-blue-900',
      cta: 'bg-blue-600 text-white hover:bg-blue-700'
    },
    minimal: {
      container: 'bg-white border border-gray-100 shadow-sm',
      border: 'border-gray-100',
      title: 'text-gray-800',
      link: 'text-gray-600 hover:text-blue-600',
      cta: 'bg-gray-900 text-white hover:bg-gray-800'
    }
  };

  const style = variants[variant];

  if (!links || links.length === 0) return null;

  return (
    <div className={cn(
      'rounded-lg p-6 my-8',
      style.container,
      className
    )}>
      <h3 className={cn(
        'font-semibold text-lg mb-4',
        style.title
      )}>
        {title}
      </h3>
      
      {description && (
        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>
      )}
      
      <ul className="space-y-3">
        {links.map((link, index) => {
          const Icon = link.icon || ArrowRight;
          const isExternal = link.external || link.to?.startsWith('http');
          
          return (
            <li key={index}>
              {isExternal ? (
                <a
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-start gap-2 group transition-colors',
                    style.link
                  )}
                >
                  <Icon className="w-4 h-4 mt-1 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="flex-1">{link.label}</span>
                  <ExternalLink className="w-3 h-3 mt-1 opacity-50" />
                </a>
              ) : (
                <Link
                  to={link.to}
                  className={cn(
                    'flex items-start gap-2 group transition-colors',
                    style.link
                  )}
                >
                  <Icon className="w-4 h-4 mt-1 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="flex-1">{link.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      {ctaText && ctaLink && (
        <div className={cn(
          'mt-6 pt-6 border-t',
          style.border
        )}>
          <Link
            to={ctaLink}
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors text-sm',
              style.cta
            )}
          >
            {ctaText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default InternalLinkBlock;
