var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//Incluimos el paquete dotenv, para utilizarlo, pero NO se sube al repositorio
require("dotenv").config();

//En el archivo .env hay una variable llamada OTRA_VARIABLE
console.log(process.env.OTRA_VARIABLE);

mongoose
  .connect(process.env.MONGO_STRING_CONNECTION)
  .then(function (db) {
    console.log("Conexión establecida correctamente");
  })
  .catch(function (err) {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/src/views");
app.set("view engine", "ejs");

var model_product = require("./src/models/Productos");
var model_order = require("./src/models/Pedidos");

//Ruta para mostrar errores
app.get("/404", function (req, res) {
  res.render("error_404");
});

//Rura para mostrar LISTADO DE PRODUCTOS
app.get("/", async function (req, res) {
  //buscar en la base de datos, todos los documentos (buscar solo los filtrados)
  var prods = await model_product.find();

  res.render("index", {
    productos: prods,
    mostrar_msj: false,
  });
});

//Ruta para mostrar el DETALLE DE UN PRODUCTO
app.get("/producto/:id", async function (req, res) {
  var id_producto = req.params.id;
  var prod = await model_product.findById(id_producto);

  if (prod == null) {
    res.redirect("/404");
  } else {
    res.render("detalle", {
      p: prod,
    });
  }
});

//Ruta para CREAR UN PEDIDO
app.post("/pedido", async function (req, res) {
  // var cantidad = req.body.cantidad;
  // var id_producto = req.body.id_producto;
  // var nombre_producto = req.body.nombre_producto;
  // var precio_unitario = req.body.precio_unitario;

  //Destructuring (hace lo mismo que lo de arriba)
  var { cantidad, id_producto, nombre_producto, precio_unitario } = req.body;

  // var p = {
  //   cantidad: cantidad,
  //   id_producto: id_producto,
  //   nombre_producto: nombre_producto,
  //   precio_unitario: precio_unitario,
  //   total: parseInt(precio_unitario) * parseInt(cantidad),
  //   fecha: new Date()
  // };

  var p = {
    cantidad,
    id_producto,
    nombre_producto,
    precio_unitario,
    total: parseInt(precio_unitario) * parseInt(cantidad),
    fecha: new Date(),
  };

  var pedido = new model_order(p);
  var resultado = await pedido.save();
  console.log(resultado);

  var prods = await model_product.find();

  res.render("index", {
    mostrar_msj: true,
    productos: prods,
  });
});

//Ruta para VER LOS PEDIDOS
app.get("/carrito", async function (req, res) {
  var documentos = await model_order.find();
  res.render("carrito", { pedidos: documentos });
});

//Ruta para ELIMINAR UN PEDIDO
app.get("/eliminar/:id_pedido", async function (req, res) {
  var id = req.params.id_pedido;
  await model_order.findByIdAndRemove(id);
  res.redirect("/carrito");
});

//Ruta para Filtrar por CATEGORÍA
app.get("/categoria/:cat", async function (req, res) {
  var categ = req.params.cat;
  var prods = await model_product.find({ categoria: categ });
  res.render("index", {
    productos: prods,
    mostrar_msj: false,
  });
});

//Ruta para filtrar los resultados de la busqueda
app.post("/buscar", async function (req, res) {
  var filtro = req.body.filtro;
  var valor = req.body.busqueda;

  var obj;

  //productos.find({ titulo: { $regex: /abc/i } })

  if (filtro == "prod") {
    obj = { producto: { $in: [new RegExp(`${valor}`, "i")] } };
  } else if (filtro == "precio") {
    obj = { precio: { $lte: parseInt(valor) } };
  } else if (filtro == "cate") {
    obj = { categoria: { $regex: valor, $options: "$i" } };
  } else {
    //Ya vemos
    // coleccion.find({ $or: [{},{}] })
    obj = {
      $or: [
        { producto: { $regex: valor, $options: "$i" } },
        { descripcion: { $regex: valor, $options: "$i" } },
        { categoria: { $regex: valor, $options: "$i" } },
      ],
    };
  }

  var prods = await model_product.find(obj).sort({ precio: -1 });
  res.render("index", {
    productos: prods,
    mostrar_msj: false,
  });
});

app.listen(3000);
