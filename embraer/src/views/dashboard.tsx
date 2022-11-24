import React from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

export const data = [
    ["Tipos", "Mais utilizadas"],
    ["Ice", 2],
    ["Standing, Water, Slush", 5],
    ["Loose Snow", 8],
    ["Compact Snow", 8],
    ["Wet", 7],
    ["Dry", 4],
];

export const options = {
    title: "Runway Condition mais utilizada",
    is3D: true,
};

export const info = [
    [
        "Month",
        "Bolivia",
        "Ecuador",
        "Madagascar",
        "Papua New Guinea",
        "Rwanda",
        "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
];

export const opcao = {
    title: "Monthly Coffee Production by Country",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
};

const Dashboard = () => {
    return (

        <>
            <div className="card-body col-md-12">
                <div className="row">
                    <div className="group col-lg-4 col-md-6 col-sm-12">
                        <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"100%"}
                        />
                    </div>

                    <div className="group col-lg-8 col-md-6 col-sm-12">
                        <Chart
                            chartType="ComboChart"
                            width="100%"
                            height="100%"
                            data={info}
                            options={opcao}
                        />
                    </div>
                </div>
            </div>
        </>

    );
};

export default Dashboard;