<script lang="ts">
  export let to = "#";
  export let extraClasses = "";
</script>

<a class="btn {extraClasses}" href={to} {...$$props} on:click>
  <slot />
</a>