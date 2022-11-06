import React, { useState } from "react";
import Axios from "axios";
import axios from "axios";
import logo from "./logo.svg";
import "../css/profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModuleResolutionKind, transform } from "typescript";
import { monitorEventLoopDelay } from "perf_hooks";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { NumberDecrementStepper } from "@chakra-ui/react";
import avatarIcon from './avatarIcon.png'



function UserProfile() {

    function manipularEnvio(evento: any) {

    }

    function receberNome(evento: any) {
        let entrada = evento.target.value;
        setNome(entrada)
    }

    function receberEmail(evento: any) {
        let entrada = evento.target.value;
        setEmail(entrada)
    }

    function receberSenha(evento: any) {
        let entrada = evento.target.value;
        setSenha(entrada)
    }

    const [Nome, setNome] = useState("");
    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");
    const [NivelUsuario, setNivelUsuario] = useState("");

    return (
        <div className="UserProfile">
            <form id="form_profile" onSubmit={manipularEnvio}>
                <div className="card card-custom gutter-b col-md-10 offset-sm-1">
                    <div className="card-header">
                        <h3 id="h3profile" className="card-title text-center">User Profile</h3>
                        <div className="card-toolbar">
                        </div>
                    </div>
                    <div className="card-body col-md-12">
                        <ul className="list-group list-group-flush">
                            <img className="displayed" title="avatarIcon" id="avatarIcon" src={avatarIcon}/>
                            <div className="row">
                            <div className="col-md-4 offset-md-4">
                                    <label>Name:</label>
                                    <input id="nome" className="form-control" name="nome" value={Nome} onChange={receberNome} />
                                    <small></small>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-md-4 offset-md-4">
                                    <label>Email:</label>
                                    <input id="email" className="form-control" name="email" value={Email} onChange={receberEmail} />
                                    <small></small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 offset-md-4">
                                    <label>Password:</label>
                                    <input id="senha_acesso" type="password" className="form-control" name="senha_acesso" value={Senha} placeholder="password max length = 15" onChange={receberSenha} />
                                    <small></small>
                                </div>
                            </div>

                        </ul>
                    </div>

                    <div className="card-footer w-100 float-right">
                        <a className="rounded btn btn-primary ml-2 float-start" href="http://localhost:3000/index">
                            <b>Return</b>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserProfile
