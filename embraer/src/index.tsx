import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

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

const checarSePiloto = () => {
  if (localStorage.getItem("nivelAcesso") === '2') {
    if (window.location.pathname !== '/Calculo') {
      window.location.href = '/Calculo';
    }
  }
}

checarLogado()
checarSePiloto()

root.render(
  <React.StrictMode>

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
