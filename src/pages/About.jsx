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
          className="mb-12 text-center text-3xl font-semibold text-white md:text-4xl"
        >
          About EventPass UG
        </motion.h1>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 rounded-2xl border border-white/5 bg-[#0f0f0f]/80 p-6 text-gray-300 shadow-soft-glow"
          >
            <h2 className="mb-3 text-base font-semibold uppercase tracking-[0.3em] text-gray-400">Our Mission</h2>
            <p className="text-sm leading-relaxed text-gray-400">
              To revolutionize event ticketing in Uganda by providing a seamless, secure, and user-friendly platform that connects event enthusiasts with unforgettable experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 rounded-2xl border border-white/5 bg-[#0f0f0f]/80 p-6 text-gray-300 shadow-soft-glow"
          >
            <h2 className="mb-4 text-base font-semibold uppercase tracking-[0.3em] text-gray-400">What Makes Us Different</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-400">
              <li>Mobile-first design optimized for African markets</li>
              <li>Support for local payment methods (MTN MoMo, Airtel Money)</li>
              <li>QR-based verification for fast, reliable entry</li>
              <li>Real-time analytics for event organizers</li>
              <li>Built with scalability and reliability in mind</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12 rounded-2xl border border-white/5 bg-[#0f0f0f]/80 p-6 text-gray-300 shadow-soft-glow"
          >
            <h2 className="mb-3 text-base font-semibold uppercase tracking-[0.3em] text-gray-400">Security & Reliability</h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Your security is our top priority. We use industry-standard encryption for all transactions and data storage. Our platform is built to handle high traffic and ensure 99.9% uptime for your events.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="rounded-2xl border border-white/5 bg-[#0f0f0f]/80 p-6 text-gray-300 shadow-soft-glow"
          >
            <h2 className="mb-3 text-base font-semibold uppercase tracking-[0.3em] text-gray-400">Payments Overview</h2>
            <p className="text-sm leading-relaxed text-gray-400">
              We support multiple payment methods to make ticket purchasing as easy as possible. Whether you prefer mobile money or card payments, we've got you covered with secure, instant transactions.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
