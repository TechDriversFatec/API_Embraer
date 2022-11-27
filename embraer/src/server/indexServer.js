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

app.post("/register", (req, res) => {
    const { modelo } = req.body;
    const { fabricante } = req.body;
    const { motor } = req.body;
    const { certificacao } = req.body;
    const { qtde_reversor } = req.body;
    const { peso_referencial } = req.body;
    const { peso_minimo } = req.body;
    const { sobrepeso } = req.body;
    const { peso_maximo } = req.body;


    let SQL = "INSERT INTO aeronave ( modelo, fabricante, motor, certificacao, qtde_reversor, peso_referencial, peso_minimo, sobrepeso, peso_maximo ) VALUES ( ?,?,?,?,?,?,?,?,? )";

    db.query(SQL, [modelo, fabricante, motor, certificacao, qtde_reversor, peso_referencial, peso_minimo, sobrepeso, peso_maximo], (err, result) => {
        console.log(err);
    });
});

app.post("/flap", (req, res) => {
    const { tipo_flap } = req.body;
    const { gelo } = req.body;
    const { aeronave_id } = req.body;

    let SQL = "INSERT INTO flap ( tipo_flap, gelo, aeronave_id ) VALUES ( ?,?,? )";

    db.query(SQL, [tipo_flap, gelo, aeronave_id], (err, result) => {
        console.log(err);
    });

})

app.post("/parameter", (req, res) => {
    const { configuracao_freio } = req.body;
    const { condicao_pista } = req.body;
    const { distancia_referencial } = req.body;
    const { correcao_reversor_inoperante } = req.body;
    const { padrao_variacao_peso } = req.body;
    const { correcao_peso_acima } = req.body;
    const { correcao_peso_abaixo } = req.body;
    const { correcao_sobrepeso } = req.body;
    const { altitude_padrao } = req.body;
    const { padrao_variacao_altitude } = req.body;
    const { correcao_altitude_acima } = req.body;
    const { correcao_altitude_abaixo } = req.body;
    const { temperatura_padrao } = req.body;
    const { padrao_variacao_temperatura } = req.body;
    const { correcao_temperatura_acima } = req.body;
    const { correcao_temperatura_abaixo } = req.body;
    const { padrao_vento } = req.body;
    const { padrao_variacao_vento } = req.body;
    const { correcao_vento_cauda } = req.body;
    const { correcao_vento_proa } = req.body;
    const { slope_padrao } = req.body;
    const { padrao_variacao_inclinacao } = req.body;
    const { correcao_aclive } = req.body;
    const { correcao_declive } = req.body;
    const { vap_padrao } = req.body;
    const { padrao_variacao_velocidade } = req.body;
    const { correcao_velocidade_acima } = req.body;
    const { correcao_velocidade_abaixo } = req.body;
    const { flap_id } = req.body;
    

    let SQL = "INSERT INTO variavel ( configuracao_freio, condicao_pista, distancia_referencial, correcao_reversor_inoperante, padrao_variacao_peso, correcao_peso_acima, correcao_peso_abaixo, correcao_sobrepeso, altitude_padrao, padrao_variacao_altitude, correcao_altitude_acima, correcao_altitude_abaixo, temperatura_padrao, padrao_variacao_temperatura, correcao_temperatura_acima, correcao_temperatura_abaixo, padrao_vento, padrao_variacao_vento, correcao_vento_cauda, correcao_vento_proa, slope_padrao, padrao_variacao_inclinacao, correcao_aclive, correcao_declive, vap_padrao, padrao_variacao_velocidade, correcao_velocidade_acima, correcao_velocidade_abaixo, flap_id ) VALUES ( ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? )";

    db.query(SQL, [configuracao_freio, condicao_pista, distancia_referencial, correcao_reversor_inoperante, padrao_variacao_peso, correcao_peso_acima, correcao_peso_abaixo, correcao_sobrepeso, altitude_padrao, padrao_variacao_altitude, correcao_altitude_acima, correcao_altitude_abaixo, temperatura_padrao, padrao_variacao_temperatura, correcao_temperatura_acima, correcao_temperatura_abaixo, padrao_vento, padrao_variacao_vento, correcao_vento_cauda, correcao_vento_proa, slope_padrao, padrao_variacao_inclinacao, correcao_aclive, correcao_declive, vap_padrao, padrao_variacao_velocidade, correcao_velocidade_acima, correcao_velocidade_abaixo, flap_id], (err, result) => {
        console.log(err);
    });
});

app.post("/criarusuario", (req, res) => {
    const { nivel_acesso } = req.body;
    const { senha_acesso } = req.body;
    const { nome } = req.body;
    const { email } = req.body;
    let SQL = "INSERT INTO usuario (nivel_acesso, senha_acesso, nome, email) VALUES (?,?,?,?)";

    db.query(SQL, [nivel_acesso, senha_acesso, nome, email], (err, result) => {
        console.log(err);
    });
});

app.post("/salvarLog", (req, res) => {
    const { aeronave_id } = req.body;
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
    const { usuario } = req.body;

    let SQL = "INSERT INTO log_calculo_distancia ( aeronave_id, motor, certificacao, flap, condicaoPista, tipoFrenagem, pesoPouso, altitude, temperatura, vento, inclinacao, overspeed, reversoresInoperantes, dataCalculo, resultado_calculo, usuario ) VALUES ( ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,? )";

    db.query(SQL, [aeronave_id, motor, certificacao, flap, condicaoPista, tipoFrenagem, pesoPouso, altitude, temperatura, vento, inclinacao, overspeed, reversoresInoperantes, dataCalculo, resultado_calculo, usuario], (err, result) => {
        console.log(err);
    });
});

app.get("/listarPista", (req, res) => {
    const { count, rows } = db.findAndCountAll({
        group: "condicao_pista"
    })
    res.json({count: count, rows: rows})
})

app.get("/exibirAeronaves", (req, res) => {
    let SQL = "SELECT * FROM aeronave";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.get("/exibirFlap/:id", (req, res) => {
    const id = parseInt(req.params.id).toString()
    let SQL = "SELECT * FROM flap where aeronave_id =" + id;

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
})

app.get("/exibirVariavel/:id", (req, res) => {
    const id = parseInt(req.params.id).toString()
    let SQL = "SELECT * FROM variavel where flap_id =" + id;

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result)
    })
})

app.get("/getVariaveis/:flapId/:frenagemId/:condicaoId", (req, res) => {
    const flapId = parseInt(req.params.flapId).toString()
    const frenagemId = parseInt(req.params.frenagemId).toString()
    const condicaoId = parseInt(req.params.condicaoId).toString()
    let SQL = "SELECT * FROM variavel where flap_id =" + flapId + " and configuracao_freio =" + frenagemId + " and condicao_pista =" + condicaoId;

    db.query(SQL, (err, result) => {
        if(err) console.log(err);
        else res.send(result)
    })
})

app.get("/getAeronaves", (req, res) => {

    let SQL = "SELECT * FROM aeronave";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    });
});

app.get("/getUsuarios/:email", (req, res) => {
    const email = req.params.email.toString()
    console.log("params: " + email);
    let SQL = "SELECT * FROM usuario where email = '" + email + "'";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    });
});

app.get("/getSenha/:email", (req,res) => {
    const email = req.params.email.toString();
    
    let SQL = "SELECT senha_acesso FROM usuario WHERE email ='" + email + "'";

    db.query(SQL, (err,result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.get("/getUser/:id", (req, res) => {
    const id = req.params.id
    console.log("params: " + id);
    let SQL = "SELECT * FROM usuario where id =" + id;

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    });
});

app.get("/getLogs", (req, res) => {

    let SQL = "SELECT * FROM log_calculo_distancia";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    });
});

app.get("/getUsers/:id", (req, res) => {
    const id = req.params.id
    let SQL = "SELECT * FROM usuario where id !=" + id;

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    });
});

app.get("/getAeronave/:id", (req, res) => {
    const id = parseInt(req.params.id).toString()
    console.log("params: " + id);
    let SQL = "SELECT * FROM aeronave where id =" + id;

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    });
});

app.get("/getFlap/:id/:frenagemId/:condicaoId", (req, res) => {
    const id = parseInt(req.params.id).toString()
    const frenagemId = parseInt(req.params.frenagemId).toString()
    const condicaoId = parseInt(req.params.condicaoId).toString()
    console.log("params: " + id);
    let SQL = "SELECT flap.id, flap.tipo_flap, flap.gelo, flap.aeronave_id FROM flap INNER JOIN variavel on flap.id = variavel.flap_id WHERE variavel.configuracao_freio =" + frenagemId + " and variavel.condicao_pista =" + condicaoId

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    });
});

app.get("/getFlapDetails/:id", (req, res) => {
    const id = parseInt(req.params.id).toString()
    console.log("params: " + id);
    let SQL = "SELECT * FROM flap where id =" + id;

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result)
    });
});

app.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const { modelo } = req.body;
    const { fabricante } = req.body;
    const { motor } = req.body;
    const { certificacao } = req.body;
    const { qtde_reversor } = req.body;
    const { peso_referencial } = req.body;
    const { peso_minimo } = req.body;
    const { sobrepeso } = req.body;
    const { peso_maximo } = req.body;

    let SQL = "UPDATE aeronave SET modelo = ?,  fabricante = ?, motor = ?, certificacao = ?, qtde_reversor = ?, peso_referencial = ?, peso_minimo = ?, sobrepeso = ?, peso_maximo = ? WHERE id =" + id;

    db.query(SQL, [modelo, fabricante, motor, certificacao, qtde_reversor, peso_referencial, peso_minimo, sobrepeso, peso_maximo], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});
debugger
app.put("/updateUser/:id", (req, res) => {
    const { id } = req.params;
    const { nivel_acesso } = req.body;
    const { senha_acesso } = req.body;
    const { nome } = req.body;
    const { email } = req.body;

    let SQL = "UPDATE usuario SET nivel_acesso = ?,  senha_acesso = ?, nome = ?, email = ? WHERE id =" + id;

    db.query(SQL, [nivel_acesso, senha_acesso, nome, email], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.put("/updateVariavel/:id", (req, res) => {
    const { id } = req.params;
    const { tipo_flap } = req.body;
    const { configuracao_freio } = req.body;
    const { condicao_pista } = req.body;
    const { distancia_referencial } = req.body;
    const { correcao_reversor_inoperante } = req.body;
    const { padrao_variacao_peso } = req.body;
    const { correcao_peso_acima } = req.body;
    const { correcao_peso_abaixo } = req.body;
    const { correcao_sobrepeso } = req.body;
    const { altitude_padrao } = req.body;
    const { padrao_variacao_altitude } = req.body;
    const { correcao_altitude_acima } = req.body;
    const { correcao_altitude_abaixo } = req.body;
    const { temperatura_padrao } = req.body;
    const { padrao_variacao_temperatura } = req.body;
    const { correcao_temperatura_acima } = req.body;
    const { correcao_temperatura_abaixo } = req.body;
    const { padrao_vento } = req.body;
    const { padrao_variacao_vento } = req.body;
    const { correcao_vento_cauda } = req.body;
    const { correcao_vento_proa } = req.body;
    const { slope_padrao } = req.body;
    const { padrao_variacao_inclinacao } = req.body;
    const { correcao_aclive } = req.body;
    const { correcao_declive } = req.body;
    const { vap_padrao } = req.body;
    const { padrao_variacao_velocidade } = req.body;
    const { correcao_velocidade_acima } = req.body;
    const { correcao_velocidade_abaixo } = req.body;

    let SQL = "UPDATE flap SET tipo_flap = ?, configuracao_freio = ?, condicao_pista = ?, distancia_referencial = ?, correcao_reversor_inoperante = ?, padrao_variacao_peso = ?, correcao_peso_acima = ?, correcao_peso_abaixo = ?, correcao_sobrepeso = ?, altitude_padrao = ?, padrao_variacao_altitude = ?, correcao_altitude_acima = ?, correcao_altitude_abaixo = ?, temperatura_padrao = ?, padrao_variacao_temperatura = ?, correcao_temperatura_acima = ?, correcao_temperatura_abaixo = ?, padrao_vento = ?, padrao_variacao_vento = ?, correcao_vento_cauda = ?, correcao_vento_proa = ?, slope_padrao = ?, padrao_variacao_inclinacao = ?, correcao_aclive = ?, correcao_declive = ?, vap_padrao = ?, padrao_variacao_velocidade = ?, correcao_velocidade_acima = ?, correcao_velocidade_abaixo = ? WHERE id =" + id;

    db.query(SQL, [tipo_flap, configuracao_freio, condicao_pista, distancia_referencial, correcao_reversor_inoperante, padrao_variacao_peso, correcao_peso_acima, correcao_peso_abaixo, correcao_sobrepeso, altitude_padrao, padrao_variacao_altitude, correcao_altitude_acima, correcao_altitude_abaixo, temperatura_padrao, padrao_variacao_temperatura, correcao_temperatura_acima, correcao_temperatura_abaixo, padrao_vento, padrao_variacao_vento, correcao_vento_cauda, correcao_vento_proa, slope_padrao, padrao_variacao_inclinacao, correcao_aclive, correcao_declive, vap_padrao, padrao_variacao_velocidade, correcao_velocidade_acima, correcao_velocidade_abaixo], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
})
app.delete("/deleteAeronave/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM aeronave WHERE id =" + id;
    db.query(SQL, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.delete("/deleteFlap/:id", (req, res) => {
    const {id} = req.params;
    let SQL = "DELETE FROM flap Where id =" + id;

    db.query(SQL, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
})

app.delete("/deleteVariavel/:id", (req, res) => {
    const {id} = req.params;
    let SQL = "DELETE FROM variavel where id =" + id;

    db.query(SQL, [id], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

app.delete("/deleteUser/:id", (req, res) => {
    const { id } = req.params;
    let SQL = "DELETE FROM usuario WHERE id =" + id;
    db.query(SQL, [id], (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    });
});

app.listen(3002, () => {
    console.log("rodando servidor");
});