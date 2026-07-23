import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import OrganizerDashboard from '../product/OrganizerDashboard';
import Reveal from '../ui/Reveal';

const capabilities = [
  'Real-time revenue & ticket sales',
  'Audience demographics & insights',
  'Multi-gate QR scanning',
  'Marketing & promo tools',
  'Team access & permissions',
  'Automated payout reporting',
];

const OrganizerExperience = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="organizers" className="section-padding relative overflow-hidden" aria-labelledby="organizers-heading">
      <div className="absolute inset-0 bg-gradient-radial from-primary/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal direction="left" className="order-2 lg:order-1">
            <motion.div
              className="relative rounded-container border border-white/[0.08] bg-gradient-to-br from-surface-panel to-surface overflow-hidden shadow-premium-lg"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent pointer-events-none" />
              <div className="aspect-[16/11] min-h-[380px]">
                <OrganizerDashboard />
              </div>
            </motion.div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeader
              align="left"
              eyebrow="For Organizers"
              title="Enterprise power. Startup speed."
              description="Launch events, sell out faster, and check in thousands — from a dashboard that feels as refined as the experiences you create."
              className="mb-10 md:mb-12"
            />

            <ul className="space-y-4 mb-10">
              {capabilities.map((item, i) => (
                <Reveal key={item} delay={i * 0.06} direction="right">
                  <motion.li 
                    className="flex items-center gap-4 text-body text-gray-300 group"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-sm border border-primary/20 group-hover:bg-primary/25 group-hover:border-primary/40 transition-all duration-300">✓</span>
                    {item}
                  </motion.li>
                </Reveal>
              ))}
            </ul>

            <Button variant="primary">Start Organizing</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizerExperience;
