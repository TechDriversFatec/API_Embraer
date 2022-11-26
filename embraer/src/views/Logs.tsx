import { useEffect, useState } from "react";
import * as React from "react";
import { Table, Input, TableFooter } from "semantic-ui-react";
import axios from "axios";
import { IconButton, TablePagination } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from "@mui/material/Tooltip";
import "../css/tabela.css";
import ModalLogs from "./components/ModalLogs";

type Log = {
  id: number,
  aeronave: string,
  motor: string,
  certificacao: string,
  flap: string,
  condicaoPista: string,
  tipoFrenagem: number,
  pesoPouso: string,
  altitude: string,
  temperatura: string,
  vento: string,
  inclinacao: string,
  overspeed: string,
  reversoresInoperantes: string,
  dataCalculo: string,
  resultado_calculo: string,
  usuario: string
}

export default function Logs() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [searchInput, setsearchInput] = useState("");
  const [logFiltrado, setLogFiltrado] = useState<Log[]>([]);
  const [resultadoFiltrado, setresultadoFiltrado] = useState<Log[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  debugger
  const [openModal, setOpenModal] = useState(false);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows: any = rowsPerPage - Math.min(rowsPerPage, logs.length - page * rowsPerPage);

  const searchItems = (searchValue) => {
    setsearchInput(searchValue);
    if (searchInput !== "") {
      const logFiltrado = logs.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setresultadoFiltrado(logFiltrado);
    } else {
      setresultadoFiltrado(logs);
    }
  };

  function dataEModal(data: any){
    setData(data)
    setOpenModal(true)
  }

  const setData = (data: any) => {
    let {
      usuario,
      aeronave,
      dataCalculo,
      resultado_calculo,
    } = data;
    localStorage.setItem("Usuario", usuario);
    localStorage.setItem("Modelo", aeronave);
    localStorage.setItem("Data Calculo", dataCalculo);
    localStorage.setItem("Resultado Calculo", resultado_calculo);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3002/getLogs')
      .then((response) => {
        const data = response.data;
        console.log("useEffect 1 Rodou");
        setLogs(data);
        console.log(data);
      });
  }, []);

  console.log(logs);
  return (

    <div>
      
      <div className="card card-custom gutter-b">
        <div className="card-header">
          <h3 id="h3Pagina" className="card-title">Calculating Logs</h3>
          <div className="card-toolbar">
          </div>
        </div>
        <div className="card-body col-md-12">
          <div className="row">

            <div>
              <Input
                icon="search"
                placeholder="Search"
                onChange={(e) => searchItems(e.target.value)}
              />
            </div>
            <div>{openModal && <ModalLogs closeModal={setOpenModal}/>}</div>
            <Table singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Username</Table.HeaderCell>
                  <Table.HeaderCell>Aircraft Model</Table.HeaderCell>
                  <Table.HeaderCell>Landing Date</Table.HeaderCell>
                  <Table.HeaderCell>Result</Table.HeaderCell>
                  <Table.HeaderCell>Details</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {searchInput.length > 1
                  ? resultadoFiltrado.map((data: any) => {
                    let url = `/AtualizA/` + data.id;
                    let url2 = `/Variavel/` + data.id;
                    return (
                      
                      <Table.Row>
                        <Table.Cell>{data.usuario}</Table.Cell>
                        <Table.Cell>{data.aeronave}</Table.Cell>
                        <Table.Cell>{data.dataCalculo}</Table.Cell>
                        <Table.Cell>{data.resultado_calculo}</Table.Cell>
                        <Table.Cell>
                          <Tooltip title="Details">
                            <IconButton onClick={() => dataEModal(data)}>
                              <InfoOutlinedIcon />
                            </IconButton>
                          </Tooltip>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })
                  
                  : logs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data: any) => {
                    let url = `/AtualizA/` + data.id;
                    let url2 = `/Variavel/` + data.id;
                    return (
                      
                      <Table.Row>
                        
                        <Table.Cell>{data.usuario}</Table.Cell>
                        <Table.Cell>{data.aeronave}</Table.Cell>
                        <Table.Cell>{data.dataCalculo}</Table.Cell>
                        <Table.Cell>{data.resultado_calculo}</Table.Cell>
                        <Table.Cell>
                          <Tooltip title="Details">
                            <IconButton onClick={() => dataEModal(data)}>
                              <InfoOutlinedIcon />
                            </IconButton>
                          </Tooltip>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                {emptyRows > 0 && (
                  <Table.Row style={{ height: 53 * emptyRows }}>
                    <Table.Cell colSpan={6} />
                  </Table.Row>
                )}
              </Table.Body>
              
              <TableFooter>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 20]}
                  component="div"
                  count={logs.length}
                  page={page}
                  onPageChange={handleChangePage}
                  rowsPerPage={rowsPerPage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableFooter>
            </Table>
          </div>
        </div>
      </div>
    </div>

  );
}
