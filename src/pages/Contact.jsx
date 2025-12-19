import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
    setSubmitSuccess(false);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

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
          Contact Support
        </motion.h1>
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/5 bg-[#0f0f0f]/90 p-8 shadow-soft-glow"
          >
            {submitSuccess && (
              <div className="mb-6 rounded-xl bg-green-500/10 border border-green-500/30 px-4 py-3 text-body text-green-400">
                Thank you for your message! We will get back to you soon.
              </div>
            )}
            <div className="mb-6">
              <label htmlFor="name" className="block text-meta font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                aria-required="true"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={`w-full rounded-xl border px-4 py-2.5 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? 'border-red-500/50 bg-white/5 focus:border-red-500/50 focus:ring-red-500/20'
                    : 'border-white/5 bg-white/5 focus:border-white/40 focus:ring-white/20'
                }`}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-label text-red-400" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-meta font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={`w-full rounded-xl border px-4 py-2.5 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'border-red-500/50 bg-white/5 focus:border-red-500/50 focus:ring-red-500/20'
                    : 'border-white/5 bg-white/5 focus:border-white/40 focus:ring-white/20'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-label text-red-400" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-meta font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                required
                aria-required="true"
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                rows={6}
                className={`w-full rounded-2xl border px-4 py-3 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${
                  errors.message
                    ? 'border-red-500/50 bg-white/5 focus:border-red-500/50 focus:ring-red-500/20'
                    : 'border-white/5 bg-white/5 focus:border-white/40 focus:ring-white/20'
                }`}
              ></textarea>
              {errors.message && (
                <p id="message-error" className="mt-1 text-label text-red-400" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl border border-primary/60 bg-primary py-3 text-button font-semibold tracking-wide text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-soft-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-gray-400"
          >
            <h2 className="text-h2 font-semibold text-white mb-4">Other Ways to Reach Us</h2>
            <div className="space-y-2 text-body">
              <p>
                <span className="text-gray-500">Email:</span>{' '}
                <a href="mailto:support@cinq.ug" className="text-gray-400 hover:text-primary transition-colors">
                  support@cinq.ug
                </a>
              </p>
              <p>
                <span className="text-gray-500">Phone:</span>{' '}
                <a href="tel:+256123456789" className="text-gray-400 hover:text-primary transition-colors">
                  +256 123 456 789
                </a>
              </p>
              <div className="mt-4 flex justify-center space-x-4 text-body">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors hover:text-primary">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors hover:text-primary">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors hover:text-primary">Instagram</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
