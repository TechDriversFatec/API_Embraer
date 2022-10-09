import "../css/formulario-calculo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Calcular from "../controller/calculo";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

interface IFormInput {
  peso: number;
  altitude: number;
  temperatura: number;
  valorVento: number;
  slope: number;
  vap: number;
  revInoperantes: number;
  unidade: number;
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

  const [Peso, setPeso] = useState("");
  const [Altitude, setAltitude] = useState("");
  const [Temperatura, setTemperatura] = useState("");
  const [Vento, setVento] = useState("");
  const [Slope, setSlope] = useState("")
  const [vap, setVap] = useState("")
  const [Rev, setRev] = useState("")
  const [unidade, setUnidade] = useState("")

  const history = useNavigate();

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
            <h3 id="h3Calcular" className="card-title">Landing Calculation:</h3>
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

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Flap:</label>
                    <select className="form-control select" id="flap" title="flap">
                      <option value="" disabled selected>Select a Flap</option>
                      <option>Flap X Without Ice Accretion</option>
                      <option>Flap X With Ice Accretion</option>
                      <option>Flap Y Without Ice Accretion </option>
                      <option>Flap Y With Ice Accretion </option>
                    </select>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
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

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
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
                    <label>Landing Weight (Kg):</label>
                    <input
                      id="peso-aeronave"
                      className="form-control"
                      name="peso"
                      type="tel"
                      placeholder="Enter Landing Weight:"
                      value={Peso}
                      onChange={receberValorPeso}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Aircraft Altitude (Ft):</label>
                    <input
                      id="altitude-aeronave"
                      className="form-control"
                      type="tel"
                      name="altitude"
                      placeholder="Enter Aircraft Altitude:"
                      value={Altitude}
                      onChange={receberValorAltitude}
                    />
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Temperature ISA (°C):</label>
                    <input
                      id="temperatura"
                      className="form-control"
                      name="temperatura"
                      type="tel"
                      placeholder="Enter Temperature below or above ISA:"
                      value={Temperatura}
                      onChange={receberValorTemperatura}
                    />
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Wind (Kt):</label>
                    <input
                      id="valorVento"
                      className="form-control"
                      type="tel"
                      {...register("valorVento", { min: -100, max: 100 })}
                      placeholder="Enter Tailwind or Headwind"
                    //value={Vento}
                    onChange={(e) => setVento(e.target.value)}
                    />
                    {errors.valorVento && <small id="erro">Valor inválido para o vento</small>}
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Slope:</label>
                    <input
                      id="slope"
                      className="form-control"
                      {...register("slope", { min: -2, max: 2 })}
                      type="tel"
                      placeholder="Enter Uphill or Downhill Slope:"
                    //value={Slope}
                    onChange={(e) => setSlope(e.target.value)}
                    />
                    {errors.slope && <small id="erro">Valor inválido para o slope</small>}
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Vap Overspeed (Ft):</label>
                    <input
                      id="vap-aeronave"
                      className="form-control"
                      type="tel"
                      placeholder="Enter Overspeed:"
                    //value={Peso}
                    onChange={(e) => setVap(e.target.value)}
                    />
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Thrust Reverser:</label>
                    <select className="form-control select" id="rev-inoperantes" title="rev-inoperantes" onChange={(e) => setRev(e.target.value)}>
                      <option value="" disabled selected>Select a Reverser Option</option>
                      <option value="1">One Inoperative</option>
                      <option value="2">All Inoperative</option>
                      <option value="0">All Operative</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Unit Measurement:</label>
                    <select title="unidade" className="form-control select" name="unidade" onChange={(e) => setUnidade(e.target.value)} id="unidade">
                      <option value="placeholder" disabled selected>Select an Unite Measurement</option>
                      <option value="0">International</option>
                      <option value="1">Imperial</option>
                    </select>
                    <small></small>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="card-footer w-100 float-right">

            <button title="btnVoltar" id="btnVoltar" className="btn btn-primary float-start" onClick={() => {
              history('/')
            }}>Back</button>

            <input
              className="rounded btn btn-primary ml-2 float-end"
              type="submit"
              id="btn_calcular"
              name="submitButton"
              value="Calculate"
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
