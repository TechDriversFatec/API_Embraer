/* eslint-disable @typescript-eslint/no-unused-expressions */
import "../css/pagina-inicial.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserTable from "./userTable";

function Users() {

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
                    <h3 id="h3Pagina" className="card-title">Home Page</h3>
                    <div className="card-toolbar">
                    </div>
                </div>
                <div className="card-body col-md-12">
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
