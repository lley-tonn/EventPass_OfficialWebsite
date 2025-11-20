import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">EventPass UG</h3>
            <p className="text-sm text-gray-500">
              The modern mobile ticketing platform for Uganda. Discover, buy, and enjoy events seamlessly.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-500 transition-colors duration-200 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-500 transition-colors duration-200 hover:text-white">About</Link></li>
              <li><Link to="/features" className="text-gray-500 transition-colors duration-200 hover:text-white">Features</Link></li>
              <li><Link to="/faq" className="text-gray-500 transition-colors duration-200 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-gray-500 transition-colors duration-200 hover:text-white">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-500 transition-colors duration-200 hover:text-white">Contact Support</Link></li>
              <li><Link to="/terms" className="text-gray-500 transition-colors duration-200 hover:text-white">Terms of Use</Link></li>
              <li><Link to="/privacy" className="text-gray-500 transition-colors duration-200 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-white">Connect</h4>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-500 transition-colors duration-200 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-500 transition-colors duration-200 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-500 transition-colors duration-200 hover:text-white">Instagram</a>
            </div>
            <p className="mt-4 text-sm text-gray-500">support@eventpass.ug</p>
            <p className="text-sm text-gray-500">+256 123 456 789</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs uppercase tracking-[0.3em] text-gray-600">
          <p>&copy; 2024 EventPass UG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
