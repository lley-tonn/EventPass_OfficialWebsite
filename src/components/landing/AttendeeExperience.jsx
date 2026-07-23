import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import PhoneMockup from '../ui/PhoneMockup';
import AttendeeAppScreen from '../product/AttendeeAppScreen';
import QRTicketPreview from '../product/QRTicketPreview';
import Reveal from '../ui/Reveal';

const highlights = [
  { title: 'Discover', desc: 'Curated events by taste & location' },
  { title: 'Wallet', desc: 'All tickets in one secure place' },
  { title: 'Pay', desc: 'MoMo, Airtel & cards in seconds' },
  { title: 'Enter', desc: 'QR scan — no queues, no stress' },
];

const AttendeeExperience = () => (
  <section id="attendees" className="section-padding relative bg-surface-raised/30 overflow-hidden" aria-labelledby="attendees-heading">
    <div className="absolute inset-0 bg-gradient-radial from-primary/[0.04] via-transparent to-transparent pointer-events-none" />
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" aria-hidden="true" />

    <div className="container relative">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeader
            align="left"
            eyebrow="For Attendees"
            title="Your events. One beautiful app."
            description="From discovery to door — buy tickets, store them securely, and walk in with confidence. Built for how Africa moves."
            className="mb-10 md:mb-12"
          />

          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <motion.div 
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5 hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300 group"
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <p className="text-card-title font-semibold text-white mb-1 group-hover:text-primary transition-colors">{item.title}</p>
                  <p className="text-meta text-gray-500">{item.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Button variant="primary">Explore Events</Button>
        </div>

        <div className="relative flex justify-center min-h-[520px]">
          <PhoneMockup className="relative z-10" rotate={-4} delay={0.1}>
            <AttendeeAppScreen />
          </PhoneMockup>
          <motion.div 
            className="absolute right-0 top-16 z-20 scale-[0.85] origin-top-right hidden sm:block"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhoneMockup rotate={8} delay={0.3} float={true}>
              <QRTicketPreview />
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default AttendeeExperience;
