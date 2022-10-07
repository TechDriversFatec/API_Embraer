import React from "react";
import logo from "./logo.svg";
import "./CriarAeronaves.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CriarAeronaves() {
  return (
    <div className="CriarAeronaves">
        <div>
            <h2><i>For aircraft registration, please enter the data below:</i></h2>
        </div>
        <form id="form_criar_aeronave">
            <div className="container-fluid">
                <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Aircraft Model:</label>
                        <input id="modelo-aeronave" className="form-control" name="modelo-aeronave"
                        placeholder="Insert the aircraft model:" />
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Motor:</label>
                        <input id="motor" className="form-control" name="motor"
                            placeholder="Insert the aircraft motor:" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Manufacturer:</label>
                        <input id="fabricante" className="form-control" name="fabricante"
                            placeholder="Insert the aircraft manufacturer:" />
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Certification:</label>
                        <input id="certificacao" className="form-control" name="certificacao"
                            placeholder="Insert the crtification:" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Flap</label>
                        <input id="flap" className="form-control"  name="flap"
                            placeholder="Insert the flap:" />
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Brake config:</label>
                        <select id="frenagem" className="form-control" name="frenagem">
                            <option value="" selected disabled>Select</option>
                            <option value="max. manual">Max. Manual</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                            <label>How many reversers does the aircraft have?</label>
                            <input id="reversor" className="form-control" name="reversor"
                            placeholder="Reversers number:" />
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Reverser (if has)</label>
                        <input id="reversor-inop" className="form-control" name="reversor-inop"
                        placeholder="Per reverser inoperantive" />
                    </div>
                </div>
                <div className="row">


                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Ref distance for Flap (m):</label>
                        <input id="distancia-ref-flap" className="form-control" type="tel" name="distancia-ref-flap" placeholder="Ref distance for flap:" />
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Ref weight (kg):</label>
                        <input id="peso-referencial" className="form-control" type="tel" name="peso-referencial"
                            placeholder="Insert the aircraft ref weight:" />
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12"></div>

                </div>
                <div className="row">
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>weight:</label>
                    <br></br>
                    <label>Insert the weight variation pattern for comparison (kg):</label>
                    <br></br>
                    <input id="padrao-variacao-peso" className="form-control" name="padrao-variacao-peso"/>
                    <br></br>
                    <label>Insert the indices of variation (m):</label>
                    <br></br>
                    <input id="indice-variacao-<peso-acima" className="form-control" name="indice-variacao-peso-acima"
                     placeholder="Above"></input>
                     <br></br>
                    <input id="indice-variacao-peso-abaixo" className="form-control" name="indice-variacao-peso-abaixo"
                    placeholder="Below" />
                </div>
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>Temperature °C:</label>
                    <br></br>
                    <label>Insert the temperature variation pattern for comparison (ISA):</label>
                    <br></br>
                    <input id="indice-variacao-temperatura" className="form-control" name="indice-variacao-temperatura"
                        placeholder="°C" />
                        <br></br>
                        <label>Insert the indices of variation (m):</label>
                        <br></br>
                    <input id="indice-variacao-temp-acima" className="form-control" name="indice-variacao-temp-acima"
                     placeholder="Above ISA" />
                     <br></br>
                    <input id="indice-variacao-temp-abaixo" className="form-control" name="indice-variacao-temp-abaixo"
                    placeholder="Below ISA" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>Altitude (Feets above sea level):</label>
                    <label>Insert the altitude variation pattern for comparison:</label>
                    <br></br>
                    <input id="padrao-variacao-altitude" className="form-control" name="padrao-variacao-altitude"/>
                    <br></br>
                    <label>Insert the indíces of variation (m):</label>
                    <br></br>
                    <input id="indice-variacao-altitude" className="form-control" name="indice-variacao-altitude"
                     placeholder="Above"></input>
                </div>
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>Wind:</label>
                    <br></br>
                    <label>Insert the wind variation pattern for comparison (KTAS):</label>
                    <br></br>
                    <input id="indice-variacao-vento" className="form-control" name="indice-variacao-vento"
                        placeholder="Knots of wind" />
                        <br></br>
                        <label>Insert the indices of variation (m):</label>
                        <br></br>
                    <input id="indice-variacao-vento-proa" className="form-control" name="indice-variacao-vento-proa"
                     placeholder="Head wind" />
                     <br></br>
                    <input id="indice-variacao-vento-cauda" className="form-control" name="indice-variacao-vento-cauda"
                    placeholder="Tail wind" />
                </div>
            </div>
            <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Slope:</label>
                        <br></br>
                        <label>Insert the slope variation pattern for comparison (%):</label>
                        <br></br>
                        <input id="padrao-variacao-slope" className="form-control" name="padrao-variacao-slope"
                        placeholder="%" />
                        <br></br>
                        <label>Inser the indices of variation (m):</label>
                        <br></br>
                        <input id="indice-variacao-aclive" className="form-control" name="indice-variacao-aclive"
                        placeholder="Uphill"></input>
                        <br></br>
                        <input id="indice-variacao-declive" className="form-control" name="indice-variacao-declive"
                        placeholder="Downhill"></input>
                    </div>
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>Overweight:</label>
                    <br></br>
                    <label>Insert the overweight variation pattern for comparison (kg):</label>
                    <br></br>
                    <input id="indice-variacao-sobrepeso" className="form-control" name="indice-variacao-sobrepeso"
                        placeholder="" />
                        <br></br>
                        <label>Insert the indices of variation (m):</label>
                        <br></br>
                    <input id="indice-variacao-peso-acima" className="form-control" name="indice-variacao-peso-acima"
                     placeholder="Weight above" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>Vap (Speed):</label>
                    <label>Insert the speed variation pattern for the comparison:</label>
                    <input id="padrao-velocidade-vap" className="form-control" name="padrao-velocidade-vap"
                    placeholder="Insert the speed pattern for landing" />
                    <br></br>
                    <label>Insert the Vap variation pattern for comparison (KM/H):</label>
                    <input id="padrao-variacao-vap" className="form-control" name="padrao-variacao-vap"
                    placeholder="Insert the vap variation pattern for landing" />
                    <br></br>
                    <label>Insert the indices of variation (m)</label>
                    <input id="indice-variacao-vap" className="form-control" name="indice-variacao-vap"
                    placeholder="Insert the vap indices of variation" />
                </div>
            </div>
            </div>
        </form>
        <div className="row">
            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                <button className="rounded" type="submit" id="btn_voltar" name="submitButton">
                    <a><b>begining</b></a>
                </button>
            </div>
            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                <button className="rounded" type="submit" id="btn_registrar" name="submitButton">
                    <b>Register</b></button>                   
            </div>
        </div>

      <script src="../compile/build/CriarAeronaves.js"></script>
    </div>
  );
}

export default CriarAeronaves;