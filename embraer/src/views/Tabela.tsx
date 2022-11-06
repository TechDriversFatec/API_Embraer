import React, { useEffect, useState } from "react";
import { Table, Input } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import UpdateAeronaves from "./Update-Aeronave";
import { ModelTrainingOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Tooltip from '@mui/material/Tooltip';
import Swal from "sweetalert2";
//import { isConstructorDeclaration } from "typescript";

export default function Read() {
  const [listAeronaves, setlistAeronaves] = useState([]);
  const [searchInput, setsearchInput] = useState('');
  const [resultadoFiltrado, setresultadoFiltrado] = useState([])

  const searchItems = (searchValue) => {
    setsearchInput(searchValue)
    if(searchInput !== ''){
      const aeronaveFiltrada = listAeronaves.filter((item) => {
        return Object.values(item).join(' ').toLowerCase().includes(searchInput.toLowerCase())
      })
      setresultadoFiltrado(aeronaveFiltrada)
    } else {
      setresultadoFiltrado(listAeronaves)
    }
  }

  const setData = (data: any) => {
    let { id, fabricante, modelo, certificacao, motor, qtde_reversor, peso_referencial, peso_minimo, sobrepeso, peso_maximo } = data;
    localStorage.setItem('Id', id)
    localStorage.setItem('Fabricante', fabricante)
    localStorage.setItem('Modelo', modelo)
    localStorage.setItem('Certificacao', certificacao)
    localStorage.setItem('Motor', motor)
    localStorage.setItem('Qtde Reversor', qtde_reversor)
    localStorage.setItem('Peso Referencial', peso_referencial)
    localStorage.setItem('Peso Minimo', peso_minimo)
    localStorage.setItem('Sobrepeso', sobrepeso)
    localStorage.setItem('Peso Maximo', peso_maximo)
  }

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
    axios.delete(`http://localhost:3002/deleteAeronave/${id}`).then(() => {
      getData();
    });
    Swal.fire({
      text: "Aircraft deleted successfully!",
    });
  };


  console.log(listAeronaves);
  return (
    <div>
      <div>
        <Input icon="search"
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
          {searchInput.length > 1 ? (
            resultadoFiltrado.map((data: any) => {
            let url = `/AtualizA/` + data.id;
              return(
                <Table.Row>
                <Table.Cell>{data.modelo}</Table.Cell>
                <Table.Cell>{data.fabricante}</Table.Cell>
                <Table.Cell>{data.certificacao}</Table.Cell>
                <Table.Cell>{data.motor}</Table.Cell>
                <Table.Cell>
                  <Link to="/Variavel">
                    <Tooltip title="Create">
                      <IconButton>
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
              )
            })
          ) : (
            listAeronaves.map((data: any) => {
            let url = `/AtualizA/` + data.id;
              return (
                <Table.Row>
                <Table.Cell>{data.modelo}</Table.Cell>
                <Table.Cell>{data.fabricante}</Table.Cell>
                <Table.Cell>{data.certificacao}</Table.Cell>
                <Table.Cell>{data.motor}</Table.Cell>
                <Table.Cell>
                  <Link to="/Variavel">
                    <Tooltip title="Create">
                      <IconButton>
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
              )
            })
          )}
            
        </Table.Body>

        
      </Table>
    </div>
  );
}
