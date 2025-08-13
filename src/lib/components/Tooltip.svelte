<script>
  import { tooltip } from "../store/tooltipStore";

  // 從 store 中解構出我們需要的變數
  $: ({ show, content, x, y } = $tooltip);
</script>

<!-- 只有在 show 為 true 時才顯示 -->
{#if show}
  <div
    class="card bg-neutral text-neutral-content pointer-events-none rounded-md p-2 shadow-lg"
    style="position: fixed; left: {x + 15}px; top: {y + 15}px; z-index: 9999;"
  >
    {@html content}
  </div>
{/if}
