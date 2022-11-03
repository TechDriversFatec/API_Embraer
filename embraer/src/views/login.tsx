import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CriarAeronaves2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import axios from "axios";
import swal from "sweetalert";
const Swal = require('sweetalert2')


const Login = () => {
    const navigate = useNavigate()

    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");

    function receberEmail(evento: any){
        let entrada = evento.target.value;
        setEmail(entrada)
      }
      
    function receberSenha(evento: any){
    let entrada = evento.target.value;
    setSenha(entrada)
    }

    let params = {
        email: Email,
        senha: Senha,
    }

    function handleLogin (values: any) {
        console.log(params);
        values.preventDefault();
        debugger
        Axios.get(`http://localhost:3002/getUsuarios/${params.email}`, {
            params:{params}
            
        })
        .then((response) => {
            const data = response.data;
            if(data.senha === params.senha){
                if(data.nivel_acesso === 1){
                    navigate("/Index")
                }
                navigate("/Calculo")
            }
            else if(data.senha !== params.senha){
                Swal.fire({
                    title: `Error`,
                    html:
                      ' <b>Incorrect Password</b> '
                })
            }
            else{
                Swal.fire({
                    title: `Error`,
                    html:
                      ' <b>User not found</b> '
                })
            }
          });
        return Swal.fire({
            title: `Error`,
            html:
              ' <b>User not found</b> '
        })
    };

    return (
        <div id="formL" className="corpoL" style={{ 
            backgroundImage: `url("https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh' , 
            textAlign: "center",
        }}>
            <form action="" style={{top: "35%", position: "relative"}} onSubmit={handleLogin}>
                <h1 className="text-center"><b>Login</b></h1>
                <br />
                <input id="email" placeholder="Email" className="form-group col-lg-4 col-md-6 col-sm-12 text-center rounded" type="email" value={Email} onChange={receberEmail} />
                <br />
                <br />
                <input id="senha" placeholder="Password" className="form-group col-lg-4 col-md-6 col-sm-12 text-center rounded" type="password" value={Senha} onChange={receberSenha} />
                <br />
                <br />
                <button title="btn_logar" className="rounded btn btn-primary " type="submit" id="btn_logar" name="submitButton"
                >Login</button>

            </form>
        </div>
    );
}

export default Login;