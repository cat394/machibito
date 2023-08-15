<script lang="ts">
  import Icon from "../icon/Icon.svelte";

  type iconType = "before" | "next" | null;

  export let to = "#";
  export let text = "";
  export let icon:iconType = null;
  export let style = "";
</script>

<div class="grid place-items-center hover:bg-neutral-900 transition-all duration-500" {style}>
  <a 
    class="text-sm md:text-base flex justify-center items-center gap-5 w-full h-full py-4 px-1" 
    href={to}
  >
    {#if icon === "before"}
      <Icon name="navigate_before" />
    {/if}
    <span>{text}</span>
    {#if icon === "next"}
      <Icon name="navigate_next" />
    {/if}
  </a>
</div>

