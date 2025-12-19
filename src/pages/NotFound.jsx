import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black pt-20 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-h1 font-bold text-primary mb-4"
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-h2 font-semibold text-white mb-4"
        >
          Page Not Found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-body text-gray-400 mb-8 max-w-md mx-auto"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg border border-primary/60 bg-primary px-6 py-3 text-button font-semibold tracking-wide text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-soft-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            Go Back Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;

