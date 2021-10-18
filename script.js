// API request para obtener los distintos valores del dolar.
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://criptoya.com/api/dolar");
xhr.onload = function () {
    let json = xhr.responseText;
    let obj = JSON.parse(json);

    // Modifico el HTML para mostrar los valores obtenidos desde la API.
    let dolarOficial = document.getElementById("dolarOficial");
    dolarOficial.innerHTML = obj.oficial;
    let dolarBlue = document.getElementById("dolarBlue");
    dolarBlue.innerHTML = obj.blue;
    let dolarCCL = document.getElementById("dolarCCL");
    dolarCCL.innerHTML = obj.ccl;
    let dolarSolidario = document.getElementById("dolarSolidario");
    dolarSolidario.innerHTML = obj.solidario;
    let dolarBolsa = document.getElementById("dolarBolsa");
    dolarBolsa.innerHTML = obj.mep;
};
xhr.send();
