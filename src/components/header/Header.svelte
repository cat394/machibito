<script>
  import HeaderLinks from "./HeaderLinks.svelte";

  export let title = "";
</script>

<header 
  class="sticky w-ful z-[90] top-0 px-8 py-3 border-b bg-neutral-900">
  <div 
    class="md:flex md:justify-between items-center"
  >
    <h1 class="hidden md:block">待ち人</h1>
    <h2 class="text-center md:hidden">{title}</h2>
    <div class="hidden md:block">
      <HeaderLinks />    
    </div>
  </div>
</header>