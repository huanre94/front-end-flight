<template>
    <VContainer>
        <v-row>
            <v-col v-for="flight in flights" :key="flight.id" cols="12" sm="6" md="3" lg="4">
                <v-card class="mx-auto" max-width="400">
                    <v-img class="align-end text-white" height="200"
                        src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        cover>
                        <v-card-title>{{ flight.airline }}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pt-4 text-subtitle-1">Duracion: {{ flight.duration }}</v-card-subtitle>

                    <v-card-text>
                        <div># Escalas: {{ flight.stopover }}</div>

                        <div>Precio: ${{ flight.price }}</div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </VContainer>
</template>
  
<script>
import { useFlightStore } from "../store/flightStore";

export default {
    setup() {
        const flightStore = useFlightStore();

        const flights = flightStore.flights;

        return {
            flights,
        };
    },
};
</script>
  