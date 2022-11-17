import { useEffect, useState } from "react";
import Axios from "axios";
import "../css/CriarAeronaves2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CriarAeronaves() {
  const navigate = useNavigate();
  const [listAeronaves, setlistAeronaves] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3002/exibirAeronaves`).then((response) => {
      setlistAeronaves(response.data);
    });
  }, []);
  const setData = (data: any) => {
    let {
      id,
      fabricante,
      modelo,
      certificacao,
      motor,
      qtde_reversor,
      peso_referencial,
      peso_minimo,
      sobrepeso,
      peso_maximo,
    } = data;
    localStorage.setItem("Id", id);
    localStorage.setItem("Fabricante", fabricante);
    localStorage.setItem("Modelo", modelo);
    localStorage.setItem("Certificacao", certificacao);
    localStorage.setItem("Motor", motor);
    localStorage.setItem("Qtde Reversor", qtde_reversor);
    localStorage.setItem("Peso Referencial", peso_referencial);
    localStorage.setItem("Peso Minimo", peso_minimo);
    localStorage.setItem("Sobrepeso", sobrepeso);
    localStorage.setItem("Peso Maximo", peso_maximo);
  };

  const showError = (input: HTMLElement, message: string) => {
    const formField = input.parentElement;
    formField!.classList.remove("success");
    formField!.classList.add("error");

    const error = formField!.querySelector("small");
    error!.textContent = message;
  };

  const showSuccess = (input: HTMLElement) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField!.classList.remove("error");
    formField!.classList.add("success");

    // hide the error message
    const error = formField!.querySelector("small");
    error!.textContent = "";
  };

  function manipularEnvio(evento: any) {
    evento.preventDefault();
    let pesoValido = validaPeso(),
      pesoMinValido = validaPesoMin(),
      sobrepesoValido = validaSobrepeso(),
      pesoMaxValido = validaPesoMax(),
      fabricanteValido = validaFabricante(),
      modeloValido = validaModelo(),
      certificacaoValida = validaCertificacao(),
      motorValido = validaMotor(),
      reversorValido = validaReversor();

    let formularioValido =
      pesoValido &&
      pesoMinValido &&
      sobrepesoValido &&
      pesoMaxValido &&
      fabricanteValido &&
      modeloValido &&
      certificacaoValida &&
      motorValido &&
      reversorValido;

    if (formularioValido) {
      Axios.post("http://localhost:3002/register", {
        fabricante: Fabricante,
        modelo: Modelo,
        certificacao: Certificacao,
        motor: Motor,
        qtde_reversor: Revesor,
        peso_referencial: Peso,
        peso_minimo: PesoMinimo,
        sobrepeso: Sobrepeso,
        peso_maximo: PesoMaximo,
      });

      Swal.fire({
        title: "Sucessful registered aircraft",
        text: "You must register the flap",
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, procced",
        cancelButtonText: "No, go to home page",
      }).then((result) => {
        if (result.isConfirmed) {
          let id: any;
          listAeronaves.forEach((data: any) => {
            id = parseInt(data.id) + 1;
            return id.toString();
          });
          let data = [
            id,
            Fabricante,
            Modelo,
            Certificacao,
            Motor,
            Revesor,
            Peso,
            PesoMinimo,
            Sobrepeso,
            PesoMaximo,
          ];
          setData(data);
          navigate(`/AtualizA/${id}`);
        } else {
          navigate("/Index");
        }
      });
    }
  }

  const entre = (valor: number, min: number, max: number) =>
    valor < min || valor > max ? false : true;
  const vazio = (valor: string) => (valor === "" ? false : true);

  function validaFabricante() {
    const id = document.getElementById("fabricante");
    let valido = false;

    if (!vazio(Fabricante)) {
      showError(id!, `field must not be empty`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaModelo() {
    const id = document.getElementById("modelo");
    let valido = false;
    if (!vazio(Modelo)) {
      showError(id!, `field must not be empty`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaCertificacao() {
    const id = document.getElementById("certificacao");
    let valido = false;

    if (!vazio(Certificacao)) {
      showError(id!, `field must not be empty`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaReversor() {
    const id = document.getElementById("qtde_reversor");
    let valido = false;

    if (!vazio(Revesor)) {
      showError(id!, `field must not be empty`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaMotor() {
    const id = document.getElementById("motor");
    let valido = false;

    if (!vazio(Motor)) {
      showError(id!, `field must not be empty`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }
  function validaPeso() {
    const idPeso = document.getElementById("peso_referencial");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(Peso), min, max)) {
      showError(idPeso!, `Value must be greater than ${min}`);
    } else if (!vazio(Peso)) {
      showError(idPeso!, `field must not be empty`);
    } else {
      showSuccess(idPeso!);
      valido = true;
    }
    return valido;
  }

  function validaPesoMin() {
    const idPesoMin = document.getElementById("peso_minimo");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(PesoMinimo), min, max)) {
      showError(idPesoMin!, `Value must be greater than ${min}`);
    } else if (!vazio(PesoMinimo)) {
      showError(idPesoMin!, `field must not be empty`);
    } else {
      showSuccess(idPesoMin!);
      valido = true;
    }
    return valido;
  }

  function validaSobrepeso() {
    const id = document.getElementById("sobrepeso");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(Sobrepeso), min, max)) {
      showError(id!, `Value must be greater than ${min}`);
    } else if (!vazio(Sobrepeso)) {
      showError(id!, `field must not be empty`);
    } else {
      showSuccess(id!);
      valido = true;
    }
    return valido;
  }

  function validaPesoMax() {
    const idPesoMax = document.getElementById("peso_maximo");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(PesoMaximo), min, max)) {
      showError(idPesoMax!, `Value must be greater than ${min}`);
    } else if (!vazio(PesoMaximo)) {
      showError(idPesoMax!, `field must not be empty`);
    } else {
      showSuccess(idPesoMax!);
      valido = true;
    }
    return valido;
  }

  const [Fabricante, setFabricante] = useState("");
  const [Modelo, setModelo] = useState("");
  const [Certificacao, setCertificacao] = useState("");
  const [Motor, setMotor] = useState("");
  const [Revesor, setReversor] = useState("");
  const [Peso, setPeso] = useState("");
  const [PesoMinimo, setPesoMinimo] = useState("");
  const [Sobrepeso, setSobrepeso] = useState("");
  const [PesoMaximo, setPesoMaximo] = useState("");

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
                <small></small>
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
                <small></small>
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
                <small></small>
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
                <small></small>
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
                  <option value="" selected disabled>
                    Select
                  </option>
                  <option value="0">0</option>
                  <option value="2">2</option>
                </select>
                <small></small>
              </div>
              <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                <label>Aircraft weight (Kg):</label>
                <input
                  id="peso_referencial"
                  className="form-control"
                  type="number"
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
                <label>Minimum weight the aircraft can get:</label>
                <input
                  id="peso_minimo"
                  className="form-control"
                  name="peso_minimo"
                  placeholder="Insert the aircraft minimum weight:"
                  type="number"
                  value={PesoMinimo}
                  onChange={(e) => setPesoMinimo(e.target.value)}
                />
                <small></small>
              </div>
              <div className="form-group col-lg-4-md col-md-4 com-sm-12">
                <label>Overweight of the aircraft: </label>
                <input
                  id="sobrepeso"
                  className="form-control"
                  name="sobrepeso"
                  placeholder="Insert the overweight:"
                  type="number"
                  value={Sobrepeso}
                  onChange={(e) => setSobrepeso(e.target.value)}
                />
                <small></small>
              </div>
              <div className="form-group col-lg-4-md col-md-4 com-sm-12">
                <label>Maximum weight the aircraft can get:</label>
                <input
                  id="peso_maximo"
                  className="form-control"
                  name="peso_maximo"
                  placeholder="Insert the aircraft maximum weight:"
                  type="number"
                  value={PesoMaximo}
                  onChange={(e) => setPesoMaximo(e.target.value)}
                />
                <small></small>
              </div>
            </div>
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
              <b>Register</b>
            </button>
          </div>
        </div>
      </form>

      <script src="../compile/build/CriarAeronaves.js"></script>
    </div>
  );
}

export default CriarAeronaves;
