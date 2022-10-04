import "../css/pagina-inicial.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useMemo, useState } from "react"
import Table from "../controller/tabela";
import axios from "axios"
 
function PaginaInicial() {
 
  // Array com os passageiros falsos da API
  const [data, setData] = useState()
  // Número total de páginas
  const [totalPages, setTotalPages] = useState(1)
  // Número total de passageiros
  const [totalPassengers, setTotalPassengers] = useState(1)
  // Colunas da nossa tabela
  const columns = useMemo(
    () => [
      {
        // Primeiro grupo - Informações do passageiro
        Header: "Informações do passageiro",
        // Colunas do primeiro grupo
        columns: [
          {
            Header: "Nome",
            accessor: "name"
          },
          {
            Header: "Viagens",
            accessor: "trips"
          }
        ]
      },
      {
        // Segundo grupo - Detalhes do vôo
        Header: "Detalhes do vôo",
        // Colunas do segundo grupo
        columns: [
          {
            Header: "Nome",
            accessor: "airline[0].name"
          },
          {
            Header: "País",
            accessor: "airline[0].country"
          },
          {
            Header: "Slogan",
            accessor: "airline[0].slogan"
          }
        ]
      }
    ],
    []
  );

  // Hook para fazer a primeira chamada do componente
  useEffect(() => {
    // Função para recuperar informações da API
    axios.get("https://api.instantwebtools.net/v1/passenger?page=0&size=10")
      .then((res) => {
        // Pega e define os valores nas respectivas variáveis
        const { data, totalPages, totalPassengers } = res.data
        setData(data)
        setTotalPages(totalPages)
        setTotalPassengers(totalPassengers)
      })
  }, [])
 
        return (
 
            <div className="App">
              <Table columns={columns} data={data} />
            </div>
          );
    }
 
  export default PaginaInicial