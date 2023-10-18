<script setup lang="ts">
import { UseTempUnitMode } from '@/hooks/UseTempUnitMode'
const tempUnitMode = UseTempUnitMode()
</script>
<template>
  <div
    class="rounded-full bg-white flex items-center justify-center gap-2 text-slate-300 font-bold text-xl w-min px-10"
  >
    <button
      :class="tempUnitMode.get() === 'C' && 'text-blue-900'"
      @click="() => tempUnitMode.set('C')"
    >
      C
    </button>
    <span>/</span>
    <button
      :class="tempUnitMode.get() === 'F' && 'text-orange-600'"
      @click="() => tempUnitMode.set('F')"
    >
      F
    </button>
  </div>
</template>
