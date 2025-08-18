<script>
  import AddInput from "./AddInput.svelte";
  import XIcon from "./svgs/XIcon.svelte";

  const { listData } = $props();
</script>

<li class="bg-base-100 flex w-full flex-col gap-4 rounded-lg p-6 shadow-lg">
  <div class="flex items-center justify-between">
    <h2 class="text-xl font-bold">{listData.title}</h2>
    <button class="btn btn-circle btn-ghost size-8" aria-label="heart btn">
      <XIcon class="size-4" />
    </button>
  </div>
  {#each Object.values(listData.cards) as card (card.id)}
    <button class="btn btn-soft">{card.title}</button>
  {/each}
  <AddInput {listData} />
</li>
