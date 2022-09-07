export default class Calculos {
    distanciaPouso(aeronave, pesoAtual, alturaAtual, temperaturaAtual, ventoCabeca, ventoCauda) {
        let distanciaReferencia = 1026;
        if (pesoAtual > aeronave.getPeso) {
            while (pesoAtual > aeronave.getPeso) {
                distanciaReferencia += 16;
                pesoAtual -= 1000;
            }
        }
        if (pesoAtual < aeronave.getPeso) {
            while (pesoAtual < aeronave.getPeso) {
                distanciaReferencia -= 17;
                pesoAtual += 1000;
            }
        }
        distanciaReferencia += 26;
        if (temperaturaAtual > 5) {
            distanciaReferencia += 18;
        }
        else {
            distanciaReferencia -= 10;
        }
        if (ventoCabeca > 5) {
            distanciaReferencia += 22;
        }
        if (ventoCauda > 5) {
            distanciaReferencia += 101;
        }
    }
}
