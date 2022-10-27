import React from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Calculo from "./views/formulario-calculo";
import CriarAeronaves from "./views/Criar-Aeronaves2";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import PaginaInicial from "./views/pagina-inicial";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<PaginaInicial/>}/>
      <Route path="*" element={<Navigate to="/" />}/>
      <Route path="/Calculo" element={<Calculo />}/>
      <Route path="/Criar" element={<CriarAeronaves />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

