export function Topbar() {
  return (
    <div className="flex items-center gap-3 px-4 py-1.5 bg-bg2 border-b border-border shrink-0">
      <div className="flex gap-1.5">
        {/* thorn-tinted dots — muted to match the low-contrast aesthetic */}
        <div className="w-2.5 h-2.5 rounded-full bg-[#D2696C]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFD7AA]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#9EBB9C]" />
      </div>
      <div className="flex-1 text-center text-muted text-[11px] tracking-wide">
        fish — ~/me — 120×38
      </div>
      <div className="w-14" />
    </div>
  );
}
