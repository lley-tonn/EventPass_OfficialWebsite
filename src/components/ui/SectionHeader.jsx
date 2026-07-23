import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const prefersReducedMotion = useReducedMotion();
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto';

  return (
    <motion.header
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-16 max-w-3xl ${alignClass} ${className}`}
    >
      {eyebrow && (
        <p className="mb-4 text-label uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      )}
      <h2 className="text-section-title font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="mt-5 text-body text-zinc-400">{subtitle}</p>
      )}
    </motion.header>
  );
}
