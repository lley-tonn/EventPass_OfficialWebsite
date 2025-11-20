import React from 'react';
import { motion } from 'framer-motion';

const primaryButton =
  'inline-flex items-center justify-center rounded-lg border border-primary/60 bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-soft-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40';

const secondaryButton =
  'inline-flex items-center justify-center rounded-lg border border-primary/40 px-6 py-3 text-sm font-semibold tracking-wide text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/5 hover:text-white hover:shadow-soft-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20';

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-black via-neutral-950 to-black pt-10 pb-12">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-white md:leading-[1.1]"
        >
          Discover Events with <span className="text-primary">EventPass</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-10 max-w-3xl text-base md:text-lg text-gray-400"
        >
          The modern mobile ticketing platform for Uganda. Buy tickets, discover events, and enjoy seamless entry with QR codes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={primaryButton}
          >
            Download for Android
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={secondaryButton}
          >
            Download for iOS
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
