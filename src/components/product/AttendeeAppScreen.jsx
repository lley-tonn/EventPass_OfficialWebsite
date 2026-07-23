const AttendeeAppScreen = () => (
  <div className="flex h-full flex-col bg-surface text-white text-[10px] leading-tight">
    <div className="flex items-center justify-between px-3 pt-8 pb-2">
      <span className="font-semibold text-[11px]">Discover</span>
      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
        <span className="text-primary text-[8px]">🔔</span>
      </div>
    </div>
    <div className="mx-3 mb-3 rounded-lg bg-white/5 px-2 py-1.5 text-gray-500">Search events near you...</div>
    <div className="flex gap-1.5 px-3 mb-3 overflow-hidden">
      {['All', 'Music', 'Sports', 'Comedy'].map((cat, i) => (
        <span
          key={cat}
          className={`shrink-0 rounded-full px-2 py-0.5 text-[8px] ${i === 0 ? 'bg-primary text-black font-semibold' : 'bg-white/5 text-gray-400'}`}
        >
          {cat}
        </span>
      ))}
    </div>
    <div className="flex-1 space-y-2 px-3 pb-3 overflow-hidden">
      {[
        { title: 'Kampala Music Festival', date: 'Mar 15', price: 'UGX 50K', gradient: 'from-amber-900/60 to-orange-950/80' },
        { title: 'Tech Innovation Summit', date: 'Mar 22', price: 'UGX 75K', gradient: 'from-slate-800/60 to-zinc-900/80' },
      ].map((event) => (
        <div key={event.title} className="rounded-lg overflow-hidden border border-white/5">
          <div className={`h-14 bg-gradient-to-br ${event.gradient} relative`}>
            <span className="absolute bottom-1 left-2 text-[8px] font-medium bg-black/50 px-1 rounded">{event.date}</span>
          </div>
          <div className="p-2 bg-surface-panel">
            <p className="font-semibold text-[9px] truncate">{event.title}</p>
            <p className="text-primary text-[8px] font-medium mt-0.5">{event.price}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-around border-t border-white/5 py-2 text-[8px] text-gray-500">
      {['Home', 'Search', 'Tickets', 'Profile'].map((tab, i) => (
        <span key={tab} className={i === 0 ? 'text-primary font-medium' : ''}>{tab}</span>
      ))}
    </div>
  </div>
);

export default AttendeeAppScreen;
