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
           class="p-1 w-full h-8 border-gray-100 border" :class="item ? 'bg-white' : 'bg-gray-500'"
      ></div>
    </div>
  </div>
</template>

<style scoped>

</style>