const dataPessoas = require('../../data/data.json');

export class  PessoasModelo  {
    
    // atributos
    nome

    constructor(nome) {
        this.nome = nome
    }

    allPessoas(dataPessoas){
        return  dataPessoas
    }
}