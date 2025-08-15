<script>
  import { board } from "../state/BoardState.svelte";
  const { listData } = $props();
  let isEntering = $state(false);
  let cardContent = $state({ title: "", desc: "" });

  const handleAddCard = () => {
    const result = board.addCard(listData.id, cardContent.title, cardContent.desc);
    if (result.success) {
      isEntering = false;
      cardContent = { title: "", desc: "" };
    } else {
      console.log(result.message);
    }
  };
</script>

{#if !isEntering}
  <button class="btn btn-primary" onclick={() => (isEntering = true)}>Add Card</button>
{:else}
  <input
    type="text"
    class="input input-secondary"
    placeholder="Card Title"
    bind:value={cardContent.title}
  />
  <textarea
    class="textarea textarea-accent"
    placeholder="Card Description"
    bind:value={cardContent.desc}
  ></textarea>
  <button class="btn btn-primary" onclick={handleAddCard}>Add Card</button>
{/if}
