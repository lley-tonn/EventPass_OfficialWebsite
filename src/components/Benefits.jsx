import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Benefits = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const benefits = [
    {
      title: 'For Users',
      items: [
        'Discover events effortlessly',
        'Secure and fast ticket purchases',
        'Digital QR tickets on your phone',
        'Personalized event recommendations',
        'Push notifications for updates',
      ],
      icon: '👤',
    },
    {
      title: 'For Organizers',
      items: [
        'Real-time sales tracking',
        'Easy attendee verification',
        'Multi-device QR scanning',
        'Analytics dashboard',
        'Seamless event management',
      ],
      icon: '🎭',
    },
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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          {...animationConfig}
          className="mb-12 text-center text-h2 font-semibold text-white"
        >
          Benefits for Everyone
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              {...animationConfig}
              whileHover={hoverConfig}
              transition={{ ...animationConfig.transition, delay: prefersReducedMotion ? 0 : index * 0.05 }}
              className="rounded-2xl border border-white/5 bg-[rgba(15,15,15,0.85)] p-6 shadow-soft-glow transition-all duration-200 hover:border-white/15 cursor-pointer"
            >
              <div className="flex items-center mb-6">
                <span className="mr-4 text-3xl">{benefit.icon}</span>
                <h3 className="text-h3 font-semibold text-primary">{benefit.title}</h3>
              </div>
              <ul className="space-y-3 text-body text-gray-400">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="mr-2 text-primary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
