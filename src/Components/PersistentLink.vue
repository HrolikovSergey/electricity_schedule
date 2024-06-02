<script setup lang="ts">
import {computed} from "vue";

defineProps<{
  id: number,
}>()

const siteUrl = computed(() => {
  return import.meta.env.VITE_APP_URL;
})

</script>

<template>
  <div class="shrink-0 grow-0 bg-green-300 mt-2 p-2 rounded text-center">
    Link to this schedule: <span>{{siteUrl}}{{ id }}</span>
  </div>
</template>

<style scoped>

</style>