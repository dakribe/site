interface Props {
  query: string;
  onInput: (val: string) => void;
  total: number;
  matched: number;
  inputRef: (el: HTMLInputElement) => void;
}

export function SearchBar(props: Props) {
  return (
    <div class="flex items-center gap-1.5 px-4 py-2.5 border-b border-border shrink-0">
      <span class="text-cyan font-bold text-sm select-none">›</span>
      <input
        ref={props.inputRef}
        type="text"
        placeholder="type to filter..."
        autocomplete="off"
        spellcheck={false}
        value={props.query}
        onInput={(e) => props.onInput(e.currentTarget.value)}
        class="flex-1 bg-transparent border-none outline-none text-text font-mono text-[13px] caret-cyan placeholder:text-dim"
      />
      <span class="text-dim text-[11px] whitespace-nowrap">
        <span class="text-yellow">{props.matched}</span>/{props.total}
      </span>
    </div>
  );
}
