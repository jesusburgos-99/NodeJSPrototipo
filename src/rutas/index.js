//const router = require('express').Router();

const express = require('express');
const RutasPersona = express.Router();
const Controlador = require('../controlador/controlador');
RutasPersona.get('/', Controlador.Index);
RutasPersona.get('/listar', Controlador.Listar);
RutasPersona.get('/registrar', Controlador.Registrar);
RutasPersona.post('/agregar', Controlador.Guardar);
RutasPersona.get('/eliminar/:id', Controlador.Eliminar);
RutasPersona.get('/actualizar/:id', Controlador.Editar);
RutasPersona.post('/actualizar/:id', Controlador.Actualizar);


module.exports = RutasPersona;

