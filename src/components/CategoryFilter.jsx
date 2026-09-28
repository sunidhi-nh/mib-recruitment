import React from 'react';

/**
 * CategoryFilter Component
 * Renders filter chips for selecting specific KLE Tech clubs or categories.
 * 
 * Props:
 * - categories: Array of category strings (e.g. ['All', 'Music Club', 'Drama Club', ...])
 * - activeCategory: Currently active category string
 * - onSelectCategory: Callback function to update active category
 */
export default function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="filter-bar">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            className={`filter-chip ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
