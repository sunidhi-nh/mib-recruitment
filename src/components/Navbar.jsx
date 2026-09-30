import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navbar Component
 * Renders the top application header featuring the KLE Tech college crest logo
 * (40px, object-fit: contain, NO circle crop since it is a college crest).
 * 
 * Props: none
 */
export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Toggle mobile navigation menu visibility
  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Close menu when a navigation link is clicked
  const closeMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* KLE Tech Brand Identity with Official College Crest Logo */}
        <NavLink to="/" className="brand-link" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src="/logos/kle-tech.png" 
            alt="KLE Tech college crest logo" 
            width={40} 
            height={40}
            loading="lazy"
            style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0 }}
          />
          <div>
            <span className="brand-name">CAMPUS CONNECT</span>
            <span className="brand-sub">KLE TECHNOLOGICAL UNIVERSITY</span>
          </div>
        </NavLink>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {isMobileOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMobileOpen ? 'open' : ''}`}>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => isActive ? 'nav-item-link active' : 'nav-item-link'}
            onClick={closeMenu}
          >
            Quad Digest
          </NavLink>
          
          <NavLink 
            to="/clubs" 
            className={({ isActive }) => isActive ? 'nav-item-link active' : 'nav-item-link'}
            onClick={closeMenu}
          >
            The 7 Guilds
          </NavLink>

          <NavLink 
            to="/events" 
            className={({ isActive }) => isActive ? 'nav-item-link active' : 'nav-item-link'}
            onClick={closeMenu}
          >
            Events Timeline
          </NavLink>

          <NavLink 
            to="/announcements" 
            className={({ isActive }) => isActive ? 'nav-item-link active' : 'nav-item-link'}
            onClick={closeMenu}
          >
            Bulletins
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
