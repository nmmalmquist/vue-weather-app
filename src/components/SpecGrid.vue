<script setup lang="ts">
import type { Current, Forecastday } from '@/api/types/WeatherForecast';
import SpecCard from './SpecCard.vue'
import { UseTempUnitMode } from '@/hooks/UseTempUnitMode';

defineProps<{
  forecast: Forecastday,
  current: Current
}>()
const tempUnitMode = UseTempUnitMode()
</script>

<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    <div class="flex justify-center">
      <SpecCard title="SUNRISE" :value="forecast.astro.sunrise" icon-type="sunrise"/>
    </div>
    <div class="flex justify-center">
      <SpecCard title="SUNSET" :value="forecast.astro.sunset" icon-type="sunset"/>
    </div>
    <div class="flex justify-center">
      <SpecCard title="PRECIPITATION" :value="`${forecast.day.daily_chance_of_rain}%`" icon-type="raindrop"/>
    </div>
    <div class="flex justify-center">
      <SpecCard title="HUMIDITY" :value="`${current.humidity}%`" icon-type="humidity"/>
    </div>
    <div class="flex justify-center">
      <SpecCard title="PRECIPITATION" :value="`${current.wind_mph} MPH`" icon-type="wind"/>
    </div>
    <div class="flex justify-center">
      <SpecCard title="PRESSURE" :value="`${current.pressure_mb} hPa`" icon-type="arrowsdown"/>
    </div>
    <div class="flex justify-center">
      <SpecCard title="FEELS LIKE" :value="`${`${tempUnitMode.get() === 'C' ? current.feelslike_c : current.feelslike_f}°`}`" icon-type="thermometer"/>
    </div>
    <div class="flex justify-center">
      <SpecCard title="VISIBILITY" :value="`${current.vis_miles} Miles`" icon-type="eye" />
    </div>
    
  </div>
</template>
