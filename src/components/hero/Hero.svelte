<script>
  import LinkButton from "../linkButton/LinkButton.svelte";
  import Icon from "../icon/Icon.svelte";
</script>

<div 
  class="relative shadow-[inset_0_0_15.5px_3.5px_#d4d4d4]"
>
  <picture>
    <source srcset="/assets/images/title_screen.jpg" media="(min-width: 1000px)" />
    <source srcset="/assets/images/title_screen_sm.jpg" media="(max-width: 768px)" />
    <source srcset="/assets/images/title_screen_md.jpg" media="(max-width: 999px)" />
    <img src="/assets/images/title_screen.jpg" alt="待ち人のタイトルスクリーン"/>
  </picture>
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
