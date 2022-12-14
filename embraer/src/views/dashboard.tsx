import axios from "axios";
import { useEffect, useState } from "react";
import GraficoBarra from "./components/Charts/barra";
import GraficoPizza from "./components/Charts/pizza";
import Logs from "./Logs";

const Dashboard = () => {
  const [DataBarra, setDataBarra] = useState([]);
  const [DataPizza, setDataPizza] = useState([])

  let data: any = [];
  let dataPizza: any = []

  const getLog = () => {
    axios.get("http://localhost:3002/get-log-aeronave").then((response) => {
      for (const element of response.data) {
        //console.log(element)
        data.push(element);
      }
      setDataBarra(data);
    });
  };

  const getPista = () => {
    axios.get("http://localhost:3002/getPista").then((response) => {
      for (const element of response.data){
        dataPizza.push(element)
      }
      setDataPizza(dataPizza)
    })
  }

  setTimeout(getLog, 2000);
  setTimeout(getPista, 2000);

  return (
    <>
      <div className="card-body col-md-12">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 cardg">
            <GraficoPizza data={DataPizza} />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 cardg">
            <GraficoBarra data={DataBarra} />
          </div>
          <div className="row">
            <Logs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
