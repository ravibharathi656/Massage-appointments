<template>
    <div>
      <div class="h-[620px] w-[200px] rounded shadow-lg shadow-white bg-white">
        <div class="h-12 bg-blue-900 text-center">
          <h1 class="text-white font-bold pt-4 text-2xl">View</h1>
        </div>
        <router-link :to="{ name: 'EventListing', query: { selected: value.selected }}">
            <div class="flex flex-row text-center items-center border-b-[1px] border-black" @click="selectItem(3)" :class="{'bg-gray-400': value.selected == 3, 'bg-white': value.selected != 3}">
              <img src="https://www.svgrepo.com/show/532194/list-ul.svg" alt="" class="m-5 h-5">
              <p class="font-semibold">List Event</p>
            </div>
          </router-link>
        <router-link :to="{ name: 'EventCreating', query: { selected: value.selected }} " >
          <div class="flex flex-row border-b-[1px] border-black" @click="selectItem(1)" :class="{'bg-gray-400': value.selected == 1, 'bg-white': value.selected != 1}">
            <img src="https://www.svgrepo.com/show/502464/add.svg" alt="" class="m-5 h-5">
            <p class="font-semibold mt-4">Create Event</p>
          </div>
        </router-link>
        <router-link :to="{ name: 'EventShedule', query: { selected: value.selected }}">
          <div class="flex flex-row text-center items-center border-b-[1px] border-black" @click="selectItem(2)" :class="{'bg-gray-400': value.selected == 2, 'bg-white': value.selected != 2}">
            <img src="https://www.svgrepo.com/show/483252/schedule-calendar.svg" alt="" class="m-5 h-5">
            <p class="font-semibold">Schedule Event</p>
          </div>
        </router-link>
        <router-link :to="{ name: 'EventApplied', query: { selected: value.selected }}">
            <div class="flex flex-row text-center items-center border-b-[1px] border-black" @click="selectItem(4)" :class="{'bg-gray-400': value.selected == 4, 'bg-white': value.selected != 4}">
              <img src="https://www.svgrepo.com/show/435930/register.svg" alt="" class="m-5 h-5">
              <p class="font-semibold">Applied Members</p>
            </div>
          </router-link>  
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  import { useRoute } from 'vue-router';
  
  function selectItem(item) {
    value.selected = item;
  }

  const route = useRoute();
  const value = reactive({
    selected: parseInt(route.query.selected) || 0
  });
  
  
  </script>
  
  <style scoped>
  
  </style>
  