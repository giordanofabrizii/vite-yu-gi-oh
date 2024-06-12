<script>
import { store } from '../store.js';
import axios from 'axios';
import SingleCard from './SingleCard.vue';

export default{
    data() {
        return{
            store,
        }
    },
    methods:{
        getCards: function(){
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?num=${this.store.numberOfCards}&offset=0`)
                .then(response => {
                    this.store.cards = response.data;
                })  
        }
    },
    components:{
        SingleCard,
    },
    created(){
        this.getCards();
    }
}
</script>

<template>
    <main class="p-5">
        <div class="card-container limited d-flex flex-wrap p-4">
            <SingleCard v-for="(card,index) in store.cards.data" :key="index" :index="index"/>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../../node_modules/bootstrap/scss/bootstrap.scss' as *;
@use '../styles/partials/variables' as *;
@use '../styles/general.scss';

    main{
        background-color: $first-color;

        .card-container {
            background-color: white;

            article{
                width: calc((100% / 5) - 2rem);
            }
        }
    }
</style>