const express = require('express');
const routersPessoas = express.Router();
const controllersPessoas = require('../controllers/pessoaConroller');


routersPessoas.get('/', controllersPessoas.allGet);
routersPessoas.get('/nome', controllersPessoas.getId);

routersPessoas.get('/nome', function( req, res ){
    console.log('entrando no controler passando ID');
});

module.exports = routersPessoas;