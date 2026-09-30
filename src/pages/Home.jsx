import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee';
import CountUp from '../components/CountUp';
import ClubPoster from '../components/ClubPoster';
import EventRow from '../components/EventRow';
import AnnouncementCard from '../components/AnnouncementCard';

/**
 * Home Page Component
 * Renders the KLE Tech Quad Dispatch featuring:
 * 1. Staggered hero headline (words slide up once staggered by 80ms)
 * 2. Pure CSS infinite scrolling Marquee text strips (pauses on hover)
 * 3. CountUp big-number stat row computed dynamically (.length)
 * 4. Club poster previews & pinned campus bulletins
 * 
 * Props:
 * - clubs: Array of club objects
 * - events: Array of event objects
 * - announcements: Array of announcement objects
 * - onToggleJoin: Callback function to join/leave a club
 * - onToggleRsvp: Callback function to toggle event RSVP status
 */
export default function Home({ clubs, events, announcements, onToggleJoin, onToggleRsvp }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openClubId, setOpenClubId] = useState(null);

  const marqueeItems = [
    'MUSIC CLUB',
    'DRAMA CLUB',
    'MAKE IN BVB',
    'AEROKLE',
    'WORDSWORTH',
    'KLE MOTORSPORTS'
  ];

  // Headline words for staggered 80ms entrance
  const heroWords = ['THE', 'OFFICIAL', 'CAMPUS', 'DISPATCH', 'FOR', 'KLE', 'TECH'];

  // Filter featured events
  const featuredEvents = events
    .filter((evt) =>
      evt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evt.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evt.venue.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 3);

  // Filter pinned bulletins
  const pinnedBulletins = announcements.slice(0, 2);

  // Toggle single club poster expansion
  const handleTogglePoster = (id) => {
    setOpenClubId(prev => (prev === id ? null : id));
  };

  return (
    <div>
      {/* HERO SECTION WITH STAGGERED 80ms WORD SLIDE ENTRANCE */}
      <section className="hero-wrapper">
        <div className="hero-tag">KLE TECHNOLOGICAL UNIVERSITY</div>

        <div className="hero-title-container">
          <div className="hero-word-row">
            {heroWords.map((word, index) => (
              <span key={index} className={`hero-word w-${index}`}>
                {word}
              </span>
            ))}
          </div>
        </div>

        <p className="hero-subhead">
          Discover active student guilds, track day-wise event lineups, and access official university notices.
        </p>

        {/* Global Search Box */}
        <div className="search-box-wrap">
          <input
            type="text"
            className="search-input"
            placeholder="Search clubs, hackathons, drama skits, open mics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">
            SEARCH
          </button>
        </div>
      </section>

      {/* PURE CSS MARQUEE STRIP 1 (PAUSES ON HOVER) */}
      <Marquee items={marqueeItems} />

      {/* BIG-NUMBER COUNT-UP STAT ROW (DYNAMICALLY COMPUTED FROM .length) */}
      <section className="stats-grid">
        <CountUp endValue={clubs.length} label="Official Guilds" />
        <CountUp endValue={events.length} label="Scheduled Events" />
        <CountUp endValue={announcements.length} label="Campus Bulletins" />
      </section>

      {/* PURE CSS MARQUEE STRIP 2 (BETWEEN SECTIONS WITH ACCENT BG) */}
      <Marquee items={['DAY 1 LINEUP', 'DAY 2 HACKATHON', 'DAY 3 SHOWCASE', 'DAY 4 RACE DAY']} accentBg={true} />

      {/* HAPPENING TODAY / FEATURED EVENTS */}
      <section id="events" style={{ margin: 'var(--space-48) 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--space-24)' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--color-navy)', lineHeight: 1 }}>
              UPCOMING CAMPUS EVENTS
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginTop: 'var(--space-8)' }}>
              RSVP to reserve your spot at student performances and hackathons.
            </p>
          </div>
          <Link to="/events" style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-red)', textDecoration: 'underline' }}>
            VIEW ALL EVENTS →
          </Link>
        </div>

        {featuredEvents.length > 0 ? (
          <div>
            {featuredEvents.map((evt) => {
              const hostClub = clubs.find(c => c.name === evt.category);
              const accentColor = hostClub ? hostClub.accentColor : 'var(--color-navy)';
              return (
                <EventRow
                  key={evt.id}
                  event={evt}
                  club={hostClub}
                  accentColor={accentColor}
                  onToggleRsvp={onToggleRsvp}
                />
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <p style={{ fontWeight: 600 }}>No events matching "{searchTerm}".</p>
          </div>
        )}
      </section>

      {/* THE 6 CLUBS PREVIEW POSTERS */}
      <section id="clubs" style={{ margin: 'var(--space-48) 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--space-24)' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--color-navy)', lineHeight: 1 }}>
              THE 6 OFFICIAL GUILDS
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginTop: 'var(--space-8)' }}>
              Click any poster block to expand its details and photo slot.
            </p>
          </div>
          <Link to="/clubs" style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-red)', textDecoration: 'underline' }}>
            EXPLORE ALL GUILDS →
          </Link>
        </div>

        <div>
          {clubs.slice(0, 3).map((club) => (
            <ClubPoster
              key={club.id}
              club={club}
              isOpen={openClubId === club.id}
              onToggle={() => handleTogglePoster(club.id)}
              onToggleJoin={onToggleJoin}
            />
          ))}
        </div>
      </section>

      {/* PINNED ANNOUNCEMENTS */}
      <section id="announcements" style={{ margin: 'var(--space-48) 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--space-24)' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--color-navy)' }}>
            OFFICIAL QUAD BULLETINS
          </h2>
          <Link to="/announcements" style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-red)', textDecoration: 'underline' }}>
            ALL BULLETINS →
          </Link>
        </div>

        {pinnedBulletins.map((ann) => (
          <AnnouncementCard key={ann.id} announcement={ann} />
        ))}
      </section>
    </div>
  );
}
