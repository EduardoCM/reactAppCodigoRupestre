import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import RegistroUsuario from './componentes/Formulariomaterial'
import Usuarios from './componentes/Usuarios'

ReactDOM.render(
  <React.StrictMode>
  <RegistroUsuario />
  <Usuarios />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
