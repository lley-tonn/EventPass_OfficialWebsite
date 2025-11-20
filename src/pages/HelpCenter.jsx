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
      className="min-h-screen bg-black pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-semibold text-white md:text-4xl"
        >
          Help Center
        </motion.h1>
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-white/5 bg-[#0f0f0f]/80 p-6 shadow-soft-glow transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="mb-3 text-base font-semibold uppercase tracking-[0.3em] text-gray-400">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="cursor-pointer transition-colors hover:text-white">
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
          <h2 className="mb-4 text-2xl font-semibold text-white">Still Need Help?</h2>
          <p className="mb-6 text-sm text-gray-400">Can't find what you're looking for? Contact our support team.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg border border-primary/60 bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-soft-glow"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HelpCenter;
