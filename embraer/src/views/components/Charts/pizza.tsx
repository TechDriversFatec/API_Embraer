import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

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
      data: [
        {
          name: "Ice",
          color: '#ea6248',
          y: 3.12,
        },
        {
          name: "Standing, Water, Slush",
          color: '#f49d6c',
          y: 7.46,
        },
        {
          name: "Loose Snow",
          color: '#d17877',
          y: 13.98,
        },
        {
          name: "Compact Snow",
          color: '#ad799f',
          y: 17.00,
        },
        {
          name: "Wet",
          color: '#584770',
          y: 38.31,
          sliced: false,
          selected: false,
        },
        {
          name: "Dry",
          color: '#342f57',
          y: 20.13,
        },
      ],
    },
  ],
};

export default function GraficoPizza(){
    return(
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    )
}
