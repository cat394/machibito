<script lang="ts">
  import LinkButton from "./LinkButton.svelte";
  import Icon from "../icon/Icon.svelte";

  export let to = "";
</script>

<div class="flex justify-center">
  <LinkButton 
    {to} 
    extraClasses="shadow-[0_0_10px_8px_#262626] rounded border border-solid hover:border-[hsl(var(--s))] transition-all duration-[1s]" 
    {...$$props}
  >
    <slot />
    <Icon name="double_arrow" extraClass="text-[hsl(var(--p))]" />
  </LinkButton>
</div>