import { JSX } from "solid-js";

interface Props {
  mode: string;
}

function Kbd(props: { children: JSX.Element }) {
  return (
    <kbd class="bg-bg3 border border-border rounded-sm px-1 font-mono text-[10px] text-muted">
      {props.children}
    </kbd>
  );
}

function Sep() {
  return <span class="text-border">│</span>;
}

export function StatusBar(props: Props) {
  return (
    <div class="fixed bottom-0 left-0 right-0 flex items-center gap-3.5 px-3.5 py-1 bg-bg2 border-t border-border shrink-0 text-[11px] text-dim z-50">
      <span class="flex items-center gap-1">
        <Kbd>↑</Kbd>
        <Kbd>↓</Kbd> navigate
      </span>
      <Sep />
      <span class="flex items-center gap-1">
        <Kbd>Enter</Kbd> open
      </span>
      <Sep />
      <span class="flex items-center gap-1">
        <Kbd>Ctrl-K</Kbd>
        <Kbd>Ctrl-J</Kbd> move
      </span>
      <Sep />
      <span class="flex items-center gap-1">
        <Kbd>Esc</Kbd> clear
      </span>
      <span class="ml-auto text-green font-medium">{props.mode}</span>
    </div>
  );
}
