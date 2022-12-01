import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

export default function GraficoBarra(data: any) {
  let usuario: any = [];
  let aviao: any = [];
  let contagem: any = [];
  let datas: any = data.data;
  let cores: any = ["#983dff", '#9688ff', '#50e4ff', '#4cadff']

  var dados: any = [];

  for (let n = 0; n < datas.length; n = 0) {
    var aeronave = datas.filter((item) => item.aeronave == datas[n].aeronave);

    var contaem: any = [];

    aeronave.forEach((x) => {
      contaem.push(x["COUNT(usuario)"]);
    });

    dados.push({
      name: datas[n].aeronave,
      data: contaem,
    });

    console.log(aeronave);
    datas = datas.filter((item) => item.aeronave != datas[n].aeronave);
    n = 0;
  }

  data.data.forEach((element) => {
    usuario.push(element.usuario);
    aviao.push(element.aeronave);
    contagem.push(element["COUNT(usuario)"]);
  });

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Pilot x Aircraft model",
    },
    xAxis: {
      categories: usuario,
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
    series: dados,
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}
