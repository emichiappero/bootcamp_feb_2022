var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pedido = new Schema({
  id_producto: String,
  nombre_producto: String,
  cantidad: Number,
  precio_unitario: Number,
  total: Number,
  fecha: String,
  estado: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("pedidos", pedido);
