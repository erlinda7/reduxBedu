import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk'// para usar temas de asincronia

import './css/index.css';
import App from './components/App';


import reducers from './reducers';

//necesito crear el store al que se lo voy proveer toda mi aplicacion
const store = createStore(
  reducers,//todos los reducres de mi aplicacion
  {}, //el estado  inicial
  applyMiddleware(reduxThunk)
);

/*tu hijo mio que eres App  el alamacenamiento va ser 
  igual al almacenamiento que cree arribita como store*/
ReactDOM.render(
  <Provider store={store}>  
    <App />
  </Provider>,

  document.getElementById('root')
);

