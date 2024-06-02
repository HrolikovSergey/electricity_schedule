<script setup lang="ts">

import {FwbButton, FwbInput} from "flowbite-vue";

import {computed, onMounted, ref} from "vue";
import axios from "axios";
import type {DaySchedule, DayScheduleApiResponse, Schedule, ScheduleApiResponse} from "@/Types";
import ScheduleComponent from "@/Components/Schedule/Schedule.vue";

const id = ref<string>('');
const apiUrl = computed(() => {
  return import.meta.env.VITE_GET_SCHEDULE_URL + `?id=${id.value}`;
});
const currentScheduleUrl = computed(() => {
  return import.meta.env.VITE_APP_URL + `${id.value}`;
});
const schedule = ref<Schedule | null>(null);
const requestInProgress = ref<boolean>(false);

onMounted(() => {
  const path = window.location.pathname.split('/').pop();
  if (path) {
    id.value = path;
    performSearch()
  }
});

const performSearch = () => {
  requestInProgress.value = true;
  axios.get(apiUrl.value).then(response => {
    if (response.data?.success) {
      schedule.value = response.data?.data.map((item: ScheduleApiResponse) => {
        return {
          id: item?.SearchId,
          address: item?.SearchMsg.split("<br>").shift(),
          title: item?.SheduleTitle,
          schedule: item?.Shedule.map((day: DayScheduleApiResponse) => {
            let daySchedule = {
              day: day.DayNo,
              title: day.DayName,
              schedule: [],
            } as DaySchedule;

            for (let i = 1; i < 25; i++) {
              const time = `H${i < 10 ? '0' : ''}${i}`;
              daySchedule.schedule.push(!!(day as any)[time]); //wtf
            }
            return daySchedule;
          })
        } as Schedule
      }).shift();
    }
  }).finally(() => {
    requestInProgress.value = false;
  });
}
</script>

<template>
  <div class="flex w-full flex-grow-0">
    <FwbInput
        v-model="id"
        size="lg"
        placeholder="ID Абонента"
        class="flex-grow"
        :disabled="requestInProgress"
    />
    <FwbButton size="lg" class="ml-2 flex items-center" :href="currentScheduleUrl" :disabled="id.length === 0 || requestInProgress">
      Пошук
    </FwbButton>
  </div>
  <ScheduleComponent
      class="mt-2 flex-grow flex-shrink basis-full"
      :request-in-progress="requestInProgress"
      :schedule="schedule"/>
</template>

<style scoped>
</style>
