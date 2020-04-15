import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider } from 'react-redux';
import './index.css';
import App from './components/App';

//necesito crear el store al que se lo voy proveer toda mi aplicacion
const store = createStore (
  {},//todos los reducres de mi aplicacion
  {} //el estado  inicial
);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

