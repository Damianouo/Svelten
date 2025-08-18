<script>
  import { Toaster } from "svelte-french-toast";
  import Board from "./lib/components/Board.svelte";
  import Navbar from "./lib/components/Navbar.svelte";
  import Tooltip from "./lib/components/Tooltip.svelte";
</script>

<main class="mx-auto grid h-screen grid-rows-[auto_1fr]">
  <Toaster />
  <Tooltip />
  <Navbar />
  <Board />
</main>
