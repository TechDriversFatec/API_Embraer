import React, { useEffect, useState } from "react";
import { Table, Input } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import UpdateAeronaves from "./Update-Aeronave";
import VariaveisAeronaves from "./criar-aeronave";
import { ModelTrainingOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
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
    let { id, fabricante, modelo, certificacao, motor, qtde_reversor, peso_referencial, peso_minimo, sobrepeso, peso_maximo } = data;
    localStorage.setItem('Id', id)
    localStorage.setItem('Fabricante', fabricante)
    localStorage.setItem('Modelo', modelo)
    localStorage.setItem('Certificacao', certificacao)
    localStorage.setItem('Motor', motor)
    localStorage.setItem('Qtde Reversor', qtde_reversor)
    localStorage.setItem('Peso Referencial', peso_referencial)
    localStorage.setItem('Peso Minimo', peso_minimo)
    localStorage.setItem('Sobrepeso', sobrepeso)
    localStorage.setItem('Peso Maximo', peso_maximo)
  }

  useEffect(() => {
    axios.get(`http://localhost:3002/getUsers`).then((response) => {
      setUsers(response.data);
    });
  }, []);

  const getData = () => {
    axios.get(`http://localhost:3002/getUsers`).then((getData) => {
      setUsers(getData.data);
    });
  };

  const onDelete = (id: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
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
          title: 'Deleted!',
          text: 'User successfully deleted',
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
            users.map((data: any) => {
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

        </Table.Body>


      </Table>
    </div>
  );
}
