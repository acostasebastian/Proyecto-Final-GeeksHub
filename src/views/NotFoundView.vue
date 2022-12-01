<script setup>

import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const back = () => {
    router.push('/pokemons')
}
</script>

<template>

    <div id="container">
        <h1>Error 404</h1>


        <button @click="back" class="btn btn-outline-primary">Volver</button>
    </div>
</template>