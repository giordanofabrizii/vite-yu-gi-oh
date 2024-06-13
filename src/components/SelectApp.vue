<script>
import {store} from '../store.js';
import axios from 'axios';

export default{
    data() {
        return{
            store,
        }
    },
    methods:{
        getArchetypes: function(){
            axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
                .then(response => {
                    this.store.archetypes = response.data;
                })  
        },
        changed: function(value){
            this.store.archetypeSelected = value;
        }
    },
    created(){
        this.getArchetypes();
        this.store.archetypeSelected=this.store.archetypes[0];
    }
}
</script>

<template>
    <section class="limited">
        <select class="form-select" aria-label="Default select example" @change="changed($event.target.value)">
            <option selected value=""></option>
            <option v-for="archetype in store.archetypes" :key="archetype.archetype_name" :value="archetype.archetype_name" @click="$emit('searched')">{{archetype.archetype_name}}</option>
        </select>       
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

select{
    height: 2rem;
    padding: 0 1rem;
}

</style>