import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  FaPlus,
  FaPlaneArrival,
  FaCalculator,
  FaTrashAlt,
} from "react-icons/fa";
import UpdateAeronaves from "./Update-Aeronave";
import { ModelTrainingOutlined } from "@mui/icons-material";
import { Tooltip } from "react-bootstrap";
import { IconButton } from "@mui/material";
import Swal from "sweetalert2";

//import {PlusCircleOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
//import { isConstructorDeclaration } from "typescript";

export default function Read() {
  const [listAeronaves, setlistAeronaves] = useState([]);
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
          {listAeronaves.map((data: any) => {
            let url = `/AtualizA/` + data.id;
            return (
              <Table.Row>
                <Table.Cell>{data.modelo}</Table.Cell>
                <Table.Cell>{data.fabricante}</Table.Cell>
                <Table.Cell>{data.certificacao}</Table.Cell>
                <Table.Cell>{data.motor}</Table.Cell>
                <Table.Cell>
                  <Link to="/Variavel/">
                    <IconButton>
                    <Tooltip title="Variavel">
                      <FaPlus />
                    </Tooltip>
                    </IconButton>
                  </Link>
                  <Link to={url}>
                  <Button onClick={() => setData(data)}>
                    <FaPlaneArrival />
                  </Button>
                  </Link>
                  <Link to="/Variavel">
                    <Button>
                      <FaCalculator />
                    </Button>
                  </Link>
                  <Button onClick={() => onDelete(data.id)}>
                    <FaTrashAlt />
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
