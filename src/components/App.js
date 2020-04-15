import React, { Component } from 'react'; //import Component


//cambiar const por class
class App extends Component {

  constructor() {
    super();
    this.state = {
      usuarios:[]
    }
  }

  componentDidMount(){
    this.setState({
      usuarios: [
        {
          nombre: 'Erlinda',
          correo: 'erlinda@gamil.com',
          enlace: 'Erlinda.com'
        },
        {
          nombre: 'Platzi',
          correo: 'platzi@gamil.com',
          enlace: 'Platzi.com'
        }
      ]
    })
  }

  //ya no es necesario const
  ponerFilas = () => (
    this.state.usuarios.map(usuario => (
      <tr>
        <td>{usuario.nombre}</td>
        <td>{usuario.correo}</td>
        <td>{usuario.enlace}</td>
      </tr>
      )
    )
  );
  //necesito poner dentro de un render
  render() {
    console.log(this.state.usuarios);
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


export default App;