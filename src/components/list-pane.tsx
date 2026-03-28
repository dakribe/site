import { For, Show } from "solid-js";
import { segmentLabel } from "~/lib/fuzzy";
import { Item, TAG_CLASS } from "~/lib/item";

interface Props {
  items: Item[];
  activeIdx: number;
  query: string;
  matchData: Map<number, number[]>;
  onHover: (i: number) => void;
  onClick: (i: number) => void;
  listRef: (el: HTMLDivElement) => void;
}

export function ListPane(props: Props) {
  return (
    <div
      ref={props.listRef}
      class="w-[340px] shrink-0 overflow-y-auto border-r border-border py-1
             [&::-webkit-scrollbar]:w-[3px]
             [&::-webkit-scrollbar-track]:bg-transparent
             [&::-webkit-scrollbar-thumb]:bg-border
             [&::-webkit-scrollbar-thumb]:rounded-sm"
    >
      <Show
        when={props.items.length > 0}
        fallback={
          <div class="px-4 py-5 text-dim text-xs text-center">
            no matches for <span class="text-yellow">{props.query}</span>
          </div>
        }
      >
        <For each={props.items}>
          {(item, i) => {
            const indices = () => props.matchData.get(item.id) ?? [];
            const segments = () => segmentLabel(item.label, indices());
            const active = () => i() === props.activeIdx;
            const tc = TAG_CLASS[item.tag];

            return (
              <div
                data-active={active()}
                class={`flex items-baseline gap-2 px-3 py-[3px] cursor-pointer select-none
                  ${active() ? "bg-sel-hl" : "hover:bg-sel"}`}
                onMouseEnter={() => props.onHover(i())}
                onClick={() => props.onClick(i())}
              >
                <span
                  class={`text-cyan font-bold w-2 shrink-0 transition-opacity ${active() ? "opacity-100" : "opacity-0"}`}
                >
                  ▌
                </span>
                <span
                  class={`text-[10px] px-1 py-px rounded-sm font-medium shrink-0 tracking-wide ${tc.badge}`}
                >
                  {item.tag}
                </span>
                <span class="flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-[13px]">
                  <For each={segments()}>
                    {(seg) => (
                      <Show when={seg.hl} fallback={<>{seg.text}</>}>
                        <mark>{seg.text}</mark>
                      </Show>
                    )}
                  </For>
                </span>
                <Show when={item.meta}>
                  <span class="text-dim text-[11px] shrink-0">{item.meta}</span>
                </Show>
              </div>
            );
          }}
        </For>
      </Show>
    </div>
  );
}
