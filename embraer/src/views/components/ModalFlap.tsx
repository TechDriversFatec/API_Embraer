import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
    const id = window.location.href.split("/")[4];

    function receberGelo(evento: any){
      let entrada = evento.target.value;
      if(entrada){
        setGelo(1)
      } else {
        setGelo(0)
      }
    }

  function manipularEnvio(evento: any) {
    evento.preventDefault();

    axios.post("http://localhost:3002/flap", {
      tipo_flap: Flap,
      gelo: Gelo,
      aeronave_id: id
    })

    Swal.fire({
      title: "Sucessful created Flap",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
    }).then((result) => {
      if(result.isConfirmed){
        window.location.reload();
      }
    })
      
  }

  const [Flap, setFlap] = useState("");
  const [Gelo, setGelo] = useState(0)

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Flap</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Cadastro de flap
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="col-md-12">
              <div className="row">
                <div className="form-group col-lg-4-md col-md-4 col-sm-12">
                  <input
                    id="tipo_flap"
                    name="tipo_flap"
                    className="form-control"
                    placeholder="Insert the aircraft flap"
                    value={Flap}
                    onChange={(e) => setFlap(e.target.value)}
                  />
                  <small></small>
                  <FormControlLabel
                    control={<Switch onChange={receberGelo}/>}
                    label="Ice Accretion"
                  />
                </div>
              </div>
            </div>
            <div className="card-footer w-100 float-right">
              <button
                className="rounded btn btn-primary ml-2 float-end"
                type="submit"
                id="btn_registrar"
                name="submitButton"
                onClick={manipularEnvio}
              >
                <b>Register</b>
              </button>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
