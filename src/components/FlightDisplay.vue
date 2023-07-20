<template>
    <VContainer>
        <div>Vuelos para Brazil</div>

        <VRow :align-content="'center'">
            <VCol v-for="flight in flights" :key="flight.id">
                <VCard>
                    <VCardItem>
                        <VCardTitle>{{ flight.airline }}</VCardTitle>
                        <VCardSubtitle>
                            <div>Duracion: {{ flight.duration }} horas</div>
                        </VCardSubtitle>
                        <VCardText>
                            <div># Escalas: {{ flight.stopover }}</div>
                            <div>Precio: ${{ flight.price }}</div>
                        </VCardText>
                    </VCardItem>
                </VCard>
            </VCol>
        </VRow>
    </VContainer>
</template>

<script>

</script>
