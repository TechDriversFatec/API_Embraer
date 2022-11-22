import * as React from "react";
import "../css/criar-aeronaves.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function VariaveisAeronaves() {
  const navigate = useNavigate();

  const url_atual = window.location.href;
  console.log(url_atual);
  const id = window.location.href.split("/")[4];
  console.log(id);

  function manipularEnvio(evento) {
    evento.preventDefault();
    debugger;
    let reversorValido = validaReversor(),
      variacaoPesoValida = validaVariacaoPes(),
      pesoAcmValido = validaPesoAcm(),
      pesoAbxValido = validaPesoAbx(),
      sobrepesoValido = validaSobrepeso(),
      altitudePdValida = validaAltitudePd(),
      variacaoAltValida = validaVariacaoAlt(),
      altitudeAcmValida = validaAltitudeAcm(),
      altitudeAbxValida = validaAltitudeAbx(),
      temperaturaPdValida = validaTemperaturaPd(),
      variacaoTmpValida = validaVariacaoTmp(),
      temperaturaAcmValida = validaTemperaturaAcm(),
      temperaturaAbxValida = validaTemperaturaAbx(),
      ventoPdValido = validaVentoPd(),
      variacaoVentoValida = validaVariacaoVento(),
      ventoAcmValido = validaVentoAcm(),
      ventoAbxValido = validaVentoAbx(),
      slopePdValido = validaSlopePd(),
      variacaoSlopeValido = validaVariacaoSlope(),
      slopeAcmValido = validaSlopeAcm(),
      slopeAbxValido = validaSlopeAbx(),
      vapPdValido = validaVapPd(),
      variacaoVapValido = validaVariacaoVap(),
      vapAcmValido = validaVapAcm(),
      vapAbxValido = validaVapAbx();

    let formularioValido =
      reversorValido &&
      variacaoPesoValida &&
      pesoAcmValido &&
      pesoAbxValido &&
      sobrepesoValido &&
      altitudePdValida &&
      variacaoAltValida &&
      altitudeAcmValida &&
      altitudeAbxValida &&
      temperaturaPdValida &&
      variacaoTmpValida &&
      temperaturaAcmValida &&
      temperaturaAbxValida &&
      ventoPdValido &&
      variacaoVentoValida &&
      ventoAcmValido &&
      ventoAbxValido &&
      slopePdValido &&
      variacaoSlopeValido &&
      slopeAcmValido &&
      slopeAbxValido &&
      vapPdValido &&
      variacaoVapValido &&
      vapAcmValido &&
      vapAbxValido;

    if (formularioValido) {
      Axios.post(`http://localhost:3002/parameter`, {
        configuracao_freio: Break,
        condicao_pista: Condicao,
        distancia_referencial: Distancia,
        correcao_reversor_inoperante: Reversor,
        padrao_variacao_peso: VariacaoPes,
        correcao_peso_acima: PesoAcm,
        correcao_peso_abaixo: PesoAbx,
        correcao_sobrepeso: Sobrepeso,
        altitude_padrao: VariacaoAlt,
        padrao_variacao_altitude: AltitudePd,
        correcao_altitude_acima: AltitudeAcm,
        correcao_altitude_abaixo: AltitudeAbx,
        temperatura_padrao: TemperaturaPd,
        padrao_variacao_temperatura: VariacaoTmp,
        correcao_temperatura_acima: TemperaturaAcm,
        correcao_temperatura_abaixo: TemperaturaAbx,
        padrao_vento: VentoPd,
        padrao_variacao_vento: VariacaoVento,
        correcao_vento_cauda: VentoAcm,
        correcao_vento_proa: VentoAbx,
        slope_padrao: SlopePd,
        padrao_variacao_inclinacao: VariacaoSlope,
        correcao_aclive: SlopeAcm,
        correcao_declive: SlopeAbx,
        vap_padrao: VapPd,
        padrao_variacao_velocidade: VariacaoVAP,
        correcao_velocidade_acima: VapAcm,
        correcao_velocidade_abaixo: VapAbx,
        flap_id: id,
      });
      Swal.fire({
        title: "Sucessful registered variables",
        text: "Register another?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No, return to home page",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload()
        } else {
          navigate(`/Index`);
        }
      });
    }
  }

  const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");

    const error = formField.querySelector("small");
    error.textContent = message;
  };

  const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove("error");
    formField.classList.add("success");

    // hide the error message
    const error = formField.querySelector("small");
    error.textContent = "";
  };

  const entre = (valor, min, max) =>
    valor < min || valor > max ? false : true;
  const vazio = (valor) => (valor === "" ? false : true);

  function validaReversor() {
    const id = document.getElementById("correcao_reversor_inoperante");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(Reversor), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(Reversor)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }

  function validaVariacaoPes() {
    const id = document.getElementById("padrao_variacao_peso");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(VariacaoPes), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(VariacaoPes)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaPesoAcm() {
    const id = document.getElementById("correcao_peso_acima");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(PesoAcm), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(PesoAcm)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaPesoAbx() {
    const id = document.getElementById("correcao_peso_abaixo");
    let valido = false;

    if (!vazio(PesoAbx)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaSobrepeso() {
    const id = document.getElementById("correcao_sobrepeso");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(Sobrepeso), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(Sobrepeso)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaAltitudePd() {
    const id = document.getElementById("altitude_padrao");
    let valido = false;

    if (!vazio(AltitudePd)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoAlt() {
    const id = document.getElementById("padrao_variacao_altitude");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(VariacaoAlt), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(VariacaoAlt)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaAltitudeAcm() {
    const id = document.getElementById("correcao_altitude_acima");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(AltitudeAcm), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(AltitudeAcm)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaAltitudeAbx() {
    const id = document.getElementById("correcao_altitude_abaixo");
    let valido = false;

    if (!vazio(AltitudeAbx)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaTemperaturaPd() {
    const id = document.getElementById("temperatura_padrao");
    let valido = false;

    if (!vazio(TemperaturaPd)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoTmp() {
    const id = document.getElementById("padrao_variacao_temperatura");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(VariacaoTmp), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(VariacaoTmp)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaTemperaturaAcm() {
    const id = document.getElementById("correcao_temperatura_acima");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(TemperaturaAcm), min, max)) {
      showError(id, `value must be a number`);
    } else if (!vazio(TemperaturaAcm)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaTemperaturaAbx() {
    const id = document.getElementById("correcao_temperatura_abaixo");
    let valido = false;

    if (!vazio(TemperaturaAbx)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaVentoPd() {
    const id = document.getElementById("padrao_vento");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(VentoPd), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(VentoPd)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoVento() {
    const id = document.getElementById("padrao_variacao_vento");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(VariacaoVento), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(VariacaoVento)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaVentoAcm() {
    const id = document.getElementById("correcao_vento_cauda");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(VentoAcm), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(VentoAcm)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaVentoAbx() {
    const id = document.getElementById("correcao_vento_proa");
    let valido = false;

    if (!vazio(TemperaturaAbx)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaSlopePd() {
    const id = document.getElementById("slope_padrao");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(SlopePd), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(SlopePd)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoSlope() {
    const id = document.getElementById("padrao_variacao_inclinacao");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(VariacaoSlope), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(VariacaoSlope)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaSlopeAcm() {
    const id = document.getElementById("correcao_aclive");
    let valido = false;

    if (!vazio(TemperaturaAbx)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaSlopeAbx() {
    const id = document.getElementById("correcao_declive");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(SlopeAbx), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(SlopeAbx)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaVapPd() {
    const id = document.getElementById("vap_padrao");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(VapPd), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(VapPd)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaVariacaoVap() {
    const id = document.getElementById("padrao_variacao_velocidade");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(VariacaoSlope), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(VariacaoSlope)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaVapAcm() {
    const id = document.getElementById("correcao_velocidade_acima");
    let valido = false;
    const min = 0,
      max = 900000;

    if (!entre(parseInt(VapAcm), min, max)) {
      showError(id, `Value must be greater than ${min}`);
    } else if (!vazio(VapAcm)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }
  function validaVapAbx() {
    const id = document.getElementById("correcao_velocidade_abaixo");
    let valido = false;

    if (!vazio(TemperaturaAbx)) {
      showError(id, `field must not be empty`);
    } else {
      showSuccess(id);
      valido = true;
    }
    return valido;
  }

  const [FlapId, setFlapId] = useState(null);
  const [Flap, setFlap] = useState("");
  const [Gelo, setGelo] = useState("");
  const [Break, setBreak] = useState("");
  const [Condicao, setCondicao] = useState("");
  const [Distancia, setDistancia] = useState("");
  const [Reversor, setReversor] = useState("");
  const [VariacaoPes, setVariacaoPes] = useState("");
  const [PesoAcm, setPesoAcm] = useState("");
  const [PesoAbx, setPesoAbx] = useState("");
  const [Sobrepeso, setSobrepeso] = useState("");
  const [AltitudePd, setAltitudePd] = useState("");
  const [VariacaoAlt, setVariacaoAlt] = useState("");
  const [AltitudeAcm, setAltitudeAcm] = useState("");
  const [AltitudeAbx, setAltitudeAbx] = useState("");
  const [TemperaturaPd, setTemperaturaPd] = useState("");
  const [VariacaoTmp, setVariacaoTmp] = useState("");
  const [TemperaturaAbx, setTemperaturaAbx] = useState("");
  const [TemperaturaAcm, setTemperaturaAcm] = useState("");
  const [VentoPd, setVentoPd] = useState("");
  const [VariacaoVento, setVariacaoVento] = useState("");
  const [VentoAbx, setVentoAbx] = useState("");
  const [VentoAcm, setVentoAcm] = useState("");
  const [SlopePd, setSlopePd] = useState("");
  const [VariacaoSlope, setVariacaoSlope] = useState("");
  const [SlopeAbx, setSlopeAbx] = useState("");
  const [SlopeAcm, setSlopeAcm] = useState("");
  const [VapPd, setVapPd] = useState("");
  const [VariacaoVAP, setVariacaoVAP] = useState("");
  const [VapAbx, setVapAbx] = useState("");
  const [VapAcm, setVapAcm] = useState("");

  useEffect(() => {
    setFlapId(localStorage.getItem("FlapId"));
    setFlap(localStorage.getItem("Flap"));
    setGelo(localStorage.getItem("Gelo"))
  }, []);

  let urlEdita = `http://localhost:3000/AtualizA/${FlapId}`

  return (
    <div className="CriarAeronaves">
      <form id="form_criar_aeronave" onSubmit={manipularEnvio}>
        <div className="card card-custom gutter-b">
          <div className="card-header">
            <h3 id="h3Criar" className="card-title">
              Variables registration
            </h3>
            <div className="card-toolbar"></div>
          </div>
          <div className="card-body col-md-12">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row">
                  <h4 id="h3FlapConfig">Flap configurations</h4>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Flap:</label>
                    <input
                      disabled
                      className="form-control select"
                      id="flap"
                      title="flap"
                      value={Flap}
                    />
                  </div>

                  <div className="form-group col-lg-2 col-md-6 col-sm-12 sucess">
                    <label>Brake Configuration:</label>
                    <select
                      className="form-control select"
                      id="configuracao_freio"
                      title="frenagem"
                      value={Break}
                      onChange={(e) => setBreak(e.target.value)}
                    >
                      <option value="" disabled selected>
                        Select a brake configuration
                      </option>
                      <option value="1">Max. Manual</option>
                      <option value="2">High</option>
                      <option value="3">Medium</option>
                      <option value="4">Low</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-2 col-md-6 col-sm-12 sucess">
                    <label>Runway Condition:</label>
                    <select
                      className="form-control select"
                      id="condicaoPista"
                      title="condicaoPista"
                      value={Condicao}
                      onChange={(e) => setCondicao(e.target.value)}
                    >
                      <option value="" disabled selected>
                        Select an Airplane
                      </option>
                      <option value="1">1 - Ice</option>
                      <option value="2">2 - Standing, Water, Slush</option>
                      <option value="3">3 - Loose Snow</option>
                      <option value="4">4 - Compact Snow</option>
                      <option value="5">5 - Wet</option>
                      <option value="6">6 - Dry</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-2 col-md-6 col-sm-12 sucess">
                    <label>Referential distance</label>
                    <input
                      id="distancia_referencial"
                      className="form-control"
                      name="distancia_referencial"
                      placeholder="Referential distance (m)"
                      value={Distancia}
                      onChange={(e) => setDistancia(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Reverser variation:</label>
                    <input
                      id="correcao_reversor_inoperante"
                      className="form-control"
                      name="correcao_reversor_inoperante"
                      placeholder="Per rev inop (m)"
                      value={Reversor}
                      onChange={(e) => setReversor(e.target.value)}
                    />
                    <small></small>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <h4 id="h3AirplaneConfig">Variable settings</h4>
                  <h6>
                    <i>Weight variables</i>
                  </h6>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Increment/decrement step (Kg):</label>
                    <input
                      id="padrao_variacao_peso"
                      className="form-control"
                      name="padrao_variacao_peso"
                      placeholder="For each"
                      value={VariacaoPes}
                      onChange={(e) => setVariacaoPes(e.target.value)}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Insert the Variation index (m):</label>
                    <input
                      id="correcao_peso_acima"
                      className="form-control"
                      name="correcao_peso_acima"
                      placeholder="Above standard"
                      value={PesoAcm}
                      onChange={(e) => setPesoAcm(e.target.value)}
                    ></input>
                    <small></small>
                  </div>

                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Insert the Variation index (m):</label>
                    <input
                      id="correcao_peso_abaixo"
                      className="form-control"
                      name="correcao_peso_abaixo"
                      placeholder="Below standard"
                      value={PesoAbx}
                      onChange={(e) => setPesoAbx(e.target.value)}
                    ></input>
                    <small></small>
                  </div>

                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Overweight (Kg):</label>
                    <input
                      id="correcao_sobrepeso"
                      className="form-control"
                      name="correcao_sobrepeso"
                      placeholder="Overweight"
                      value={Sobrepeso}
                      onChange={(e) => setSobrepeso(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                </div>

                <div className="row">
                  <h6>
                    <i>Altitude variables</i>
                  </h6>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Reference value:</label>
                    <input
                      id="altitude_padrao"
                      className="form-control"
                      name="altitude_padrao"
                      placeholder="Default value"
                      value={AltitudePd}
                      onChange={(e) => setAltitudePd(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Increment/decrement step (Ft):</label>
                    <input
                      id="padrao_variacao_altitude"
                      className="form-control"
                      name="padrao_variacao_altitude"
                      placeholder="For each"
                      value={VariacaoAlt}
                      onChange={(e) => setVariacaoAlt(e.target.value)}
                    />
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Variation index (m):</label>
                    <input
                      id="correcao_altitude_acima"
                      className="form-control"
                      name="correcao_altitude_acima"
                      placeholder="Above standard"
                      value={AltitudeAcm}
                      onChange={(e) => setAltitudeAcm(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Variation index (m):</label>
                    <input
                      id="correcao_altitude_abaixo"
                      className="form-control"
                      name="correcao_altitude_abaixo"
                      placeholder="Below standard"
                      value={AltitudeAbx}
                      onChange={(e) => setAltitudeAbx(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                </div>

                <div className="row">
                  <h6>
                    <i>Temperature variables (ISA)</i>
                  </h6>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Reference value:</label>
                    <input
                      id="temperatura_padrao"
                      className="form-control"
                      name="temperatura_padrao"
                      placeholder="Default value in °C"
                      type="number"
                      value={TemperaturaPd}
                      onChange={(e) => setTemperaturaPd(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Increment/decrement step (°C):</label>
                    <input
                      id="padrao_variacao_temperatura"
                      className="form-control"
                      name="padrao_variacao_temperatura"
                      placeholder="For each"
                      type="number"
                      value={VariacaoTmp}
                      onChange={(e) => setVariacaoTmp(e.target.value)}
                    />
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Variation index (m):</label>
                    <input
                      id="correcao_temperatura_acima"
                      className="form-control"
                      name="correcao_temperatura_acima"
                      placeholder="Above standard"
                      type="number"
                      value={TemperaturaAcm}
                      onChange={(e) => setTemperaturaAcm(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Variation index (m):</label>
                    <input
                      id="correcao_temperatura_abaixo"
                      className="form-control"
                      name="correcao_temperatura_abaixo"
                      placeholder="Below standard"
                      type="number"
                      value={TemperaturaAbx}
                      onChange={(e) => setTemperaturaAbx(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                </div>

                <div className="row">
                  <h6>
                    <i>Wind variables (KT)</i>
                  </h6>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Reference value:</label>
                    <input
                      id="padrao_vento"
                      className="form-control"
                      name="padrao_vento"
                      placeholder="Default value"
                      type="number"
                      value={VentoPd}
                      onChange={(e) => setVentoPd(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Increment/decrement step (KT):</label>
                    <input
                      id="padrao_variacao_vento"
                      className="form-control"
                      name="padrao_variacao_vento"
                      placeholder="For each"
                      type="number"
                      value={VariacaoVento}
                      onChange={(e) => setVariacaoVento(e.target.value)}
                    />
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Variation index (m):</label>
                    <input
                      id="correcao_vento_cauda"
                      className="form-control"
                      name="correcao_vento_cauda"
                      placeholder="Above standard (Tail wind)"
                      type="number"
                      value={VentoAcm}
                      onChange={(e) => setVentoAcm(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Variation index (m):</label>
                    <input
                      id="correcao_vento_proa"
                      className="form-control"
                      name="correcao_vento_proa"
                      placeholder="Below standard (Head wind)"
                      type="number"
                      value={VentoAbx}
                      onChange={(e) => setVentoAbx(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                </div>

                <div className="row">
                  <h6>
                    <i>Slope variables (%)</i>
                  </h6>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Reference value:</label>
                    <input
                      id="slope_padrao"
                      className="form-control"
                      name="slope_padrao"
                      placeholder="Default value"
                      type="number"
                      value={SlopePd}
                      onChange={(e) => setSlopePd(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Increment/decrement step (%):</label>
                    <input
                      id="padrao_variacao_inclinacao"
                      className="form-control"
                      name="padrao_variacao_inclinacao"
                      placeholder="For each"
                      type="number"
                      value={VariacaoSlope}
                      onChange={(e) => setVariacaoSlope(e.target.value)}
                    />
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Variation index (m):</label>
                    <input
                      id="correcao_aclive"
                      className="form-control"
                      name="correcao_aclive"
                      placeholder="Above standard"
                      type="number"
                      value={SlopeAcm}
                      onChange={(e) => setSlopeAcm(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Variation index (m):</label>
                    <input
                      id="correcao_declive"
                      className="form-control"
                      name="correcao_declive"
                      placeholder="Below standard"
                      type="number"
                      value={SlopeAbx}
                      onChange={(e) => setSlopeAbx(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                </div>

                <div className="row">
                  <h6>
                    <i>VAP (speed):</i>
                  </h6>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Reference value:</label>
                    <input
                      id="vap_padrao"
                      className="form-control"
                      name="vap_padrao"
                      placeholder="Default value"
                      type="number"
                      value={VapPd}
                      onChange={(e) => setVapPd(e.target.value)}
                    ></input>
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Increment/decrement step:</label>
                    <input
                      id="padrao_variacao_velocidade"
                      className="form-control"
                      name="padrao_variacao_velocidade"
                      placeholder="For each"
                      type="number"
                      value={VariacaoVAP}
                      onChange={(e) => setVariacaoVAP(e.target.value)}
                    />
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Variation index (m):</label>
                    <input
                      id="correcao_velocidade_acima"
                      className="form-control"
                      name="correcao_velocidade_acima"
                      placeholder="Above standard"
                      type="number"
                      value={VapAcm}
                      onChange={(e) => setVapAcm(e.target.value)}
                    />
                    <small></small>
                  </div>
                  <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                    <label>Variation index (m):</label>
                    <input
                      id="correcao_velocidade_abaixo"
                      className="form-control"
                      name="correcao_velocidade_abaixo"
                      placeholder="Below standard"
                      type="number"
                      value={VapAbx}
                      onChange={(e) => setVapAbx(e.target.value)}
                    />
                    <small></small>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="clear"></div>

          <div className="card-footer w-100 float-right">
            <a
              className="rounded btn btn-primary ml-2 float-start"
              href={urlEdita}
            >
              <b>Return</b>
            </a>
            <button
              className="rounded btn btn-primary ml-2 float-end"
              type="submit"
              id="btn_registrar"
              name="submitButton"
              //onClick={() => handleClickButton(values)}
            >
              <b>Register</b>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default VariaveisAeronaves;
