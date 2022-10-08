const express =  require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "api_embraer",
});


app.use(cors());
app.use(express.json());

//app.get('/', (req: any,res: any) => {
    let SQL = "INSERT INTO aeronaves ( modelo, fabricante, motor, certificacao, qtde_reversor, peso_referencial ) VALUES ( 'E190','AIRBUS','EBR19955','ANAC','2','88000');"

    db.query(SQL, (err: any,result: any)=>{
        console.log(err);
    });
//});

app.post("http://localhost:3001/register", (req: any,res: any)=> {
    const { modelo } = req.body;
    const { fabricante } = req.body;
    const { motor } = req.body;
    const { certificacao } = req.body;
    const { qtde_reversor } = req.body;
    const { peso_referencial } = req.body;

    let SQL = "INSERT INTO aeronaves ( modelo, fabricante, motor, certificacao, qtde_reversor, peso_referencial ) VALUES ( ?,?,?,?,?,? )";

    db.query(SQL, [modelo, fabricante, motor, certificacao, qtde_reversor, peso_referencial], (err: any, result: any) =>{
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("rodando servidor");
});

export {};