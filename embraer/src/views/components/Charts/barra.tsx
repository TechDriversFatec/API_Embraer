import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";


export default function GraficoBarra() {

  const getLog = () => {
    axios.get('http://localhost:3002/get-log-aeronave').then(response => {
      let usuario: any = []
      console.log(response.data[0].usuario)
      for(let i = 0; i < response.data.length; i++){
        usuario.push(response.data[i].usuario)
      }
      console.log(usuario)
    });
  }

  useEffect(() => {

    getLog();
  }, [])


  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Pilot x Aircraft model",
    },
    xAxis: {
      categories:
        // arrayDeNomes
        [
          
        ],
      crosshair: true,
    },
    yAxis: {
      title: {
        useHTML: true,
        text: "Amount of calculation performed",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: "</table>",
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series:
      [
        {
          name: "ERJ 145",
          color: '#983dff',
          data: [
            7, 2, 8, 5, 1, 3,
          ],
        },
        {
          name: "Legacy 600",
          color: '#9688ff',
          data: [
            10, 2, 11, 3, 5, 7,
          ],
        },
        {
          name: "E190",
          color: '#4cadff',
          data: [
            3, 9, 9, 4, 2, 10,
          ],
        },
        {
          name: "Phenom 300",
          color: '#50e4ff',
          data: [
            6, 4, 10, 8, 5, 7,
          ],
        },
      ],
  };

 

  return (
    <>
      {getLog()}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}
