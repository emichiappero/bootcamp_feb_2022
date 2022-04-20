/* NODE puro */
// //inicializar módulos HTTP y FileSystem
// var http = require("http");
// var fs = require("fs");

// //creamos un objeto con el servidor, utilizando el módulo HTTP
// http
//   .createServer(function (req, res) {
//     //preparar parte de la respuesta del servidor (cabera)
//     res.writeHead(200, {
//       "Content-Type": "text/html",
//       "Access-Control-Allow-Origin": "*",
//     });

//     //tomar el archivo index.html utilizando el módulo FS
//     var readStream = fs.createReadStream(__dirname + "/index.html");

//     //enviamos nuestro index.html al cliente
//     readStream.pipe(res);
//   })
//   .listen(3000);

// console.log("ALguien está visitando nuestro sitio (http://localhost:3000)");

/* ------------------------------- */

/* EXPRESS */

// Cargamos el paquete Express e instanciamos la app (express)
var express = require("express");
var app = express();

app.get("/inicio", function (req, res) {
  console.log("alguien ingreso a localhost:3000/inicio");
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000);

//localhost:300/inicio
