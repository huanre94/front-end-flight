<template>
  <v-app>
    <default-bar />
    <button @click="increment">
      {{ count }}
    </button>
    <default-view />
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'

import { ref } from 'vue';

const count = ref(0)

function increment(){
  count.value++
}
</script>
