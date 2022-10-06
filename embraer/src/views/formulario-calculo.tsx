import "../css/formulario-calculo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState} from "react"; 
import { SubmitHandler, useForm } from "react-hook-form"
import Calcular from "../controller/calculo";

interface IFormInput {
  peso: number;
  altitude: number;
  temperatura: number;
  valorVento: number;
  vref: number;
  velocidadeAeronave: number;
  slope: number;
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
  const onSubmit: SubmitHandler<IFormInput> = () => calcular.calcularPouso(
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
            Calcular:
          </i>
        </h2>
      </div>
      <form id="form_criar" onSubmit = { handleSubmit(onSubmit) }>
        <div className="container-fluid">
          <div className="row">
            <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
              <label>Peso da aeronave em Kg:</label>
              <input
                id="peso-aeronave"
                className="form-control"
                {...register("peso", {min: 40000, max: 80000})}
                type="teld"
                placeholder="Insira o peso da aeronave:"
                //value={Peso}
                onChange={(e) => setPeso(e.target.value)}
              />
              {errors.peso && <small id="erro">Peso só pode ser entre 40000 e 80000</small>}
            </div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Altitude da aeronave em M:</label>
              <input
                id="altitude-aeronave"
                className="form-control"
                type="tel"
                {...register("altitude", {min: 0, max: 13000})}
                placeholder="Insira a altitude:"
                //value={Altitude}
                onChange={(e) => setAltitude(e.target.value)}
              />
              {errors.altitude && <small id="erro">Valor de altura inválida</small>}
            </div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Temperatura em °C:</label>
              <input
                id="temperatura"
                className="form-control"
                {...register("temperatura", {min: -2, max: 2})}
                type="tel"
                placeholder="Insira a temperatura:"
                //value={Temperatura}
                onChange={(e) => setTemperatura(e.target.value)}
              />
              {errors.temperatura && <small id="erro">Valor inválido para a temperatura</small>}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Vento em Kt:</label>
              <input
                id="valorVento"
                className="form-control"
                type="tel"
                {...register("valorVento", {min: -100, max: 100})}
                placeholder="Insira o vento de Cauda/Proa:"
                //value={Vento}
                //onChange={(e) => setVento(e.target.value)}
              />
              {errors.valorVento && <small id="erro">Valor inválido para o vento</small>}
            </div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Velocidade de Referência em Km/h:</label>
              <input
                id="vref"
                className="form-control"
                type="tel"
                {...register("vref", {min:700, max: 1000 })}
                placeholder="Insira a velocidade de referência:"
                //value={VRef}
                //onChange={(e) => setVRef(e.target.value)}
              />
              {errors.vref && <small id="erro">Valor inválido para a velocidade de referência</small>}
            </div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Velocidade da aeronave em Km/h:</label>
              <input
                id="velocidade-aeronave"
                className="form-control"
                type="tel"
                {...register("velocidadeAeronave", {min: 700, max: 1000})}
                placeholder="Insira a velocidade:"
                //value={VelocidadeAeronave}
                //onChange={(e) => setVelocidadeAeronave(e.target.value)}
              />
              {errors.velocidadeAeronave && <small id="erro">valor inválido para a velocidade da aeronave</small>}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Slope:</label>
              <input
                id="slope"
                className="form-control"
                {...register("slope", {min: -2, max: 2})}
                type="tel"
                placeholder="Insira o slope:"
                //value={Slope}
                //onChange={(e) => setSlope(e.target.value)}
              />
              {errors.slope && <small id="erro">Valor inválido para o slope</small>}
            </div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Flap:</label>
              <input
                id="flap"
                className="form-control"
                type="tel"
                name="flap"
                placeholder="Valor para o flap:"
                //value={Flap}
                //onChange={(e) => setFlap(e.target.value)}
              />
              <small></small>
            </div>

            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Frenagem utilizada:</label>
              <select
                title="frenagem"
                className="form-control"
                name="frenagem"
                id="frenagem"
              >
                <option value="placeholder" disabled selected>
                  Selecione o modo de frenagem:
                </option>
                <option value="3">LOW</option>
                <option value="2">MEDIUM</option>
                <option value="1">HIGH</option>
                <option value="0">MAX MAN</option>
              </select>
              <small></small>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Quantidade de Reversores inoperantes:</label>
              <input
                id="rev-inoperantes"
                className="form-control"
                type="tel"
                {...register("revInoperantes", {min: 0, max: 5})}
                placeholder="Insira a quantidade de reversores inoperantes:"
                //value={Rev}
                //onChange={(e) => setRev(e.target.value)}
              />
              {errors.revInoperantes && <small id="erro">Valor inválido para os reversores</small>}
            </div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12"></div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Unidade de medida:</label>
              <select title="unidade" className="form-control" name="unidade" onChange={(e) => setUnidade(e.target.value)} id="unidade">
                <option value="placeholder" disabled selected>Selecione a unidade de medida:</option>
                <option value="0">Internacional</option>
                <option value="1">Imperial</option>   
              </select>
              <small></small>
            </div>
          </div>
        </div>
        <input
          className="rounded"
          type="submit"
          id="btn_calcular"
          name="submitButton"
          value="calcular"
        >
        </input> 
      </form>
      <div>
        <input hidden placeholder="result" type="text" id="resultadoConta" />
      </div>
    </div>
  );
}

export default Calculo;
