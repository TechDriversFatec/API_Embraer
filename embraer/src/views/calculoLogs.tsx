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
              <Typography sx={{ width: '23%', flexShrink: 0 }}>
                {log.usuario}
              </Typography>
              <Typography sx={{ width: '33%', color: 'text.secondary' }}>
                {log.aeronave_id}
              </Typography>
              <Typography sx={{ width: '33%', color: 'text.secondary' }}>
                {log.dataCalculo}
              </Typography>
              <Typography sx={{ width: '33%', color: 'text.secondary' }}>
                {log.resultado_calculo}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Detalhes do log
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
