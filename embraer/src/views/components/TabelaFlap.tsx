import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Swal from "sweetalert2";
import axios from "axios";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function TabelaFlap() {
  const onDelete = (id: number) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to delete the aircraft?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      //   if (result.isConfirmed) {
      //     axios.delete(`http://localhost:3002/deleteAeronave/${id}`).then(() => {
      //       getData();
      //     });
      //     Swal.fire({
      //       title: "DELETED",
      //     });
      //   }
      Swal.fire({
        title: "DELETED",
      });
    });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          
              <Table.Row>
                <Table.Cell>NOME</Table.Cell>
                <Table.Cell>
                    <Tooltip title="Create">
                      <IconButton>
                        <AddIcon />
                      </IconButton>
                    </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Tooltip>
                </Table.Cell>
              </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
