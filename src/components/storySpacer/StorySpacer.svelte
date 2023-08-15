<script lang="ts">
  import type { SpacerType } from "../spacer/SpacerType";
  import Spacer from "../spacer/Spacer.svelte";

  export let innerContents = true;
  export let spacing: SpacerType = "low";
</script>

<Spacer templates={spacing} />
  {#if innerContents}
    <slot />
  {:else}
    <p>・・・</p>
  {/if}
<Spacer templates={spacing} />