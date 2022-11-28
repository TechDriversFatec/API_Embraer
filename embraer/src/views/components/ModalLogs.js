import React from "react";
import { Table } from "semantic-ui-react";
import { useEffect, useState } from "react";
import "./Modal.css";
import axios from "axios";
import Logs from "../Logs";

{/*Log = {
    id: number,
    aeronave_id: string,
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
  }*/}

function ModalLogs({ closeModal }) {
    const [logs, setLogs] = useState([]);
    const [Usuario, setUsuario] = useState("")
    const [IdDetalhes, setIdDetalhes] = useState(null)

  useEffect(() => {
    setUsuario(localStorage.getItem("Usuario"));
    setIdDetalhes(localStorage.getItem("IdDetalhes"))
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/details/${IdDetalhes}`)
      .then((response) => {
        setLogs(response.data);
      });
  });

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>Details</h1>
        </div>
        <div className="body">
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Landing Weight (Kg):</Table.HeaderCell>
                <Table.HeaderCell>Aircraft Altitude (Ft):</Table.HeaderCell>
                <Table.HeaderCell>Temperature ISA (°C):</Table.HeaderCell>
                <Table.HeaderCell>Wind (Kt):</Table.HeaderCell>
                <Table.HeaderCell>Slope:</Table.HeaderCell>
                <Table.HeaderCell>Vap Overspeed (Kt):</Table.HeaderCell>
                <Table.HeaderCell>Thrust Reverser:</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

              {logs.map((data) => {
                return(
                  <Table.Body>
                  <Table.Row>
                    <Table.Cell>{data.pesoPouso}</Table.Cell>
                    <Table.Cell>{data.altitude}</Table.Cell>
                    <Table.Cell>{data.temperatura}</Table.Cell>
                    <Table.Cell>{data.vento}</Table.Cell>
                    <Table.Cell>{data.inclinacao}</Table.Cell>
                    <Table.Cell>{data.overspeed}</Table.Cell>
                    <Table.Cell>{data.reversoresInoperantes}</Table.Cell>
                  </Table.Row>
            </Table.Body>
                )
              })}
            
          </Table>
        </div>
        <div className="footer">
              <button onClick={() => closeModal(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ModalLogs;