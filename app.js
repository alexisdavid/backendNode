// Requires (importacion de librerias)

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//inicializar variables

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importar rutas
const appRoutes = require("./routes/app");
const usuarioRoutes = require("./routes/usuario");

// conexion bd
mongoose.connection.openUri(
  "mongodb://localhost:27017/hospitalDB",
  (err, response) => {
    if (err) throw err;
    console.log("Base de datos: \x1b[32m%s\x1b[0m", " online");
  }
);

// Rutas

app.use("/usuario", usuarioRoutes);
app.use("/", appRoutes);
// escuchar peticiones

app.listen(3000, () => {
  console.log("servidor expres: \x1b[32m%s\x1b[0m", " online");
});
