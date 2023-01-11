module.exports = {
    allGet: function( req, res ){
        console.log('entrando no controler');
    },
    
    getId: function( req, res ){
        res.status('200').json({
            error: false,
            mensage: "Segunda rota criada no padrão MVC GET ID",
            id: 22,
        })
    }
}