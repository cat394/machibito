<script>
  import LinkButton from "../linkButton/LinkButton.svelte";
  import Icon from "../icon/Icon.svelte";
</script>

<div 
  class="my-hero relative w-full bg-no-repeat bg-cover shadow-[inset_0_0_15.5px_3.5px_#d4d4d4]"
>
  <div 
    class="absolute bottom-[12px] left-[12px] opacity-80"
  >
    <LinkButton
      to="https://novelgame.jp/games/show/7057"
      target="_blink"
      extraClasses="rounded-full"
    >
      ゲームでプレイする
      <Icon name="arrow_outward" />
    </LinkButton>
  </div>
</div>

<style>
  .my-hero {
    background-image: url("/assets/images/title-screen.jpg");
    aspect-ratio: 400 / 225;
  }
</style>
