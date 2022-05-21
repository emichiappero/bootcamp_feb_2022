var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://emichiappero:lalala123@cluster0.hl2u8.mongodb.net/front_back?retryWrites=true&w=majority"
  )
  .then(function (db) {
    console.log("Conectado correctamente");
  })
  .catch(function (err) {
    console.log(err);
  });

var Video_model = require("./models/Videos");

app.get("/obtener_videos", async function (req, res) {
  var busqueda = await Video_model.find();
  res.send(busqueda);
});

app.post("/crear_video", async function (req, res) {
  var datos = req.body;
  console.log(datos);
  var operacion = new Video_model(datos);
  await operacion.save();

  res.send({ mensaje: "Recibido" });
});

app.delete("/eliminar_video/:id", async function (req, res) {
  var id = req.params.id;
  await Video_model.findByIdAndRemove(id);
  res.send({ mensaje: "Video Eliminado" });
});

app.listen(3000); //http://localhost:3000
