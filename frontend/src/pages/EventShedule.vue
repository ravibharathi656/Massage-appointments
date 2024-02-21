<template>
    <div class=" flex flex-row bg-green-300 w-full">
        <div>
            <sidebar></sidebar>
        </div>
        <div v-if=" value.SetingUp == 0 ">
            <div class="  rounded justify-center items-center text-center bg-white ml-72 mt-40">
                <div class=" bg-black">
                    <h1 class=" text-2xl font-bold text-white p-2">Event Shedule</h1>
                </div>
                <div class=" flex flex-row text-center items-center justify-center p-4 mt-2">
                    <h1 class=" p-2 font-semibold text-gray-800">Event Name</h1>
                    <select v-model="value.name" type="text" class=" border-0 rounded bg-gray-300 w-64" required>
                        <option v-for="event of Event.data" :key="event.name1" class="text-gray-800 bg-white hover:bg-gray-200 rounded mt-2">
                            {{ event.name1 }}
                        </option>
                    </select>
                </div>
                <div class=" flex flex-row text-center items-center justify-center p-4">
                    <h1 class=" p-2 font-semibold text-gray-800">Date</h1>
                    <input v-model="value.date" type="date" class=" border-0 rounded bg-gray-300 w-64" required>
                </div>
                <div class=" flex flex-row text-center items-center justify-center p-4">
                    <h1 class=" p-2 font-semibold text-gray-800">Time</h1>
                    <input type="time" v-model="value.time" class=" border-0 rounded bg-gray-300 w-64" required>
                </div>
                <div class=" flex flex-row text-center items-center justify-center p-4">
                    <h1 class=" p-2 font-semibold text-gray-800">Seats</h1>
                    <input type="number" v-model="value.seats" class=" border-0 rounded bg-gray-300 w-64" required>
                </div>
                <div class=" p-3">
                    <Button variant="solid" @click="Sheduling()">Shedule</Button>
                </div>
            </div>
        </div>
        <div v-else class=" bg-white w-[500px] rounded mt-28 ml-96 shadow-2xl shadow-white h-20 ">
            <div class=" text-center p-3 h-2">
                <p class=" font-semibold text-2xl text-black p-4">Thanks for Applying</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import sidebar from "./SideBar.vue"
import { ref,reactive } from "vue";
import { createListResource } from "frappe-ui";

const value = reactive({
    name:ref(''),
    date:ref(''),
    time:ref(''),
    seats:ref(0),
    SetingUp : ref(0),
})

const Event = createListResource({
    doctype :'Events',
    fields :['name1','duration','location'],
    auto :true,
    onload(doc){
        console.log(doc)
    }
})

const EventSheduling = createListResource({
    doctype :'EventsTimeing',
})

function Sheduling(){
    if (value.seats <= 9){
        alert("The Seat should be atleast 10")
    }
    else{
        value.SetingUp++;
        EventSheduling.insert.submit({
            name1:value.name,
            date:value.date,
            time:value.time,
            no_of_seats:value.seats
        })
    }

}

</script>

<style scoped>

</style>