<script>
  import { createEventDispatcher } from "svelte";
  import Media from "../media/Media.svelte";
  import Icon from "../icon/Icon.svelte";
  import NavigationLinks from "./NavigationLinks.svelte";

  const dispatch = createEventDispatcher();

  const handleClick = () => dispatch("close-button-click");
  
  export let open = false;
</script>

<nav
  class="my-navigation-menu h-[60dvh] w-full fixed left-0 bottom-[-60dvh] p-5 transition-all duration-[1s] z-[1000] bg-[black] opacity-[0.87] border-t-2 border-solid border-t-[#FF57B6] rounded-t-[30px]"
  class:open
>
  <div class="flex justify-between items-center mb-5">
    <span class="text-neutral-50">目次：</span>
    <button on:click={handleClick}><Icon name="close" /></button>
  </div>
  <NavigationLinks on:navigation-link-click />
</nav>

<style>
  .my-navigation-menu.open {
    translate: 0 -60dvh;
  }
</style>
