import "../css/criar-aeronaves.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { FormControlLabel, Switch } from "@mui/material";
import Axios from "axios";
import Swal from "sweetalert2";

function VariaveisAeronaves() {
  const [values, setValues] = useState(Object);

  const handleChangeValues = (value: any) => {
    setValues((prevValue: any) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = (values: any) => {
    Axios.post("http://localhost:3002/parameter", {
      tipo_flap: values.tipo_flap,
      configuracao_freio: values.configuracao_freio,
      condicao_pista: values.condicao_pista,
      distancia_referencial: values.distancia_referencial,
      correcao_reversor_inoperante: values.correcao_reversor_inoperante,
      padrao_variacao_peso: values.padrao_variacao_peso,
      correcao_peso_acima: values.correcao_peso_acima,
      correcao_peso_abaixo: values.correcao_peso_abaixo,
      correcao_sobrepeso: values.correcao_sobrepeso,
      altitude_padrao: values.altitude_padrao,
      padrao_variacao_altitude: values.padrao_variacao_altitude,
      correcao_altitude_acima: values.correcao_altitude_acima,
      correcao_altitude_abaixo: values.correcao_altitude_abaixo,
      temperatura_padrao: values.temperatura_padrao,
      padrao_variacao_temperatura: values.padrao_variacao_temperatura,
      correcao_temperatura_acima: values.correcao_temperatura_acima,
      correcao_temperatura_abaixo: values.correcao_temperatura_abaixo,
      padrao_vento: values.padrao_vento,
      padrao_variacao_vento: values.padrao_variacao_vento,
      correcao_vento_cauda: values.correcao_vento_cauda,
      correcao_vento_proa: values.correcao_vento_proa,
      slope_padrao: values.slope_padrao,
      padrao_variacao_inclinacao: values.padrao_variacao_inclinacao,
      correcao_aclive: values.correcao_aclive,
      correcao_declive: values.correcao_declive,
      vap_padrao: values.vap_padrao,
      padrao_variacao_velocidade: values.padrao_variacao_velocidade,
      correcao_velocidade_acima: values.correcao_velocidade_acima,
      correcao_velocidade_abaixo: values.correcao_velocidade_abaixo,
    });
    Swal.fire({
      text: "Flap registered successfully!",
    });
   };

function manipularEnvio(evento: any){
  evento.preventDefault()
  let reversorValido = validaReversor(),
    variacaoPesoValido = validaVariacaoPes(),
    pesoAbxValido = validaPesoAbx(),
    pesoAcmValido = validaPesoAcm(),
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
    variacaoVentoValido = validaVariacaoVento(),
    ventoAcmValido = validaVentoAcm(),
    ventoAbxValido = validaVentoAbx(),
    slopePdValido = validaSlopePd(),
    variacaoSlopeValido = validaVariacaoSlope(),
    slopeAcmValido = validaSlopeAcm(),
    slopeAbxValido = validaSlopeAbx(),
    vapPdValido = validaVapPd(),
    variacaoVapValido = validaVariacaoVap(),
    vapAcmValido = validaVapAcm(),
    vapAbxValido = validaVapAbx()

  let formularioValido = reversorValido &&
    variacaoPesoValido &&
    pesoAbxValido &&
    pesoAcmValido &&
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
    variacaoVentoValido &&
    ventoAcmValido &&
    ventoAbxValido &&
    slopePdValido &&
    variacaoSlopeValido &&
    slopeAcmValido &&
    slopeAbxValido &&
    vapPdValido &&
    variacaoVapValido &&
    vapAcmValido &&
    vapAbxValido

  if(formularioValido){
    console.log(`Flap: ${Flap} ${Break} ${Condicao}`);
  }
}

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

const ehNumero = (valor: any) => {
  const expressao = new RegExp("^[0-9]+$")
  return expressao.test(valor)
}

function validaReversor(){
  const id = document.getElementById("correcao_reversor_inoperante");
  let valido = false;

  if(!ehNumero(Reversor)){
    showError(id!, `Value must be a number`)
  } else {
    showSuccess(id!);
    valido = true;
  }
  return valido
}
function validaVariacaoPes(){
  const id = document.getElementById("padrao_variacao_peso");
  let valido = false;

  if(!ehNumero(PesoAcm)){
    showError(id!, `Value must be a number`)
  } else {
    showSuccess(id!);
    valido = true;
  }
  return valido
}
function validaPesoAcm(){
  const idPesoAcm = document.getElementById("correcao_peso_acima");
  let valido = false;

  if(!ehNumero(PesoAcm)){
    showError(idPesoAcm!, `Value must be a number`)
  } else {
    showSuccess(idPesoAcm!);
    valido = true;
  }
  return valido
}
function validaPesoAbx(){
  const idPesoAbx = document.getElementById("peso_abaixo");
  let valido = false;

  if(!ehNumero(PesoAbx)){
    showError(idPesoAbx!, `Value must be a number`)
  } else {
    showSuccess(idPesoAbx!);
    valido = true;
  }
  return valido
}
function validaSobrepeso(){
  const id = document.getElementById("sobrepeso");
  let valido = false;

  if(!ehNumero(Sobrepeso)){
    showError(id!, `Value must be a number`)
  } else {
    showSuccess(id!);
    valido = true;
  }
  return valido
}

function validaAltitudePd(){
  const idAltitudePd = document.getElementById("altitude_padrao");
  let valido = false;

  if(!ehNumero(AltitudePd)){
    showError(idAltitudePd!, `value must be a number`)
  } else {
    showSuccess(idAltitudePd!);
    valido = true;
  }
  return valido
}
function validaVariacaoAlt(){
  const id = document.getElementById("variacao_altitude");
  let valido = false;

  if(!ehNumero(VariacaoAlt)){
    showError(id!, `value must be a number`);
  } else {
    showSuccess(id!)
    valido = true;
  }
  return valido
}
function validaAltitudeAcm(){
  const idAltitudeAcm = document.getElementById("altitude_acima");
  let valido = false;

  if(!ehNumero(AltitudeAcm)){
    showError(idAltitudeAcm!, `value must be a number`);
  } else {
    showSuccess(idAltitudeAcm!)
    valido = true;
  }
  return valido
}
function validaAltitudeAbx(){
  const idAltitudeAbx = document.getElementById("altitude_abaixo");
  let valido = false;

  if(!ehNumero(AltitudeAbx)){
    showError(idAltitudeAbx!, `value must be a number`);
  } else {
    showSuccess(idAltitudeAbx!)
    valido = true;
  }
  return valido
}

function validaTemperaturaPd(){
  const id = document.getElementById("temperatura_padrao")
  let valido = false;

  if(!ehNumero(TemperaturaPd)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!);
    valido = true
  }
  return valido;
}
function validaVariacaoTmp(){
  const id = document.getElementById("variacao_temperatura")
  let valido = false;

  if(!ehNumero(VariacaoTmp)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!);
    valido = true
  }
  return valido;
}
function validaTemperaturaAcm(){
  const id = document.getElementById("temperatura_acima")
  let valido = false;

  if(!ehNumero(TemperaturaAcm)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!)
    valido = true;
  }
  return valido
}
function validaTemperaturaAbx(){
  const id = document.getElementById("temperatura_abaixo")
  let valido = false;

  if(!ehNumero(TemperaturaAbx)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!)
    valido = true;
  }
  return valido
}

function validaVentoPd(){
  const id = document.getElementById("vento_padrao")
  let valido = false;

  if(!ehNumero(VentoPd)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!)
    valido = true;
  }
  return valido
}
function validaVariacaoVento(){
  const id = document.getElementById("variacao_vento")
  let valido = false;

  if(!ehNumero(VariacaoVento)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!);
    valido = true
  }
  return valido;
}
function validaVentoAcm(){
  const id = document.getElementById("correcao_vento_cauda")
  let valido = false;

  if(!ehNumero(VentoAcm)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!)
    valido = true;
  }
  return valido
}
function validaVentoAbx(){
  const id = document.getElementById("correcao_vento_proa")
  let valido = false;

  if(!ehNumero(VentoAbx)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!)
    valido = true;
  }
  return valido
}

function validaSlopePd(){
  const id = document.getElementById("slope_padrao")
  let valido = false;

  if(!ehNumero(SlopePd)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!)
    valido = true;
  }
  return valido
}
function validaVariacaoSlope(){
  const id = document.getElementById("variacao_inclinacao")
  let valido = false;

  if(!ehNumero(VariacaoSlope)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!);
    valido = true
  }
  return valido;
}
function validaSlopeAcm(){
  const id = document.getElementById("slope_acima")
  let valido = false;

  if(!ehNumero(SlopeAcm)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!)
    valido = true;
  }
  return valido
}
function validaSlopeAbx(){
  const id = document.getElementById("correcao_declive")
  let valido = false;

  if(!ehNumero(SlopeAbx)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!)
    valido = true;
  }
  return valido
}

function validaVapPd(){
  const id = document.getElementById("vap_padrao")
  let valido = false;

  if(!ehNumero(VapPd)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!)
    valido = true;
  }
  return valido
}
function validaVariacaoVap(){
  const id = document.getElementById("padrao_variacao_velocidade")
  let valido = false;

  if(!ehNumero(VariacaoSlope)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!);
    valido = true
  }
  return valido;
}
function validaVapAcm(){
  const id = document.getElementById("vap_acima")
  let valido = false;

  if(!ehNumero(VapAcm)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!)
    valido = true;
  }
  return valido
}
function validaVapAbx(){
  const id = document.getElementById("vap_abaixo")
  let valido = false;

  if(!ehNumero(VapAbx)){
    showError(id!, `value must be a number`)
  } else {
    showSuccess(id!)
    valido = true;
  }
  return valido
}

function receberFlap(evento: any){
  let entrada = evento.target.value;
  setFlap(entrada)
}
function receberGelo(evento: any){
  let entrada = evento.target.value;
  setGelo(entrada)
  return "Gelo"
}
function receberBreak(evento: any){
  let entrada = evento.target.value;
  setBreak(entrada)
}
function receberCondicao(evento: any){
  let entrada = evento.target.value;
  setCondicao(entrada)
}
function receberDistancia(evento: any){
  let entrada = evento.target.value;
  setDistancia(entrada)
}
function receberReversor(evento: any){
  let entrada = evento.target.value;
  setReversor(entrada)
}
function receberVariacaoPes(evento: any){
  let entrada = evento.target.value;
  setVariacaoPes(entrada)
}
function receberPesoAbx(evento: any){
  let entrada = evento.target.value;
  setPesoAbx(entrada)
}
function receberPesoAcm(evento: any){
  let entrada = evento.target.value;
  setPesoAcm(entrada)
}
function receberSobrepeso(evento: any){
  let entrada = evento.target.value;
  setSobrepeso(entrada)
}
function receberVariacaoAlt(evento: any){
  let entrada = evento.target.value;
  setVariacaoAlt(entrada)
}
function receberAltitudePd(evento: any){
  let entrada = evento.target.value;
  setAltitudePd(entrada)
}
function receberAltitudeAbx(evento: any){
  let entrada = evento.target.value;
  setAltitudeAbx(entrada)
}
function receberAltitudeAcm(evento: any){
  let entrada = evento.target.value;
  setAltitudeAcm(entrada)
}
function receberTemperaturaPd(evento: any){
  let entrada = evento.target.value;
  setTemperaturaPd(entrada)
}
function receberVariacaoTmp(evento: any){
  let entrada = evento.target.value;
  setVariacaoTmp(entrada)
}
function receberTemperaturaAbx(evento: any){
  let entrada = evento.target.value;
  setTemperaturaAbx(entrada)
}
function receberTemperaturaAcm(evento: any){
  let entrada = evento.target.value;
  setTemperaturaAcm(entrada)
}
function receberVentoPd(evento: any){
  let entrada = evento.target.value;
  setVentoPd(entrada)
}
function receberVariacaoVento(evento: any){
  let entrada = evento.target.value;
  setVariacaoVento(entrada)
}
function receberVentoAbx(evento: any){
  let entrada = evento.target.value;
  setVentoAbx(entrada)
}
function receberVentoAcm(evento: any){
  let entrada = evento.target.value;
  setVentoAcm(entrada)
}
function receberSlopePd(evento: any){
  let entrada = evento.target.value;
  setSlopePd(entrada)
}
function receberVariacaoSlope(evento: any){
  let entrada = evento.target.value;
  setVariacaoSlope(entrada)
}
function receberSlopeAbx(evento: any){
  let entrada = evento.target.value;
  setSlopeAbx(entrada)
}
function receberSlopeAcm(evento: any){
  let entrada = evento.target.value;
  setSlopeAcm(entrada)
}
function receberVapPd(evento: any){
  let entrada = evento.target.value;
  setVapPd(entrada)
}
function receberVariacaoVAP(evento: any){
  let entrada = evento.target.value;
  setVariacaoVAP(entrada)
}
function receberVapAbx(evento: any){
  let entrada = evento.target.value;
  setVapAbx(entrada)
}
function receberVapAcm(evento: any){
  let entrada = evento.target.value;
  setVapAcm(entrada)
}


const [Flap, setFlap] = useState("");
const [Gelo, setGelo] = useState("")
const [Break, setBreak] = useState("");
const [Condicao, setCondicao] = useState("");
const [Distancia, setDistancia] = useState("");
const [Reversor, setReversor] = useState("");
const [VariacaoPes, setVariacaoPes] = useState("")
const [PesoAbx, setPesoAbx] = useState("");
const [PesoAcm, setPesoAcm] = useState("");
const [Sobrepeso, setSobrepeso] = useState("");
const [VariacaoAlt, setVariacaoAlt] = useState("")
const [AltitudePd, setAltitudePd] = useState("");
const [AltitudeAbx, setAltitudeAbx] = useState("");
const [AltitudeAcm, setAltitudeAcm] = useState("");
const [TemperaturaPd, setTemperaturaPd] = useState("");
const [VariacaoTmp, setVariacaoTmp] = useState("")
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
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Flap:</label>
                <input
                  id="tipo_flap"
                  className="form-control"
                  name="tipo_flap"
                  placeholder="Insert the aircraft flap:"
                  value={Flap}
                  onChange={receberFlap}
                  onInput={handleChangeValues}
                />
                <FormControlLabel control={<Switch onChange={receberGelo} />} label="Ice Accretion"/>
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Brake config:</label>
                <select
                  title="configuracao_freio"
                  id="configuracao_freio"
                  className="form-control"
                  name="configuracao_freio"
                  value={Break}
                  onChange={receberBreak}
                  onInput={handleChangeValues}
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
                <input
                  id="condicao_pista"
                  className="form-control"
                  name="condicao_pista"
                  placeholder="Runway Condition:"
                  value={Condicao}
                  onChange={receberCondicao}
                  onInput={handleChangeValues}
                  
                />
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Referencial distance:</label>
                <input
                  id="distancia_referencial"
                  className="form-control"
                  name="distancia_referencial"
                  placeholder="Referential distance (m)"
                  value={Distancia}
                  onChange={receberDistancia}
                  onInput={handleChangeValues}
                  
              />
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Reverser variation</label>
                <input
                  id="correcao_reversor_inoperante"
                  className="form-control"
                  name="correcao_reversor_inoperante"
                  placeholder="Per rev inop (m)"
                  value={Reversor}
                  onChange={receberReversor}
                  onInput={handleChangeValues}
                  
              />
              </div>
            </fieldset>
            <fieldset className="row col-lg-3 variavel">
              <legend>Weight variables</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>For each (Kg)</label>
                <input
                  id="padrao_variacao_peso"
                  className="form-control"
                  name="padrao_variacao_peso"
                  placeholder="For each"
                  value={VariacaoPes}
                  onChange={receberVariacaoPes}
                  onInput={handleChangeValues}
                />
                <small></small>
                <br></br>
                <label>Insert the Variation index (m):</label>
                <input
                  id="correcao_peso_acima"
                  className="form-control"
                  name="correcao_peso_acima"
                  placeholder="Above standard"
                  value={PesoAcm}
                  onChange={receberPesoAcm}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
                <br></br>
                <input
                  id="correcao_peso_abaixo"
                  className="form-control"
                  name="correcao_peso_abaixo"
                  placeholder="Below standard"
                  value={PesoAbx}
                  onChange={receberPesoAbx}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
                <br></br>
                <label>Overweight</label>
                <input
                  id="correcao_sobrepeso"
                  className="form-control"
                  name="correcao_sobrepeso"
                  placeholder="Overweight"
                  value={Sobrepeso}
                  onChange={receberSobrepeso}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-4 variavel">
              <legend>Altitude variables (Ft)</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>Default value for comparison:</label>
                <input
                  id="altitude_padrao"
                  className="form-control"
                  name="altitude_padrao"
                  placeholder="Default value"
                  value={AltitudePd}
                  onChange={receberAltitudePd}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
                <br></br>
                <label>For each (Ft)</label>
                <input
                  id="padrao_variacao_altitude"
                  className="form-control"
                  name="padrao_variacao_altitude"
                  placeholder="For each"
                  value={VariacaoAlt}
                  onChange={receberVariacaoAlt}
                  onInput={handleChangeValues}
                />
                <small></small>
                <br></br>
                <label>Variation index (m):</label>
                <input
                  id="correcao_altitude_acima"
                  className="form-control"
                  name="correcao_altitude_acima"
                  placeholder="Above standard"
                  value={AltitudeAcm}
                  onChange={receberAltitudeAcm}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
                <br></br>
                <input
                  id="correcao_altitude_abaixo"
                  className="form-control"
                  name="correcao_altitude_abaixo"
                  placeholder="Below standard"
                  value={AltitudeAbx}
                  onChange={receberAltitudeAbx}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-4 variavel">
              <legend>Temperature variables (ISA)</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>Default value for comparison:</label>
                <input
                  id="temperatura_padrao"
                  className="form-control"
                  name="temperatura_padrao"
                  placeholder="Default value in °C"
                  value={TemperaturaPd}
                  onChange={receberTemperaturaPd}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
                <br></br>
                <label>For each (°C)</label>
                <input
                  id="padrao_variacao_temperatura"
                  className="form-control"
                  name="padrao_variacao_temperatura"
                  placeholder="For each"
                  value={VariacaoTmp}
                  onChange={receberVariacaoTmp}
                  onInput={handleChangeValues}
                />
                <small></small>
                <br></br>
                <label>Variation index (m):</label>
                <input
                  id="correcao_temperatura_acima"
                  className="form-control"
                  name="correcao_temperatura_acima"
                  placeholder="Above standard"
                  value={TemperaturaAcm}
                  onChange={receberTemperaturaAcm}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
                <br></br>
                <input
                  id="correcao_temperatura_abaixo"
                  className="form-control"
                  name="correcao_temperatura_abaixo"
                  placeholder="Below standard"
                  value={TemperaturaAbx}
                  onChange={receberTemperaturaAbx}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-4 variavel">
              <legend>Wind variables (KTAS)</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>Default value for comparison:</label>
                <input
                  id="padrao_vento"
                  className="form-control"
                  name="padrao_vento"
                  placeholder="Default value"
                  value={VentoPd}
                  onChange={receberVentoPd}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
                <br></br>
                <label>For each (KTAS)</label>
                <input
                  id="padrao_variacao_vento"
                  className="form-control"
                  name="padrao_variacao_vento"
                  placeholder="For each"
                  value={VariacaoVento}
                  onChange={receberVariacaoVento}
                  onInput={handleChangeValues}
                />
                <small></small>
                <br></br>
                <label>Variation index (m):</label>
                <input
                  id="correcao_vento_cauda"
                  className="form-control"
                  name="correcao_vento_cauda"
                  placeholder="Above standard (Tail wind)"
                  value={VentoAcm}
                  onChange={receberVentoAcm}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
                <br></br>
                <input
                  id="correcao_vento_proa"
                  className="form-control"
                  name="correcao_vento_proa"
                  placeholder="Below standard (Head wind)"
                  value={VentoAbx}
                  onChange={receberVentoAbx}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-4 variavel">
              <legend>Slope variables (%)</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>Default value for comparison:</label>
                <input
                  id="slope_padrao"
                  className="form-control"
                  name="slope_padrao"
                  placeholder="Default value"
                  value={SlopePd}
                  onChange={receberSlopePd}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
                <br></br>
                <label>For each (%)</label>
                <input
                  id="padrao_variacao_inclinacao"
                  className="form-control"
                  name="padrao_variacao_inclinacao"
                  placeholder="For each"
                  value={VariacaoSlope}
                  onChange={receberVariacaoSlope}
                  onInput={handleChangeValues}
                />
                <small></small>
                <br></br>
                <label>Variation index (m):</label>
                <input
                  id="correcao_aclive"
                  className="form-control"
                  name="correcao_aclive"
                  placeholder="Above standard"
                  value={SlopeAcm}
                  onChange={receberSlopeAcm}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
                <br></br>
                <input
                  id="correcao_declive"
                  className="form-control"
                  name="correcao_declive"
                  placeholder="Below standard"
                  value={SlopeAbx}
                  onChange={receberSlopeAbx}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-3 variavel">
              <legend>VAP variables (speed)</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>Default value for comparison:</label>
                <input
                  id="vap_padrao"
                  className="form-control"
                  name="vap_padrao"
                  placeholder="Default value"
                  value={VapPd}
                  onChange={receberVapPd}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
                <br></br>
                <label>For each (?)</label>
                <input
                  id="padrao_variacao_velocidade"
                  className="form-control"
                  name="padrao_variacao_velocidade"
                  placeholder="For each"
                  value={VariacaoVAP}
                  onChange={receberVariacaoVAP}
                  onInput={handleChangeValues}
                />
                <small></small>
                <br></br>
                <label>Variation index (m):</label>
                <input
                  id="correcao_velocidade_acima"
                  className="form-control"
                  name="correcao_velocidade_acima"
                  placeholder="Above standard"
                  value={VapAcm}
                  onChange={receberVapAcm}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
                <br></br>
                <input
                  id="correcao_velocidade_abaixo"
                  className="form-control"
                  name="correcao_velocidade_abaixo"
                  placeholder="Below standard"
                  value={VapAbx}
                  onChange={receberVapAbx}
                  onInput={handleChangeValues}
                  
                ></input>
                <small></small>
              </div>
            </fieldset>

            <div className="clear"></div>
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
              onClick={() => handleClickButton(values)}
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
