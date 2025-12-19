import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const WhyCinQ = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const features = [
    { title: 'Fast & Secure', description: 'Lightning-fast ticket purchases with bank-level security.' },
    { title: 'Easy Discovery', description: 'Find events tailored to your interests with personalized suggestions.' },
    { title: 'Multiple Payments', description: 'Pay with MTN MoMo, Airtel Money, or cards.' },
    { title: 'QR Verification', description: 'Seamless entry with QR code scanning.' },
    { title: 'Organizer Tools', description: 'Manage events, track sales, and verify attendees in real-time.' },
    { title: 'Push Notifications', description: 'Get reminders and updates about your events.' },
  ];

  const animationConfig = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.2, ease: 'easeOut' },
    viewport: { once: true, margin: '-50px' },
  };

  const hoverConfig = prefersReducedMotion
    ? {}
    : {
        scale: 1.02,
        transition: { duration: 0.15, ease: 'easeOut' },
      };

  return (
    <section className="py-20 bg-black" aria-labelledby="why-cinq-heading">
      <div className="container mx-auto px-4">
        <motion.h2
          id="why-cinq-heading"
          {...animationConfig}
          className="mb-12 text-center text-h2 font-semibold text-white"
        >
          Why Choose CinQ?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {features.map((feature, index) => (
            <motion.article
              key={index}
              role="listitem"
              {...animationConfig}
              whileHover={hoverConfig}
              transition={{ ...animationConfig.transition, delay: prefersReducedMotion ? 0 : index * 0.03 }}
              className="rounded-2xl border border-white/5 bg-[rgba(17,17,17,0.9)] p-6 text-left shadow-soft-glow transition-all duration-200 hover:border-white/20 cursor-pointer"
            >
              <h3 className="mb-3 text-card-title font-semibold text-primary">{feature.title}</h3>
              <p className="text-body text-gray-400">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCinQ;

