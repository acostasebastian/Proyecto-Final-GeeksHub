<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

<div id="container">

<nav class="navbar bg-dark navbar-dark">
  <div class="container">
    <RouterLink class="navbar-brand" to="/">
      <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Poke API
    </RouterLink>
    <div>
      <RouterLink class="btn btn-outline-primary me-2" to="/">Home</RouterLink>
      <RouterLink class="btn btn-outline-primary me-2" to="/Pokemons">Pokemons</RouterLink>  <!--Links, cambia la URL y aparece el link, pero debemos crear también la vista y en el index para que muestre esa vista-->
      <RouterLink class="btn btn-outline-primary me-2" to="/Contacto">Contacto</RouterLink>  
      <RouterLink class="btn btn-outline-primary" to="/autor">Autor</RouterLink>  
    </div>
  </div>
</nav>

 
  <div class="container text-center">
    <RouterView />
  </div>


<footer>
  <div>

    <div class="col-lg-4 col-md-12 justify-content-center align-items-center d-flex pt-2">
      <p>Desarrollado por <a class="seba" href="https://www.linkedin.com/in/sebastian-acosta-b218b928/"  target=”_blank”>Sebastián Acosta</a></p>
    </div>
</div>
</footer>
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
