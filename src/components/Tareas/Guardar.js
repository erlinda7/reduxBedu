import React, { Component } from 'react';

import { connect } from 'react-redux';


import Spinner from '../general/Spinner';
import Fatal from '../general/Fatal';

import { Redirect } from 'react-router-dom';

import * as tareasActions from '../../actions/tareasActions';

class Guardar extends Component {

    componentDidMount() {
        const {
            match: { params: { usu_id, tar_id } },
            tareas,
            cambioUsuarioId,
            cambioTitulo
        } = this.props;

        if (usu_id && tar_id) {
            const tarea = tareas[usu_id][tar_id];
            cambioUsuarioId(tarea.userId);
            cambioTitulo(tarea.title);
        }
    }

    cambioUsuarioId = (event) => {
        this.props.cambioUsuarioId(event.target.value)

    }
    cambioTitulo = (event) => {
        this.props.cambioTitulo(event.target.value)

    }

    guardar = () => {
        const {
            match: { params: { usu_id, tar_id } },
            usuario_id,
            tareas,
            titulo,
            agregar,
            editar
        } = this.props;


        const nuevaTarea = {
            userId: usuario_id,
            title: titulo,
            completed: false
        };


        if (usu_id && tar_id) {
            const tarea = tareas[usu_id][tar_id];
            const tarea_editada = {
                ...nuevaTarea,
                completed: tarea.completed,
                id: tarea.id
            }
            editar(tarea_editada);
        } else {

            agregar(nuevaTarea);
        }

    }

    deshabilitar = () => {
        const { usuario_id, titulo, cargando } = this.props;

        if (cargando) {
            return true;
        }

        if (!usuario_id || !titulo) {
            return true;
        }

        return false;
    }

    mostrarAccion = () => {
        const { error, cargando } = this.props;
        if (cargando) {
            return <Spinner />
        }

        if (error) {
            return <Fatal mensaje={error} />
        }
    }

    render() {
        return (
            <div>
                {
                    (this.props.regresar ? <Redirect to='/tareas' /> : '')
                }
                <h1>Guardar Tarea</h1>
                Usuario id:
                <input
                    type='number'
                    value={this.props.usuario_id}
                    onChange={this.cambioUsuarioId}
                />
                <br /><br />
                Titulo:
                <input
                    value={this.props.titulo}
                    onChange={this.cambioTitulo}
                />
                <br /><br />
                <button
                    onClick={this.guardar}
                    disabled={this.deshabilitar()}
                >
                    Guardar
                </button>
                {this.mostrarAccion()}
            </div>
        )
    }
}
const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Guardar);