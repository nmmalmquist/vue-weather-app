<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import HeaderBar from './components/HeaderBar.vue'
import { UseTempUnitMode } from '@/hooks/UseTempUnitMode'
import IconSnowflake from './components/icons/IconSnowflake.vue'
import IconLocation from './components/icons/IconLocation.vue'
import LoadingSpinner from './components/icons/LoadingSpinner.vue'
import ForecastList from './components/ForecastList.vue'
import SpecGrid from './components/SpecGrid.vue'
import type { WeatherForecast } from './api/types/WeatherForecast'
import { getTodaysForecast } from './api/weatherAPI'
import IconPicker from './components/icons/IconPicker.vue'

const tempUnitMode = UseTempUnitMode()
const searchText = ref('')
const weatherData = ref<WeatherForecast>()
const isLoading = ref(true)
const noMatchingLocation = ref(false)

onBeforeMount(async () => {
  const response = await getTodaysForecast('Nashville')
  weatherData.value = response.data
  isLoading.value = false
})
</script>

<template>
  <main
    class="w-full min-h-screen flex items-center flex-col text-white transition-all"
    :class="{
      'custom-background-gradient-celsius': tempUnitMode.get() === 'C',
      'custom-background-gradient-farenheight': tempUnitMode.get() === 'F'
    }"
  >
    <div class="container py-6 px-2 gap-16 lg:gap-28 flex flex-col">
      <HeaderBar
        :search-text="searchText"
        :set-weather-data="
          (data) => {
            weatherData = data
            isLoading = false
          }
        "
        :set-loading="() => (isLoading = true)"
        :set-no-matching-location="(bool) => (noMatchingLocation = bool)"
      />

      <div
        v-if="noMatchingLocation"
        class="container flex flex-col items-center justify-center gap-6 mt-"
      >
        <IconLocation height="200px" width="200px" class-name="fill-red-900" />
        <span class="text-black opacity-80 text-3xl">City Not Found</span>
        <span class="text-black opacity-40 text-lg">Did you make a typo?</span>
      </div>
      <div v-else-if="weatherData && !isLoading" class="gap-16 flex flex-col">
        <div class="w-full grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div class="lg:col-span-3 flex flex-col items-center text-center">
            <div class="flex gap-5 justify-center items-center">
              <div class="flex flex-col">
                <h2 class="text-3xl">Today</h2>
                <span>{{ new Date().toDateString() }}</span>
              </div>
              <IconPicker :condition-code="weatherData.current.condition.code" class-name="fill-white" height="60px" width="60px" />
            </div>
            <span class="text-[5rem]">{{
              `${
                tempUnitMode.get() === 'C' ? weatherData.current.temp_c : weatherData.current.temp_f
              }°`
            }}</span>
            <div class="flex gap-3 items-center">
              <IconLocation height="20px" width="20px" class-name="fill-white" />
              <span class="text-2xl">{{
                `${weatherData.location.name}, ${weatherData.location.region}`
              }}</span>
            </div>
          </div>
          <div class="lg:col-span-9 flex overflow-auto">
            <ForecastList :hours-data="weatherData.forecast.forecastday[0].hour" :time-zone-date="new Date(weatherData.location.localtime)"/>
          </div>
        </div>
        <div class="w-full text-center md:text-start flex flex-col gap-4">
          <h2 class="text-2xl">Weather Details</h2>
          <SpecGrid
            :forecast="weatherData.forecast.forecastday[0]"
            :current="weatherData.current"
          />
        </div>
      </div>
      <div v-else class="w-full min-h-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    </div>
  </main>
</template>

<style>
.custom-background-gradient-celsius {
  background: transparent linear-gradient(180deg, #20d1bc 0%, #1aade3 100%) 0% 0% no-repeat
    padding-box;
}
.custom-background-gradient-farenheight {
  background: transparent linear-gradient(180deg, #fac004 0%, #e33f1a 100%) 0% 0% no-repeat
    padding-box;
}
</style>
