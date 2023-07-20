// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    flights: [
      { id: 1, airline: 'Tame', duration: 0.5, stopover: 0, price: 100 },
      { id: 2, airline: 'Copa', duration: 0.5, stopover: 0, price: 100 },
      { id: 3, airline: 'American Airlines', duration: 0.5, stopover: 0, price: 100 },
      { id: 4, airline: 'Tame', duration: 0.5, stopover: 0, price: 100 },
      { id: 5, airline: 'Spirit', duration: 0.5, stopover: 0, price: 100 },
      { id: 6, airline: 'Latam', duration: 0.5, stopover: 0, price: 100 }
    ]
  }),
  getters: {

  },
  actions: {

  }
})
