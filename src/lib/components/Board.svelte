<script>
  import List from "./List.svelte";

  export const kanbanData = $state({
    lists: [
      {
        id: "list-1",
        title: "To-Do",
        cards: [
          { id: "card-1", title: "Learn Svelte 5 $state" },
          { id: "card-2", title: "Create Card component" },
        ],
      },
      {
        id: "list-2",
        title: "In Progress",
        cards: [{ id: "card-3", title: "Create List component" }],
      },
      {
        id: "list-3",
        title: "Done",
        cards: [{ id: "card-4", title: "Read Svelte Docs" }],
      },
    ],
  });
</script>

<ul class="bg-base-100 flex items-start gap-8 p-12">
  {#each kanbanData.lists as list (list.id)}
    <List listData={list} />
  {/each}
  <li class="bg-base-300 flex w-72 flex-col gap-4 rounded-xl p-6 shadow-lg">
    <input class="input" type="text" placeholder="Enter List Title" />
    <button class="btn btn-secondary">Add List</button>
  </li>
</ul>
