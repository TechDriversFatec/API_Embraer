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
        flap_id: number,
        peso_ref: number
    ) {

        let variaveis: any = []

        axios.get(`http://localhost:3002/getVariaveis/${flap_id}/${configuracao_freio}/${condicao_pista}`)
            .then((response) => {
                const data = response.data;
                variaveis = data[0]
                console.log(variaveis);
                localStorage.setItem('altitude_padrao', variaveis.altitude_padrao)
                localStorage.setItem('condicao_pista', variaveis.condicao_pista)
                localStorage.setItem('configuracao_freio', variaveis.configuracao_freio)
                localStorage.setItem('correcao_aclive', variaveis.correcao_aclive)
                localStorage.setItem('correcao_altitude_abaixo', variaveis.correcao_altitude_abaixo)
                localStorage.setItem('correcao_altitude_acima', variaveis.correcao_altitude_acima)
                localStorage.setItem('correcao_declive', variaveis.correcao_declive)
                localStorage.setItem('correcao_peso_abaixo', variaveis.correcao_peso_abaixo)
                localStorage.setItem('correcao_peso_acima', variaveis.correcao_peso_acima)
                localStorage.setItem('correcao_reversor_inoperante', variaveis.correcao_reversor_inoperante)
                localStorage.setItem('correcao_sobrepeso', variaveis.correcao_sobrepeso)
                localStorage.setItem('correcao_temperatura_abaixo', variaveis.correcao_temperatura_abaixo)
                localStorage.setItem('correcao_temperatura_acima', variaveis.correcao_temperatura_acima)
                localStorage.setItem('correcao_velocidade_abaixo', variaveis.correcao_velocidade_abaixo)
                localStorage.setItem('correcao_velocidade_acima', variaveis.correcao_velocidade_acima)
                localStorage.setItem('correcao_vento_cauda', variaveis.correcao_vento_cauda)
                localStorage.setItem('correcao_vento_proa', variaveis.correcao_vento_proa)
                localStorage.setItem('distancia_referencial', variaveis.distancia_referencial)
                localStorage.setItem('padrao_variacao_altitude', variaveis.padrao_variacao_altitude)
                localStorage.setItem('padrao_variacao_inclinacao', variaveis.padrao_variacao_inclinacao)
                localStorage.setItem('padrao_variacao_peso', variaveis.padrao_variacao_peso)
                localStorage.setItem('padrao_variacao_temperatura', variaveis.padrao_variacao_temperatura)
                localStorage.setItem('padrao_variacao_velocidade', variaveis.padrao_variacao_velocidade)
                localStorage.setItem('padrao_variacao_vento', variaveis.padrao_variacao_vento)
                localStorage.setItem('padrao_vento', variaveis.padrao_vento)
                localStorage.setItem('slope_padrao', variaveis.slope_padrao)
                localStorage.setItem('temperatura_padrao', variaveis.temperatura_padrao)
                localStorage.setItem('vap_padrao', variaveis.vap_padrao)
            });

        console.log("calculando");
        console.log("peso: " + pesoAtual);
        console.log("altitude: " + alturaAtual);
        console.log("temperatura: " + temperaturaAtual);
        console.log("vento: " + vento);
        console.log("slope: " + slope);
        console.log("vap: " + vap);
        console.log("revs: " + revInoperantes);
        debugger
        let distanciaReferencia = parseInt(localStorage.getItem('distancia_referencial')!);
        let chao = 0;
        let padraoIsa = parseInt(localStorage.getItem('temperatura_padrao')!);
        let ref = peso_ref;

        //calculo do peso
        if (pesoAtual != 0) {
            if (pesoAtual > ref) {
                while (pesoAtual > ref) {
                    distanciaReferencia += parseInt(localStorage.getItem("correcao_peso_acima")!);
                    pesoAtual -= parseInt(localStorage.getItem('padrao_variacao_peso')!);
                }
            } else {
                while (pesoAtual < ref) {
                    distanciaReferencia -= parseInt(localStorage.getItem("correcao_peso_abaixo")!);
                    pesoAtual += parseInt(localStorage.getItem('padrao_variacao_peso')!);
                }
            }
        }

        //calculo da altura
        if (alturaAtual != 0) {
            if (alturaAtual > chao) {

                while (alturaAtual > chao) {
                    if (alturaAtual >= parseInt(localStorage.getItem('padrao_variacao_altitude')!)) {
                        distanciaReferencia += parseInt(localStorage.getItem('correcao_altitude_acima')!);
                        alturaAtual -= parseInt(localStorage.getItem('padrao_variacao_altitude')!);
                    } else {
                        distanciaReferencia += (parseInt(localStorage.getItem('correcao_altitude_acima')!) / 10);
                        alturaAtual -= (parseInt(localStorage.getItem('padrao_variacao_altitude')!) / 10);
                    }
                }
            }
        }

        //calculo da temperatura
        if (temperaturaAtual != 0) {
            if (temperaturaAtual > 0) {
                if (temperaturaAtual > padraoIsa) {
                    while (temperaturaAtual > padraoIsa) {
                        distanciaReferencia += parseInt(localStorage.getItem('correcao_temperatura_acima')!);
                        temperaturaAtual -= parseInt(localStorage.getItem('padrao_variacao_temperatura')!);
                    }
                }
                else {
                    while (temperaturaAtual < padraoIsa) {
                        distanciaReferencia -= parseInt(localStorage.getItem('correcao_temperatura_abaixo')!);
                        temperaturaAtual += parseInt(localStorage.getItem('padrao_variacao_temperatura')!);
                    }
                }
            }
        }

        //calculo do vento
        if (vento != 0) {
            if (vento > 0) {
                while (vento > parseInt(localStorage.getItem('padrao_vento')!)) {
                    if (vento >= parseInt(localStorage.getItem('padrao_variacao_vento')!)) {
                        distanciaReferencia -= parseInt(localStorage.getItem('correcao_vento_cauda')!);;
                        vento -= parseInt(localStorage.getItem('padrao_variacao_vento')!);
                    } else {
                        distanciaReferencia -= (parseInt(localStorage.getItem('correcao_vento_cauda')!) / 5)
                        vento -= (parseInt(localStorage.getItem('padrao_variacao_vento')!) / 5);
                    }
                }
            } else {
                while (vento < -(parseInt(localStorage.getItem('padrao_vento')!))) {
                    if (vento <= -(parseInt(localStorage.getItem('padrao_variacao_vento')!))) {
                        distanciaReferencia += parseInt(localStorage.getItem('correcao_vento_proa')!);
                        vento += parseInt(localStorage.getItem('padrao_variacao_vento')!)
                    } else {
                        distanciaReferencia += (parseInt(localStorage.getItem('correcao_vento_proa')!) / 5)
                        vento += (parseInt(localStorage.getItem('padrao_variacao_vento')!) / 5)
                    }
                }
            }
        }

        //calculo do slope
        if (slope != 0) {
            if (slope > 0) {
                while (slope > parseInt(localStorage.getItem('slope_padrao')!)) {
                    distanciaReferencia -= parseInt(localStorage.getItem('correcao_aclive')!)
                    slope -= parseInt(localStorage.getItem('padrao_variacao_inclinacao')!)
                }
            } else {
                while (slope < parseInt(localStorage.getItem('slope_padrao')!)) {
                    distanciaReferencia += parseInt(localStorage.getItem('correcao_declive')!)
                    slope += parseInt(localStorage.getItem('padrao_variacao_inclinacao')!)
                }
            }
        }

        //calculo Vap
        if (vap != 0) {
            while (vap > parseInt(localStorage.getItem('vap_padrao')!)) {
                distanciaReferencia += parseInt(localStorage.getItem('correcao_velocidade_acima')!);
                vap -= parseInt(localStorage.getItem('padrao_variacao_velocidade')!);
            }
        }

        //calculo Rev
        if (revInoperantes > 0) {
            distanciaReferencia += (parseInt(localStorage.getItem('correcao_reversor_inoperante')!) * revInoperantes)
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
