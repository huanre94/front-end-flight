import { defineStore } from 'pinia';

export const useFlightStore = defineStore('flight', {
    state: () => ({
        flights: [
            {
                id: 1,
                airline: 'Tame',
                duration: "3h 30m",
                stopover: 1,
                price: 100
            },
            {
                id: 2,
                airline: 'Copa',
                duration: "4h 30m",
                stopover: 3,
                price: 100
            },
            {
                id: 3,
                airline: 'American Airlines',
                duration: "1h",
                stopover: 0,
                price: 78
            },
            {
                id: 4, airline: 'Tame',
                duration: "30 min",
                stopover: 0,
                price: 50
            },
            {
                id: 5,
                airline: 'Spirit',
                duration: "1h 30m",
                stopover: 1,
                price: 100
            },
            {
                id: 6,
                airline: 'Latam',
                duration: 0.5,
                stopover: 1,
                price: 150
            }
        ]
    }),
});