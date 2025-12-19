import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open chatbot"
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-primary/60 bg-primary text-lg text-black shadow-soft-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            💬
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-50 max-w-sm rounded-2xl border border-white/10 bg-[#111111]/95 p-6 text-body text-gray-300 shadow-soft-glow backdrop-blur"
            role="dialog"
            aria-modal="true"
            aria-labelledby="chatbot-title"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 id="chatbot-title" className="text-card-title font-semibold text-white">CinQ Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
                className="rounded-full p-1 text-gray-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                ✕
              </button>
            </div>
            <p className="text-body text-gray-400">
              Hi! I'm the CinQ Assistant. Chatbot functionality is coming soon.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
