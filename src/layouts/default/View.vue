<template>
  <v-main>
    <router-view />

    <button @click="increment">
      {{ count }}
    </button>
  </v-main>
</template>

<script setup>
  //
  
import { ref } from 'vue';

const count = ref(0)

function increment(){
  count.value++
}
</script>
