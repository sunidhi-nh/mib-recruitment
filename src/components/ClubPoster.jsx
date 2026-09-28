import React from 'react';
import ClubLogo from './ClubLogo';

/**
 * ClubPoster Component
 * Renders a large full-width poster panel for a club styled in its own unique accent color.
 * Displays the 96px ClubLogo inside the expanded panel view (and 48px badge in header).
 * 
 * Props:
 * - club: Club data object
 * - isOpen: Boolean flag indicating if this poster panel is expanded
 * - onToggle: Callback function invoked when user clicks the poster header
 * - onToggleJoin: Callback function to join/leave this club
 */
export default function ClubPoster({ club, isOpen, onToggle, onToggleJoin }) {
  // Handle click on Join Club button without collapsing poster
  const handleJoinClick = (e) => {
    e.stopPropagation();
    if (onToggleJoin) {
      onToggleJoin(club.id);
    }
  };

  return (
    <article 
      className={`club-poster ${isOpen ? 'expanded' : ''}`}
      style={{ borderColor: 'var(--color-navy)' }}
    >
      {/* POSTER HEADER (ALWAYS VISIBLE) */}
      <div 
        className="club-poster-header"
        onClick={onToggle}
        style={{ backgroundColor: club.accentColor, color: '#ffffff' }}
      >
        <div className="poster-top-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ClubLogo club={club} size={40} />
            <span className="poster-club-badge" style={{ backgroundColor: 'var(--color-navy)' }}>
              KLE TECH GUILD
            </span>
          </div>

          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', letterSpacing: '0.05em' }}>
            {club.memberCount} MEMBERS
          </span>
        </div>

        <div>
          <h2 className="poster-title">{club.name}</h2>
          <p className="poster-tagline">{club.shortTagline}</p>
        </div>

        <div className="poster-cue-strip">
          <span className="poster-cue-text">
            {isOpen ? '▲ CLOSE POSTER' : '▼ TAP TO EXPLORE GUILD'}
          </span>
          <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-body)', fontWeight: 700 }}>
            {isOpen ? 'EXPANDED VIEW' : 'CLICK TO OPEN'}
          </span>
        </div>
      </div>

      {/* EXPANDABLE POSTER CONTENT (ACCORDION TRANSITION) */}
      <div className="club-poster-expand">
        <div className="poster-expand-inner">
          {/* REPLACED PHOTO SLOT WITH 96px ClubLogo CONTAINER */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: 'var(--space-24)', backgroundColor: 'var(--bg-surface)', border: '2px dashed var(--color-navy)', margin: 'var(--space-16) 0' }}>
            <ClubLogo club={club} size={96} />
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-navy)' }}>
                {club.name.toUpperCase()}
              </div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                Official Guild Logo & Crest
              </div>
            </div>
          </div>

          <div style={{ margin: 'var(--space-16) 0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-navy)', marginBottom: 'var(--space-8)' }}>
              ABOUT THIS GUILD
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--color-navy)', lineHeight: 1.6 }}>
              {club.description}
            </p>
          </div>

          {/* Upcoming Events by this Club */}
          <div style={{ margin: 'var(--space-24) 0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-navy)', marginBottom: 'var(--space-8)' }}>
              UPCOMING CLUB EVENTS
            </h3>

            {club.events && club.events.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                {club.events.map((evt) => (
                  <div 
                    key={evt.id}
                    style={{ 
                      padding: 'var(--space-16)', 
                      backgroundColor: '#ffffff', 
                      border: '2px solid var(--color-navy)',
                      borderLeft: `6px solid ${club.accentColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '8px'
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-navy)' }}>
                        {evt.name}
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                        📍 {evt.venue} • 🕒 {evt.time} ({evt.date})
                      </div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: club.accentColor }}>
                      {evt.day}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                No events currently scheduled for this guild.
              </p>
            )}
          </div>

          {/* Join Club Action */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 'var(--space-16)', borderTop: '2px solid var(--color-divider)', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-muted)' }}>
              Contact: {club.contactEmail}
            </span>

            <button
              className={`btn-rsvp ${club.isJoined ? 'rsvpd' : ''}`}
              style={{ 
                padding: 'var(--space-8) var(--space-24)', 
                fontSize: '1.1rem',
                backgroundColor: club.isJoined ? 'var(--color-navy)' : club.accentColor,
                color: '#ffffff',
                borderColor: 'var(--color-navy)'
              }}
              onClick={handleJoinClick}
            >
              {club.isJoined ? '✓ MEMBER JOINED' : '+ JOIN THIS GUILD'}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
