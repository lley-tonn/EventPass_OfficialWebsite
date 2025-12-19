import React from 'react';
import { motion } from 'framer-motion';

const Loading = ({ message = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="text-center">
        <motion.div
          className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="text-body text-gray-400">{message}</p>
      </div>
    </div>
  );
};

export default Loading;

