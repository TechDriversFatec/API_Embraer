import React from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom';

function Users() {
  // 👇️ get ID from url
  const params = useParams();

  console.log(params); // 👉️ {userId: '4200'}

  return <h2>userId is 👉️ {params.userId}</h2>;
}

export default function UpdateAeronaves() {
  return (
    <div className="CriarAeronaves">
      {/* <div>
        <i>
          <img
            className="logoAviaoCriar"
            src="loguinho.png"
            id="logoAviaozinho"
            alt="some text"
          />
        </i>
      </div> */}
      <form id="form_criar_aeronave">
        <div className="card card-custom gutter-b">
          <div className="card-header">
            <h3 id="h3Criar" className="card-title">
              Aircraft Registration
            </h3>
            <div className="card-toolbar"></div>
          </div>
          <div className="card-body col-md-13">
            <div className="row">
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Manufacturer:</label>
                <input
                  id="fabricante"
                  className="form-control"
                  name="fabricante"
                  placeholder="Insert the aircraft manufacturer:"
                />
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Aircraft model:</label>
                <input
                  id="modelo"
                  className="form-control"
                  name="modelo"
                  placeholder="Insert the aircraft model:"
                />
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Certification:</label>
                <input
                  id="certificacao"
                  className="form-control"
                  name="certificacao"
                  placeholder="Insert the aircraft certification:"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Motor:</label>
                <input
                  id="motor"
                  className="form-control"
                  name="motor"
                  placeholder="Insert the aircraft motor:"
                />
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>How many reversers does the aircraft have?</label>
                <select
                  id="qtde_reversor"
                  className="form-control"
                  name="qtde_reversor"
                  placeholder="Number of reversers:"
                >
                  <option value="" selected disabled>Select</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Aircraft weight (Kg):</label>
                <input
                  id="peso_referencial"
                  className="form-control"
                  type="tel"
                  name="peso_referencial"
                  placeholder="Insert the aircraft ref weight:"
                />
                <small></small>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-4-md col-md-4 com-sm-12">
                <label>Minimum weight the aircraft can get</label>
                <input
                  id="peso_minimo"
                  className="form-control"
                  name="peso_minimo"
                  placeholder="Insert the aircraft minimum weight:"
                />
                <small></small>
              </div>
              <div className="form-group col-lg-4-md col-md-4 com-sm-12">
                <label>Overweight of the aircraft </label>
                <input
                  id="sobrepeso"
                  className="form-control"
                  name="sobrepeso"
                  placeholder="Insert the overweight:"
                />
                <small></small>
              </div>
              <div className="form-group col-lg-4-md col-md-4 com-sm-12">
                <label>Maximum weight the aircraft can get</label>
                <input
                  id="peso_maximo"
                  className="form-control"
                  name="peso_maximo"
                  placeholder="Insert the aircraft maximum weight:"
                />
                <small></small>
              </div>
            </div>
          </div>
          <div className="card-footer w-100 float-right">
            <a
              className="rounded btn btn-primary ml-2 float-start"
              href="http://localhost:3000"
            >
              <b>Return</b>
            </a>
            <button
              className="rounded btn btn-primary ml-2 float-end"
              type="submit"
              id="btn_registrar"
              name="submitButton"
            >
              <b>Register</b>
            </button>
          </div>
        </div>
      </form>

      <script src="../compile/build/CriarAeronaves.js"></script>
    </div>
  );
}