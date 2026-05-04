interface Props {
  query: string;
  onInput: (val: string) => void;
  total: number;
  matched: number;
  inputRef: React.RefObject<HTMLInputElement | null>;
}

export function SearchBar({ query, onInput, total, matched, inputRef }: Props) {
  return (
    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border shrink-0">
      <span className="text-cyan font-bold text-sm select-none">›</span>
      <input
        ref={inputRef}
        type="text"
        placeholder="type to filter..."
        autoComplete="off"
        spellCheck={false}
        value={query}
        onChange={(e) => onInput(e.currentTarget.value)}
        className="flex-1 bg-transparent border-none outline-none text-text font-mono text-[13px] caret-cyan placeholder:text-dim"
      />
      <span className="text-dim text-[11px] whitespace-nowrap">
        <span className="text-yellow">{matched}</span>/{total}
      </span>
    </div>
  );
}
