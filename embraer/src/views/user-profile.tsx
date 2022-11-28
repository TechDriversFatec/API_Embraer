import React, { useEffect, useState } from "react";
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
import { Button, IconButton, InputAdornment, Input } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"



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



    type Usuario = {
        nivel_acesso: number,
        senha_acesso: string,
        nome: string,
        email: string
    }

    useEffect(() => {
        debugger
        axios
            .get(`http://localhost:3002/getUser/${localStorage.getItem('idUsuario')}`)
            .then((response) => {
                const data = response.data;
                setNome(data[0].nome)
                setEmail(data[0].email)
                setSenha(data[0].senha_acesso)
            });
    }, []);

    const [Nome, setNome] = useState("");
    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);

    function updateUser() {


        Swal.fire({
            title: 'Confirm the update?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.put(`http://localhost:3002/updateUserProfile/${localStorage.getItem('idUsuario')}`, {
                    nome: Nome,
                    email: Email,
                    senha_acesso: Senha
                });
                localStorage.setItem('nomeUsuario', Nome)

                Swal.fire({
                    title: 'User successfully updated!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        // eslint-disable-next-line no-restricted-globals
                        location.reload()
                    }
                })
            }
        })
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="UserProfile">
            <form id="form_profile" onSubmit={manipularEnvio}>
                <div className="card card-custom gutter-b col-md-10 offset-sm-1 cardProfile">
                    <div className="card-header">
                        <h3 id="h3profile" className="card-title text-center">User Profile</h3>
                        <div className="card-toolbar">
                        </div>
                    </div>
                    <div className="card-body col-md-12">
                        <ul className="list-group list-group-flush">
                            <img className="displayed" title="avatarIcon" id="avatarIcon" src={avatarIcon} />
                            <div className="row">
                                <div className="col-md-4 offset-md-4">
                                    <label>Name:</label>
                                    <Input id="nome" title="nome" className="form-control" name="nome" value={Nome} onChange={receberNome} />
                                    <small></small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 offset-md-4">
                                    <label>Email:</label>
                                    <Input id="email" title="email" className="form-control" name="email" value={Email} onChange={receberEmail} />
                                    <small></small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 offset-md-4">
                                    <label>Password:</label>
                                    <Input id="senha_acesso"
                                        type={passwordShown ? "text" : "password"}
                                        className="form-control" name="senha_acesso"
                                        value={Senha} placeholder="password max length = 15"
                                        onChange={receberSenha}
                                        endAdornment={<InputAdornment position="end">
                                            <IconButton
                                                onClick={togglePassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {passwordShown ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>} />
                                </div>
                            </div>
                        </ul>
                    </div>

                    <div className="card-footer w-100 float-right">
                        <a className="rounded btn btn-primary ml-2 float-start" href="http://localhost:3000/index">
                            <b>Return</b>
                        </a>
                        <button
                            title="btn_atualizarDados"
                            className="rounded btn btn-primary ml-2 float-end"
                            type="button"
                            id="btn_atualizarDados"
                            name="btn_atualizarDados"
                            onClick={updateUser}
                        ><b>Update</b>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserProfile
