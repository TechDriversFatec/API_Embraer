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

        <Container>
        <Table />
        </Container>
        
        <footer>Todos os direitos reservados.</footer>
      </div>
  );
}

export default PaginaInicial;
