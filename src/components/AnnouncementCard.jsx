import React, { useState } from 'react';
import ClubLogo from './ClubLogo';

/**
 * AnnouncementCard Component
 * Renders an official KLE Tech notice or bulletin card.
 * Uses a 32px ClubLogo (or monogram fallback tile) next to department name with flex + gap: 8px.
 * 
 * Props:
 * - announcement: Object containing notice details (title, date, priority, department, summary, accentColor, club)
 */
export default function AnnouncementCard({ announcement }) {
  const [isOpen, setIsOpen] = useState(false);

  const targetClub = announcement.club || { 
    name: announcement.department || 'Campus Bulletin', 
    accentColor: announcement.accentColor || 'var(--color-navy)' 
  };

  return (
    <div 
      className={`announcement-card ${announcement.priority.toLowerCase() === 'urgent' ? 'urgent' : ''}`}
      style={{ borderLeftColor: announcement.accentColor || 'var(--color-navy)' }}
    >
      {/* HEADER FLEX CONTAINER WITH 32px ClubLogo & 8px GAP */}
      <div className="ann-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
        <ClubLogo club={targetClub} size={32} />

        <span style={{ 
          fontFamily: 'var(--font-display)', 
          textTransform: 'uppercase', 
          fontSize: '18px', 
          letterSpacing: '0.04em', 
          color: 'var(--color-navy)',
          lineHeight: 1 
        }}>
          {announcement.department || 'CAMPUS BULLETIN'}
        </span>

        {/* THIN VERTICAL DIVIDER (1px x 16px, 30% INK NAVY) */}
        <span 
          style={{ 
            width: '1px', 
            height: '16px', 
            backgroundColor: 'rgba(11, 19, 32, 0.3)', 
            flexShrink: 0 
          }} 
          aria-hidden="true" 
        />

        <span style={{ 
          fontFamily: 'var(--font-body)', 
          fontSize: '0.82rem', 
          fontWeight: 700, 
          color: 'var(--text-muted)' 
        }}>
          {announcement.priority}
        </span>
      </div>

      <h3 className="ann-title">{announcement.title}</h3>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 'var(--space-8)' }}>
        <span>Published on</span>
        <span>{announcement.date}</span>
      </div>

      <p style={{ fontSize: '0.95rem', color: 'var(--color-navy)', lineHeight: 1.5 }}>
        {announcement.summary}
      </p>

      <button
        style={{ 
          marginTop: 'var(--space-8)', 
          fontFamily: 'var(--font-display)', 
          fontSize: '1rem', 
          color: 'var(--color-red)',
          letterSpacing: '0.05em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{isOpen ? '▲' : '▼'}</span>
        <span>{isOpen ? 'HIDE FULL BULLETIN' : 'READ FULL BULLETIN'}</span>
      </button>

      {isOpen && (
        <div className="ann-content-box">
          <p style={{ fontSize: '0.9rem', color: 'var(--color-navy)', lineHeight: 1.5 }}>
            {announcement.summary} Contact student services or the corresponding guild lead for further assistance.
          </p>
        </div>
      )}
    </div>
  );
}
