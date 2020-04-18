import React from 'react';

import {connect} from 'react-redux';

import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';

const Comentarios = (props) =>{
    if(props.cargando){
        return <Spinner/>
    }

    if(props.error){
        return <Fatal mensaje ={props.error}/>
    }

    const ponerComentarios = ()=>(
        props.comentarios.map((comentario)=>(
            <li>
                <b><u>{comentario.email}</u></b>
                <br/>
                {comentario.body}
            </li>
        ))
    )
    return(
        <ul>
           {ponerComentarios()}
        </ul>
    )
}
//2da forma conectar con redux
const mapStateToProps= ({publicacionesReducer})=>publicacionesReducer;

export default connect(mapStateToProps)(Comentarios);//ya con eso tengo en el props si esta cargando o error