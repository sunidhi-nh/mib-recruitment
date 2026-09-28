import React, { useState, useEffect } from 'react';

/**
 * HeroSection Component
 * Renders an orchestrated hero entrance with staggered headline text reveals,
 * a quiet search bar, and a scroll cue indicator that smoothly fades out on scroll.
 * 
 * Props:
 * - searchTerm: Current text string in search input
 * - onSearchChange: Callback function invoked when user types in the search bar
 */
export default function HeroSection({ searchTerm, onSearchChange }) {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  // Listen to window scroll events to fade out the scroll cue indicator
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Fade out smoothly between 0px and 120px scroll depth
      const newOpacity = Math.max(0, 1 - currentScrollY / 120);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      {/* ORCHESTRATED STAGGERED HEADLINE REVEAL */}
      <h1 className="hero-title">
        <span className="hero-line-mask">
          <span className="hero-title-line">Discover Clubs & Events</span>
        </span>
        <span className="hero-line-mask">
          <span className="hero-title-line delay-1">Across the Campus Quad</span>
        </span>
      </h1>

      {/* Quiet Subhead */}
      <p className="hero-subhead">
        The official student broadside. Explore active organizations, reserve tickets for upcoming performances, and check department notices.
      </p>

      {/* Search Input Box */}
      <div className="hero-search-wrapper">
        <div className="search-box-wrap">
          <input
            type="text"
            className="search-input"
            placeholder="Search clubs, hackathons, concerts..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="search-button">
            Search
          </button>
        </div>
      </div>

      {/* FADING SCROLL CUE */}
      <div 
        className="scroll-cue" 
        style={{ opacity: scrollOpacity, pointerEvents: scrollOpacity === 0 ? 'none' : 'auto' }}
      >
        <span className="scroll-cue-dot"></span>
        <span>↓ Scroll for Quad Dispatch</span>
      </div>
    </section>
  );
}
