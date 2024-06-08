<script setup lang="ts">
import type {Schedule} from "@/Types";
import Overlay from "@/Components/Overlay.vue";
import DayScheduleComponent from "@/Components/Schedule/DaySchedule.vue";
import ScheduleTitle from "@/Components/Schedule/ScheduleTitle.vue";
import {FwbButton} from "flowbite-vue";
import IconAngleRight from "@/Components/Icons/IconAngleRight.vue";
import IconAngleLeft from "@/Components/Icons/IconAngleLeft.vue";
import {computed, ref} from "vue";
import PersistentLink from "@/Components/PersistentLink.vue";

const props = defineProps<{
  requestInProgress: boolean,
  schedule?: Schedule | null,
}>();

const selectedDay = ref<number>(new Date().getDay() || 7);

const selected = computed(() => {
  return props.schedule?.schedule.find(day => day.day === selectedDay.value);
});

const incDay = () => {
  selectedDay.value = selectedDay.value === 7 ? 1 : selectedDay.value + 1;
}

const decDay = () => {
  selectedDay.value = selectedDay.value === 1 ? 7 : selectedDay.value - 1;
}

</script>

<template>
  <div class="relative">
    <Overlay v-if="requestInProgress"/>
    <div v-if="schedule" class="flex flex-col">
      <PersistentLink v-if="schedule" :id="schedule.id"/>
      <h1 class="text-sm font-bold mt-2 dark:text-white" v-html="schedule.address"></h1>
      <p class="text-sm mt-1 dark:text-slate-400" v-html="schedule.title"></p>

      <div class="flex justify-between items-center mt-2">
        <FwbButton size="lg" @click="decDay">
          <IconAngleLeft class="w-6 h-6"/>
        </FwbButton>
        <div class="font-semibold align-middle dark:text-white">{{ selected?.title }}</div>
        <FwbButton size="lg" @click="incDay">
          <IconAngleRight class="w-6 h-6"/>
        </FwbButton>
      </div>
      <div class="flex flex-nowrap mt-2">
        <ScheduleTitle/>
        <DayScheduleComponent v-if="selected" :daySchedule="selected"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>