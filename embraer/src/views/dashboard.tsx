import GraficoBarra from "./components/Charts/barra";
import GraficoPizza from "./components/Charts/pizza";

const Dashboard = () => {
  return (
    <>
      <div className="card-body col-md-12">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <GraficoPizza />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
            <GraficoBarra />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
