export default class Aeronave {
    constructor(modelo, motor, fabricante, flap, peso, distanciaFlap, reversor) {
        this.modelo = modelo;
        this.motor = motor;
        this.fabricante = fabricante;
        this.flap = flap;
        this.peso = peso;
        this.distanciaFlap = distanciaFlap;
        this.reversor = reversor;
    }
    get getMotor() {
        return this.motor;
    }
    get getModelo() {
        return this.modelo;
    }
    get getFabricante() {
        return this.fabricante;
    }
    get getFlap() {
        return this.flap;
    }
    get getPeso() {
        return this.peso;
    }
    get getDistanciaFlap() {
        return this.distanciaFlap;
    }
    get getReversor() {
        return this.reversor;
    }
}
