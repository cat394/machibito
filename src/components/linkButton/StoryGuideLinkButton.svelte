<script lang="ts">
  import LinkButton from "./LinkButton.svelte";
  export let to = "";
</script>

<div class="flex justify-center">
  <LinkButton 
    {to} 
    extraClasses="btn-wide bg-nutral-900 border border-solid border-nutral-800 hover:opacity-90 shadow-[0_0_12px_6px_#404040]" 
    {...$$props}
  ><slot /></LinkButton>
</div>