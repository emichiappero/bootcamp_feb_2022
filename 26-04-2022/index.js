var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//Configurar el bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

//conectarnos con la base de dato
mongoose
  .connect("__STRING_DE_CONEXION__")
  .then(function (db) {
    console.log("Conectado a la base de datos!!!");
  })
  .catch(function (err) {
    console.log("Ups! Ocurrió un error: " + err);
  });

//Hacemos require de nuestro modelo
var Ejemplo_coleccion = require("./models/Ejemplos");

//Inicio
app.get("/formulario", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//Ruta para obtener los Usuarios (Read)
app.get("/", async function (req, res) {
  var documentos = await Ejemplo_coleccion.find();
  console.log("Buscando los documentos de la colección");
  console.log(documentos);
});

//Ruta para guardar los datos enviados por el cliente (Create)
app.post("/guardarDatos", async function (req, res) {
  var datos_cliente = req.body;
  var doc = new Ejemplo_coleccion(datos_cliente);
  await doc.save();
  console.log(doc);
  res.send(doc);
});

app.listen(3000, function () {
  console.log("Iniciando servidor...");
});
