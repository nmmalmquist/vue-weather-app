<script setup lang="ts">
import IconPicker from './icons/IconPicker.vue';
import IconSunrise from './icons/IconSunrise.vue'
import type { IconTypes } from './icons/types/IconTypes';

defineProps<{
  title: string,
  value: string,
  iconType: IconTypes
}>()

</script>

<template>
  <div class="w-full bg-slate-100 max-w-md rounded bg-opacity-80 p-7">
    <div class="flex flex-col">
      <span class="text-xl text-slate-600 font-bold text-start">{{title}}</span>
      <div class="flex gap-4 items-end justify-between text-slate-700 font-semibold">
        <span class="text-4xl">{{value}}</span>
        <IconPicker height="50px" width="50px" :class-name="`${iconType === 'sunrise' || iconType === 'sunset' ? 'fill-none stroke-slate-700' : 'fill-slate-700 stroke-slate-700'}`" :type="iconType"/>
      </div>
    </div>
  </div>
</template>
