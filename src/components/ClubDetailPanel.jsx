import React from 'react';
import EventCard from './EventCard';

/**
 * ClubDetailPanel Component
 * Renders a smooth right-side slide-over panel displaying full details for a selected club.
 * Mirrors the sign-in/detail panel slide interaction style from editorial sites like mabarele.
 * 
 * Props:
 * - club: Selected club object (or null)
 * - isOpen: Boolean controlling slide panel visibility
 * - onClose: Callback function to dismiss the panel
 * - onToggleJoin: Callback function to toggle membership state
 * - events: Array of all campus events (to filter events hosted by this club)
 * - onToggleRsvp: Callback function to RSVP for club events
 */
export default function ClubDetailPanel({ club, isOpen, onClose, onToggleJoin, events, onToggleRsvp }) {
  if (!club) return null;

  // Filter events hosted specifically by this club
  const clubEvents = events.filter((evt) => evt.clubId === club.id);

  return (
    <div className={`panel-backdrop ${isOpen ? 'active' : ''}`} onClick={onClose}>
      {/* SLIDE-OVER CONTAINER */}
      <aside className="slide-panel" onClick={(e) => e.stopPropagation()}>
        {/* Panel Header Bar */}
        <div className="panel-header">
          <div>
            <span className="category-tag">{club.category}</span>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
              Est. {club.founded}
            </span>
          </div>

          <button className="panel-close-btn" onClick={onClose} aria-label="Close detail panel">
            ✕
          </button>
        </div>

        {/* Panel Body Content */}
        <div className="panel-body">
          <h2 className="panel-title">{club.name}</h2>

          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
            {club.shortDesc}
          </p>

          {/* Join Club Action */}
          <div style={{ marginBottom: '1.5rem' }}>
            <button
              className={`btn-join ${club.isJoined ? 'joined' : ''}`}
              style={{ width: '100%', padding: '0.75rem', fontSize: '0.95rem' }}
              onClick={() => onToggleJoin(club.id)}
            >
              {club.isJoined ? '✓ Joined Member' : '+ Join Organization'}
            </button>
          </div>

          {/* Interest Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {club.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                #{tag}
              </span>
            ))}
          </div>

          {/* About Section */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.4rem' }}>
              About this Organization
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-slate)' }}>
              {club.fullDesc}
            </p>
          </div>

          {/* Meeting & Contact Grid */}
          <div className="panel-meta-box">
            <div>
              <span className="meta-label">Schedule</span>
              <span style={{ fontWeight: 600 }}>{club.meetingTime}</span>
            </div>
            <div>
              <span className="meta-label">Location</span>
              <span style={{ fontWeight: 600 }}>{club.location}</span>
            </div>
            <div>
              <span className="meta-label">Total Members</span>
              <span>{club.memberCount} Students</span>
            </div>
            <div>
              <span className="meta-label">President</span>
              <span>{club.president}</span>
            </div>
          </div>

          {/* Upcoming Events by this Club */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
              Hosted Events
            </h3>

            {clubEvents.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {clubEvents.map((evt) => (
                  <EventCard
                    key={evt.id}
                    event={evt}
                    onToggleRsvp={onToggleRsvp}
                  />
                ))}
              </div>
            ) : (
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                No scheduled upcoming events for this club at the moment.
              </p>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
