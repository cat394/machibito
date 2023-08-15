<script lang="ts">
  export let name = "";
</script>

<div class="collapse collapse-arrow bg-base-200">
  <input type="radio" {name} />
  <div class="collapse-title">
    <slot name="title" />
  </div>
  <div class="collapse-content">
    <slot name="content" />
  </div>
</div>