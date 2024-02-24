<template>
    <div class="flex flex-row bg-green-300 w-full">
        <div>
            <sidebar></sidebar>
        </div>
        <div>
            <div class="rounded justify-center items-center text-center w-[700px] bg-white ml-56 mt-20 shadow-2xl shadow-black">
                <div class="bg-black">
                    <h1 class="text-2xl font-bold text-white p-2">Registered Candidates</h1>
                </div>
                <div class="overflow-hidden">
                    <div class="flex flex-row px-4 py-2">
                        <div class=" flex flex-row">
                            <p class=" font-semibold text-lg pr-4 pt-2 mt-1">Filter using event name :</p>
                            <select v-model="filter" type="text"  class=" border rounded px-2 py-1 focus:outline-none focus:ring focus:border-blue-300 h-12 w-64 mt-1 pb-2">
                                <option v-for="event of Event.data" :key="event.name1" class="text-gray-800 bg-white hover:bg-gray-200 rounded mt-2">
                                    {{ event.name1 }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div id="print-table" class=" h-64 overflow-y-auto" >
                        <table class="w-full h-20 ">
                            <thead class=" fixed bg-white w-auto" >
                                <tr>
                                    <th class=" px-6 py-2">Name</th>
                                    <th class="px-15 py-2">Event Name</th>
                                    <th class="px-12 py-2">Date</th>
                                    <th class="px-8 py-2">Time</th>
                                    <th class="px-4 py-2">Phone Number</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td class="border px-4 py-2 pt-7" colspan="5"></td>
                                </tr>
                                <tr v-for="item in filteredData" :key="item.id">
                                    <td class="border px-4 py-2">{{ item.name1 }}</td>
                                    <td class="border px-4 py-2">{{ item.event_name }}</td>
                                    <td class="border px-4 py-2">{{ item.date }}</td>
                                    <td class="border px-4 py-2">{{ item.time }}</td>
                                    <td class="border px-4 py-2">{{ item.phone_no }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="mt-0 pb-[1px]">
                    <img src="https://www.svgrepo.com/show/500978/print.svg" alt="Print" class="m-7 h-7 cursor-pointer" @click="printTable">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import sidebar from "./SideBar.vue"
import { ref, computed } from "vue";
import { createListResource } from "frappe-ui";

const Registered = createListResource({
    doctype: 'EventApply',
    fields: ['name1', 'event_name', 'date', 'time', 'phone_no'],
    auto: true,
})

const Event = createListResource({
    doctype: 'Events',
    fields: ['name1',],
    auto: true,
})

const filter = ref('');

const filteredData = computed(() => {
    const searchTerm = filter.value.toLowerCase();
    return Registered.data.filter(item => item.event_name.toLowerCase().includes(searchTerm));
});

const printTable = () => {
    var printContents = document.getElementById("print-table").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload();
}

</script>

<style scoped>

</style>
