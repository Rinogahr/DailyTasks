const pessoasModels = require('../models/pessoasModels')
module.exports = {
    allGet: function( req, res ){
        res.status('200').json({
            error: false,
            valor: pessoasModels.PessoasModelo
        })
    },
    
    getId: function( req, res ){
        res.status('200').json({
            error: false,
            mensage: "Segunda rota criada no padrão MVC GET ID",
            id: 22,
        })
    }
}