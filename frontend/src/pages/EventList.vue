<template>
    <div class=" flex flex-row bg-green-300 w-full">
        <div>
            <sidebar></sidebar>
        </div>
        <div>
            <div class=" shadow-2xl shadow-black rounded justify-center items-center text-center bg-white ml-72 mt-20 w-[410px] pb-4 overflow-auto">
                <div class=" bg-black">
                    <p class="font-bold text-2xl text-white p-2">Events List</p>
                </div>
                <div class=" items-center justify-center">
                    <ul v-if="EventList.data && EventList.data.length > 0" class="ml-16">
                        <li v-for="event in EventList.data" :key="event.id" class="mt-2">
                            <router-link :to="{ name: 'Evenlists', params: { ename: event.name1, duration: event.duration }}">
                                <div class=" ml-4 bg-white w-64 h-auto border-2 border-gray-600 rounded flex flex-row">
                                    <div class=" border-r-2 border-gray-600">
                                        <img src="https://www.svgrepo.com/show/477413/ticket-10.svg" alt="" class="m-5 h-5">
                                    </div>
                                    <p class="font-semibold text-sm mt-5 ml-2">{{ event.name1 }}</p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import sidebar from "./SideBar.vue"
import { createListResource } from 'frappe-ui';

const EventList = createListResource({
    doctype: 'Events',
    fields: ['name1', 'duration', 'location'],
    auto: true
});

// const value = reactive({
//     selected:ref(0)
// });

// function NewEvent(){
//     value.selected = 1;
// }

// function ListEvent(){
//     value.selected = 2;
// }

// function ScheduleEvent(){
//     value.selected = 3;
// }

</script>

<style scoped>

</style>