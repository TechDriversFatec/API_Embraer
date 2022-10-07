const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

var db = mysql.createConnection({
    host: "servertechdrivers.mysql.database.azure.com",
    user: "embraer_embraer",
    password: "Fatec2022",
    database: "api_embraer"
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { modelo } = req.body;
    const { fabricante } = req.body;
    const { motor } = req.body;
    const { certificacao } = req.body;
    const { qtde_reversor } = req.body;
    const { peso_referencial } = req.body;
    const { tipo_flap } = req.body;
    const { configuracao_freio } = req.body;
    const { distancia_referencial } = req.body;
    const { padrao_variacao_peso } = req.body;
    const { correcao_peso_acima } = req.body;
    const { correcao_peso_abaixo } = req.body;
    const { padrao_variacao_altitude } = req.body;
    const { correcao_altitude } = req.body;
    const { padrao_variacao_temperatura } = req.body;
    const { correcao_temperatura_acima } = req.body;
    const { correcao_temperatura_abaixo } = req.body;
    const { padrao_variacao_vento } = req.body;
    const { correcao_vento_proa } = req.body;
    const { correcao_vento_cauda } = req.body;
    const { padrao_variacao_inclinacao } = req.body;
    const { correcao_aclive } = req.body;
    const { correcao_declive } = req.body;
    const { velocidade_referencia } = req.body;
    const { padrao_variacao_velocidade } = req.body;
    const { correcao_velocidade } = req.body;
    const { correcao_reversor_inoperante } = req.body;
    const { padrao_variacao_sobrepeso } = req.body;
    const { correcao_sobrepeso } = req.body;

    let aeronave_id = 1;

    let flap_id = 1;

    let SQL = "INSERT INTO aeronaves ( modelo, fabricante, motor, certificacao, qtde_reversor, peso_referencial ) VALUES ( ?,?,?,?,?,? )";
    
    let SQL2 = "INSERT INTO flap ( tipo_flap, configuracao_freio, aeronave_id ) VALUES ( ?,?,? )";

    let SQL3 = "INSERT INTO freio_max_manual ( distancia_referencial, padrao_variacao_peso, correcao_peso_acima, correcao_peso_abaixo, padrao_variacao_altitude, correcao_altitude, padrao_variacao_temperatura, correcao_temperatura_acima, correcao_temperatura_abaixo, padrao_variacao_vento, correcao_vento_proa, correcao_vento_cauda, padrao_variacao_inclinacao, correcao_aclive, correcao_declive, velocidade_referencia, padrao_variacao_velocidade, correcao_velocidade, correcao_reversor_inoperante, padrao_variacao_sobrepeso, correcao_sobrepeso, flap_id ) VALUES ( ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? )";

    db.query(SQL, [modelo, fabricante, motor, certificacao, qtde_reversor, peso_referencial], (err, result) => {
        console.log(err);
    });

    db.query(SQL2, [tipo_flap, configuracao_freio, aeronave_id], (err,result) => {
        console.log(err);
    });

    db.query(SQL3, [distancia_referencial, padrao_variacao_peso, correcao_peso_acima, correcao_peso_abaixo, padrao_variacao_altitude, correcao_altitude, padrao_variacao_temperatura, correcao_temperatura_acima, correcao_temperatura_abaixo, padrao_variacao_vento, correcao_vento_proa, correcao_vento_cauda, padrao_variacao_inclinacao, correcao_aclive, correcao_declive, velocidade_referencia, padrao_variacao_velocidade, correcao_velocidade, correcao_reversor_inoperante, padrao_variacao_sobrepeso, correcao_sobrepeso, flap_id], (err,result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("rodando servidor");
});
