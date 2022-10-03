import React, { useState } from "react"
import axios from "axios"

function Tabela() {

  // Array com os passageiros falsos da API
  const [data: Date, setData] = useState(String)
  // Número total de páginas
  const [totalPages, setTotalPages] = useState(1)
  // Número total de passageiros
  const [totalPassengers, setTotalPassengers] = useState(1)

    render(){
        return (
            <div>
              <thead>
                <tr>
                  <th>Modelo</th>
                  <th>Fabricante</th>
                  <th>Motor</th>
                  <th>Peso Referencial</th>
                  <th>Quantidade de Reversores</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                
                <tr>
                  <td>E-195</td>
                  <td>Embraer</td>
                  <td>2x GR CF34-10E turbofans 82.3 kN</td>
                  <td>28.970 kg</td>
                  <td>5</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>E-190</td>
                  <td>Embraer</td>
                  <td>2x GR CF34-10E turbofans 82.3 kN</td>
                  <td>28.080 kg</td>
                  <td>5</td>
                  <td>--</td>
                </tr>
              </tbody>
            </div>
        )
    }
              
}

export default Tabela