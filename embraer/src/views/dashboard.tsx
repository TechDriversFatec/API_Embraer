import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Read from "./Tabela";

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Browser market shares in March, 2022",
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
      name: "Brands",
      colorByPoint: true,
      data: [
        {
          name: "Chrome",
          y: 74.77,
          sliced: true,
          selected: true,
        },
        {
          name: "Edge",
          y: 12.82,
        },
        {
          name: "Firefox",
          y: 4.63,
        },
        {
          name: "Safari",
          y: 2.44,
        },
        {
          name: "Internet Explorer",
          y: 2.02,
        },
        {
          name: "Other",
          y: 3.28,
        },
      ],
    },
  ],
};

const options2 = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Emissions to air in Norway'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://www.ssb.no/en/statbank/table/08940/" ' +
            'target="_blank">SSB</a>'
    },
    xAxis: {
        categories: [
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020',
            '2021'
        ],
        crosshair: true
    },
    yAxis: {
        title: {
            useHTML: true,
            text: 'Million tonnes CO<sub>2</sub>-equivalents'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Oil and gas extraction',
        data: [13.93, 13.63, 13.73, 13.67, 14.37, 14.89, 14.56,
            14.32, 14.13, 13.93, 13.21, 12.16]

    }, {
        name: 'Manufacturing industries and mining',
        data: [12.24, 12.24, 11.95, 12.02, 11.65, 11.96, 11.59,
            11.94, 11.96, 11.59, 11.42, 11.76]

    }, {
        name: 'Road traffic',
        data: [10.00, 9.93, 9.97, 10.01, 10.23, 10.26, 10.00,
            9.12, 9.36, 8.72, 8.38, 8.69]

    }, {
        name: 'Agriculture',
        data: [4.35, 4.32, 4.34, 4.39, 4.46, 4.52, 4.58, 4.55,
            4.53, 4.51, 4.49, 4.57]

    }]
}

const Dashboard = () => {
  return (
    <>
      <div className="card-body col-md-12">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
            <HighchartsReact highcharts={Highcharts} options={options2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
