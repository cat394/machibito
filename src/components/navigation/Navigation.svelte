<script lang="ts">
  import NavigationBar from "./NavigationBar.svelte";
  import NavigationMenu from "./NavigationMenu.svelte";

  let open = false;

  const toggleOpen = () => open = !open;
</script>

<div class="md:hidden">
  <NavigationBar on:hamburger-button-click={toggleOpen} />
  <NavigationMenu on:close-button-click={toggleOpen} on:navigation-link-click={toggleOpen} {open} />
</div>
