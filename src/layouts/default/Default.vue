<template>
  <v-app>
    <default-bar @toggle-drawer="drawer = !drawer" />
    <default-sidebar v-model="drawer" />
    <default-view />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import DefaultSidebar from '@/components/Sidebar.vue'

const drawer = ref(true)
</script>
