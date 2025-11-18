import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is EventPass?',
      answer: 'EventPass is a mobile-first event ticketing platform designed for Uganda. It allows users to discover events, purchase tickets securely, and access QR-code tickets directly on their phones.',
    },
    {
      question: 'Is EventPass safe?',
      answer: 'Yes, EventPass uses bank-level security encryption for all transactions and data storage. We comply with international security standards to protect your information.',
    },
    {
      question: 'How do I buy a ticket?',
      answer: 'Download the EventPass app, create an account, browse events, select your tickets, and pay using MTN MoMo, Airtel Money, or card. Your digital ticket will be available instantly.',
    },
    {
      question: 'How do organizers get paid?',
      answer: 'Organizers receive payments directly to their linked accounts. Funds are transferred within 24-48 hours after the event, minus a small processing fee.',
    },
    {
      question: 'Do tickets expire?',
      answer: 'Tickets are valid for the duration of the event. Some events may have specific entry times, so check the event details for timing information.',
    },
    {
      question: 'How does QR verification work?',
      answer: 'Each ticket has a unique QR code. At the event entrance, organizers scan the code using the EventPass app to verify authenticity and mark entry.',
    },
    {
      question: 'Is my data secure?',
      answer: 'We take data security seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your consent.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="text-primary text-xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQs;
