const express = require("express");
const app = express();
const mysql = require('mysql2')
const cors = require("cors");

var db = mysql.createConnection({
    host: "servertechdrivers.mysql.database.azure.com",
    user: "embraer_embraer",
    password: "Fatec2022",
    database: "api_embraer"
});

app.use(cors());
app.use(express.json());

// app.post("/register", (req, res) => {
//     const { modelo } = req.body;
//     const { fabricante } = req.body;
//     const { motor } = req.body;
//     const { certificacao } = req.body;
//     const { qtde_reversor } = req.body;
//     const { peso_referencial } = req.body;
//     const { tipo_flap } = req.body;
//     const { configuracao_freio } = req.body;
//     const { distancia_referencial } = req.body;
//     const { padrao_variacao_peso } = req.body;
//     const { correcao_peso_acima } = req.body;
//     const { correcao_peso_abaixo } = req.body;
//     const { padrao_variacao_altitude } = req.body;
//     const { correcao_altitude } = req.body;
//     const { padrao_variacao_temperatura } = req.body;
//     const { correcao_temperatura_acima } = req.body;
//     const { correcao_temperatura_abaixo } = req.body;
//     const { padrao_variacao_vento } = req.body;
//     const { correcao_vento_proa } = req.body;
//     const { correcao_vento_cauda } = req.body;
//     const { padrao_variacao_inclinacao } = req.body;
//     const { correcao_aclive } = req.body;
//     const { correcao_declive } = req.body;
//     const { velocidade_referencia } = req.body;
//     const { padrao_variacao_velocidade } = req.body;
//     const { correcao_velocidade } = req.body;
//     const { correcao_reversor_inoperante } = req.body;
//     const { padrao_variacao_sobrepeso } = req.body;
//     const { correcao_sobrepeso } = req.body;

//     let aeronave_id = 1;

//     let flap_id = 1;

//     let SQL = "INSERT INTO aeronaves ( modelo, fabricante, motor, certificacao, qtde_reversor, peso_referencial ) VALUES ( ?,?,?,?,?,? )";
    
//     let SQL2 = "INSERT INTO flap ( tipo_flap, configuracao_freio, aeronave_id ) VALUES ( ?,?,? )";

//     let SQL3 = "INSERT INTO freio_max_manual ( distancia_referencial, padrao_variacao_peso, correcao_peso_acima, correcao_peso_abaixo, padrao_variacao_altitude, correcao_altitude, padrao_variacao_temperatura, correcao_temperatura_acima, correcao_temperatura_abaixo, padrao_variacao_vento, correcao_vento_proa, correcao_vento_cauda, padrao_variacao_inclinacao, correcao_aclive, correcao_declive, velocidade_referencia, padrao_variacao_velocidade, correcao_velocidade, correcao_reversor_inoperante, padrao_variacao_sobrepeso, correcao_sobrepeso, flap_id ) VALUES ( ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? )";

//     db.query(SQL, [modelo, fabricante, motor, certificacao, qtde_reversor, peso_referencial], (err, result) => {
//         console.log(err);
//     });

//     db.query(SQL2, [tipo_flap, configuracao_freio, aeronave_id], (err,result) => {
//         console.log(err);
//     });

//     db.query(SQL3, [distancia_referencial, padrao_variacao_peso, correcao_peso_acima, correcao_peso_abaixo, padrao_variacao_altitude, correcao_altitude, padrao_variacao_temperatura, correcao_temperatura_acima, correcao_temperatura_abaixo, padrao_variacao_vento, correcao_vento_proa, correcao_vento_cauda, padrao_variacao_inclinacao, correcao_aclive, correcao_declive, velocidade_referencia, padrao_variacao_velocidade, correcao_velocidade, correcao_reversor_inoperante, padrao_variacao_sobrepeso, correcao_sobrepeso, flap_id], (err,result) => {
//         console.log(err);
//     });
// });

app.post("/salvarLog", (req, res) => {
    const { aeronave } = req.body;
    const { motor } = req.body;
    const { certificacao } = req.body;
    const { flap } = req.body;
    const { condicaoPista } = req.body;
    const { tipoFrenagem } = req.body;
    const { pesoPouso } = req.body;
    const { altitude } = req.body;
    const { temperatura } = req.body;
    const { vento } = req.body;
    const { inclinacao } = req.body;
    const { overspeed } = req.body;
    const { reversoresInoperantes } = req.body;
    const { dataCalculo } = req.body;
    const { resultado_calculo } = req.body;

    let SQL = "INSERT INTO log_calculo_distancia ( aeronave_id, motor, certificacao, flap, condicaoPista, tipoFrenagem, pesoPouso, altitude, temperatura, vento, inclinacao, overspeed, reversoresInoperantes, dataCalculo, resultado_calculo ) VALUES ( ?,?,?,?,?,?,?,?,?,?,?,?,?,?,? )";

    db.query(SQL, [aeronave, motor, certificacao, flap, condicaoPista, tipoFrenagem, pesoPouso, altitude, temperatura, vento, inclinacao, overspeed, reversoresInoperantes, dataCalculo, resultado_calculo], (err, result) => {
        console.log(err);
    });
});

app.get("/getAeronaves", (req, res) => {

    let SQL = "SELECT * FROM aeronave";

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result)
    });
});

app.get("/getUsuarios/:email", (req, res) => {
const email = parseInt(req.params.email).toString()
console.log("params: " + email);
    let SQL = "SELECT * FROM usuario where email =" + email;

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result)
    });
});

app.get("/getLogs", (req, res) => {

    let SQL = "SELECT * FROM log_calculo_distancia";

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result)
    });
});

app.get("/getAeronave/:id", (req, res) => {
const id = parseInt(req.params.id).toString()
console.log("params: " + id);
    let SQL = "SELECT * FROM aeronave where id =" + id ;

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result)
    });
});

app.get("/getFlap/:id/:frenagemId/:condicaoId", (req, res) => {
const id = parseInt(req.params.id).toString()
const frenagemId = parseInt(req.params.frenagemId).toString()
const condicaoId = parseInt(req.params.condicaoId).toString()
console.log("params: " + id);
    let SQL = "SELECT * FROM flap where aeronave_id =" + id + " and configuracao_freio =" + frenagemId + " and condicao_pista =" + condicaoId;

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result)
    });
});

app.get("/getFlapDetails/:id", (req, res) => {
    const id = parseInt(req.params.id).toString()
    console.log("params: " + id);
        let SQL = "SELECT * FROM flap where id =" + id ;
    
        db.query(SQL, (err, result) => {
            if(err) console.log(err);
            else res.send(result)
        });
    });

app.listen(3002, () => {
    console.log("rodando servidor");
});