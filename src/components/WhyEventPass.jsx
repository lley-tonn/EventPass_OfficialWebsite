import React from 'react';
import { motion } from 'framer-motion';

const WhyEventPass = () => {
  const features = [
    { title: 'Fast & Secure', description: 'Lightning-fast ticket purchases with bank-level security.' },
    { title: 'Easy Discovery', description: 'Find events tailored to your interests with personalized suggestions.' },
    { title: 'Multiple Payments', description: 'Pay with MTN MoMo, Airtel Money, or cards.' },
    { title: 'QR Verification', description: 'Seamless entry with QR code scanning.' },
    { title: 'Organizer Tools', description: 'Manage events, track sales, and verify attendees in real-time.' },
    { title: 'Push Notifications', description: 'Get reminders and updates about your events.' },
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
          Why Choose EventPass?
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEventPass;
