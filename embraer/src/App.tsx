import React from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PaginaInicial from "./views/pagina-inicial";
import Calculo from "./views/formulario-calculo";
import CriarAeronaves from "./views/Criar-Aeronaves2";
import {BrowserRouter, Navigate, Route, Routes, Router} from 'react-router-dom';
import Navbar from "./views/navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
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

