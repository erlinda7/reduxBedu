import React from 'react';
import { connect } from 'react-redux';

const Tabla = (props) => {//porque traer los props de padre si puedo conectar con redux

    //como ahora es funcional ahora const, 
    //quitar this.props
    const ponerFilas = () => props.usuarios.map(usuario => (
        <tr key={usuario.id}>
            <td>{usuario.name}</td>
            <td>{usuario.email}</td>
            <td>{usuario.website}</td>
        </tr>
    )
    )

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
                        /*como es funcional no necesita this */
                        ponerFilas()
                    }
                </tbody>
            </table>
        </div>
    )
}

//conectando con redux
const mapStateToProps = (reducers) => {
    return reducers.usuariosReducer;
}

export default connect(mapStateToProps)(Tabla);
//no necesitamos las acciones porque el padre ya las esta trayendo ya esta trayendo los usuarios