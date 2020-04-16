import React, { Component } from 'react'; //import Component

import { connect } from 'react-redux';//para poder conectar nuestro reducer al componente
import * as usuariosActions from '../../actions/UsuariosActions';


import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';
import Tabla from './Tabla';

//cambiar const por class
class Usuarios extends Component {


  async componentDidMount() {

    this.props.traerTodos();  //llamando a la accion creators

  }

  ponerContenido = () => {
    if(this.props.cargando){
      return <Spinner/>
    }

    if(this.props.error){
      return <Fatal mensaje={this.props.error}/>
    }

    // return <Tabla usuarios={this.props.usuarios}/> porque mandar props si componente tabla puede conectarse con redux y mapear reducir
    return <Tabla/>
  }


  //necesito poner dentro de un render
  render() {
    return (
      <div>
        <h1>Usuarios</h1>
        {this.ponerContenido()}
      </div>
    )
  }
}

//por default lo entrego todos los reducers
const mapStateToProps = (reducers) => {
  //solo quiero usuarios
  return reducers.usuariosReducer;
}


//conectando al almacenamiento global
export default connect(mapStateToProps, usuariosActions)(Usuarios);
//parametros que debe recibir el connect
  //1ro: 
      //todos los reducers que el proveedor le va entregar al usuario,
      // yo voy poder escoger cual de estos necesito(1, 2 o todos) 
      //entregarlselo a mi componente que el componenente lo pueda utilizar
  //2do:
    //se lo envio todos las acciones  o "Actions Creators"
