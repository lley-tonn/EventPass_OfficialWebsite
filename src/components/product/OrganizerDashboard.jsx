const OrganizerDashboard = ({ compact = false }) => (
  <div className={`flex h-full flex-col bg-[#0d0d10] text-white ${compact ? 'text-[8px]' : 'text-[10px]'}`}>
    <div className={`flex items-center justify-between border-b border-white/5 ${compact ? 'px-2 py-2 pt-4' : 'px-4 py-3 pt-6'}`}>
      <div>
        <p className="text-gray-500 text-[8px] uppercase tracking-wider">Dashboard</p>
        <p className={`font-semibold ${compact ? 'text-[9px]' : 'text-[11px]'}`}>Kampala Music Festival</p>
      </div>
      <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-green-400 text-[8px] font-medium">Live</span>
    </div>
    <div className={`grid grid-cols-3 gap-2 ${compact ? 'p-2' : 'p-3'}`}>
      {[
        { label: 'Revenue', value: 'UGX 24.5M', change: '+12%' },
        { label: 'Sold', value: '1,842', change: '+8%' },
        { label: 'Checked In', value: '1,203', change: '65%' },
      ].map((stat) => (
        <div key={stat.label} className="rounded-lg bg-white/[0.03] border border-white/5 p-2">
          <p className="text-gray-500 text-[7px]">{stat.label}</p>
          <p className={`font-semibold text-primary ${compact ? 'text-[8px]' : 'text-[10px]'}`}>{stat.value}</p>
          <p className="text-green-400 text-[7px]">{stat.change}</p>
        </div>
      ))}
    </div>
    <div className={`flex-1 ${compact ? 'px-2 pb-2' : 'px-3 pb-3'}`}>
      <p className="text-gray-500 text-[8px] mb-1.5">Ticket Sales — Last 7 days</p>
      <div className="flex items-end gap-1 h-16 rounded-lg bg-white/[0.02] border border-white/5 p-2">
        {[40, 55, 35, 70, 60, 85, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-primary/80 to-primary/30"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-2 space-y-1">
        {['VIP — 420 sold', 'General — 1,422 sold'].map((row) => (
          <div key={row} className="flex justify-between rounded bg-white/[0.02] px-2 py-1 text-[8px]">
            <span className="text-gray-400">{row.split(' — ')[0]}</span>
            <span className="text-white font-medium">{row.split(' — ')[1]}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OrganizerDashboard;
