//Instanciamos el paquete Mongoose y utilziamos el Schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Creamos el "esqueleto" (modelo/schema) de la coleccion
var Ejemplo = new Schema({
  nombre: String,
  apellido: String,
  edad: Number,
  estado: {
    type: Boolean,
    default: false,
  },
  pais: {
    type: String,
    default: "Colombia",
  },
});

//Exportamos el módulo que acabamos de crear
module.exports = mongoose.model("usuarios", Ejemplo);
