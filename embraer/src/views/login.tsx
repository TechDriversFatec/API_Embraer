import React, { useState } from "react";
import "../css/CriarAeronaves2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import axios from "axios";
const Swal = require('sweetalert2')


const Login = () => {
    const [values, setValues] = useState(Object);

    const handleChangeValues = (value: any) => {
        setValues((prevValue: any) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    };

    const handleLogin = (values: any) => {
        console.log(values);
        Axios.get("http://localhost:3002/", {
            // email: values.email,
            // senha: values.senha,
            
        });
        Swal.fire({
            text: 'User registered successfully!',
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
            <form action="" style={{top: "35%", position: "relative"}}>
                <h1 className="text-center"><b>Login</b></h1>
                <br />
                <input id="email" placeholder="Email" className="form-group col-lg-4 col-md-6 col-sm-12 text-center rounded" type="email" onChange={handleChangeValues} />
                <br />
                <br />
                <input id="senha" placeholder="Password" className="form-group col-lg-4 col-md-6 col-sm-12 text-center rounded" type="password" onChange={handleChangeValues} />
                <br />
                <br />
                <button className="rounded btn btn-primary " type="submit" id="btn_logar" name="submitButton" onClick={() => handleLogin(values)}
                >Login</button>

            </form>
        </div>
    );
}

export default Login;