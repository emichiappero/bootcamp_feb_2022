var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var producto = new Schema({
  producto: String,
  imagen: String,
  descripcion: String,
  precio: Number,
  categoria: String,
});

module.exports = mongoose.model("productos", producto);
