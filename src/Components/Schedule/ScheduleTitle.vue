<script setup lang="ts">
const hourNumberToText = (hour: number) => {
  const fromText = `${hour - 1 < 10 ? '0' : ''}${hour - 1}:00`;
  const toText = `${hour < 10 ? '0' : ''}${hour}:00`;
  return `${fromText} - ${toText}`;
}
</script>

<template>
  <div class="flex flex-col flex-grow-0">
    <div class="flex-grow-1">
      <div v-for="n in 24"
           class="text-center whitespace-nowrap p-1 h-8 bg-blue-700 border-gray-100 border text-white flex-grow-0 flex-shrink-0 dark:border-slate-600 dark:bg-slate-800">
        {{ hourNumberToText(n) }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>