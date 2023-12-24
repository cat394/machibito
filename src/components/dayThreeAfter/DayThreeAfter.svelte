<script lang="ts">
  import { onMount } from "svelte";
  import CharacterLine from "../characterLine/CharacterLine.svelte";

  let show = false;

  onMount(() => {
    const zeroDaySaw = localStorage.getItem("zeroDaySaw");

    if (zeroDaySaw) {
      show = true;
    }
  });
</script>

<div id="after" class="hidden" class:show>
  <p>
    目を開くと、ここは何も変わっていなかった。<br>
    そうだよな。
  </p>
  <p>
    俺は右へと振り向き、そこにいた彼女へ言った。
  </p>
  <CharacterLine>
    <p>
      「俺の待ち人は、隣にいる君だよ、」
    </p>
  </CharacterLine>
  <p>
    彼女の名前を口にすると、視界がぼやけ始めた。
  </p>
  <CharacterLine>
    「ありがとう、」
  </CharacterLine>
  <p>
    降り落ちた彼女のその言葉に、不思議と滴が染みていた。
  </p>
</div>

<style>
.show {
    display: block;
  }
</style>
