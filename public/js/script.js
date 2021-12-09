var noticiasMostradas, todasNoticiasNacionales;

consumirAPI('http://localhost:3000/api/crypto');
consumirAPI('http://localhost:3000/api/dolar');
consumirAPI('http://localhost:3000/api/acciones');
cargarNacionales();


async function consumirAPI(url) {
    const response = await fetch(url);
    const json = await response.json(); // Obtener el JSON de la respuesta http.
    concatenarValores(json)
}

// Coloca los valores de la api en el html.
function concatenarValores(obj) {
    for (let key in obj) {
        let valor = obj[key]
        var elemento = document.getElementById(key);
        if (elemento !== null) {
            elemento.innerHTML += `<td id="${key}"> ${valor}</td>`
        }
    }
}

async function filtrarPorFecha(fecha) {
    noticiasMostradas = todasNoticiasNacionales.filter(noti => noti.fecha <= fecha)
    mostrarNacionales(0, 7)
}

async function cargarNacionales() {
    const response = await fetch('http://localhost:3000/api/noticias/nacionales');
    const json = await response.json(); // Obtener el JSON de la respuesta http.
    todasNoticiasNacionales = json.noticiasNacionales;
    noticiasMostradas = todasNoticiasNacionales;
    mostrarNacionales(0, 7)
}


// para cada noticia del arreglo noticias en el rango min-max, colocarla en el html.
function mostrarNacionales(min, max) {
    var j = 0, i = min;
    eliminar();

    while (i <= max && i >= min && noticiasMostradas[i] !== null && i < noticiasMostradas.length) {
        const h2 = noticiasMostradas[i].h2;
        const style = noticiasMostradas[i].style;
        const fecha = noticiasMostradas[i].fecha;
        const p = noticiasMostradas[i].p;
        const key = "nacional" + j; // para que las id del html coincidan.

        let elemento = document.getElementById(key)
        j++;
        const cuerpo = elemento.lastElementChild;   // el cuerpo es el último hijo del elemento.
        elemento.style.display = 'flex'
        elemento.setAttribute("style", style);
        elemento.setAttribute("fecha", fecha);
        cuerpo.firstElementChild.innerHTML = h2;
        cuerpo.lastElementChild.innerHTML = p;
        i++;
    }

}

function eliminar() {
    for (let i = 0; i < 8; i++) {
        let key = "nacional" + i;
        let elemento = document.getElementById(key)
        elemento.style.display = 'none'

    }
}


