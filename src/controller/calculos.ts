import { domInjector } from "../decorator/dom-injector";
import Aeronave from "./aeronave";


export default class Calculos {
    
    @domInjector("#peso-aeronave")
    pesoAtual!: HTMLInputElement

    @domInjector("#altitude-aeronave")
    alturaAtual!: HTMLInputElement

    @domInjector("#temperatura")
    temperaturaAtual!: HTMLInputElement

    @domInjector("#vento-proa")
    ventoCabeca!: HTMLInputElement

    @domInjector("#vento-cauda")
    ventoCauda!: HTMLInputElement

    @domInjector("#slope")
    slope!: HTMLInputElement


    distanciaPouso(
        aeronave: Aeronave,
        pesoAtual: number = parseInt(this.pesoAtual.value),
        alturaAtual: number = parseInt(this.alturaAtual.value),
        temperaturaAtual: number = parseInt(this.temperaturaAtual.value),
        ventoCabeca: number = parseInt(this.ventoCabeca.value),
        ventoCauda: number = parseInt(this.ventoCauda.value),
        slope: number = parseInt(this.slope.value),
        ) {

        let distanciaReferencia: number = 1026;
        let chao: number = 0;
        let padraoIsa: number = 0;
            
        //calculo do peso
        if (pesoAtual > aeronave.getPeso) {
            while (pesoAtual > aeronave.getPeso) {
                distanciaReferencia += 16;
                pesoAtual -= 1000;
            }
        } else {
            while (pesoAtual < aeronave.getPeso) {
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
        if (ventoCabeca > 5) {
            while (ventoCabeca > 5) {
                distanciaReferencia -= 22;
                ventoCabeca -= 5;
            }
        }
        if (ventoCauda > 5) {
            while (ventoCauda > 5) {
                distanciaReferencia += 101;
                ventoCauda -= 5;
            }
        }

        //calculo do slope
        if (slope > 0){
            slope = (slope / 100) * 100
            while (slope > 0){
                distanciaReferencia += 139
                slope--
            }
        }
        
    }
}
