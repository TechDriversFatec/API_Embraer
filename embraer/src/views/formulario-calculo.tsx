import "../css/formulario-calculo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Calcular from "../controller/calculo";
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';
import Axios from "axios";
import axios from "axios";
import { TipoFrenagem } from "../util/enums/frenagemEnum";
import { CondicaoPista } from "../util/enums/condicaoPistaEnum";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function Calculo() {

  const calcular = new Calcular()

  const showError = (input: HTMLElement, message: string) => {
    const formField = input.parentElement;
    formField!.classList.remove('success');
    formField!.classList.add('error');

    const error = formField!.querySelector('small');
    error!.textContent = message;
  };

  const showSuccess = (input: HTMLElement) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField!.classList.remove('error');
    formField!.classList.add('success');

    // hide the error message
    const error = formField!.querySelector('small');
    error!.textContent = '';
  }

  function manipularEnvio(evento: any) {
    evento.preventDefault()
    let pesoValido = validaValorPeso(),
      altitudeValida = validaValorAltitude(),
      temperaturaValida = validaValorTemperatura(),
      ventoValido = validaValorVento(),
      slopeValido = validaValorSlope()

    let formularioValido = pesoValido &&
      altitudeValida &&
      temperaturaValida &&
      ventoValido &&
      slopeValido

    if (formularioValido) {

      setResultadoCalculo(calcular.calcularPouso(
        parseInt(Peso),
        parseInt(Altitude),
        parseInt(Temperatura),
        parseInt(Vento),
        parseInt(Slope),
        parseInt(vap),
        parseInt(Rev),
        parseInt(unidade)))

        setShow(true)

      Axios.post("http://localhost:3002/salvarLog", {
        aeronave_id: (document.getElementById('aeronave') as HTMLInputElement).value,
        motor: (document.getElementById('motor') as HTMLInputElement).value,
        certificacao: (document.getElementById('certificacao') as HTMLInputElement).value,
        flap: (document.getElementById('flap') as HTMLSelectElement).options[(document.getElementById('flap') as HTMLSelectElement).selectedIndex].text,
        condicaoPista: (document.getElementById('condicaoPista') as HTMLInputElement).value,
        tipoFrenagem: (document.getElementById('frenagem') as HTMLInputElement).value,
        pesoPouso: Peso,
        altitude: Altitude,
        temperatura: Temperatura,
        vento: Vento,
        inclinacao: Slope,
        overspeed: vap,
        reversoresInoperantes: Rev,
        dataCalculo: new Date().toLocaleString(),
        resultado_calculo: resultadoCalculo
      });
    }
  }

  const entre = (valor: number, min: number, max: number) => valor < min || valor > max ? false : true
  const ehNumero = (valor: string) => {
    const expressao = new RegExp("^[0-9]+$")
    return expressao.test(valor)
  }


  function validaValorPeso() {
    const idPeso = document.getElementById("peso-aeronave")
    let valido = false;
    const min = 40000, max = 80000;

    if (!entre(parseInt(Peso), min, max)) {
      showError(idPeso!, `Weight must be between ${min} and ${max}`)
    } else if (!ehNumero(Peso)) {
      showError(idPeso!, `Weight must be a number`)
    } else {
      showSuccess(idPeso!);
      valido = true;
    }
    return valido
  }

  function validaValorAltitude() {
    const idAltitude = document.getElementById("altitude-aeronave")
    let valido = false;
    const min = 0, max = 10000;

    if (!entre(parseInt(Altitude), min, max)) {
      showError(idAltitude!, `Height must be between ${min} and ${max}`)
    } else if (!ehNumero(Altitude)) {
      showError(idAltitude!, `Altitude must be a value`)
    } else {
      showSuccess(idAltitude!);
      valido = true;
    }
    return valido
  }

  function validaValorTemperatura() {
    const idTemperatura = document.getElementById("temperatura")
    let valido = false;
    const min = 0, max = 10;

    if (!entre(parseInt(Temperatura), min, max)) {
      showError(idTemperatura!, `Temperature must be between ${min} and ${max}`)
    } else if (!ehNumero(Temperatura)) {
      showError(idTemperatura!, `Temperature must be a number`)
    } else {
      showSuccess(idTemperatura!);
      valido = true;
    }
    return valido
  }

  function validaValorVento() {
    const idVento = document.getElementById("valorVento")
    let valido = false;
    const min = -5, max = 10;

    if (!entre(parseInt(Vento), min, max)) {
      showError(idVento!, `Wind must be between ${min} and ${max}`)
    } else if (!ehNumero(Vento)) {
      showError(idVento!, `Wind must be a number`)
    } else {
      showSuccess(idVento!);
      valido = true;
    }
    return valido
  }

  function validaValorSlope() {
    const idSlope = document.getElementById("slope")
    let valido = false;
    const min = -2, max = 2;

    if (!entre(parseInt(Slope), min, max)) {
      showError(idSlope!, `Slope must be between ${min} and ${max}`)
    } else if (!ehNumero(Slope)) {
      showError(idSlope!, `Slope must be a number`)
    } else {
      showSuccess(idSlope!);
      valido = true;
    }
    return valido
  }

  function receberValorPeso(evento: any) {
    let entrada = evento.target.value;
    setPeso(entrada)
  }

  function receberValorAltitude(evento: any) {
    let entrada = evento.target.value;
    setAltitude(entrada)
  }

  function receberValorTemperatura(evento: any) {
    let entrada = evento.target.value;
    setTemperatura(entrada)
  }

  function receberValorVento(evento: any) {
    let entrada = evento.target.value;
    setVento(entrada)
  }

  function receberSlope(evento: any) {
    let entrada = evento.target.value;
    setSlope(entrada)
  }

  function receberRev(evento: any) {
    let entrada = evento.target.value;
    setRev(entrada)
  }

  function receberUnidade(evento: any) {
    let entrada = evento.target.value;
    setUnidade(entrada)
  }

  function receberResultado(evento: any) {
    let entrada = evento.target.value;
    setResultadoCalculo(entrada)
  }

  const [Peso, setPeso] = useState("");
  const [Altitude, setAltitude] = useState("");
  const [Temperatura, setTemperatura] = useState("");
  const [Vento, setVento] = useState("");
  const [Slope, setSlope] = useState("")
  const [vap, setVap] = useState("")
  const [Rev, setRev] = useState("")
  const [unidade, setUnidade] = useState("")
  const [resultadoCalculo, setResultadoCalculo] = useState("")

  type Aeronaves = {
    certificacao: string,
    fabricante: string,
    id: number,
    modelo: number,
    motor: number,
    peso_referencial: number,
    qtde_reversor: number
  }

  type Flap = {
    id: number,
    tipo_flap: string,
    configuracao_freio: string,
    condicao_pista: number
  }

  const [avioes, setAvioes] = useState<Aeronaves[]>([]);
  const [aviaoId, setAviaoId] = useState("");
  const [aviao, setAviao] = useState<Aeronaves[]>([]);
  const [flaps, setFlaps] = useState<Flap[]>([]);
  const [flapId, setFlapId] = useState("");
  const [flap, setFlap] = useState<Flap[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3002/getAeronaves')
      .then((response) => {
        const data = response.data;
        console.log("useEffect 1 Rodou");
        console.log(data); // returns correctly filled array
        setAvioes(data);
        console.log(data); // returns '[]'
      });
  }, []);


  const setAviaoCalculo = () => {
    const selectAviaoId = (document.getElementById('aeronave') as HTMLInputElement).value ? (document.getElementById('aeronave') as HTMLInputElement).value : ""
    const selectFrenagemId = (document.getElementById('frenagem') as HTMLInputElement).value ? (document.getElementById('frenagem') as HTMLInputElement).value : ""
    const selectcondicaoId = (document.getElementById('condicaoPista') as HTMLInputElement).value ? (document.getElementById('condicaoPista') as HTMLInputElement).value : ""
    setAviaoId(selectAviaoId)

    let params = {
      id: selectAviaoId
    }

    let paramsToFlap = {
      id: selectAviaoId,
      configuracao_freio: selectFrenagemId,
      condicao_pista: selectcondicaoId
    }

    if (selectAviaoId != "") {
      axios
        .get(`http://localhost:3002/getAeronave/${params.id}`, {
          params: { params }
        })
        .then((response) => {
          const data = response.data;
          setAviao(data);

        });
    }

    if (selectFrenagemId != "" && selectcondicaoId != "") {
      axios
        .get(`http://localhost:3002/getFlap/${paramsToFlap.id}/${paramsToFlap.configuracao_freio}/${paramsToFlap.condicao_pista}`, {
          params: { paramsToFlap }
        })
        .then((response) => {
          const data = response.data;
          console.log("useEffect flap Rodou");
          debugger
          console.log(data); // returns correctly filled array
          if (data.length > 0) {
            setFlaps(data);
            console.log(data); // returns '[]'
          } else {
            setFlaps(data);
            Swal.fire({
              title: `Please change settings`,
              html:
                ' <b>There are no Flaps created for these settings</b> '
            })
            console.log(data); // returns '[]'
          }

        });
    }
  }

  // const setFlapCalculo = () => {
  //   console.log("setou flap");
  //   const selectFlapId = (document.getElementById('flap') as HTMLInputElement).value
  //   setFlapId(selectFlapId)

  //   let params = {
  //     id: selectFlapId
  //   }
  //   axios
  //     .get(`http://localhost:3002/getFlapDetails/${params.id}`, {
  //       params: { params }
  //     })
  //     .then((response) => {
  //       const data = response.data;
  //       setFlap(data);

  //     });
  // }


  function btnReturn(nivel_acesso: string) {
    if (nivel_acesso === '1') {
      return (<Link to="/Index">
        <button className="rounded btn btn-primary ml-2 float-start" >
          <b>Return</b>
        </button>
      </Link>)
    } else {
      return <></>
    }
  }

  const [show, setShow] = useState(false);

  function AlertDismissible(resultado: string, showStatus: boolean) {

    return (
        <>
            <Alert show={showStatus} variant="white" className="square border border-3" style={{ width: "100%" }}>
                <p id='alertP'>
                    Necessary to perform the landing:
                </p>
                <p id='resultP'>
                    {resultado}
                </p>
                <div className="d-flex justify-content-end botaoFecharAlert">
                    <Button onClick={() => setShow(false)} variant="rounded btn btn-primary ml-2 float-end">
                        <b>Close</b>
                    </Button>
                </div>
            </Alert>
        </>
    );
}

  return (
    <div className="formCalculo">
      <form id="form_criar" onSubmit={manipularEnvio}>
        <div className="card card-custom gutter-b">
          <div className="card-header">
            <h3 id="h3Calcular" className="card-title">Landing Calculation</h3>
            <div className="card-toolbar">
            </div>
          </div>

          <div className="card-body col-md-12">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row">
                  <h4 id="h3AirplaneConfig">Airplane Configurations</h4>
                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Airplane:</label>
                    <select className="form-control select" id="aeronave" title="aeronave" onChange={setAviaoCalculo}>
                      <option value="" disabled selected>Select an Airplane</option>
                      {avioes.map((aeronaveSelect) => (
                        <option key={aeronaveSelect.id} value={aeronaveSelect.id}>{aeronaveSelect.modelo}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Brake Configuration:</label>
                    <select className="form-control select" id="frenagem" title="frenagem" onChange={setAviaoCalculo}>
                      <option value="" disabled selected>Select a brake configuration</option>
                      <option value="1">Max. Manual</option>
                      <option value="2">High</option>
                      <option value="3">Medium</option>
                      <option value="4">Low</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Runway Condition:</label>
                    <select className="form-control select" id="condicaoPista" title="condicaoPista" onChange={setAviaoCalculo}>
                      <option value="" disabled selected>Select an Airplane</option>
                      <option value="1">1 - Ice</option>
                      <option value="2">2 - Standing, Water, Slush</option>
                      <option value="3">3 - Loose Snow</option>
                      <option value="4">4 - Compact Snow</option>
                      <option value="5">5 - Wet</option>
                      <option value="6">6 - Dry</option>
                    </select>
                  </div>

                  {aviao.map((aviaoRecebido) => {
                    return <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                      <label>Motor:</label>
                      <input
                        id="motor"
                        className="form-control"
                        name="motor"
                        placeholder="Select an airplane to fill"
                        value={aviaoRecebido.motor}
                        disabled
                      ></input>
                      <small></small>
                    </div>
                  })}

                  {aviao.map((aviaoRecebido) => {
                    return <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                      <label>Certification:</label>
                      <input
                        id="certificacao"
                        className="form-control"
                        name="certificacao"
                        placeholder="Select an airplane to fill"
                        value={"ANAC"}
                        disabled
                      ></input>
                      <small></small>
                    </div>
                  })}

                  {flaps.map((flapRecebido) => {
                    return <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                      <label>Flap:</label>
                      <select className="form-control select" id="flap" title="flap">
                        <option value="" selected disabled>Select a Flap</option>
                        {flaps.map((flapRecebido) => {
                          return <option key={flapRecebido.id} value={flapRecebido.id}>{flapRecebido.tipo_flap}</option>
                        })}
                      </select>
                    </div>
                  })}
                </div>

              </li>

              <li className="list-group-item">
                <div className="row">
                  <h4 id="h3AirplaneConfig">Landing Configurations</h4>
                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Landing Weight (Kg):</label>
                    <input
                      id="peso-aeronave"
                      className="form-control"
                      name="peso"
                      type="tel"
                      placeholder="Enter Landing Weight:"
                      value={Peso}
                      onChange={receberValorPeso}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Aircraft Altitude (Ft):</label>
                    <input
                      id="altitude-aeronave"
                      className="form-control"
                      type="tel"
                      name="altitude"
                      placeholder="Enter Aircraft Altitude:"
                      value={Altitude}
                      onChange={receberValorAltitude}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Temperature ISA (°C):</label>
                    <input
                      id="temperatura"
                      className="form-control"
                      name="temperatura"
                      type="tel"
                      placeholder="Enter Temperature below or above ISA:"
                      value={Temperatura}
                      onChange={receberValorTemperatura}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Wind (Kt):</label>
                    <input
                      id="valorVento"
                      className="form-control"
                      type="tel"
                      name="valorVento"
                      placeholder="Enter Tailwind or Headwind"
                      value={Vento}
                      onChange={receberValorVento}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Slope:</label>
                    <input
                      id="slope"
                      className="form-control"
                      name="slope"
                      type="tel"
                      placeholder="Enter Uphill or Downhill Slope:"
                      value={Slope}
                      onChange={receberSlope}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Vap Overspeed (Km/h):</label>
                    <input
                      id="vap-aeronave"
                      className="form-control"
                      type="tel"
                      placeholder="Enter Overspeed:"
                      value={vap}
                      onChange={(e) => setVap(e.target.value)}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Thrust Reverser:</label>
                    <select className="form-control select" id="rev-inoperantes" title="rev-inoperantes" onChange={receberRev}>
                      <option value="" disabled selected>Select a Reverser Option</option>
                      <option value="1">One Inoperative</option>
                      <option value="2">All Inoperative</option>
                      <option value="0">All Operative</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Unit Measurement:</label>
                    <select title="unidade" className="form-control select" name="unidade" onChange={receberUnidade} id="unidade">
                      <option value="placeholder" disabled selected>Select an Unite Measurement</option>
                      <option value="0">International</option>
                      <option value="1">Imperial</option>
                    </select>
                    <small></small>
                  </div>
                </div>
              </li>
            </ul>
            <div id='resultadoDiv'>
                  {AlertDismissible(resultadoCalculo, show)}
            </div>

            <div className="card-footer w-100 float-right">
              {btnReturn(localStorage.getItem('nivelAcesso') ?? "")}
              <button
                title="btn_calcular"
                className="rounded btn btn-primary ml-2 float-end"
                type="submit"
                id="btn_calcular"
                name="submitButton"
              ><b>Calculate</b>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Calculo;