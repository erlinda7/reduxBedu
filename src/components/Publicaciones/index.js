import React, { Component } from "react";

import { connect } from 'react-redux';
import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';

import * as usuariosActions from '../../actions/UsuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const { traerPorUsuario: publicacionesTraerPorUsuario } = publicacionesActions;

export class Publicaciones extends Component {
    async componentDidMount() {
        const {
            usuariosTraerTodos,
            publicacionesTraerPorUsuario,
            match: { params: { key } }
        } = this.props;

        //usuariosREducir no lo puedo destructurar porque cambia el estado y compDidMount solo se ejecuta una vez
        if (!this.props.usuariosReducer.usuarios.length) { //sino tienes usuarios
            await usuariosTraerTodos()
        }

        if (this.props.usuariosReducer.error) {
            return;
        }

        //si publicaciones_key ya esta no lo traigas
        if (!('publicaciones_key' in this.props.usuariosReducer.usuarios[key])) {
            publicacionesTraerPorUsuario(key);
        }

    }

    ponerUsuario = () => {
        const {
            usuariosReducer,
            match: { params: { key } }
        } = this.props;

        if (usuariosReducer.error) {
            return <Fatal mensaje={usuariosReducer.error} />
        }

        if (!usuariosReducer.usuarios.length || usuariosReducer.cargando) {
            return <Spinner />
        }

        const nombre = usuariosReducer.usuarios[key].name;

        return (
            <h1>Publicaciones de {nombre}</h1>
        )
    };

    ponerPublicaciones = () => {
        const {
            usuariosReducer, //como no va tener cambio de estado lo podemos desestructurar
            usuariosReducer: { usuarios },
            publicacionesReducer,
            publicacionesReducer: { publicaciones }, //tambien de publicacionesREducer necesito publicaciones
            match: { params: { key } }
        } = this.props;

        if (!usuarios.length) return;
        if (usuariosReducer.error) return;

        if (publicacionesReducer.cargando) {
            return <Spinner />;
        }

        if (publicacionesReducer.error) {
            return <Fatal mensaje={publicacionesReducer.error} />
        }

        if (!publicaciones.length) return;

        if (!('publicaciones_key' in usuarios[key])) return;

        const { publicaciones_key } = usuarios[key];
        return publicaciones[publicaciones_key].map((publicacion) => (
            <div className="pub_titulo">
                <h2>{publicacion.title}</h2>
                <h3>{publicacion.body}</h3>
            </div>
        ))
    }
    render() {
        console.log(this.props);

        return (
            <div>
                {this.ponerUsuario()}
                {this.ponerPublicaciones()}
            </div>
        )
    }
}

const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => { //desestructurando
    return {
        usuariosReducer,
        publicacionesReducer
    }
}

//como estoy usando varias acciones necesito mapear
const mapDispatchToProps = {
    //...usuariosActions,  //me va entregar todo lo de publicacion accion
    //...publicacionesActions  //en ambas acciones tenemos un metodo traerTodos() , entonces agarra este ultimo y trae eso

    usuariosTraerTodos,                    //para que funcione bien traemos la des estructaramos y la renombramos
    publicacionesTraerPorUsuario
}
export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);