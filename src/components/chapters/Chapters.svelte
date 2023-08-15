<script lang="ts">
  import { chapters } from "../../data/chapters";
  import Icon from "../icon/Icon.svelte";
</script>

<div 
  class="grid grid-cols-[repeat(auto-fill,minmax(min(100%,400px),1fr))] gap-14"
>
  {#each chapters as chapter}
  <a 
    class="btn btn-accent btn-outline font-bold transition-all duration-500" 
    href={chapter.to}
  >{chapter.name}<Icon name="auto_stories" />
  </a>
  {/each}
</div>