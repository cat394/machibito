<script>
  import LinkButton from "../linkButton/LinkButton.svelte";
  import Media from "../media/Media.svelte";

  const footerLinkStyle = "btn-link hover:no-underline font-medium";
</script>

<footer
  class="mt-24 footer footer-center p-10 pb-32 md:pb-10 bg-neutral-900 text-base-content rounded"
>
  <div>
    <span class="footer-title text-left">Social</span>
    <div class="grid grid-flow-col gap-4">
      <a
        class={footerLinkStyle}
        target="_blink"
        href="https://twitter.com/RYO_3789">
          X（旧Twitter）
      </a>
      <a
        class={footerLinkStyle}
        target="_blink"
        href="https://www.instagram.com/ryo_33579/">
          Instagram
      </a>
    </div>
  </div>
  <p>Copyright © 2023 - All right reserved by りょう</p>
</footer>
