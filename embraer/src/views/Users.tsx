/* eslint-disable @typescript-eslint/no-unused-expressions */
import "../css/pagina-inicial.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserTable from "./userTable";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

function Users() {

    const navigate = useNavigate()

    const newUser = () => {
        navigate('/Cadastrar')
    }

    return (
        <div className="App">
            {/* <div id="divLogoAviao">
        <h2>
          <i>
            <img src="loguinho.png" id="logoAviaozinho" alt="some text" />
          </i>
        </h2>
      </div> */}

            <div className="card card-custom gutter-b">
                <div className="card-header">
                    <h3 id="h3Pagina" className="card-title">Users</h3>
                    <div className="card-toolbar">
                    </div>
                </div>
                <div className="card-body col-md-12">
                    <button
                        title="btn_newUser"
                        className="rounded btn btn-primary ml-2 float-end"
                        type="button"
                        id="btn_newUser"
                        name="btn_newUser"
                        onClick={newUser}
                    ><b><AddIcon /> User</b>
                    </button>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="row">

                                <UserTable />

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Users;
