import React from 'react';
import { motion } from 'framer-motion';
import { STATS, PARTNERS } from '../../constants/brand';
import AnimatedCounter from '../ui/AnimatedCounter';
import Reveal from '../ui/Reveal';

const TrustSection = () => (
  <section className="relative py-20 md:py-28 border-y border-white/[0.04] bg-surface-raised/50" aria-label="Trust and social proof">
    <div className="absolute inset-0 bg-gradient-radial from-primary/[0.06] via-transparent to-transparent pointer-events-none" />
    <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" aria-hidden="true" />

    <div className="container relative">
      <Reveal className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16 md:mb-20">
        {STATS.map((stat, index) => (
          <motion.div 
            key={stat.label} 
            className="text-center md:text-left group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
          >
            <p className="text-h2 md:text-display-sm font-bold text-white mb-1">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals || 0}
              />
            </p>
            <p className="text-meta text-gray-500 group-hover:text-gray-400 transition-colors">{stat.label}</p>
          </motion.div>
        ))}
      </Reveal>

      <Reveal delay={0.2}>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-label uppercase tracking-[0.2em] text-gray-600 mb-10">
            Trusted by organizers, brands & institutions across Africa
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {PARTNERS.map((partner, index) => (
              <motion.span
                key={partner}
                className="text-meta font-semibold text-gray-500 hover:text-white transition-all duration-300 whitespace-nowrap cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, color: '#E8952F' }}
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Reveal>
    </div>
  </section>
);

export default TrustSection;
