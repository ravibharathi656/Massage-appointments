<template>
    <div class=" flex flex-row bg-green-300 w-full">
        <div>
            <sidebar></sidebar>
        </div>
        <div v-if=" value.SetingUp == 0 ">
            <div class="  rounded justify-center items-center text-center bg-white ml-72 mt-20 shadow-2xl shadow-black">
                <div class=" bg-black">
                    <h1 class=" text-2xl font-bold text-white p-2">Event</h1>
                </div>
                <div class=" flex flex-row text-center items-center justify-center p-4 mt-2">
                    <h1 class=" p-2 font-semibold text-gray-800">Event Name</h1>
                    <input v-model="value.name" type="text" class=" border-0 rounded bg-gray-300" required>
                </div>
                <div class=" flex flex-row text-center items-center justify-center p-4 mt-2">
                    <h1 class=" p-2 font-semibold text-gray-800">Duration</h1>
                    <input v-model="value.duration" type="number" class=" border-0 rounded bg-gray-300" required>
                </div>
                <div class=" flex flex-row text-center items-center justify-center p-4">
                    <h1 class=" p-2 font-semibold text-gray-800">Address</h1>
                    <textarea v-model="value.address" type="text" class=" border-0 rounded bg-gray-300" required></textarea>
                </div>
                <div class=" p-3">
                    <Button variant="solid" @click="Creating()">Create</Button>
                </div>
            </div>
        </div>
        <div v-else class=" ml-72 mt-40 rounded justify-center items-center text-center bg-white h-20 shadow-2xl shadow-black">
            <div class="p-3 text-center">
                <p class="font-semibold text-2xl text-black p-4">🎉 Your event has been created 🎉</p>
            </div>
        </div>
        
        <!-- <pre>
            {{ value.address}}
        </pre> -->
        
    </div>
</template>

<script setup>
import sidebar from "./SideBar.vue"
import { ref,reactive } from "vue";
import { createListResource } from 'frappe-ui';

const value = reactive({
    name:ref(''),
    address:ref(''),
    duration:ref(0),
    SetingUp : ref(0),
})

const Event = createListResource({
    doctype :'Events',
    fields :['name1','duration','location'],
    auto :true,
})


function Creating(){

    value.SetingUp++;

    Event.insert.submit({
        name1:value.name,
        duration:value.duration,
        location:value.address,
    })

}

</script>

<style scoped>

</style>