<script>
  import List from "./List.svelte";
  import { board } from "../state/BoardState.svelte";
</script>

<div class="mx-auto grid w-full max-w-7xl">
  <ul
    class=" grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] content-start items-start justify-items-center gap-6 p-6"
  >
    {#each Object.values(board.data) as list (list.id)}
      <List listData={list} />
    {/each}
    <li class="bg-base-100 flex w-full flex-col gap-4 rounded-lg p-6 shadow-lg">
      <input class="input w-full" type="text" placeholder="Enter List Title" />
      <button class="btn btn-secondary">Add List</button>
    </li>
  </ul>
</div>
