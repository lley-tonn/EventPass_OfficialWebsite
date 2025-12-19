import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const navButtonClasses =
  'rounded-lg border border-primary/60 bg-primary px-4 py-2 text-button font-semibold uppercase tracking-[0.2em] text-black transition-opacity duration-200 hover:bg-primary/90 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/features', label: 'Features' },
  { to: '/faqs', label: 'FAQ' },
  { to: '/help-center', label: 'Help Center' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') closeMenu();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const menuElement = menuRef.current;
    if (!menuElement) return;

    const focusableElements = menuElement.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    menuElement.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      menuElement.removeEventListener('keydown', handleTabKey);
    };
  }, [isMenuOpen]);

  const navAnimation = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeOut' },
  };

  return (
    <motion.nav
      {...navAnimation}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <div className="floating-navbar w-full max-w-7xl">
        <div className="flex h-14 md:h-16 items-center justify-between px-4 md:px-6">
          <Link 
            to="/" 
            className="text-nav font-semibold uppercase tracking-[0.3em] text-primary transition-opacity duration-200 hover:opacity-80"
          >
            CinQ UG
          </Link>
          <div className="hidden md:flex items-center space-x-8 text-nav font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.to} 
                to={link.to} 
                className="text-gray-300 transition-opacity duration-200 hover:text-white hover:opacity-100 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-3">
            <motion.button 
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className={navButtonClasses}
            >
              Android
            </motion.button>
            <motion.button 
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className={navButtonClasses}
            >
              iOS
            </motion.button>
          </div>
          <motion.button
            type="button"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="md:hidden rounded-full border border-white/10 p-2 text-white transition-opacity duration-200 hover:border-primary/60 hover:text-primary hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <motion.path
                d="M4 7H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={isMenuOpen ? { d: "M18 6L6 18", opacity: 1 } : { d: "M4 7H20", opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                d="M4 12H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.path
                d="M4 17H20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={isMenuOpen ? { d: "M6 6L18 18", opacity: 1 } : { d: "M4 17H20", opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden fixed inset-0 z-40 glass-navbar-backdrop"
            />
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-gradient-to-br from-[#0a0a0a] via-black to-[#0a0a0a] border-l border-primary/20 shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Header with Close Button */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-white/5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-h3 font-bold uppercase tracking-[0.3em] text-primary"
                >
                  Menu
                </motion.div>
                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="rounded-full border border-white/10 p-2.5 text-white transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary hover:rotate-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto px-8 py-10">
                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={link.to}
                        onClick={closeMenu}
                        className="group relative block overflow-hidden rounded-xl bg-white/[0.02] px-6 py-4 text-left transition-all duration-300 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-primary/5"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute left-0 top-0 h-full w-1 bg-primary scale-y-0 transition-transform duration-300 group-hover:scale-y-100 origin-top" />
                        <div className="relative flex items-center justify-between">
                          <span className="text-nav font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
                            {link.label}
                          </span>
                          <svg
                            className="h-5 w-5 text-gray-600 transition-all duration-300 group-hover:text-primary group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Footer with Download Buttons */}
              <motion.div
                className="border-t border-white/5 px-8 py-6 space-y-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <p className="text-label uppercase tracking-[0.2em] text-gray-500 mb-4">Download App</p>
                <button
                  className="w-full rounded-xl border border-primary/60 bg-primary px-6 py-3.5 text-button font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-95"
                  onClick={closeMenu}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.523 15.341l-.003-.003-2.262-2.262c-.338-.34-.874-.34-1.213 0-.339.34-.339.876 0 1.215l.67.67H9.307c-.47 0-.851.382-.851.853 0 .471.38.853.851.853h5.408l-.67.67c-.339.34-.339.876 0 1.215.17.17.393.255.617.255.223 0 .447-.085.617-.255l2.262-2.262.003-.003c.169-.17.256-.393.256-.617 0-.224-.087-.447-.257-.617zM8.676 8.66l.003.002 2.262 2.262c.17.17.394.255.617.255.223 0 .447-.085.617-.255.339-.34.339-.876 0-1.215l-.67-.67h5.408c.47 0 .851-.382.851-.853 0-.471-.38-.853-.851-.853H11.505l.67-.67c.339-.34.339-.876 0-1.215-.338-.34-.874-.34-1.213 0l-2.262 2.262-.003.003c-.17.17-.257.393-.257.617 0 .224.087.447.257.617z"/>
                    </svg>
                    Android
                  </div>
                </button>
                <button
                  className="w-full rounded-xl border border-primary/40 bg-transparent px-6 py-3.5 text-button font-bold uppercase tracking-[0.15em] text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] active:scale-95"
                  onClick={closeMenu}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    iOS
                  </div>
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
