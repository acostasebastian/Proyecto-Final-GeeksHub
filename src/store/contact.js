
export default ({
    state: { 
        name:'',
        email:'',
        message:'',               
        enabled: true
    }, 
    mutations: {
      setName(state,name ){
        state.name = name
      },
      setEmail(state,email ){
        state.email = email
      },

      setMessage(state,message){
        state.message = message
      },   
   
      estadoBoton(state,enabled){
        state.enabled = enabled
      },
      
    },
    actions: {
        accionBoton({commit}, estado) { 
            commit('estadoBoton',estado)
          },

    
    }, getters: {
    
    }
    })