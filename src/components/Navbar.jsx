import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white dark:bg-black bg-opacity-90 backdrop-blur-md z-50 shadow-lg"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          EventPass UG
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/features" className="hover:text-primary transition-colors">Features</Link>
          <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          <Link to="/help" className="hover:text-primary transition-colors">Help Center</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <div className="flex space-x-2">
          <button className="bg-primary text-white px-4 py-2 rounded-lg glow hover:scale-105 transition-transform">
            Download Android
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg glow hover:scale-105 transition-transform">
            Download iOS
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
