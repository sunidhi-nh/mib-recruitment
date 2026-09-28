import React, { useState, useEffect } from 'react';
import SplitFlapText from './SplitFlapText';

/**
 * TickerStrip Component
 * Renders a "Happening Today" departure board ticker strip that automatically cycles
 * through upcoming campus events every 4.5 seconds using SplitFlapText tiles.
 * 
 * Props:
 * - events: Array of campus event objects to cycle through
 */
export default function TickerStrip({ events = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle to the next event in array every 4.5 seconds
  useEffect(() => {
    if (events.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [events.length]);

  if (events.length === 0) return null;

  const currentEvent = events[currentIndex];
  // Format ticker headline string: "HACKATHON 2026 • STUDENT UNION HALL"
  const tickerText = `${currentEvent.title.toUpperCase()} • ${currentEvent.venue.toUpperCase()}`;

  return (
    <div className="ticker-strip">
      <div className="ticker-label-badge">
        <span className="ticker-pulse-dot"></span>
        <span>HAPENING TODAY</span>
      </div>

      <div className="ticker-content-area">
        <SplitFlapText text={tickerText} size="sm" />
      </div>
    </div>
  );
}
