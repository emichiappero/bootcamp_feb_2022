var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

//rura para devolver el HTML
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// ruta para obtener el dato enviado
app.post("/guardar", function (req, res) {
  console.log(req.body.algo);
  var a = req.body.algo;
  var b = req.body.nombre;
  var fecha = new Date();
  res.send(a + " " + fecha);
});

app.listen(3000);
