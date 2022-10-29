/* eslint-disable @typescript-eslint/no-unused-expressions */
import "../css/pagina-inicial.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { Tabela } from "./components/tabela";
import { Filtro } from "./components/filtro";

function PaginaInicial() {
  const history = useNavigate();
  
  return (
      <div className="App">
        <div id="divLogoAviao">
        <h2>
          <i>
            <img src="loguinho.png" id="logoAviaozinho" alt="some text" />
          </i>
        </h2>
      </div>

      <div className="card card-custom gutter-b">
          <div className="card-header">
            <h3 id="h3Pagina" className="card-title">Home Page</h3>
            <div className="card-toolbar">
            </div>
          </div>
          <div className="card-body col-md-12">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row">

                  <Filtro />
                  
                </div>
              </li>
            </ul>
          </div>

          <div className="card-footer w-100 float-right">

          {/* <button title="btnTelaCalc" className="btn btn-primary" onClick={() => {
          history('/Calculo');
          }}>Calculation</button> */}

            <a
              className="rounded btn btn-primary ml-2 float-right"
              href="http://localhost:3000/Calculo"
            >Calculate
            </a>
            <a
              className="rounded btn btn-primary ml-2 float-right"
              href="http://localhost:3000/Cadastrar"
            >Add User
            </a>            
            <a
              className="rounded btn btn-primary ml-2 float-right"
              href="http://localhost:3000/Criar"
            >Add Aircraft
            </a>

          </div>
        </div>
        {/*<footer>All Rights Reserved.</footer>*/}
      </div>
  );
}

export default PaginaInicial;
