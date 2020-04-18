import axios from 'axios';
import { TRAER_TODAS, CARGANDO, ERROR } from '../types/tareasTypes'
//vamos hacer una accion la cual el componente va llamar y esta accion va entregar algo

//una funcion que va traer otra funcion .. son 2 funciones
//el dispatch es el que va disparar esa llamada y va contactar al reducer para que todo este cambio de estado

export const traerTodas = () => async (dispatch) => {

    dispatch({
        type: CARGANDO
    })

    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos');
        

        //normalizar datos
        const tareas = {};
        respuesta.data.map((tar) => (
            tareas[tar.userId] = { //a tareas estoy agregando un atributo userId
                ...tareas[tar.userId],
                [tar.id]: {  //pasarle un nuevo atributo
                    ...tar
                }
            }
        ));
        dispatch({
            type: TRAER_TODAS,  //en usuariosReducer hay un caso que es 'traer_usuarios' a este es a quien quiero llamar
            payload: tareas
        })
    } catch (error) {
        console.log('Error:', error.message);
        dispatch({
            type: ERROR,
            payload: 'informacion de tareas no disponibles'
        }
        )
    }
}