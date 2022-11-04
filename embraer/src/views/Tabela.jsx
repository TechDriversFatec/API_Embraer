import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Axios from "axios";
import axios from "axios";
import { isConstructorDeclaration } from "typescript";

export default function Read() {

  const [listAeronaves, setlistAeronaves] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3002/exibirAeronaves`).then((response) => {
      setlistAeronaves(response.data);
    });
  }, []);

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Model</Table.HeaderCell>
            <Table.HeaderCell>Manufacturer</Table.HeaderCell>
            <Table.HeaderCell>Reversers</Table.HeaderCell>
            <Table.HeaderCell>Weight</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {listAeronaves.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.modelo}</Table.Cell>
                <Table.Cell>{data.fabricante}</Table.Cell>
                <Table.Cell>{data.qtde_reversor}</Table.Cell>
                <Table.Cell>{data.peso_referencial}</Table.Cell>
                <Link to="/Criar">
                  <Table.Cell>
                    <Button>Update</Button>
                  </Table.Cell>
                </Link>
              </Table.Row>
            );
          })};
        </Table.Body>
      </Table>
    </div>
  );
};
