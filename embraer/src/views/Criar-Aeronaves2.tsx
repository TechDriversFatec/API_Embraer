import React, { useState } from "react";
import Axios from "axios";
import logo from "./logo.svg";
import "../css/CriarAeronaves.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModuleResolutionKind } from "typescript";
import { monitorEventLoopDelay } from "perf_hooks";
import Swal from "sweetalert2";

function CriarAeronaves() {
    
    const [values, setValues] = useState(Object);
    
    const handleChangeValues = (value: any) => {
        setValues((prevValue:any) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleClickButton = (values:any) => {
        console.log(values);
        Axios.post("http://localhost:3001/register", {
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
            text: 'Cadastro realizado com sucesso!',
          })
    };
  
  return (
    <div className="CriarAeronaves">
        <div>
            <h2><i>Cadastre a Aeronave:</i></h2>
        </div>
        <form id="form_criar_aeronave">
            <div className="container-fluid">
                <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Modelo da aeronave:</label>
                        <input id="modelo" className="form-control" name="modelo" placeholder="Insira o modelo da aeronave:" onChange={handleChangeValues} />
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Motor:</label>
                        <input id="motor" className="form-control" name="motor"
                        placeholder="Insira o motor da aeronave:" onChange={handleChangeValues}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Fabricante:</label>
                        <input id="fabricante" className="form-control" name="fabricante"
                            placeholder="Insira o fabricante da aeronave:" onChange={handleChangeValues}/>
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Certificação:</label>
                        <input id="certificacao" className="form-control" name="certificacao"
                            placeholder="Insira a certificação da Aeronave:" onChange={handleChangeValues}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Flap</label>
                        <input id="tipo_flap" className="form-control"  name="tipo_flap"
                        placeholder="Insira o tipo do flap:" onChange={handleChangeValues}/>
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Configuração de frenagem:</label>
                        <select id="configuracao_freio" className="form-control" name="configuracao_freio" onChange={handleChangeValues}>
                            <option value="" selected disabled>Selecione</option>
                            <option value="Max. Manual">Max. Manual</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                            <label>Quantos reversores a aeronave possuí?</label>
                            <input id="qtde_reversor" className="form-control" name="qtde_reversor"
                            placeholder="Número de reversores:" onChange={handleChangeValues}/>
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Índice de correção (m):</label>
                        <input id="correcao_reversor_inoperante" className="form-control" name="correcao_reversor_inoperante"
                        placeholder="Por rev inoperante:" onChange={handleChangeValues}/>
                    </div>
                </div>
                <div className="row">


                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Distância ref para o Flap (m):</label>
                        <input id="distancia_referencial" className="form-control" type="tel" name="distancia_referencial" placeholder="Distância referencial para o flap:" onChange={handleChangeValues}/>
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Peso referencial (Kg):</label>
                        <input id="peso_referencial" className="form-control" type="tel" name="peso_referencial"
                            placeholder="Insira o peso referencial da aeronave:" onChange={handleChangeValues}/>
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12"></div>

                </div>
                <div className="row">
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label id="label-peso">Peso:</label>
                    <label>Indicar o padrão de variação do peso para comparação (Kg):</label>
                    <br></br>
                    <input id="padrao_variacao_peso" className="form-control" name="padrao_variacao_peso" onChange={handleChangeValues}/>
                    <br></br>
                    <label>Indicar os indíces de variação da metragem (m):</label>
                    <br></br>
                    <input id="correcao_peso_acima" className="form-control" name="correcao_peso_acima"
                     placeholder="Acima" onChange={handleChangeValues}></input>
                     <br></br>
                    <input id="correcao_peso_abaixo" className="form-control" name="correcao_peso_abaixo"
                    placeholder="Abaixo" onChange={handleChangeValues}></input>
                </div>
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label id="label-temp">Temperatura:</label>
                    <label>Indicar o padrão de variação da temp. para comparação (ISA):</label>
                    <br></br>
                    <input id="padrao_variacao_temperatura" className="form-control" name="padrao_variacao_temperatura"
                        placeholder="°C" onChange={handleChangeValues}/>
                        <br></br>
                        <label>Indicar os indíces de variação (m):</label>
                        <br></br>
                    <input id="correcao_temperatura_acima" className="form-control" name="correcao_temperatura_acima"
                     placeholder="Acima ISA" onChange={handleChangeValues}/>
                     <br></br>
                    <input id="correcao_temperatura_abaixo" className="form-control" name="correcao_temperatura_abaixo"
                    placeholder="Abaixo ISA" onChange={handleChangeValues}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>Altitude (Pés acima do nível do mar):</label>
                    <label>Indicar o padrão de variação da altitude para comparação:</label>
                    <br></br>
                    <input id="padrao_variacao_altitude" className="form-control" name="padrao_variacao_altitude" onChange={handleChangeValues}/>
                    <br></br>
                    <label>Indicar os indíces de variação (m):</label>
                    <br></br>
                    <input id="correcao_altitude" className="form-control" name="correcao_altitude"
                     placeholder="Acima" onChange={handleChangeValues}></input>
                </div>
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label id="label-vento">Vento:</label>
                    <label>Indicar o padrão de variação do vento para comparação (KTAS):</label>
                    <br></br>
                    <input id="padrao_variacao_vento" className="form-control" name="padrao_variacao_vento"
                        placeholder="Nós de vento" onChange={handleChangeValues}/>
                        <br></br>
                        <label>Indicar os indíces de variação (m):</label>
                        <br></br>
                    <input id="correcao_vento_proa" className="form-control" name="correcao_vento_proa"
                     placeholder="Vento de proa" onChange={handleChangeValues}/>
                     <br></br>
                    <input id="correcao_vento_cauda" className="form-control" name="correcao_vento_cauda"
                    placeholder="Vento de cauda" onChange={handleChangeValues}/>
                </div>
            </div>
            <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Slope:</label>
                        <br></br>
                        <label>Indicar o padrão de variação do ângulo para comparação (%):</label>
                        <br></br>
                        <input id="padrao_variacao_inclinacao" className="form-control" name="padrao_variacao_inclinacao"
                        placeholder="%" onChange={handleChangeValues}/>
                        <br></br>
                        <label>Indicar os indíces de variação (m):</label>
                        <br></br>
                        <input id="correcao_aclive" className="form-control" name="correcao_aclive"
                        placeholder="Aclive" onChange={handleChangeValues}></input>
                        <br></br>
                        <input id="correcao_declive" className="form-control" name="correcao_declive"
                        placeholder="Declive" onChange={handleChangeValues}></input>
                    </div>
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>Sobrepeso:</label>
                    <br></br>
                    <label>Indicar o padrão de variação do sobrepeso para comparação (Kg):</label>
                    <br></br>
                    <input id="padrao_variacao_sobrepeso" className="form-control" name="padrao_variacao_sobrepeso"
                        placeholder="" onChange={handleChangeValues}/>
                        <br></br>
                        <label>Indicar os indíces de variação (m):</label>
                        <br></br>
                    <input id="correcao_sobrepeso" className="form-control" name="correcao_sobrepeso"
                     placeholder="Acima" onChange={handleChangeValues}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label id="label-vap">Vap (Velocidade):</label>
                    <label>Indicar o padrão de velocidade para o pouso:</label>
                    <input id="velocidade_referencia" className="form-control" name="velocidade_referencia"
                    placeholder="Insira o padrão de velocidade para pouso" onChange={handleChangeValues}/>
                    <br></br>
                    <label>Indicar o padrão de variação da Vap (Km/h):</label>
                    <input id="padrao_variacao_velocidade" className="form-control" name="padrao_variacao_velocidade"
                    placeholder="Insira o padrão de variação do Vap" onChange={handleChangeValues}/>
                    <br></br>
                    <label>Indicar os indíces de variação (m)</label>
                    <input id="correcao_velocidade" className="form-control" name="correcao_velocidade"
                    placeholder="Insira o indice de variação do Vap" onChange={handleChangeValues}/>
                </div>
            </div>
            </div>
        </form>
        <div className="row">
            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                <button className="rounded" type="submit" id="btn_voltar" name="submitButton">
                    <a><b>Início</b></a>
                </button>
            </div>
            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                <button className="rounded" type="submit" id="btn_registrar" name="submitButton" onClick={() => handleClickButton(values)}>
                    <b>Cadastrar</b></button>                   
            </div>
        </div>

      <script src="../compile/build/CriarAeronaves.js"></script>
    </div>
  );
};

export default CriarAeronaves;
