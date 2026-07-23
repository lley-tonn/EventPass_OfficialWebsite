import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BRAND, STATS } from '../../constants/brand';
import Button from '../ui/Button';
import AnimatedCounter from '../ui/AnimatedCounter';
import PhoneMockup from '../ui/PhoneMockup';
import AttendeeAppScreen from '../product/AttendeeAppScreen';
import QRTicketPreview from '../product/QRTicketPreview';
import OrganizerDashboard from '../product/OrganizerDashboard';

const StoreBadge = ({ platform }) => (
  <motion.button
    type="button"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center gap-3 rounded-button border border-white/10 bg-white/[0.04] backdrop-blur-sm px-5 py-3 text-left transition-all duration-300 hover:bg-white/[0.08] hover:border-primary/30 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    aria-label={`Download EventPass for ${platform}`}
  >
    <span className="text-2xl" aria-hidden="true">{platform === 'Android' ? '▶' : ''}</span>
    <span>
      <span className="block text-[10px] text-gray-500 leading-none tracking-wider">GET IT ON</span>
      <span className="block text-meta font-semibold text-white">{platform === 'Android' ? 'Google Play' : 'App Store'}</span>
    </span>
  </motion.button>
);

const FloatingCard = ({ children, className = '', delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className={`absolute rounded-xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-card p-4 ${className}`}
      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -4 }}
      transition={{ delay: delay + 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative min-h-screen overflow-hidden pt-32 pb-24 md:pt-40"
      aria-label="Hero section"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80&auto=format&fit=crop')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/95 via-surface/90 to-surface" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent opacity-80" style={{ backgroundPosition: '60% 30%' }} />
        <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-surface to-transparent" />
        {/* Ambient glow effects */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-[30%] right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm px-5 py-2 text-label uppercase tracking-[0.2em] text-primary mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
              {BRAND.tagline}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display font-bold text-white mb-6 leading-tight"
            >
              Power every{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">
                unforgettable
              </span>{' '}
              moment.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body text-gray-400 mb-10 max-w-lg leading-relaxed"
            >
              {BRAND.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button ariaLabel="Download EventPass">Get the App</Button>
              <Button variant="secondary" ariaLabel="Watch EventPass demo">
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <StoreBadge platform="Android" />
              <StoreBadge platform="iOS" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/5"
              aria-label="Platform statistics"
            >
              {STATS.slice(0, 4).map((stat) => (
                <div key={stat.label}>
                  <p className="text-h2 font-bold text-white">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </p>
                  <p className="text-meta text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Product showcase */}
          <div className="relative hidden lg:block min-h-[700px]">
            <PhoneMockup className="absolute left-0 top-12 z-10" rotate={-6} delay={0.2}>
              <AttendeeAppScreen />
            </PhoneMockup>

            <PhoneMockup className="absolute right-0 top-20 z-20" rotate={4} delay={0.4} float={!prefersReducedMotion}>
              <QRTicketPreview />
            </PhoneMockup>

            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] rounded-card border border-white/10 bg-black/70 backdrop-blur-xl shadow-phone overflow-hidden z-0"
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <OrganizerDashboard />
            </motion.div>

            <FloatingCard className="-left-8 top-40 z-30" delay={0.8}>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Check-in speed</p>
                  <p className="text-sm font-bold text-primary">&lt; 0.8s</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="right-8 bottom-32 z-30" delay={1}>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Tonight&apos;s sales</p>
                  <p className="text-sm font-bold text-white">+847 tickets</p>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
