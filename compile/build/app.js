import Calculos from "./controller/calculos.js";
const btn = document.querySelector("#btn_calcular");
if (btn) {
    btn.addEventListener("click", function () {
        var calculo = new Calculos();
        var peso = parseInt(document.getElementById('peso-aeronave').value);
        var altitude = parseInt(document.getElementById('altitude-aeronave').value);
        var temperatura = parseInt(document.getElementById('temperatura').value);
        var ventoProa = parseInt(document.getElementById('vento-proa').value);
        var ventoCauda = parseInt(document.getElementById('vento-cauda').value);
        var slope = parseInt(document.getElementById('slope').value);
        var velocidade = parseInt(document.getElementById('velocidade-aeronave').value);
        var flap = parseInt(document.getElementById('flap').value);
        var frenagem = parseInt(document.getElementById('frenagem').value);
        var revInoperantes = parseInt(document.getElementById('rev-inoperantes').value);
        var result = calculo.calcularPouso(peso, altitude, temperatura, ventoProa, ventoCauda, slope, velocidade, flap, frenagem, revInoperantes);
        return alert(`Necessário ${result} Metros de pista para efetuar o pouso.`);
    });
}
