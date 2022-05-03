var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var mod_tarea = new Schema({
  nombre: String,
  descripcion: {
    type: String,
    default: "...",
  },
  prioridad: String,
  estado: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Tareas", mod_tarea);
