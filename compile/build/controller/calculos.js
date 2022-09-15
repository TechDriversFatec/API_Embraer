export default class Calculos {
    calcularPouso(pesoAtual = parseInt(this.pesoAtual.value), alturaAtual = parseInt(this.alturaAtual.value), temperaturaAtual = parseInt(this.temperaturaAtual.value), ventoCabeca = parseInt(this.ventoCabeca.value), ventoCauda = parseInt(this.ventoCauda.value), slope = parseInt(this.slope.value), vref = parseInt(this.vref.value), flap = parseInt(this.flap.value), frenagem = parseInt(this.frenagem.value), revInoperantes = parseInt(this.revInoperantes.value)) {
        debugger;
        let distanciaReferencia = 1026;
        let chao = 0;
        let padraoIsa = 0;
        let ref = 43000;
        if (pesoAtual > ref) {
            while (pesoAtual > ref) {
                distanciaReferencia += 16;
                pesoAtual -= 1000;
            }
        }
        else {
            while (pesoAtual < ref) {
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
        if (ventoCabeca >= 5) {
            while (ventoCabeca >= 5) {
                distanciaReferencia -= 22;
                ventoCabeca -= 5;
            }
        }
        if (ventoCauda >= 5) {
            while (ventoCauda >= 5) {
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
        if (revInoperantes > 0) {
            while (revInoperantes > 0) {
                distanciaReferencia += 24;
                revInoperantes--;
            }
        }
        return distanciaReferencia;
    }
}
