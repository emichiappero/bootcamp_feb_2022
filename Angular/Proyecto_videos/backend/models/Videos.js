var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var videos = new Schema({
  titulo: String,
  url: String,
  imagen: String,
  categoria: String,
  origen: String,
  estado: Boolean,
  fecha: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Videos", videos);
