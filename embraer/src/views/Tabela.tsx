import { useEffect, useState } from "react";
import * as React from "react";
import { Table, Input, TableFooter } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IconButton, TablePagination } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Tooltip from "@mui/material/Tooltip";
import Swal from "sweetalert2";
import "../css/tabela.css";
//import { isConstructorDeclaration } from "typescript";

export default function Read() {
  const [listAeronaves, setlistAeronaves] = useState([]);
  const [searchInput, setsearchInput] = useState("");
  const [resultadoFiltrado, setresultadoFiltrado] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  const emptyRows: any = rowsPerPage - Math.min(rowsPerPage, listAeronaves.length - page * rowsPerPage);

  const searchItems = (searchValue) => {
    setsearchInput(searchValue);
    if (searchInput !== "") {
      const aeronaveFiltrada = listAeronaves.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setresultadoFiltrado(aeronaveFiltrada);
    } else {
      setresultadoFiltrado(listAeronaves);
    }
  };

  const setData = (data: any) => {
    let {
      id,
      fabricante,
      modelo,
      certificacao,
      motor,
      qtde_reversor,
      peso_referencial,
      peso_minimo,
      sobrepeso,
      peso_maximo,
    } = data;
    localStorage.setItem("Id", id);
    localStorage.setItem("Fabricante", fabricante);
    localStorage.setItem("Modelo", modelo);
    localStorage.setItem("Certificacao", certificacao);
    localStorage.setItem("Motor", motor);
    localStorage.setItem("Qtde Reversor", qtde_reversor);
    localStorage.setItem("Peso Referencial", peso_referencial);
    localStorage.setItem("Peso Minimo", peso_minimo);
    localStorage.setItem("Sobrepeso", sobrepeso);
    localStorage.setItem("Peso Maximo", peso_maximo);
  };

  useEffect(() => {
    axios.get(`http://localhost:3002/exibirAeronaves`).then((response) => {
      setlistAeronaves(response.data);
    });
  }, []);

  const getData = () => {
    axios.get(`http://localhost:3002/exibirAeronaves`).then((getData) => {
      setlistAeronaves(getData.data);
    });
  };

  const onDelete = (id: number) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to delete the aircraft?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3002/deleteAeronave/${id}`).then(() => {
          getData();
        });
        Swal.fire({
          title: "DELETED",
        });
      }
    });
  };

  return (
    <div>
      <div>
        <Input
          icon="search"
          placeholder="Search"
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Model</Table.HeaderCell>
            <Table.HeaderCell>Manufacturer</Table.HeaderCell>
            <Table.HeaderCell>Certification</Table.HeaderCell>
            <Table.HeaderCell>Motor</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {searchInput.length > 1
            ? resultadoFiltrado.map((data: any) => {
                let url = `/AtualizA/` + data.id;
                let url2 = `/Variavel/` + data.id;
                return (
                  <Table.Row>
                    <Table.Cell>{data.modelo}</Table.Cell>
                    <Table.Cell>{data.fabricante}</Table.Cell>
                    <Table.Cell>{data.certificacao}</Table.Cell>
                    <Table.Cell>{data.motor}</Table.Cell>
                    <Table.Cell>
                      <Link to={url2}>
                        <Tooltip title="Create">
                          <IconButton onClick={() => setData(data)}>
                            <AddIcon />
                          </IconButton>
                        </Tooltip>
                      </Link>
                      <Link to={url}>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => setData(data)}>
                            <AirplanemodeActiveIcon />
                          </IconButton>
                        </Tooltip>
                      </Link>
                      {/* <Link to="/Variavel">
                    <Button>
                      <FaCalculator />
                    </Button>
                  </Link> */}
                      <Tooltip title="Delete">
                        <IconButton onClick={() => onDelete(data.id)}>
                          <DeleteOutlineIcon />
                        </IconButton>
                      </Tooltip>
                    </Table.Cell>
                  </Table.Row>
                );
              })
            : listAeronaves.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data: any) => {
                let url = `/AtualizA/` + data.id;
                let url2 = `/Variavel/` + data.id;
                return (
                  <Table.Row>
                    <Table.Cell>{data.modelo}</Table.Cell>
                    <Table.Cell>{data.fabricante}</Table.Cell>
                    <Table.Cell>{data.certificacao}</Table.Cell>
                    <Table.Cell>{data.motor}</Table.Cell>
                    <Table.Cell>
                      <Link to={url2}>
                        <Tooltip title="Create">
                          <IconButton onClick={() => setData(data)}>
                            <AddIcon />
                          </IconButton>
                        </Tooltip>
                      </Link>
                      <Link to={url}>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => setData(data)}>
                            <AirplanemodeActiveIcon />
                          </IconButton>
                        </Tooltip>
                      </Link>
                      {/* <Link to="/Variavel">
                    <Button>
                      <FaCalculator />
                    </Button>
                  </Link> */}
                      <Tooltip title="Delete">
                        <IconButton onClick={() => onDelete(data.id)}>
                          <DeleteOutlineIcon />
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
            count={listAeronaves.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </div>
  );
}
