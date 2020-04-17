import  React, {Component } from "react";

import {connect} from 'react-redux';
import * as usuariosActions from '../../actions/UsuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

const {traerTodos: usuariosTraerTodos} = usuariosActions;
const {traerPorUsuario: publicacionesTraerPorUsuario} = publicacionesActions;

export class Publicaciones extends Component{
    async componentDidMount(){
        if(!this.props.usuariosReducer.usuarios.length){ //sino tienes usuarios
            await this.props.usuariosTraerTodos()
        }
        this.props.publicacionesTraerPorUsuario(this.props.match.params.key);
    }

    render(){
        console.log(this.props);
        
        return (
            <div>
                <h1>Publicaciones de </h1>
                {this.props.match.params.key}
            </div>
        )
    }
}

const mapStateToProps = ({usuariosReducer, publicacionesReducer}) =>{ //desestructurando
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