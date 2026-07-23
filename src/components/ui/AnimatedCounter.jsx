import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

function formatValue(value, decimals = 0) {
  if (decimals > 0) return value.toFixed(decimals);
  if (value >= 1000) return `${Math.round(value / 1000)}K`;
  return Math.round(value).toString();
}

export default function AnimatedCounter({ value, suffix = '', decimals = 0, duration = 2000 }) {
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(prefersReducedMotion ? formatValue(value, decimals) : '0');
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(formatValue(value, decimals));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(formatValue(value * eased, decimals));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, suffix, decimals, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}
