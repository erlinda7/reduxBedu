import axios from 'axios';
import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usuariosTypes'
//vamos hacer una accion la cual el componente va llamar y esta accion va entregar algo

//una funcion que va traer otra funcion .. son 2 funciones
//el dispatch es el que va disparar esa llamada y va contactar al reducer para que todo este cambio de estado

export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: CARGANDO
    })

    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/userss');

        dispatch({
            type: TRAER_TODOS,  //en usuariosReducer hay un caso que es 'traer_usuarios' a este es a quien quiero llamar
            payload: respuesta.data
        })
    } catch (error) {
        console.log('Error:', error.message);
        dispatch({
            type: ERROR,
            payload: 'Algo salio mal, intente mas tarde'
        }
        )
    }
}