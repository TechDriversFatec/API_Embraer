var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorator/dom-injector";
export default class Calculos {
    distanciaPouso(aeronave, pesoAtual = parseInt(this.pesoAtual.value), alturaAtual = parseInt(this.alturaAtual.value), temperaturaAtual = parseInt(this.temperaturaAtual.value), ventoCabeca = parseInt(this.ventoCabeca.value), ventoCauda = parseInt(this.ventoCauda.value), slope = parseInt(this.slope.value)) {
        let distanciaReferencia = 1026;
        let chao = 0;
        let padraoIsa = 0;
        if (pesoAtual > aeronave.getPeso) {
            while (pesoAtual > aeronave.getPeso) {
                distanciaReferencia += 16;
                pesoAtual -= 1000;
            }
        }
        else {
            while (pesoAtual < aeronave.getPeso) {
                distanciaReferencia -= 17;
                pesoAtual += 1000;
            }
        }
        if (alturaAtual > chao) {
            while (alturaAtual > chao) {
                distanciaReferencia += 26;
                alturaAtual -= 1000;
            }
        }
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
        if (slope > 0) {
            slope = (slope / 100) * 100;
            while (slope > 0) {
                distanciaReferencia += 139;
                slope--;
            }
        }
    }
}
__decorate([
    domInjector("#peso-aeronave")
], Calculos.prototype, "pesoAtual", void 0);
__decorate([
    domInjector("#altitude-aeronave")
], Calculos.prototype, "alturaAtual", void 0);
__decorate([
    domInjector("#temperatura")
], Calculos.prototype, "temperaturaAtual", void 0);
__decorate([
    domInjector("#vento-proa")
], Calculos.prototype, "ventoCabeca", void 0);
__decorate([
    domInjector("#vento-cauda")
], Calculos.prototype, "ventoCauda", void 0);
__decorate([
    domInjector("#slope")
], Calculos.prototype, "slope", void 0);
