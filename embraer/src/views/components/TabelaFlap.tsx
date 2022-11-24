import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";
import axios from "axios";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function TabelaFlap() {
  const [openModal, setOpenModal] = useState(false);
  const [listFlaps, setlistFlaps] = useState([]);

  const id = window.location.href.split("/")[4];
  useEffect(() => {
    axios.get(`http://localhost:3002/exibirFlap/${id}`).then((response) => {
      setlistFlaps(response.data);
    });
  }, []);

  const getData = () => {
    axios.get(`http://localhost:3002/exibirFlap/${id}`).then((getData) => {
      setlistFlaps(getData.data);
    });
  };

  function modalEData(data: any){
    setData(data)
    setOpenModal(true);
  };

  const setData = (data: any) => {
    let { flap_id, tipo_flap, gelo } = data;
    localStorage.setItem("FlapId", flap_id);
    localStorage.setItem("Flap", tipo_flap);
    localStorage.setItem("Gelo", gelo);
  };
  
  const onDelete = (id: number) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to delete the aircraft?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3002/deleteFlap/${id}`).then(() => {
          getData();
        });
        Swal.fire({
          title: "Aircraft successfully deleted!",
        });
      }
    });
  };

  function mudaGelo(data) {
    if (data === "1") {
      data = "With";
    } else {
      data = "Without";
    }
    return data;
  }

  return (
    <div>
      <div>{openModal && <Modal closeModal={setOpenModal} />}</div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Gelo</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {listFlaps.map((data: any) => {
            console.log(typeof data.flap_id);
            let url = `/Variavel/` + data.id;

            return (
              <Table.Row>
                <Table.Cell>{data.tipo_flap}</Table.Cell>
                <Table.Cell>{mudaGelo(data.gelo)}</Table.Cell>
                <Table.Cell>
                  <Link to={url}>
                    <Tooltip title="Create">
                      <IconButton onClick={() => setData(data)}>
                        <AddIcon />
                      </IconButton>
                    </Tooltip>
                  </Link>
                  <Tooltip title="Variaveis">
                    <IconButton onClick={() => modalEData(data)}>
                      <NoteAltOutlinedIcon />
                    </IconButton>
                  </Tooltip>
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
  );
}
