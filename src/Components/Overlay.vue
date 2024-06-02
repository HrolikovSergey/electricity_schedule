<script setup lang="ts">

import {FwbSpinner} from "flowbite-vue";
</script>

<template>
  <div class="absolute bg-black bg-opacity-40 z-50 w-full h-full left-0 top-0 border-gray-400 rounded">
    <span class="absolute">
      <FwbSpinner size="12" class="absolute"/>
    </span>
  </div>
</template>

<style scoped>
span {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>