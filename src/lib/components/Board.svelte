<script>
  import List from "./List.svelte";
  import { board } from "../state/BoardState.svelte";
  import { toast } from "svelte-french-toast";

  let newListTitle = $state("");

  const handleAddList = (title) => {
    const result = board.addList(newListTitle);
    if (!result.success) {
      toast.error(result.message);
    }
  };
</script>

<div class="mx-auto grid w-full max-w-7xl">
  <ul
    class=" grid grid-cols-[repeat(auto-fit,288px)] content-start items-start justify-center justify-items-center gap-6 p-6 xl:justify-start"
  >
    {#each Object.values(board.data) as list (list.id)}
      <List listData={list} />
    {/each}
    <li class="bg-base-100 flex w-full flex-col gap-4 rounded-lg p-6 shadow-lg">
      <input
        class="input w-full"
        type="text"
        placeholder="Enter List Title"
        bind:value={newListTitle}
      />
      <button class="btn btn-secondary" onclick={handleAddList}>Add List</button>
    </li>
  </ul>
</div>
