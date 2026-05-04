import { TAG_STYLE, type Item } from "#/data/items";

interface Props {
  item: Item | undefined;
}

export function PreviewPane({ item }: Props) {
  if (!item) {
    return (
      <div className="flex-1 flex items-center justify-center text-dim text-xs">
        ← select an item to preview
      </div>
    );
  }

  const ts = TAG_STYLE[item.tag];

  return (
    <div
      className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3 min-w-0
                 [&::-webkit-scrollbar]:w-[3px]
                 [&::-webkit-scrollbar-track]:bg-transparent
                 [&::-webkit-scrollbar-thumb]:bg-border
                 [&::-webkit-scrollbar-thumb]:rounded-sm"
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 border-b border-border pb-2.5">
        <span
          className="text-[11px] px-2 py-px rounded-sm font-semibold tracking-wider uppercase"
          style={{ color: ts.color, background: ts.bg }}
        >
          {item.tag}
        </span>
        <span className="text-[15px] font-bold text-text flex-1 truncate">{item.title}</span>
        {item.date && <span className="text-dim text-[11px] shrink-0">{item.date}</span>}
      </div>

      {/* Body — trusted authored HTML */}
      <div
        className="text-muted text-xs leading-relaxed
                   [&_p]:mb-2.5 [&_p:last-child]:mb-0
                   [&_strong]:text-text [&_strong]:font-medium
                   [&_a]:text-cyan [&_a]:no-underline [&_a]:border-b [&_a]:border-cyan/30
                   hover:[&_a]:border-cyan"
        dangerouslySetInnerHTML={{ __html: item.body }}
      />

      {/* Chips */}
      {item.chips.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {item.chips.map((chip, i) => (
            <span
              key={chip}
              className={`text-[11px] px-2 py-px border rounded-sm
                ${
                  item.chipStyle[i] === "hl"
                    ? "border-cyan text-cyan"
                    : item.chipStyle[i] === "green"
                      ? "border-green text-green"
                      : "border-border text-muted"
                }`}
            >
              {chip}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      {item.links && item.links.length > 0 && (
        <div className="flex flex-wrap gap-2.5">
          {item.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] text-blue border-b border-dashed border-blue/40
                         hover:text-cyan hover:border-cyan no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
