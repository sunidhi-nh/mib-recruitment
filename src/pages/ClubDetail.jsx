import React from 'react';
import { useParams, Link } from 'react-router-dom';
import EventRow from '../components/EventRow';
import ClubLogo from '../components/ClubLogo';

/**
 * ClubDetail Page Component
 * Dedicated full view for single club reached via route /clubs/:id
 * Features 120px ClubLogo image / monogram tile in the header.
 * 
 * Props:
 * - clubs: Array of the 7 KLE Tech club objects
 * - onToggleJoin: Callback function to join/leave this club
 * - onToggleRsvp: Callback function to toggle event RSVP
 */
export default function ClubDetail({ clubs, onToggleJoin, onToggleRsvp }) {
  const { id } = useParams();

  // Find club by URL parameter ID
  const club = clubs.find((c) => c.id === id);

  if (!club) {
    return (
      <div className="empty-state">
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem' }}>GUILD NOT FOUND</h2>
        <p style={{ marginTop: 'var(--space-8)' }}>The requested organization could not be located.</p>
        <Link to="/clubs" style={{ display: 'inline-block', marginTop: 'var(--space-16)', fontFamily: 'var(--font-display)', color: 'var(--color-red)' }}>
          ← BACK TO GUILDS
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 'var(--space-16)' }}>
        <Link to="/clubs" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--color-navy)', letterSpacing: '0.05em' }}>
          ← BACK TO ALL GUILDS
        </Link>
      </div>

      {/* HEADER WITH 120px CLUB LOGO */}
      <div style={{ backgroundColor: club.accentColor, color: '#ffffff', padding: 'var(--space-48) var(--space-24)', border: 'var(--border-thick)', marginBottom: 'var(--space-24)', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
        <ClubLogo club={club} size={120} />

        <div style={{ flex: 1 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', backgroundColor: 'var(--color-navy)', padding: '2px 8px' }}>
            KLE TECH OFFICIAL GUILD
          </span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 5rem)', lineHeight: 0.95, margin: 'var(--space-16) 0 var(--space-8)' }}>
            {club.name}
          </h1>
          <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>{club.shortTagline}</p>
        </div>
      </div>

      {/* ABOUT GUILD SECTION */}
      <div style={{ margin: 'var(--space-24) 0', padding: 'var(--space-24)', backgroundColor: '#ffffff', border: 'var(--border-thick)' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--color-navy)', marginBottom: 'var(--space-8)' }}>
          ABOUT THE ORGANIZATION
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--color-navy)', lineHeight: 1.6 }}>
          {club.description}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'var(--space-24)', paddingTop: 'var(--space-16)', borderTop: '2px solid var(--color-divider)', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>Total Members: {club.memberCount}</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Contact: {club.contactEmail}</div>
          </div>

          <button
            className={`btn-rsvp ${club.isJoined ? 'rsvpd' : ''}`}
            style={{ 
              padding: 'var(--space-8) var(--space-24)', 
              fontSize: '1.1rem',
              backgroundColor: club.isJoined ? 'var(--color-navy)' : club.accentColor,
              color: '#ffffff'
            }}
            onClick={() => onToggleJoin(club.id)}
          >
            {club.isJoined ? '✓ MEMBER JOINED' : '+ JOIN GUILD'}
          </button>
        </div>
      </div>

      {/* Hosted Events */}
      <div style={{ margin: 'var(--space-48) 0' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--color-navy)', marginBottom: 'var(--space-16)' }}>
          EVENTS HOSTED BY {club.name.toUpperCase()}
        </h2>

        {club.events && club.events.length > 0 ? (
          <div>
            {club.events.map((evt) => (
              <EventRow
                key={evt.id}
                event={evt}
                accentColor={club.accentColor}
                onToggleRsvp={onToggleRsvp}
              />
            ))}
          </div>
        ) : (
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>No events currently scheduled for this guild.</p>
        )}
      </div>
    </div>
  );
}
