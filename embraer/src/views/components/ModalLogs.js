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

  useEffect(() => {
    setLogs(localStorage.getItem("Logs"));
    setUsuario(localStorage.getItem("Usuario"));
    // localStorage.setItem("Modelo", aeronave);
    // localStorage.setItem("Data Calculo", dataCalculo);
    // localStorage.setItem("Resultado Calculo", resultado_calculo);
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/getLogs/${Logs}`)
      .then((response) => {
        setLogs(response.data);
      });
  });

  const getData = () => {
    axios
      .get(`http://localhost:3002/getLogs/${Logs}`)
      .then((getData) => {
        setLogs(getData.data);
      });
  };

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

            <Table.Body>
              {console.log(Usuario)}
                  <Table.Row>
                    <Table.Cell>teste</Table.Cell>
                    <Table.Cell>teste</Table.Cell>
                    <Table.Cell>teste</Table.Cell>
                    <Table.Cell>teste</Table.Cell>
                    <Table.Cell>teste</Table.Cell>
                    <Table.Cell>teste</Table.Cell>
                    <Table.Cell>teste</Table.Cell>
                  </Table.Row>
            </Table.Body>
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