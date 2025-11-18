import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About EventPass UG
        </motion.h1>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
            <p className="text-lg mb-6">
              To revolutionize event ticketing in Uganda by providing a seamless, secure, and user-friendly platform that connects event enthusiasts with unforgettable experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4 text-primary">What Makes Us Different</h2>
            <ul className="list-disc list-inside space-y-2 text-lg">
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
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-4 text-primary">Security & Reliability</h2>
            <p className="text-lg mb-6">
              Your security is our top priority. We use industry-standard encryption for all transactions and data storage. Our platform is built to handle high traffic and ensure 99.9% uptime for your events.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-primary">Payments Overview</h2>
            <p className="text-lg mb-6">
              We support multiple payment methods to make ticket purchasing as easy as possible. Whether you prefer mobile money or card payments, we've got you covered with secure, instant transactions.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
