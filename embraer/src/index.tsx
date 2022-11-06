import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
//import App from './App';
//import CriarAeronaves from './views/Criar-Aeronaves2';
import reportWebVitals from './reportWebVitals';
import PaginaInicial from './views/pagina-inicial';
import Calculo from './views/formulario-calculo';
import CriarUsuario from './views/Cadastro-usuario';
import VariaveisAeronaves from './views/criar-aeronave';
import Login from './views/login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const checarLogado = () => {
  if (window.location.pathname != '/') {
    if (localStorage.getItem('idUsuario') == null) {
      window.location.href = '/';
    }
  }
}

checarLogado()

root.render(
  <React.StrictMode>

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
