import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CriarAeronaves2.css";
const Swal = require("sweetalert2");

const Login = () => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [EmailRecovery, setEmailRecovery] = useState("");

  function receberEmail(evento: any) {
    let entrada = evento.target.value;
    setEmail(entrada);
  }

  function receberSenha(evento: any) {
    let entrada = evento.target.value;
    setSenha(entrada);
  }

  let params = {
    email: Email,
    senha: Senha,
  };

  let paramsEmail = {
    email: EmailRecovery,
  };

  function handleLogin(values: any) {
    console.log(params);
    values.preventDefault();
    Axios.get(`http://localhost:3002/getUsuarios/${params.email}`, {
      params: { params },
    }).then((response) => {
      const data = response.data;
      console.log(data);
      debugger;
      if (data.length === 0) {
        Swal.fire({
          title: `Error`,
          html: " <b>User not found</b>",
        });
      } else if (data[0].senha_acesso === params.senha) {
        if (data[0].nivel_acesso === 1) {
          localStorage.setItem("idUsuario", `${data[0].id}`);
          localStorage.setItem("nomeUsuario", `${data[0].nome}`);
          localStorage.setItem("nivelAcesso", `${data[0].nivel_acesso}`);
          navigate("/Index");
        } else {
          localStorage.setItem("idUsuario", `${data[0].id}`);
          localStorage.setItem("nomeUsuario", `${data[0].nome}`);
          localStorage.setItem("nivelAcesso", `${data[0].nivel_acesso}`);
          navigate("/Calculo");
        }
      } else if (data[0].senha_acesso !== params.senha) {
        Swal.fire({
          title: `Error`,
          html: " <b>Incorrect Password</b> ",
        });
      }
    });
  }

  async function recuperarSenha() {
    const { value: emailRecovery } = await Swal.fire({
      title:
        "To recover the password, please input your registered e-mail address:",
      input: "email",
      inputPlaceholder: "Enter your registered e-mail address here",
    });

    const emailRecebido = emailRecovery;

    if (emailRecebido !== "") {
      buscarSenha(emailRecebido);
    }
  }

  const buscarSenha = (email: string) => {
    Axios.get(`http://localhost:3002/getSenha/${email}`).then((response) => {
      console.log(response.data);
      const senhaRecebida = response.data[0].senha_acesso;
      Swal.fire(
        `In a few minutes you must receive on your e-mail a message containing the recovered password.`
      );

      var templateParams = {
        email: email,
        senhaRecebida: senhaRecebida,
      };

      emailjs
        .send(
          "gmailMessage",
          "template_6lh0ahr",
          templateParams,
          "w4LxBZJlq08EuppL3"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    });
  };

  return (
    <div
      id="formL"
      className="corpoL"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <form
        action=""
        style={{ top: "35%", position: "relative" }}
        onSubmit={handleLogin}
      >
        <h1 className="text-center">
          <b>AirPlus: Landing Distance Calculator</b>
        </h1>
        <br />
        <input
          id="email"
          placeholder="Email"
          className="form-group col-lg-4 col-md-6 col-sm-12 text-center rounded"
          type="email"
          value={Email}
          onChange={receberEmail}
        />
        <br />
        <br />
        <input
          id="senha"
          placeholder="Password"
          className="form-group col-lg-4 col-md-6 col-sm-12 text-center rounded"
          type="password"
          value={Senha}
          onChange={receberSenha}
        />
        <br />
        <br />
        <button
          title="btn_logar"
          className="rounded btn btn-primary "
          type="submit"
          id="btn_logar"
          name="submitButton"
        >
          Login
        </button>
        <button
          title="btn_rec_senha"
          className="rounded btn btn-primary senha"
          type="button"
          id="btn_rec_senha"
          name="recButton"
          onClick={recuperarSenha}
        >
          Forgot the password?
        </button>
      </form>
    </div>
  );
};

export default Login;
