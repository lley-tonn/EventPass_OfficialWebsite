import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS, BRAND } from '../constants/brand';
import FacebookIcon from '../assets/facebook_icon.svg';
import XIcon from '../assets/x_icon.svg';
import InstagramIcon from '../assets/instagram_icon.svg';
import TikTokIcon from '../assets/tiktok_icon.svg';

const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/[0.04] text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-nav font-bold uppercase tracking-[0.25em] text-primary">EventPass</h3>
            <p className="text-body text-gray-500 leading-relaxed mb-6 max-w-sm">
              The Operating System for Events. Discover, sell, scan, and grow — all from one premium platform built for Africa.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                <img src={FacebookIcon} alt="" className="w-5 h-5 brightness-0 invert" aria-hidden="true" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our X (Twitter) page"
                className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                <img src={XIcon} alt="" className="w-5 h-5 brightness-0 invert" aria-hidden="true" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
                className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                <img src={InstagramIcon} alt="" className="w-5 h-5 brightness-0 invert" aria-hidden="true" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our TikTok page"
                className="h-10 w-10 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
              >
                <img src={TikTokIcon} alt="" className="w-5 h-5 brightness-0 invert" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="mb-5 text-label font-semibold uppercase tracking-[0.2em] text-white">Product</h4>
            <ul className="space-y-3 text-body">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-500 transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="mb-5 text-label font-semibold uppercase tracking-[0.2em] text-white">Solutions</h4>
            <ul className="space-y-3 text-body">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-500 transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="mb-5 text-label font-semibold uppercase tracking-[0.2em] text-white">Company</h4>
            <ul className="space-y-3 text-body mb-6">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-500 transition-all duration-300 hover:text-primary hover:translate-x-1 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <a href={`mailto:${BRAND.email}`} className="text-body text-gray-500 block transition-colors duration-300 hover:text-primary">
                {BRAND.email}
              </a>
              <a href={`tel:${BRAND.phone}`} className="text-body text-gray-500 block transition-colors duration-300 hover:text-primary">
                {BRAND.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/[0.04] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-label uppercase tracking-[0.2em] text-gray-600">
              &copy; 2024 EventPass. All rights reserved.
            </p>
            <div className="flex gap-6 text-body">
              <Link to="/terms-of-use" className="text-gray-600 transition-colors duration-300 hover:text-gray-400">
                Terms
              </Link>
              <Link to="/privacy-policy" className="text-gray-600 transition-colors duration-300 hover:text-gray-400">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
