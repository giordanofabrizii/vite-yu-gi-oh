import { reactive } from 'vue'

export const store = reactive({
    cards:[],
    isLoaded: false,
    archetypeSelected: '',
    archetypes: [],
})