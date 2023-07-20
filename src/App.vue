<template>
  <VApp>
    <Sidebar />

    <VMain>
      <FlightSearch />
      <!-- <FlightDisplay /> -->
    </VMain>
  </VApp>
</template>

<script setup>
//
import Sidebar from "./components/Sidebar.vue"
import FlightDisplay from "./components/FlightDisplay.vue";
import FlightSearch from "./components/FlightSearch.vue";
</script>
