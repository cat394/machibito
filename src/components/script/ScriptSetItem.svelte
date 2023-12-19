<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const zeroDaySaw = localStorage.getItem("zeroDaySaw");

    if (!zeroDaySaw) {
      localStorage.setItem("zeroDaySaw", "true");
    }
  })
</script>

<div></div>