
obtenerValorApi("https://criptoya.com/api/", "dolar", false);
obtenerValorApi("https://api.coingecko.com/api/v3/", "simple/price?ids=bitcoin%2Ccardano%2Cchainlink%2Cethereum&vs_currencies=usd", true);

function obtenerValorApi(url, moneda, esCripto) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url + moneda);
    xhr.onload = function () {
        let json = xhr.responseText;
        let obj = JSON.parse(json);
        concatenarValores(obj, esCripto);
    }
    xhr.send();
}

function concatenarValores(obj, esCripto) {
    for (let key in obj) {
        let valor = obj[key]
        if (esCripto) { // Si es cripto tengo que obtener su valor en USD.
            valor = valor.usd;
        }
        var elemento = document.getElementById(key);
        elemento.innerHTML += `<h2 id="${key}"> ${valor}</h2>`
    }
}
