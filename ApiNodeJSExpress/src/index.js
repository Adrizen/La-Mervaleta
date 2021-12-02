const express = require('express');
const app = express();

// Configuraciones.
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Node.js body parsing middleware. Obtener parámetros a traves del body.
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Inicializando el servidor, escuchando...
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});

app.use('/api', require('./routes/routes.js'));

// Servir los html, css y js.
app.use(express.static("C:\\Users\\Administrador\\Documents\\Facultad\\LDP\\Lab2\\" + '/public'))
