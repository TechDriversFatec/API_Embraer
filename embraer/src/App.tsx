import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Exemple from "./views/modal-resultado";

function App() {
  return (
    <>
      <div>
        <h2>
          <i>
            Para o cálculo de distância de pouso, favor inserir os dados
            solicitados abaixo:
          </i>
        </h2>
      </div>
      <form id="form_criar">
        <div className="container-fluid">
          <div className="row">
            <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
              <label>Peso da aeronave:</label>
              <input
                id="peso-aeronave"
                className="form-control"
                type="tel"
                name="peso-aeronave"
                placeholder="Insira o peso da aeronave:"
              />
              <small></small>
            </div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Altitude da aeronave:</label>
              <input
                id="altitude-aeronave"
                className="form-control"
                type="tel"
                name="altitude-aeronave"
                placeholder="Insira a altitude:"
              />
              <small></small>
            </div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Temperatura:</label>
              <input
                id="temperatura"
                className="form-control"
                name="temperatura"
                type="tel"
                placeholder="Insira a temperatura:"
              />
              <small></small>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Vento:</label>
              <input
                id="valorVento"
                className="form-control"
                type="tel"
                name="valorVento"
                placeholder="Insira o vento de Cauda/Proa:"
              />
              <small></small>
            </div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Velocidade de Referência:</label>
              <input
                id="vref"
                className="form-control"
                type="tel"
                name="vref"
                placeholder="Insira a velocidade de referência:"
              />
              <small></small>
            </div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Velocidade da aeronave:</label>
              <input
                id="velocidade-aeronave"
                className="form-control"
                type="tel"
                name="velocidade-aeronave"
                placeholder="Insira a velocidade:"
              />
              <small></small>
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
              />
              <small></small>
            </div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Flap:</label>
              <input
                id="flap"
                className="form-control"
                type="tel"
                name="flap"
                placeholder="Valor para o flap:"
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
            <div className="form-group col-lg-4 col-md-6 col-sm-12"></div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12">
              <label>Quantidade de Reversores inoperantes:</label>
              <input
                id="rev-inoperantes"
                className="form-control"
                type="tel"
                name="rev-inoperantes"
                placeholder="Insira a quantidade de reversores inoperantes:"
              />
              <small></small>
            </div>
            <div className="form-group col-lg-4 col-md-6 col-sm-12"></div>
          </div>
        </div>
      </form>
      <div>
        {/* <button
          className="rounded"
          type="submit"
          id="btn_calcular"
          name="submitButton"
        >
          <b>Calcular</b>
        </button> */}
        <Exemple></Exemple>
        <input hidden placeholder="result" type="text" id="resultadoConta" />
      </div>
    </>
  );
}

export default App;

