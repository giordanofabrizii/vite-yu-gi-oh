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
    <article class="m-3">
        <img :src="store.cards.data[index].card_images[0].image_url" class="mb-3" alt="card image">
        <h1 class="mb-3">{{ store.cards.data[index].name }}</h1>
        <p>{{ store.cards.data[index].archetype }}</p>
    </article>
</template>

<style lang="scss" scoped>
@use '../../node_modules/bootstrap/scss/bootstrap.scss' as *;
@use '../styles/partials/variables' as *;

    article {
        background-color: $first-color;

        img{
            width: 100%;
        }

        h1{
            font-size: 1.5rem;
            text-transform: uppercase;
            color: white;
            text-align: center;
            font-weight: 600;
        }

        p {
            font-size: 1.5rem;
            text-align: center;
        }
    }
</style>