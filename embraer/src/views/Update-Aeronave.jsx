import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";
import ModalFlap from "./components/ModalFlap";
import TabelaFlap from "./components/TabelaFlap"

export default function UpdateAeronaves() {

  const navigate = useNavigate();
  const [Id, setId] = useState(null);
  const [Fabricante, setFabricante] = useState("");
  const [Modelo, setModelo] = useState("");
  const [Certificacao, setCertificacao] = useState("");
  const [Motor, setMotor] = useState("");
  const [Revesor, setReversor] = useState("");
  const [Peso, setPeso] = useState("");
  const [PesoMinimo, setPesoMinimo] = useState("");
  const [Sobrepeso, setSobrepeso] = useState("");
  const [PesoMaximo, setPesoMaximo] = useState("");
  const idUpdate = window.location.href.split("/")[4];

  useEffect(() => {
    setId(localStorage.getItem('Id'));
    setFabricante(localStorage.getItem('Fabricante'))
    setModelo(localStorage.getItem('Modelo'))
    setCertificacao(localStorage.getItem('Certificacao'))
    setMotor(localStorage.getItem('Motor'))
    setReversor(localStorage.getItem('Qtde Reversor'))
    setPeso(localStorage.getItem('Peso Referencial'))
    setPesoMinimo(localStorage.getItem('Peso Minimo'))
    setSobrepeso(localStorage.getItem('Sobrepeso'))
    setPesoMaximo(localStorage.getItem('Peso Maximo'))
  }, [])



  function manipularEnvio(evento) {
    evento.preventDefault()
    let pesoValido = validaPeso(),
      pesoMinValido = validaPesoMin(),
      sobrepesoValido = validaSobrepeso(),
      pesoMaxValido = validaPesoMax()

    let formularioValido = pesoValido &&
      pesoMinValido &&
      sobrepesoValido &&
      pesoMaxValido

    if (formularioValido) {
      axios.put(`http://localhost:3002/update/${Id}`, {
        fabricante: Fabricante,
        modelo: Modelo,
        certificacao: Certificacao,
        motor: Motor,
        qtde_reversor: Revesor,
        peso_referencial: Peso,
        peso_minimo: PesoMinimo,
        sobrepeso: Sobrepeso,
        peso_maximo: PesoMaximo
      })

      Swal.fire({
        title: 'Confirm the update?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, confirm!'
      }).then((result) => {
        if (result.isConfirmed)
          Swal.fire({
            title: 'Aircraft successfully updated',
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/Index")
            }
          })
      })
    }
  }

  const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
  };

  const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
  }

  const ehNumero = (valor) => {
    const expressao = new RegExp("^[0-9]+$")
    return expressao.test(valor)
  }

  function validaPeso() {
    const idPeso = document.getElementById("peso_referencial")
    let valido = false;

    if (!ehNumero(Peso)) {
      showError(idPeso, `Weight must be a number`)
    } else {
      showSuccess(idPeso);
      valido = true
    }
    return valido
  }

  function validaPesoMin() {
    const idPesoMin = document.getElementById("peso_minimo")
    let valido = false;

    if (!ehNumero(PesoMinimo)) {
      showError(idPesoMin, `Minimum weight must be a number`)
    } else {
      showSuccess(idPesoMin);
      valido = true;
    }
    return valido
  }

  function validaSobrepeso() {
    const id = document.getElementById("sobrepeso")
    let valido = false;

    if (!ehNumero(Sobrepeso)) {
      showError(id, `Overweight must be a number`)
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }

  function validaPesoMax() {
    const idPesoMax = document.getElementById("peso_maximo")
    let valido = false;

    if (!ehNumero(PesoMaximo)) {
      showError(idPesoMax, `Maximum weight must be a number`)
    } else {
      showSuccess(idPesoMax);
      valido = true;
    }
    return valido
  }

  return (
    <div className="CriarAeronaves">
      <form id="form_criar_aeronave" onSubmit={manipularEnvio}>
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
                  value={Fabricante}
                  onChange={(e) => setFabricante(e.target.value)}
                />
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Aircraft model:</label>
                <input
                  id="modelo"
                  className="form-control"
                  name="modelo"
                  placeholder="Insert the aircraft model:"
                  value={Modelo}
                  onChange={(e) => setModelo(e.target.value)}
                />
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Certification:</label>
                <input
                  id="certificacao"
                  className="form-control"
                  name="certificacao"
                  placeholder="Insert the aircraft certification:"
                  value={Certificacao}
                  onChange={(e) => setCertificacao(e.target.value)}
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
                  value={Motor}
                  onChange={(e) => setMotor(e.target.value)}
                />
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>How many reversers does the aircraft have?</label>
                <select
                  id="qtde_reversor"
                  className="form-control"
                  name="qtde_reversor"
                  placeholder="Number of reversers:"
                  value={Revesor}
                  onChange={(e) => setReversor(e.target.value)}
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
                  value={Peso}
                  onChange={(e) => setPeso(e.target.value)}
                />
                <small></small>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-lg-4-md col-md-4 com-sm-12">
                <label>Minimum weight the aircraft can get (Kg):</label>
                <input
                  id="peso_minimo"
                  className="form-control"
                  name="peso_minimo"
                  placeholder="Insert the aircraft minimum weight:"
                  value={PesoMinimo}
                  onChange={(e) => setPesoMinimo(e.target.value)}
                />
                <small></small>
              </div>
              <div className="form-group col-lg-4-md col-md-4 com-sm-12">
                <label>Overweight of the aircraft (Kg): </label>
                <input
                  id="sobrepeso"
                  className="form-control"
                  name="sobrepeso"
                  placeholder="Insert the overweight:"
                  value={Sobrepeso}
                  onChange={(e) => setSobrepeso(e.target.value)}
                />
                <small></small>
              </div>
              <div className="form-group col-lg-4-md col-md-4 com-sm-12">
                <label>Maximum weight the aircraft can get (Kg):</label>
                <input
                  id="peso_maximo"
                  className="form-control"
                  name="peso_maximo"
                  placeholder="Insert the aircraft maximum weight:"
                  value={PesoMaximo}
                  onChange={(e) => setPesoMaximo(e.target.value)}
                />
                <small></small>
              </div>
            </div>
            <ModalFlap />
          </div>
          <div>
            <TabelaFlap />
          </div>
          <div className="card-footer w-100 float-right">
            <a
              className="rounded btn btn-primary ml-2 float-start"
              href="http://localhost:3000/Index"
            >
              <b>Return</b>
            </a>
            <button
              className="rounded btn btn-primary ml-2 float-end"
              type="submit"
              id="btn_registrar"
              name="submitButton"
            >
              <b>Save</b>
            </button>
          </div>
        </div>
      </form>

      <script src="../compile/build/CriarAeronaves.js"></script>
    </div>
  );
}