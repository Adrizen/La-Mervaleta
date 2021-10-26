
obtenerValorApi("https://criptoya.com/api/", "dolar", false);
//obtenerValorApi("https://criptoya.com/api/bitex", "/btc/usd");
obtenerValorApi("https://api.coingecko.com/api/v3/", "simple/price?ids=bitcoin%2Ccardano%2Cchainlink%2Cethereum&vs_currencies=usd", true);

function obtenerValorApi(url, moneda, esCripto) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url + moneda);
    xhr.onload = function () {
        let json = xhr.responseText;
        let obj = JSON.parse(json);
        nombreTemporal(obj, esCripto);
    }
    xhr.send();
}

function nombreTemporal(obj, esCripto) {
    for (let key in obj) {
        let valor = obj[key]
        if (esCripto) {
            valor = valor.usd;
        }
        console.log(key + ": " + valor);
    }
}

