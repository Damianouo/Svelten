<script>
  import { tooltip } from "../state/tooltipState.svelte";
</script>

{#if tooltip.visible}
  <div
    class="card bg-neutral text-neutral-content pointer-events-none rounded-md p-2 shadow-lg"
    style="position: fixed; left: {tooltip.x}px; top: {tooltip.y +
      15}px; z-index: 9999;"
  >
    {@html tooltip.content}
  </div>
{/if}
