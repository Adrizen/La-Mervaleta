
consumirAPI('http://localhost:3000/api/crypto');
consumirAPI('http://localhost:3000/api/dolar');

async function consumirAPI(url){
    const response = await fetch(url);
    const json = await response.json(); // Obtener el JSON de la respuesta http.
    concatenarValores(json)
    console.log(json) // debug.
}

function concatenarValores(obj) {
    for (let key in obj) {
        let valor = obj[key]
        var elemento = document.getElementById(key);
        elemento.innerHTML += `<td id="${key}"> ${valor}</td>`
    }
}
