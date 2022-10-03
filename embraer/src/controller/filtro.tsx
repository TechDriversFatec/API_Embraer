import "../views/pagina-inicial"
import { useState } from "react";
const PesquisarTabela = () =>{
    const[searchTerm, setsearchTerm] = useState("");
    return(
        <div className="container">
            <input type = "Pesquisar"
             placeholder = "Digite a palavra chave"
             className="form-control"
             style={{marginTop: 30, marginBottom: 20, width:"30%"}}
             onChange ={(e)=>{
                setsearchTerm(e.target.value);
             }}>
            </input>
        </div>
    );
}

export default PesquisarTabela;