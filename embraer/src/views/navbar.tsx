import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
  return (
    <div id="navBarDiv">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbardiv prevent-select">
        <div className="container-fluid navbardiv">
          <Link className="navbar-brand" to="/">
            Landing Calculation System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-light bntcalcularnavbar" to="/calculo">
            Calculation
          </Link>
        </div>
      </nav>
    </div>
  );
}