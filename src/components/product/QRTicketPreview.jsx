const QRTicketPreview = () => (
  <div className="flex h-full flex-col bg-gradient-to-b from-surface-panel to-surface p-3 text-white text-[9px]">
    <div className="text-center pt-6 pb-2">
      <p className="text-label uppercase tracking-widest text-primary mb-1">Your Ticket</p>
      <p className="font-semibold text-[11px]">Kampala Music Festival</p>
      <p className="text-gray-500 mt-0.5">Mar 15 · Kololo Airstrip</p>
    </div>
    <div className="mx-auto my-3 flex h-24 w-24 items-center justify-center rounded-xl bg-white p-2">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect x="5" y="5" width="25" height="25" fill="#0A0A0B" />
        <rect x="70" y="5" width="25" height="25" fill="#0A0A0B" />
        <rect x="5" y="70" width="25" height="25" fill="#0A0A0B" />
        <rect x="35" y="5" width="5" height="5" fill="#0A0A0B" />
        <rect x="45" y="5" width="5" height="5" fill="#0A0A0B" />
        <rect x="55" y="5" width="5" height="5" fill="#0A0A0B" />
        <rect x="35" y="15" width="5" height="5" fill="#0A0A0B" />
        <rect x="50" y="15" width="5" height="5" fill="#0A0A0B" />
        <rect x="35" y="35" width="30" height="30" fill="#E8940A" rx="2" />
        <rect x="70" y="35" width="5" height="5" fill="#0A0A0B" />
        <rect x="80" y="45" width="5" height="5" fill="#0A0A0B" />
        <rect x="35" y="70" width="5" height="5" fill="#0A0A0B" />
        <rect x="50" y="80" width="5" height="5" fill="#0A0A0B" />
        <rect x="70" y="70" width="10" height="10" fill="#0A0A0B" />
        <rect x="85" y="70" width="10" height="10" fill="#0A0A0B" />
        <rect x="70" y="85" width="10" height="10" fill="#0A0A0B" />
      </svg>
    </div>
    <div className="rounded-lg border border-dashed border-white/10 bg-white/[0.02] p-2 text-center">
      <p className="text-gray-500 text-[8px]">Ticket ID</p>
      <p className="font-mono font-semibold text-[10px] tracking-wider mt-0.5">EP-UG-2847193</p>
    </div>
    <div className="mt-auto pt-3 flex justify-between text-[8px] text-gray-500">
      <span>General Admission</span>
      <span className="text-green-400 font-medium">Valid ✓</span>
    </div>
  </div>
);

export default QRTicketPreview;
