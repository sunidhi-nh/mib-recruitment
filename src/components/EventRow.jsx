import React from 'react';
import ClubLogo from './ClubLogo';

/**
 * EventRow Component
 * Renders an individual event item within the Day-wise vertical timeline.
 * Features a 32px ClubLogo next to the club name using flex + gap: 8px (no hardcoded spaces).
 * 
 * Props:
 * - event: Event details object
 * - club: Club object (or host club details)
 * - accentColor: Hex accent color of the host club
 * - onToggleRsvp: Callback function to toggle RSVP status
 */
export default function EventRow({ event, club, accentColor = '#0B1320', onToggleRsvp }) {
  // Handle RSVP button click
  const handleRsvpClick = () => {
    if (onToggleRsvp) {
      onToggleRsvp(event.id);
    }
  };

  const targetClub = club || event.club || { name: event.category, logo: event.logo, accentColor: accentColor || event.accentColor };

  return (
    <div 
      className="event-row"
      style={{ borderLeftColor: accentColor }}
    >
      <div className="event-row-header">
        <div>
          {/* CLUB TAG: 32px ClubLogo + DISPLAY FONT 18px INK NAVY TEXT + 8px GAP */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <ClubLogo club={targetClub} size={32} />
            <span 
              style={{ 
                fontFamily: 'var(--font-display)', 
                textTransform: 'uppercase', 
                fontSize: '18px', 
                letterSpacing: '0.04em', 
                color: 'var(--color-navy)',
                lineHeight: 1
              }}
            >
              {event.category}
            </span>
          </div>

          <h3 className="event-row-title" style={{ marginTop: '0' }}>
            {event.name || event.title}
          </h3>
        </div>

        {/* RSVP BUTTON WITH FLEX GAP SPACING */}
        <button
          className={`btn-rsvp ${event.isRsvpd ? 'rsvpd' : ''}`}
          onClick={handleRsvpClick}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          <span>{event.isRsvpd ? '✓' : '+'}</span>
          <span>{event.isRsvpd ? 'RSVP CONFIRMED' : 'RSVP'}</span>
        </button>
      </div>

      {/* EVENT META ROW WITH FLEX GAP SPACING */}
      <div className="event-row-meta" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>📅</span>
          <span>{event.date}</span>
          <span style={{ color: 'var(--color-navy)', fontWeight: 700 }}>({event.day})</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>🕒</span>
          <span>{event.time}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>📍</span>
          <span>{event.venue}</span>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p style={{ fontSize: '0.95rem', color: 'var(--color-navy)', lineHeight: 1.5 }}>
        {event.description}
      </p>

      {/* ATTENDANCE COUNT WITH FLEX GAP SPACING */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)' }}>
        <span style={{ color: 'var(--color-navy)' }}>{event.rsvpCount}</span>
        <span>KLE Tech students attending</span>
      </div>
    </div>
  );
}
