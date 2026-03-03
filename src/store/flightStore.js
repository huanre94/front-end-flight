import { defineStore } from 'pinia';

const ALL_FLIGHTS = [
  { id: 1,  airline: 'Avianca',          logo: 'mdi-airplane', departure: '06:00', arrival: '09:30', duration: '3h 30m', stopover: 1, price: 210, from: 'BOG', to: 'MIA', tag: '' },
  { id: 2,  airline: 'Copa Airlines',    logo: 'mdi-airplane', departure: '07:15', arrival: '11:45', duration: '4h 30m', stopover: 2, price: 185, from: 'BOG', to: 'MIA', tag: 'Mejor precio' },
  { id: 3,  airline: 'American Airlines',logo: 'mdi-airplane', departure: '08:00', arrival: '09:00', duration: '1h 00m', stopover: 0, price: 320, from: 'BOG', to: 'MIA', tag: 'Más rápido' },
  { id: 4,  airline: 'Latam',            logo: 'mdi-airplane', departure: '09:30', arrival: '13:00', duration: '3h 30m', stopover: 1, price: 198, from: 'BOG', to: 'MIA', tag: '' },
  { id: 5,  airline: 'Spirit',           logo: 'mdi-airplane', departure: '10:45', arrival: '12:15', duration: '1h 30m', stopover: 1, price: 99,  from: 'BOG', to: 'MIA', tag: 'Mejor precio' },
  { id: 6,  airline: 'JetBlue',          logo: 'mdi-airplane', departure: '12:00', arrival: '15:30', duration: '3h 30m', stopover: 0, price: 275, from: 'BOG', to: 'MIA', tag: '' },
  { id: 7,  airline: 'Delta',            logo: 'mdi-airplane', departure: '13:20', arrival: '16:50', duration: '3h 30m', stopover: 1, price: 310, from: 'BOG', to: 'MIA', tag: '' },
  { id: 8,  airline: 'United',           logo: 'mdi-airplane', departure: '14:00', arrival: '17:00', duration: '3h 00m', stopover: 0, price: 290, from: 'BOG', to: 'MIA', tag: '' },
  { id: 9,  airline: 'Wingo',            logo: 'mdi-airplane', departure: '15:30', arrival: '18:00', duration: '2h 30m', stopover: 0, price: 130, from: 'BOG', to: 'MIA', tag: 'Mejor precio' },
  { id: 10, airline: 'Iberia',           logo: 'mdi-airplane', departure: '16:00', arrival: '22:00', duration: '6h 00m', stopover: 2, price: 420, from: 'BOG', to: 'MIA', tag: '' },
  { id: 11, airline: 'Air France',       logo: 'mdi-airplane', departure: '17:10', arrival: '23:40', duration: '6h 30m', stopover: 2, price: 460, from: 'BOG', to: 'MIA', tag: '' },
  { id: 12, airline: 'KLM',              logo: 'mdi-airplane', departure: '18:00', arrival: '23:00', duration: '5h 00m', stopover: 1, price: 395, from: 'BOG', to: 'MIA', tag: '' },
  { id: 13, airline: 'Viva Air',         logo: 'mdi-airplane', departure: '19:00', arrival: '21:30', duration: '2h 30m', stopover: 0, price: 115, from: 'BOG', to: 'MIA', tag: '' },
  { id: 14, airline: 'Avianca',          logo: 'mdi-airplane', departure: '20:15', arrival: '23:45', duration: '3h 30m', stopover: 1, price: 205, from: 'BOG', to: 'MIA', tag: '' },
  { id: 15, airline: 'Copa Airlines',    logo: 'mdi-airplane', departure: '21:00', arrival: '01:30', duration: '4h 30m', stopover: 2, price: 175, from: 'BOG', to: 'MIA', tag: '' },
  { id: 16, airline: 'Spirit',           logo: 'mdi-airplane', departure: '22:00', arrival: '23:30', duration: '1h 30m', stopover: 0, price: 88,  from: 'BOG', to: 'MIA', tag: 'Más barato' },
  { id: 17, airline: 'Latam',            logo: 'mdi-airplane', departure: '05:00', arrival: '08:30', duration: '3h 30m', stopover: 1, price: 220, from: 'BOG', to: 'MIA', tag: '' },
  { id: 18, airline: 'American Airlines',logo: 'mdi-airplane', departure: '06:30', arrival: '07:45', duration: '1h 15m', stopover: 0, price: 340, from: 'BOG', to: 'MIA', tag: 'Más rápido' },
  { id: 19, airline: 'Delta',            logo: 'mdi-airplane', departure: '11:00', arrival: '14:30', duration: '3h 30m', stopover: 1, price: 298, from: 'BOG', to: 'MIA', tag: '' },
  { id: 20, airline: 'United',           logo: 'mdi-airplane', departure: '23:00', arrival: '02:00', duration: '3h 00m', stopover: 0, price: 265, from: 'BOG', to: 'MIA', tag: '' },
];

const PAGE_SIZE = 5;

export const useFlightStore = defineStore('flight', {
  state: () => ({
    allFlights: ALL_FLIGHTS,
    visibleCount: PAGE_SIZE,
    searchParams: {
      from: 'BOG',
      to: 'MIA',
      departureDate: '',
      returnDate: '',
      passengers: 1,
      tripType: 'roundtrip',
    },
  }),

  getters: {
    visibleFlights: (state) => state.allFlights.slice(0, state.visibleCount),
    hasMore: (state) => state.visibleCount < state.allFlights.length,
    totalFlights: (state) => state.allFlights.length,
  },

  actions: {
    loadMore() {
      this.visibleCount = Math.min(this.visibleCount + PAGE_SIZE, this.allFlights.length);
    },
    resetPagination() {
      this.visibleCount = PAGE_SIZE;
    },
    setSearchParams(params) {
      Object.assign(this.searchParams, params);
      this.resetPagination();
    },
  },
});