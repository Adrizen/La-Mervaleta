const { Router } = require('express');
const router = Router();
let dolar, acciones, crypto;

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
}

add1(10).then(v => {
    console.log(v);  // prints 60 after 4 seconds.
});

// --------------- Crypto -----------------

// Obtener todos los valores de crypto.
router.get('/crypto', (req, res) => {
    res.status(200).send(crypto)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resuelto');
        }, 2000);
    })
})

// Crear valores Crypto.
router.post('/crypto', (req, res) => {
    crypto = req.body    // Guardo en una variable el JSON de entrada.
    // Status 200 y se informa la recepción de los valores de crypto.
    res.status(200).send({ mensaje: "Valores crypto recibidos exitosamente." })
});

// --------------- Dólar ------------------

// Obtener todos los valores del dólar.
router.get('/dolar', (req, res) => {
    res.status(200).send(dolar)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resuelto');
        }, 2000);
    })
})

// Obtener valor de un tipo de dolar por id.
router.get('/dolar/:id', (req, res) => {
    if (isNaN(req.body.id)) {
        let dolarID = req.params.id;    // Guardo el parámetro de entrada.
        let bandera = false;            // Bandera para saber si encontré la "key" en "dolar".
        for (var key in dolar) {        // Por cada key del JSON dolar.
            if (key === dolarID) {
                bandera = true;         // Encontré la key que buscaba.
                // Devuelvo el valor buscado y envio el status 200.
                res.status(200).send({ "valor": `${dolar[dolarID]}` });
                break;                  // Si encontré lo que buscaba, corto el for.
            }
        }
        if (!bandera) { // Recorrí todo el for anterior y no encontré la id, por lo tanto no existe.
            res.status(404).send({ "mensaje": "Esa id no existe." });
        }
    } else {
        // Se ingresó un parámetro de tipo incorrecto.
        res.status(400).send({ "mensaje": "Ingresado un tipo de dato incorrecto." })
    }
})

// Crear valores dólar.
router.post('/dolar', (req, res) => {
    dolar = req.body    // Guardo en una variable el JSON de entrada.
    // Status 200 y se informa la recepción de los valores del dólar.
    res.status(200).send({ mensaje: "Valores dólar recibidos exitosamente." })
});

// ------------- Acciones-------------

router.get('/acciones', (req, res) => {
    let from = req.query.from;          // Inicio.
    let cantidad = req.query.cantidad;  // Fin.
    var longitud = Object.keys(acciones).length;    // Cantidad de acciones.
    let nombreAccion, valorAccion;          // Variables temporales para guardar el nombre y el valor de una acción.
    let accionesSolicitadas = new Array();  // Acá voy a ir guardando los valores solicitados.
    if (cantidad > longitud || from < 0) {  // No se pueden solicitar más acciones de las que hay guardadas ni índices negativos.
        res.status(400).send({ "mensaje": "Parámetros incorrectos." })
    } else {
        let j = 0;  // Índice para el arreglo donde voy a guardar lo solicitado.
        for (let i = from; i < cantidad; i++) { // Desde 'from' (inicio) hasta 'cantidad' (fin)
            nombreAccion = Object.keys(acciones)[i];    // Obtengo el nombre de la acción.
            valorAccion = acciones[nombreAccion];       // Obtengo el valor de la acción.
            accionesSolicitadas[j] = nombreAccion + ": " + valorAccion; // Coloco ambos en el arreglo.
            j++;    // Avanzo el índice del arreglo.
        }
        res.status(200).send(accionesSolicitadas) // Devuelvo lo solicitado.
    }
});

router.post('/acciones', (req, res) => {
    acciones = req.body;
    res.status(200).send({ mensaje: "Valores acciones recibidos exitosamente." })
});



module.exports = router;