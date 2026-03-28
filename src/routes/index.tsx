import { createMemo, createSignal, onCleanup, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { PreviewPane } from "~/components/preview-pane";
import { Results } from "~/components/results";
import { SearchBar } from "~/components/search-bar";
import { StatusBar } from "~/components/status-bar";
import { Topbar } from "~/components/topbar";
import { fuzzyMatch } from "~/lib/fuzzy";
import { Item, ITEMS } from "~/lib/item";

interface FilteredResult {
  items: Item[];
  matchData: Map<number, number[]>;
}

export default function Home() {
  const [query, setQuery] = createSignal("");
  const [activeIdx, setActiveIdx] = createSignal(0);

  let inputRef!: HTMLInputElement;
  let listRef!: HTMLDivElement;

  function handleQuery(val: string) {
    setQuery(val);
    setActiveIdx(0);
  }

  const filtered = createMemo<FilteredResult>(() => {
    const q = query().trim();
    if (!q) return { items: ITEMS, matchData: new Map() };

    const results = ITEMS.map((item) => ({ item, ...fuzzyMatch(item.label, q) }))
      .filter((r) => r.match)
      .sort((a, b) => b.score - a.score);

    return {
      items: results.map((r) => r.item),
      matchData: new Map(results.map((r) => [r.item.id, r.indices])),
    };
  });

  const activeItem = createMemo<Item | undefined>(() => filtered().items[activeIdx()]);
  const mode = createMemo(() => (query() ? "FILTER" : "NORMAL"));

  const clamp = (next: number) => Math.max(0, Math.min(next, filtered().items.length - 1));

  function move(dir: 1 | -1) {
    setActiveIdx((i) => clamp(i + dir));
    requestAnimationFrame(() =>
      listRef?.querySelector('[data-active="true"]')?.scrollIntoView({ block: "nearest" }),
    );
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowDown" || (e.ctrlKey && e.key === "j")) {
      e.preventDefault();
      move(1);
    } else if (e.key === "ArrowUp" || (e.ctrlKey && e.key === "k")) {
      e.preventDefault();
      move(-1);
    } else if (e.key === "Escape") {
      setQuery("");
      setActiveIdx(0);
      inputRef?.focus();
    }
  }

  onMount(() => {
    if (isServer) return;
    inputRef?.focus();
    document.addEventListener("keydown", onKeyDown);
  });
  onCleanup(() => {
    if (isServer) return;
    document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <main class="flex flex-col h-full">
      <Topbar />

      <div class="px-4 pt-3 pb-0 shrink-0 text-[13px]">
        <span class="text-green font-bold">dakribe</span>
        <span class="text-dim">@</span>
        <span class="text-blue">personal</span>
        <span class="text-dim">:</span>
        <span class="text-blue">~</span>
        <span class="text-dim"> $ </span>
        <span class="text-text">fzf --preview --multi --bind ctrl-j:down,ctrl-k:up</span>
      </div>

      <SearchBar
        query={query()}
        onInput={handleQuery}
        total={ITEMS.length}
        matched={filtered().items.length}
        inputRef={(el) => (inputRef = el)}
      />

      <div class="flex flex-1 min-h-0">
        <Results
          items={filtered().items}
          activeIdx={activeIdx()}
          query={query()}
          matchData={filtered().matchData}
          onHover={(i) => setActiveIdx(i)}
          onClick={(i) => setActiveIdx(i)}
          listRef={(el) => (listRef = el)}
        />
        <PreviewPane item={activeItem()} />
      </div>

      <StatusBar mode={mode()} />
    </main>
  );
}
