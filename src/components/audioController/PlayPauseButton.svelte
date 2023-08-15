<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Icon from "../icon/Icon.svelte";

  export let isPlay = false;
  
  let active = false;
  let iconName = "";

  const dispatch = createEventDispatcher();

  const handleClick = () => dispatch("play-pause-button-click");
  
  $: {
    iconName = isPlay ? "stop_circle" : "play_circle";
    active = isPlay;
  }
</script>

<button class="grid place-items-center {active ? 'active' : ''}" on:click={handleClick}>
  <Icon name={iconName} extraClass="hover:text-[hsl(var(--p))] transition-all duration-300" />
</button>

<style>
  .active {
    color: hsl(var(--p));
  }
</style>
