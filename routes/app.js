const express = require("express");

//inicializar variables

const app = express();
app.get("/", (req, res, next) => {
  res.status(200).json({
    ok: true,
    mensaje: "respuesta de servidor correcta"
  });
});
module.exports = app;
