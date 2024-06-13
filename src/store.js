import { reactive } from 'vue'

export const store = reactive({
    cards:[],
    isLoaded: false,
    archetypeSelected: 'Alien',
    numberOfCards: 0,
    archetypes: [],
})