import "../css/criar-aeronaves.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function VariaveisAeronaves() {

function manipularEnvio(evento: any){
  evento.preventDefault()
  let variacaoPesoValido = validaVariacaoPes(),
    pesoAbxValido = validaPesoAbx(),
    pesoAcmValido = validaPesoAcm(),
    altitudePdValida = validaAltitudePd(),
    altitudeAcmValida = validaAltitudeAcm(),
    altitudeAbxValida = validaAltitudeAbx(),
    temperaturaPdValida = validaTemperaturaPd(),
    temperaturaAcmValida = validaTemperaturaAcm(),
    temperaturaAbxValida = validaTemperaturaAbx(),
    ventoPdValido = validaVentoPd(),
    ventoAcmValido = validaVentoAcm(),
    ventoAbxValido = validaVentoAbx(),
    slopePdValido = validaSlopePd(),
    slopeAcmValido = validaSlopeAcm(),
    slopeAbxValido = validaSlopeAbx(),
    vapPdValido = validaVapPd(),
    vapAcmValido = validaVapAcm(),
    vapAbxValido = validaVapAbx()

  let formularioValido = pesoAbxValido &&
    pesoAcmValido &&
    altitudePdValida &&
    altitudeAcmValida &&
    altitudeAbxValida &&
    temperaturaPdValida &&
    temperaturaAcmValida &&
    temperaturaAbxValida &&
    ventoPdValido &&
    ventoAcmValido &&
    ventoAbxValido &&
    slopePdValido &&
    slopeAcmValido &&
    slopeAbxValido &&
    vapPdValido &&
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

function validaVariacaoPes(){
  const id = document.getElementById("variacao_peso");
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
  const idPesoAcm = document.getElementById("peso_acima");
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
function validaVentoAcm(){
  const id = document.getElementById("vento_acima")
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
  const id = document.getElementById("vento_abaixo")
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
  const id = document.getElementById("slope_abaixo")
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
function receberVapAbx(evento: any){
  let entrada = evento.target.value;
  setVapAbx(entrada)
}
function receberVapAcm(evento: any){
  let entrada = evento.target.value;
  setVapAcm(entrada)
}


const [Flap, setFlap] = useState("");
const [Break, setBreak] = useState("");
const [Condicao, setCondicao] = useState("");
const [Distancia, setDistancia] = useState("");
const [VariacaoPes, setVariacaoPes] = useState("")
const [PesoAbx, setPesoAbx] = useState("");
const [PesoAcm, setPesoAcm] = useState("");
const [AltitudePd, setAltitudePd] = useState("");
const [AltitudeAbx, setAltitudeAbx] = useState("");
const [AltitudeAcm, setAltitudeAcm] = useState("");
const [TemperaturaPd, setTemperaturaPd] = useState("");
const [TemperaturaAbx, setTemperaturaAbx] = useState("");
const [TemperaturaAcm, setTemperaturaAcm] = useState("");
const [VentoPd, setVentoPd] = useState("");
const [VentoAbx, setVentoAbx] = useState("");
const [VentoAcm, setVentoAcm] = useState("");
const [SlopePd, setSlopePd] = useState("");
const [SlopeAbx, setSlopeAbx] = useState("");
const [SlopeAcm, setSlopeAcm] = useState("");
const [VapPd, setVapPd] = useState("");
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
              <div className="form-group col-lg-4-md col-md-3 col-sm-12">
                <label>Flap:</label>
                <input
                  id="tipo_flap"
                  className="form-control"
                  name="tipo_flap"
                  placeholder="Insert the aircraft flap:"
                  value={Flap}
                  onChange={receberFlap}
                  
                />
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label">Ice Accretion</label>
              </div>
              <div className="form-group col-lg-4-md col-md-3 col-sm-12">
                <label>Brake config:</label>
                <select
                  title="configuracao_freio"
                  id="configuracao_freio"
                  className="form-control"
                  name="configuracao_freio"
                  value={Break}
                  onChange={receberBreak}
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
              <div className="form-group col-lg-4-md col-md-3 col-sm-12">
                <label>Runway Condition:</label>
                <input
                  id="correcao_reversor_inoperante"
                  className="form-control"
                  name="correcao_reversor_inoperante"
                  placeholder="Runway Condition:"
                  value={Condicao}
                  onChange={receberCondicao}
                  
                />
              </div>
              <div className="form-group col-lg-4-md col-md-3 col-sm-12">
                <label>Referencial distance:</label>
                <input
                  id="distancia_referencia"
                  className="form-control"
                  name="distancia_referencia"
                  placeholder="Insert the referential distance (m)"
                  value={Distancia}
                  onChange={receberDistancia}
                  
              />
              </div>
            </fieldset>
            <fieldset className="row col-lg-3 variavel">
              <legend>Wheight variables</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>For each (Kg)</label>
                <input
                  id="variacao_peso"
                  className="form-control"
                  name="variacao_peso"
                  placeholder="for each"
                  value={VariacaoPes}
                  onChange={receberVariacaoPes}
                />
                <small></small>
                <br></br>
                <label>Insert the variation index (m):</label>
                <input
                  id="peso_acima"
                  className="form-control"
                  name="peso_acima"
                  placeholder="Above standard"
                  value={PesoAcm}
                  onChange={receberPesoAcm}
                  
                ></input>
                <small></small>
                <br></br>
                <input
                  id="peso_abaixo"
                  className="form-control"
                  name="peso_abaixo"
                  placeholder="Below standard"
                  value={PesoAbx}
                  onChange={receberPesoAbx}
                  
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-4 variavel">
              <legend>Altitude variables (Ft)</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>default value for comparison:</label>
                <input
                  id="altitude_padrao"
                  className="form-control"
                  name="altitude_padrao"
                  placeholder="default value"
                  value={AltitudePd}
                  onChange={receberAltitudePd}
                  
                ></input>
                <small></small>
                <br></br>
                <label>For each (Kg)</label>
                <input
                  id="variacao_peso"
                  className="form-control"
                  name="variacao_peso"
                  placeholder="for each"
                  value={VariacaoPes}
                  onChange={receberVariacaoPes}
                />
                <small></small>
                <br></br>
                <label>variation index (m):</label>
                <input
                  id="altitude_acima"
                  className="form-control"
                  name="altitude_acima"
                  placeholder="Above standard"
                  value={AltitudeAcm}
                  onChange={receberAltitudeAcm}
                  
                ></input>
                <small></small>
                <br></br>
                <input
                  id="altitude_abaixo"
                  className="form-control"
                  name="altitude_abaixo"
                  placeholder="Below standard"
                  value={AltitudeAbx}
                  onChange={receberAltitudeAbx}
                  
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-4 variavel">
              <legend>Temperature variables (ISA)</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>default value for comparison:</label>
                <input
                  id="temperatura_padrao"
                  className="form-control"
                  name="temperatura_padrao"
                  placeholder="default value in °C"
                  value={TemperaturaPd}
                  onChange={receberTemperaturaPd}
                  
                ></input>
                <small></small>
                <br></br>
                <label>variation index (m):</label>
                <input
                  id="temperatura_acima"
                  className="form-control"
                  name="temperatura_acima"
                  placeholder="Above standard"
                  value={TemperaturaAcm}
                  onChange={receberTemperaturaAcm}
                  
                ></input>
                <small></small>
                <br></br>
                <input
                  id="temperatura_abaixo"
                  className="form-control"
                  name="temperatura_abaixo"
                  placeholder="Below standard"
                  value={TemperaturaAbx}
                  onChange={receberTemperaturaAbx}
                  
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-4 variavel">
              <legend>Wind variables (KTAS)</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>default value for comparison:</label>
                <input
                  id="vento_padrao"
                  className="form-control"
                  name="vento_padrao"
                  placeholder="default value"
                  value={VentoPd}
                  onChange={receberVentoPd}
                  
                ></input>
                <small></small>
                <br></br>
                <label>variation index (m):</label>
                <input
                  id="vento_acima"
                  className="form-control"
                  name="vento_acima"
                  placeholder="Above standard (Tail wind)"
                  value={VentoAcm}
                  onChange={receberVentoAcm}
                  
                ></input>
                <small></small>
                <br></br>
                <input
                  id="vento_abaixo"
                  className="form-control"
                  name="vento_abaixo"
                  placeholder="Below standard (Head wind)"
                  value={VentoAbx}
                  onChange={receberVentoAbx}
                  
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-4 variavel">
              <legend>Slope variables (%)</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>default value for comparison:</label>
                <input
                  id="slope_padrao"
                  className="form-control"
                  name="slope_padrao"
                  placeholder="default value"
                  value={SlopePd}
                  onChange={receberSlopePd}
                  
                ></input>
                <small></small>
                <br></br>
                <label>variation index (m):</label>
                <input
                  id="slope_acima"
                  className="form-control"
                  name="slope_acima"
                  placeholder="Above standard"
                  value={SlopeAcm}
                  onChange={receberSlopeAcm}
                  
                ></input>
                <small></small>
                <br></br>
                <input
                  id="slope_abaixo"
                  className="form-control"
                  name="slope_abaixo"
                  placeholder="Below standard"
                  value={SlopeAbx}
                  onChange={receberSlopeAbx}
                  
                ></input>
                <small></small>
              </div>
            </fieldset>
            <fieldset className="row col-lg-3 variavel">
              <legend>VAP variables (speed)</legend>
              <div className="form-group col-lg-4-md col-md-12 col-sm-12">
                <label>default value for comparison:</label>
                <input
                  id="vap_padrao"
                  className="form-control"
                  name="vap_padrao"
                  placeholder="default value"
                  value={VapPd}
                  onChange={receberVapPd}
                  
                ></input>
                <small></small>
                <br></br>
                <label>variation index (m):</label>
                <input
                  id="vap_acima"
                  className="form-control"
                  name="vap_acima"
                  placeholder="Above standard"
                  value={VapAcm}
                  onChange={receberVapAcm}
                  
                ></input>
                <small></small>
                <br></br>
                <input
                  id="vap_abaixo"
                  className="form-control"
                  name="vap_abaixo"
                  placeholder="Below standard"
                  value={VapAbx}
                  onChange={receberVapAbx}
                  
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
