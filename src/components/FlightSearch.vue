<template>
  <div class="search-hero">
    <!-- Hero background -->
    <div class="hero-overlay" />

    <VContainer class="fill-height d-flex align-center justify-center" style="position:relative; z-index:2;">
      <div style="width:100%; max-width:780px;">
        <!-- Headline -->
        <div class="text-center mb-8">
          <h1 class="text-h3 font-weight-bold text-white mb-2">
            <VIcon icon="mdi-airplane-takeoff" size="40" class="mr-2" />
            Encuentra tu vuelo ideal
          </h1>
          <p class="text-body-1 text-white" style="opacity:0.85">
            Compara precios y elige la mejor opción para tu viaje
          </p>
        </div>

        <!-- Search card -->
        <VCard class="glass-card pa-6" rounded="xl" elevation="0">
          <!-- Trip type toggle -->
          <VBtnToggle
            v-model="tripType"
            mandatory
            rounded="pill"
            density="compact"
            color="primary"
            class="mb-5"
          >
            <VBtn value="roundtrip" prepend-icon="mdi-swap-horizontal" size="small">Ida y vuelta</VBtn>
            <VBtn value="oneway" prepend-icon="mdi-arrow-right" size="small">Solo ida</VBtn>
          </VBtnToggle>

          <!-- Origin / Destination row -->
          <VRow align="center" no-gutters class="mb-3">
            <VCol cols="12" sm="5">
              <VTextField
                v-model="from"
                label="Origen"
                prepend-inner-icon="mdi-airplane-takeoff"
                variant="outlined"
                density="comfortable"
                hide-details
                rounded="lg"
                bg-color="white"
              />
            </VCol>

            <VCol cols="12" sm="2" class="d-flex justify-center py-2 py-sm-0">
              <VBtn
                icon="mdi-swap-horizontal"
                variant="tonal"
                color="primary"
                size="small"
                rounded="circle"
                @click="swapPlaces"
              />
            </VCol>

            <VCol cols="12" sm="5">
              <VTextField
                v-model="to"
                label="Destino"
                prepend-inner-icon="mdi-airplane-landing"
                variant="outlined"
                density="comfortable"
                hide-details
                rounded="lg"
                bg-color="white"
              />
            </VCol>
          </VRow>

          <!-- Dates + Passengers row -->
          <VRow class="mb-5">
            <VCol cols="12" sm="4">
              <VTextField
                v-model="departureDate"
                label="Ida"
                type="date"
                prepend-inner-icon="mdi-calendar-start"
                variant="outlined"
                density="comfortable"
                hide-details
                rounded="lg"
                bg-color="white"
              />
            </VCol>
            <VCol cols="12" sm="4">
              <VTextField
                v-model="returnDate"
                label="Vuelta"
                type="date"
                prepend-inner-icon="mdi-calendar-end"
                variant="outlined"
                density="comfortable"
                hide-details
                :disabled="tripType === 'oneway'"
                rounded="lg"
                bg-color="white"
              />
            </VCol>
            <VCol cols="12" sm="4">
              <VTextField
                v-model.number="passengers"
                label="Pasajeros"
                type="number"
                min="1"
                max="9"
                prepend-inner-icon="mdi-account-group"
                variant="outlined"
                density="comfortable"
                hide-details
                rounded="lg"
                bg-color="white"
              />
            </VCol>
          </VRow>

          <!-- Search button -->
          <div class="d-flex justify-center">
            <VBtn
              color="primary"
              size="large"
              rounded="pill"
              min-width="220"
              elevation="2"
              prepend-icon="mdi-magnify"
              @click="search"
            >
              Buscar vuelos
            </VBtn>
          </div>
        </VCard>
      </div>
    </VContainer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFlightStore } from '../store/flightStore'

const router = useRouter()
const flightStore = useFlightStore()

const tripType     = ref('roundtrip')
const from         = ref('BOG')
const to           = ref('MIA')
const departureDate = ref('')
const returnDate    = ref('')
const passengers    = ref(1)

function swapPlaces() {
  [from.value, to.value] = [to.value, from.value]
}

function search() {
  flightStore.setSearchParams({
    from: from.value,
    to: to.value,
    departureDate: departureDate.value,
    returnDate: returnDate.value,
    passengers: passengers.value,
    tripType: tripType.value,
  })
  router.push('/flight-result')
}
</script>

<style scoped>
.search-hero {
  min-height: 100vh;
  position: relative;
  background: url('https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1920')
    center / cover no-repeat;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(25, 35, 80, 0.80) 0%, rgba(13, 71, 161, 0.70) 100%);
}

.glass-card {
  background: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
