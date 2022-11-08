import React, { useState } from "react";
import Axios from "axios";
import axios from "axios";
import logo from "./logo.svg";
import "../css/CadastroUsuario.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModuleResolutionKind, transform } from "typescript";
import { monitorEventLoopDelay } from "perf_hooks";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { NumberDecrementStepper } from "@chakra-ui/react";

function CriarUsuario() {
  const showError = (input: HTMLElement, message: string) => {
    const formField = input.parentElement;
    formField!.classList.remove("success");
    formField!.classList.add("error");
    const error = formField!.querySelector("small");
    error!.textContent = message;
  };

  const showSuccess = (input: HTMLElement) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField!.classList.remove("error");
    formField!.classList.add("success");

    // hide the error message
    const error = formField!.querySelector("small");
    error!.textContent = "";
  };

  const showErro = (select: HTMLElement, message: string) => {
    const formField = select.parentElement;
    formField!.classList.remove("success");
    formField!.classList.add("error");
    const error = formField!.querySelector("small");
    error!.textContent = message;
  };

  const showSucesso = (select: HTMLElement) => {
    const formField = select.parentElement;
    formField!.classList.remove("error");
    formField!.classList.add("success");
    const error = formField!.querySelector("small");
    error!.textContent = "";
  };

  function manipularEnvio(evento: any) {
    evento.preventDefault();
    let NomeValido = validaNome(),
      EmailValido = validaEmail(),
      SenhaValido = validaSenha(),
      NivelUsuarioValido = validaNivelUsuario();

    let formularioValido =
      NomeValido && EmailValido && SenhaValido && NivelUsuarioValido;

    if (formularioValido) {
      Axios.post("http://localhost:3002/criarusuario", {
        nivel_acesso: (
          document.getElementById("NivelUsuario") as HTMLSelectElement
        ).options[
          (document.getElementById("NivelUsuario") as HTMLSelectElement)
            .selectedIndex
        ].value,
        senha_acesso: (
          document.getElementById("senha_acesso") as HTMLInputElement
        ).value,
        nome: (document.getElementById("nome") as HTMLInputElement).value,
        email: (document.getElementById("email") as HTMLInputElement).value,
      });
      Swal.fire({
        text: "User registered successfully!",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok!",
      }).then((result) => {
        if (result.isConfirmed)
          // eslint-disable-next-line no-restricted-globals
          location.reload();
      });
    }
  }
  const ehNome = (valor: string) => {
    const expressao = new RegExp("[A-Z][a-z]");
    return expressao.test(valor);
  };

  const ehEmail = (valor: string) => {
    const expressao = new RegExp("[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-Za-z]");
    return expressao.test(valor);
  };
  const ehSenha = (valor: string) => {
    const expressao = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return expressao.test(valor);
  };
  const ehNivel = (valor: string) => {
    const expressao = new RegExp("[0-9]");
    return expressao.test(valor);
  };

  function validaNome() {
    const idNome = document.getElementById("nome");
    let valido = false;

    if (!ehNome(String(Nome))) {
      showError(idNome!, `please, enter a name in a valid format!`);
    } else if (idNome === null) {
      showError(idNome!, `name is mandatory`);
    } else {
      showSuccess(idNome!);
      valido = true;
    }
    return valido;
  }

  function validaEmail() {
    const idEmail = document.getElementById("email");
    let valido = false;

    if (!ehEmail(String(Email))) {
      showError(idEmail!, `please, enter an email in a valid format!`);
    } else if (idEmail === null) {
      showError(idEmail!, `Email is mandtory`);
    } else {
      showSuccess(idEmail!);
      valido = true;
    }
    return valido;
  }

  function validaSenha() {
    const idSenha = document.getElementById("senha_acesso");
    let valido = false;

    if (!ehSenha(String(Senha))) {
      showError(
        idSenha!,
        `password must contain 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character`
      );
    } else if (idSenha === null) {
      showError(idSenha!, `password is mandtory`);
    } else {
      showSuccess(idSenha!);
      valido = true;
    }
    return valido;
  }

  function validaNivelUsuario() {
    const idNivel = document.getElementById("NivelUsuario");
    let valido = false;

    if (!ehNivel(String(NivelUsuario))) {
      showErro(idNivel!, `user level is mandatory`);
    } else {
      showSucesso(idNivel!);
      valido = true;
    }
    return valido;
  }

  function receberNome(evento: any) {
    let entrada = evento.target.value;
    setNome(entrada);
  }

  function receberEmail(evento: any) {
    let entrada = evento.target.value;
    setEmail(entrada);
  }

  function receberSenha(evento: any) {
    let entrada = evento.target.value;
    setSenha(entrada);
  }

  function receberNivelUsuario(evento: any) {
    let entrada = evento.target.value;
    setNivelUsuario(entrada);
  }

  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [NivelUsuario, setNivelUsuario] = useState("");

  const [values, setValues] = useState(Object);

  const handleChangeValues = (value: any) => {
    setValues((prevValue: any) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = (values: any) => {
    console.log(values);
    Axios.post("http://localhost:3002/criarusuario", {
      nivel_acesso: values.nivel_acesso,
      senha_acesso: values.senha_acesso,
      nome: values.nome,
      email: values.email,
    });
    Swal.fire({
      text: "User registered successfully!",
    });
  };

  return (
    <div className="CriarUsuario">
      {/* <div>
                <i><img className="logoAviaoCriar" src="loguinho.png" id="logoAviaozinho" alt="some text" /></i>
            </div> */}
      <form id="form_criar_aeronave" onSubmit={manipularEnvio}>
        <div className="card card-custom gutter-b">
          <div className="card-header">
            <h3 id="h3Criar" className="card-title">
              User Registration
            </h3>
            <div className="card-toolbar"></div>
          </div>
          <div className="card-body col-md-12">
            <div className="row">
              <div className="form-group col-lg-4 col-md-6 col-sm-12">
                <label>Username:</label>
                <input
                  id="nome"
                  className="form-control"
                  name="nome"
                  placeholder="User name"
                  value={Nome}
                  onChange={receberNome}
                />
                <small></small>
              </div>
              <div className="form-group col-lg-4 col-md-6 col-sm-12">
                <label>Email:</label>
                <input
                  id="email"
                  className="form-control"
                  name="email"
                  placeholder="User email"
                  value={Email}
                  onChange={receberEmail}
                />
                <small></small>
              </div>
              <div className="form-group col-lg-4 col-md-6 col-sm-12">
                <label>Password:</label>
                <input
                  id="senha_acesso"
                  type="password"
                  className="form-control"
                  name="senha_acesso"
                  value={Senha}
                  placeholder="password max length = 15"
                  onChange={receberSenha}
                />
                <small></small>
              </div>
              <div className="form-group col-lg-4 col-md-6 col-sm-12">
                <label>User Level:</label>
                <select
                  title="nivel_acesso"
                  id="NivelUsuario"
                  className="form-control"
                  name="nivel_acesso"
                  value={NivelUsuario}
                  onChange={receberNivelUsuario}
                >
                  <option value="" selected disabled>
                    Select
                  </option>
                  <option value="1">Administrator</option>
                  <option value="2">User</option>
                </select>
                <small></small>
              </div>
            </div>
          </div>
          <div className="card-footer w-100 float-right">
            <a
              className="rounded btn btn-primary ml-2 float-start"
              href="http://localhost:3000/index"
            >
              <b>Return</b>
            </a>
            <button
              className="rounded btn btn-primary ml-2 float-end"
              type="submit"
              id="btn_registrar"
              name="submitButton"
            >
              <b>Register</b>
            </button>
          </div>
        </div>
      </form>

      <script src="../compile/build/Cadastro-usuario.js"></script>
    </div>
  );
}

export default CriarUsuario;
