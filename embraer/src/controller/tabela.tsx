import React from "react"

class Tabela extends React.Component{
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