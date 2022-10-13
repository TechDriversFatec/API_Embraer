import React, { useState } from "react";
import Axios from "axios";
import logo from "./logo.svg";
import "../css/CriarAeronaves2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModuleResolutionKind } from "typescript";
import { monitorEventLoopDelay } from "perf_hooks";
import Swal from "sweetalert2";

function CriarAeronaves() {

    const [values, setValues] = useState(Object);

    const handleChangeValues = (value: any) => {
        setValues((prevValue: any) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = (values: any) => {
        console.log(values);
        Axios.post("http://localhost:3002/register", {
            modelo: values.modelo,
            fabricante: values.fabricante,
            motor: values.motor,
            certificacao: values.certificacao,
            qtde_reversor: values.qtde_reversor,
            peso_referencial: values.peso_referencial,

            tipo_flap: values.tipo_flap,
            configuracao_freio: values.configuracao_freio,

            distancia_referencial: values.distancia_referencial,
            padrao_variacao_peso: values.padrao_variacao_peso,
            correcao_peso_acima: values.correcao_peso_acima,
            correcao_peso_abaixo: values.correcao_peso_abaixo,
            padrao_variacao_altitude: values.padrao_variacao_altitude,
            correcao_altitude: values.correcao_altitude,
            padrao_variacao_temperatura: values.padrao_variacao_temperatura,
            correcao_temperatura_acima: values.correcao_temperatura_acima,
            correcao_temperatura_abaixo: values.correcao_temperatura_abaixo,
            padrao_variacao_vento: values.padrao_variacao_vento,
            correcao_vento_proa: values.correcao_vento_proa,
            correcao_vento_cauda: values.correcao_vento_cauda,
            padrao_variacao_inclinacao: values.padrao_variacao_inclinacao,
            correcao_aclive: values.correcao_aclive,
            correcao_declive: values.correcao_declive,
            velocidade_referencia: values.velocidade_referencia,
            padrao_variacao_velocidade: values.padrao_variacao_velocidade,
            correcao_velocidade: values.correcao_velocidade,
            correcao_reversor_inoperante: values.correcao_reversor_inoperante,
            padrao_variacao_sobrepeso: values.padrao_variacao_sobrepeso,
            correcao_sobrepeso: values.correcao_sobrepeso
        });
        Swal.fire({
            text: 'Aircraft registered successfully!',
        })
    };

    return (
        <div className="CriarAeronaves">
            <div>
                <i>
                    <img className="logoAviaoCriar" src="loguinho.png" id="logoAviaozinho" alt="some text" />
                </i>
            </div>
            <form id="form_criar_aeronave">
                <div className="card card-custom gutter-b">
                    <div className="card-header">
                        <h3 id="h3Criar" className="card-title">Aircraft Registration</h3>
                        <div className="card-toolbar">
                        </div>
                    </div>
                    <div className="card-body col-md-12">
                        <div className="row">
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Aircraft model:</label>
                                <input id="modelo" className="form-control" name="modelo" placeholder="Insert the aircraft model:" onChange={handleChangeValues} />
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Motor:</label>
                                <input id="motor" className="form-control" name="motor"
                                    placeholder="Insert the aircraft motor:" onChange={handleChangeValues} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Manufacturer:</label>
                                <input id="fabricante" className="form-control" name="fabricante"
                                    placeholder="Insert the aircraft manufacturer:" onChange={handleChangeValues} />
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Certification:</label>
                                <input id="certificacao" className="form-control" name="certificacao"
                                    placeholder="Insert the aircraft certification:" onChange={handleChangeValues} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Flap:</label>
                                <input id="tipo_flap" className="form-control" name="tipo_flap"
                                    placeholder="Insert the aircraft flap:" onChange={handleChangeValues} />
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Brake config:</label>
                                <select title="configuracao_freio" id="configuracao_freio" className="form-control" name="configuracao_freio" onChange={handleChangeValues}>
                                    <option value="" selected disabled>Select</option>
                                    <option value="Max. Manual">Max. Manual</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>How many reversers does the aircraft have?</label>
                                <input id="qtde_reversor" className="form-control" name="qtde_reversor"
                                    placeholder="Number of reversers:" onChange={handleChangeValues} />
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Correction index (m):</label>
                                <input id="correcao_reversor_inoperante" className="form-control" name="correcao_reversor_inoperante"
                                    placeholder="Per rev inoperative:" onChange={handleChangeValues} />
                            </div>
                        </div>
                        <div className="row">


                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Ref distance for flap (m):</label>
                                <input id="distancia_referencial" className="form-control" type="tel" name="distancia_referencial" placeholder="Ref distance for flap:" onChange={handleChangeValues} />
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Ref weight (Kg):</label>
                                <input id="peso_referencial" className="form-control" type="tel" name="peso_referencial"
                                    placeholder="Insert the aircraft ref weight:" onChange={handleChangeValues} />
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12"></div>

                        </div>
                        <div className="row">
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label id="label-peso">Weight:</label>
                                <label>Indicate the weight variation pattern for comparison (Kg):</label>
                                <br></br>
                                <input title="padrao_variacao_peso" id="padrao_variacao_peso" className="form-control" name="padrao_variacao_peso" onChange={handleChangeValues} />
                                <br></br>
                                <label>Insert the variation index (m):</label>
                                <br></br>
                                <input id="correcao_peso_acima" className="form-control" name="correcao_peso_acima"
                                    placeholder="Above" onChange={handleChangeValues}></input>
                                <br></br>
                                <input id="correcao_peso_abaixo" className="form-control" name="correcao_peso_abaixo"
                                    placeholder="Below" onChange={handleChangeValues}></input>
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label id="label-temp">Temperature:</label>
                                <label>Insert the temperature variation pattern To compare(ISA):</label>
                                <br></br>
                                <input id="padrao_variacao_temperatura" className="form-control" name="padrao_variacao_temperatura"
                                    placeholder="°C" onChange={handleChangeValues} />
                                <br></br>
                                <label>Insert the variation index (m):</label>
                                <br></br>
                                <input id="correcao_temperatura_acima" className="form-control" name="correcao_temperatura_acima"
                                    placeholder="Above ISA" onChange={handleChangeValues} />
                                <br></br>
                                <input id="correcao_temperatura_abaixo" className="form-control" name="correcao_temperatura_abaixo"
                                    placeholder="Below ISA" onChange={handleChangeValues} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Altitude (Feets above sea level):</label>
                                <label>Indicate the altitude variation pattern for comparison:</label>
                                <br></br>
                                <input title="padrao_variacao_altitude" id="padrao_variacao_altitude" className="form-control" name="padrao_variacao_altitude" onChange={handleChangeValues} />
                                <br></br>
                                <label>Insert the variation index (m):</label>
                                <br></br>
                                <input id="correcao_altitude" className="form-control" name="correcao_altitude"
                                    placeholder="Above" onChange={handleChangeValues}></input>
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label id="label-vento">Wind:</label>
                                <br></br>
                                <label>Indicate the wind variation pattern for comparison (KTAS):</label>
                                <br></br>
                                <input id="padrao_variacao_vento" className="form-control" name="padrao_variacao_vento"
                                    placeholder="Knots of wind" onChange={handleChangeValues} />
                                <br></br>
                                <label>Insert the variation index (m):</label>
                                <br></br>
                                <input id="correcao_vento_proa" className="form-control" name="correcao_vento_proa"
                                    placeholder="Head wind" onChange={handleChangeValues} />
                                <br></br>
                                <input id="correcao_vento_cauda" className="form-control" name="correcao_vento_cauda"
                                    placeholder="Tail wind" onChange={handleChangeValues} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Slope:</label>
                                <br></br>
                                <label>Indicate the slope variation pattern for comparison (%):</label>
                                <br></br>
                                <input id="padrao_variacao_inclinacao" className="form-control" name="padrao_variacao_inclinacao"
                                    placeholder="%" onChange={handleChangeValues} />
                                <br></br>
                                <label>Insert the variation index (m):</label>
                                <br></br>
                                <input id="correcao_aclive" className="form-control" name="correcao_aclive"
                                    placeholder="Uphill" onChange={handleChangeValues}></input>
                                <br></br>
                                <input id="correcao_declive" className="form-control" name="correcao_declive"
                                    placeholder="Downhill" onChange={handleChangeValues}></input>
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Overweight:</label>
                                <br></br>
                                <label>Indicate the overweight variation pattern for comparison (Kg):</label>
                                <br></br>
                                <input title="padrao_variacao_sobrepeso" id="padrao_variacao_sobrepeso" className="form-control" name="padrao_variacao_sobrepeso"
                                    placeholder="" onChange={handleChangeValues} />
                                <br></br>
                                <label>Insert the variation index (m):</label>
                                <br></br>
                                <input id="correcao_sobrepeso" className="form-control" name="correcao_sobrepeso"
                                    placeholder="Above" onChange={handleChangeValues} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label id="label-vap">Vap (speed):</label>
                                <label>Insert the speed pattern for landing:</label>
                                <input id="velocidade_referencia" className="form-control" name="velocidade_referencia"
                                    placeholder="Insert the speed pattern for landing" onChange={handleChangeValues} />
                                <br></br>
                                <label>Insert the Vap variation pattern (Km/h):</label>
                                <input id="padrao_variacao_velocidade" className="form-control" name="padrao_variacao_velocidade"
                                    placeholder="Indicate the Vap variation pattern" onChange={handleChangeValues} />
                                <br></br>
                                <label>Insert the variation index (m):</label>
                                <input id="correcao_velocidade" className="form-control" name="correcao_velocidade"
                                    placeholder="Insert the vap variation index" onChange={handleChangeValues} />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer w-100 float-right">
                        <a className="rounded btn btn-primary ml-2 float-start" href="http://localhost:3000">
                            <b>Return</b>
                        </a>
                        <button className="rounded btn btn-primary ml-2 float-end" type="submit" id="btn_registrar" name="submitButton" onClick={() => handleClickButton(values)}>
                            <b>Register</b></button>
                    </div>
                </div>
            </form>

            <script src="../compile/build/CriarAeronaves.js"></script>
        </div>
    );
};

export default CriarAeronaves;
