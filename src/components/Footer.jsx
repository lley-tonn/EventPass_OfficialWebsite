import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">EventPass UG</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              The modern mobile ticketing platform for Uganda. Discover, buy, and enjoy events seamlessly.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-gray-500 transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link to="/about" className="text-gray-500 transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block">About</Link></li>
              <li><Link to="/features" className="text-gray-500 transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block">Features</Link></li>
              <li><Link to="/faqs" className="text-gray-500 transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/help-center" className="text-gray-500 transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-500 transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block">Contact Support</Link></li>
              <li><Link to="/terms-of-use" className="text-gray-500 transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block">Terms of Use</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-500 transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white">Connect</h4>
            <div className="flex space-x-5 text-sm mb-5">
              <a href="#" className="text-gray-500 transition-all duration-200 hover:text-primary hover:-translate-y-0.5">Facebook</a>
              <a href="#" className="text-gray-500 transition-all duration-200 hover:text-primary hover:-translate-y-0.5">Twitter</a>
              <a href="#" className="text-gray-500 transition-all duration-200 hover:text-primary hover:-translate-y-0.5">Instagram</a>
            </div>
            <p className="text-sm text-gray-500 mb-1.5 transition-colors duration-200 hover:text-gray-300">support@eventpass.ug</p>
            <p className="text-sm text-gray-500 transition-colors duration-200 hover:text-gray-300">+256 123 456 789</p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs uppercase tracking-[0.3em] text-gray-600">
          <p>&copy; 2024 EventPass UG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
