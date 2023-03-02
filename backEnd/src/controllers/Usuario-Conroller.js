const {querySync} = require("../../data/connection-mysql");


class UsuarioController{

 async  index(req,res) {
            const sql = `SELECT id, nome,email,sexo,login, senha, fotoId FROM usuario`;

        const result = await  querySync(sql)

                // if(error){
                //     res.json({
                //         status: 404,
                //         mensage: "Erro ao tentar consultar no banco de dados",
                //         erro: error
                //     });
                // }else{
                //     res.json({
                //         status: 200,
                //         mensage: "Consulta realizada com sucesso !",
                //         result: result
                //     })
                // }
                console.log(result);
        }

    show(req,res) {
        res.send(`Rota que irá trazer usuários pesquisando por id o id passao foi ${req.query.id}`);
    }

    store(req,res) {}
    update(req,res) {}
    delete(req,res) {}

    teste(req,res) {
        res.send('entrando no controler passando ID,');
    }

}


module.exports = new UsuarioController();


// module.exports = {
//     allGet: function( req, res ){
//         console.log('entrando no controler');
//     },

//     getId: function( req, res ){
//         res.status('200').json({
//             error: false,
//             mensage: "Segunda rota criada no padrão MVC GET ID",
//             id: 22,
//         })
//     }
// }