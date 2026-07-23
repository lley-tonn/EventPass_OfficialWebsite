import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Reveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  as: Component = motion.div,
}) => {
  const prefersReducedMotion = useReducedMotion();

  const offsets = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { x: 28, y: 0 },
    right: { x: -28, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = offsets[direction] || offsets.up;

  return (
    <Component
      className={className}
      initial={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.55,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
