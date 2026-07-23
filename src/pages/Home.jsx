import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Hero from '../components/landing/Hero';
import TrustSection from '../components/landing/TrustSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import OrganizerExperience from '../components/landing/OrganizerExperience';
import AttendeeExperience from '../components/landing/AttendeeExperience';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
      className="bg-surface"
    >
      <Hero />
      <TrustSection />
      <FeaturesSection />
      <OrganizerExperience />
      <AttendeeExperience />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default Home;
