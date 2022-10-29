import React, { useState } from "react";
import Axios from "axios";
import logo from "./logo.svg";
import "../css/CadastroUsuario.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModuleResolutionKind } from "typescript";
import { monitorEventLoopDelay } from "perf_hooks";
import Swal from "sweetalert2";

function CriarUsuario() {

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
            text: 'User registered successfully!',
        })
    };

    return (
        <div className="CriarUsuario">
            <div>
                <i><img className="logoAviaoCriar" src="loguinho.png" id="logoAviaozinho" alt="some text" /></i>
            </div>
            <form id="form_criar_aeronave">
                <div className="card card-custom gutter-b">
                    <div className="card-header">
                        <h3 id="h3Criar" className="card-title">User Registration</h3>
                        <div className="card-toolbar">
                        </div>
                    </div>
                    <div className="card-body col-md-12">
                        <div className="row">
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Username:</label>
                                <input id="username" className="form-control" name="username" onChange={handleChangeValues} />
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Email:</label>
                                <input id="email" type="email" className="form-control" name="email" onChange={handleChangeValues} />
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Password:</label>
                                <input id="password" type="password" className="form-control" name="password" onChange={handleChangeValues} />
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>Password Confirm:</label>
                                <input id="password-confirm" type="password" className="form-control" name="password-confirm" onChange={handleChangeValues} />
                            </div>
                            <div className="form-group col-lg-4-md col-md-6 col-sm-12">
                                <label>User Level:</label>
                                    <select title="Nível usuário" id="NivelUsuario" className="form-control" name="NivelUsuario" onChange={handleChangeValues}>
                                        <option value="" selected disabled>Select</option>
                                        <option value="Max. Manual">Administrator</option>
                                        <option value="High">User</option>
                                    </select> 
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
            <footer >All Rights Reserved</footer> 

                <script src="../compile/build/Cadastro-usuario.js"></script>
        </div>
    );
};

export default CriarUsuario
 