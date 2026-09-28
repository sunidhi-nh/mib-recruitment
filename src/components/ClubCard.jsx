import React from 'react';

/**
 * ClubCard Component
 * Renders an individual club card with tags, short description, membership button,
 * and a "View Details →" button that triggers opening the smooth detail slide-over panel.
 * 
 * Props:
 * - club: Object containing club information
 * - onOpenPanel: Callback function to open this club's slide panel
 * - onToggleJoin: Callback function to join/leave this club
 */
export default function ClubCard({ club, onOpenPanel, onToggleJoin }) {
  // Handle click on Join Club button
  const handleJoinClick = (e) => {
    e.stopPropagation();
    if (onToggleJoin) {
      onToggleJoin(club.id);
    }
  };

  return (
    <div className="club-card">
      <div>
        {/* Header Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
          <h3 className="club-title">{club.name}</h3>
          <span className="category-tag">{club.category}</span>
        </div>

        {/* Short Summary Description */}
        <p className="club-short-desc">{club.shortDesc}</p>

        {/* Interest Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
          {club.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer: Join & Open Slide Panel Button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-muted)', paddingTop: '0.75rem' }}>
        <button
          className={`btn-join ${club.isJoined ? 'joined' : ''}`}
          onClick={handleJoinClick}
        >
          {club.isJoined ? '✓ Member' : '+ Join'}
        </button>

        <button
          className="btn-open-panel"
          onClick={() => onOpenPanel(club)}
        >
          View Details →
        </button>
      </div>
    </div>
  );
}
