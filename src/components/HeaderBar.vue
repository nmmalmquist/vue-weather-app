<script setup lang="ts">
import { getTodaysForecast } from '@/api/weatherAPI'
import SearchBar from './SearchBar.vue'
import TempUnitSwitch from './TempUnitSwitch.vue'
import type { WeatherForecast } from '@/api/types/WeatherForecast';

const props = defineProps<{
  searchText: string
  setWeatherData: (data: WeatherForecast) => void
  setLoading: () => void
  setNoMatchingLocation: (bool: boolean) => void
}>()

const handleSearchSubmit = async (text: string) => {
  try {
    const response = await getTodaysForecast(text)
    props.setWeatherData(response.data)
    props.setNoMatchingLocation(false)
  } catch (error) {
    props.setNoMatchingLocation(true)
  }
}
</script>
<template>
  <nav class="w-full grid md:grid-cols-12 grid-cols-1 gap-2">
    <div class="md:col-span-9">
      <SearchBar :text="searchText" :handle-submit="handleSearchSubmit" />
    </div>
    <div class="md:col-span-3 flex md:justify-end justify-center pt-4 md:pt-0">
      <TempUnitSwitch />
    </div>
  </nav>
</template>
