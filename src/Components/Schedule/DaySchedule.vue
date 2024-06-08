<script setup lang="ts">
import {defineProps} from 'vue';
import type {DaySchedule} from "@/Types";

defineProps<{
  daySchedule: DaySchedule,
}>();

</script>

<template>
  <div class="flex flex-col flex-grow">
    <div class="flex-grow-1">
      <div v-for="item of daySchedule.schedule"
           class="dark:border-slate-700 p-1 w-full h-8 border-gray-100 border"
           :class="item ? 'bg-white dark:bg-slate-800' : 'bg-gray-500 dark:bg-slate-900'"
      ></div>
    </div>
  </div>
</template>

<style scoped>

</style>