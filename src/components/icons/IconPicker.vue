<script setup lang="ts">
import  { Text } from '@/api/types/WeatherForecast'
import IconSnowflake from './IconSnowflake.vue'
import type {IconTypes} from "../icons/types/IconTypes"
import IconSunrise from './IconSunrise.vue';
import IconSunset from './IconSunset.vue';
import IconRaindrop from './IconRaindrop.vue';
import IconExclusion from './IconExclusion.vue';
import IconWind from './IconWind.vue';
import IconGroup from './IconGroup.vue';
import IconTempHigh from './IconTempHigh.vue';
import IconVisibility from './IconVisibility.vue';
import CloudComputing from './CloudComputing.vue';
import IconSun from './IconSun.vue';

const props = defineProps<
  (
    | {
        type?: IconTypes
      }
    & {
        chanceRain?: number
        chanceSnow?: number
        temp_c?: number
        temp_f?: number
        conditionCode?: number
      }
  ) & {
    height: string
    width: string
    className: string
  }
>()

const cloudyCodes = [1006, 1003, 1009, 1087,1063, 1066,1069,1072, 1087, 1147,1135]
const rainyCodeRange = {
  low: 1030,
  high: 1195
}
const snowCodeRange = {
  low: 1198,
  high: 1282
}
</script>

<template>
  <IconSunrise v-if=" type === 'sunrise'" :height="height" :width="width" :class-name="className"/>
  <IconSunset v-else-if=" type === 'sunset'" :height="height" :width="width" :class-name="className"/>
  <IconRaindrop v-else-if=" type === 'raindrop'" :height="height" :width="width" :class-name="className"/>
  <IconExclusion v-else-if=" type === 'humidity'" :height="height" :width="width" :class-name="className"/>
  <IconWind v-else-if=" type === 'wind'" :height="height" :width="width" :class-name="className"/>
  <IconGroup v-else-if=" type === 'arrowsdown'" :height="height" :width="width" :class-name="className"/>
  <IconTempHigh v-else-if=" type === 'thermometer'" :height="height" :width="width" :class-name="className"/>
  <IconVisibility v-else-if=" type === 'eye'" :height="height" :width="width" :class-name="className"/>
  <IconSnowflake v-else-if=" type === 'snow'" :height="height" :width="width" :class-name="className"/>
  <IconSnowflake v-else-if="chanceSnow && chanceSnow > 20 || (conditionCode && (conditionCode >= snowCodeRange.low && conditionCode <= snowCodeRange.high ))" :height="height" :width="width" :class-name="className"/>
  <IconRaindrop v-else-if="(chanceRain && chanceRain > 20) || (conditionCode && (conditionCode >= rainyCodeRange.low && conditionCode <= rainyCodeRange.high ))" :height="height" :width="width" :class-name="className"/>
  <CloudComputing v-else-if="conditionCode && cloudyCodes.includes(conditionCode)" :height="height" :width="width" :class-name="className"/>
  <IconSun v-else :height="height" :width="width" :class-name="className"/>
  
</template>
