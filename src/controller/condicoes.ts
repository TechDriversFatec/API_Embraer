export default class Condicoes{
    pesoAtual!: HTMLInputElement
    alturaAtual!: HTMLInputElement
    temperaturaAtual!: HTMLInputElement
    ventoCabeca!: HTMLInputElement
    ventoCauda!: HTMLInputElement
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