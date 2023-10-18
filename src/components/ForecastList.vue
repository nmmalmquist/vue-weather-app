<script setup lang="ts">
import type { Hour } from '@/api/types/WeatherForecast';
import ForecastHourItem from './ForecastHourItem.vue';
import { computed } from 'vue';

const props = defineProps<{
  hoursData: Hour[]
  timeZoneDate: Date
}>()


const filteredHoursToOnlyAfterThisHour = computed(() => props.hoursData.filter((hour) => {
  const inputDate = new Date(hour.time)
  if ( inputDate >= props.timeZoneDate){
    console.log(inputDate, props.timeZoneDate)
    return hour
  }
}))
</script>



<template>
  <ol class="flex gap-4">
    <li v-for="(hour, index) in filteredHoursToOnlyAfterThisHour" v-bind:key="hour.time_epoch">
      <ForecastHourItem :hour="hour" :index="index"/>
    </li>
    </ol>
</template>