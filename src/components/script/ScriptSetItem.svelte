<script lang="ts">
  import { onMount } from "svelte";

  onMount(async() => {
    const zeroDaySaw = localStorage.getItem("zeroDaySaw");

    if (!zeroDaySaw) {
      localStorage.setItem("zeroDaySaw", "true");
    }
  })
</script>

<div></div>