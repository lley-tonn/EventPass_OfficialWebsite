import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: 'Discover Events',
      description: 'Browse and discover events tailored to your interests using our intuitive app.',
      icon: '🔍',
    },
    {
      step: 2,
      title: 'Purchase Tickets',
      description: 'Buy tickets securely using MTN MoMo, Airtel Money, or card payments.',
      icon: '💳',
    },
    {
      step: 3,
      title: 'Get Your QR Code',
      description: 'Receive your digital ticket with a unique QR code directly on your phone.',
      icon: '📱',
    },
    {
      step: 4,
      title: 'Enter the Event',
      description: 'Show your QR code at the entrance for quick and easy verification.',
      icon: '✅',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 glow">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">Step {step.step}</h3>
              <h4 className="text-lg font-medium mb-4 text-primary">{step.title}</h4>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
