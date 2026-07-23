import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Button from './ui/Button';

const CTA = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 bg-gradient-radial from-primary/[0.08] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" aria-hidden="true" />
      
      <div className="container relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-label uppercase tracking-[0.2em] text-primary mb-4">Get Started</span>
          <h2
            id="cta-heading"
            className="text-section-title font-bold text-white mb-6"
          >
            Ready to power your events?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-body text-gray-400">
            Join thousands of organizers and attendees across Africa already using EventPass for seamless event experiences.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-5"
        >
          <Button ariaLabel="Download EventPass for Android">Download for Android</Button>
          <Button variant="secondary" ariaLabel="Download EventPass for iOS">Download for iOS</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
