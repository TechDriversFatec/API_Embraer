import * as React from 'react';
import "../css/criar-aeronaves.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function VariaveisAeronaves() {
  const navigate = useNavigate();

  const url_atual = window.location.href;
  console.log(url_atual);
  const id = window.location.href.split('http://localhost:3000/Variavel/')[1];
  console.log(id);

  function manipularEnvio(evento: any) {
    evento.preventDefault();
    let distanciaValida = validaDistancia(),
      reversorValido = validaReversor(),
      variacaoPesoValida = validaVariacaoPes(),
      pesoAcmValido = validaPesoAcm(),
      pesoAbxValido = validaPesoAbx(),
      sobrepesoValido = validaSobrepeso(),
      altitudePdValida = validaAltitudePd(),
      variacaoAltValida = validaVariacaoAlt(),
      altitudeAcmValida = validaAltitudeAcm(),
      altitudeAbxValida = validaAltitudeAbx(),
      temperaturaPdValida = validaTemperaturaPd(),
      variacaoTmpValida = validaVariacaoTmp(),
      temperaturaAcmValida = validaTemperaturaAcm(),
      temperaturaAbxValida = validaTemperaturaAbx(),
      ventoPdValido = validaVentoPd(),
      variacaoVentoValida = validaVariacaoVento(),
      ventoAcmValido = validaVentoAcm(),
      ventoAbxValido = validaVentoAbx(),
      slopePdValido = validaSlopePd(),
      variacaoSlopeValido = validaVariacaoSlope(),
      slopeAcmValido = validaSlopeAcm(),
      slopeAbxValido = validaSlopeAbx(),
      vapPdValido = validaVapPd(),
      variacaoVapValido = validaVariacaoVap(),
      vapAcmValido = validaVapAcm(),
      vapAbxValido = validaVapAbx();

    let formularioValido =
      distanciaValida &&
      reversorValido &&
      variacaoPesoValida &&
      pesoAcmValido &&
      pesoAbxValido &&
      sobrepesoValido &&
      altitudePdValida &&
      variacaoAltValida &&
      altitudeAcmValida &&
      altitudeAbxValida &&
      temperaturaPdValida &&
      variacaoTmpValida &&
      temperaturaAcmValida &&
      temperaturaAbxValida &&
      ventoPdValido &&
      variacaoVentoValida &&
      ventoAcmValido &&
      ventoAbxValido &&
      slopePdValido &&
      variacaoSlopeValido &&
      slopeAcmValido &&
      slopeAbxValido &&
      vapPdValido &&
      variacaoVapValido &&
      vapAcmValido &&
      vapAbxValido;

    if (formularioValido) {
      Axios.post("http://localhost:3002/parameter", {
        tipo_flap: Flap,
        configuracao_freio: Break,
        condicao_pista: Condicao,
        distancia_referencial: Distancia,
        correcao_reversor_inoperante: Reversor,
        padrao_variacao_peso: VariacaoPes,
        correcao_peso_acima: PesoAcm,
        correcao_peso_abaixo: PesoAbx,
        correcao_sobrepeso: Sobrepeso,
        altitude_padrao: VariacaoAlt,
        padrao_variacao_altitude: AltitudePd,
        correcao_altitude_acima: AltitudeAcm,
        correcao_altitude_abaixo: AltitudeAbx,
        temperatura_padrao: TemperaturaPd,
        padrao_variacao_temperatura: VariacaoTmp,
        correcao_temperatura_acima: TemperaturaAcm,
        correcao_temperatura_abaixo: TemperaturaAbx,
        padrao_vento: VentoPd,
        padrao_variacao_vento: VariacaoVento,
        correcao_vento_cauda: VentoAcm,
        correcao_vento_proa: VentoAbx,
        slope_padrao: SlopePd,
        padrao_variacao_inclinacao: VariacaoSlope,
        correcao_aclive: SlopeAcm,
        correcao_declive: SlopeAbx,
        vap_padrao: VapPd,
        padrao_variacao_velocidade: VariacaoVAP,
        correcao_velocidade_acima: VapAcm,
        correcao_velocidade_abaixo: VapAbx,
        aeronave_id: id
      });
      Swal.fire({
        title: "Sucessful registered variables",
        text: "Procced with the registration of more variables?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, procced",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/Variavel/:id");
        };
      });
    }
  }

  const showError = (input: HTMLElement, message: string) => {
    const formField = input.parentElement;
    formField!.classList.remove("success");
    formField!.classList.add("error");

    const error = formField!.querySelector("small");
    error!.textContent = message;
  };

  const showSuccess = (input: HTMLElement) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField!.classList.remove("error");
    formField!.classList.add("success");

    // hide the error message
    const error = formField!.querySelector("small");
    error!.textContent = "";
  };

  const ehNumero = (valor: any) => {
    const expressao = new RegExp("^[0-9]+$");
    return expressao.test(valor);
  };

  function validaDistancia() {
    const id = document.getElementById("distancia_referencial");
    let valido = false;

    if (!ehNumero(Distancia)) {
      showError(id!, `Value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }

  function validaReversor() {
    const id = document.getElementById("correcao_reversor_inoperante");
    let valido = false;

    if (!ehNumero(Reversor)) {
      showError(id!, `Value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }

  function validaVariacaoPes() {
    const id = document.getElementById("padrao_variacao_peso");
    let valido = false;

    if (!ehNumero(VariacaoPes)) {
      showError(id!, `Value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaPesoAcm() {
    const id = document.getElementById("correcao_peso_acima");
    let valido = false;

    if (!ehNumero(PesoAcm)) {
      showError(id!, `Value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaPesoAbx() {
    const id = document.getElementById("correcao_peso_abaixo");
    let valido = false;

    if (!ehNumero(PesoAbx)) {
      showError(id!, `Value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaSobrepeso() {
    const id = document.getElementById("correcao_sobrepeso");
    let valido = false;

    if (!ehNumero(Sobrepeso)) {
      showError(id!, `Value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaAltitudePd() {
    const id = document.getElementById("altitude_padrao");
    let valido = false;

    if (!ehNumero(AltitudePd)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoAlt() {
    const id = document.getElementById("padrao_variacao_altitude");
    let valido = false;

    if (!ehNumero(VariacaoAlt)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaAltitudeAcm() {
    const id = document.getElementById("correcao_altitude_acima");
    let valido = false;

    if (!ehNumero(AltitudeAcm)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaAltitudeAbx() {
    const id = document.getElementById("correcao_altitude_abaixo");
    let valido = false;

    if (!ehNumero(AltitudeAbx)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaTemperaturaPd() {
    const id = document.getElementById("temperatura_padrao");
    let valido = false;

    if (!ehNumero(TemperaturaPd)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoTmp() {
    const id = document.getElementById("padrao_variacao_temperatura");
    let valido = false;

    if (!ehNumero(VariacaoTmp)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaTemperaturaAcm() {
    const id = document.getElementById("correcao_temperatura_acima");
    let valido = false;

    if (!ehNumero(TemperaturaAcm)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaTemperaturaAbx() {
    const id = document.getElementById("correcao_temperatura_abaixo");
    let valido = false;

    if (!ehNumero(TemperaturaAbx)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVentoPd() {
    const id = document.getElementById("padrao_vento");
    let valido = false;

    if (!ehNumero(VentoPd)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoVento() {
    const id = document.getElementById("padrao_variacao_vento");
    let valido = false;

    if (!ehNumero(VariacaoVento)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVentoAcm() {
    const id = document.getElementById("correcao_vento_cauda");
    let valido = false;

    if (!ehNumero(VentoAcm)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVentoAbx() {
    const id = document.getElementById("correcao_vento_proa");
    let valido = false;

    if (!ehNumero(VentoAbx)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaSlopePd() {
    const id = document.getElementById("slope_padrao");
    let valido = false;

    if (!ehNumero(SlopePd)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoSlope() {
    const id = document.getElementById("padrao_variacao_inclinacao");
    let valido = false;

    if (!ehNumero(VariacaoSlope)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaSlopeAcm() {
    const id = document.getElementById("correcao_aclive");
    let valido = false;

    if (!ehNumero(SlopeAcm)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaSlopeAbx() {
    const id = document.getElementById("correcao_declive");
    let valido = false;

    if (!ehNumero(SlopeAbx)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVapPd() {
    const id = document.getElementById("vap_padrao");
    let valido = false;

    if (!ehNumero(VapPd)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoVap() {
    const id = document.getElementById("padrao_variacao_velocidade");
    let valido = false;

    if (!ehNumero(VariacaoSlope)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVapAcm() {
    const id = document.getElementById("correcao_velocidade_acima");
    let valido = false;

    if (!ehNumero(VapAcm)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVapAbx() {
    const id = document.getElementById("correcao_velocidade_abaixo");
    let valido = false;

    if (!ehNumero(VapAbx)) {
      showError(id!, `value must be a number`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }

  function receberFlap(evento: any) {
    let entrada = evento.target.value;
    setFlap(entrada);
  }
  function receberGelo(evento: any) {
    let entrada = evento.target.value;
    setGelo(entrada);
    return "Gelo";
  }
  function receberBreak(evento: any) {
    let entrada = evento.target.value;
    setBreak(entrada);
  }
  function receberCondicao(evento: any) {
    let entrada = evento.target.value;
    setCondicao(entrada);
  }
  function receberDistancia(evento: any) {
    let entrada = evento.target.value;
    setDistancia(entrada);
  }
  function receberReversor(evento: any) {
    let entrada = evento.target.value;
    setReversor(entrada);
  }
  function receberVariacaoPes(evento: any) {
    let entrada = evento.target.value;
    setVariacaoPes(entrada);
  }
  function receberPesoAbx(evento: any) {
    let entrada = evento.target.value;
    setPesoAbx(entrada);
  }
  function receberPesoAcm(evento: any) {
    let entrada = evento.target.value;
    setPesoAcm(entrada);
  }
  function receberSobrepeso(evento: any) {
    let entrada = evento.target.value;
    setSobrepeso(entrada);
  }
  function receberVariacaoAlt(evento: any) {
    let entrada = evento.target.value;
    setVariacaoAlt(entrada);
  }
  function receberAltitudePd(evento: any) {
    let entrada = evento.target.value;
    setAltitudePd(entrada);
  }
  function receberAltitudeAbx(evento: any) {
    let entrada = evento.target.value;
    setAltitudeAbx(entrada);
  }
  function receberAltitudeAcm(evento: any) {
    let entrada = evento.target.value;
    setAltitudeAcm(entrada);
  }
  function receberTemperaturaPd(evento: any) {
    let entrada = evento.target.value;
    setTemperaturaPd(entrada);
  }
  function receberVariacaoTmp(evento: any) {
    let entrada = evento.target.value;
    setVariacaoTmp(entrada);
  }
  function receberTemperaturaAbx(evento: any) {
    let entrada = evento.target.value;
    setTemperaturaAbx(entrada);
  }
  function receberTemperaturaAcm(evento: any) {
    let entrada = evento.target.value;
    setTemperaturaAcm(entrada);
  }
  function receberVentoPd(evento: any) {
    let entrada = evento.target.value;
    setVentoPd(entrada);
  }
  function receberVariacaoVento(evento: any) {
    let entrada = evento.target.value;
    setVariacaoVento(entrada);
  }
  function receberVentoAbx(evento: any) {
    let entrada = evento.target.value;
    setVentoAbx(entrada);
  }
  function receberVentoAcm(evento: any) {
    let entrada = evento.target.value;
    setVentoAcm(entrada);
  }
  function receberSlopePd(evento: any) {
    let entrada = evento.target.value;
    setSlopePd(entrada);
  }
  function receberVariacaoSlope(evento: any) {
    let entrada = evento.target.value;
    setVariacaoSlope(entrada);
  }
  function receberSlopeAbx(evento: any) {
    let entrada = evento.target.value;
    setSlopeAbx(entrada);
  }
  function receberSlopeAcm(evento: any) {
    let entrada = evento.target.value;
    setSlopeAcm(entrada);
  }
  function receberVapPd(evento: any) {
    let entrada = evento.target.value;
    setVapPd(entrada);
  }
  function receberVariacaoVAP(evento: any) {
    let entrada = evento.target.value;
    setVariacaoVAP(entrada);
  }
  function receberVapAbx(evento: any) {
    let entrada = evento.target.value;
    setVapAbx(entrada);
  }
  function receberVapAcm(evento: any) {
    let entrada = evento.target.value;
    setVapAcm(entrada);
  }

  const [Flap, setFlap] = useState("");
  const [Gelo, setGelo] = useState("");
  const [Break, setBreak] = useState("");
  const [Condicao, setCondicao] = useState("");
  const [Distancia, setDistancia] = useState("");
  const [Reversor, setReversor] = useState("");
  const [VariacaoPes, setVariacaoPes] = useState("");
  const [PesoAcm, setPesoAcm] = useState("");
  const [PesoAbx, setPesoAbx] = useState("");
  const [Sobrepeso, setSobrepeso] = useState("");
  const [AltitudePd, setAltitudePd] = useState("");
  const [VariacaoAlt, setVariacaoAlt] = useState("");
  const [AltitudeAcm, setAltitudeAcm] = useState("");
  const [AltitudeAbx, setAltitudeAbx] = useState("");
  const [TemperaturaPd, setTemperaturaPd] = useState("");
  const [VariacaoTmp, setVariacaoTmp] = useState("");
  const [TemperaturaAbx, setTemperaturaAbx] = useState("");
  const [TemperaturaAcm, setTemperaturaAcm] = useState("");
  const [VentoPd, setVentoPd] = useState("");
  const [VariacaoVento, setVariacaoVento] = useState("");
  const [VentoAbx, setVentoAbx] = useState("");
  const [VentoAcm, setVentoAcm] = useState("");
  const [SlopePd, setSlopePd] = useState("");
  const [VariacaoSlope, setVariacaoSlope] = useState("");
  const [SlopeAbx, setSlopeAbx] = useState("");
  const [SlopeAcm, setSlopeAcm] = useState("");
  const [VapPd, setVapPd] = useState("");
  const [VariacaoVAP, setVariacaoVAP] = useState("");
  const [VapAbx, setVapAbx] = useState("");
  const [VapAcm, setVapAcm] = useState("");

  return (
    <div className="CriarAeronaves">
      <form id="form_criar_aeronave" onSubmit={manipularEnvio}>
        <div className="card card-custom gutter-b">
          <div className="card-header">
            <h3 id="h3Criar" className="card-title">
              Variables registration
            </h3>
            <div className="card-toolbar"></div>
          </div>
          <div className="card-body col-md-12">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row">
                  <h4 id="h3FlapConfig">Select a Flap</h4>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Flap:</label>
                    <select className="form-control select" id="flap" title="flap">
                      <option value="" disabled selected>Select a Flap</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Brake Configuration:</label>
                    <select className="form-control select" id="frenagem" title="frenagem">
                      <option value="" disabled selected>Select a brake configuration</option>
                      <option value="1">Max. Manual</option>
                      <option value="2">High</option>
                      <option value="3">Medium</option>
                      <option value="4">Low</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Runway Condition:</label>
                    <select className="form-control select" id="condicaoPista" title="condicaoPista">
                      <option value="" disabled selected>Select an Airplane</option>
                      <option value="1">1 - Ice</option>
                      <option value="2">2 - Standing, Water, Slush</option>
                      <option value="3">3 - Loose Snow</option>
                      <option value="4">4 - Compact Snow</option>
                      <option value="5">5 - Wet</option>
                      <option value="6">6 - Dry</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Reverser variation:</label>
                    <input
                      id="correcao_reversor_inoperante"
                      className="form-control"
                      name="correcao_reversor_inoperante"
                      placeholder="Per rev inop (m)"
                      value={Reversor}
                      onChange={receberReversor}
                    //onInput={handleChangeValues}
                    />
                    <small></small>
                  </div>

                </div>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <h4 id="h3AirplaneConfig">Variable settings</h4>
                  <h6><i>Weight variables</i></h6>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Increment/decrement step (Kg):</label>
                    <input
                      id="padrao_variacao_peso"
                      className="form-control"
                      name="padrao_variacao_peso"
                      placeholder="For each"
                      value={VariacaoPes}
                      onChange={receberVariacaoPes}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Insert the Variation index (m):</label>
                    <input
                      id="correcao_peso_acima"
                      className="form-control"
                      name="correcao_peso_acima"
                      placeholder="Above standard"
                      value={PesoAcm}
                      onChange={receberPesoAcm}
                    ></input>
                    <small></small>
                  </div>

                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Insert the Variation index (m):</label>
                    <input
                      id="correcao_peso_abaixo"
                      className="form-control"
                      name="correcao_peso_abaixo"
                      placeholder="Below standard"
                      value={PesoAbx}
                      onChange={receberPesoAbx}
                    ></input>
                    <small></small>
                  </div>

                  <div className="form-group col-lg-2 col-md-6 col-sm-12 sucess">
                    <label>Overweight (Kg):</label>
                    <input
                      id="correcao_sobrepeso"
                      className="form-control"
                      name="correcao_sobrepeso"
                      placeholder="Overweight"
                      value={Sobrepeso}
                      onChange={receberSobrepeso}
                    ></input>
                    <small></small>
                  </div>

                  <div className="form-group col-lg-1 col-md-6 col-sm-12 addi">
                    <p></p>
                    <IconButton>
                      <AddIcon fontSize='large' />
                    </IconButton>
                  </div>

                </div>

                <div className="row">
                  <h6><i>Altitude variables</i></h6>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Reference value:</label>
                    <input
                      id="altitude_padrao"
                      className="form-control"
                      name="altitude_padrao"
                      placeholder="Default value"
                      value={AltitudePd}
                      onChange={receberAltitudePd}
                    ></input>
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Increment/decrement step (Ft):</label>
                    <input
                      id="padrao_variacao_altitude"
                      className="form-control"
                      name="padrao_variacao_altitude"
                      placeholder="For each"
                      value={VariacaoAlt}
                      onChange={receberVariacaoAlt}
                    />
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Variation index (m):</label>
                    <input
                      id="correcao_altitude_acima"
                      className="form-control"
                      name="correcao_altitude_acima"
                      placeholder="Above standard"
                      value={AltitudeAcm}
                      onChange={receberAltitudeAcm}
                    ></input>
                    <small></small>
                  </div>
                  <div className="form-group col-lg-2 col-md-6 col-sm-12 sucess">
                    <label>Variation index (m):</label>
                    <input
                      id="correcao_altitude_abaixo"
                      className="form-control"
                      name="correcao_altitude_abaixo"
                      placeholder="Below standard"
                      value={AltitudeAbx}
                      onChange={receberAltitudeAbx}
                    ></input>
                  </div>
                  <div className="form-group col-lg-1 col-md-6 col-sm-12 addi">
                    <p></p>
                    <IconButton>
                      <AddIcon fontSize='large' />
                    </IconButton>
                  </div>
                </div>
              </li>

            </ul>
          </div>

          <div className="clear"></div>

          <div className="card-footer w-100 float-right">
            <a
              className="rounded btn btn-primary ml-2 float-start"
              href="http://localhost:3000/Index"
            >
              <b>Return</b>
            </a>
            <button
              className="rounded btn btn-primary ml-2 float-end"
              type="submit"
              id="btn_registrar"
              name="submitButton"
            //onClick={() => handleClickButton(values)}
            >
              <b>Register</b>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default VariaveisAeronaves;