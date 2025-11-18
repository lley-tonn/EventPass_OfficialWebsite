import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  const sections = [
    {
      title: 'Getting Started',
      items: [
        'How to create an account',
        'Downloading the app',
        'Setting up your profile',
      ],
    },
    {
      title: 'Troubleshooting',
      items: [
        'App not loading',
        'Payment issues',
        'QR code not scanning',
      ],
    },
    {
      title: 'Payment Issues',
      items: [
        'MTN MoMo payments',
        'Airtel Money transactions',
        'Card payment problems',
      ],
    },
    {
      title: 'Account Issues',
      items: [
        'Password reset',
        'Account verification',
        'Deleting your account',
      ],
    },
    {
      title: 'Organizer Resources',
      items: [
        'Creating events',
        'Managing tickets',
        'Using the dashboard',
      ],
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
          Help Center
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 dark:text-gray-400 hover:text-primary cursor-pointer transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
          <p className="mb-6">Can't find what you're looking for? Contact our support team.</p>
          <Link
            to="/contact"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors glow"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HelpCenter;
