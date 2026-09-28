import React, { useState } from 'react';
import ClubPoster from '../components/ClubPoster';
import CategoryFilter from '../components/CategoryFilter';
import { categories } from '../data/data';

/**
 * Clubs Page Component
 * Renders the 6 official KLE Tech club poster panels.
 * Clicking a poster panel expands it via CSS max-height transition to reveal description, photo slot, events, and Join button.
 * Only one poster panel can be open at a time (`openClubId` state).
 * 
 * Props:
 * - clubs: Array of the 6 KLE Tech club objects
 * - onToggleJoin: Callback function to join/leave a club
 */
export default function Clubs({ clubs, onToggleJoin }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [openClubId, setOpenClubId] = useState(null);

  // Toggle single club poster expansion rule (only one open at a time)
  const handleTogglePoster = (id) => {
    setOpenClubId(prevId => (prevId === id ? null : id));
  };

  // Filter clubs based on category filter and search term
  const filteredClubs = clubs.filter((club) => {
    const matchesCategory = selectedCategory === 'All' || club.name === selectedCategory;
    const matchesSearch = 
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.shortTagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      club.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: 'var(--space-24)', paddingBottom: 'var(--space-16)', borderBottom: 'var(--border-thick)' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', color: 'var(--color-navy)', lineHeight: 1 }}>
          THE 6 OFFICIAL GUILDS
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: 'var(--space-8)' }}>
          KLE Tech's core student organizations. Click any poster block below to expand full details, events, and photo slots.
        </p>
      </div>

      {/* Category Filter & Search Box */}
      <div style={{ marginBottom: 'var(--space-24)', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
        <CategoryFilter
          categories={categories}
          activeCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="search-box-wrap" style={{ maxWidth: '480px' }}>
          <input
            type="text"
            className="search-input"
            placeholder="Search guilds by name or tagline..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* POSTER-STYLE CLUB LIST (ONLY ONE OPEN AT A TIME) */}
      {filteredClubs.length > 0 ? (
        <div>
          {filteredClubs.map((club) => (
            <ClubPoster
              key={club.id}
              club={club}
              isOpen={openClubId === club.id}
              onToggle={() => handleTogglePoster(club.id)}
              onToggleJoin={onToggleJoin}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem' }}>NO GUILDS FOUND</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
            No student organizations match category "{selectedCategory}" and search query "{searchTerm}".
          </p>
        </div>
      )}
    </div>
  );
}
