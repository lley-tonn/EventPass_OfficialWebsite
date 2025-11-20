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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-semibold text-white md:text-4xl"
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
              className="rounded-2xl border border-white/5 bg-[rgba(17,17,17,0.9)] p-6 text-left shadow-soft-glow transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <h3 className="mb-3 text-lg font-semibold text-primary">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEventPass;
