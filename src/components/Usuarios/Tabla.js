import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Tabla = (props) => {//porque traer los props de padre si puedo conectar con redux

    //como ahora es funcional ahora const, 
    //quitar this.props
    const ponerFilas = () => props.usuarios.map((usuario, key) => (
        <tr key={usuario.id}>
            <td>{usuario.name}</td>
            <td>{usuario.email}</td>
            <td>{usuario.website}</td>
            <td>
                <Link to={`/publicaciones/${key}`}>
                    <div class="eye-solid icon"></div>
                </Link>
            </td>
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