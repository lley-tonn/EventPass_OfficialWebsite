import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-primary/60 bg-primary text-lg text-black shadow-soft-glow"
      >
        💬
      </motion.button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-20 right-6 z-50 max-w-sm rounded-2xl border border-white/10 bg-[#111111]/95 p-6 text-sm text-gray-300 shadow-soft-glow backdrop-blur"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-white">EventPass Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-gray-500 transition-colors hover:text-white"
            >
              ✕
            </button>
          </div>
          <p className="text-gray-400">
            Hi! I'm the EventPass Assistant. Chatbot functionality is coming soon.
          </p>
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
