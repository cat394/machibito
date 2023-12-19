<script>
  import { navigationLinks } from "../../data/navigationLinks";
  import NavigationLink from "./NavigationLink.svelte";
</script>

<ul class="flex flex-col gap-6 overflow-auto">
  {#each navigationLinks as navigationLink}
  <NavigationLink 
    to={navigationLink.to} 
    on:navigation-link-click
  >
    {navigationLink.text}
  </NavigationLink>
  {/each}
</ul>