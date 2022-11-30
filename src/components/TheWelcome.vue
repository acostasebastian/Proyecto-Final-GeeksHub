<script setup>
import WelcomeItem from './WelcomeItem.vue'
import ToolingIcon from './icons/IconTooling.vue'

</script>

<template>


  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Proyecto Final</template>

    Se muestra un listado de Pokemones y el acceso a cada uno, cogiendo información de una API de prueba.
    <a href="https://pokeapi.co/api/v2/pokemon" target="_blank" rel="noopener">Pokemones</a>. 
    
  </WelcomeItem>

  
</template>
