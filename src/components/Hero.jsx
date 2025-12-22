import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const primaryButton =
  'inline-flex items-center justify-center rounded-lg border border-primary/60 bg-primary px-6 py-3 text-button font-semibold tracking-wide text-black transition-opacity duration-200 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40';

const secondaryButton =
  'inline-flex items-center justify-center rounded-lg border border-primary/40 px-6 py-3 text-button font-semibold tracking-wide text-primary transition-opacity duration-200 hover:bg-primary/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const animationConfig = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.25, ease: 'easeOut' },
  };

  const hoverConfig = prefersReducedMotion
    ? {}
    : {
        scale: 1.02,
        transition: { duration: 0.15, ease: 'easeOut' },
      };

  return (
    <section 
      className="hero-background relative flex h-screen items-center justify-center"
      aria-label="Hero section"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          {...animationConfig}
          className="text-h1 font-bold tracking-tight text-white"
        >
          Discover Events with <span className="text-primary">CinQ</span>
        </motion.h1>
        <motion.p
          {...animationConfig}
          transition={{ ...animationConfig.transition, delay: prefersReducedMotion ? 0 : 0.1 }}
          className="mx-auto mb-10 max-w-3xl text-body text-gray-400"
        >
          The modern mobile ticketing platform for Uganda. Buy tickets, discover events, and enjoy seamless entry with QR codes.
        </motion.p>
        <motion.nav
          {...animationConfig}
          transition={{ ...animationConfig.transition, delay: prefersReducedMotion ? 0 : 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-3"
          aria-label="Download links"
        >
          <motion.button
            whileHover={hoverConfig}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            className={primaryButton}
            aria-label="Download CinQ app for Android"
          >
            Download for Android
          </motion.button>
          <motion.button
            whileHover={hoverConfig}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            className={secondaryButton}
            aria-label="Download CinQ app for iOS"
          >
            Download for iOS
          </motion.button>
        </motion.nav>
      </div>
      {!prefersReducedMotion && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="animate-bounce">
          <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
      )}
    </section>
  );
};

export default Hero;
