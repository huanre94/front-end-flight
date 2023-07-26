// Composables
import { createRouter, createWebHistory } from 'vue-router'
import FlightSearch from '../components/FlightSearch.vue'
import FlightResult from '../components/FlightResult.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/flight-search' },
    { path: '/flight-search', component: FlightSearch },
    { path: '/flight-result', component: FlightResult },
  ]
})

export default router
