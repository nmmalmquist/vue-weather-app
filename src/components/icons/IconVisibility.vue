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
    viewBox="0 0 47.286 32.241"
  >
    <defs></defs>
    <path
    :class="className"
      d="M25.143,6.75A25.42,25.42,0,0,0,1.5,22.87a25.4,25.4,0,0,0,47.286,0A25.42,25.42,0,0,0,25.143,6.75Zm0,26.867A10.747,10.747,0,1,1,35.89,22.87,10.751,10.751,0,0,1,25.143,33.617Zm0-17.2a6.448,6.448,0,1,0,6.448,6.448A6.44,6.44,0,0,0,25.143,16.422Z"
      transform="translate(-1.5 -6.75)"
    />
  </svg>
</template>
