const express = require('express');
const Routers = express.Router();
const usuarioConroller = require('../controllers/Usuario-Conroller.js');

Routers.get('/user', usuarioConroller.index);

Routers.get('/user/:id', usuarioConroller.show); //http://localhost:3333/user/52 <-id

Routers.get('/jwtoken/:id', usuarioConroller.jwToken);

Routers.post('/criptografar/', usuarioConroller.criptografar);

Routers.post('/user/new', usuarioConroller.store);

Routers.put('/user/up', usuarioConroller.update);

Routers.delete('/user/del', usuarioConroller.delete);


module.exports = Routers;