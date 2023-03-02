const express = require('express');
const usuarioRouters = express.Router();
const usuarioConroller = require('../controllers/Usuario-Conroller.js');

usuarioRouters.get('/', usuarioConroller.index);

usuarioRouters.get('/user/:id', usuarioConroller.show);

usuarioRouters.get('/user/teste', usuarioConroller.teste);

usuarioRouters.post('/user/new', usuarioConroller.store);

usuarioRouters.put('/user/up', usuarioConroller.update);

usuarioRouters.delete('/user/del', usuarioConroller.delete);


module.exports = usuarioRouters;