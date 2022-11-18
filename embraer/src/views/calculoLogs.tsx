import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Log = {
  id: number,
  aeronave_id: string,
  motor: string,
  certificacao: string,
  flap: string,
  condicaoPista: string,
  tipoFrenagem: number,
  pesoPouso: string,
  altitude: string,
  temperatura: string,
  vento: string,
  inclinacao: string,
  overspeed: string,
  reversoresInoperantes: string,
  dataCalculo: string,
  resultado_calculo: string,
  usuario: string
}

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3002/getLogs')
      .then((response) => {
        const data = response.data;
        console.log("useEffect 1 Rodou");
        setLogs(data);
        console.log(data); // returns '[]'
      });
  }, []);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <div className="card card-custom gutter-b">
        <div className="card-header">
          <h3 id="h3Calcular" className="card-title">Landing logs</h3>
          <div className="card-body col-md-12">
            <div className="row">
              <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                User
              </div>
              <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                Airplane
              </div>
              <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                Landing Date
              </div>
              <div className="form-group col-lg-3 col-md-6 col-sm-12 sucess">
                Result
              </div>
            </div>
          </div>
        </div>
        {logs.map((log) => (
          <Accordion expanded={expanded === `${log.id}`} onChange={handleChange(`${log.id}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: '28%', flexShrink: 0 }}>
                {log.usuario}
              </Typography>
              <Typography sx={{ width: '33%', color: 'text.secondary' }}>
                {log.aeronave_id}
              </Typography>
              <Typography sx={{ width: '33%', color: 'text.secondary' }}>
                {log.dataCalculo}
              </Typography>
              <Typography sx={{ width: '27%', color: 'text.secondary' }}>
                {log.resultado_calculo}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Detalhes 
            <form id="form_criar">
              <div className="card-body col-md-12">
                <div className="row">
                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Landing Weight (Kg):</label>
                    <input
                      id="peso-aeronave"
                      className="form-control"
                      name="peso"
                      type="number"
                      placeholder="Enter Landing Weight:"
                      // value={Peso}
                      // onChange={receberValorPeso}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Aircraft Altitude (Ft):</label>
                    <input
                      id="altitude-aeronave"
                      className="form-control"
                      type="number"
                      name="altitude"
                      placeholder="Enter Aircraft Altitude:"
                      // value={Altitude}
                      // onChange={receberValorAltitude}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Temperature ISA (°C):</label>
                    <input
                      id="temperatura"
                      className="form-control"
                      name="temperatura"
                      type="number"
                      placeholder="Enter Temperature below or above ISA:"
                      // value={Temperatura}
                      // onChange={receberValorTemperatura}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Wind (Kt):</label>
                    <input
                      id="valorVento"
                      className="form-control"
                      type="number"
                      name="valorVento"
                      placeholder="Enter Tailwind or Headwind"
                      // value={Vento}
                      // onChange={receberValorVento}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Slope:</label>
                    <input
                      id="slope"
                      className="form-control"
                      name="slope"
                      type="number"
                      placeholder="Enter Uphill or Downhill Slope:"
                      // value={Slope}
                      // onChange={receberSlope}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Vap Overspeed (Kt):</label>
                    <input
                      id="vap-aeronave"
                      className="form-control"
                      type="number"
                      placeholder="Enter Overspeed:"
                      // value={vap}
                      // onChange={(e) => setVap(e.target.value)}
                    />
                    <small></small>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Thrust Reverser:</label>
                    <select className="form-control select" id="rev-inoperantes" title="rev-inoperantes"
                    //  onChange={receberRev}
                     >
                      <option value="" disabled selected>Select a Reverser Option</option>
                      <option value="1">One Inoperative</option>
                      <option value="2">All Inoperative</option>
                      <option value="0">All Operative</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12 sucess">
                    <label>Unit Measurement:</label>
                    <select title="unidade" className="form-control select" name="unidade" 
                    // onChange={receberUnidade} id="unidade"
                    >
                      <option value="placeholder" disabled selected>Select an Unite Measurement</option>
                      <option value="0">International</option>
                      <option value="1">Imperial</option>
                    </select>
                    <small></small>
                  </div>
                </div>
              </div>
            </form>
              </Typography>


            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
