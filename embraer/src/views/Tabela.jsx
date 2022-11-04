import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaPlus,
  FaPlaneArrival,
  FaCalculator,
  FaTrashAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";

//import {PlusCircleOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons';
//import { isConstructorDeclaration } from "typescript";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  const setData = (data) => {
    let { id, certificacao, fabricante, modelo, motor, peso, reversor } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Certificacao", certificacao);
    localStorage.setItem("Fabricante", fabricante);
    localStorage.setItem("Modelo", modelo);
    localStorage.setItem("Motor", motor);
    localStorage.setItem("Peso", peso);
    localStorage.setItem("Reversor", reversor);
  };
  useEffect(() => {
    axios
      .get(`https://6361b2f7af66cc87dc306632.mockapi.io/embraer/embraer`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  async function modalSeleciona() {
    const { value: fruit } = await Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: {
        APIData
      },
      inputPlaceholder: "Select a fruit",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === "oranges") {
            resolve();
          } else {
            resolve("You need to select oranges :)");
          }
        });
      },
    });

    if (fruit) {
      Swal.fire(`You selected: ${fruit}`);
    }
  }

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Model</Table.HeaderCell>
            <Table.HeaderCell>Manufacturer</Table.HeaderCell>
            <Table.HeaderCell>Reversers</Table.HeaderCell>
            <Table.HeaderCell>Weight</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
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
                <Table.Cell>
                  <Link to="/Variavel">
                    <Button onClick={() => setData(data)}>
                      <FaPlus />
                    </Button>
                  </Link>
                  <Link to="/Criar">
                    <Button onClick={() => setData(data)}>
                      <FaPlaneArrival />
                    </Button>
                  </Link>
                  <Button onClick={modalSeleciona}>
                    <FaCalculator />
                  </Button>
                  <Link to="/Variavel">
                    <Button onClick={() => setData(data)}>
                      <FaTrashAlt />
                    </Button>
                  </Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
