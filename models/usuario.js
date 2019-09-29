const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
  nombre: { type: String, required: [true, "El nombre es obligatorio"] },
  email: {
    type: String,
    unique: true,
    required: [true, "El nombre es obligatorio"]
  },
  password: { type: String, required: [true, "El nombre es obligatorio"] },
  img: { type: String, required: false },
  rol: { type: String, required: true, default: "USER_ROLE" }
});
module.exports = mongoose.model("Usuario", usuarioSchema);
