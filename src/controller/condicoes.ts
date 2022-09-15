// import { domInjector } from "../decorator/dom-injector"

export default class Condicoes{

    // @domInjector("#peso-aeronave")
    pesoAtual!: HTMLInputElement
    // @domInjector("#altitude-aeronave")
    alturaAtual!: HTMLInputElement
    // @domInjector("#temperatura")
    temperaturaAtual!: HTMLInputElement
    // @domInjector("#vento-proa")
    ventoCabeca!: HTMLInputElement
    // @domInjector("#vento-cauda")
    ventoCauda!: HTMLInputElement
    // @domInjector("#slope")
    slope!: HTMLInputElement
    
    constructor(
        pesoAtual: number,
        alturaAtual: number,
        temperaturaAtual: number,
        ventoCabeca: number,
        ventoCauda: number,
        slope: number,
    ){
        pesoAtual = parseInt(this.pesoAtual.value)
        alturaAtual = parseInt(this.alturaAtual.value)
        temperaturaAtual = parseInt(this.temperaturaAtual.value)
        ventoCabeca = parseInt(this.ventoCabeca.value)
        ventoCauda = parseInt(this.ventoCauda.value)
        slope = parseInt(this.slope.value)
    }

    get getPeso(){
        return this.pesoAtual
    }
    get getAltura(){
        return this.alturaAtual
    }
    get getTemperatura(){
        return this.temperaturaAtual
    }
    get getVentoCabeca(){
        return this.ventoCabeca
    }
    get getVentoCauda(){
        return this.ventoCauda
    }
    get getSlope(){
        return this.slope
    }

}