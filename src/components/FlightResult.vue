<template>
  <VContainer class="py-6" style="max-width: 860px;">

    <!-- Header summary -->
    <div class="d-flex align-center justify-space-between flex-wrap gap-2 mb-4">
      <div>
        <h2 class="text-h5 font-weight-bold">
          {{ store.searchParams.from }}
          <VIcon icon="mdi-arrow-right" size="18" class="mx-1" />
          {{ store.searchParams.to }}
        </h2>
        <p class="text-body-2 text-medium-emphasis mt-1">
          {{ store.totalFlights }} vuelos disponibles
          · {{ store.searchParams.passengers }}
          <VIcon icon="mdi-account" size="14" />
          · {{ store.searchParams.tripType === 'roundtrip' ? 'Ida y vuelta' : 'Solo ida' }}
        </p>
      </div>
      <VBtn variant="tonal" color="primary" prepend-icon="mdi-tune" size="small" rounded="pill">
        Filtros
      </VBtn>
    </div>

    <!-- Sort chips -->
    <VChipGroup v-model="sortBy" mandatory color="primary" class="mb-5">
      <VChip value="price">Precio</VChip>
      <VChip value="duration">Duración</VChip>
      <VChip value="departure">Salida</VChip>
      <VChip value="stopover">Escalas</VChip>
    </VChipGroup>

    <!-- Flight cards list -->
    <div class="flights-list">
      <VCard
        v-for="flight in sortedFlights"
        :key="flight.id"
        rounded="xl"
        elevation="2"
        class="flight-card mb-4"
        :class="{ 'best-price': flight.tag === 'Mejor precio' }"
        hover
      >
        <!-- Tag ribbon -->
        <VChip
          v-if="flight.tag"
          :color="flight.tag === 'Más rápido' ? 'teal' : 'green'"
          size="x-small"
          class="tag-chip"
          rounded="pill"
          variant="elevated"
        >
          {{ flight.tag }}
        </VChip>

        <VCardText class="py-4">
          <VRow align="center">
            <!-- Airline -->
            <VCol cols="12" sm="3" class="d-flex align-center gap-3">
              <VAvatar color="primary" variant="tonal" size="42">
                <VIcon icon="mdi-airplane" />
              </VAvatar>
              <span class="text-body-2 font-weight-medium">{{ flight.airline }}</span>
            </VCol>

            <!-- Times -->
            <VCol cols="12" sm="4">
              <div class="d-flex align-center gap-2">
                <div class="text-center">
                  <div class="text-h6 font-weight-bold">{{ flight.departure }}</div>
                  <div class="text-caption text-medium-emphasis">{{ flight.from }}</div>
                </div>
                <div class="flex-1 px-2 text-center">
                  <div class="text-caption text-medium-emphasis mb-1">{{ flight.duration }}</div>
                  <div class="route-line" />
                  <div class="text-caption mt-1" :class="flight.stopover === 0 ? 'text-success' : 'text-warning'">
                    {{ flight.stopover === 0 ? 'Directo' : `${flight.stopover} escala${flight.stopover > 1 ? 's' : ''}` }}
                  </div>
                </div>
                <div class="text-center">
                  <div class="text-h6 font-weight-bold">{{ flight.arrival }}</div>
                  <div class="text-caption text-medium-emphasis">{{ flight.to }}</div>
                </div>
              </div>
            </VCol>

            <!-- Spacer -->
            <VDivider vertical class="d-none d-sm-flex mx-3" />

            <!-- Price & CTA -->
            <VCol cols="12" sm="4" class="d-flex align-center justify-space-between justify-sm-end gap-4">
              <div>
                <div class="text-h5 font-weight-bold text-primary">${{ flight.price }}</div>
                <div class="text-caption text-medium-emphasis">por persona</div>
              </div>
              <VBtn color="primary" rounded="pill" size="small" elevation="0">
                Seleccionar
              </VBtn>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </div>

    <!-- Skeleton loaders while loading more -->
    <template v-if="loading">
      <VSkeletonLoader
        v-for="n in 3"
        :key="`sk-${n}`"
        type="list-item-avatar-two-line"
        class="mb-4 rounded-xl"
        elevation="1"
      />
    </template>

    <!-- Infinite scroll sentinel -->
    <div ref="sentinel" class="sentinel" />

    <!-- End of results -->
    <div v-if="!store.hasMore && !loading" class="text-center text-medium-emphasis py-6">
      <VIcon icon="mdi-check-circle-outline" color="success" class="mr-1" />
      Has visto todos los vuelos disponibles
    </div>
  </VContainer>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useFlightStore } from '../store/flightStore'

const store = useFlightStore()
const sentinel = ref(null)
const loading   = ref(false)
const sortBy    = ref('price')

store.resetPagination()

const sortedFlights = computed(() => {
  const flights = [...store.visibleFlights]
  const sorters = {
    price:     (a, b) => a.price    - b.price,
    duration:  (a, b) => a.duration.localeCompare(b.duration),
    departure: (a, b) => a.departure.localeCompare(b.departure),
    stopover:  (a, b) => a.stopover - b.stopover,
  }
  return flights.sort(sorters[sortBy.value])
})

async function loadMore() {
  if (!store.hasMore || loading.value) return
  loading.value = true
  await new Promise(r => setTimeout(r, 800)) // simulate network delay
  store.loadMore()
  loading.value = false
}

let observer = null
onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) loadMore() },
    { threshold: 0.1 }
  )
  if (sentinel.value) observer.observe(sentinel.value)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.flight-card {
  position: relative;
  transition: transform 0.18s, box-shadow 0.18s;
}
.flight-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12) !important;
}
.best-price {
  border-left: 4px solid rgb(var(--v-theme-success));
}
.tag-chip {
  position: absolute;
  top: -10px;
  left: 20px;
}
.route-line {
  height: 2px;
  background: linear-gradient(90deg, currentColor 60%, transparent 60%) 0 0 / 8px 2px;
  opacity: 0.35;
}
.flex-1 { flex: 1; }
.sentinel { height: 1px; }
</style>
