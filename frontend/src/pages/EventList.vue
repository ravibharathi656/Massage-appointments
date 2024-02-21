<template>
    <div class=" flex flex-row bg-green-300 w-full">
        <div>
            <sidebar></sidebar>
        </div>
        <div>
            <div class="  rounded justify-center items-center text-center bg-white ml-72 mt-40 w-[350px] p-2 overflow-auto">
                <div class="p-4">
                    <p class="font-bold text-3xl text-black underline">Events List</p>
                </div>
                <div>
                    <ul v-if="EventList.data && EventList.data.length > 0" class="ml-16">
                        <li v-for="event in EventList.data" :key="event.id" class="mt-4">
                            <router-link :to="{ name: 'Evenlists', params: { ename: event.name1, duration: event.duration }}">
                                <div class="bg-white w-60 h-auto border-2 border-gray-600 rounded flex flex-row">
                                    <img src="https://www.svgrepo.com/show/477413/ticket-10.svg" alt="" class="m-5 h-5">
                                    <p class="font-semibold text-sm mt-5">{{ event.name1 }}</p>
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

</script>

<style scoped>

</style>