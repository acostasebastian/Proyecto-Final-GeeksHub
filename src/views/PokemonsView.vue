<script setup >

import { RouterLink } from 'vue-router';
import {useGetData} from '@/composables/getData'



const {data, getData, loading,error} = useGetData();


getData("https://pokeapi.co/api/v2/pokemon");


</script>

<template>
        <h1>Pokemones</h1>                
    <div id="container">
        
        <p v-if="loading">Cargando información...</p>
        
        <div id= "data" v-if="data">
            <ul class="list-group">
                <li v-for="poke in data.results" class="list-group-item">
                    <router-link :to="`/pokemons/${poke.name}`"> {{ poke.name }}</router-link> <!--rutas dinámicas-->
                </li>
            </ul>
        
            <ul class="mt-2">
                <button :disabled="!data.previous" class="btn btn-success me-2" @click="getData(data.previous)">Previous</button>
                <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">Next</button>
            </ul>             
        </div>
        <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
    </div>

      
   
</template>