import { Show, For } from "solid-js";
import { Item, TAG_CLASS } from "~/lib/item";

interface Props {
  item: Item | undefined;
}

export function PreviewPane(props: Props) {
  return (
    <div
      class="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-3 min-w-0
             [&::-webkit-scrollbar]:w-[3px]
             [&::-webkit-scrollbar-track]:bg-transparent
             [&::-webkit-scrollbar-thumb]:bg-border
             [&::-webkit-scrollbar-thumb]:rounded-sm"
    >
      <Show
        when={props.item}
        fallback={
          <div class="flex-1 flex items-center justify-center text-dim text-xs">
            ← select an item to preview
          </div>
        }
      >
        {(item) => {
          const tc = TAG_CLASS[item().tag];
          return (
            <>
              <div class="flex items-center gap-2.5 border-b border-border pb-2.5">
                <span
                  class={`text-[11px] px-2 py-px rounded-sm font-semibold tracking-wider uppercase ${tc.badge}`}
                >
                  {item().tag}
                </span>
                <span class="text-[15px] font-bold text-text flex-1 truncate">{item().title}</span>
                <Show when={item().date}>
                  <span class="text-dim text-[11px] shrink-0">{item().date}</span>
                </Show>
              </div>

              <div
                class="text-muted text-xs leading-relaxed
                       [&_p]:mb-2.5 [&_p:last-child]:mb-0
                       [&_strong]:text-text [&_strong]:font-medium
                       [&_a]:text-cyan [&_a]:no-underline [&_a]:border-b [&_a]:border-cyan/30 hover:[&_a]:border-cyan"
                innerHTML={item().body}
              />

              <Show when={item().chips.length > 0}>
                <div class="flex flex-wrap gap-1.5">
                  <For each={item().chips}>
                    {(chip, i) => {
                      const style = item().chipStyle[i()];
                      return (
                        <span
                          class={`text-[11px] px-2 py-px border rounded-sm
                          ${
                            style === "hl"
                              ? "border-cyan text-cyan"
                              : style === "green"
                                ? "border-green text-green"
                                : "border-border text-muted"
                          }`}
                        >
                          {chip}
                        </span>
                      );
                    }}
                  </For>
                </div>
              </Show>

              <Show when={item().links && item().links!.length > 0}>
                <div class="flex flex-wrap gap-2.5">
                  <For each={item().links}>
                    {(link) => (
                      <a
                        href={link.href}
                        class="text-[11px] text-blue border-b border-dashed border-blue/40
                               hover:text-cyan hover:border-cyan no-underline"
                      >
                        {link.label}
                      </a>
                    )}
                  </For>
                </div>
              </Show>
            </>
          );
        }}
      </Show>
    </div>
  );
}
