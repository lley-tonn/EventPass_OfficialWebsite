import React from 'react';
import { motion } from 'framer-motion';

const TermsOfUse = () => {
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
          Terms of Use
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 rounded-3xl border border-white/5 bg-[#0f0f0f]/90 p-8 text-body text-gray-400 shadow-soft-glow"
        >
          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing and using CinQ UG, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on CinQ UG for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">3. Disclaimer</h2>
            <p>
              The materials on CinQ UG are provided on an 'as is' basis. CinQ UG makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">4. Limitations</h2>
            <p>
              In no event shall CinQ UG or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CinQ UG, even if CinQ UG or a CinQ UG authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on CinQ UG could include technical, typographical, or photographic errors. CinQ UG does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">6. Links</h2>
            <p>
              CinQ UG has not reviewed all of the sites linked to its Internet website and is not responsible for the contents of any such linked site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">7. Modifications</h2>
            <p>
              CinQ UG may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-h3 font-semibold text-white">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Uganda and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TermsOfUse;
