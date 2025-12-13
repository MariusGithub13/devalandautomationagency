import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { companyData } from '../data/mock';

/**
 * AuthorAvatar Component
 * 
 * Displays the appropriate avatar for an author:
 * - Marius Andronie: Shows his profile photo
 * - Devaland Team: Shows the Devaland logo
 * - Other authors: Falls back to initials avatar
 * 
 * @param {string} author - The author name
 * @param {string} className - Additional CSS classes for the Avatar component
 * @param {number} size - Size in pixels (default: 64)
 */
const AuthorAvatar = ({ author, className = '', size = 64 }) => {
  // Determine which image to show based on author name
  const getAuthorImage = () => {
    if (author === 'Marius Andronie') {
      return {
        src: '/images/marius-andronie.jpg',
        alt: 'Marius Andronie - Founder of Devaland Marketing'
      };
    } else if (author === 'Devaland Team') {
      return {
        src: companyData.logo, // Use centralized logo URL from mock data
        alt: 'Devaland Marketing Logo'
      };
    }
    return null;
  };

  const authorImage = getAuthorImage();
  
  // Generate initials for fallback
  const getInitials = () => {
    if (!author || typeof author !== 'string') return '?';
    
    const words = author.trim().split(/\s+/).filter(word => word.length > 0);
    if (words.length === 0) return '?';
    
    return words
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2); // Limit to 2 characters for better appearance
  };

  // Calculate font size based on avatar size
  const getFontSize = () => {
    if (size <= 24) return 'text-xs';
    if (size <= 32) return 'text-sm';
    if (size <= 40) return 'text-base';
    return 'text-xl';
  };

  const avatarStyle = {
    width: `${size}px`,
    height: `${size}px`
  };

  return (
    <Avatar className={className} style={avatarStyle}>
      {authorImage && (
        <AvatarImage 
          src={authorImage.src} 
          alt={authorImage.alt}
          className="object-cover"
        />
      )}
      <AvatarFallback className={`bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold ${getFontSize()}`}>
        {getInitials()}
      </AvatarFallback>
    </Avatar>
  );
};

export default AuthorAvatar;
