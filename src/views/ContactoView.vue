<script>

export default {
    data() {
    return {
        contacto: {
            nombre:'',
            email:'',
            mensaje:''
        }   
    }  
},
methods:{
        procesarFormulario(){
            console.log(this.contacto)
            if(this.contacto.nombre.trim() === ""){
                console.log('Campo Nombre Vacio')
                return
            }
            if(this.contacto.email.trim() === ""){
                console.log('Campo email Vacio')
                return
            }
            if(this.contacto.mensaje.trim() === ""){
                console.log('Campo mensaje Vacio')
                return           
            }
            console.log('Todos los campos fueron completados')


            this.contacto = {
                nombre:'',
            email:'',
            mensaje:''
            }
        }
    },
    computed:{
        bloquear(){
            if(this.contacto.email.trim() === "" || this.contacto.nombre.trim() === "" || this.contacto.mensaje.trim() === ""   
            )
            {                
                return true
            }
            else
            {
                false
            }       
    }
}
}



</script>


<template>
  
    <form @submit.prevent="procesarFormulario">
        <br>                 
        <input type="email" class="form-control my2" 
        placeholder="Ingrese Email"
     v-model.trim="contacto.email"
     >

     <input type="text" class="form-control my2 mt-2" 
     placeholder="Ingrese Nombre"
     v-model.trim="contacto.nombre"
     >
     <textarea class="form-control mt-2" rows="10" placeholder="Ingrese Mensaje"  v-model.trim="contacto.mensaje"></textarea>
    
    <button class="btn btn-dark mt-2 btn-block" type="submit" :disabled="bloquear">
        Procesar
    </button>
   </form>

   <!-- <p>{{contacto}}</p> -->
  

</template>