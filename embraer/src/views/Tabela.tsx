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
import { url } from "inspector";

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
    id: number;
    tipo_flap: string;
    configuracao_freio: string;
    condicao_pista: number;
  };

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

  // function PegaId() {
  //   var html = listAeronaves.map((data: any) => {
  //     let id = data.id
  //     html = `/Atualiza/${id}`
  //     return html
  //   })
  //   return (
  //     <>
  //       <Link to="/Variavel/">
  //         <Button>
  //           <FaPlus />
  //         </Button>
  //       </Link>
  //       <Link to={html.toString()}>
  //         <Button>
  //           <FaPlaneArrival />
  //         </Button>
  //       </Link>
  //       <Link to="/Variavel">
  //         <Button>
  //           <FaCalculator />
  //         </Button>
  //       </Link>
  //       <Link to="/Variavel">
  //         <Button>
  //           <FaTrashAlt />
  //         </Button>
  //       </Link>
  //     </>
  //   )
  // }

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
            return (
              <Table.Row>
                <Table.Cell>{data.modelo}</Table.Cell>
                <Table.Cell>{data.fabricante}</Table.Cell>
                <Table.Cell>{data.certificacao}</Table.Cell>
                <Table.Cell>{data.motor}</Table.Cell>
                <Table.Cell>
                  <PegaId />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
