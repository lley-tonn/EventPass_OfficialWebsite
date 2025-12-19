import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Hero from '../components/Hero';
import UpcomingEvents from '../components/UpcomingEvents';
import WhyCinQ from '../components/WhyCinQ';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
      className="bg-black"
    >
      <Hero />
      <UpcomingEvents />
      <WhyCinQ />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default Home;
