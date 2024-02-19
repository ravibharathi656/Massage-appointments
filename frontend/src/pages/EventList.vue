<template>
    <div class=" p-9">
        <div class=" ml-96 bg-blue-300 rounded w-96 items-center text-center justify-center p-4 shadow-2xl shadow-black">
            <div class=" p-4">
                <p class=" font-bold text-3xl text-black">Events List</p>
            </div>
            <ul v-if="EventList.data && EventList.data.length > 0">
                <li v-for="event in EventList.data">
                    <router-link :to="{name:'Evenlists',params:{ename:event.name1 ,  duration: event.duration }}">
                        <div class=" bg-white ml-16 w-60 h-auto p-2 mt-4 mb-2 justify-center text-center border-2 border-gray-600 rounded">
                            <p class=" p-2 font-semibold text-lg">
                                {{  event.name1 }}
                            </p>
                        </div>
                    </router-link>
                    <!-- {{ event.name1 }} -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { createListResource } from 'frappe-ui';

const EventList = createListResource({
    doctype :'Events',
    fields:['name1','duration','location'],
    auto:true
})

</script>

<style scoped>

</style>