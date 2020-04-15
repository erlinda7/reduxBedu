import React, { Component } from 'react'; //import Component
import axios from 'axios';


//cambiar const por class
class Usuarios extends Component {

  constructor() {
    super();
    this.state = {
      usuarios: []
    }
  }

  async componentDidMount() {

    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');


    this.setState({
      usuarios: respuesta.data
    })
  }

  //ya no es necesario const
  ponerFilas = () => (
    this.state.usuarios.map(usuario => (
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
      <div className="margen">
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


export default Usuarios;