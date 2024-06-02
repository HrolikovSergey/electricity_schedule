<script setup lang="ts">
import type {Schedule} from "@/Types";
import Overlay from "@/Components/Overlay.vue";
import DayScheduleComponent from "@/Components/Schedule/DaySchedule.vue";
import ScheduleTitle from "@/Components/Schedule/ScheduleTitle.vue";
import {FwbButton} from "flowbite-vue";
import IconAngleRight from "@/Components/Icons/IconAngleRight.vue";
import IconAngleLeft from "@/Components/Icons/IconAngleLeft.vue";
import {ref} from "vue";
import PersistentLink from "@/Components/PersistentLink.vue";

const props = defineProps<{
  requestInProgress: boolean,
  schedule?: Schedule | null,
}>();

const selectedDay = ref<number>(new Date().getDay() + 1);

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
      <h1 class="text-sm font-bold" v-html="schedule.address"></h1>
      <p class="text-sm mt-1" v-html="schedule.title"></p>

      <div class="flex justify-between mt-2">
        <FwbButton size="lg" @click="decDay">
          <IconAngleLeft class="w-6 h-6"/>
        </FwbButton>
        <div class="font-semibold align-middle">Пн, 27.05</div>
        <FwbButton size="lg" @click="incDay">
          <IconAngleRight class="w-6 h-6"/>
        </FwbButton>
      </div>
      <div class="flex flex-nowrap mt-2">
        <ScheduleTitle/>
        <DayScheduleComponent v-for="day of schedule.schedule" :key="day.day" v-show="selectedDay == day.day"
                              :daySchedule="day"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>