import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import "./Modal.css";
import axios from "axios";
import Swal from "sweetalert2";

function Modal({ closeModal }) {
  const [ListVariaveis, setListVariaveis] = useState([]);
  const [FlapId, setFlapId] = useState(null);
  const [Flap, setFlap] = useState("");
  const [Gelo, setGelo] = useState("");

  useEffect(() => {
    setFlapId(localStorage.getItem("FlapId"));
    setFlap(localStorage.getItem("Flap"));
    setGelo(localStorage.getItem("Gelo"));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/exibirVariavel/${FlapId}`)
      .then((response) => {
        setListVariaveis(response.data);
      });
  });

  const getData = () => {
    axios
      .get(`http://localhost:3002/exibirVariavel/${FlapId}`)
      .then((getData) => {
        setListVariaveis(getData.data);
      });
  };

  const onDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to delete this set of variables?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3002/deleteVariavel/${id}`).then(() => {
          getData();
        });
        Swal.fire({
          title: "Variables successfully deleted!",
        });
      }
    });
  };

  function trocaFreio(data) {
    if (data === 1) {
      data = "Max. Manual";
    } else if (data === 2) {
      data = "High";
    } else if (data === 3) {
      data = "Medium";
    } else if (data === 4) {
      data = "Low";
    }
    return data;
  }

  function trocaPista(data) {
    if (data === 1) {
      data = "Ice";
    } else if (data === 2) {
      data = "Standing, Water, Slush";
    } else if (data === 3) {
      data = "Loose Snow";
    } else if (data === 4) {
      data = "Compact snow";
    } else if (data === 5) {
      data = "Wet";
    } else if (data === 6) {
      data = "Dry";
    }
    return data;
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="title">
          <h1>{Flap}</h1>
        </div>
        <div className="body">
          <Table singleLine>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Break Config.</Table.HeaderCell>
                <Table.HeaderCell>Runaway Condition</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {ListVariaveis.map((data) => {
                console.log(data.id)
                return (
                  <Table.Row>
                    <Table.Cell>
                      {trocaFreio(data.configuracao_freio)}
                    </Table.Cell>
                    <Table.Cell>{trocaPista(data.condicao_pista)}</Table.Cell>
                    <Table.Cell>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => onDelete(data.id)}>
                          <DeleteOutlineIcon />
                        </IconButton>
                      </Tooltip>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
