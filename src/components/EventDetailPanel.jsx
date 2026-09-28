import React from 'react';

/**
 * EventDetailPanel Component
 * Renders a smooth right-side slide-over panel displaying full details for a selected event.
 * 
 * Props:
 * - event: Selected event object (or null)
 * - isOpen: Boolean controlling slide panel visibility
 * - onClose: Callback function to dismiss the panel
 * - onToggleRsvp: Callback function to toggle event RSVP state
 */
export default function EventDetailPanel({ event, isOpen, onClose, onToggleRsvp }) {
  if (!event) return null;

  return (
    <div className={`panel-backdrop ${isOpen ? 'active' : ''}`} onClick={onClose}>
      {/* SLIDE-OVER CONTAINER */}
      <aside className="slide-panel" onClick={(e) => e.stopPropagation()}>
        {/* Panel Header */}
        <div className="panel-header">
          <span className="category-tag">{event.category}</span>
          <button className="panel-close-btn" onClick={onClose} aria-label="Close detail panel">
            ✕
          </button>
        </div>

        {/* Panel Body Content */}
        <div className="panel-body">
          <h2 className="panel-title">{event.title}</h2>
          <p className="event-club-name" style={{ fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            Organized by {event.clubName}
          </p>

          {/* Date, Time & Venue Block */}
          <div className="panel-meta-box">
            <div>
              <span className="meta-label">Date & Time</span>
              <span style={{ fontWeight: 600 }}>{event.date}</span>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{event.time}</div>
            </div>
            <div>
              <span className="meta-label">Venue</span>
              <span style={{ fontWeight: 600 }}>{event.venue}</span>
            </div>
          </div>

          {/* Event Description */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.4rem' }}>
              Event Overview
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-slate)' }}>
              {event.shortDesc}
            </p>
          </div>

          {/* RSVP Action */}
          <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1.5px solid var(--border-slate)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                {event.rsvpCount} students registered
              </span>

              <button
                className={`btn-rsvp ${event.isRsvpd ? 'rsvpd' : ''}`}
                style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem' }}
                onClick={() => onToggleRsvp(event.id)}
              >
                {event.isRsvpd ? '✓ RSVP Confirmed' : '+ Reserve My Spot'}
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
