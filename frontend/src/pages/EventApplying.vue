<template>
    <div class=" bg-green-300" id="i1">
        <div class=" p-5">
            <div v-if=" value.SetingUp == 0 " class=" rounded w-[500px] mt-28 ml-96 shadow-2xl shadow-black">
                <div class=" text-center  bg-black">
                    <p class=" font-semibold text-2xl text-white p-4">Event Application</p>
                </div>
                <div class=" rounded bg-white w-[500px] border-2 border-white">
                    <div class=" flex flex-row p-3 mt-5">
                        <p class=" font-semibold text-gray-700 text-lg p-2 ml-20">Name : </p>
                        <input v-model="value.Name" type="text" class=" rounded text-sm border-0 bg-gray-400 p-2">
                    </div>
                    <div class=" flex flex-row p-3">
                        <p class=" font-semibold text-gray-700 text-lg p-2 ml-2">Phone Number : </p>
                        <input v-model="value.Mobile" type="text" class=" rounded text-sm border-0 bg-gray-400 p-2">
                    </div>
                    <div class=" items-center justify-center text-center p-4">
                        <Button variant="solid" class=" rounded font-semibold" @click="Applying()">Apply</Button>
                    </div>
                </div>
            </div>
            <div v-else class=" bg-white w-[500px] rounded mt-28 ml-96 shadow-2xl shadow-black ">
                <div class=" text-center p-3">
                    <p class=" font-semibold text-2xl text-black p-4">Thanks for Applying..🤗</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,reactive,computed } from 'vue';
import { createListResource } from 'frappe-ui';

const props = defineProps({
    Eventname:{
        type:String,
        required:true
    },
    Date: {
        type: String, 
        required: true
    },
    Time: {
        type: String, 
        required: true
    },
    Id: {
        type: String, 
        required: true
    }
})

const EventTimeing = createListResource({
    doctype :'EventsTimeing',
    fields :['name1','date','time','no_of_seats','seats_filled','name'],
    auto :true,
})

const value = reactive({
    Name : ref(''),
    Mobile : ref(''),
    Seats : ref(0),
    SetingUp : ref(0),
})

const EventApplying = createListResource({
    doctype : 'EventApply',
    fields : ['event_name','phone_no','name1','date','time','seats'],
    auto:true
}) 

function Applying(){
    
    const seat1 = value.Seats + 1;
    value.SetingUp++;

    EventApplying.insert.submit({
        event_name:props.Eventname,
        phone_no:value.Mobile,
        name1:value.Name,
        date:props.Date,
        time:props.Time,
        seats:seat1,
        id:props.Id
    })

}

</script>

<style scoped>

#i1{
    height: 100vh;
}

</style>