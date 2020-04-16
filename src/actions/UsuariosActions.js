import axios from 'axios';
//vamos hacer una accion la cual el componente va llamar y esta accion va entregar algo

//una funcion que va traer otra funcion .. son 2 funciones
//el dispatch es el que va disparar esa llamada y va contactar al reducer para que todo este cambio de estado

export const  traerTodos = () => async (dispatch)=>{
    
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    dispatch ({
        type :'traer_usuarios',  //en usuariosReducer hay un caso que es 'traer_usuarios' a este es a quien quiero llamar
        payload: respuesta.data
    })
}