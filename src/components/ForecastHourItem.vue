<script setup lang="ts">
import type { Hour } from '@/api/types/WeatherForecast'
import IconSunrise from './icons/IconSunrise.vue'
import { UseTempUnitMode } from '@/hooks/UseTempUnitMode';
import IconPicker from './icons/IconPicker.vue';


defineProps<{
  hour: Hour,
  index: number,
  today: Date
}>()

const tempUnitMode = UseTempUnitMode()
</script>

<template>
  <div class="flex flex-col gap-4 text-center items-center justify-center whitespace-nowrap">
    <span class="text-lg">{{new Date(hour.time).toLocaleDateString() !== today.toLocaleDateString() ? 'Tom @ ' : ''}}{{ index === 0 ? 'Now' :new Date(hour.time).toLocaleTimeString("en-US", {hour: "numeric"}) }}</span>
    <div
      class="flex flex-col gap-1 justify-center items-center text-center rounded-full bg-black bg-opacity-30 p-4"
      :class="{'bg-slate-500': index === 0}"
    >
      <IconPicker :condition-code="hour.condition.code" :chance-rain="hour.chance_of_rain" :chance-snow="hour.chance_of_snow" height="45px" width="45px" class-name="stroke-white fill-white" />
      <span class="text-2xl opacity-70">{{`${tempUnitMode.get() === 'C' ? hour.temp_c : hour.temp_f}°`}}</span>
    </div>
  </div>
</template>
