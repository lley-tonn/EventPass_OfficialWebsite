import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import WhyEventPass from '../components/WhyEventPass';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black pt-20"
    >
      <Hero />
      <WhyEventPass />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default Home;
