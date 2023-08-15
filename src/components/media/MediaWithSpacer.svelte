<script lang="ts">
  import type { MediaType } from "../../data/mediaType";
  import Media from "./Media.svelte";
  import AudioController from "../audioController/AudioController.svelte";

  export let spaceHeight = "1px";
  export let templateSpaceHeight: "high" | "middle" | "low" = "low";
  export let type: MediaType = "image";
  export let name = "";
  export let loop = false;

  $: spaceHeight = (() => {
    switch (templateSpaceHeight) {
      case "high":
        return "6.25rem";
      case "middle":
        return "3rem";
      case "low":
        return "1.25rem";
      default:
        return spaceHeight;
    }
  })();
</script>

<div style="margin-block: {spaceHeight};">
  {#if type === "image"}
  <Media {type} {name} />
  {:else if type === "audio"}
  <AudioController ver="two" {name} {loop} />
  {/if}
</div>