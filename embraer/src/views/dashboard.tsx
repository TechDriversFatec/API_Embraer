import React from "react";
import { Chart } from "react-google-charts";
import "bootstrap/dist/css/bootstrap.min.css";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const Dashboard = () => {
    return (
        <div className="col-md-5">
            <Chart chartType="PieChart" data={data} width={"100%"} height={"400px"} />
        </div>
    );
};

export default Dashboard;