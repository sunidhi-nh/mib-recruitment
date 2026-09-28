import React, { useState, useEffect, useRef } from 'react';

/**
 * CountUp Component
 * Renders a single stat metric that counts up from 0 to target `endValue` once when scrolled into view.
 * 
 * Props:
 * - endValue: Target integer number to count up to
 * - label: Text metric description
 */
export default function CountUp({ endValue = 0, label = '' }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  // Trigger count-up once element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // Count up interval logic
  useEffect(() => {
    if (!hasStarted || endValue === 0) return;

    let current = 0;
    const stepTime = Math.max(20, Math.floor(1200 / endValue));

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= endValue) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, endValue]);

  return (
    <div className="stat-item" ref={elementRef}>
      <div className="stat-number">{count}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
