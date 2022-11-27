import React from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Calculo from "./views/formulario-calculo";
import CriarAeronaves from "./views/Criar-Aeronaves2";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CriarUsuario from "./views/Cadastro-usuario";
import PaginaInicial from "./views/pagina-inicial";
import Navbar from "./views/navbar";
import VariaveisAeronaves from "./views/criar-aeronave";
import Login from "./views/login";
import LogsCalculo from "./views/calculoLogs";
import Footer from "./views/footer";
import UpdateAeronaves from "./views/Update-Aeronave";
import UserProfile from "./views/user-profile"
import Users from "./views/Users";
import UpdateUsuario from "./views/update-usuario";
import PaginaDashboard from "./views/pagina-dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/Index" element={<PaginaDashboard />} />
        <Route path="/Calculo" element={<Calculo />} />
        <Route path="/Criar/" element={<CriarAeronaves />} />
        <Route path="/Cadastrar" element={<CriarUsuario />} />
        <Route path="/Variavel/:id" element={<VariaveisAeronaves />} />
        <Route path="/Logs" element={<LogsCalculo />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/AtualizA/:id" element={<UpdateAeronaves />} />
        <Route path="/AtualizarUsuario/:id" element={<UpdateUsuario />} />
        <Route path="/Profile" element={<UserProfile />} />
        <Route path="/Aircraft" element={<PaginaInicial />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

