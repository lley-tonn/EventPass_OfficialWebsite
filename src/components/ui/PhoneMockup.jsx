import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const screens = {
  discover: (
    <div className="flex h-full flex-col bg-[#0d0d0f] p-3 pt-8">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-semibold text-white">Discover</span>
        <div className="h-5 w-5 rounded-full bg-amber/20" />
      </div>
      <div className="mb-3 h-7 rounded-lg bg-white/5 px-2 flex items-center">
        <span className="text-[8px] text-zinc-500">Search events in Kampala...</span>
      </div>
      <div className="mb-2 flex gap-1.5 overflow-hidden">
        {['Music', 'Sports', 'Comedy'].map((c) => (
          <span key={c} className="shrink-0 rounded-full bg-amber/15 px-2 py-0.5 text-[7px] text-amber">{c}</span>
        ))}
      </div>
      <div className="space-y-2 flex-1">
        {[
          { title: 'Blankets & Wine', color: 'from-amber/30 to-orange-900/40' },
          { title: 'Tech Summit', color: 'from-blue-900/40 to-purple-900/30' },
        ].map((e) => (
          <div key={e.title} className={`rounded-lg bg-gradient-to-br ${e.color} p-2`}>
            <p className="text-[9px] font-semibold text-white">{e.title}</p>
            <p className="text-[7px] text-zinc-400">Aug 15 · UGX 80K</p>
          </div>
        ))}
      </div>
    </div>
  ),
  ticket: (
    <div className="flex h-full flex-col bg-[#0d0d0f] p-3 pt-8">
      <p className="mb-1 text-[10px] font-semibold text-white">My Ticket</p>
      <p className="mb-3 text-[8px] text-zinc-500">Blankets & Wine Kampala</p>
      <div className="flex-1 rounded-xl border border-amber/20 bg-gradient-to-b from-amber/10 to-transparent p-3">
        <div className="mx-auto mb-2 h-16 w-16 rounded-lg bg-white p-1">
          <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-px bg-black">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className={i % 3 === 0 ? 'bg-black' : 'bg-white'} />
            ))}
          </div>
        </div>
        <p className="text-center text-[8px] font-mono text-amber">EP-2026-8847</p>
        <div className="mt-2 border-t border-dashed border-white/10 pt-2">
          <p className="text-[7px] text-zinc-400">General Admission · Gate A</p>
        </div>
      </div>
    </div>
  ),
  wallet: (
    <div className="flex h-full flex-col bg-[#0d0d0f] p-3 pt-8">
      <p className="mb-3 text-[10px] font-semibold text-white">Wallet</p>
      <div className="mb-3 rounded-xl bg-gradient-to-br from-amber to-amber-600 p-3">
        <p className="text-[8px] text-black/60">Balance</p>
        <p className="text-sm font-bold text-black">UGX 0</p>
      </div>
      <p className="mb-2 text-[8px] text-zinc-500">Saved Tickets (2)</p>
      {['Blankets & Wine', 'Tech Summit'].map((t) => (
        <div key={t} className="mb-1.5 flex items-center gap-2 rounded-lg bg-white/5 p-2">
          <div className="h-6 w-6 rounded bg-amber/20" />
          <div>
            <p className="text-[8px] font-medium text-white">{t}</p>
            <p className="text-[7px] text-zinc-500">Valid</p>
          </div>
        </div>
      ))}
    </div>
  ),
};

export default function PhoneMockup({ variant = 'discover', className = '', style = {} }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`phone-frame w-[160px] sm:w-[180px] ${className}`}
      style={style}
      animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
      transition={prefersReducedMotion ? {} : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="phone-notch" aria-hidden="true" />
      <div className="phone-screen aspect-[9/19]">{screens[variant] || screens.discover}</div>
    </motion.div>
  );
}

export function DashboardMockup({ className = '' }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0f] shadow-premium ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs text-zinc-500">Organizer Dashboard</span>
      </div>
      <div className="p-4">
        <div className="mb-4 grid grid-cols-3 gap-3">
          {[
            { label: 'Revenue', value: 'UGX 12.4M' },
            { label: 'Tickets Sold', value: '2,847' },
            { label: 'Check-ins', value: '98.2%' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-white/[0.03] p-3">
              <p className="text-[10px] text-zinc-500">{s.label}</p>
              <p className="text-sm font-semibold text-white">{s.value}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-white/[0.03] p-4">
          <p className="mb-3 text-xs text-zinc-400">Ticket Sales — Last 7 Days</p>
          <div className="flex h-24 items-end gap-1.5">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-amber/60 to-amber/20"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/[0.03] p-3">
            <p className="text-[10px] text-zinc-500">Live Attendees</p>
            <p className="text-lg font-bold text-amber">1,204</p>
          </div>
          <div className="rounded-xl bg-white/[0.03] p-3">
            <p className="text-[10px] text-zinc-500">Scanner Status</p>
            <p className="text-sm font-semibold text-green-400">● Online</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function QRTicketCard({ className = '' }) {
  return (
    <div className={`card-gradient-border p-4 ${className}`}>
      <div className="relative z-10">
        <p className="text-xs font-semibold text-white">Digital Ticket</p>
        <p className="mb-3 text-[10px] text-zinc-500">Nyege Nyege Festival</p>
        <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-xl bg-white p-1.5">
          <div className="grid h-full w-full grid-cols-5 grid-rows-5 gap-px">
            {Array.from({ length: 25 }).map((_, i) => (
              <div key={i} className={i % 2 === 0 ? 'bg-black' : 'bg-white'} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-zinc-400">VIP Access</span>
          <span className="font-mono text-amber">VALID</span>
        </div>
      </div>
    </div>
  );
}
