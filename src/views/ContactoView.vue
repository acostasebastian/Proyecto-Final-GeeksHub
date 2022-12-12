<script>
import BaseButton from '../components/BaseButton.vue'

export default {
    components:{
        BaseButton
    },
methods:{
        procesarFormulario(){
            console.log(this.name)
            if(this.name.trim() === ""){
                console.log('Campo Nombre Vacio')
                return
            }
            console.log(this.email)
            if(this.email.trim() === ""){
                console.log('Campo email Vacio')
                return
            }

            console.log(this.message)
            if(this.message.trim() === ""){
                console.log('Campo mensaje Vacio')
                return           
            }
            console.log('Todos los campos fueron completados'),


            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";          

       
        }
    },
    computed:{
        

        name:{ get() {
            return this.$store.state.contactModule.name;
        },
        set(value) {this.$store.commit('setName',value)}

        },

        email:{ get() {
            return this.$store.state.contactModule.email;
        },
        set(value) {this.$store.commit('setEmail',value)}

        },

        
        message:{ get() {
            return this.$store.state.contactModule.message;
        },
        set(value) {this.$store.commit('setMessage',value)}

        },

        text:{ get() {
            return this.$store.state.contactModule.text;
        },
        set(value) {this.$store.commit('setText',value)}

        },
        enabled:{ get() {
            return this.$store.state.contactModule.enabled;
        },
        set(value) {this.$store.commit('estadoBoton',value)}

        },
       bloquear(){
            if(this.name.trim() === "" || this.email.trim() === "" || this.message.trim() === "" )
            {                
                return true
            }
            else
            {
                return false
            }       
    }

       
    }, 

   
}




</script>


<template>
  
    <form @submit.prevent="procesarFormulario">
        <br>                 
        <input type="email" class="form-control my2" id="email" 
        placeholder="Ingrese Email"
     v-model.trim="email"
     >

     <input type="text" class="form-control my2 mt-2" id="name" 
     placeholder="Ingrese Nombre"
     v-model="name"
     >
     <textarea class="form-control mt-2" rows="10" placeholder="Ingrese Mensaje"  v-model.trim="message" id="message"></textarea>    
  
    <BaseButton class="btn btn-dark mt-2 btn-block" :disabled="bloquear" type="submit"/>
   </form>

   <hr>
    
  
  

</template>