import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import ClubDetail from './pages/ClubDetail';
import Events from './pages/Events';
import Announcements from './pages/Announcements';

// Mock Data Single Source of Truth
import { 
  mockClubs, 
  mockEvents, 
  mockAnnouncements 
} from './data/data';

// App CSS
import './App.css';

/**
 * ScrollToTop Component
 * Resets window scroll position to the top (0, 0) whenever the route pathname changes.
 * Needed because React Router does not reset scroll position by itself when navigating between pages.
 * 
 * Props: none
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

/**
 * HeadingSettleHandler Component
 * Applies a temporary '.heading-settle' CSS class to main section headings upon route change
 * to trigger a subtle 250ms settle animation (translateY 12px -> 0px, opacity 0.6 -> 1.0).
 * Removes the class after 300ms.
 * 
 * Props: none
 */
function HeadingSettleHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const headings = document.querySelectorAll('h1, h2, .poster-title');
    headings.forEach((h) => h.classList.add('heading-settle'));

    const timer = setTimeout(() => {
      headings.forEach((h) => h.classList.remove('heading-settle'));
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

/**
 * App Main Component
 * Manages central application state (interactive RSVPs, club membership joins)
 * and configures React Router paths for KLE Tech Campus Connect.
 */
export default function App() {
  const [clubs, setClubs] = useState(mockClubs);
  const [events, setEvents] = useState(mockEvents);
  const [announcements] = useState(mockAnnouncements);

  /**
   * Toggle Event RSVP Status
   */
  const handleToggleRsvp = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((evt) => {
        if (evt.id === eventId) {
          const newIsRsvpd = !evt.isRsvpd;
          return {
            ...evt,
            isRsvpd: newIsRsvpd,
            rsvpCount: newIsRsvpd ? evt.rsvpCount + 1 : evt.rsvpCount - 1
          };
        }
        return evt;
      })
    );

    // Also update event inside corresponding club object
    setClubs((prevClubs) =>
      prevClubs.map((club) => ({
        ...club,
        events: club.events.map((evt) => {
          if (evt.id === eventId) {
            const newIsRsvpd = !evt.isRsvpd;
            return {
              ...evt,
              isRsvpd: newIsRsvpd,
              rsvpCount: newIsRsvpd ? evt.rsvpCount + 1 : evt.rsvpCount - 1
            };
          }
          return evt;
        })
      }))
    );
  };

  /**
   * Toggle Club Membership Status
   */
  const handleToggleJoin = (clubId) => {
    setClubs((prevClubs) =>
      prevClubs.map((club) => {
        if (club.id === clubId) {
          const newIsJoined = !club.isJoined;
          return {
            ...club,
            isJoined: newIsJoined,
            memberCount: newIsJoined ? club.memberCount + 1 : club.memberCount - 1
          };
        }
        return club;
      })
    );
  };

  return (
    <BrowserRouter>
      {/* Scroll Reset & Heading Settle Router Handlers */}
      <ScrollToTop />
      <HeadingSettleHandler />

      <div className="app-container">
        {/* Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  clubs={clubs}
                  events={events}
                  announcements={announcements}
                  onToggleJoin={handleToggleJoin}
                  onToggleRsvp={handleToggleRsvp}
                />
              } 
            />

            <Route 
              path="/clubs" 
              element={
                <Clubs 
                  clubs={clubs}
                  onToggleJoin={handleToggleJoin}
                />
              } 
            />

            <Route 
              path="/clubs/:id" 
              element={
                <ClubDetail 
                  clubs={clubs}
                  onToggleJoin={handleToggleJoin}
                  onToggleRsvp={handleToggleRsvp}
                />
              } 
            />

            <Route 
              path="/events" 
              element={
                <Events 
                  events={events}
                  clubs={clubs}
                  onToggleRsvp={handleToggleRsvp}
                />
              } 
            />

            <Route 
              path="/announcements" 
              element={
                <Announcements 
                  announcements={announcements}
                />
              } 
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
