const {pessoasAll} = require('../models/pessoasModels');

module.exports = {
    allGet: function( req, res ){
        res.status('200').send(pessoasAll);
    },    
    
    getNome: function( req, res ){
       var nome = req.params.nome;
       console.log('req >>', req.params.nome);
    //    if(nome == pessoasAll.nome){
    //     res.status('401').send('Não existe essa pessoa cadastrada') ;
    //    }
      let firstPessoa =  pessoasAll.find( (a) => a.nome === nome);
      res.status('200').send(firstPessoa) ;

    },
    
    getNomeQuery: function( req, res ){
       var nome = req.query.nome;
       console.log('req >>', req.params.nome);
    //    if(nome == pessoasAll.nome){
    //     res.status('401').send('Não existe essa pessoa cadastrada') ;
    //    }
      let firstPessoa =  pessoasAll.find( (a) => a.nome === nome);
      res.status('200').send(firstPessoa) ;

    }
}