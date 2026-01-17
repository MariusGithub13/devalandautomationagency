import React from 'react';
import { Link } from 'react-router-dom';
import { INTERNAL_LINK_MAP } from '../data/mock';

const InternalLinkAutomator = ({ text }) => {
  if (!text) return null;
  let contentParts = [text];

  INTERNAL_LINK_MAP.forEach(({ keywords, href, title }) => {
    const pattern = new RegExp(`(${keywords.join('|')})`, 'gi');
    let newParts = [];
    contentParts.forEach(part => {
      if (typeof part !== 'string') {
        newParts.push(part);
        return;
      }
      const split = part.split(pattern);
      split.forEach((subPart, i) => {
        if (keywords.some(k => k.toLowerCase() === subPart.toLowerCase())) {
          newParts.push(
            <Link key={i} to={href} title={title} className="text-blue-600 hover:underline font-semibold">
              {subPart}
            </Link>
          );
        } else if (subPart) {
          newParts.push(subPart);
        }
      });
    });
    contentParts = newParts;
  });

  return <>{contentParts}</>;
};

export default InternalLinkAutomator;