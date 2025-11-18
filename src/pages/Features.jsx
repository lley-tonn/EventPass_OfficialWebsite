import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: 'Event Discovery',
      description: 'Find events tailored to your interests with our smart recommendation engine.',
      icon: '🔍',
      details: ['Personalized suggestions', 'Location-based search', 'Category filters'],
    },
    {
      title: 'Secure Ticket Purchasing',
      description: 'Buy tickets safely with multiple payment options and instant confirmation.',
      icon: '💳',
      details: ['MTN MoMo integration', 'Airtel Money support', 'Card payments'],
    },
    {
      title: 'QR Code Ticketing',
      description: 'Digital tickets with unique QR codes for seamless entry verification.',
      icon: '📱',
      details: ['Instant delivery', 'No printing needed', 'Secure verification'],
    },
    {
      title: 'Multi-Device Scanning',
      description: 'Organizers can verify tickets using any device with the EventPass app.',
      icon: '📷',
      details: ['Phone camera scanning', 'Offline verification', 'Real-time sync'],
    },
    {
      title: 'Push Notifications',
      description: 'Stay updated with event reminders and important announcements.',
      icon: '🔔',
      details: ['Event reminders', 'Last-minute updates', 'Ticket confirmations'],
    },
    {
      title: 'Organizer Analytics',
      description: 'Comprehensive dashboard with real-time sales and attendance tracking.',
      icon: '📊',
      details: ['Sales analytics', 'Attendee insights', 'Revenue reports'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Powerful Features for Everyone
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{feature.title}</h3>
              <p className="mb-4">{feature.description}</p>
              <ul className="space-y-1">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm">
                    <span className="text-primary mr-2">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
