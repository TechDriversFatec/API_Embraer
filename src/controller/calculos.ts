import Aeronave from "./aeronave";

export default class Calculos {
  distanciaPouso(
    aeronave: Aeronave,
    pesoAtual: number,
    alturaAtual: number,
    temperaturaAtual: number,
    ventoCabeca: number,
    ventoCauda: number
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
    }
    if (pesoAtual < aeronave.getPeso) {
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
    }
    if (temperaturaAtual < padraoIsa) {
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
  }
}
