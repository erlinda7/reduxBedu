import React, { Component } from 'react'; //import Component
import axios from 'axios';

import { connect } from 'react-redux';//para poder conectar nuestro reducer al componente

//cambiar const por class
class Usuarios extends Component {


  // async componentDidMount() {

  //   const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');


  //   this.setState({
  //     usuarios: respuesta.data
  //   })
  // }

  //ya no es necesario const
  ponerFilas = () => (
    this.props.usuarios.map(usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.website}</td>
      </tr>
    )
    )
  );
  //necesito poner dentro de un render
  render() {
    
    return (
      <div>
        <table className="tabla">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            {
              /*se necesita this para llamar */
              this.ponerFilas()
            }
          </tbody>
        </table>
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
export default connect(mapStateToProps,{/*Actions */} )(Usuarios);
//parametros que debe recibir el connect
  //1ro: 
      //todos los reducers que el proveedor le va entregar al usuario,
      // yo voy poder escoger cual de estos necesito(1, 2 o todos) 
      //entregarlselo a mi componente que el componenente lo pueda utilizar
  //2do:
    //se lo envio todos las acciones  o "Actions Creators"
