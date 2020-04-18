import React from 'react';

import { connect } from 'react-redux';

import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';

const Comentarios = (props) => {
    if (props.com_error) {
        return <Fatal mensaje={props.com_error} />
    }

    if (props.com_cargando && !props.comentarios.length) {
        return <Spinner />
    }

    const ponerComentarios = () => (
        props.comentarios.map((comentario) => (
            <li>
                <b><u>{comentario.email}</u></b>
                <br />
                {comentario.body}
            </li>
        ))
    )
    return (
        <ul>
            {ponerComentarios()}
        </ul>
    )
}
//2da forma conectar con redux
const mapStateToProps = ({ publicacionesReducer }) => publicacionesReducer;

export default connect(mapStateToProps)(Comentarios);//ya con eso tengo en el props si esta cargando o error