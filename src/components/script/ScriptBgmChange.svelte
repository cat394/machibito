<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
		function stopOtherAudio(currentAudio: HTMLAudioElement) {
    	audioElements.forEach((audio: HTMLAudioElement) => {
        if (!audio.src.endsWith("omoiwoidaite.mp3") && currentAudio.src.endsWith("omoiwoidaite.mp3")) {
            audio.pause();
        }
    	});
		}

		const audioElements: NodeListOf<HTMLAudioElement> = document.querySelectorAll("audio");

		audioElements.forEach((audio: HTMLAudioElement) => {
			console.log(audio)
				audio.addEventListener("play", () => {
					stopOtherAudio(audio);
			})
		});
	})
</script>

<div></div>