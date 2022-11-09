import "../css/criar-aeronaves.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function VariaveisAeronaves() {
  const navigate = useNavigate();

  const url_atual = window.location.href;
  console.log(url_atual);
  const id = window.location.href.split('http://localhost:3000/')[1];
  console.log(id);

  function manipularEnvio(evento: any) {
    evento.preventDefault();
    // let distanciaValida = validaDistancia(),
    //   reversorValido = validaReversor(),
    //   variacaoPesoValida = validaVariacaoPes(),
    //   pesoAcmValido = validaPesoAcm(),
    //   sobrepesoValido = validaSobrepeso(),
    //   variacaoAltValida = validaVariacaoAlt(),
    //   altitudeAcmValida = validaAltitudeAcm(),
    //   variacaoTmpValida = validaVariacaoTmp(),
    //   temperaturaAcmValida = validaTemperaturaAcm(),
    //   ventoPdValido = validaVentoPd(),
    //   variacaoVentoValida = validaVariacaoVento(),
    //   ventoAcmValido = validaVentoAcm(),
    //   slopePdValido = validaSlopePd(),
    //   variacaoSlopeValido = validaVariacaoSlope(),
    //   slopeAbxValido = validaSlopeAbx(),
    //   vapPdValido = validaVapPd(),
    //   variacaoVapValido = validaVariacaoVap(),
    //   vapAcmValido = validaVapAcm()

    let formularioValido = true
      // distanciaValida &&
      // reversorValido &&
      // variacaoPesoValida &&
      // pesoAcmValido &&
      // sobrepesoValido &&
      // variacaoAltValida &&
      // altitudeAcmValida &&
      // variacaoTmpValida &&
      // temperaturaAcmValida &&
      // ventoPdValido &&
      // variacaoVentoValida &&
      // ventoAcmValido &&
      // slopePdValido &&
      // variacaoSlopeValido &&
      // slopeAbxValido &&
      // vapPdValido &&
      // variacaoVapValido &&
      // vapAcmValido;

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
          navigate(`/Variavel/:id`);
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

  const entre = (valor: number, min: number, max: number) => valor < min || valor > max ? false : true

  function validaDistancia() {
    const id = document.getElementById("distancia_referencial");
    let valido = false;
    const min: number = 0, max: number = 900000;

    if (!entre(parseInt(Distancia), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }

  function validaReversor() {
    const id = document.getElementById("correcao_reversor_inoperante");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(Reversor), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }

  function validaVariacaoPes() {
    const id = document.getElementById("padrao_variacao_peso");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(VariacaoPes), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaPesoAcm() {
    const id = document.getElementById("correcao_peso_acima");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(PesoAcm), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaSobrepeso() {
    const id = document.getElementById("correcao_sobrepeso");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(Sobrepeso), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoAlt() {
    const id = document.getElementById("padrao_variacao_altitude");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(VariacaoAlt), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaAltitudeAcm() {
    const id = document.getElementById("correcao_altitude_acima");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(AltitudeAcm), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoTmp() {
    const id = document.getElementById("padrao_variacao_temperatura");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(VariacaoTmp), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaTemperaturaAcm() {
    const id = document.getElementById("correcao_temperatura_acima");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(TemperaturaAcm), min, max)) {
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
    const min = 0, max = 900000

    if (!entre(parseInt(VentoPd), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoVento() {
    const id = document.getElementById("padrao_variacao_vento");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(VariacaoVento), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVentoAcm() {
    const id = document.getElementById("correcao_vento_cauda");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(VentoAcm), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaSlopePd() {
    const id = document.getElementById("slope_padrao");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(SlopePd), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoSlope() {
    const id = document.getElementById("padrao_variacao_inclinacao");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(VariacaoSlope), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaSlopeAbx() {
    const id = document.getElementById("correcao_declive");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(SlopeAbx), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVapPd() {
    const id = document.getElementById("vap_padrao");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(VapPd), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoVap() {
    const id = document.getElementById("padrao_variacao_velocidade");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(VariacaoSlope), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaVapAcm() {
    const id = document.getElementById("correcao_velocidade_acima");
    let valido = false;
    const min = 0, max = 900000

    if (!entre(parseInt(VapAcm), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
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
              Variables registration
            </h3>
            <div className="card-toolbar"></div>
          </div>
          <div className="card-body col-md-13">
            <fieldset className="row flap">
              <legend>Flap configurations</legend>
              <div className="form-group col-lg-4-md col-md-2 col-sm-12">
                <label>Flap:</label>
                <input
                  id="tipo_flap"
                  className="form-control"
                  name="tipo_flap"
                  placeholder="Insert the aircraft flap:"
                  value={Flap}
                  onChange={receberFlap}
                  //onInput={handleChangeValues}
                />
                <FormControlLabel
                  control={<Switch onChange={receberGelo} />}
                  label="Ice Accretion"
                />
              </div>
              <div className="form-group col-lg-4-md col-md-2 col-sm-12">
                <label>Brake config:</label>
                <select
                  title="configuracao_freio"
                  id="configuracao_freio"
                  className="form-control"
                  name="configuracao_freio"
                  value={Break}
                  onChange={receberBreak}
                  //onInput={handleChangeValues}
                >
                  <option value="" selected disabled>
                    Select
                  </option>
                  <option value="1">Max. Manual</option>
                  <option value="2">High</option>
                  <option value="3">Medium</option>
                  <option value="4">Low</option>
                </select>
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Runway Condition:</label>
                    <select className="form-control select" id="condicao_pista" title="condicaoPista" value={Condicao} onChange={receberCondicao}>
                      <option value="" disabled selected>Select a runway condition</option>
                      <option value="1">1 - Ice</option>
                      <option value="2">2 - Standing, Water, Slush</option>
                      <option value="3">3 - Loose Snow</option>
                      <option value="4">4 - Compact Snow</option>
                      <option value="5">5 - Wet</option>
                      <option value="6">6 - Dry</option>
                    </select>
              </div>
              <div className="form-group col-lg-4-md col-md-2 col-sm-12">
                <label>Referencial distance:</label>
                <input
                  id="distancia_referencial"
                  className="form-control"
                  name="distancia_referencial"
                  placeholder="Referential distance (m)"
                  type="number"
                  value={Distancia}
                  onChange={receberDistancia}
                  //onInput={handleChangeValues}
                />
                <small></small>
              </div>
              <div className="form-group col-lg-4-md col-md-2 col-sm-12">
                <label>Reverser variation:</label>
                <input
                  id="correcao_reversor_inoperante"
                  className="form-control"
                  name="correcao_reversor_inoperante"
                  placeholder="Per rev inop (m)"
                  type="number"
                  value={Reversor}
                  onChange={receberReversor}
                  //onInput={handleChangeValues}
                />
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-2 variavel">
              <legend>Weight</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>Increment/decrement step (Kg):</label>
                <input
                  id="padrao_variacao_peso"
                  className="form-control"
                  name="padrao_variacao_peso"
                  placeholder="For each"
                  type="number"
                  value={VariacaoPes}
                  onChange={receberVariacaoPes}
                  //onInput={handleChangeValues}
                />
                <small></small>
                <br></br>
                <label>Insert the Variation index (m):</label>
                <input
                  id="correcao_peso_acima"
                  className="form-control"
                  name="correcao_peso_acima"
                  placeholder="Above standard"
                  type="number"
                  value={PesoAcm}
                  onChange={receberPesoAcm}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
                <br></br>
                <input
                  id="correcao_peso_abaixo"
                  className="form-control"
                  name="correcao_peso_abaixo"
                  placeholder="Below standard"
                  type="number"
                  value={PesoAbx}
                  onChange={receberPesoAbx}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
                <br></br>
                <label>Overweight (Kg):</label>
                <input
                  id="correcao_sobrepeso"
                  className="form-control"
                  name="correcao_sobrepeso"
                  placeholder="Overweight"
                  type="number"
                  value={Sobrepeso}
                  onChange={receberSobrepeso}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-2 variavel">
              <legend>Altitude (Ft):</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>Reference value:</label>
                <input
                  id="altitude_padrao"
                  className="form-control"
                  name="altitude_padrao"
                  placeholder="Default value"
                  type="number"
                  value={AltitudePd}
                  onChange={receberAltitudePd}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
                <br></br>
                <label>Increment/decrement step (Ft):</label>
                <input
                  id="padrao_variacao_altitude"
                  className="form-control"
                  name="padrao_variacao_altitude"
                  placeholder="For each"
                  type="number"
                  value={VariacaoAlt}
                  onChange={receberVariacaoAlt}
                  //onInput={handleChangeValues}
                />
                <small></small>
                <br></br>
                <label>Variation index (m):</label>
                <input
                  id="correcao_altitude_acima"
                  className="form-control"
                  name="correcao_altitude_acima"
                  placeholder="Above standard"
                  type="number"
                  value={AltitudeAcm}
                  onChange={receberAltitudeAcm}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
                <br></br>
                <input
                  id="correcao_altitude_abaixo"
                  className="form-control"
                  name="correcao_altitude_abaixo"
                  placeholder="Below standard"
                  type="number"
                  value={AltitudeAbx}
                  onChange={receberAltitudeAbx}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-2 variavel">
              <legend>Temperature (ISA):</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>Reference value:</label>
                <input
                  id="temperatura_padrao"
                  className="form-control"
                  name="temperatura_padrao"
                  placeholder="Default value in °C"
                  type="number"
                  value={TemperaturaPd}
                  onChange={receberTemperaturaPd}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
                <br></br>
                <label>Increment/decrement step (°C):</label>
                <input
                  id="padrao_variacao_temperatura"
                  className="form-control"
                  name="padrao_variacao_temperatura"
                  placeholder="For each"
                  type="number"
                  value={VariacaoTmp}
                  onChange={receberVariacaoTmp}
                  //onInput={handleChangeValues}
                />
                <small></small>
                <br></br>
                <label>Variation index (m):</label>
                <input
                  id="correcao_temperatura_acima"
                  className="form-control"
                  name="correcao_temperatura_acima"
                  placeholder="Above standard"
                  type="number"
                  value={TemperaturaAcm}
                  onChange={receberTemperaturaAcm}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
                <br></br>
                <input
                  id="correcao_temperatura_abaixo"
                  className="form-control"
                  name="correcao_temperatura_abaixo"
                  placeholder="Below standard"
                  type="number"
                  value={TemperaturaAbx}
                  onChange={receberTemperaturaAbx}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-2 variavel">
              <legend>Wind (KTAS):</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>Reference value:</label>
                <input
                  id="padrao_vento"
                  className="form-control"
                  name="padrao_vento"
                  placeholder="Default value"
                  type="number"
                  value={VentoPd}
                  onChange={receberVentoPd}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
                <br></br>
                <label>Increment/decrement step (KTAS):</label>
                <input
                  id="padrao_variacao_vento"
                  className="form-control"
                  name="padrao_variacao_vento"
                  placeholder="For each"
                  type="number"
                  value={VariacaoVento}
                  onChange={receberVariacaoVento}
                  //onInput={handleChangeValues}
                />
                <small></small>
                <br></br>
                <label>Variation index (m):</label>
                <input
                  id="correcao_vento_cauda"
                  className="form-control"
                  name="correcao_vento_cauda"
                  placeholder="Above standard (Tail wind)"
                  type="number"
                  value={VentoAcm}
                  onChange={receberVentoAcm}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
                <br></br>
                <input
                  id="correcao_vento_proa"
                  className="form-control"
                  name="correcao_vento_proa"
                  placeholder="Below standard (Head wind)"
                  type="number"
                  value={VentoAbx}
                  onChange={receberVentoAbx}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-2 variavel">
              <legend>Slope (%):</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>Reference value:</label>
                <input
                  id="slope_padrao"
                  className="form-control"
                  name="slope_padrao"
                  placeholder="Default value"
                  type="number"
                  value={SlopePd}
                  onChange={receberSlopePd}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
                <br></br>
                <label>Increment/decrement step (%):</label>
                <input
                  id="padrao_variacao_inclinacao"
                  className="form-control"
                  name="padrao_variacao_inclinacao"
                  placeholder="For each"
                  type="number"
                  value={VariacaoSlope}
                  onChange={receberVariacaoSlope}
                  //onInput={handleChangeValues}
                />
                <small></small>
                <br></br>
                <label>Variation index (m):</label>
                <input
                  id="correcao_aclive"
                  className="form-control"
                  name="correcao_aclive"
                  placeholder="Above standard"
                  type="number"
                  value={SlopeAcm}
                  onChange={receberSlopeAcm}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
                <br></br>
                <input
                  id="correcao_declive"
                  className="form-control"
                  name="correcao_declive"
                  placeholder="Below standard"
                  type="number"
                  value={SlopeAbx}
                  onChange={receberSlopeAbx}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-2 variavel">
              <legend>VAP (speed):</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>Reference value:</label>
                <input
                  id="vap_padrao"
                  className="form-control"
                  name="vap_padrao"
                  placeholder="Default value"
                  type="number"
                  value={VapPd}
                  onChange={receberVapPd}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
                <br></br>
                <label>Increment/decrement step (?):</label>
                <input
                  id="padrao_variacao_velocidade"
                  className="form-control"
                  name="padrao_variacao_velocidade"
                  placeholder="For each"
                  type="number"
                  value={VariacaoVAP}
                  onChange={receberVariacaoVAP}
                  //onInput={handleChangeValues}
                />
                <small></small>
                <br></br>
                <label>Variation index (m):</label>
                <input
                  id="correcao_velocidade_acima"
                  className="form-control"
                  name="correcao_velocidade_acima"
                  placeholder="Above standard"
                  type="number"
                  value={VapAcm}
                  onChange={receberVapAcm}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
                <br></br>
                <input
                  id="correcao_velocidade_abaixo"
                  className="form-control"
                  name="correcao_velocidade_abaixo"
                  placeholder="Below standard"
                  type="number"
                  value={VapAbx}
                  onChange={receberVapAbx}
                  //onInput={handleChangeValues}
                ></input>
                <small></small>
              </div>
            </fieldset>

            <div className="clear"></div>
          </div>
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
