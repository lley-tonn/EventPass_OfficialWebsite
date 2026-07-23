import React from 'react';

export default function StoreBadges({ className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="#download"
        aria-label="Download EventPass on Google Play"
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 transition-all duration-300 hover:border-amber/30 hover:bg-white/[0.06]"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor" aria-hidden="true">
          <path d="M3.6 1.8l10.2 10.2L3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1zM14.4 12L4.2 22.2l11.5-6.6c.5-.3.8-.8.8-1.4s-.3-1.1-.8-1.4L4.2 1.8 14.4 12zm1.8 1.04l3.6 2.08c.8.46.8 1.62 0 2.08l-3.6 2.08V13.04z" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500">Get it on</p>
          <p className="text-sm font-semibold text-white">Google Play</p>
        </div>
      </a>
      <a
        href="#download"
        aria-label="Download EventPass on the App Store"
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 transition-all duration-300 hover:border-amber/30 hover:bg-white/[0.06]"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500">Download on the</p>
          <p className="text-sm font-semibold text-white">App Store</p>
        </div>
      </a>
    </div>
  );
}
