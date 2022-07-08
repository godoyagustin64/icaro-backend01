
require("dotenv").config()

const express = require("express");
const app = express();

app.get("/" , function (solicitud, respuesta) {

    respuesta.send("<h1>Bienvenido</h1>")

})

app.listen(process.env.PUERTO, function() {
    console.log("Servidor iniciado en el puertoo: " + process.env.PUERTO);
}); 