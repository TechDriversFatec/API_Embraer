import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Axios from "axios";
import axios from "axios";
import { isConstructorDeclaration } from "typescript";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  const setData = (data) =>{
    let { id, certificacao, fabricante, modelo, motor, peso, reversor } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('Certificacao', certificacao);
    localStorage.setItem('Fabricante', fabricante);
    localStorage.setItem('Modelo', modelo);
    localStorage.setItem('Motor', motor);
    localStorage.setItem('Peso', peso);
    localStorage.setItem('Reversor', reversor);
  }
  useEffect(() => {
    axios.get(`https://6361b2f7af66cc87dc306632.mockapi.io/embraer/embraer`).then((response) => {
      setAPIData(response.data);
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
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.modelo}</Table.Cell>
                <Table.Cell>{data.fabricante}</Table.Cell>
                <Table.Cell>{data.reversor}</Table.Cell>
                <Table.Cell>{data.peso}</Table.Cell>
                <Link to="/Variavel">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
