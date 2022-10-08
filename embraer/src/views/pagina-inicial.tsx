/* eslint-disable @typescript-eslint/no-unused-expressions */
import "../css/pagina-inicial.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "../controller/tabela";
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function PaginaInicial() {
  const history = useNavigate();
  
  return (
      <div className="App">
        <div>
        <h2>
          <i>
            <img src="loguinho.png" id="logoAviaozinho" alt="some text" />
          </i>
        </h2>
      </div>

      <div className="card card-custom gutter-b">
          <div className="card-header">
            <h3 id="h3Pagina" className="card-title">Página inicial</h3>
            <div className="card-toolbar">
            </div>
          </div>
          <div className="card-body col-md-12">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row">

                  <Table />
                  
                </div>
              </li>
            </ul>
          </div>

          <div className="card-footer w-100 float-right">

            <input
              className="rounded btn btn-primary ml-2 float-right"
              type="submit"
              id="btn_calcular"
              name="submitButton"
              value="calcular"
            >
            </input>
          </div>
        </div>

        
        <div>
          <button title="btnTelaCalc" className="btn btn-primary" onClick={() => {
          history('/Calculo');
          }}>Cálculo</button>
        </div>
        <footer>Todos os direitos reservados.</footer>
      </div>
  );
}

export default PaginaInicial;
