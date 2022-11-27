import "../css/pagina-inicial.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import Dashboard from "./dashboard";

function PaginaDashboard() {

  const navigate = useNavigate()

  return (
    <div className="App">
      <div className="card card-custom gutter-b">
        <div className="card-header">
          <h3 id="h3Pagina" className="card-title">Dashboard</h3>
          <div className="card-toolbar">
          </div>
        </div>
        <div className="card-body col-md-12">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="row">

                <Dashboard />

              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PaginaDashboard;
