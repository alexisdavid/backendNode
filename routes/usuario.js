const express = require("express");

//inicializar variables

const app = express();

// importar models de usuriario

const Usuario = require("../models/usuario");

//============================
// obtener los usuarios
// ==========================
app.get("/", (req, res, next) => {
  Usuario.find({}, "nombre email img rol").exec((err, usuarios) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        errors: "error de servidor"
      });
    }
    res.status(200).json({
      ok: true,
      usuarios: usuarios
    });
  });
});
//============================
// crear un usuario
// ==========================

app.post("/", (req, res) => {
  let body = req.body;
  const usuario = new Usuario({
    nombre: body.nombre,
    email: body.email,
    password: body.password,
    img: body.img,
    rol: body.rol
  });
  usuario.save((err, usuarioGuardado) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        mensaje: "error de servidor",
        errors: err
      });
    }
    res.status(201).json({
      ok: true,
      usuarios: usuarioGuardado
    });
  });
});

module.exports = app;
