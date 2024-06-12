<script>
import { store } from '../store.js';

export default{
    data() {
        return{
            store,
        }
    },
    props:[
        'index',
    ]
}
</script>

<template>
    <article>
        <img :src="store.cards.data[index].card_images[0].image_url" alt="card image">
        <h1>{{ store.cards.data[index].name }}</h1>
        <p>{{ store.cards.data[index].archetype }}</p>
    </article>
</template>

<style scoped>
    img{
        width: 100%;
    }
</style>