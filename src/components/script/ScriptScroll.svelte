<script lang="ts">
  import { onMount } from "svelte";

  onMount(async() => {
    const zeroDaySaw = localStorage.getItem("zeroDaySaw");
    const scrolled = localStorage.getItem("scrolled");
  
    if (zeroDaySaw && !scrolled) {
      await new Promise<void>(resolve => setTimeout(resolve, 1000))

      const mainElement = document.querySelector("main") as HTMLElement;
  
      mainElement.scrollTop = mainElement.scrollHeight;
      
      localStorage.setItem("scrolled", "true");
    }
  })
  </script>

  <div></div>