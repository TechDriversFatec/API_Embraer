//var metroPes = function(
//    dist
//){
//    dist = dist * 3.28084
//    return dist.toFixed(2).replace('.',',')
//}

import Swal from "sweetalert2";

class Calcular {

    calcularPouso = function (
        pesoAtual: number,
        alturaAtual: number,
        temperaturaAtual: number,
        vento: number,
        vref: number,
        velocidade: number,
        slope: number,
        //flap: number,
        //frenagem: number,
        revInoperantes: number,
        unidade: number
    ) {
        let distanciaReferencia = 1026;
        let chao = 0;
        let padraoIsa = 0;
        let ref = 43000;
    
        console.log("calculando");
    
        //calculo do peso
        if (pesoAtual > ref) {
            while (pesoAtual > ref) {
                distanciaReferencia += 16;
                pesoAtual -= 1000;
            }
        } else {
            while (pesoAtual < ref) {
                distanciaReferencia -= 17;
                pesoAtual += 1000;
            }
        }
    
        //calculo da altura
        if (alturaAtual > chao) {
            while (alturaAtual > chao) {
                distanciaReferencia += 26;
                alturaAtual -= 1000;
            }
        }
    
        //calculo da temperatura
        if (temperaturaAtual > padraoIsa) {
            while (temperaturaAtual > padraoIsa) {
                distanciaReferencia += 18;
                temperaturaAtual -= 5;
            }
        } else {
            while (temperaturaAtual < padraoIsa) {
                distanciaReferencia -= 10;
                temperaturaAtual += 5;
            }
        }
    
        //calculo do vento
        if (vento > 0) {
            if (vento >= 5) {
                while (vento >= 5) {
                    distanciaReferencia += 101;
                    vento -= 5;
                }
            }
        } else {
            while (vento <= 5) {
                distanciaReferencia -= 22;
                vento += 5
            }
        }
    
        //calculo do slope
        if (slope > 0) {
            slope = (slope / 100) * 100
            while (slope > 0) {
                distanciaReferencia += 139
                slope--
            }
        }
    
        //calculo Vap
        if (velocidade > vref) {
            while (velocidade > ref) {
                distanciaReferencia += 110;
                velocidade -= 5;
            }
        }
    
        //calculo Rev
        if (revInoperantes > 0) {
            while (revInoperantes > 0) {
                distanciaReferencia += 24
                revInoperantes--
            }
    
        }

        if(unidade === 1){
            distanciaReferencia = parseInt(metroPes(distanciaReferencia).toLocaleString())
        }

        console.log("calculado");
        
        return Swal.fire({
            icon: 'warning',
            title: `Serão necessários ${distanciaReferencia} metros de pista para um pouso seguro`
        })
    }
}

export default Calcular

function metroPes(distanciaReferencia: number) {
    distanciaReferencia = distanciaReferencia * 3.28084
    return distanciaReferencia.toFixed(2).replace('.',',')
}
