import axios from 'axios';
import {
    TRAER_TODAS,
    CARGANDO,
    ERROR,
    CAMBIO_USUARIO_ID,
    CAMBIO_TITULO,
    AGREGADA
} from '../types/tareasTypes'
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


export const cambioUsuarioId = (usuario_id) => (dispatch) => {
    dispatch({
        type: CAMBIO_USUARIO_ID,
        payload: usuario_id
    })
}

export const cambioTitulo = (titulo) => (dispatch) => {
    dispatch({
        type: CAMBIO_TITULO,
        payload: titulo
    })
}

export const agregar = (nueva_tarea) => async (dispatch) => {
    dispatch({
        type: CARGANDO
    })

    try {
        const respuesta = await axios.post('https://jsonplaceholder.typicode.com/todos', nueva_tarea);

        console.log(respuesta.data);
        dispatch({
            type: AGREGADA
        })

    } catch (error) {
        console.log(error.message);
        dispatch({
            type: ERROR,
            payload: 'Intente mas tarde'
        })

    }

}

export const  editar = (tarea_editada) =>(dispatch)=>{
    console.log(tarea_editada);
    
}