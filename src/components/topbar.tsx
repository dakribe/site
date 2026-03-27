export function Topbar() {
  return (
    <div class="flex items-center gap-3 px-4 py-1.5 bg-bg2 border-b border-border shrink-0">
      <div class="flex gap-1.5">
        <div class="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div class="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div class="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div class="flex-1 text-center text-muted text-[11px] tracking-wide">
        bash — ~/me — 120×38
      </div>
      <div class="w-14" />
    </div>
  );
}
