import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [numberAccordion, setNumberAccordion] = useState("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  function manipularEnvio(evento: any) {
    evento.preventDefault();

    Swal.fire({
      title: "Sucessful created Flap",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
    });
  }

  const [Flap, setFlap] = useState("");
  const [Distancia, setDistancia] = useState("");
  const [Reversor, setReversor] = useState("");
  const [Break, setBreak] = useState("");

  return (
    <div>
      <Box sx={{ minWidth: 200 }}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Number of Flaps
          </InputLabel>
          <Select
            id="demo-simple-select-standard"
            value={numberAccordion}
            onChange={(e) => setNumberAccordion(e.target.value)}
            label="Age"
          >
            <MenuItem value="" selected disabled>
              <em>Select</em>
            </MenuItem>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={4}>Four</MenuItem>
            <MenuItem value={5}>Five</MenuItem>
            <MenuItem value={6}>Six</MenuItem>
            <MenuItem value={7}>Seven</MenuItem>
            <MenuItem value={8}>Eight</MenuItem>
            <MenuItem value={9}>Nine</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Flap 1</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Configuração flap 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormControl fullWidth>
              <div className="row">
                <div className="form-group col-md-3 flap">
                  <TextField
                    id="tipo_flap"
                    name="tipo_flap"
                    label="Flap"
                    placeholder="Insert the aircraft flap"
                    variant="standard"
                    value={Flap}
                    onChange={(e) => setFlap(e.target.value)}
                  />
                  <small></small>
                  <FormControlLabel
                    control={<Switch />}
                    label="Ice Accretion"
                  />
                </div>
                <div className="form-group col-md-3 flap">
                  <TextField
                    id="distancia_referencial"
                    name="distancia_referencial"
                    label="Distance:"
                    placeholder="Referential distance (m)"
                    variant="standard"
                    type="number"
                    value={Distancia}
                    onChange={(e) => setDistancia(e.target.value)}
                  />
                  <small></small>
                </div>
                <div className="form-group col-md-3 flap">
                  <TextField
                    id="correcao_reversor_inoperante"
                    name="correcao_reversor_inoperante"
                    label="Reverser variation:"
                    placeholder="Per rev inop (m)"
                    variant="standard"
                    type="number"
                    value={Reversor}
                    onChange={(e) => setReversor(e.target.value)}
                  />
                  <small></small>
                </div>
                <div className="form-group col-md-3 flap">
                      <Select
                        fullWidth
                        variant="standard"
                        label="Break config:"
                        id="configuracao_freio"
                        value={Break}
                        onChange={(e) => setBreak(e.target.value)}
                      >
                        <MenuItem value="" selected disabled>
                          <em>Select</em>
                        </MenuItem>
                        <MenuItem value="1">Max. Manual</MenuItem>
                        <MenuItem value="2">High</MenuItem>
                        <MenuItem value="3">Medium</MenuItem>
                        <MenuItem value="4">Low</MenuItem>
                      </Select>
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
            </FormControl>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
