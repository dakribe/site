import { TAG_STYLE, type Item } from "#/data/items";
import { segmentLabel } from "../data/fuzzy";

interface Props {
  items: Item[];
  activeIdx: number;
  query: string;
  matchData: Map<number, number[]>;
  onHover: (i: number) => void;
  onClick: (i: number) => void;
  listRef: React.RefObject<HTMLDivElement | null>;
}

export function ListPane({ items, activeIdx, query, matchData, onHover, onClick, listRef }: Props) {
  return (
    <div
      ref={listRef}
      className="w-[340px] shrink-0 overflow-y-auto border-r border-border py-1
                 [&::-webkit-scrollbar]:w-[3px]
                 [&::-webkit-scrollbar-track]:bg-transparent
                 [&::-webkit-scrollbar-thumb]:bg-border
                 [&::-webkit-scrollbar-thumb]:rounded-sm"
    >
      {items.length === 0 ? (
        <div className="px-4 py-5 text-dim text-xs text-center">
          no matches for <span className="text-yellow">{query}</span>
        </div>
      ) : (
        items.map((item, i) => {
          const indices = matchData.get(item.id) ?? [];
          const segments = segmentLabel(item.label, indices);
          const active = i === activeIdx;
          const ts = TAG_STYLE[item.tag];

          return (
            <div
              key={item.id}
              data-active={active}
              className={`flex items-baseline gap-2 px-3 py-[3px] cursor-pointer select-none
                ${active ? "bg-sel-hl" : "hover:bg-sel"}`}
              onMouseEnter={() => onHover(i)}
              onClick={() => onClick(i)}
            >
              <span
                className={`text-cyan font-bold w-2 shrink-0 transition-opacity ${active ? "opacity-100" : "opacity-0"}`}
              >
                ▌
              </span>
              <span
                className="text-[10px] px-1 py-px rounded-sm font-medium shrink-0 tracking-wide"
                style={{ color: ts.color, background: ts.bg }}
              >
                {item.tag}
              </span>
              <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-[13px]">
                {segments.map((seg, si) =>
                  seg.hl ? <mark key={si}>{seg.text}</mark> : <span key={si}>{seg.text}</span>,
                )}
              </span>
              {item.meta && <span className="text-dim text-[11px] shrink-0">{item.meta}</span>}
              {item.tag === "blog" && active && (
                <span className="text-yellow text-[11px] shrink-0">↵</span>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
