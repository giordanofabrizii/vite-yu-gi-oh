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
    <article class="m-3" v-if="store.isLoaded==true">
        <img :src="store.cards.data[index].card_images[0].image_url" class="mb-3" alt="card image">
        <h1 class="mb-3">{{ store.cards.data[index].name }}</h1>
        <p>{{ store.cards.data[index].archetype }}</p>
    </article>
    <article class="loader m-3" v-else>
        <div class="background w-100 mb-3 d-flex justify-content-center align-items-center">
            <div class="loader-spinner"></div>
        </div>
        <h1 class="loader mb-3"></h1>
        <p class="loader mb-3"></p>
    </article>
</template>

<style lang="scss" scoped>
@use '../../node_modules/bootstrap/scss/bootstrap.scss' as *;
@use '../styles/partials/variables' as *;

article {
    background-color: $first-color;

    .background{
        background-color: $loader;
        height: 15rem;

        .loader-spinner {
            width: 50px;
            aspect-ratio: 1;
            display: grid;

            &::before,
            &::after{
                content:"";
                grid-area: 1/1;
                background: 
                    $loader-spinner 50%  0, 
                    $loader-spinner 50%  100%, 
                    $loader-spinner 100% 50%, 
                    $loader-spinner 0    50%;
                background-size: 12px 12px;
                animation: l12 1s infinite;
            }

            &::before{
                margin: 4px;
                filter: hue-rotate(45deg);
                background-size: 8px 8px;
                animation-timing-function: linear
            }

        }
    }
        img{
            width: 100%;
        }
            
        h1{
            font-size: 1.5rem;
            text-transform: uppercase;
            color: white;
            text-align: center;
            font-weight: 600;
        
            &.loader{
                width: 12rem;
            }
        }

        p {
            font-size: 1.5rem;
            text-align: center;
        }

        .loader{
            width: 10rem;
            height: 1rem;
            border-radius: .5rem;
            margin: 0 auto;
            background: linear-gradient(to left, $loader 50%, $loader-second 50%);
            background-size: 300% 100%;
            transition: all .5s linear;
            animation: slide .5s linear infinite;
        }
            
        @keyframes l12 { 
            100%{
                transform: rotate(.5turn)
            }
        }
            
        @keyframes slide {
            0%{
                background-position: right bottom;
                }
            100%{
                background-position: left top;
                }
        }
}
</style>