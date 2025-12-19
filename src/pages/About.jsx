import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-h1 font-semibold text-white"
        >
          About CinQ UG
        </motion.h1>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.01,
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 165, 0, 0.1)'
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 rounded-2xl border border-white/5 bg-[#0f0f0f]/80 p-8 text-gray-300 shadow-soft-glow hover:border-white/15 transition-all cursor-pointer"
          >
            <h2 className="mb-4 text-h3 font-semibold uppercase tracking-[0.3em] text-gray-400">Our Mission</h2>
            <p className="text-body leading-relaxed text-gray-400">
              To revolutionize event ticketing in Uganda by providing a seamless, secure, and user-friendly platform that connects event enthusiasts with unforgettable experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.01,
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 165, 0, 0.1)'
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 rounded-2xl border border-white/5 bg-[#0f0f0f]/80 p-8 text-gray-300 shadow-soft-glow hover:border-white/15 transition-all cursor-pointer"
          >
            <h2 className="mb-4 text-h3 font-semibold uppercase tracking-[0.3em] text-gray-400">What Makes Us Different</h2>
            <ul className="space-y-3 text-body text-gray-400">
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Mobile-first design optimized for African markets</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Support for local payment methods (MTN MoMo, Airtel Money)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>QR-based verification for fast, reliable entry</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Real-time analytics for event organizers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Built with scalability and reliability in mind</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.01,
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 165, 0, 0.1)'
            }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12 rounded-2xl border border-white/5 bg-[#0f0f0f]/80 p-8 text-gray-300 shadow-soft-glow hover:border-white/15 transition-all cursor-pointer"
          >
            <h2 className="mb-4 text-h3 font-semibold uppercase tracking-[0.3em] text-gray-400">Security & Reliability</h2>
            <p className="text-body leading-relaxed text-gray-400">
              Your security is our top priority. We use industry-standard encryption for all transactions and data storage. Our platform is built to handle high traffic and ensure 99.9% uptime for your events.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.01,
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 165, 0, 0.1)'
            }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="rounded-2xl border border-white/5 bg-[#0f0f0f]/80 p-8 text-gray-300 shadow-soft-glow hover:border-white/15 transition-all cursor-pointer"
          >
            <h2 className="mb-4 text-h3 font-semibold uppercase tracking-[0.3em] text-gray-400">Payments Overview</h2>
            <p className="text-body leading-relaxed text-gray-400">
              We support multiple payment methods to make ticket purchasing as easy as possible. Whether you prefer mobile money or card payments, we've got you covered with secure, instant transactions.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
