<template>
    <div v-if="!events.loading && events.doc">
        <div class=" w-full mt-8 text-center justify-center">
            <h1 class=" font-semibold text-[45px]">{{ ecall.name1 }}</h1>
        </div>
        <div class=" w-full text-center mt-5">
            <p class=" text-gray-600 font-semibold text-lg">🕗 {{ ecall.duration }} minutes</p>
            <p class=" text-gray-800 font-semibold mt-4 text-xl ">📍 {{ ecall.location }}</p>
            <p class=" text-gray-600 font-semibold mt-5 text-lg">Please arrive 10 minutes before the classs start time.</p>
        </div>
        <div class=" w-full h-[350px] border-t-[1.5px] border-gray-600 mt-10 flex flex-row">
            <div class=" w-[1000px] text-center p-4">
                <p class=" font-bold text-xl ">Select Date & Time</p>
                <div class=" mt-5">
                    <!-- <VCalendar borderless expanded :disabled-dates="disabledDates" :color="ColorName"  :attributes="attrs"></VCalendar> -->
                    <VDatePicker style="height:100%" v-model="date" mode="date" borderless expanded :disabled-dates="disabledDates" :color="ColorName"  :attributes="attrs" />
                </div>
            </div>
            <div class=" w-[400px] h-[350px] p-4 text-center flex flex-col items-center">
                <p class=" font-bold text-xl ">{{ formattedDate }}</p>
                <div class=" overflow-y-auto p-3 scroll-smooth" style="scrollbar-width: thin">
                    <div v-for="eventstime in EventTimeing.data" :key="eventstime.name1" >
                        <div v-if="eventstime.name1 == ecall.name && eventstime.date == formattedDateISO">
                            <div
                            v-if="eventstime.seats_filled == eventstime.no_of_seats" 
                            class=" w-[200px] p-2 rounded border-gray-600 border-2 mt-5 text-center bg-gray-400"  >
                                <p class=" text-lg text-black font-semibold ">{{ etimeing(eventstime.time) }}</p>
                                <p class=" text-sm text-black mt-2">{{ eventstime.seats_filled }} / {{ eventstime.no_of_seats }} spots taken</p>
                                <p class=" text-2xs text-black mt-2">SORRY! this section slot has bee filled</p>
                            </div>
                            <div
                            v-else 
                            @click="setSelected()" 
                            :class="(eventstime.no_of_seats-eventstime.seats_filled) > 5 ? ' bg-white w-[200px] p-2 rounded border-pink-500 border-2 mt-5 text-center' :  'bg-yellow-400 w-[200px] p-2 rounded border-yellow-600 border-2 mt-5 text-center' " >
                                <router-link :to="{name:'EventApplying',params:{Eventname:ecall.name, Date:eventstime.date, Time:eventstime.time,Id:eventstime.name}}" >
                                    <p 
                                    :class="(eventstime.no_of_seats-eventstime.seats_filled) > 5 ? ' text-pink-600 font-semibold' :  ' text-black font-semibold' ">{{ etimeing(eventstime.time) }}</p>
                                    <p class=" text-sm text-gray-600 mt-2">{{ eventstime.seats_filled }} / {{ eventstime.no_of_seats }} spots taken</p>
                                    <div v-if="(eventstime.no_of_seats-eventstime.seats_filled) < 5" class=" mt-3">
                                        <p class=" text-sm text-red-600">Hurry only {{ eventstime.no_of_seats - eventstime.seats_filled }} left</p>
                                    </div>
                                </router-link>
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


// const ename = ref('Beginners massage class');

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

const events = createDocumentResource({
    doctype :'Events',
    name : props.ename,
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
    const date1 = new Date(2024,0,1);
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


const ColorName = ref('red');
const disabledDates = ref(finalRemaingDates);
const attrs = ref([
  {
    highlight: 'pink',
    dates: ref(renderEventDate),
  }
]);



const props1 = reactive({
    name: 'Not selected',
    trigger: ref(0)
});
function setSelected() {
    props1.name = 'Selected';
    // console.log(dates.value);
}




</script>

<style scoped>

</style>
