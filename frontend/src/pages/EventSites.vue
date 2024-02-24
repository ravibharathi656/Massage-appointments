<template>
    <div class=" w-full h-full bg-green-300">
        <div class="  w-[800px] ml-64 h-[635px] bg-white shadow-2xl shadow-black">
            <div v-if="!events.loading && events.doc">
                <div class=" item-center justify-center w-[600px] ml-32 ">
                    <div class=" w-full mt-0 text-center justify-center pt-2">
                        <h1 class=" font-semibold text-[25px]">{{ ecall.name1 }}</h1>
                    </div>
                    <div class=" w-full text-center mt-2">
                            <div class=" flex flex-row justify-center items-center text-center">
                                <img src="https://www.svgrepo.com/show/528155/clock-circle.svg" class=" w-5 h-5" alt="">
                                <p class=" text-gray-600 font-semibold text-sm ml-2"> {{ ecall.duration }} minutes</p>
                            </div>
                            <div class=" flex flex-row justify-center items-center text-center">
                                <img src="https://www.svgrepo.com/show/513450/location-pin.svg" class=" w-5 h-5 mt-3" alt="">
                                <p class=" text-gray-800 font-semibold mt-4 text-md ml-2"> {{ ecall.location }}</p>
                            </div>
                        <p class=" text-gray-600 font-semibold mt-2 text-md">Please arrive 10 minutes before the classs start time.</p>
                    </div>
                </div>
                <div class=" justify-center w-[800px] items-center">
                    <div class="w-[800px] h-[350px] border-t-[1.5px] border-gray-300 mt-3 flex flex-row item-center justify-center">
                        <div class=" w-[480px] text-center p-4 ">
                            <p class=" font-semibold text-xl ml-6">Select a Date & Time</p>
                            <div class=" mt-2 h-96">
                                <!-- <VCalendar borderless expanded :disabled-dates="disabledDates" :color="ColorName"  :attributes="attrs"></VCalendar> -->
                                <VDatePicker :style="{ width: '480px'}" v-model="date" mode="date" borderless :disabled-dates="disabledDates" :color="ColorName"  :attributes="attrs" />
                            </div>
                        </div>
                        <div class=" w-[400px] h-[440px] p-4 text-center flex flex-col items-center ">
                            <p class=" font-semibold text-xl ">{{ formattedDate }}</p>
                            <div class=" overflow-y-scroll p-3 sb">
                                <div v-for="eventstime in EventTimeing.data" :key="eventstime.name1" >
                                    <div v-if="eventstime.name1 == ecall.name && eventstime.date == formattedDateISO">
                                        <div
                                        v-if="eventstime.seats_filled == eventstime.no_of_seats" 
                                        class=" w-[230px] p-2 rounded border-gray-300 border-2 mt-5 text-center bg-white cursor-not-allowed"  >
                                            <p class=" text-lg text-gray-400 font-semibold pb-2 ">{{ etimeing(eventstime.time) }}</p>
                                            <!-- <p class=" text-sm text-black mt-2">{{ eventstime.seats_filled }} / {{ eventstime.no_of_seats }} spots taken</p> -->
                                            <p class=" text-2xs text-gray-400 mt-2">SORRY! this slot is filled</p>
                                        </div>
                                        <div
                                        v-else  
                                        :class="(eventstime.no_of_seats-eventstime.seats_filled) > 5 ? ' bg-white w-[230px] p-2 rounded border-[#a3297a] border-2 mt-5 text-center' :  'bg-white w-[230px] p-2 rounded border-[#a3297a] border-2 mt-5 text-center' " >
                                            <router-link :to="{name:'EventApplying',params:{Eventname:ecall.name, Date:eventstime.date, Time:eventstime.time,Id:eventstime.name}}" >
                                                <p 
                                                :class="(eventstime.no_of_seats-eventstime.seats_filled) > 5 ? ' text-[#a3297a] font-semibold' :  ' text-[#a3297a] font-semibold' ">{{ etimeing(eventstime.time) }}</p>
                                                <p class=" text-sm text-gray-600 mt-2">{{ eventstime.seats_filled }} / {{ eventstime.no_of_seats }} spots taken</p>
                                                <!-- <div v-if="(eventstime.no_of_seats-eventstime.seats_filled) < 5" class=" mt-1">
                                                    <p class=" text-sm text-red-600">Hurry only {{ eventstime.no_of_seats - eventstime.seats_filled }} left</p>
                                                </div> -->
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive,ref,computed } from 'vue';
import { createDocumentResource,createListResource } from 'frappe-ui'
// import { VCalendar } from 'vue-calendars';
import { useStore } from 'vuex';

const store = useStore(); 


// const ename = ref('Beginners massage class');

const enameValue = computed(() => store.state.enameValue);
// alert(enameValue.value)
// alert(store.state.enameValue)
const props = defineProps({
    ename:{
        type:String,
        required:true
    },
    duration: {
        type: String, // Adjust the type according to your data
        required: true
    }
})

function etimeing(time){
    let hour = parseInt(time.split(':')[0]);
    let minute = parseInt(time.split(':')[1]);
    let ampm = hour >= 12? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour? hour : 12; 
    minute = minute < 10? '0' + minute : minute;
    let strTime = hour + ':' + minute +' ' + ampm;
    return strTime;
}

const eventName = props.ename !== null && props.ename !== undefined
    ? props.ename : enameValue.value;

const events = createDocumentResource({
    doctype :'Events',
    name : eventName,
    auto: true
})



const ecall = computed(() => events.doc)


const EventTimeing = createListResource({
    doctype :'EventsTimeing',
    fields :['name1','date','time','no_of_seats','seats_filled','name'],
    auto :true,
})


const renderEventDate = computed(() => {
    const eventDate = [];
    if (!EventTimeing.data) {
        return [];
    }
    for (const event of EventTimeing.data) {
        if(events.doc.name == event.name1){
            const value1 = parseInt(event.date.split('-')[0])
            const value2 = (parseInt(event.date.split('-')[1])) - 1
            const value3 = parseInt(event.date.split('-')[2])
            eventDate.push(new Date(value1,value2,value3));
        }
    }
    return eventDate;
})

const remainingDates = computed(() => {
    const rdates = [];
    const date1 = new Date(2023,0,1);
    const date2 = new Date(2024,11,31);
    while (date1 <= date2) {
        rdates.push(new Date(date1));
        date1.setDate(date1.getDate() + 1);
    }
    return rdates;
})
 

const finalRemaingDates = computed(() => {
    const redates = [];
    if (!remainingDates.value) {
        return [];
    }
    for(const alldates of remainingDates.value ){
        let found = false;
        for(const givendates of renderEventDate.value){
            if(alldates.getDate() == givendates.getDate() && alldates.getMonth() == givendates.getMonth() && alldates.getFullYear() == givendates.getFullYear()){
                found = true; 
                break;
            }
        }
        if (!found) {
            redates.push(alldates); 
        }
    }
    return redates;
})

const date = ref(new Date());

const formattedDate = computed(() => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return date.value.toLocaleDateString('en-US', options);
});

const formattedDateISO = computed(() => {
    const isoDate = date.value.toISOString().split('T')[0];
    return isoDate;
});


const ColorName = ref('pink');
const disabledDates = ref(finalRemaingDates);
const attrs = ref([
  {
    // highlight: 'pink',
    dates: ref(renderEventDate),
  }
]);

</script>

<style scoped>
.i1{
    height: 100vh;
    width: 100vh;
}

.sb::-webkit-scrollbar{
    background-color: white;
    width: 5px;
    height: 5px;
}

.sb::-webkit-scrollbar-thumb{
    width: 1px;
    height: 2px;
    border-radius: 10px;
    background-color: #e4d5df;
}

</style>
