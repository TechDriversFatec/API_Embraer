import Calculos from "./controller/calculos.js";

const btn = document.querySelector("#btn_calcular");

if (btn) {
  btn.addEventListener("click", function () {

    var calculo = new Calculos()

    var peso = parseInt((<HTMLInputElement>document.getElementById('peso-aeronave')).value);
    var altitude = parseInt((<HTMLInputElement>document.getElementById('altitude-aeronave')).value);
    var temperatura = parseInt((<HTMLInputElement>document.getElementById('temperatura')).value);
    var ventoProa = parseInt((<HTMLInputElement>document.getElementById('vento-proa')).value);
    var ventoCauda = parseInt((<HTMLInputElement>document.getElementById('vento-cauda')).value);
    var slope = parseInt((<HTMLInputElement>document.getElementById('slope')).value);
    var velocidade = parseInt((<HTMLInputElement>document.getElementById('velocidade-aeronave')).value);
    var flap = parseInt((<HTMLInputElement>document.getElementById('flap')).value);
    var frenagem = parseInt((<HTMLInputElement>document.getElementById('frenagem')).value);
    var revInoperantes = parseInt((<HTMLInputElement>document.getElementById('rev-inoperantes')).value);

    var result = calculo.calcularPouso(
      peso,
      altitude,
      temperatura,
      ventoProa,
      ventoCauda,
      slope,
      velocidade,
      flap,
      frenagem,
      revInoperantes)

    return alert(`Necessário ${result} Metros de pista para efetuar o pouso.`)
  });
}

