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

        <Container>
        <Table />
        </Container>
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
