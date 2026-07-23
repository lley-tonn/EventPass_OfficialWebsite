import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { HOME_FAQS } from '../../constants/brand';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="faq" className="section-padding relative" aria-labelledby="home-faq-heading">
      <div className="container max-w-3xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions, answered."
          description="Everything you need to know before your next event."
        />

        <div className="space-y-3">
          {HOME_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.05}>
                <div className="rounded-card border border-white/[0.06] bg-surface-panel/50 overflow-hidden transition-colors hover:border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-inset"
                    aria-expanded={isOpen}
                  >
                    <span className="text-card-title font-semibold text-white">{faq.question}</span>
                    <span className="text-primary text-xl shrink-0" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
                      >
                        <p className="px-6 pb-5 text-body text-gray-400 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
