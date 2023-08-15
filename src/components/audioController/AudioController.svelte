<script lang="ts">
  import type { AudioData } from "../../data/mediaType";
  import { audio } from "../../data/audio";
  import AudioButton from "./AudioButton.svelte";

  type TargetAudio = {
    format: string;
    name?: string;
    audioTitle?: string;
  }

  export let name = "";
  export let loop = false;
  export let ver: "one" | "two" = "one";
  
  let targetAudio: TargetAudio;
  let targetAudioData: AudioData | undefined;

  $: if (name) {
    for(const audioDetails of audio.details) {
      targetAudioData = audioDetails.data.find(audioData => audioData.name === name);
      targetAudio = { format: audioDetails.format, ...targetAudioData };
    }
  }
</script>

{#if ver === "one"}
<div 
  class="inline-grid items-center grid-cols-[auto_1fr] border border-neutral-50 p-3 rounded-full"
>
  <div>
    <AudioButton src={audio.path + targetAudio.name + "." + targetAudio.format} {loop} on:audio-button-click />
  </div>
  <div class="justify-self-center mx-5">
    {targetAudio.audioTitle}
  </div>
</div>
{/if}

{#if ver === "two"}
<div 
  class="inline-grid items-center grid-cols-[auto_1fr] border border-neutral-500 text-neutral-300 py-2 md:py-1 px-2 rounded"
>
  <div>
    <AudioButton src={audio.path + targetAudio.name + "." + targetAudio.format} {loop} on:audio-button-click />
  </div>
  <div class="justify-self-center mx-5">
    {targetAudio.audioTitle}
  </div>
</div>
{/if}
