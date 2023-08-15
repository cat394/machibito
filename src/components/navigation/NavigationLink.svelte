<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleClick = () => dispatch("navigation-link-click");
  
  export let to = "";
</script>

<li class="border-b border-gray-400 pb-1 transition-all duration-1000">
  <a
    class="block hover:no-underline text-neutral-50"
    href={to}
    on:click={handleClick}
  >
    <slot />
  </a>
</li>