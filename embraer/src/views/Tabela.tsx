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

//import {PlusCircleOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
//import { isConstructorDeclaration } from "typescript";

export default function Read() {
  const [listAeronaves, setlistAeronaves] = useState([]);

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
            let url = `/AtualizA/${data.id}`;
            return (
              <Table.Row>
                <Table.Cell>{data.modelo}</Table.Cell>
                <Table.Cell>{data.fabricante}</Table.Cell>
                <Table.Cell>{data.certificacao}</Table.Cell>
                <Table.Cell>{data.motor}</Table.Cell>
                <Table.Cell>
                  <Link to="/Variavel/">
                    <Button>
                      <FaPlus />
                    </Button>
                  </Link>
                  <Link to={url}>
                  <Button>
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
