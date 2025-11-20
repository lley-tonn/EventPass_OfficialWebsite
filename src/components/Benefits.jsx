import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
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

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-semibold text-white md:text-4xl"
        >
          Benefits for Everyone
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 165, 0, 0.1)'
              }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-2xl border border-white/5 bg-[rgba(15,15,15,0.85)] p-6 shadow-soft-glow transition-all duration-300 hover:border-white/15 cursor-pointer"
            >
              <div className="flex items-center mb-6">
                <span className="mr-4 text-3xl">{benefit.icon}</span>
                <h3 className="text-xl font-semibold text-primary">{benefit.title}</h3>
              </div>
              <ul className="space-y-3 text-sm text-gray-400">
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
