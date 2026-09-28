import React from 'react';

/**
 * Marquee Component
 * Renders a pure CSS infinite scrolling text ticker strip.
 * Features a duplicated text row and pauses on hover (`animation-play-state: paused`).
 * 
 * Props:
 * - items: Array of string labels to scroll (e.g. ['MUSIC', 'DRAMA', 'MAKE IN BVB', 'AEROKLE', 'WORDSWORTH', 'KLE MOTORSPORTS'])
 * - accentBg: Optional boolean flag to set red accent background
 */
export default function Marquee({ items = [], accentBg = false }) {
  if (items.length === 0) return null;

  return (
    <div className={`marquee-container ${accentBg ? 'accent-bg' : ''}`} aria-hidden="true">
      <div className="marquee-track">
        {/* First Duplicated Group */}
        <div className="marquee-group">
          {items.map((item, idx) => (
            <span key={`g1-${idx}`} className="marquee-item">
              <span>{item}</span>
              <span className="marquee-star">★</span>
            </span>
          ))}
        </div>

        {/* Second Duplicated Group (Ensures Seamless Loop) */}
        <div className="marquee-group">
          {items.map((item, idx) => (
            <span key={`g2-${idx}`} className="marquee-item">
              <span>{item}</span>
              <span className="marquee-star">★</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
