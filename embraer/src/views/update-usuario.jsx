import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateUsuario() {
    const navigate = useNavigate()

    const showError = (input, message) => {
        const formField = input.parentElement;
        formField.classList.remove('success');
        formField.classList.add('error');

        const error = formField.querySelector('small');
        error.textContent = message;
      };
      
      const showSuccess = (input) => {
        // get the form-field element
        const formField = input.parentElement;
    
        // remove the error class
        formField.classList.remove('error');
        formField.classList.add('success');
    
        // hide the error message
        const error = formField.querySelector('small');
        error.textContent = '';
      }

        const showErro = (select, message) => {
        const formField = select.parentElement;
        formField.classList.remove('success');
        formField.classList.add('error');
        const error = formField.querySelector('small');
        error.textContent = message;
          }
    
          const showSucesso = (select) => {
            const formField = select.parentElement;
            formField.classList.remove('error');
            formField.classList.add('success');
            const error = formField.querySelector('small');
            error.textContent = '';
          }

            
          


    function manipularEnvio(evento){
        evento.preventDefault()
        let NomeValido = validaNome(),
          EmailValido = validaEmail(),
          SenhaValido = validaSenha(),
          NivelUsuarioValido = validaNivelUsuario()

      
          let formularioValido = NomeValido &&
          EmailValido &&
          SenhaValido &&
          NivelUsuarioValido
          
      
        if(formularioValido){
            const url = window.location.pathname;
            const id = url.split('/')[2]

          Axios.put(`http://localhost:3002/updateUser/${id}`, {
        nivel_acesso: (document.getElementById('NivelUsuario')).options[(document.getElementById('NivelUsuario')).selectedIndex].value,
        senha_acesso: (document.getElementById('senha_acesso')).value,
        nome: (document.getElementById('nome')).value,
        email: (document.getElementById('email')).value,
        
        
        });
        Swal.fire({
            title: 'User updated successfully!',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ok!'
        }).then((result) => {
            if (result.isConfirmed)
            navigate('/Users')
        })
        
        
        }
      }
        const ehNome = (valor) => {
            const expressao = new RegExp("[A-Z][a-z]")
            return expressao.test(valor)            
        }

        const ehEmail = (valor) => {
            const expressao = new RegExp("[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-Za-z]")
            return expressao.test(valor)
        }
        const ehSenha = (valor) => {
            const expressao = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
            return expressao.test(valor)
        }
        const ehNivel = (valor) => {
            const expressao = new RegExp ("[0-9]")
            return expressao.test(valor)
        }

        function validaNome(){
        const idNome = document.getElementById("nome")
        let valido = false;
        
        if(!ehNome(String(Nome))){
            showError(idNome, `please, enter a name in a valid format!`)
        } else if (idNome === null){
            showError(idNome, `name is mandatory`)
        }
         else {
            showSuccess(idNome)
            valido = true;
        }
        return valido
        }
        
        function validaEmail(){
        const idEmail = document.getElementById("email")
        let valido = false;
        
        if(!ehEmail(String(Email))){
            showError(idEmail, `please, enter an email in a valid format!`)
        } else if (idEmail === null){
            showError(idEmail, `Email is mandtory`)
        }
         else {
            showSuccess(idEmail)
            valido = true;
        }
        return valido
        }
        
        function validaSenha(){
        const idSenha = document.getElementById("senha_acesso")
        let valido = false;
        
        if(!ehSenha(String(Senha))){
            showError(idSenha, `password must contain 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character`)
        } else if (idSenha === null){
            showError(idSenha, `password is mandtory`)
        }
         else {
            showSuccess(idSenha)
            valido = true;
        }
        return valido
        }
            
        function validaNivelUsuario(){
        const idNivel = document.getElementById("NivelUsuario")
        let valido = false;
        
        if(!ehNivel(String(NivelUsuario))){
            showErro(idNivel, `user level is mandatory`)
        } else {
            showSucesso(idNivel)
            valido = true;
        }
        return valido
        }
        
        function receberNome(evento){
        let entrada = evento.target.value;
        setNome(entrada)
        }
        
        function receberEmail(evento){
        let entrada = evento.target.value;
        setEmail(entrada)
        }
        
        function receberSenha(evento){
        let entrada = evento.target.value;
        setSenha(entrada)
        }
            
        function receberNivelUsuario(evento){
        let entrada = evento.target.value;
        setNivelUsuario(entrada)
        }
        
        const[eye,seteye]=useState(true);
        const[type,settype]=useState(false);
        const [NivelUsuario, setNivelUsuario] = useState("");
        const [Senha, setSenha] = useState("password");
        const [Nome, setNome] = useState("");
        const [Email, setEmail] = useState("");

        const Eye=()=>{
            if(Senha=="password"){
                setSenha("text");
                seteye(false);
                settype(true);
            }
            else{
                setSenha("password");
                seteye(true);
                settype(false);
            }
        }
        
        useEffect(() => {
            setNivelUsuario(localStorage.getItem('userNivelAcesso'));
            setSenha(localStorage.getItem('userSenha'))
            setNome(localStorage.getItem('userNome'))
            setEmail(localStorage.getItem('userEmail'))
          }, [])
    return (
        <div className="CriarUsuario">
            {/* <div>
                <i><img className="logoAviaoCriar" src="loguinho.png" id="logoAviaozinho" alt="some text" /></i>
            </div> */}
            <form id="form_criar_aeronave" onSubmit={manipularEnvio}>
                <div className="card card-custom gutter-b">
                    <div className="card-header">
                        <h3 id="h3Criar" className="card-title">User Update</h3>
                        <div className="card-toolbar">
                        </div>
                    </div>
                    <div className="card-body col-md-12">
                        <div className="row">
                            <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                <label>Username:</label>
                                <input id="nome" className="form-control" name="nome" value={Nome} onChange={ receberNome } />
                                <small></small>
                            </div>
                            <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                <label>Email:</label>
                                <input id="email" className="form-control" name="email" value={Email} onChange={receberEmail} />
                                <small></small>
                            </div>
                            <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                <label>Password:</label>
                                <input id="senha_acesso" type="password" className="form-control" name="senha_acesso" value={Senha} placeholder="password max length = 15"onChange={receberSenha} />
                                <i className="fa fa-eye password-icon"></i>
                                <small></small>
                            </div>
                            <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                <label>User Level:</label>
                                    <select title="nivel_acesso" id="NivelUsuario" className="form-control" name="nivel_acesso" value={NivelUsuario} onChange={receberNivelUsuario}>
                                        <option value="" selected disabled>Select</option>
                                        <option value="1">Administrator</option>
                                        <option value="2">User</option>
                                    </select> 
                                    <small></small>
                            </div>
                        </div>
                    </div>
                        <div className="card-footer w-100 float-right">
                            <a className="rounded btn btn-primary ml-2 float-start" href="http://localhost:3000/Users">
                                <b>Return</b>
                            </a>
                            <button className="rounded btn btn-primary ml-2 float-end" type="submit" id="btn_registrar" name="submitButton">
                                <b>Save</b></button>
                        </div>
                </div>
            </form>

                <script src="../compile/build/Cadastro-usuario.js"></script>
        </div>
    );
};

export default UpdateUsuario
 