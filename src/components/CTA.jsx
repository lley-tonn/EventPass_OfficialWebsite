import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-16 bg-[#0d0d0d] text-white border-t border-b border-white/5">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-3xl font-semibold md:text-4xl"
        >
          Ready to Experience EventPass?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-base text-gray-400"
        >
          Join thousands of users and organizers already using EventPass for seamless event experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col justify-center gap-3 sm:flex-row"
        >
          <button className="rounded-lg border border-primary/60 bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-soft-glow">
            Download for Android
          </button>
          <button className="rounded-lg border border-primary/40 bg-transparent px-6 py-3 text-sm font-semibold tracking-wide text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/5 hover:text-white hover:shadow-soft-glow">
            Download for iOS
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
