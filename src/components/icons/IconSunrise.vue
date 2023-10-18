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
    viewBox="0 0 49.518 45.38"
  >
    <defs></defs>
    <g transform="translate(2 2)">
      <path
        :class="'a ' + className"
        d="M31.19,29.845a10.345,10.345,0,0,0-20.69,0"
        transform="translate(1.914 3.259)"
      />
      <path :class="'a ' + className" d="M18,3V17.483" transform="translate(4.759 -3)" />
      <path :class="'a ' + className" d="M6.33,15.33l2.938,2.938" transform="translate(0.332 1.677)" />
      <path :class="'a ' + className" d="M1.5,27H5.638" transform="translate(-1.5 6.104)" />
      <path :class="'a ' + className" d="M31.5,27h4.138" transform="translate(9.88 6.104)" />
      <path :class="'a ' + className" d="M27.54,18.268l2.938-2.938" transform="translate(8.378 1.677)" />
      <path :class="'a ' + className" d="M47.018,33H1.5" transform="translate(-1.5 8.38)" />
      <path :class="'a ' + className" d="M12,11.276,20.276,3l8.276,8.276" transform="translate(2.483 -3)" />
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
