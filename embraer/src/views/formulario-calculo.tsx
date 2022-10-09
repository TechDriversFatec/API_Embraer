import "../css/formulario-calculo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Calcular from "../controller/calculo";
import Swal from "sweetalert2";

interface IFormInput {
  peso: String;
  altitude: String;
  temperatura: String;
  valorVento: String;
  vref: String;
  velocidadeAeronave: String;
  slope: String;
  revInoperantes: String;
  unidade: String;
}


function Calculo() {

  const calcular = new Calcular()

  const showError = (input: HTMLElement, message: string) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField!.classList.remove('success');
    formField!.classList.add('error');

    // show the error message
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
  
  function manipularEnvio(evento: any){
    evento.preventDefault()

    if(parseInt(Peso) <= 40000 || parseInt(Peso) >= 80000){
      const idPeso = document.getElementById("peso-aeronave")
      showError(idPeso!, "Peso inválido")
      return Swal.fire({
        icon: "error",
        title: "Valor inválido para o peso"
      })
    } else if(parseInt(Altitude) <= 0 || parseInt(Altitude) >= 10000){
      return Swal.fire({
        icon: "error",
        title: "Valor inválido para altitude"
      })
    } else if(parseInt(Temperatura) <= -4 || parseInt(Temperatura) >= 4){
      return Swal.fire({
        icon: "error",
        title: "Valor inválido para temparatura"
      })
    } else if(parseInt(Vento) <= -10 || parseInt(Vento) >=10){
      return Swal.fire({
        icon: "error",
        title: "Valor inválido para vento"
      })
    } else if(parseInt(VRef) <= 0 || parseInt(VRef) >= 1000){
      return Swal.fire({
        icon: "error",
        title: "Valor inválido para a velocidade de referência"
      })
    } else if(parseInt(VelocidadeAeronave) <= 0 || parseInt(VelocidadeAeronave) >= 1000){
      return Swal.fire({
        icon: "error",
        title: "Valor inválido para a velocidade"
      })
    } else if(parseInt(Slope) <= -5 || parseInt(Slope) >= 5){
      return Swal.fire({
        icon: "error",
        title: "Valor inválido para slope"
      })
    } else if(parseInt(Rev) < 0 || parseInt(Rev) > 2){
      return Swal.fire({
        icon: "error",
        title: "Valor inválido para reversores"
      })
    } else {
      
      calcular.calcularPouso(
        parseInt(Peso),
        parseInt(Altitude),
        parseInt(Temperatura),
        parseInt(Vento),
        parseInt(VRef),
        parseInt(VelocidadeAeronave),
        parseInt(Slope),
        parseInt(Flap),
        parseInt(Rev),
        parseInt(unidade))
    }
  }

  function receberValorPeso(evento: any){
    let entrada = evento.target.value;
    setPeso(entrada);
  }

  function receberValorAltitude(evento: any){
    let entrada = evento.target.value;
    setAltitude(entrada)
  }

  function receberValorTemperatura(evento: any){
    let entrada = evento.target.value;
    setTemperatura(entrada)
  }

  function receberValorVento(evento: any){
    let entrada = evento.target.value;
    setVento(entrada)
  }

  function receberVref(evento: any){
    let entrada = evento.target.value;
    setVRef(entrada)
  }

  function receberVelocidadeAeronave(evento: any){
    let entrada = evento.target.value;
    setVelocidadeAeronave(entrada)
  }

  function receberSlope(evento: any){
    let entrada = evento.target.value;
    setSlope(entrada)
  }

  function receberRev(evento: any){
    let entrada = evento.target.value;
    setRev(entrada)
  }

  function receberUnidade(evento: any){
    let entrada = evento.target.value;
    setUnidade(entrada)
  }

  const [Peso, setPeso] = useState(String);
  const [Altitude, setAltitude] = useState(String);
  const [Temperatura, setTemperatura] = useState(String);
  const [Vento, setVento] = useState(String);
  const [VRef, setVRef] = useState(String);
  const [VelocidadeAeronave, setVelocidadeAeronave] = useState(String)
  const [Slope, setSlope] = useState(String)
  const [Flap, setFlap] = useState(String)
  const [Rev, setRev] = useState(String)
  const [unidade, setUnidade] = useState(String)

  

  return (
    <div className="App">
      <div>
        <h2>
          <i>
            <img src="loguinho.png" id="logoAviaozinho" alt="some text" />
          </i>
        </h2>
      </div>
      <form id="form_criar" onSubmit={manipularEnvio}>
        <div className="card card-custom gutter-b">
          <div className="card-header">
            <h3 id="h3Calcular" className="card-title">Calcular:</h3>
            <div className="card-toolbar">
            </div>
          </div>
          <div className="card-body col-md-12">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row">
                  <h4 id="h3AirplaneConfig">Airplane Configurations</h4>
                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Airplane:</label>
                    <select className="form-control select" id="aeronave" title="aeronave">
                      <option value="" disabled selected>Select an Airplane</option>
                      <option value="E-190">E-190</option>
                      <option value="Legacy C780">Legacy C780</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Motor:</label>
                    <select className="form-control select" id="motor" title="motor">
                      <option value="" disabled selected>Select a motor</option>
                      <option>E-190 Motor</option>
                      <option>Legacy C780 Motor</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Certification:</label>
                    <select className="form-control select" id="certificacao" title="certificacao">
                      <option value="" disabled selected>Select a Certification</option>
                      <option>ANAC</option>
                      <option>FAA</option>
                      <option>EASA</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <label>Flap:</label>
                    <select className="form-control select" id="flap" title="flap">
                      <option value="" disabled selected>Select a Flap</option>
                      <option>Flap X Without Ice Accretion</option>
                      <option>Flap X With Ice Accretion</option>
                      <option>Flap Y Without Ice Accretion </option>
                      <option>Flap Y With Ice Accretion </option>
                    </select>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <label>Runway Condition:</label>
                    <select className="form-control select" id="condicaoPista" title="condicaoPista">
                      <option value="" disabled selected>Select a Runway Condition</option>
                      <option>1 - Ice</option>
                      <option>2 - Standind Water, Slush</option>
                      <option>3 - Loose Snow</option>
                      <option>4 - Compact Snow</option>
                      <option>5 - Wet</option>
                      <option>6 - Dry</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <label>Break Configuration:</label>
                    <select
                      title="frenagem"
                      className="form-control select"
                      name="frenagem"
                      id="frenagem"
                    >
                      <option value="" disabled selected>
                        Select a Break Configuration:
                      </option>
                      <option value="0">LOW</option>
                      <option value="1">MEDIUM</option>
                      <option value="2">HIGH</option>
                      <option value="3">MAX MAN</option>
                    </select>
                    <small></small>
                  </div>
                </div>
              </li>




              <li className="list-group-item">
                <div className="row">
                <h4 id="h3AirplaneConfig">Landing Configurations</h4>
                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Peso da aeronave em Kg:</label>
                    <input
                      id="peso-aeronave"
                      className="form-control"
                      name="peso"
                      type="tel"
                      placeholder="Insira o peso da aeronave:"
                      value={Peso}
                      onChange={receberValorPeso}
                    />
                    <small></small>
                  </div>
                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <label>Altitude da aeronave em M:</label>
                    <input
                      id="altitude-aeronave"
                      className="form-control"
                      type="tel"
                      name="altitude"
                      placeholder="Insira a altitude:"
                      value={Altitude}
                      onChange={receberValorAltitude}
                    />
                  </div>
                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <label>Temperatura em °C:</label>
                    <input
                      id="temperatura"
                      className="form-control"
                      name="temperatura"
                      type="tel"
                      placeholder="Insira a temperatura:"
                      value={Temperatura}
                      onChange={receberValorTemperatura}
                    />
                  </div>

                  <div className="row">
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                      <label>Vento em Kt:</label>
                      <input
                        id="valorVento"
                        className="form-control"
                        type="tel"
                        name="valorVento"
                        placeholder="Insira o vento de Cauda/Proa:"
                      value={Vento}
                      onChange={receberValorVento}
                      />
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                      <label>Velocidade de Referência em Km/h:</label>
                      <input
                        id="vref"
                        className="form-control"
                        type="tel"
                        name="vref"
                        placeholder="Insira a velocidade de referência:"
                      value={VRef}
                      onChange={receberVref}
                      />
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                      <label>Velocidade da aeronave em Km/h:</label>
                      <input
                        id="velocidade-aeronave"
                        className="form-control"
                        type="tel"
                        name="velocidadeAeronave"
                        placeholder="Insira a velocidade:"
                      value={VelocidadeAeronave}
                      onChange={receberVelocidadeAeronave}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                      <label>Slope:</label>
                      <input
                        id="slope"
                        className="form-control"
                        name="slope"
                        type="tel"
                        placeholder="Insira o slope:"
                      value={Slope}
                      onChange={receberSlope}
                      />
                    </div>



                  </div>
                  <div className="row">
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                      <label>Quantidade de Reversores inoperantes:</label>
                      <input
                        id="rev-inoperantes"
                        className="form-control"
                        type="tel"
                        name="revInoperantes"
                        placeholder="Insira a quantidade de reversores inoperantes:"
                      value={Rev}
                      onChange={receberRev}
                      />
                    </div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12"></div>
                    <div className="form-group col-lg-4 col-md-6 col-sm-12">
                      <label>Unidade de medida:</label>
                      <select title="unidade" className="form-control select" name="unidade" onChange={receberUnidade} id="unidade">
                        <option value="placeholder" disabled selected>Selecione a unidade de medida:</option>
                        <option value="0">Internacional</option>
                        <option value="1">Imperial</option>
                      </select>
                      <small></small>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="card-footer w-100 float-right">

            <input
              className="rounded btn btn-primary ml-2 float-right"
              type="submit"
              id="btn_calcular"
              name="submitButton"
              value="calcular"
            >
            </input>
          </div>
        </div>

      </form>
      <div>
        <input hidden placeholder="result" type="text" id="resultadoConta" />
      </div>
    </div>
  );
}

export default Calculo;
