import React from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PaginaInicial from "./views/pagina-inicial";
import Calculo from "./views/formulario-calculo";
import CriarAeronaves from "./Criar-Aeronaves";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Calculo/>}/>
      <Route path="*" element={<Navigate to="/" />}/>
      <Route path="/Calculo" element={<Calculo />}/>
      <Route path="/Criar" element={<CriarAeronaves />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

