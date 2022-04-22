var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/inicio", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// localhost:3000/hola/Laura/Perez/otra_cosa/12356blablabla
app.get("/hola/:nombre/:apellido", function (req, res) {
  var parametro = req.params.nombre;
  var otro = req.params.apellido;
  res.send("Hola " + parametro + " cómo estás?");
});

app.post("/ajax", function (req, res) {
  console.log(req.body);
  if (req.body.nombre == "Emiliano") {
    res.send("Ocurrió un error al tratar de recibir los datos");
  } else {
    res.send("Los datos se registraron correctamente!");
  }
});

app.listen(3000);
