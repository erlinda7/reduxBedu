import React from 'react';


const App = () => {

  const ponerFilas = () => [
    <tr>
      <td>Erlinda</td>
      <td>linda@gmail.com</td>
      <td>Erlinda.com</td>
    </tr>,
    <tr>
      <td>Platzi</td>
      <td>platzi@gmail.com</td>
      <td>Plazti.com</td>
    </tr>
  ]

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
           ponerFilas()
          }
        </tbody>
      </table>
    </div>
  )
}


export default App;