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

  const [listAeronaves, setlistAeronaves] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3002/exibirAeronaves`).then((response) => {
      setlistAeronaves(response.data);
    });
  }, []);

  type Flap = {
    id: number,
    tipo_flap: string,
    configuracao_freio: string,
    condicao_pista: number
  }

  const [flaps, setFlaps] = useState<Flap[]>([]);
  

  // async function modalSeleciona() {
  //   const { value: fruit } = await Swal.fire({
  //     title: "Select field validation",
  //     input: "select",
  //     inputOptions: {
  //       APIData
  //     },
  //     inputPlaceholder: "Select a fruit",
  //     showCancelButton: true,
  //     inputValidator: (value: any) => {
  //       return new Promise((resolve) => {
  //         if (value === "oranges") {
  //           resolve();
  //         } else {
  //           resolve("You need to select oranges :)");
  //         }
  //       });
  //     },
  //   });

  //   if (fruit) {
  //     Swal.fire(`You selected: ${fruit}`);
  //   }
  // }

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
          {listAeronaves.map((data: any) => {
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
