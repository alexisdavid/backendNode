// Requires (importacion de librerias)

const express = require("express");
const mongoose = require("mongoose");

//inicializar variables

const app = express();
// conexion bd
mongoose.connection.openUri(
  "mongodb://localhost:27017/hospitalDB",
  (err, response) => {
    if (err) throw err;
    console.log("Base de datos: \x1b[32m%s\x1b[0m", " online");
  }
);

// escuchar peticiones

// Rutas

app.get("/", (req, res, next) => {
  res.status(404).json({
    ok: true,
    mensaje: "respuesta de servidor correcta"
  });
});

app.listen(3001, () => {
  console.log("servidor expres: \x1b[32m%s\x1b[0m", " online");
});
