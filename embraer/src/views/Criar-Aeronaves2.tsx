import React, { useState } from "react";
import Axios from "axios";
import logo from "./logo.svg";
import "../css/CriarAeronaves2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModuleResolutionKind } from "typescript";
import { monitorEventLoopDelay } from "perf_hooks";
import Swal from "sweetalert2";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import VariaveisAeronaves from "./criar-aeronave";

function CriarAeronaves() {
  const navigate = useNavigate()
  const [values, setValues] = useState(Object);

  const handleChangeValues = (value: any) => {
    setValues((prevValue: any) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  //const handleClickButton = (values: any) => {
  //  console.log(values);
  //  Axios.post("http://localhost:3002/register", {
  //    modelo: values.modelo,
  //    fabricante: values.fabricante,
  //    motor: values.motor,
  //    certificacao: values.certificacao,
  //    qtde_reversor: values.qtde_reversor,
  //    peso_referencial: values.peso_referencial,
//
  //    tipo_flap: values.tipo_flap,
  //    configuracao_freio: values.configuracao_freio,
//
  //    distancia_referencial: values.distancia_referencial,
  //    padrao_variacao_peso: values.padrao_variacao_peso,
  //    correcao_peso_acima: values.correcao_peso_acima,
  //    correcao_peso_abaixo: values.correcao_peso_abaixo,
  //    padrao_variacao_altitude: values.padrao_variacao_altitude,
  //    correcao_altitude: values.correcao_altitude,
  //    padrao_variacao_temperatura: values.padrao_variacao_temperatura,
  //    correcao_temperatura_acima: values.correcao_temperatura_acima,
  //    correcao_temperatura_abaixo: values.correcao_temperatura_abaixo,
  //    padrao_variacao_vento: values.padrao_variacao_vento,
  //    correcao_vento_proa: values.correcao_vento_proa,
  //    correcao_vento_cauda: values.correcao_vento_cauda,
  //    padrao_variacao_inclinacao: values.padrao_variacao_inclinacao,
  //    correcao_aclive: values.correcao_aclive,
  //    correcao_declive: values.correcao_declive,
  //    velocidade_referencia: values.velocidade_referencia,
  //    padrao_variacao_velocidade: values.padrao_variacao_velocidade,
  //    correcao_velocidade: values.correcao_velocidade,
  //    correcao_reversor_inoperante: values.correcao_reversor_inoperante,
  //    padrao_variacao_sobrepeso: values.padrao_variacao_sobrepeso,
  //    correcao_sobrepeso: values.correcao_sobrepeso,
  //  });
  //  Swal.fire({
  //    text: "Aircraft registered successfully!",
  //  });
  //};

  const showError = (input: HTMLElement, message: string) => {
    const formField = input.parentElement;
    formField!.classList.remove('success');
    formField!.classList.add('error');

    const error = formField!.querySelector('small');
    error!.textContent = message;
  };

  const showSuccess = (input: HTMLElement) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField!.classList.remove('error');
    formField!.classList.add('success');

    // hide the error message
    const error = formField!.querySelector('small');
    error!.textContent = '';
  }

  function manipularEnvio(evento: any) {
    evento.preventDefault()
    let pesoValido = validaPeso(),
      pesoMinValido = validaPesoMin(),
      pesoMaxValido = validaPesoMax()
    
    let formularioValido = pesoValido &&
      pesoMinValido &&
      pesoMaxValido

    if (formularioValido){
      Swal.fire({
        title: 'Sucessful registered aircraft',
        text: "Procced with the variables registration?",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, procced'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/Variavel/")
        }
      })
    }
  }

  const ehNumero = (valor: any) => {
    const expressao = new RegExp("^[0-9]+$")
    return expressao.test(valor)
  }

  function validaPeso(){
    const idPeso = document.getElementById("peso_referencial")
    let valido = false;

    if(!ehNumero(Peso)){
      showError(idPeso!, `Weight must be a number`)
    } else {
      showSuccess(idPeso!);
      valido = true
    }
    return valido
  }

  function validaPesoMin(){
    const idPesoMin = document.getElementById("peso_minimo")
    let valido = false;

    if(!ehNumero(PesoMinimo)){
      showError(idPesoMin!, `Minimum weight must be a number`)
    } else {
      showSuccess(idPesoMin!);
      valido = true;
    }
    return valido
  }

  function validaPesoMax(){
    const idPesoMax = document.getElementById("peso_maximo")
    let valido = false;

    if(!ehNumero(PesoMaximo)){
      showError(idPesoMax!, `Maximum weight must be a number`)
    } else {
      showSuccess(idPesoMax!);
      valido = true;
    }
    return valido
  }

  function receberFabricante(evento: any){
    let entrada = evento.target.value;
    setFabricante(entrada)
  }
  
  function receberModelo(evento: any){
    let entrada = evento.target.value;
    setModelo(entrada)
  }

  function receberCertificacao(evento: any){
    let entrada = evento.target.value;
    setCertificacao(entrada)
  }

  function receberMotor(evento: any){
    let entrada = evento.target.value;
    setMotor(entrada)
  }

  function receberReversor(evento: any){
    let entrada = evento.target.value;
    setReversor(entrada)
  }

  function receberPeso(evento: any){
    let entrada = evento.target.value;
    setPeso(entrada)
  }

  function receberPesoMin(evento: any){
    let entrada = evento.target.value;
    setPesoMinimo(entrada)
  }

  function receberPesoMax(evento: any){
    let entrada = evento.target.value;
    setPesoMaximo(entrada)
  }

  const [Fabricante, setFabricante] = useState("");
  const [Modelo, setModelo] = useState("");
  const [Certificacao, setCertificacao] = useState("");
  const [Motor, setMotor] = useState("");
  const [Revesor, setReversor] = useState("");
  const [Peso, setPeso] = useState("");
  const [PesoMinimo, setPesoMinimo] = useState("");
  const [PesoMaximo, setPesoMaximo] = useState("");

  return (
    <div className="CriarAeronaves">
      {/* <div>
        <i>
          <img
            className="logoAviaoCriar"
            src="loguinho.png"
            id="logoAviaozinho"
            alt="some text"
          />
        </i>
      </div> */}
      <form id="form_criar_aeronave" onSubmit={manipularEnvio}>
        <div className="card card-custom gutter-b">
          <div className="card-header">
            <h3 id="h3Criar" className="card-title">
              Aircraft Registration
            </h3>
            <div className="card-toolbar"></div>
          </div>
          <div className="card-body col-md-13">
            <div className="row">
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Manufacturer:</label>
                <input
                  id="fabricante"
                  className="form-control"
                  name="fabricante"
                  placeholder="Insert the aircraft manufacturer:"
                  value={Fabricante}
                  onChange={receberFabricante}
                />
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Aircraft model:</label>
                <input
                  id="modelo"
                  className="form-control"
                  name="modelo"
                  placeholder="Insert the aircraft model:"
                  value={Modelo}
                  onChange={receberModelo}
                />
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Certification:</label>
                <input
                  id="certificacao"
                  className="form-control"
                  name="certificacao"
                  placeholder="Insert the aircraft certification:"
                  value={Certificacao}
                  onChange={receberCertificacao}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Motor:</label>
                <input
                  id="motor"
                  className="form-control"
                  name="motor"
                  placeholder="Insert the aircraft motor:"
                  value={Motor}
                  onChange={receberMotor}
                />
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>How many reversers does the aircraft have?</label>
                <select
                  id="qtde_reversor"
                  className="form-control"
                  name="qtde_reversor"
                  placeholder="Number of reversers:"
                  value={Revesor}
                  onChange={receberReversor}
                >
                  <option value="" selected disabled>Select</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Aircraft weight (Kg):</label>
                <input
                  id="peso_referencial"
                  className="form-control"
                  type="tel"
                  name="peso_referencial"
                  placeholder="Insert the aircraft ref weight:"
                  value={Peso}
                  onChange={receberPeso}
                />
                <small></small>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-4-md col-md-6 com-sm-12">
                <label>Minimum weight the aircraft can get</label>
                <input
                  id="peso_minimo"
                  className="form-control"
                  name="peso_minimo"
                  placeholder="Insert the aircraft minimum weight:"
                  value={PesoMinimo}
                  onChange={receberPesoMin}
                />
                <small></small>
              </div>
              <div className="form-group col-lg-4-md col-md-6 com-sm-12">
                <label>Maximum weight the aircraft can get</label>
                <input
                  id="peso_maximo"
                  className="form-control"
                  name="peso_maximo"
                  placeholder="Insert the aircraft maximum weight:"
                  value={PesoMaximo}
                  onChange={receberPesoMax}
                />
                <small></small>
              </div>
            </div>
          </div>
          <div className="card-footer w-100 float-right">
            <a
              className="rounded btn btn-primary ml-2 float-start"
              href="http://localhost:3000"
            >
              <b>Return</b>
            </a>
            <button
              className="rounded btn btn-primary ml-2 float-end"
              type="submit"
              id="btn_registrar"
              name="submitButton"
            >
              <b>Register</b>
            </button>
          </div>
        </div>
      </form>

      <script src="../compile/build/CriarAeronaves.js"></script>
    </div>
  );
}

export default CriarAeronaves;
