<template>
    <VContainer class="fill-height">
        <VCard class="mx-auto pa-12 pb-8" elevation="8" max-width="600">
            <v-row>
                <v-col cols="12" sm="6" class="d-flex justify-center">
                    <v-text-field v-model="departurePlace" label="Lugar de partida" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="d-flex justify-center">
                    <v-text-field v-model="destinationPlace" label="Lugar de destino" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="6" class="d-flex justify-center">
                    <v-text-field type="date" v-model="departureDay" label="Fecha Partida" required />
                </v-col>
                <v-col cols="12" sm="6" class="d-flex justify-center">
                    <v-text-field type="date" v-model="returnDay" label="Fecha Retorno" required></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center">
                    <v-btn @click="showAlert" color="primary">Buscar vuelos</v-btn>
                </v-col>
            </v-row>
        </VCard>
    </VContainer>
</template>
  
<script setup>
import { ref } from 'vue';

const departurePlace = ref('')
const destinationPlace = ref('')

const showAlert = () => {

    alert(departurePlace.value + ' ' + destinationPlace.value)
}   
</script>
  
<style></style>
  