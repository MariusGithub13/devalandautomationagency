import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

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
        src: 'https://customer-assets.emergentagent.com/job_process-genius-5/artifacts/kau0y3tw_Devaland-Logo.jpg',
        alt: 'Devaland Marketing Logo'
      };
    }
    return null;
  };

  const authorImage = getAuthorImage();
  
  // Generate initials for fallback
  const getInitials = () => {
    return author.split(' ').map(name => name[0]).join('');
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
      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-xl">
        {getInitials()}
      </AvatarFallback>
    </Avatar>
  );
};

export default AuthorAvatar;
