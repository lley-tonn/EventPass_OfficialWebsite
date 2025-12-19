import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is CinQ?',
      answer: 'CinQ is a mobile-first event ticketing platform designed for Uganda. It allows users to discover events, purchase tickets securely, and access QR-code tickets directly on their phones.',
    },
    {
      question: 'Is CinQ safe?',
      answer: 'Yes, CinQ uses bank-level security encryption for all transactions and data storage. We comply with international security standards to protect your information.',
    },
    {
      question: 'How do I buy a ticket?',
      answer: 'Download the CinQ app, create an account, browse events, select your tickets, and pay using MTN MoMo, Airtel Money, or card. Your digital ticket will be available instantly.',
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
      answer: 'Each ticket has a unique QR code. At the event entrance, organizers scan the code using the CinQ app to verify authenticity and mark entry.',
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
      className="min-h-screen bg-black pt-20"
    >
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-h1 font-semibold text-white"
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
              className="rounded-2xl border border-white/5 bg-[#0f0f0f]/90 shadow-soft-glow transition-all duration-300 hover:-translate-y-1"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left text-card-title font-medium text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-card-title font-semibold text-white">{faq.question}</h3>
                  <span className="text-xl text-primary">
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
                  className="px-6 pb-6 text-body text-gray-400"
                >
                  <p>{faq.answer}</p>
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
