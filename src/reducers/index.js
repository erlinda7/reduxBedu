//vamos a combinar todos los reducers que necesitamos para mandarcelo a nuestra aplicacion
import {combineReducers} from 'redux';
import usuariosReducer from './usuariosReducer'; //impotamos el reducir creado


export default combineReducers({
    usuariosReducer //y se lo damos para que lo este combinando
})