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
    viewBox="0 0 59.179 41.61"
  >
    <defs></defs>
    <g class="a">
      <g transform="translate(0 0)">
        <path
        :class="className"
          d="M51.871,94.436A15.607,15.607,0,0,0,23.142,83.575a12.172,12.172,0,0,0-10.838,1.5,12.039,12.039,0,0,0-5.252,9.48,12.078,12.078,0,0,0,5.084,23.056h34.79a12.079,12.079,0,0,0,4.945-23.174Zm-4.945,19.707H12.136a8.619,8.619,0,0,1-2.762-16.8l1.231-.436-.079-1.3A8.611,8.611,0,0,1,14.27,87.93a8.959,8.959,0,0,1,8.963-.607l1.562.708.725-1.554A12.138,12.138,0,0,1,48.66,91.6a14.962,14.962,0,0,1-.879,4.765,14.6,14.6,0,0,0,1.937.945,8.621,8.621,0,0,1-2.792,16.829Z"
          transform="translate(0 -76)"
        />
      </g>
    </g>
  </svg>
</template>

<style scoped>
.a {
  opacity: 0.85;
}
</style>
