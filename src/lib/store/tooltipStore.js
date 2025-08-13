import { writable } from "svelte/store";

function createTooltipStore() {
  const { subscribe, set, update } = writable({
    show: false,
    content: "",
    x: 0,
    y: 0,
  });

  return {
    subscribe,
    show: (content, event) =>
      set({
        show: true,
        content,
        x: event.clientX,
        y: event.clientY,
      }),
    hide: () => set({ show: false, content: "", x: 0, y: 0 }),
    move: (event) =>
      update((state) => ({ ...state, x: event.clientX, y: event.clientY })),
  };
}

export const tooltip = createTooltipStore();
