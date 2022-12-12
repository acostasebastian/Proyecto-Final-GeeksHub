<template>
<button @click="accionBoton({estado : true})">{{textoBoton}}</button>
</template>


<script >
import { mapActions } from 'vuex';


export default {
    methods:{
        ...mapActions(['accionBoton'])
    }, 
    props:{
        estado: Boolean
    },
    computed:{
        textoBoton(){
            return 'Enviar'
        }
    }
}
</script>

