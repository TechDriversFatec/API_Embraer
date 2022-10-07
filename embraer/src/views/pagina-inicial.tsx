/* eslint-disable @typescript-eslint/no-unused-expressions */
import "../css/pagina-inicial.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "../controller/tabela";
import { Container } from "react-bootstrap";

function PaginaInicial() {
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
            <h3 id="h3Pagina" className="card-title">Página inical</h3>
            <div className="card-toolbar">
            </div>
          </div>
          <div className="card-body col-md-12">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row">
                  <h4 id="h3AirplaneConfig">Airplane Configurations</h4>

                  <Table />
                  
                </div>
              </li>




              <li className="list-group-item">
                <div className="row">
                <h4 id="h3AirplaneConfig">Landing Configurations</h4>
                  
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

        
        
        <footer>Todos os direitos reservados.</footer>
      </div>
  );
}

export default PaginaInicial;
