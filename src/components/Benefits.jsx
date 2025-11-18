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
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Benefits for Everyone
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{benefit.icon}</span>
                <h3 className="text-2xl font-bold text-primary">{benefit.title}</h3>
              </div>
              <ul className="space-y-3">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <span className="text-primary mr-2">✓</span>
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
