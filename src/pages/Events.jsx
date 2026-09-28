import React, { useState } from 'react';
import EventRow from '../components/EventRow';
import CategoryFilter from '../components/CategoryFilter';
import { categories } from '../data/data';

/**
 * Events Page Component
 * Renders a Day-wise vertical timeline (Day 1, Day 2, Day 3...) of all campus events.
 * Each entry displays its host club's distinct accent color badge.
 * 
 * Props:
 * - events: Array of event objects
 * - clubs: Array of club objects (to match club accent colors)
 * - onToggleRsvp: Callback function to update event RSVP state
 */
export default function Events({ events, clubs, onToggleRsvp }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter events based on active category and search input
  const filteredEvents = events.filter((evt) => {
    const matchesCategory = selectedCategory === 'All' || evt.category === selectedCategory;
    const matchesSearch = 
      evt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evt.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evt.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evt.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Group filtered events by Day (Day 1, Day 2, Day 3, Day 4...)
  const dayGroups = filteredEvents.reduce((acc, evt) => {
    const dayKey = evt.day || 'Day 1';
    if (!acc[dayKey]) {
      acc[dayKey] = [];
    }
    acc[dayKey].push(evt);
    return acc;
  }, {});

  const dayKeys = Object.keys(dayGroups).sort();

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: 'var(--space-24)', paddingBottom: 'var(--space-16)', borderBottom: 'var(--border-thick)' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', color: 'var(--color-navy)', lineHeight: 1 }}>
          DAY-WISE EVENTS LINEUP
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: 'var(--space-8)' }}>
          Vertical timeline of hackathons, jam sessions, drama skits, and drone showcases grouped by day.
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
            placeholder="Search events by title, venue, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* DAY-WISE VERTICAL TIMELINE */}
      {dayKeys.length > 0 ? (
        <div>
          {dayKeys.map((dayLabel) => (
            <div key={dayLabel} className="timeline-day-group">
              <div className="timeline-day-header">
                📅 {dayLabel.toUpperCase()} SCHEDULE
              </div>

              <div>
                {dayGroups[dayLabel].map((evt) => {
                  const hostClub = clubs.find(c => c.name === evt.category);
                  const accentColor = hostClub ? hostClub.accentColor : 'var(--color-navy)';

                  return (
                    <EventRow
                      key={evt.id}
                      event={evt}
                      accentColor={accentColor}
                      onToggleRsvp={onToggleRsvp}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem' }}>NO EVENTS FOUND</h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
            No scheduled events match category "{selectedCategory}" and search query "{searchTerm}".
          </p>
        </div>
      )}
    </div>
  );
}
