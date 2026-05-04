interface Props {
  mode: string;
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="bg-bg3 border border-border rounded-sm px-1 font-mono text-[10px] text-muted">
      {children}
    </kbd>
  );
}

function Sep() {
  return <span className="text-border">│</span>;
}

export function StatusBar({ mode }: Props) {
  return (
    <div className="flex items-center gap-3.5 px-3.5 py-1 bg-bg2 border-t border-border shrink-0 text-[11px] text-dim">
      <span className="flex items-center gap-1">
        <Kbd>↑</Kbd>
        <Kbd>↓</Kbd> navigate
      </span>
      <Sep />
      <span className="flex items-center gap-1">
        <Kbd>Enter</Kbd> open
      </span>
      <Sep />
      <span className="flex items-center gap-1">
        <Kbd>Ctrl-K</Kbd>
        <Kbd>Ctrl-J</Kbd> move
      </span>
      <Sep />
      <span className="flex items-center gap-1">
        <Kbd>Esc</Kbd> clear
      </span>
      <span className="ml-auto text-green font-medium">{mode}</span>
    </div>
  );
}
