import "../css/pagina-inicial.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react"
import Table from 'react-bootstrap/Table';
import PesquisarTabela from "../controller/filtro";
import Tabela from "../controller/tabela";


class PaginaInicial extends Component{
    render(){
        return (
            <div className="App">
              <div>
                <h2>
                    Gerenciar informações
                </h2>
              </div>
              <Tabela />
              <div>
                <button
                  className="rounded"
                  type="submit"
                  id="btn_calcular"
                  name="submitButton"
                >
                  <b>Registrar Aeronave</b>
                </button>
                <input hidden placeholder="register" type="text" id="registrarAeronave"/>
              </div>
              <script src="../compile/build/app.js"></script>
            </div>
          );
    }
  }

  export default PaginaInicial