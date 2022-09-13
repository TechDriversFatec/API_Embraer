export default class Calculos {
    distanciaPouso(aeronave, pesoAtual, alturaAtual, temperaturaAtual, ventoCabeca, ventoCauda) {
        let distanciaReferencia = 1026;
        let chao = 0;
        let padraoIsa = 0;
        let pesoA = parseInt(pesoAtual.value);
        if (pesoA > aeronave.getPeso) {
            while (pesoA > aeronave.getPeso) {
                distanciaReferencia += 16;
                pesoA -= 1000;
            }
        }
        else {
            while (pesoA < aeronave.getPeso) {
                distanciaReferencia -= 17;
                pesoA += 1000;
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
    }
}
