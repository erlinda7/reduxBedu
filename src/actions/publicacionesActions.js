import axios from 'axios';
import { TRAER_POR_USUARIO, CARGANDO, ERROR } from '../types/publicacionesTypes'
import  * as usuariosTypes from '../types/usuariosTypes';

const {TRAER_TODOS: USUARIOS_TRAER_TODOS} = usuariosTypes;


//key id de params getState tener acceso al estado actual
export const traerPorUsuario = (key) => async (dispatch, getState) => { 
    //desestructurar
    const {usuarios}= getState().usuariosReducer;
    const {publicaciones}= getState().publicacionesReducer;
    const usuario_id = usuarios[key].id;

    const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`);

    //a los anteriores aumentar las nuevas que traemos
    const publicaciones_actualizadas = [
        ...publicaciones,
        respuesta.data
    ]

    //sacar la ultima casilla
    const publicaciones_key = publicaciones_actualizadas.length-1;

    //actualizar mis usuarios
    const usuarios_actualizados = [...usuarios];//todo lo que tiene mis usuarios;
    usuarios_actualizados[key] = {
        //a todo lo que tiene ese usuario le voy agregar publicaciones key
        ...usuarios[key],
        publicaciones_key, //publicaciones_key: publicaciones_key  // son iguales
    }

    dispatch({
        type:USUARIOS_TRAER_TODOS,
        payload:usuarios_actualizados
    });
    

    dispatch({
        type: TRAER_POR_USUARIO,
        payload: publicaciones_actualizadas
    })
}