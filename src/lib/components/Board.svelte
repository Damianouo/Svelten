<script>
  import List from "./List.svelte";
  import { board } from "../state/BoardState.svelte";
</script>

<ul class="bg-base-100 flex items-start gap-8 p-12">
  {#each Object.values(board.data) as list (list.id)}
    <List listData={list} />
  {/each}
  <li class="bg-base-300 flex w-72 flex-col gap-4 rounded-xl p-6 shadow-lg">
    <input class="input" type="text" placeholder="Enter List Title" />
    <button class="btn btn-secondary">Add List</button>
  </li>
</ul>
