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
    <section className="py-20 bg-[#050505]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-semibold text-white md:text-4xl"
        >
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center cursor-pointer"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 15px 35px rgba(255, 165, 0, 0.3)'
                }}
                transition={{ duration: 0.3 }}
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/50 bg-primary/15 text-xl text-primary shadow-soft-glow"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-sm uppercase tracking-[0.3em] text-gray-400">Step {step.step}</h3>
              <h4 className="mb-3 text-lg font-semibold text-white">{step.title}</h4>
              <p className="text-sm text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
