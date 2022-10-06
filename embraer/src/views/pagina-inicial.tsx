/* eslint-disable @typescript-eslint/no-unused-expressions */
import "../css/pagina-inicial.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "../controller/tabela";

function PaginaInicial() {
  return (
      <div className="App">
        <Table />
      </div>
  );
}

export default PaginaInicial;
