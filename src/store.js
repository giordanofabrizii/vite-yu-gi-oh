import { reactive } from 'vue'

export const store = reactive({
    cards:[],
    numberOfCards:40,
    isLoaded: false,
})