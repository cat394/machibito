<script lang="ts">
  export let fieldName = "";
</script>

<label>
  <div class="mb-3">{fieldName}：</div>
  <slot />
</label>