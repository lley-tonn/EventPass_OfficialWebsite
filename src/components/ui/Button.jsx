import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const variants = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'inline-flex items-center justify-center gap-2 rounded-button px-6 py-3.5 text-base font-semibold text-zinc-300 transition-all duration-300 hover:text-white',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  as: Component = motion.button,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Component
      whileHover={prefersReducedMotion ? {} : { y: -2 }}
      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
      className={`${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
