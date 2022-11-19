import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";
import axios from "axios";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useEffect, useState } from "react";

export default function TabelaFlap() {
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

  const [listFlaps, setlistFlaps] = useState([]);

  return (
    <div>
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
            return (
              <Table.Row>
                <Table.Cell>{data.tipo_flap}</Table.Cell>
                <Table.Cell>{data.gelo}</Table.Cell>
                <Table.Cell>
                  <Tooltip title="Create">
                    <IconButton>
                      <AddIcon />
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
