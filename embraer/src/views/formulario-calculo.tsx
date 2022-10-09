import "../css/formulario-calculo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import Calcular from "../controller/calculo";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

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

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    //reValidateMode: 'onChange',
    //defaultValues: {peso: 0, altitude: 0, temperatura: 0, valorVento: 0, vref: 0, velocidadeAeronave: 0, slope: 0, revInoperantes: 0},
    shouldFocusError: true,
    shouldUseNativeValidation: true
  });
  const calcular = new Calcular()
  const onSubmit: SubmitHandler<IFormInput> = () => {
    calcular.calcularPouso(
      parseInt(Peso),
      parseInt(Altitude),
      parseInt(Temperatura),
      parseInt(Vento),
      parseInt(Slope),
      parseInt(vap),
      parseInt(Rev),
      parseInt(unidade))

    Axios.post("http://localhost:3002/calculo", {
      aeronave: 'E190',
      motor: 'EBR1300',
      certificacao: 'ANAC',
      flap: 'Flap x with ice accretion',
      condicaoPista: 'dry',
      tipoFrenagem: 'MAX MAN',
      pesoPouso: Peso,
      altitude: Altitude,
      temperatura: Temperatura,
      vento: Vento,
      inclinacao: Slope,
      overspeed: vap,
      reversoresInoperantes: Rev,
      dataCalculo: Date.now.toString(),
      resultado_calculo: resultadoCalculo
    });
  }

  const [Peso, setPeso] = useState("");
  const [Altitude, setAltitude] = useState("");
  const [Temperatura, setTemperatura] = useState("");
  const [Vento, setVento] = useState("");
  const [Slope, setSlope] = useState("")
  const [vap, setVap] = useState("")
  const [Rev, setRev] = useState("")
  const [unidade, setUnidade] = useState("")
  const [resultadoCalculo, setResultadoCalculo] = useState("")

  const history = useNavigate();

  Axios.post("http://localhost:3002/calculo", {
    aeronave: 'E190',
    motor: 'EBR1300',
    certificacao: 'ANAC',
    flap: 'Flap x with ice accretion',
    condicaoPista: 'dry',
    tipoFrenagem: 'MAX MAN',
    pesoPouso: Peso,
    altitude: Altitude,
    temperatura: Temperatura,
    vento: Vento,
    inclinacao: Slope,
    overspeed: vap,
    reversoresInoperantes: Rev,
    dataCalculo: Date.now.toString(),
    resultado_calculo: resultadoCalculo
  });

  return (
    <div className="App">
      <div>
        <i>
          <img className="logoAviaoCalculo" src="loguinho.png" id="logoAviaozinho" alt="some text" />
        </i>
      </div>

      <form id="form_criar" onSubmit={handleSubmit(onSubmit)}>
        <div className="card card-custom gutter-b">
          <div className="card-header">
            <h3 id="h3Calcular" className="card-title">Landing Calculation</h3>
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
                    <label>Brake Configuration:</label>
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
                      {...register("peso", { min: 40000, max: 80000 })}
                      type="tel"
                      placeholder="Enter Landing Weight:"
                      //value={Peso}
                      onChange={(e) => setPeso(e.target.value)}
                    />
                    {errors.peso && <small id="erro">Peso só pode ser entre 40000 e 80000</small>}
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Aircraft Altitude (Ft):</label>
                    <input
                      id="altitude-aeronave"
                      className="form-control"
                      type="tel"
                      {...register("altitude", { min: 0, max: 13000 })}
                      placeholder="Enter Aircraft Altitude:"
                      //value={Altitude}
                      onChange={(e) => setAltitude(e.target.value)}
                    />
                    {errors.altitude && <small id="erro">Valor de altura inválida</small>}
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Temperature ISA (°C):</label>
                    <input
                      id="temperatura"
                      className="form-control"
                      {...register("temperatura", { min: -2, max: 2 })}
                      type="tel"
                      placeholder="Enter Temperature below or above ISA:"
                      //value={Temperatura}
                      onChange={(e) => setTemperatura(e.target.value)}
                    />
                    {errors.temperatura && <small id="erro">Valor inválido para a temperatura</small>}
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

            <a className="rounded btn btn-primary ml-2 float-start" href="http://localhost:3000">
              <b>Return</b>
            </a>

            <button
            title="btn_calcular"
              className="rounded btn btn-primary ml-2 float-end"
              type="submit"
              id="btn_calcular"
              name="submitButton"
            ><b>Calculate</b>
            </button>
          </div>
        </div>
      </form>
      <div>
        <input hidden placeholder="result" type="text" id="resultadoConta" onChange={(e) => setResultadoCalculo(e.target.value)} />
      </div>
    </div>
  );
}

export default Calculo;
