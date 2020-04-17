import  React, {Component } from "react";

import {connect} from 'react-redux';
import * as usuariosActions from '../../actions/UsuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

export class Publicaciones extends Component{
    componentDidMount(){
        if(!this.props.usuariosReducer.usuarios.length){ //sino tienes usuarios
            this.props.traerTodos()
        }
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
    ...usuariosActions,  //me va entregar todo lo de publicacion accion
    ...publicacionesActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);