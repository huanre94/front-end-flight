<template>
    <VContainer>
        <v-row>
            <v-col v-for="flight in flights" :key="flight.id" cols="12" sm="6">
                <VCard>
                    <VCardItem>
                        <VCardTitle>{{ flight.airline }}</VCardTitle>
                        <VCardSubtitle>
                            <div>Duracion: {{ flight.duration }}</div>
                        </VCardSubtitle>
                        <VCardText>
                            <div># Escalas: {{ flight.stopover }}</div>
                            <div>Precio: ${{ flight.price }}</div>
                        </VCardText>
                    </VCardItem>
                </VCard>
            </v-col>
        </v-row>
    </VContainer>
</template>

<script>
import { useFlightStore } from '../store/flightStore';

export default {
    setup() {
        const flightStore = useFlightStore();

        const flights = flightStore.flights;

        return {
            flights
        }
    }
}
</script>
