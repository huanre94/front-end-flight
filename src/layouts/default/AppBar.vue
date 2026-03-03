<template>
  <v-app-bar flat class="app-bar-gradient" elevation="0">
    <v-app-bar-nav-icon color="white" @click="$emit('toggle-drawer')" />
    <v-app-bar-title>
      <span class="d-flex align-center text-white font-weight-bold">
        <v-icon icon="mdi-airplane" class="mr-2" />
        SkySearch
      </span>
    </v-app-bar-title>
    <template #append>
      <v-btn icon="mdi-bell-outline" color="white" variant="text" />
      <v-avatar color="white" size="34" class="mr-3" style="cursor:pointer">
        <v-img src="https://avatars.githubusercontent.com/u/11721174?v=4" />
      </v-avatar>
    </template>
  </v-app-bar>
</template>

<script setup>
defineEmits(['toggle-drawer'])
</script>

<style scoped>
.app-bar-gradient {
  background: linear-gradient(90deg, #1565C0 0%, #1976D2 60%, #42A5F5 100%) !important;
}
</style>
