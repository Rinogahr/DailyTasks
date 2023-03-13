const UsuarioRepository = require("../repository/Usuario-Repository");


class UsuarioController{

  async index(req,res) {

        let resultBD = await UsuarioRepository.usuarioFindAll();

        return  res.json({
            status: 200,
            mensage: "Consulta realizada com sucesso!",
            resultBD: resultBD
           })
        }

   async show(req,res) {

        let resultBD = await UsuarioRepository.usuarioFindOneById(req.params.id);

        return  res.status(200).send(resultBD);
    }

   async teste(req,res) {
        return  res.json({
            mensage: (`Entrei na rota teste, rota apenas para teste`)
           })
    }

    async jwToken(req,res) {
        return  resultBD = await UsuarioRepository.jwToken(req.params.id);
    }

   async store(req,res) {

        let resultBD =  await UsuarioRepository.createNewUsuario(req.body);

        return  res.status(200).send(resultBD);
    }

    update(req,res) {
        return  res.json({
            mensage: (`Entrei na rota update, rota para atualizar o usuário`),
            result: req.body
           })
    }

    delete(req,res) {
        return  res.json({
            mensage: (`Entrei na rota delete, rota para deletar o usuário`),
            result: req.body
           })
    }

    async criptografar(req,res){
        let dados =  await UsuarioRepository.criptografar(req.body);
        return  dados;
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