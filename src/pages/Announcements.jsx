import React, { useState } from 'react';
import AnnouncementCard from '../components/AnnouncementCard';

/**
 * Announcements Page Component
 * Renders official KLE Tech university notices and bulletins ordered with newest first.
 * 
 * Props:
 * - announcements: Array of announcement objects
 */
export default function Announcements({ announcements }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter bulletins based on search query
  const filteredNotices = announcements.filter((ann) => 
    ann.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ann.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ann.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: 'var(--space-24)', paddingBottom: 'var(--space-16)', borderBottom: 'var(--border-thick)' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', color: 'var(--color-navy)', lineHeight: 1 }}>
          OFFICIAL QUAD BULLETINS
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: 'var(--space-8)' }}>
          Official notices from Academic Affairs, Library Services, and Guild Leadership ordered newest first.
        </p>
      </div>

      {/* Search Input */}
      <div style={{ marginBottom: 'var(--space-24)' }}>
        <div className="search-box-wrap" style={{ maxWidth: '480px' }}>
          <input
            type="text"
            className="search-input"
            placeholder="Search bulletins by department or topic..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Announcements List */}
      {filteredNotices.length > 0 ? (
        <div>
          {filteredNotices.map((ann) => (
            <AnnouncementCard key={ann.id} announcement={ann} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem' }}>NO BULLETINS FOUND</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
            No official bulletins match search query "{searchTerm}".
          </p>
        </div>
      )}
    </div>
  );
}
