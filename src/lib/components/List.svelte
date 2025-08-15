<script>
  import AddInput from "./AddInput.svelte";

  const { listData } = $props();
</script>

<li class="bg-base-300 flex w-72 flex-col gap-4 rounded-xl p-6 shadow-lg">
  <div class="flex items-center justify-between">
    <h2 class="text-xl font-bold">{listData.title}</h2>
    <button class="btn btn-circle" aria-label="heart btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        class="size-[1.2em]"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        /></svg
      >
    </button>
  </div>
  {#each Object.values(listData.cards) as card (card.id)}
    <button class="btn btn-primary btn-soft">{card.title}</button>
  {/each}
  <AddInput {listData} />
</li>
