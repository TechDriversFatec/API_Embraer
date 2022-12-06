import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function GraficoPizza(data: any) {
  function trocaPista(data) {
    if (data === "1") {
      data = "Ice";
    } else if (data === "2") {
      data = "Standing, Water, Slush";
    } else if (data === "3") {
      data = "Loose Snow";
    } else if (data === "4") {
      data = "Compact snow";
    } else if (data === "5") {
      data = "Wet";
    } else if (data === "6") {
      data = "Dry";
    }
    return data;
  }

  let datas: any = data.data;
  let dados: any = [];

  for (let element of datas) {
    dados.push({
      name: trocaPista(element.condicaoPista),
      y: element["COUNT(condicaoPista)"],
    });
  }

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Most used Runway Condition, 2022",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Total",
        colorByPoint: true,
        data: dados,
      },
    ],
  };

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}
