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
    viewBox="0 0 47.288 41.371"
  >
    <defs></defs>
    <path
      :class="className"
      d="M14.472,22.937H1.478A1.482,1.482,0,0,0,0,24.415V27.37a1.482,1.482,0,0,0,1.478,1.478H14.611A3.085,3.085,0,0,1,17.7,31.3a2.96,2.96,0,0,1-5.726,1.432,1.459,1.459,0,0,0-1.4-.933H7.536a1.47,1.47,0,0,0-1.468,1.7A8.867,8.867,0,0,0,23.56,30.639,9.061,9.061,0,0,0,14.472,22.937ZM1.478,19.982H32.509a8.868,8.868,0,1,0-8.7-10.556,1.456,1.456,0,0,0,1.459,1.69H28.3a1.45,1.45,0,0,0,1.4-.933,2.96,2.96,0,0,1,5.726,1.432,3.078,3.078,0,0,1-3.085,2.457H1.478A1.482,1.482,0,0,0,0,15.548V18.5A1.482,1.482,0,0,0,1.478,19.982Zm35.465,2.955H22.507a11.674,11.674,0,0,1,3.676,5.911H36.942A4.433,4.433,0,1,1,33.1,35.46a1.529,1.529,0,0,0-1.339-.7H28.64a1.48,1.48,0,0,0-1.413,1.949,10.332,10.332,0,1,0,9.716-13.77Z"
      transform="translate(0 -2.253)"
    />
  </svg>
</template>
