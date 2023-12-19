<script lang="ts">
  export let type = "rounded"
  export let name = "";
  export let extraClass = "";
</script>

<span class="material-symbols-{type} {extraClass}">{name}</span>

<style>

.material-symbols-rounded {
    font-display: swap;
    font-variation-settings:
    'FILL' 0,
    'wght' 240,
    'GRAD' 0,
    'opsz' 48
  }
</style>