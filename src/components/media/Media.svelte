<script lang="ts">
  import type { MediaType } from "../../data/mediaType";
  import type { Detail } from "../../data/mediaType";
  import { images } from "../../data/images";
  import { audio } from "../../data/audio";

  export let type: MediaType = "image";
  export let name = "";
  export let extraClass = "";

  function getValidMediaCombinations<T extends { name: string, width?: number, height?: number }>(
    mediaDetails: Detail<T>[],
    mediaType: MediaType
  ): {
    name: string;
    format: string;
    type: MediaType;
    width?: number;
    height?: number;
  }[] {
    return mediaDetails.flatMap((detail) =>
      detail.data.map((item) => ({
        name: item.name,
        format: detail.format,
        type: mediaType,
        width: item.width,
        height: item.height
      }))
    );
  }


  const validImageCombinations = getValidMediaCombinations(images.details, "image");
  const validAudioCombinations = getValidMediaCombinations(audio.details, "audio");
  const validMediaCombinations = [...validImageCombinations, ...validAudioCombinations];

  let currentMedia = validMediaCombinations.find(
    (media) => media.name === name && media.type === type
  );
</script>

{#if currentMedia}
  {#if currentMedia.type === "image"}
  <img
    class="{extraClass}"
    src="{images.path}{currentMedia.name}.{currentMedia.format}"
    alt={name}
    width={currentMedia.width}
    height={currentMedia.height}
  />
  {:else if currentMedia.type === "audio"}
  <audio
    class="{extraClass}"
    controls
    src="{audio.path}{currentMedia.name}.{currentMedia.format}"
  />
  {/if}
{/if}