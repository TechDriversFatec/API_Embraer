var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorator/dom-injector";
export default class Condicoes {
    constructor(pesoAtual, alturaAtual, temperaturaAtual, ventoCabeca, ventoCauda, slope) {
        pesoAtual = parseInt(this.pesoAtual.value);
        alturaAtual = parseInt(this.alturaAtual.value);
        temperaturaAtual = parseInt(this.temperaturaAtual.value);
        ventoCabeca = parseInt(this.ventoCabeca.value);
        ventoCauda = parseInt(this.ventoCauda.value);
        slope = parseInt(this.slope.value);
    }
    get getPeso() {
        return this.pesoAtual;
    }
    get getAltura() {
        return this.alturaAtual;
    }
    get getTemperatura() {
        return this.temperaturaAtual;
    }
    get getVentoCabeca() {
        return this.ventoCabeca;
    }
    get getVentoCauda() {
        return this.ventoCauda;
    }
    get getSlope() {
        return this.slope;
    }
}
__decorate([
    domInjector("#peso-aeronave")
], Condicoes.prototype, "pesoAtual", void 0);
__decorate([
    domInjector("#altitude-aeronave")
], Condicoes.prototype, "alturaAtual", void 0);
__decorate([
    domInjector("#temperatura")
], Condicoes.prototype, "temperaturaAtual", void 0);
__decorate([
    domInjector("#vento-proa")
], Condicoes.prototype, "ventoCabeca", void 0);
__decorate([
    domInjector("#vento-cauda")
], Condicoes.prototype, "ventoCauda", void 0);
__decorate([
    domInjector("#slope")
], Condicoes.prototype, "slope", void 0);
