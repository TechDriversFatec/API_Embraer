import React from "react";
import logo from "./logo.svg";
import "./CriarAeronaves.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CriarAeronaves() {
  return (
    <div className="CriarAeronaves">
        <div>
            <h2><i>Para o cadastro de aeronaves, favor inserir os dados solicitados abaixo:</i></h2>
        </div>
        <form id="form_criar_aeronave">
            <div className="container-fluid">
                <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Modelo da aeronave:</label>
                        <input id="modelo-aeronave" className="form-control" name="modelo-aeronave"
                        placeholder="Insira o modelo da aeronave:" />
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Motor:</label>
                        <input id="motor" className="form-control" name="motor"
                            placeholder="Insira o motor da aeronave:" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Fabricante:</label>
                        <input id="fabricante" className="form-control" name="fabricante"
                            placeholder="Insira o fabricante da aeronave:" />
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Certificação:</label>
                        <input id="certificacao" className="form-control" name="certificacao"
                            placeholder="Insira a crtificação:" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Flap</label>
                        <input id="flap" className="form-control"  name="flap"
                            placeholder="Insira o flap:" />
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Configuração de frenagem:</label>
                        <select id="frenagem" className="form-control" name="frenagem">
                            <option value="" selected disabled>Selecione</option>
                            <option value="max. manual">Max. Manual</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                            <label>Quantos reversores a aeronave possuí?</label>
                            <input id="reversor" className="form-control" name="reversor"
                            placeholder="Número de reversores:" />
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Reversor (se houver)</label>
                        <input id="reversor-inop" className="form-control" name="reversor-inop"
                        placeholder="Por rev inoperante" />
                    </div>
                </div>
                <div className="row">


                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Distância ref para o Flap (M):</label>
                        <input id="distancia-ref-flap" className="form-control" type="tel" name="distancia-ref-flap" placeholder="Distância referencial para o flap:" />
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Peso referencial (KG):</label>
                        <input id="peso-referencial" className="form-control" type="tel" name="peso-referencial"
                            placeholder="Insira o peso referencial da aeronave:" />
                    </div>
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12"></div>

                </div>
                <div className="row">
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>Peso:</label>
                    <label>Indicar o padrão de variação do peso para comparação (KG):</label>
                    <br></br>
                    <input id="padrao-variacao-peso" className="form-control" name="padrao-variacao-peso"/>
                    <br></br>
                    <label>Indicar os indíces de variação da metragem (M):</label>
                    <br></br>
                    <input id="indice-variacao-<peso-acima" className="form-control" name="indice-variacao-peso-acima"
                     placeholder="acima"></input>
                     <br></br>
                    <input id="indice-variacao-peso-abaixo" className="form-control" name="indice-variacao-peso-abaixo"
                    placeholder="Abaixo" />
                </div>
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>Temperatura:</label>
                    <label>Indicar o padrão de variação da temp. para comparação (ISA):</label>
                    <br></br>
                    <input id="indice-variacao-temperatura" className="form-control" name="indice-variacao-temperatura"
                        placeholder="°C" />
                        <br></br>
                        <label>Indicar os indíces de variação (M):</label>
                        <br></br>
                    <input id="indice-variacao-temp-acima" className="form-control" name="indice-variacao-temp-acima"
                     placeholder="acima ISA" />
                     <br></br>
                    <input id="indice-variacao-temp-abaixo" className="form-control" name="indice-variacao-temp-abaixo"
                    placeholder="Abaixo ISA" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>Altitude (Pés acima do nível do mar):</label>
                    <label>Indicar o padrão de variação da altitude para comparação:</label>
                    <br></br>
                    <input id="padrao-variacao-altitude" className="form-control" name="padrao-variacao-altitude"/>
                    <br></br>
                    <label>Indicar os indíces de variação (M):</label>
                    <br></br>
                    <input id="indice-variacao-altitude" className="form-control" name="indice-variacao-altitude"
                     placeholder="acima"></input>
                </div>
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>Vento:</label>
                    <label>Indicar o padrão de variação do vento para comparação (KTAS):</label>
                    <br></br>
                    <input id="indice-variacao-vento" className="form-control" name="indice-variacao-vento"
                        placeholder="nós de vento" />
                        <br></br>
                        <label>Indicar os indíces de variação (M):</label>
                        <br></br>
                    <input id="indice-variacao-vento-proa" className="form-control" name="indice-variacao-vento-proa"
                     placeholder="Vento de proa" />
                     <br></br>
                    <input id="indice-variacao-vento-cauda" className="form-control" name="indice-variacao-vento-cauda"
                    placeholder="Vento de cauda" />
                </div>
            </div>
            <div className="row">
                    <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                        <label>Slope:</label>
                        <br></br>
                        <label>Indicar o padrão de variação do ângulo para comparação (%):</label>
                        <br></br>
                        <input id="padrao-variacao-slope" className="form-control" name="padrao-variacao-slope"
                        placeholder="%" />
                        <br></br>
                        <label>Indicar os indíces de variação (M):</label>
                        <br></br>
                        <input id="indice-variacao-aclive" className="form-control" name="indice-variacao-aclive"
                        placeholder="aclive"></input>
                        <br></br>
                        <input id="indice-variacao-declive" className="form-control" name="indice-variacao-declive"
                        placeholder="declive"></input>
                    </div>
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>Sobrepeso:</label>
                    <br></br>
                    <label>Indicar o padrão de variação do sobrepeso para comparação (KG):</label>
                    <br></br>
                    <input id="indice-variacao-sobrepeso" className="form-control" name="indice-variacao-sobrepeso"
                        placeholder="" />
                        <br></br>
                        <label>Indicar os indíces de variação (M):</label>
                        <br></br>
                    <input id="indice-variacao-peso-acima" className="form-control" name="indice-variacao-peso-acima"
                     placeholder="Peso acima" />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                    <label>Vap (Velocidade):</label>
                    <label>Indicar o padrão de velocidade para o pouso:</label>
                    <input id="padrao-velocidade-vap" className="form-control" name="padrao-velocidade-vap"
                    placeholder="Insira o padrão de velocidade para pouso" />
                    <br></br>
                    <label>Indicar o padrão de variação da Vap (KM/H):</label>
                    <input id="padrao-variacao-vap" className="form-control" name="padrao-variacao-vap"
                    placeholder="Insira o padrão de variação do vap" />
                    <br></br>
                    <label>Indicar os indíces de variação (M)</label>
                    <input id="indice-variacao-vap" className="form-control" name="indice-variacao-vap"
                    placeholder="insira o indice de variação do vap" />
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
                <button className="rounded" type="submit" id="btn_registrar" name="submitButton">
                    <b>Cadastrar</b></button>                   
            </div>
        </div>

      <script src="../compile/build/CriarAeronaves.js"></script>
    </div>
  );
}

export default CriarAeronaves;