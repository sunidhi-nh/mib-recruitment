import React, { useState, useEffect } from 'react';

/**
 * SplitFlapText Component
 * Renders a mechanical departure board string where each character is a dark split tile
 * that flips (3D CSS rotateX) left-to-right with a staggered delay per character.
 * 
 * Props:
 * - text: String to display on the split-flap board (e.g. "CAMPUS CONNECT", "OCT 14 • 8:00 PM")
 * - size: Size variant for tiles - 'sm' (small dates), 'md' (default), 'lg' (hero headlines)
 */
export default function SplitFlapText({ text = '', size = 'md' }) {
  const [isFlipping, setIsFlipping] = useState(false);

  // Trigger a flip animation sequence whenever the target text prop updates
  useEffect(() => {
    setIsFlipping(true);

    const timer = setTimeout(() => {
      setIsFlipping(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [text]);

  // Convert text string into an array of individual characters
  const characters = text.split('');

  // Determine size CSS class modifier
  const getSizeClass = () => {
    if (size === 'sm') return 'flap-tile-sm';
    if (size === 'lg') return 'flap-tile-lg';
    return 'flap-tile-md';
  };

  const sizeClass = getSizeClass();

  return (
    <div className="flap-board-container" aria-label={text}>
      {characters.map((char, index) => {
        const isSpace = char === ' ';
        // Calculate staggered animation delay for left-to-right wave (45ms per character)
        const staggerDelay = `${index * 0.045}s`;

        if (isSpace) {
          return (
            <span
              key={`space-${index}`}
              className={`flap-tile ${sizeClass} flap-tile-space`}
            >
              &nbsp;
            </span>
          );
        }

        return (
          <span
            key={`${char}-${index}-${text}`}
            className={`flap-tile ${sizeClass} ${isFlipping ? 'flip' : ''}`}
            style={{ animationDelay: staggerDelay }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}
