import React from "react";
import { useTable } from "react-table";

function Table( columns: any, data: any ) {
  // Utilizando o hook useTable e passando as colunas com os dados.
  // É retornado para a gente todas as informações necessárias para
  // montar a tabela.
  const {
    getTableProps, // propriedades da tabela
    getTableBodyProps, // propriedades do corpo da tabela
    headerGroups, // os valores de agrupamento de tabela, caso sua tabela use
    rows, // linhas da tabela baseado nos dados e colunas
    prepareRow // Prepara a linha (Essa função deve ser chamada para cada linha)
  } = useTable({
    columns,
    data
  });
  /*
    Aqui renderizamos a nossa tabela.
    Como já sabemos, o React Table não possui nenhum comportamento visual, logo,
    depende que a gente adicione os elementos e estilo.
    O React Table vai ajudar a gente a controlar os estados e lógicas da tabela.
  */
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;