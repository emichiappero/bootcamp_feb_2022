//Paquetes
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//configuración
app.use(bodyParser.urlencoded({ extended: true }));

/************ Rutas ************/
app.get("/inicio", function (req, res) {
  res.sendFile(__dirname + "/formulario.html");
});

app.post("/formulario", function (req, res) {
  console.log("hola " + req.body.nombre);
});

//Escucha el puerto 3000
app.listen(3000, function () {
  console.log("Iniciando servidor en localhost:3000");
});
