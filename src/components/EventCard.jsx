import React from 'react';
import ClubLogo from './ClubLogo';

/**
 * EventCard Component
 * Renders an individual event card featuring:
 * - 32px ClubLogo image / monogram next to club name using flex + gap: 8px
 * - Clean flex containers with gap spacing for icons, dates, venue, and buttons
 * 
 * Props:
 * - event: Object containing event details
 * - club: Host club object (optional)
 * - accentColor: Hex accent color of the host club
 * - onOpenPanel: Callback function to open event detail panel
 * - onToggleRsvp: Callback function to toggle event RSVP status
 */
export default function EventCard({ event, club, accentColor = '#0B1320', onOpenPanel, onToggleRsvp }) {
  // Handle RSVP button click
  const handleRsvpClick = (e) => {
    e.stopPropagation();
    if (onToggleRsvp) {
      onToggleRsvp(event.id);
    }
  };

  const targetClub = club || { name: event.category || event.clubName, accentColor };

  return (
    <div className="event-card" style={{ borderLeft: `6px solid ${accentColor}` }}>
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
            {event.category || event.clubName}
          </span>
        </div>

        {/* Title */}
        <h3 
          className="event-title" 
          style={{ cursor: onOpenPanel ? 'pointer' : 'default', marginTop: 0 }}
          onClick={() => onOpenPanel && onOpenPanel(event)}
        >
          {event.name || event.title}
        </h3>

        {/* Date, Time & Venue Meta Row with Flex Gap */}
        <div className="event-meta" style={{ display: 'flex', flexDirection: 'column', gap: '4px', margin: 'var(--space-8) 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span>📅</span>
            <span>{event.date}</span>
            <span style={{ fontWeight: 700 }}>({event.day})</span>
            <span>•</span>
            <span>🕒</span>
            <span>{event.time}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>📍</span>
            <span>{event.venue}</span>
          </div>
        </div>

        {/* Short Specific Friendly Description */}
        <p className="event-desc">{event.description}</p>
      </div>

      {/* Footer Actions */}
      <div className="event-card-footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)' }}>
          <span style={{ color: 'var(--color-navy)' }}>{event.rsvpCount}</span>
          <span>registered</span>
        </div>

        <button
          className={`btn-rsvp ${event.isRsvpd ? 'rsvpd' : ''}`}
          onClick={handleRsvpClick}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          <span>{event.isRsvpd ? '✓' : '+'}</span>
          <span>{event.isRsvpd ? 'RSVP CONFIRMED' : 'RSVP'}</span>
        </button>
      </div>
    </div>
  );
}
