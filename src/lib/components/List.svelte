<script>
  import AddInput from "./AddInput.svelte";

  const { listData } = $props();
</script>

<li class="bg-base-100 flex w-full flex-col gap-4 rounded-lg p-6 shadow-lg">
  <div class="flex items-center justify-between">
    <h2 class="text-xl font-bold">{listData.title}</h2>
    <button class="btn btn-circle btn-ghost size-8" aria-label="heart btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon"
        ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path
          d="M6 6l12 12"
        /></svg
      >
    </button>
  </div>
  {#each Object.values(listData.cards) as card (card.id)}
    <button class="btn btn-soft">{card.title}</button>
  {/each}
  <AddInput {listData} />
</li>
