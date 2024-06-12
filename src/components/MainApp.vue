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
        setTimeout(() => {
            this.store.isLoaded = true;
        }, 3000);
    }
}
</script>

<template>
    <main class="p-5">
        <div class="card-container limited d-flex flex-wrap p-4">
            <span class="p-2 mx-3" v-if="store.isLoaded==true">
                <h2 class="fs-5 my-0 py-2">Found {{ store.numberOfCards }} cards</h2>
            </span>
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

            span {
                width: 100%;
                background-color: $second-color;
                color: white;
            }

            article{
                width: calc((100% / 5) - 2rem);
            }
        }
    }
</style>