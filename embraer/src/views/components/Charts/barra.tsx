import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

export default function GraficoBarra() {
  let usuario: any = [];

  const getLog = () => {
    debugger
    usuario = []
    axios.get("http://localhost:3002/get-log-aeronave").then((response) => {
      for (const element of response.data) {
        console.log(element)
        usuario.push(element.usuario);
      }
    });
  };

  console.log(usuario)

  getLog()

  // useEffect(() => {
  //   getLog();
  // }, []);

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
          usuario
        ,
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
    series: [
      {
        name: "ERJ 145",
        color: "#983dff",
        data: [7, 2, 8, 5, 1, 3],
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}
