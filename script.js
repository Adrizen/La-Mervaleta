
//SIPI: obtenerValorApi("https://criptoya.com/api/", "dolar", false);
//NOPE: obtenerValorApi("https://criptoya.com/api/bitex", "/btc/usd");
//SIPI: obtenerValorApi("https://api.coingecko.com/api/v3/", "simple/price?ids=bitcoin%2Ccardano%2Cchainlink%2Cethereum&vs_currencies=usd", true);

/*function obtenerValorApi(url, moneda, esCripto) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url + moneda);
    xhr.onload = function () {
        let json = xhr.responseText;
        let obj = JSON.parse(json);
        nombreTemporal(obj, esCripto);
    }
    xhr.send();
}*/

/*function nombreTemporal(obj, esCripto) {
    for (let key in obj) {
        let valor = obj[key]
        if (esCripto) {
            valor = valor.usd;
        }
        console.log(key + ": " + valor);
    }
}*/

// Cargar y crear el navbar.
fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})



// Cargar y crear el footer.
fetch('footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_footer");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})