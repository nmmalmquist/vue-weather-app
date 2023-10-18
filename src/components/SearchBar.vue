<script setup lang="ts">
import { ref } from 'vue'
import IconSearch from './icons/IconSearch.vue'

const props = defineProps<{
  handleSubmit: (text: string) => void
}>()

const text = ref('')

const onSubmit = async() => {
  props.handleSubmit(text.value)
  text.value = ""
}
</script>

<template>
  <form
    class="flex w-full rounded shadow shadow-white bg-transparent p-1 transition-all"
    v-on:submit.prevent="onSubmit"
  >
    <input
      class="w-full bg-transparent focus:outline-none placeholder-slate-100"
      placeholder="E.g Warsaw"
      aria-label="Search bar"
      v-model="text"
    />
    <div class="m-1">
      <IconSearch height="20px" width="20px" />
    </div>
  </form>
</template>
