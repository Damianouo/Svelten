<script>
  import { tooltipAction } from "../actions/tooltipAction";
  import Logo from "./Logo.svelte";
  import ThemeChanger from "./ThemeChanger.svelte";
</script>

<nav
  class="navbar bg-base-100 border-base-content/50 justify-between border-b shadow-sm"
>
  <div class="flex items-center gap-2" use:tooltipAction={"Flask"}>
    <Logo />
    <h1 class="text-primary text-3xl font-bold">Flask</h1>
  </div>
  <div>
    <ThemeChanger />
  </div>
</nav>
