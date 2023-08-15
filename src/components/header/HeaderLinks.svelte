<script>
  import { navigationLinks } from "../../data/navigationLinks";
</script>

<ul class="menu menu-horizontal bg-neutral-800 rounded-md">
  {#each navigationLinks as navigationLink}
  <li>
    <a href={navigationLink.to}>
      {navigationLink.text}
    </a>
  </li>
  {/each}
</ul>