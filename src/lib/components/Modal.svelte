<script>
  let { modalId, text } = $props();
</script>

<button class="btn" onclick={() => document.getElementById(`${modalId}-dialog`).showModal()}
  >{text}</button
>
<dialog id={`${modalId}-dialog`} class="modal">
  <div class="modal-box mb-[20vh] flex min-h-1/3 flex-col">
    <h3 class="text-lg font-bold">{card.title}</h3>
    <p class="py-4">{card.desc}</p>

    <div class="mt-auto text-end">
      <button class="btn" onclick={() => document.getElementById(`${modalId}-dialog`).close()}
        >Close</button
      >
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
