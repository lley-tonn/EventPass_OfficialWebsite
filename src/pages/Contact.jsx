import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import FacebookIcon from '../assets/facebook_icon.svg';
import XIcon from '../assets/x_icon.svg';
import InstagramIcon from '../assets/instagram_icon.svg';
import TikTokIcon from '../assets/tiktok_icon.svg';

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com',
      icon: FacebookIcon,
      ariaLabel: 'Visit our Facebook page',
    },
    {
      name: 'X (Twitter)',
      url: 'https://twitter.com',
      icon: XIcon,
      ariaLabel: 'Visit our X (Twitter) page',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: InstagramIcon,
      ariaLabel: 'Visit our Instagram page',
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com',
      icon: TikTokIcon,
      ariaLabel: 'Visit our TikTok page',
    },
  ];

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
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={prefersReducedMotion || isSubmitting ? {} : { scale: 1.02 }}
              whileTap={prefersReducedMotion || isSubmitting ? {} : { scale: 0.98 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="w-full rounded-xl border border-primary/60 bg-primary py-3 text-button font-semibold tracking-wide text-black transition-opacity duration-200 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2, delay: 0.4 }}
            className="mt-12 text-center text-gray-400"
          >
            <h2 className="text-h2 font-semibold text-white mb-4">Other Ways to Reach Us</h2>
            <div className="space-y-2 text-body">
              <p>
                <span className="text-gray-500">Email:</span>{' '}
                <a href="mailto:support@cinq.ug" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  support@cinq.ug
                </a>
              </p>
              <p>
                <span className="text-gray-500">Phone:</span>{' '}
                <a href="tel:+256123456789" className="text-gray-400 hover:text-primary transition-colors duration-200">
                  +256 123 456 789
                </a>
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="mt-8">
              <h3 className="text-h3 font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex justify-center items-center gap-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <img 
                      src={social.icon} 
                      alt="" 
                      className="w-8 h-8 brightness-0 invert" 
                      aria-hidden="true"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
