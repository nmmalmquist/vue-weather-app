<script setup lang="ts">
defineProps<{
  className?: string
  height: string
  width: string
}>()
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :height="height"
    :width="width"
    viewBox="0 0 49.508 45.371"
  >
    <defs></defs>
    <g transform="translate(2 2)">
      <path
      :class="'a ' + className"
        d="M30.844,29.672a10.172,10.172,0,0,0-20.344,0"
        transform="translate(2.082 3.379)"
      />
      <path :class="'a ' + className" d="M18,17.241V3" transform="translate(4.754 -3)" />
      <path :class="'a ' + className" d="M6.33,15.33l2.889,2.889" transform="translate(0.221 1.695)" />
      <path :class="'a ' + className" d="M1.5,27H5.569" transform="translate(-1.5 6.233)" />
      <path :class="'a ' + className" d="M31.5,27h4.069" transform="translate(9.939 6.233)" />
      <path :class="'a ' + className" d="M27.54,18.219l2.889-2.889" transform="translate(8.528 1.695)" />
      <path :class="'a ' + className" d="M47.008,33H1.5" transform="translate(-1.5 8.371)" />
      <path :class="'a ' + className" d="M28.275,7.5l-8.138,8.138L12,7.5" transform="translate(2.616 -1.269)" />
    </g>
  </svg>
</template>
<style scoped>
.a {
  /* stroke: rgba(19, 38, 74, 0.8); */
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 4px;
}
</style>
