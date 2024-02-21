<template>
    <div>
        <div class=" h-[620px] w-[200px] rounded shadow-lg shadow-white text-center items-center bg-white">
            <router-link to="/EventList/Eventname1">
                <div class=" flex flex-row p-2">
                        <img src="https://www.svgrepo.com/show/502464/add.svg" alt="" class=" m-5 h-5">
                        <p class=" font-semibold mt-4">Create Event</p>
                </div>
            </router-link>
            <router-link to="/EventList/EventShedule">
                <div class=" flex flex-row p-2 text-center items-center">
                    <img src="https://www.svgrepo.com/show/483252/schedule-calendar.svg" alt="" class=" m-5 h-5">
                    <p class=" font-semibold">Schedule Event</p>
                </div>
            </router-link>
            <router-link to="/EventList/EventList">
                <div class=" flex flex-row p-2 text-center items-center">
                    <img src="https://www.svgrepo.com/show/532194/list-ul.svg" alt="" class=" m-5 h-5">
                    <p class=" font-semibold">List Event</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>