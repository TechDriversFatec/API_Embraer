import React, { useEffect, useState } from "react";
import { Table, Input, TableFooter } from "semantic-ui-react";
import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import UpdateAeronaves from "./Update-Aeronave";
import VariaveisAeronaves from "./criar-aeronave";
import { ModelTrainingOutlined } from "@mui/icons-material";
import { IconButton, TablePagination } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Tooltip from '@mui/material/Tooltip';
import Swal from "sweetalert2";
//import { isConstructorDeclaration } from "typescript";
import { accessLevel } from "../util/enums/accessLevel";
import '../css/user.css'

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [searchInput, setsearchInput] = useState('');
  const [resultadoFiltrado, setresultadoFiltrado] = useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows: any = rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

  const navigate = useNavigate()

  const searchItems = (searchValue) => {
    setsearchInput(searchValue)
    if (searchInput !== '') {
      const userFiltrado = users.filter((item) => {
        return Object.values(item).join(' ').toLowerCase().includes(searchInput.toLowerCase())
      })
      setresultadoFiltrado(userFiltrado)
    } else {
      setresultadoFiltrado(users)
    }
  }

  const setData = (data: any) => {
    let { id, nivel_acesso,senha_acesso, nome, email} = data;
    localStorage.setItem('userId', id)
    localStorage.setItem('userNivelAcesso', nivel_acesso)
    localStorage.setItem('userSenha', senha_acesso)
    localStorage.setItem('userNome', nome)
    localStorage.setItem('userEmail', email)
  }

  useEffect(() => {
    const id = localStorage.getItem('idUsuario')
    axios.get(`http://localhost:3002/getUsers/${id}`).then((getData) => {
      setUsers(getData.data);
    });
  }, []);

  const getData = () => {
    const id = localStorage.getItem('idUsuario')
    axios.get(`http://localhost:3002/getUsers/${id}`).then((getData) => {
      setUsers(getData.data);
    });
  };

  const onDelete = (id: number) => {
    Swal.fire({
      title: 'Are you sure you want to delete this user??',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3002/deleteUser/${id}`).then(() => {
          getData();
        });
        Swal.fire({
          title: 'User successfully deleted!'
        })
      }
    })
  };


  console.log(users);
  return (
    <div>
      <div>
        <Input icon="search"
          placeholder="Search"
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Acess Level</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {searchInput.length > 1 ? (
            resultadoFiltrado.map((data: any) => {
              let url = `/AtualizA/` + data.id;
              let url2 = `/Variavel/` + data.id;
              return (
                <Table.Row>
                  <Table.Cell>{data.nome}</Table.Cell>
                  <Table.Cell>{data.email}</Table.Cell>
                  <Table.Cell>{data.nivel_acesso}</Table.Cell>
                  <Table.Cell>
                    <Link to={url2}>
                      <Tooltip title="Create">
                        <IconButton onClick={() => setData(data)}>
                          <AddIcon />
                        </IconButton>
                      </Tooltip>
                    </Link>
                    <Link to={url}>
                      <Tooltip title="Edit">
                        <IconButton onClick={() => setData(data)}>
                          <AirplanemodeActiveIcon />
                        </IconButton>
                      </Tooltip>
                    </Link>
                    {/* <Link to="/Variavel">
                    <Button>
                      <FaCalculator />
                    </Button>
                  </Link> */}
                    <Tooltip title="Delete">
                      <IconButton onClick={() => onDelete(data.id)}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  </Table.Cell>
                </Table.Row>
              )
            })
          ) : (
            users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data: any) => {
              let url = `/AtualizA/` + data.id;
              let url2 = `/AtualizarUsuario/` + data.id;
              return (
                <Table.Row>
                  <Table.Cell>{data.nome}</Table.Cell>
                  <Table.Cell>{data.email}</Table.Cell>
                  <Table.Cell>{accessLevel[data.nivel_acesso]}</Table.Cell>
                  <Table.Cell>
                    <Link to={url2}>
                      <Tooltip title="Edit">
                        <IconButton onClick={() => setData(data)}>
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </Link>
                    <Tooltip title="Delete">
                      <IconButton onClick={() => onDelete(data.id)}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  </Table.Cell>
                </Table.Row>
              )
            })
          )}
          {emptyRows > 0 && (
              <Table.Row style={{ height: 53 * emptyRows }}>
                <Table.Cell colSpan={6} />
              </Table.Row>
              )}
        </Table.Body>
        <TableFooter>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={users.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableFooter>
      </Table>
    </div>
  );
}
