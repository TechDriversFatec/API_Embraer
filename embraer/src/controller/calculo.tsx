import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

class Calcular {

    calcularPouso = function (
        pesoAtual: number,
        alturaAtual: number,
        temperaturaAtual: number,
        vento: number,
        slope: number,
        vap: number,
        revInoperantes: number,
        unidade: number,
        configuracao_freio: number,
        condicao_pista: number,
        flap_id: number
    ) {
        let distanciaReferencia = 1026;
        let chao = 0;
        let padraoIsa = 0;
        let ref = 43000;

        let variaveis: any = []

        axios.get(`http://localhost:3002/getVariaveis/${flap_id}/${configuracao_freio}/${condicao_pista}`)
            .then((response) => {
                const data = response.data;
                variaveis = data[0]
            });
            
        console.log("calculando");
        console.log("peso: " + pesoAtual);
        console.log("altitude: " + alturaAtual);
        console.log("temperatura: " + temperaturaAtual);
        console.log("vento: " + vento);
        console.log("slope: " + slope);
        console.log("vap: " + vap);
        console.log("revs: " + revInoperantes);

        //calculo do peso
        if (pesoAtual != 0) {
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
        }

        //calculo da altura
        if (alturaAtual != 0) {
            if (alturaAtual > chao) {

                while (alturaAtual > chao) {
                    if (alturaAtual >= 1000) {
                        distanciaReferencia += 26;
                        alturaAtual -= 1000;
                    } else {
                        distanciaReferencia += 2.6;
                        alturaAtual -= 100;
                    }
                }

            }
        }

        //calculo da temperatura
        if (temperaturaAtual != 0) {
            if (temperaturaAtual > 0) {
                if (temperaturaAtual > padraoIsa) {
                    while (temperaturaAtual > padraoIsa) {
                        distanciaReferencia += 18;
                        temperaturaAtual -= 5;
                    }
                }
                else {
                    while (temperaturaAtual < padraoIsa) {
                        distanciaReferencia -= 10;
                        temperaturaAtual += 5;
                    }
                }
            }
        }

        //calculo do vento
        if (vento != 0) {
            if (vento > 0) {
                while (vento > 0) {
                    if (vento >= 5) {
                        distanciaReferencia -= 22;
                        vento -= 5;
                    } else {
                        distanciaReferencia -= 4.4;
                        vento -= 1;
                    }
                }
            } else {
                while (vento < 0) {
                    if (vento <= -5) {
                        distanciaReferencia += 101;
                        vento += 5
                    } else {
                        distanciaReferencia += 20.2;
                        vento += 1
                    }
                }
            }
        }

        //calculo do slope
        if (slope != 0) {
            if (slope > 0) {
                while (slope > 0) {
                    distanciaReferencia -= 5
                    slope--
                }
            } else {
                while (slope < 0) {
                    distanciaReferencia += 139
                    slope++
                }
            }
        }

        //calculo Vap
        if (vap != 0) {
            while (vap > 0) {
                distanciaReferencia += 110;
                vap -= 5;
            }
        }

        //calculo Rev
        if (revInoperantes > 0) {
            distanciaReferencia += (24 * revInoperantes)
        }


        let medida = "Meters"

        console.log("calculado");
        console.log("Resultado: " + (distanciaReferencia));

        if (unidade === 1) {
            distanciaReferencia = parseInt(metroPes(distanciaReferencia).toLocaleString())
            medida = "Feet"

            return `${distanciaReferencia.toFixed(2)} ${medida}`
        }
        else {
            return `${distanciaReferencia.toFixed(2).replace(".", ",")} ${medida}`
        }


    }
}

export default Calcular

function metroPes(distanciaReferencia: number) {
    distanciaReferencia = distanciaReferencia * 3.28084
    return distanciaReferencia.toFixed(2).replace('.', ',')
}
