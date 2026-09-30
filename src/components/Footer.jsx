import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer Component
 * Renders the bottom dispatch footer featuring the KLE Tech college crest logo (40px, object-fit: contain, no circle crop).
 * 
 * Props: none
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: 'var(--space-8)' }}>
            <img 
              src="/logos/kle-tech.png" 
              alt="KLE Tech college crest logo" 
              width={40} 
              height={40}
              loading="lazy"
              style={{ width: '40px', height: '40px', objectFit: 'contain', flexShrink: 0 }}
            />
            <h3 className="footer-brand" style={{ margin: 0 }}>KLE TECH CAMPUS CONNECT</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#94A3B8', maxWidth: '420px' }}>
            The official student portal for KLE Technological University. Discover the 7 official guilds, track day-wise event lineups, and access official notices.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-16)', fontSize: '0.9rem', fontWeight: 700, alignItems: 'center' }}>
          <Link to="/" style={{ color: '#ffffff' }}>Digest</Link>
          <Link to="/clubs" style={{ color: '#ffffff' }}>Guilds</Link>
          <Link to="/events" style={{ color: '#ffffff' }}>Events</Link>
          <Link to="/announcements" style={{ color: '#ffffff' }}>Bulletins</Link>
        </div>
      </div>
    </footer>
  );
}
