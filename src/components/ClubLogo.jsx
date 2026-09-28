import React, { useState } from 'react';

/**
 * ClubLogo Component
 * Renders a club's official logo image or a circular monogram fallback tile if logo is null or fails to load.
 * 
 * Props:
 * - club: Object containing club details (name, logo, accentColor)
 * - size: Number specifying dimensions in pixels (e.g. 32, 96, 120)
 */
export default function ClubLogo({ club, size = 32 }) {
  const [imgError, setImgError] = useState(false);

  if (!club) return null;

  // Extract initials for monogram fallback (e.g. "Drama Club" -> "DC")
  const getInitials = (name = '') => {
    const words = name.trim().split(' ');
    if (words.length >= 2) {
      return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const initials = getInitials(club.name);
  const pxSize = `${size}px`;
  const fontSize = `${Math.max(12, Math.floor(size * 0.45))}px`;

  // IF LOGO EXISTS AND HAS NOT ERRORED: Render circular <img> with contain fit on cream background
  if (club.logo && !imgError) {
    return (
      <img
        src={club.logo}
        alt={`${club.name} logo`}
        width={size}
        height={size}
        loading="lazy"
        onError={() => setImgError(true)}
        style={{
          width: pxSize,
          height: pxSize,
          objectFit: 'contain',
          backgroundColor: 'var(--bg-paper)',
          borderRadius: '50%',
          border: '2px solid var(--color-navy)',
          flexShrink: 0,
          display: 'inline-block'
        }}
      />
    );
  }

  // IF LOGO IS NULL OR FAILED TO LOAD: Render monogram fallback tile on club accent color
  return (
    <div
      style={{
        width: pxSize,
        height: pxSize,
        backgroundColor: club.accentColor || 'var(--color-navy)',
        color: '#ffffff',
        borderRadius: '50%',
        border: '2px solid var(--color-navy)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: fontSize,
        lineHeight: 1,
        letterSpacing: '0.04em',
        flexShrink: 0
      }}
      aria-label={`${club.name} monogram logo`}
    >
      {initials}
    </div>
  );
}
