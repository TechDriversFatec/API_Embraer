import GraficoBarra from "./components/Charts/barra";
import GraficoPizza from "./components/Charts/pizza";
import Logs from "./Logs";

const Dashboard = () => {
  return (
    <>
      <div className="card-body col-md-12">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 cardg">
            <GraficoPizza />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 cardg">
            <GraficoBarra />
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
