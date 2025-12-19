import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black pt-20"
    >
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-h1 font-semibold text-white"
        >
          Privacy Policy
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 rounded-3xl border border-white/5 bg-[#0f0f0f]/90 p-8 text-body text-gray-400 shadow-soft-glow"
        >
          <p className="text-label uppercase tracking-[0.3em] text-gray-500">Last updated: January 2024</p>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, purchase tickets, or contact us for support. This may include your name, email address, phone number, payment information, and event preferences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc space-y-1 pl-5 text-body text-gray-400">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">5. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. You may also object to or restrict certain processing of your information. To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">6. Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">8. Contact Us</h2>
            <p>If you have any questions about this privacy policy, please contact us at:</p>
            <ul className="list-disc space-y-1 pl-5 text-body text-gray-400">
              <li>Email: privacy@cinq.ug</li>
              <li>Phone: +256 123 456 789</li>
              <li>Address: Kampala, Uganda</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
