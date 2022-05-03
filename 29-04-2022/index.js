var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var ejs = require("ejs");

//configuraciones
app.use(bodyParser.urlencoded({ extended: true }));

var path = __dirname + "/src/views";
app.set("views", path);
app.set("view engine", "ejs");

//Conexión con BD
mongoose
  .connect(
    "mongodb+srv://emichiappero:lalala123@cluster0.hl2u8.mongodb.net/22_02_CRUD?retryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("Conectado con la base de datos");
  })
  .catch(function (err) {
    console.log(err);
  });

var Tarea = require("./src/models/Tareas");

//Ruta para mostrar el listado de todas las tareas
app.get("/inicio", async function (req, res) {
  var docs = await Tarea.find();

  var prueba = "Crear nueva Tarea";
  res.render("index", { titulo: prueba, tareas: docs });
});

//Ruta para CREAR una nueva Tarea
app.post("/tarea", async function (req, res) {
  var datos = req.body;

  var nueva_tarea = new Tarea(datos);
  await nueva_tarea.save();
  console.log("Todo ok por aca");
  res.redirect("/inicio");
});

app.listen(3000);
