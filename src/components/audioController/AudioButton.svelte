<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import PlayPauseButton from "./PlayPauseButton.svelte";

  export let loop = false;
  export let src = "";

  let isPlay = false;
  let audioElement: HTMLAudioElement;

  const dispatch = createEventDispatcher();

  const toggleIsPlay = (event: Event) => {
    if (audioElement.paused || audioElement.ended) {
      audioElement.play();
      isPlay = true;
    } else {
      audioElement.pause();
      isPlay = false;
    }
    event.stopPropagation();
    dispatch("audio-button-click");
  }

  const handleAudioEnded = () => isPlay = false;
</script>

<audio 
  class="hidden"
  {loop}
  bind:this={audioElement}
  on:ended={handleAudioEnded}
  on:pause={handleAudioEnded}
  {src}
>
</audio>

<PlayPauseButton bind:isPlay={isPlay} on:play-pause-button-click={toggleIsPlay} />