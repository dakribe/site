import { ListPane } from "#/components/list-pane";
import { PreviewPane } from "#/components/preview-pane";
import { SearchBar } from "#/components/searchbar";
import { StatusBar } from "#/components/statusbar";
import { Topbar } from "#/components/topbar";
import { fuzzyMatch } from "#/data/fuzzy";
import { type Item, ITEMS } from "#/data/items";
import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useMemo, useEffect, useCallback } from "react";

export const Route = createFileRoute("/")({
  component: Home,
});

interface FilteredResult {
  items: Item[];
  matchData: Map<number, number[]>;
}

function Home() {
  const [query, setQuery] = useState("");
  const [activeIdx, setActiveIdx] = useState(ITEMS.length - 1);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo<FilteredResult>(() => {
    const q = query.trim();
    if (!q) return { items: ITEMS, matchData: new Map() };

    const results = ITEMS.map((item) => ({ item, ...fuzzyMatch(item.label, q) }))
      .filter((r) => r.match)
      .sort((a, b) => b.score - a.score);

    return {
      items: results.map((r) => r.item),
      matchData: new Map(results.map((r) => [r.item.id, r.indices])),
    };
  }, [query]);

  const activeItem = filtered.items[activeIdx];
  const mode = query ? "FILTER" : "NORMAL";

  const clamp = useCallback(
    (next: number) => Math.max(0, Math.min(next, filtered.items.length - 1)),
    [filtered.items.length],
  );

  function move(dir: 1 | -1) {
    setActiveIdx((i) => clamp(i + dir));
    requestAnimationFrame(() =>
      listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: "nearest" }),
    );
  }

  function handleQuery(val: string) {
    setQuery(val);
    setActiveIdx(0);
  }

  function handleEnter() {
    if (activeItem?.tag === "blog" && activeItem.slug) {
      window.location.href = `/blog/${activeItem.slug}`;
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown" || (e.ctrlKey && e.key === "j")) {
        e.preventDefault();
        move(1);
      } else if (e.key === "ArrowUp" || (e.ctrlKey && e.key === "k")) {
        e.preventDefault();
        move(-1);
      } else if (e.key === "Enter") {
        handleEnter();
      } else if (e.key === "Escape") {
        setQuery("");
        setActiveIdx(ITEMS.length - 1);
        inputRef.current?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [filtered.items, activeItem]);

  return (
    <div className="flex flex-col h-full">
      <Topbar />

      {/* Prompt line */}
      <div className="px-4 pt-3 pb-0 shrink-0 text-[13px]">
        <span className="text-green font-bold">dakribe</span>
        <span className="text-dim">@</span>
        <span className="text-blue">personal</span>
        <span className="text-dim">:</span>
        <span className="text-blue">~</span>
        <span className="text-dim"> $ </span>
        <span className="text-text">fzf --preview --multi --bind ctrl-j:down,ctrl-k:up</span>
      </div>

      <SearchBar
        query={query}
        onInput={handleQuery}
        total={ITEMS.length}
        matched={filtered.items.length}
        inputRef={inputRef}
      />

      <div className="flex flex-1 min-h-0">
        <ListPane
          items={filtered.items}
          activeIdx={activeIdx}
          query={query}
          matchData={filtered.matchData}
          onHover={(i) => setActiveIdx(i)}
          onClick={(i) => setActiveIdx(i)}
          listRef={listRef}
        />
        <PreviewPane item={activeItem} />
      </div>

      <StatusBar mode={mode} />
    </div>
  );
}
