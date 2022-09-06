export default class Aeronave {
    private modelo: string
    private motor: string
    private fabricante: string
    private flap: string
    private reversor: boolean
    private peso: number
    private distanciaFlap: number

    constructor(
        modelo: string,
        motor: string,
        fabricante: string,
        flap: string,
        peso: number,
        distanciaFlap: number,
        reversor: boolean
    ) {
        this.modelo = modelo;
        this.motor = motor;
        this.fabricante = fabricante;
        this.flap = flap;
        this.peso = peso;
        this.distanciaFlap = distanciaFlap;
        this.reversor = reversor;
    }

    get getMotor(){
        return this.motor
    }
    get getModelo(){
        return this.modelo
    }
    get getFabricante(){
        return this.fabricante
    }
    get getFlap(){
        return this.flap;
    }
    get getPeso(){
        return this.peso;
    }
    get getDistanciaFlap(){
        return this.distanciaFlap
    }
    get getReversor(){
        return this.reversor
    }
}