<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6">
                <v-text-field v-model="departurePlace" label="Lugar de partida" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field v-model="destinationPlace" label="Lugar de destino" required></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6">
                <v-date-picker v-model="departureDay" label="Fecha Partida" required></v-date-picker>
            </v-col>
            <v-col cols="12" sm="6">
                <v-date-picker v-model="returnDay" label="Fecha Retorno" required></v-date-picker>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn @click="searchFlights" color="primary">Buscar vuelos</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup>

</script>
  
<style></style>
  