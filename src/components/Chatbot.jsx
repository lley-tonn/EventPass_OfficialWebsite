import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg glow z-50"
      >
        💬
      </motion.button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-20 right-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm z-50"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">EventPass Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700">✕</button>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Hi! I'm the EventPass Assistant. Chatbot functionality is coming soon.
          </p>
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
